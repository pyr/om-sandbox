(defproject cuteworld "0.1.0"
  :description "simple game"
  :url "https://github.com/pyr/cuteworld"

  :dependencies [[org.clojure/clojure       "1.6.0"]
                 [org.clojure/clojurescript "0.0-2850"]
                 [org.clojure/core.async    "0.1.346.0-17112a-alpha"]
                 [org.omcljs/om             "0.8.8"]]

  :plugins [[lein-cljsbuild "1.0.4"]]
  :source-paths ["src"]
  :cljsbuild {
    :builds [{:id "cuteworld"
              :source-paths ["src"]
              :compiler {:main cuteworld.board
                         :output-to "app.js"
                         :output-dir "out"
                         :optimizations :none
                         :source-map true}}]})
