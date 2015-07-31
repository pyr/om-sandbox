if(typeof goog == "undefined") document.write('<script src="js/compiled/app/goog/base.js"></script>');
document.write('<script src="js/compiled/app/cljs_deps.js"></script>');
document.write('<script>if (typeof goog != "undefined") { goog.require("minesweeper.client"); } else { console.warn("ClojureScript could not load :main, did you forget to specify :asset-path?"); };</script>');
