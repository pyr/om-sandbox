(ns jobs.frontend
  "Entry namespace for the frontend app."
  (:require [om.core       :as om]
            [jobs.views    :as views]
            [jobs.model    :as model]
            [jobs.router   :as router]))

(defonce ^{:doc "Hold the entire state for our application."}
  app-state
  (atom {}))

(def routes
  "Our application's route-map"
  ["/"        views/jobs
   "/job/:id" views/job
   "/post"    views/job-post])

;; Initialize our model service
(model/jobs app-state)

;; Initialize our router and use the resulting
;; component as the root component bound to the
;; "app" element on the DOM

(let [router (router/init routes app-state)
      target {:target (.getElementById js/document "app")}]
  (om/root router app-state target))
