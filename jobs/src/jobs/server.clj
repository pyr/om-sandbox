(ns jobs.server
  "Single namespace REST api for a minimal job board.
   The API does not do any sanitization and does not
   persist to disk or to a database, it is only provided
   for demonstration purposes.

   To provide in-memory persistence, we rely on a single atom"
  (:gen-class)
  (:require [ring.middleware.json   :as json]
            [compojure.core         :refer [GET POST DELETE defroutes]]
            [compojure.route        :refer [resources not-found]]
            [compojure.handler      :refer [api]]
            [ring.util.response     :refer [response redirect]]
            [qbits.jet.server       :refer [run-jetty]]))

(def db "atom holding our job list" (atom {}))

(defn create!
  "Insert a new job with a random ID, yields the updated job map"
  [job]
  (let [id (str (java.util.UUID/randomUUID))]
    (swap! db assoc id (assoc job "url" (str "/jobs/" id)))))

(defn delete!
  "Remove a job, yields the updated map"
  [id]
  (swap! db dissoc id))

(defroutes routes
  "Main router: 3 REST(ish) routes and resource handlers."
  (GET  "/jobs"       []   (response @db))
  (POST "/jobs"       req  (response (create! (:body req))))
  (DELETE "/jobs/:id" [id] (response (delete! id)))
  (GET "/"            []   (redirect "/index.html"))
  (resources               "/")
  (not-found               "<html><h2>404</h2></html>"))

(defn run [& {:keys [port join?] :or {port 8080 join? false}}]
  "Start a server to serve routes and the frontend application."
  (print "Starting web server on port" port ".\n")
  (run-jetty {:ring-handler (-> (api routes)
                                (json/wrap-json-body)
                                (json/wrap-json-response))
              :join?        join?
              :port         (Integer. port)}))

(defn -main [& [port]]
  "Entry point when run from a jar. Simply calls `run` and ensure
   we won't return until the server stop by joining the server thread."
  (run :port (or port 8080) :join? true))
