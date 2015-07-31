(ns minesweeper.client
  (:require [minesweeper.game  :as game]
            [minesweeper.board :as board]
            [om.core           :as om]))

(enable-console-print!)

(let [target {:target (. js/document (getElementById "app"))}]
  (om/root board/root game/state target))
