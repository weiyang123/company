<style lang="less" scoped>
	.container {
		width: 100%;
    min-width:1000px;
		.index-img {
			height: 300px;
			background: url("http://img.souche.com/20170328/png/d21c05d6a164283892a997d09a11397d.png");
			background-size: cover;
			padding-top: 202px;
			p {
				width: 626px;
				margin: 0 auto;
				font-size: 48px;
				line-height: 96px;
				color: #fff;
				border-top: 1px solid #fff;
				border-bottom: 1px solid #fff;
			}
		}
	}

	.product-cotainer {
		padding: 0 20px;
		.title {
			width: 186px;
			margin: 34px auto 0 auto;
			position: relative;
			color: #333;
			font-size: 16px;
			text-align: center;
			border-bottom: 1px solid #333;
			.orange-line {
				position: absolute;
				left: 53px;
				top: 45px;
				width: 80px;
				margin: 0 auto;
				border-bottom: 5px solid #FEC31E;
			}
		}
		 #Marquee {
			overflow: hidden;
			width: 100%;
		}
		.marquee{
			float: left;
			width: 800%;
		}
		#demo1 {
			float: left;
		}
		#demo2 {
			float: left;
		}
		.img-container {
			min-width: 1160px;
			margin: 60px auto;
			font-size: 0;
			.img {
				margin: 0 20px;
				display: inline-block;
				vertical-align: middle;
				position: relative;
				border: 3px solid #ccc;
				img {
					z-index: 100;
				}
				.desc {
					display: none;
					position: absolute;
					width: 100%;
					height: 50px;
					font-size: 16px;
					text-align: center;
					line-height: 50px;
					left: 0;
					bottom: 0;
          background-color: rgba(0,0,0,0.5);
					z-index: 101;
				}
			}
			.img:hover {
				cursor: pointer;
			}
			.img:hover .desc {
				display: inline-block;
				color: #fff;
			}
		}
	}
</style>
<template>
	<div class="container">
		<div class="index-img">
			<p>专业生产各类精致条纹牛皮纸</p>
		</div>
		<div class="product-cotainer">
			<div class="title">
				<p>产品展示</p>
				<p>PRODUCTS</p>
				<div class="orange-line"></div>
			</div>
			<div id="Marquee" class="g-clear">
				<div class="marquee">
					<div class="img-container" id="demo1">
						<div class="img">
							<img src="../../assets/img/index-1.png"  />
							<span class="desc"><p>60克托腊牛皮纸</p></span>
						</div>
						<div class="img">
							<img src="../../assets/img/index-2.png" />
							<span class="desc"><p>70克胶带原纸</p></span>
						</div>
						<div class="img">
							<img src="../../assets/img/index-3.png" />
							<span class="desc"><p>本色木浆条纹纸</p></span>
						</div>
						<div class="img">
							<img src="../../assets/img/index-4.png"/>
							<span class="desc"><p>本色全木浆条纹纸</p></span>
						</div>
						<div class="img">
							<img src="../../assets/img/index-5.png"/>
							<span class="desc"><p>防潮原纸38克</p></span>
						</div>
						<div class="img">
							<img src="../../assets/img/index-6.png"/>
							<span class="desc"><p>金色A级条纹牛皮纸</p></span>
						</div>
						<div class="img">
							<img src="../../assets/img/index-7.png"/>
							<span class="desc"><p>金色木浆条纹纸</p></span>
						</div>
						<div class="img">
							<img src="../../assets/img/index-8.png"/>
							<span class="desc"><p>金色全木浆条纹纸</p></span>
						</div>
						<div class="img">
							<img src="../../assets/img/index-9.png"/>
							<span class="desc"><p>牛皮纸60克</p></span>
						</div>
					</div>
					<div class="img-container">
						<div class="demo2" id="demo2"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		mounted() {
			var speed = 10;
			var tab = document.getElementById("Marquee");
			var tab1 = document.getElementById("demo1");
			var tab2 = document.getElementById("demo2");
			tab2.innerHTML = tab1.innerHTML;
			function Marquee() {
				if(tab2.offsetWidth - tab.scrollLeft <= 0)
					tab.scrollLeft -= tab1.offsetWidth
				else {
					tab.scrollLeft++;
				}
			}
			var MyMar = setInterval(Marquee, speed);
			tab.onmouseover = function() {
				clearInterval(MyMar)
			};
			tab.onmouseout = function() {
				MyMar = setInterval(Marquee, speed)
			};
		}
	}
</script>
