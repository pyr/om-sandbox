(ns jobs.router
  "Simple component based router.
   This router leverages secretary for route formats similar to compojure's

   The logic used is that routes use a keyword to represent their name which
   will be assoc'd to the app-state in at the [:router :view] key.

   A component is also provided which will lookup that value and build the
   DOM with the appropriate component.
"
  (:require [goog.events            :as events]
            [om.core                :as om]
            [goog.history.EventType :as EventType]
            [secretary.core         :refer [add-route! dispatch!]]
            [sablono.core           :refer-macros [html]])
  (:import goog.History))

(defonce ^{:doc "The history throughout this application"}
  history
  (History.))

(defn init
  "Yield a component builder for a vector of routes.
   The vector is expected to contain compojure type routes
   followed by components:

       [\"/\"         index-component
        \"/foo\"      foo-component
        \"/bar/:arg\" bar-with-arg-component]

   In the app-state, a map will be assoc'd to the `:router` key,
   containing the following keys:

   - `:view`: the component to dispatch to
   - `:params`: a map of params for the route
"
  [routes app]
  (doseq [[route view] (partition 2 routes)]
    (add-route! route #(swap! app assoc :router {:view view :params %})))
  (goog.events/listen history EventType/NAVIGATE #(-> % .-token dispatch!))
  (.setEnabled history true)
  (fn [app owner]
    (reify om/IRender
      (render [this]
        (om/build (get-in app [:router :view]) app)))))

(defn redirect
  "Jump to the given location"
  [location]
  (.setToken history location))
