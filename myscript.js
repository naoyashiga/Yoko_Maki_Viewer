var mainCtrl = function($scope){
	$scope.makiYokos = [
	{"url":"http://p.news.nimg.jp/photo/390/489390p.jpg","score":10},
	{"url":"http://lh3.ggpht.com/-G2oxD2qroBo/S_lC8EHN1mI/AAAAAAAAC6Q/Bi5-eiGCnEI/maki_yoko_17.jpg","score":8},
	{"url":"http://imgcc.naver.jp/kaze/mission/USER/1/9/166089/751/300x450xadffa0bd38ae5c79f5cdaf84.jpg","score":3},
	{"url":"http://image.news.livedoor.com/newsimage/photo/news/image/a/e/ae645ffacaaa6a04a72f0e76fd6edfa3.jpg","score":4},
	{"url":"http://imgcc.naver.jp/kaze/mission/USER/1/9/166089/779/300x461xd7955ee9d2a20df3f3fc13e5.jpg","score":7},
	{"url":"http://imgcc.naver.jp/kaze/mission/USER/1/9/166089/787/240x188x752961cba11732cd6f448308.jpg","score":3},
	{"url":"http://imgcc.naver.jp/kaze/mission/USER/1/9/166089/794/240x320x44a7aec5501fbe5a8ca87d36.jpg","score":2},
	{"url":"http://imgcc.naver.jp/kaze/mission/USER/1/9/166089/819/300x428x5f3888a2ec7d26f117b0644b.jpg","score":9},
	{"url":"http://imgcc.naver.jp/kaze/mission/USER/1/9/166089/758/300x450xd3c0e9a6cdacd762d45e2ec2.jpg","score":12}
	];
}

var makiYokoItemCtrl = function($scope){
	$scope.increment = function(){
		$scope.makiYoko.score++;
	}
}
