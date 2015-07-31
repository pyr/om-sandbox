goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.object', 'goog.string.StringBuffer', 'goog.array']);
goog.addDependency("../minesweeper/game.js", ['minesweeper.game'], ['cljs.core']);
goog.addDependency("../react.inc.js", ['cljsjs.react'], []);
goog.addDependency("../om/dom.js", ['om.dom'], ['cljs.core', 'goog.object', 'cljsjs.react']);
goog.addDependency("../om/core.js", ['om.core'], ['goog.dom', 'cljs.core', 'om.dom', 'cljsjs.react', 'goog.ui.IdGenerator']);
goog.addDependency("../minesweeper/board.js", ['minesweeper.board'], ['minesweeper.game', 'cljs.core', 'om.dom', 'om.core']);
goog.addDependency("../minesweeper/client.js", ['minesweeper.client'], ['minesweeper.game', 'cljs.core', 'om.core', 'minesweeper.board']);
