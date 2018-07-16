<template>
  <div class="hello">
    <div class="sign">
			<div class="sign_step">
				<div class="stepbox">
					<i class="far fa-dot-circle"></i>
					<i class="far fa-circle"></i>
					<i class="far fa-circle"></i>
					<i class="far fa-circle"></i>
				</div>
			</div>
			<div class="sign_header">
				<h1>Creat Account</h1>
				<h2>Glad to see you here!</h2>
			</div>
			<div class="sign_box">
				<form role="form">
					<h2>Account</h2>
					<input type="text" class="inputbox" placeholder="   example@email.com">
					<h2>Password</h2>
					<input type="text" class="inputbox" placeholder="  ●●●●●●●●">
					<h2>Comfirm Password</h2>
					<input type="text" class="inputbox" placeholder="  ●●●●●●●●">
				</form>
			</div>
			<div class="sign_btn">
				<h2>SUBMIT & NEXT</h2>
			</div>
		</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.sign{
	margin: auto;
    width: 460px;
    border-top: 8px solid #0275D8;
}
.stepbox {
	padding-left: 70px; /*讓far往右移70px*/
}
/*用margin調整各自far的位置*/
.far {
	margin-top: 30px;
	margin-left: 50px;
	margin-bottom: 35px;
	color: #BEE1FF;
}
.fa-dot-circle {
	color: #0275D8;
}
.sign_header h1{
	font-family: 'Roboto', sans-serif;
	font-size: 48px;
	color: #000000;
	text-align: center;
	font-weight:lighter;
}
.sign_header h2{
	font-family: 'Roboto', sans-serif;
	font-size: 24px;
	color: #000000;
	text-align: center;
	font-weight:lighter; /*更細的字體*/
	line-height: 28px;
}
.sign_box h2 {
	font-family: 'Robot', sans-serif;
	font-size: 20px;
	color: #000;
	letter-spacing: 0; /*字元間距*/
	margin-top: 30px;
	margin-bottom: 7px;
	font-weight:normal;
}
.inputbox {
	width: 460px;
	height: 52px;
	background: #FFFFFF;
	border: 2px solid #000000;
	border-radius: 8px;
	font-family: 'Robot', sans-serif;
	font-size: 20px;
	color: #999;
	letter-spacing: 0;
	text-align: left;
	/*line-height: 24px;*/
}
.sign_btn {
	width: 460px;
	height: 52px;
	background: #BEE1FF;
	border: 2px solid #BEE1FF;
	border-radius: 8px; /*圓角角度*/
	margin-top: 40px;
}
.sign_btn h2 {
	font-family: 'Robot', sans-serif;
	font-size: 20px;
	color: #FFFFFF;
	text-align: center;
	line-height: 52px;
	font-weight: lighter;
}
</style>
