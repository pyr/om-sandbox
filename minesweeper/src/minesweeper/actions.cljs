(ns minesweeper.actions
  "Expose stateful actions on an atom-backed grid."
  (:require [minesweeper.game :as game]))

(defonce grid
  (atom (game/random-grid)))

(defn refresh
  "Generate a new grid."
  []
  (reset! grid (game/random-grid)))

(defn mark!
  "Mark a tile."
  [index]
  (swap! grid game/mark index))

(defn uncover!
  "Uncover a tile."
  [index]
  (swap! grid game/uncover index))
