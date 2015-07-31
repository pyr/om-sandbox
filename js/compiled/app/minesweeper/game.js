// Compiled by ClojureScript 0.0-3308 {}
goog.provide('minesweeper.game');
goog.require('cljs.core');
minesweeper.game.width = (8);
minesweeper.game.height = (8);
minesweeper.game.bombcount = (10);
minesweeper.game.random_grid = (function minesweeper$game$random_grid(){
var grid_span = (minesweeper.game.width * minesweeper.game.height);
var make_bomb = cljs.core.partial.call(null,cljs.core.rand_int,grid_span);
var bomb_QMARK_ = cljs.core.set.call(null,cljs.core.take.call(null,minesweeper.game.bombcount,cljs.core.distinct.call(null,cljs.core.repeatedly.call(null,make_bomb))));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bomb?","bomb?",-1424520312),bomb_QMARK_,new cljs.core.Keyword(null,"uncovered","uncovered",-1950047645),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"marked","marked",1403026280),cljs.core.PersistentHashSet.EMPTY], null);
});
minesweeper.game.pos__GT_index = (function minesweeper$game$pos__GT_index(p__5382){
var vec__5384 = p__5382;
var row = cljs.core.nth.call(null,vec__5384,(0),null);
var col = cljs.core.nth.call(null,vec__5384,(1),null);
return ((row * minesweeper.game.width) + col);
});
minesweeper.game.index__GT_pos = (function minesweeper$game$index__GT_pos(index){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.quot.call(null,index,minesweeper.game.height),cljs.core.rem.call(null,index,minesweeper.game.height)], null);
});
minesweeper.game.valid_pos_QMARK_ = (function minesweeper$game$valid_pos_QMARK_(p__5385){
var vec__5387 = p__5385;
var row = cljs.core.nth.call(null,vec__5387,(0),null);
var col = cljs.core.nth.call(null,vec__5387,(1),null);
return ((((0) <= row)) && ((row <= (minesweeper.game.height - (1))))) && ((((0) <= col)) && ((col <= (minesweeper.game.height - (1)))));
});
minesweeper.game.adjacents = (function minesweeper$game$adjacents(index){
var vec__5389 = minesweeper.game.index__GT_pos.call(null,index);
var row = cljs.core.nth.call(null,vec__5389,(0),null);
var col = cljs.core.nth.call(null,vec__5389,(1),null);
var positions = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(row - (1)),(col - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(row - (1)),col], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(row - (1)),(col + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(col - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row,(col + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(row + (1)),(col - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(row + (1)),col], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(row + (1)),(col + (1))], null)], null);
return cljs.core.map.call(null,minesweeper.game.pos__GT_index,cljs.core.filter.call(null,minesweeper.game.valid_pos_QMARK_,positions));
});
minesweeper.game.neighbors = (function minesweeper$game$neighbors(p__5390,index){
var map__5392 = p__5390;
var map__5392__$1 = ((cljs.core.seq_QMARK_.call(null,map__5392))?cljs.core.apply.call(null,cljs.core.hash_map,map__5392):map__5392);
var bomb_QMARK_ = cljs.core.get.call(null,map__5392__$1,new cljs.core.Keyword(null,"bomb?","bomb?",-1424520312));
return cljs.core.count.call(null,cljs.core.filter.call(null,bomb_QMARK_,minesweeper.game.adjacents.call(null,index)));
});
minesweeper.game.explore = (function minesweeper$game$explore(p__5393,index){
var map__5395 = p__5393;
var map__5395__$1 = ((cljs.core.seq_QMARK_.call(null,map__5395))?cljs.core.apply.call(null,cljs.core.hash_map,map__5395):map__5395);
var grid = map__5395__$1;
var marked = cljs.core.get.call(null,map__5395__$1,new cljs.core.Keyword(null,"marked","marked",1403026280));
var uncovered = cljs.core.get.call(null,map__5395__$1,new cljs.core.Keyword(null,"uncovered","uncovered",-1950047645));
var ncount = minesweeper.game.neighbors.call(null,grid,index);
var grid__$1 = cljs.core.update.call(null,cljs.core.update.call(null,grid,new cljs.core.Keyword(null,"uncovered","uncovered",-1950047645),cljs.core.conj,index),new cljs.core.Keyword(null,"marked","marked",1403026280),cljs.core.disj,index);
var known_QMARK_ = cljs.core.set.call(null,cljs.core.concat.call(null,uncovered,marked));
if((ncount === (0))){
return cljs.core.reduce.call(null,minesweeper$game$explore,grid__$1,cljs.core.remove.call(null,known_QMARK_,minesweeper.game.adjacents.call(null,index)));
} else {
return grid__$1;
}
});
minesweeper.game.mark = (function minesweeper$game$mark(p__5396,index){
var map__5398 = p__5396;
var map__5398__$1 = ((cljs.core.seq_QMARK_.call(null,map__5398))?cljs.core.apply.call(null,cljs.core.hash_map,map__5398):map__5398);
var grid = map__5398__$1;
var bomb_QMARK_ = cljs.core.get.call(null,map__5398__$1,new cljs.core.Keyword(null,"bomb?","bomb?",-1424520312));
var uncovered = cljs.core.get.call(null,map__5398__$1,new cljs.core.Keyword(null,"uncovered","uncovered",-1950047645));
var marked = cljs.core.get.call(null,map__5398__$1,new cljs.core.Keyword(null,"marked","marked",1403026280));
if(cljs.core.truth_(marked.call(null,index))){
return cljs.core.update.call(null,grid,new cljs.core.Keyword(null,"marked","marked",1403026280),cljs.core.disj,index);
} else {
if(cljs.core.truth_(uncovered.call(null,index))){
return grid;
} else {
return cljs.core.update.call(null,grid,new cljs.core.Keyword(null,"marked","marked",1403026280),cljs.core.conj,index);

}
}
});
minesweeper.game.uncover = (function minesweeper$game$uncover(p__5399,index){
var map__5401 = p__5399;
var map__5401__$1 = ((cljs.core.seq_QMARK_.call(null,map__5401))?cljs.core.apply.call(null,cljs.core.hash_map,map__5401):map__5401);
var grid = map__5401__$1;
var bomb_QMARK_ = cljs.core.get.call(null,map__5401__$1,new cljs.core.Keyword(null,"bomb?","bomb?",-1424520312));
if(cljs.core.truth_(bomb_QMARK_.call(null,index))){
return cljs.core.assoc.call(null,grid,new cljs.core.Keyword(null,"failed?","failed?",539733148),true);
} else {
return minesweeper.game.explore.call(null,grid,index);
}
});
minesweeper.game.solved_QMARK_ = (function minesweeper$game$solved_QMARK_(p__5402){
var map__5404 = p__5402;
var map__5404__$1 = ((cljs.core.seq_QMARK_.call(null,map__5404))?cljs.core.apply.call(null,cljs.core.hash_map,map__5404):map__5404);
var grid = map__5404__$1;
var bomb_QMARK_ = cljs.core.get.call(null,map__5404__$1,new cljs.core.Keyword(null,"bomb?","bomb?",-1424520312));
var uncovered = cljs.core.get.call(null,map__5404__$1,new cljs.core.Keyword(null,"uncovered","uncovered",-1950047645));
var marked = cljs.core.get.call(null,map__5404__$1,new cljs.core.Keyword(null,"marked","marked",1403026280));
return (cljs.core.every_QMARK_.call(null,bomb_QMARK_,marked)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,bomb_QMARK_),cljs.core.count.call(null,marked))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,uncovered),((minesweeper.game.width * minesweeper.game.height) - minesweeper.game.bombcount)));
});
minesweeper.game.__GT_cell = (function minesweeper$game$__GT_cell(p__5405,index){
var map__5407 = p__5405;
var map__5407__$1 = ((cljs.core.seq_QMARK_.call(null,map__5407))?cljs.core.apply.call(null,cljs.core.hash_map,map__5407):map__5407);
var grid = map__5407__$1;
var won_QMARK_ = cljs.core.get.call(null,map__5407__$1,new cljs.core.Keyword(null,"won?","won?",-794748996));
var failed_QMARK_ = cljs.core.get.call(null,map__5407__$1,new cljs.core.Keyword(null,"failed?","failed?",539733148));
var bomb_QMARK_ = cljs.core.get.call(null,map__5407__$1,new cljs.core.Keyword(null,"bomb?","bomb?",-1424520312));
var marked = cljs.core.get.call(null,map__5407__$1,new cljs.core.Keyword(null,"marked","marked",1403026280));
var uncovered = cljs.core.get.call(null,map__5407__$1,new cljs.core.Keyword(null,"uncovered","uncovered",-1950047645));
return cljs.core.assoc.call(null,(cljs.core.truth_(failed_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),(cljs.core.truth_(bomb_QMARK_.call(null,index))?new cljs.core.Keyword(null,"bomb","bomb",-1302543521):null),new cljs.core.Keyword(null,"class","class",-2030961996),"standard"], null):(cljs.core.truth_(marked.call(null,index))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"marked","marked",1403026280),new cljs.core.Keyword(null,"class","class",-2030961996),"standard"], null):(cljs.core.truth_(uncovered.call(null,index))?(function (){var ncount = minesweeper.game.neighbors.call(null,grid,index);
if((ncount === (0))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"clear"], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"neighbor","neighbor",-470328172),new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str(ncount)].join('')], null);
}
})():new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"standard"], null)
))),new cljs.core.Keyword(null,"index","index",-1531685915),index);
});
minesweeper.game.__GT_rows = (function minesweeper$game$__GT_rows(grid){
return cljs.core.partition.call(null,minesweeper.game.width,cljs.core.map.call(null,cljs.core.partial.call(null,minesweeper.game.__GT_cell,grid),cljs.core.range.call(null,(minesweeper.game.width * minesweeper.game.height))));
});
if(typeof minesweeper.game.state !== 'undefined'){
} else {
minesweeper.game.state = cljs.core.atom.call(null,minesweeper.game.random_grid.call(null));
}
minesweeper.game.refresh = (function minesweeper$game$refresh(){
return cljs.core.reset_BANG_.call(null,minesweeper.game.state,minesweeper.game.random_grid.call(null));
});

//# sourceMappingURL=game.js.map?rel=1433877689601