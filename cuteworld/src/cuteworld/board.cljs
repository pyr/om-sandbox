(ns cuteworld.board
  (:require [om.core         :as om]
            [om.dom          :as dom :include-macros true]))

(def app-state
  (atom {:gems   (->> (interleave
                       (repeatedly #(let [pos (inc (rand-int 48))]
                                      [(quot pos 7) (rem pos 7)]))
                       (cycle [:gem1 :gem2 :gem3]))
                      (partition 2))
         :player [0 0]}))

(defn class-line
  [[x y] type]
  (str "row" (inc x) " col" (inc y) " " (name type)))

(defn board
  [{:keys [gems player touch]} owner]
  (reify
    om/IRender
    (render [this]
      (dom/div nil
               (dom/span #js {:className (apply class-line (first gems))})
               (dom/span #js {:className (class-line player :player)})))))

(defn process-event
  [{:keys [gems player touch]} dir]
  (let [px   (case dir
               :up   (-> player first dec (max 0))
               :down (-> player first inc (min 6))
               (first player))
        py   (case dir
               :left  (-> player second dec (max 0))
               :right (-> player second inc (min 6))
               (second player))]
    {:gems (if (= (ffirst gems) [px py])
             (drop-while (comp (partial = [px py]) first) (rest gems))
             gems)
     :touch touch
     :player [px py]}))

(defn touch-start!
  [e]
  (.-preventDefault e)
  (.-stopPropagation e)
  (let [to      (aget (.-changedTouches e) 0)
        tx      (-> to .-clientX js/parseInt)
        ty      (-> to .-clientY js/parseInt)]
    (swap! app-state assoc :touch [tx ty])))

(defn touch-end!
  [e]
  (.-preventDefault e)
  (.-stopPropagation e)
  (let [to      (aget (.-changedTouches e) 0)
        tx      (-> to .-clientX js/parseInt)
        ty      (-> to .-clientY js/parseInt)
        [px py] (:touch @app-state)
        offx    (- tx px)
        offy    (- ty py)
        vert?   (pos? (- (js/Math.abs offy) (js/Math.abs offx)))]
    (swap! app-state
           process-event
           (if vert?
             (if (pos? offy) :down :up)
             (if (pos? offx) :right :left)))))

(defn touch-move!
  [e]
  (.-preventDefault e)
  (.-stopPropagation e))

(defn key-down!
  [e]
  (let [code->key {37 :left 38 :up 39 :right 40 :down}]
    (swap! app-state process-event (-> e .-keyCode code->key))))

(om/root board app-state {:target (. js/document (getElementById "app"))})

(.ontouchmove js/document touch-move!)

(.addEventListener
 js/window "load"
 (fn [_]
   (.addEventListener js/window "keydown" key-down!)
   (.addEventListener js/window "touchstart" touch-start!)
   (.addEventListener js/window "touchmove" touch-move!)
   (.addEventListener js/window "touchend" touch-end!)))
