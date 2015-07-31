(ns jobs.views
  "Simple components which implement the three views in our app.
   Sablono is leveraged to provide a hiccup like templating language for
   DOM elements"
  (:require [jobs.router     :refer [redirect]]
            [sablono.core    :as html :refer-macros [html]]
            [om.core         :as om]
            [om-tools.core   :refer-macros [defcomponent]]))

(defn event->state
  "Helper function to set local component state"
  [owner k event]
  (om/set-state! owner [k] (-> event .-target .-value)))

(defcomponent job
  "A job view is given the full app-state and needs to fetch
   the ID to display in the router's params."
  [app owner]
  (render
   [this]
   (let [id  (get-in app [:router :params :id])
         job (first (filter (comp (partial = id) :id) (:jobs app)))]
     (html
      [:div {:class "panel panel-default"}
       [:div {:class "panel-heading"}
        "Position: " (:title job) " at " (:company job)]
       [:div {:class "panel-body"} (:desc job)]]))))

(defcomponent job-post
  "This view leverages component state to keep track of the variables describing
   the job to add to the database.

   The submit action sends these variables to the jobs model by way of the `create!`
   function."
  [app owner]
  (render-state
   [this {:keys [title company desc] :as state}]
   (let [create! (get app :create!)]
     (html
      [:div {:class "panel panel-default"}
       [:div {:class "panel-heading"}
        [:h4 "New Job Offer"]]
       [:div {:class "panel-body"}
        [:form {:class "form-horizontal"}
         [:div {:class "form-group"}
          [:label {:class "col-sm-2 control-label"} "title"]
          [:div {:class "col-sm-10"}
           [:input {:type "text"
                    :class "form-control"
                    :value title
                    :on-change (partial event->state owner :title)}]]]
         [:div {:class "form-group"}
          [:label {:class "col-sm-2 control-label"} "company"]
          [:div {:class "col-sm-10"}
           [:input {:type "text"
                    :class "form-control"
                    :value company
                    :on-change (partial event->state owner :company)}]]]
         [:div {:class "form-group"}
          [:label {:class "col-sm-2 control-label"} "description"]
          [:div {:class "col-sm-10"}
           [:textarea {:class "form-control"
                       :value desc
                       :on-change (partial event->state owner :desc)}]]]
         [:div {:class "form-group"}
          [:div {:class "col-sm-2 col-sm-offset-2 pull-right"}
           [:input {:type     "submit"
                    :class    "form-control"
                    :on-click  (fn [& _]
                                 ((:create! @app) state)
                                 (redirect "/"))}]]]]]]))))

(defcomponent job-line
  "Add a line to the job overview"
  [{:keys [url title company desc delete!]} owner]
  (render
   [this]
   (html
    [:tr
     [:td company]
     [:td [:a {:href url} title]]
     [:td
      [:button {:type "button"
                :class "btn btn-xs btn-danger pull-right"
                :on-click delete!}
       "delete"]]])))

(defcomponent jobs
  "Build a table showing all jobs matching a filter.
   The filter is built from the value of the filter field in the
   panel header.

   The list of matching job line is then sent to the `job-line` component"
  [app owner]
  (render
   [this]
   (html
    [:div
     [:div {:class "panel panel-default"}
      [:div {:class "panel-heading"}
       [:div {:class "row"}
        [:div {:class "col-sm-2"}
         [:h4 "Job Listing"]]]]
      [:div {:class "panel-body"}
       [:table {:class "table table-striped"}
        [:thead
         [:tr [:th "Company"] [:th {:colSpan "2"} "Job Title"]]]
        [:tbody
         (om/build-all job-line (:jobs app))]]]]])))
