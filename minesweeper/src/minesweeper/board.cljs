(ns minesweeper.board
  "View layer for our board."
  (:require [minesweeper.game    :as game]
            [minesweeper.actions :as actions]
            [minesweeper.format  :as format]
            [om.core             :as om]
            [om.dom              :as dom]))

(defn cell
  "Cell component."
  [{:keys [class type index]} owner]
  (om/component
   (dom/div #js {:className     (str "grid-cell grid-cell-" class)
                 :onClick       #(actions/mark! index)
                 :onContextMenu (fn [e] (.preventDefault e)
                                  (actions/uncover! index))}
            (cond
              (= type :marked)   (dom/i #js {:className "fa fa-check fa-2x"})
              (= type :bomb)     (dom/i #js {:className "fa fa-bomb fa-1x"})
              (= type :neighbor) class))))

(defn row
  "Row component."
  [cells owner]
  (om/component
   (apply dom/div #js {:className "grid-row"} (om/build-all cell cells))))

(defn board
  "Grid component."
  [app owner]
  (om/component
   (apply dom/div #js {:className "grid"}
          (om/build-all row (format/->rows app)))))

(defn root
  "Root react component. Shows the grid, a refresh button an optional
   messages."
  [app owner]
  (om/component
   (dom/div #js {:className "board"}
            (om/build board app)
            (dom/a #js {:className "refresh-button"
                        :onClick actions/refresh}
                   "Refresh")
            (when (:failed? app)
              (dom/p #js {:className "game-message"} "You Lost!"))
            (when (game/solved? app)
              (dom/p #js {:className "game-message"} "You Won!")))))
