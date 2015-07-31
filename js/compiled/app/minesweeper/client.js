// Compiled by ClojureScript 0.0-3308 {}
goog.provide('minesweeper.client');
goog.require('cljs.core');
goog.require('minesweeper.game');
goog.require('minesweeper.board');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
var target_6667 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null);
om.core.root.call(null,minesweeper.board.root,minesweeper.game.state,target_6667);

//# sourceMappingURL=client.js.map?rel=1433877690968