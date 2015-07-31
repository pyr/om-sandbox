(defproject minesweeper "0.3.0"
  :description "minesweeper"
  :url "https://github.com/pyr/minesweeper"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :plugins [[lein-cljsbuild "1.0.6"]]
  :dependencies [[org.clojure/clojure       "1.7.0-RC1"]
                 [org.clojure/clojurescript "0.0-3308"]
                 [org.omcljs/om             "0.8.8"]]
  :clean-targets ^{:protect false} ["resources/public/js"]
  :cljsbuild
  {:builds [{:id "dev"
             :source-paths ["src/"]
             :compiler
             {:main       minesweeper.client
              :asset-path "js/compiled/app"
              :output-to  "resources/public/js/compiled/app.js"
              :output-dir "resources/public/js/compiled/app"
              :source-map-timestamp true}}]})
