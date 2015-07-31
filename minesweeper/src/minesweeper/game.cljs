(ns minesweeper.game
  "Purely functional game engine for minesweeper.")

(def width     "Grid width"                  8)
(def height    "Grid height"                 8)
(def bombcount "Number of mines to discover" 10)

(defn random-grid
  "Build a random grid."
  []
  (let [grid-span (* width height)
        make-bomb (partial rand-int grid-span)
        bomb?     (->> (repeatedly make-bomb)
                       (distinct)
                       (take bombcount)
                       (set))]
    {:bomb? bomb? :uncovered #{} :marked #{}}))

(defn pos->index
  "Given an x/y position, yield an index."
  [[row col]]
  (+ (* row width) col))

(defn index->pos
  "Given an index, yield an x/y position."
  [index]
  [(quot index height) (rem index height)])

(defn valid-pos?
  "Ensure that a position is a valid one in the grid."
  [[row col]]
  (and (<= 0 row (dec height))
       (<= 0 col (dec height))))

(defn adjacents
  "Find out adjacent tiles in the grid."
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
  "Count bombs in adjacent tiles."
  [{:keys [bomb?]} index]
  (->> (adjacents index)
       (filter bomb?)
       (count)))

(defn explore
  "Reveal the number of bombs in adjacent tiles,
   if zero, expand uncover more until non-zero
   areas are found."
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
  "Mark a tile as being a probable bomb."
  [{:keys [bomb? uncovered marked] :as grid} index]
  (cond
    (marked index)    (update grid :marked disj index)
    (uncovered index) grid
    :else             (update grid :marked conj index)))

(defn uncover
  "Reveal a tile. End game if it is a bomb, otherwise
   explore it."
  [{:keys [bomb?] :as grid} index]
  (if (bomb? index)
    (assoc grid :failed? true)
    (explore grid index)))

(defn solved?
  "Predicate to check for a minesweeped grid."
  [{:keys [bomb? uncovered marked] :as grid}]
  (and (every? bomb? marked)
       (= (count bomb?) (count marked))
       (= (count uncovered) (- (* width height) bombcount))))
