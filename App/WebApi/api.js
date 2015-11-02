'use strict';
var HOST_URI = 'http://api.wallstreetcn.com/v2/'
// 获取节点
// 所有的节点
var ALL_NODE = 'mobile-articles?device=ios&channel=global-carousel';


function _getAllNode(){
	return HOST_URI+ALL_NODE;
}



module.exports = {
	getAllNode: _getAllNode,
};