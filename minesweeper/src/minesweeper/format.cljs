(ns minesweeper.format
  "Handle translation from grid"
  (:require [minesweeper.game :refer [neighbors width height]]))

(defn ->cell
  "Based on the state of an index, yield a description map for it."
  [{:keys [won? failed? bomb? marked uncovered] :as grid} index]
  (assoc
   (cond
     failed?
     {:type (when (bomb? index) :bomb) :class "standard"}

     (marked index)
     {:type :marked :class "standard"}

     (uncovered index)
     (let [ncount (neighbors grid index)]
       (if (zero? ncount)
         {:class "clear"}
         {:type :neighbor :class (str ncount)}))

     :else
     {:class "standard"})
   :index index))

(defn ->rows
  "Yield a list of formatted rows from a plain grid."
  [grid]
  (partition width (map (partial ->cell grid) (range (* width height)))))
