(ns jobs.utils
  "Tiny utility functions use in other namespaces"
  (:require [clojure.string :refer [join]]))

(defn target-by-id
  "Given a DOM id, return an element when found, using
   the map structure om expects"
  [id]
  {:target (. js/document (getElementById (name id)))})
