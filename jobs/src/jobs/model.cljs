(ns jobs.model
  "Model service which listens for events on a channel and
   takes appropriate actions."
  (:require-macros [cljs.core.async.macros :refer [go-loop]])
  (:require [cljs.core.async :refer [put! <! chan]]
            [ajax.core       :refer [GET DELETE POST]]))

(defn sanitize
  "Given a job description from the API, yield a keywordized map with
   a new key `delete!` which will schedule deletion of the item"
  [in [id {:strs [title company desc]}]]
  {:id      id
   :url     (str "#job/" id)
   :delete! (fn [& _] (put! in {:type :delete :id id}))
   :title   title
   :company company
   :desc    desc})

(defn updater
  "When given a full job map as the result of an AJAX call,
   update the app-state accordingly"
  [in app jobs]
  (swap! app assoc :jobs (mapv (partial sanitize in) jobs)))

(defn jobs
  "Start the model service. A channel is created to listen on
   incoming events. A go loop is started which dispatches based
   on the message contents to the appropriate handler.

   The app-state is also augmented with an initial job list result,
   And a function to create a new entry"
  [app]
  (let [in (chan)]
    (GET "/jobs" {:handler (partial updater in app)})

    (go-loop [{:keys [type id params]} (<! in)]
      (condp = type
        :delete (DELETE (str "/jobs/" id) {:handler (partial updater in app)})
        :post   (POST "/jobs" {:params  params
                               :handler (partial updater in app)
                               :format :json}))
      (recur (<! in)))
    (swap! app assoc :create!
           (fn [params] (put! in {:type :post :params params})))))
