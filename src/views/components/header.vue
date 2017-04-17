<template>
	<div class="header">
		<header class="g-clear">
			<div class="left-section">
				<i class="logo"></i>
				<span>江西永泰诚信包装纸厂</span>
        <p>二十年诚信保障</p>
			</div>
			<div class="right-section">
				<i class="icon-phone"></i>
				<div class="section">
					<div class="section-line1">联系电话 Telephone</div>
					<div class="section-line2">13906817500</div>
				</div>
			</div>
		</header>
		<div class="banner">
			<ul class="g-clear">
				<li><router-link to="/index" :class="{active: $route.name == 'index'}"><span class="banner-h">首页</span><span class="banner-c">HOME</span></router-link></li>
				<li><router-link to="/product" :class="{active: $route.name == 'product'}"><span class="banner-h">产品介绍</span><span class="banner-c">PRODUCT</span></router-link></li>
				<li><router-link to="/about" :class="{active: $route.name == 'about'}"><span class="banner-h">关于我们</span><span class="banner-c">ABOUT US</span></router-link></li>
				<li><router-link to="/contact" :class="{active: $route.name == 'contact'}"><span class="banner-h">联系我们</span><span class="banner-c">CONTACT US</span></router-link></li>
			</ul>
		</div>
	</div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	.header{
		width: 100%;
	}
	header{
		width: 83.3%;
		min-width: 1000px;
		margin: 0 auto;
		padding: 20px 0;
		.left-section{
			display:inline-block;
			.logo{
				display: inline-block;
				width: 70px;
				height: 43px;
				background-size: contain;
				background-image: url("~src/assets/img/logo.png");
				margin-right: 20px;
				vertical-align: middle;
			}
			span{
				font-size: 36px;
				color: #333;
        font-weight:600;
				vertical-align: middle;
			}
      p{
        font-size: 22px;
        color: #FEC31E;
        font-weight:600;
        margin-left: 100px;
      }
		}
		.right-section{
			display: inline-block;
			float: right;
			.icon-phone{
				display: inline-block;
				width: 55px;
				height: 55px;
				background-size: contain;
				background-image: url("~src/assets/img/phone-icon.png");
				margin-right: 22px;
			}
			.section{
				display: inline-block;
				.section-line1{
					color: #333;
					font-size: 22px;
				}
				.section-line2{
					color: #FEC31E;
					font-size: 30px;
				}
			}
		}
	}
	.banner{
		width: 100%;
		background-color: #202E31;
    min-width: 1000px;
		ul{

			margin: 0 auto;
      @media screen and (max-width: 1440px) {
        width: 1000px;
      }
      @media screen and (min-width: 1440px) and (max-width: 1920px) {
        width: 1100px;
      }
      @media screen and (min-width: 1920px) {
        width:1300px;
      }
      li{
        @media screen and (max-width: 1440px) {
          float: left;
          width: 110px;
          text-align: center;
          display: inline-block;
          margin: 0 93px;
        }
        @media screen and (min-width: 1440px) and (max-width: 1920px) {
          float: left;
          width: 110px;
          text-align: center;
          display: inline-block;
          margin: 0 109px;
        }
        @media screen and (min-width: 1920px) {
          float: left;
          width: 110px;
          text-align: center;
          display: inline-block;
          margin: 0 143px;
        }

			}
			li:first-child{
				margin-left: 0;
			}
			li:last-child{
				margin-right: 0;
			}
			a{
				color: #fff;
				&.active{
					display: block;
					color: #FEC31E;
					border-bottom: 3px solid #FEC31E;
				}
			}
		}
		.banner-h{
			display: block;
			font-size: 20px;
			padding: 10px 0;
		}
		.banner-c{
			display: block;
			font-size: 16px;
			padding-bottom: 12px;
		}
	}
</style>
