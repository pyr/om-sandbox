(ns minesweeper.board
    (:require [minesweeper.game :as game]
              [om.core          :as om]
              [om.dom           :as dom]))

(defn cell
  [{:keys [class type index]} owner]
  (om/component
   (dom/div #js {:className (str "grid-cell grid-cell-" class)
                 :onClick (fn [] (swap! game/state game/mark index))
                 :onContextMenu (fn [ev]
                                  (.preventDefault ev)
                                  (swap! game/state game/uncover index))}
            (cond
              (= type :marked)   (dom/i #js {:className "fa fa-check fa-2x"})
              (= type :bomb)     (dom/i #js {:className "fa fa-bomb fa-1x"})
              (= type :neighbor) class))))

(defn row
  [cells owner]
  (om/component
   (apply dom/div #js {:className "grid-row"} (om/build-all cell cells))))

(defn board
  [app owner]
  (om/component
   (apply dom/div #js {:className "grid"}
          (om/build-all row (game/->rows app)))))

(defn root
  [app owner]
  (om/component
   (dom/div #js {:className "board"}
            (om/build board app)
            (dom/a #js {:className "refresh-button"
                        :onClick game/refresh}
                   "Refresh")
            (when (:failed? app)
              (dom/p #js {:className "game-message"} "You Lost!"))
            (when (game/solved? app)
              (dom/p #js {:className "game-message"} "You Won!")))))
