(defproject jobs "0.1.0"
  :description "demo om application"
  :url "https://github.com/pyr/om-jobs"

  :dependencies [[org.clojure/clojure       "1.6.0"]
                 [org.clojure/clojurescript "0.0-3126"]
                 [org.clojure/core.async    "0.1.346.0-17112a-alpha"]
                 [cc.qbits/jet              "0.6.1"]
                 [ring/ring-json            "0.3.1"]
                 [compojure                 "1.3.3"]
                 [org.omcljs/om             "0.8.8"]
                 [secretary                 "1.2.3"]
                 [sablono                   "0.3.4"]
                 [cljs-ajax                 "0.3.10"]
                 [prismatic/om-tools        "0.3.11"]]

  :main jobs.server
  :plugins [[lein-cljsbuild "1.0.5"]]
  :cljsbuild {:builds [{:id           "dev"
                        :source-paths ["src"]
                        :compiler
                        {:main          "jobs.frontend"
                         :output-to     "resources/public/js/app.js"
                         :output-dir    "resources/public/js"
                         :optimizations :none
                         :source-map    true}}]})
