(ns minesweeper.client
  "Main namespace. Bridges the views defined in minesweeper.board
   with state handling defined in actions."
  (:require [minesweeper.board   :as board]
            [minesweeper.actions :as actions]
            [om.core             :as om]))

(enable-console-print!)

(om/root board/root
         actions/grid
         {:target (.getElementById js/document "app")})
