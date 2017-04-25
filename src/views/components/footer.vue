<template>
  <div class="clock_wrap">
    <div class="footer">
      <div class="footer-main">
        <div class="left-section">
          <i class="logo"></i>
          <span>江西永泰诚信包装纸厂</span>
        </div>
        <div class="right-section">
          <ul>
            <li>公司地址：<span>江西省抚州市南城县徐家乡工业园</span></li>
            <li><span class="slide">(原桐庐县信达包装纸厂)</span></li>
            <li>手机号码：<span>13906817500</span></li>
            <li>微 &nbsp;信 &nbsp;号：<span>13968061588</span></li>
            <li>负 &nbsp;责 &nbsp;人：<span>徐经理</span></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="foot-bottom">
      <span>Copyright @ 2017 All Rights Reserved 江西永泰诚信包装纸厂</span>
      <span><a href="http://www.miitbeian.gov.cn/" target="_blank">赣ICP备17004514号</a></span>
    </div>
  </div>

</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	.footer{
		width: 100%;
    min-width: 1000px;
		background-color: #202E31;
		color: #fff;
		.footer-main{
			width: 78.3%;
			min-width: 940px;
			margin: 0 auto;
			padding: 50px 0;
			font-size: 14px;
		}
		.left-section{
			padding: 0 13.8%;
			display: inline-block;
			border-right: 1px solid #ccc;
      vertical-align:middle;
      font-size: 16px;
			.logo{
				display: block;
				width: 88px;
				height: 54px;
				background-size: contain;
				background-image: url("~src/assets/img/logo.png");
				margin: 40px auto;
			}
		}
		.right-section{
			display: inline-block;
			margin-left: 13.8%;
			line-height: 38px;
      vertical-align:middle;
      span.slide{
        margin-left: 70px;
      }
		}
	}
  .foot-bottom{
    width:100%;
    background-color: #202E31;
    height:60px;
    line-height: 60px;
    border-top:1px solid rgba(255,255,255,.1);
    font-size: 14px;
    color: #fff;
    text-align: center;
    span{
      opacity: .4;
      a{
        color: #fff;
      }
    }
  }
</style>
