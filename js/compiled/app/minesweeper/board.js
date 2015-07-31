// Compiled by ClojureScript 0.0-3308 {}
goog.provide('minesweeper.board');
goog.require('cljs.core');
goog.require('minesweeper.game');
goog.require('om.core');
goog.require('om.dom');
minesweeper.board.cell = (function minesweeper$board$cell(p__6638,owner){
var map__6643 = p__6638;
var map__6643__$1 = ((cljs.core.seq_QMARK_.call(null,map__6643))?cljs.core.apply.call(null,cljs.core.hash_map,map__6643):map__6643);
var class$ = cljs.core.get.call(null,map__6643__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var type = cljs.core.get.call(null,map__6643__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var index = cljs.core.get.call(null,map__6643__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
if(typeof minesweeper.board.t6644 !== 'undefined'){
} else {

/**
* @constructor
*/
minesweeper.board.t6644 = (function (cell,p__6638,owner,map__6643,class$,type,index,meta6645){
this.cell = cell;
this.p__6638 = p__6638;
this.owner = owner;
this.map__6643 = map__6643;
this.class$ = class$;
this.type = type;
this.index = index;
this.meta6645 = meta6645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
minesweeper.board.t6644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__6643,map__6643__$1,class$,type,index){
return (function (_6646,meta6645__$1){
var self__ = this;
var _6646__$1 = this;
return (new minesweeper.board.t6644(self__.cell,self__.p__6638,self__.owner,self__.map__6643,self__.class$,self__.type,self__.index,meta6645__$1));
});})(map__6643,map__6643__$1,class$,type,index))
;

minesweeper.board.t6644.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__6643,map__6643__$1,class$,type,index){
return (function (_6646){
var self__ = this;
var _6646__$1 = this;
return self__.meta6645;
});})(map__6643,map__6643__$1,class$,type,index))
;

minesweeper.board.t6644.prototype.om$core$IRender$ = true;

minesweeper.board.t6644.prototype.om$core$IRender$render$arity$1 = ((function (map__6643,map__6643__$1,class$,type,index){
return (function (this__6298__auto__){
var self__ = this;
var this__6298__auto____$1 = this;
return React.DOM.div({"className": [cljs.core.str("grid-cell grid-cell-"),cljs.core.str(self__.class$)].join(''), "onClick": ((function (this__6298__auto____$1,map__6643,map__6643__$1,class$,type,index){
return (function (){
return cljs.core.swap_BANG_.call(null,minesweeper.game.state,minesweeper.game.mark,self__.index);
});})(this__6298__auto____$1,map__6643,map__6643__$1,class$,type,index))
, "onContextMenu": ((function (this__6298__auto____$1,map__6643,map__6643__$1,class$,type,index){
return (function (ev){
ev.preventDefault();

return cljs.core.swap_BANG_.call(null,minesweeper.game.state,minesweeper.game.uncover,self__.index);
});})(this__6298__auto____$1,map__6643,map__6643__$1,class$,type,index))
},((cljs.core._EQ_.call(null,self__.type,new cljs.core.Keyword(null,"marked","marked",1403026280)))?React.DOM.i({"className": "fa fa-check fa-2x"}):((cljs.core._EQ_.call(null,self__.type,new cljs.core.Keyword(null,"bomb","bomb",-1302543521)))?React.DOM.i({"className": "fa fa-bomb fa-1x"}):((cljs.core._EQ_.call(null,self__.type,new cljs.core.Keyword(null,"neighbor","neighbor",-470328172)))?self__.class$:null))));
});})(map__6643,map__6643__$1,class$,type,index))
;

minesweeper.board.t6644.getBasis = ((function (map__6643,map__6643__$1,class$,type,index){
return (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"cell","cell",-1890190685,null),new cljs.core.Symbol(null,"p__6638","p__6638",-1639837569,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"map__6643","map__6643",-455178404,null),new cljs.core.Symbol(null,"class","class",-390430469,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"index","index",108845612,null),new cljs.core.Symbol(null,"meta6645","meta6645",-506289605,null)], null);
});})(map__6643,map__6643__$1,class$,type,index))
;

minesweeper.board.t6644.cljs$lang$type = true;

minesweeper.board.t6644.cljs$lang$ctorStr = "minesweeper.board/t6644";

minesweeper.board.t6644.cljs$lang$ctorPrWriter = ((function (map__6643,map__6643__$1,class$,type,index){
return (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"minesweeper.board/t6644");
});})(map__6643,map__6643__$1,class$,type,index))
;

minesweeper.board.__GT_t6644 = ((function (map__6643,map__6643__$1,class$,type,index){
return (function minesweeper$board$cell_$___GT_t6644(cell__$1,p__6638__$1,owner__$1,map__6643__$2,class$__$1,type__$1,index__$1,meta6645){
return (new minesweeper.board.t6644(cell__$1,p__6638__$1,owner__$1,map__6643__$2,class$__$1,type__$1,index__$1,meta6645));
});})(map__6643,map__6643__$1,class$,type,index))
;

}

return (new minesweeper.board.t6644(minesweeper$board$cell,p__6638,owner,map__6643__$1,class$,type,index,null));
});
minesweeper.board.row = (function minesweeper$board$row(cells,owner){
if(typeof minesweeper.board.t6650 !== 'undefined'){
} else {

/**
* @constructor
*/
minesweeper.board.t6650 = (function (row,cells,owner,meta6651){
this.row = row;
this.cells = cells;
this.owner = owner;
this.meta6651 = meta6651;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
minesweeper.board.t6650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6652,meta6651__$1){
var self__ = this;
var _6652__$1 = this;
return (new minesweeper.board.t6650(self__.row,self__.cells,self__.owner,meta6651__$1));
});

minesweeper.board.t6650.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6652){
var self__ = this;
var _6652__$1 = this;
return self__.meta6651;
});

minesweeper.board.t6650.prototype.om$core$IRender$ = true;

minesweeper.board.t6650.prototype.om$core$IRender$render$arity$1 = (function (this__6298__auto__){
var self__ = this;
var this__6298__auto____$1 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "grid-row"},om.core.build_all.call(null,minesweeper.board.cell,self__.cells));
});

