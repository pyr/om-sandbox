(ns minesweeper.game)

(def width 8)
(def height 8)
(def bombcount 10)

(defn random-grid
  []
  (let [grid-span (* width height)
        make-bomb (partial rand-int grid-span)
        bomb?     (->> (repeatedly make-bomb)
                       (distinct)
                       (take bombcount)
                       (set))]
    {:bomb? bomb? :uncovered #{} :marked #{}}))

(defn pos->index
  [[row col]]
  (+ (* row width) col))

(defn index->pos
  [index]
  [(quot index height) (rem index height)])

(defn valid-pos?
  [[row col]]
  (and (<= 0 row (dec height))
       (<= 0 col (dec height))))

(defn adjacents
  [index]
  (let [[row col] (index->pos index)
        positions [[(dec row) (dec col)]
                   [(dec row) col]
                   [(dec row) (inc col)]
                   [row (dec col)]
                   [row (inc col)]
                   [(inc row) (dec col)]
                   [(inc row) col]
                   [(inc row) (inc col)]]]
    (->> positions
         (filter valid-pos?)
         (map pos->index))))

(defn neighbors
  [{:keys [bomb?]} index]
  (->> (adjacents index)
       (filter bomb?)
       (count)))

(defn explore
  [{:keys [marked uncovered] :as grid} index]
  (let [ncount (neighbors grid index)
        grid   (-> grid
                   (update :uncovered conj index)
                   (update :marked disj index))
        known? (set (concat uncovered marked))]
    (if (zero? ncount)
      (reduce explore grid (remove known? (adjacents index)))
      grid)))

(defn mark
  [{:keys [bomb? uncovered marked] :as grid} index]
  (cond
    (marked index)    (update grid :marked disj index)
    (uncovered index) grid
    :else             (update grid :marked conj index)))

(defn uncover
  [{:keys [bomb?] :as grid} index]
  (if (bomb? index)
    (assoc grid :failed? true)
    (explore grid index)))

(defn solved?
  [{:keys [bomb? uncovered marked] :as grid}]
  (and (every? bomb? marked)
       (= (count bomb?) (count marked))
       (= (count uncovered) (- (* width height) bombcount))))

(defn ->cell
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
  [grid]
  (partition width (map (partial ->cell grid) (range (* width height)))))

(defonce state
  (atom (random-grid)))

(defn refresh
  []
  (reset! state (random-grid)))
