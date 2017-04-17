<style lang="less" scoped>
	.container {
		width: 100%;
		background-color: #ccc;
		.main {
			width: 75%;
			min-width: 900px;
			margin: 0 auto;
			padding: 50px;
			background: #fff;
		}
		.left {
			float: left;
		}
		.right {
			float: right;
			margin: 20px 50px 0 0;
      text-align: center;
		}
		.section {
			.icon-map {
				width: 24px;
				height: 24px;
				display: block;
				background: url(../../assets/img/icon-2.png);
				background-size: contain;
			}
			.title{
				color: #FEC31E;
				font-size: 22px;
				margin-bottom: 22px;
			}
			p{
				color: #333;
				font-size: 18px;
				line-height: 36px;
			}

		}
		.map {
			width: 100%;
			height: 400px;
			margin-top: 20px;
		}
	}
</style>
<template>
	<div class="container">
		<div class="main">
			<div class="section g-clear">
				<div class="left">
					<p class="title">江西永泰诚信包装纸厂</p>
					<p>公司地址：<span>江西省抚州市南城县徐家乡工业园</span></p>
					<p>手机号码：<span>13906817500</span></p>
					<p>微 &nbsp;信 &nbsp;号：<span>13968061588</span></p>
					<p>负 &nbsp;责 &nbsp;人：<span>徐经理</span></p>
				</div>
				<div class="right">
					<img src="../../assets/img/wechat.png" width="150px" height="150px"/>
          <div>微信扫一扫</div>
				</div>
			</div>
			<div class="section">
				<span class="icon-map"></span>
				<div id="allmap" class="map"></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
		},
		mounted() {
			// 百度地图API功能
			var map = new BMap.Map("allmap");
			var point = new BMap.Point(116.7020131270118, 27.65226289250082); // 创建点坐标
			map.centerAndZoom(point, 13);
			var marker = new BMap.Marker(point); // 创建标注
			map.addOverlay(marker); // 将标注添加到地图中
			//	marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
			var opts = {
				width: 150, // 信息窗口宽度
				height: 70, // 信息窗口高度
				title: "", // 信息窗口标题
				enableMessage: true //设置允许信息窗发送短息
			}
			var infoWindow = new BMap.InfoWindow("地址：江西省抚州市南城县徐家乡工业园", opts); // 创建信息窗口对象
			marker.addEventListener("click", function() {
				map.openInfoWindow(infoWindow, point); //开启信息窗口
			});
			map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
		}
	}
</script>