minesweeper.board.t6650.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"row","row",1070392006,null),new cljs.core.Symbol(null,"cells","cells",655364705,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta6651","meta6651",-594153942,null)], null);
});

minesweeper.board.t6650.cljs$lang$type = true;

minesweeper.board.t6650.cljs$lang$ctorStr = "minesweeper.board/t6650";

minesweeper.board.t6650.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"minesweeper.board/t6650");
});

minesweeper.board.__GT_t6650 = (function minesweeper$board$row_$___GT_t6650(row__$1,cells__$1,owner__$1,meta6651){
return (new minesweeper.board.t6650(row__$1,cells__$1,owner__$1,meta6651));
});

}

return (new minesweeper.board.t6650(minesweeper$board$row,cells,owner,null));
});
minesweeper.board.board = (function minesweeper$board$board(app,owner){
if(typeof minesweeper.board.t6656 !== 'undefined'){
} else {

/**
* @constructor
*/
minesweeper.board.t6656 = (function (board,app,owner,meta6657){
this.board = board;
this.app = app;
this.owner = owner;
this.meta6657 = meta6657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
minesweeper.board.t6656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6658,meta6657__$1){
var self__ = this;
var _6658__$1 = this;
return (new minesweeper.board.t6656(self__.board,self__.app,self__.owner,meta6657__$1));
});

minesweeper.board.t6656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6658){
var self__ = this;
var _6658__$1 = this;
return self__.meta6657;
});

minesweeper.board.t6656.prototype.om$core$IRender$ = true;

minesweeper.board.t6656.prototype.om$core$IRender$render$arity$1 = (function (this__6298__auto__){
var self__ = this;
var this__6298__auto____$1 = this;
return cljs.core.apply.call(null,om.dom.div,{"className": "grid"},om.core.build_all.call(null,minesweeper.board.row,minesweeper.game.__GT_rows.call(null,self__.app)));
});

minesweeper.board.t6656.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta6657","meta6657",-891722402,null)], null);
});

minesweeper.board.t6656.cljs$lang$type = true;

minesweeper.board.t6656.cljs$lang$ctorStr = "minesweeper.board/t6656";

minesweeper.board.t6656.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"minesweeper.board/t6656");
});

minesweeper.board.__GT_t6656 = (function minesweeper$board$board_$___GT_t6656(board__$1,app__$1,owner__$1,meta6657){
return (new minesweeper.board.t6656(board__$1,app__$1,owner__$1,meta6657));
});

}

return (new minesweeper.board.t6656(minesweeper$board$board,app,owner,null));
});
minesweeper.board.root = (function minesweeper$board$root(app,owner){
if(typeof minesweeper.board.t6662 !== 'undefined'){
} else {

/**
* @constructor
*/
minesweeper.board.t6662 = (function (root,app,owner,meta6663){
this.root = root;
this.app = app;
this.owner = owner;
this.meta6663 = meta6663;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
minesweeper.board.t6662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6664,meta6663__$1){
var self__ = this;
var _6664__$1 = this;
return (new minesweeper.board.t6662(self__.root,self__.app,self__.owner,meta6663__$1));
});

minesweeper.board.t6662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6664){
var self__ = this;
var _6664__$1 = this;
return self__.meta6663;
});

minesweeper.board.t6662.prototype.om$core$IRender$ = true;

minesweeper.board.t6662.prototype.om$core$IRender$render$arity$1 = (function (this__6298__auto__){
var self__ = this;
var this__6298__auto____$1 = this;
return React.DOM.div({"className": "board"},om.core.build.call(null,minesweeper.board.board,self__.app),React.DOM.a({"className": "refresh-button", "onClick": minesweeper.game.refresh},"Refresh"),(cljs.core.truth_(new cljs.core.Keyword(null,"failed?","failed?",539733148).cljs$core$IFn$_invoke$arity$1(self__.app))?React.DOM.p({"className": "game-message"},"You Lost!"):null),(cljs.core.truth_(minesweeper.game.solved_QMARK_.call(null,self__.app))?React.DOM.p({"className": "game-message"},"You Won!"):null));
});

minesweeper.board.t6662.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.Symbol(null,"app","app",1079569820,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta6663","meta6663",404532046,null)], null);
});

minesweeper.board.t6662.cljs$lang$type = true;

minesweeper.board.t6662.cljs$lang$ctorStr = "minesweeper.board/t6662";

minesweeper.board.t6662.cljs$lang$ctorPrWriter = (function (this__4888__auto__,writer__4889__auto__,opt__4890__auto__){
return cljs.core._write.call(null,writer__4889__auto__,"minesweeper.board/t6662");
});

minesweeper.board.__GT_t6662 = (function minesweeper$board$root_$___GT_t6662(root__$1,app__$1,owner__$1,meta6663){
return (new minesweeper.board.t6662(root__$1,app__$1,owner__$1,meta6663));
});

}

return (new minesweeper.board.t6662(minesweeper$board$root,app,owner,null));
});

//# sourceMappingURL=board.js.map?rel=1433877690949