var mainCtrl = function($scope){
	$scope.makiYokos = [
	{"name":"真木よう子1","url":"http://www.music-lounge.jp/v2/common/im/uf/news/201305/15/makiyoko_cover.jpg","score":0},
	{"name":"真木よう子2","url":"http://lh3.ggpht.com/-G2oxD2qroBo/S_lC8EHN1mI/AAAAAAAAC6Q/Bi5-eiGCnEI/maki_yoko_17.jpg","score":0},
	{"name":"真木よう子3","url":"http://imgcc.naver.jp/kaze/mission/USER/1/9/166089/751/300x450xadffa0bd38ae5c79f5cdaf84.jpg","score":0}
	];
}

var makiYokoItemCtrl = function($scope){
	$scope.increment = function(){
		$scope.makiYoko.score++;
	}
}
