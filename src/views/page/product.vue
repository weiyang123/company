<style lang="less" scoped>
	.contain {
		width: 100%;
		background: #ccc;
	}
	
	.main {
		width: 900px;
		margin: 0 auto;
		padding: 50px;
		background: #fff;
		.title {
			font-size: 18px;
			.icon {
				width: 26px;
				height: 22px;
				display: inline-block;
				background: url(../../assets/img/icon-1.png);
				background-size: contain;
				margin-right: 30px;
				vertical-align: middle;
			}
		}
		.product {
			margin-top: 20px;
			.section {
				margin-top: 120px;
			}
			.section:first-child {
				margin-top: 60px;
			}
			.subtitle {
				float: right;
				background-color: #000;
				color: #fff;
				font-size: 16px;
				line-height: 36px;
				padding: 0 20px;
			}
			.desc {
				background-color: #efefef;
				color: #333;
				font-size: 16px;
				line-height: 38px;
				margin-top: -5px;
				padding: 0 5px;
			}
		}
	}
</style>
<template>
	<div class="contain">
		<div class="main">
			<div class="title">
				<span class="icon"></span>产品简介
			</div>

			<div class="product">
				<div class="section">
					<div class="subtitle">精致条纹纸</div>
					<carousel :auto="3000" :watch-items="list1" :loop="true" :dots="false">
						<carousel-item v-for="(item, index) in list1" :key="index">
							<img :src="item.url">
						</carousel-item>
					</carousel>
					<p class="desc">主营生产30-100g精致条纹纸（全木浆/半木浆）：精致条纹牛皮纸、防潮原纸等，主要颜色有本色/淡黄色/金色等，可按客户要求定制。</p>
				</div>
				<div class="section">
					<div class="subtitle">普通条纹纸</div>
					<carousel :auto="3000" :watch-items="list2" :loop="true" :dots="false">
						<carousel-item v-for="(item, index) in list2" :key="index">
							<img :src="item.url">
						</carousel-item>
					</carousel>
					<p class="desc">生产30-100g普通条纹纸：以条包纸为主，主要颜色有黄色等，可按客户需求定制。</p>
				</div>
				<div class="section">
					<div class="subtitle">牛皮纸</div>
					<carousel :auto="3000" :watch-items="list3" :loop="true" :dots="false">
						<carousel-item v-for="(item, index) in list3" :key="index">
							<img :src="item.url">
						</carousel-item>
					</carousel>
					<p class="desc">生产30-100g牛皮纸：精致条纹牛皮纸，脱蜡原纸，胶带原纸等，主要颜色有本色/淡黄色/金色等，可按客户需求定制。</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import {
		Carousel,
		CarouselItem
	} from 'vue-l-carousel';
	export default {
		components: {
			Carousel,
			CarouselItem
		},
		data() {
			return {
				list1: [{
					url: 'http://img.souche.com/20170326/png/bcab0d41725ea822a7fc829663c1517d.png'
				}, {
					url: 'http://img.souche.com/20170326/png/a53c8df2e9ccc81cef4cc3854908c9cf.png'
				}, {
					url: 'http://img.souche.com/20170326/png/6ff61d8c73faa5f06375463948d282fc.png'
				}, {
					url: 'http://img.souche.com/20170326/png/0844fa7a7171b8cd7533a945d77ffa09.png'
				}, {
					url: 'http://img.souche.com/20170326/png/022bb4a83acf483cd918661faeeebcc3.png'
				}],
				list2: [{
					url: 'http://img.souche.com/20170326/png/989a99e355ec49532f9cd968fc3a550c.png'
				}, {
					url: 'http://img.souche.com/20170326/png/73fef6ff7d75922026f8b64f85fd5e44.png'
				}, {
					url: 'http://img.souche.com/20170326/png/7f0c506dfa60fbeaa219c82c704aa522.png'
				}],
				list3: [{
					url: 'http://img.souche.com/20170326/png/b2fbf21ded101eae9cdff588513b623a.png'
				}, {
					url: 'http://img.souche.com/20170326/png/1e1d3ad9d77faf1e5561271097527bf7.png'
				}, {
					url: 'http://img.souche.com/20170326/png/36bc9a6344023d9c5d6a21f9f3df4a2f.png'
				}]
			}
		},
		created() {
		}
	}
</script>