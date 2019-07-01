<style>
    .djcontroller-mixer-main {
    	position: relative;
    	left: 50%;
    	margin-left: -120px;
    }
    
    .djcontroller-mixer-box {
    	width: 240px;
    	height: 123px;
    	background-color: #b5b5b5;
    	box-shadow: -5px 5px 2px #888
    }
    
    .djcontroller-mixer-table,
    .djcontroller-mixer-table2 {
    	position: absolute;
    	top: 12px;
    	left: 25px;
    	width: 75px;
    	height: 75px;
    	background-color: #000;
    	border-radius: 50%
    }
    
    .djcontroller-mixer-table2 {
    	left: 140px
    }
    
    .djcontroller-mixer-innertable {
    	position: absolute;
    	top: 25px;
    	left: 25px;
    	width: 25px;
    	height: 25px;
    	background-color: #fff;
    	border-radius: 50%
    }
    
    .djcontroller-mixer-tableline {
    	position: absolute;
    	top: 12px;
    	left: 12px;
    	width: 50px;
    	height: 50px;
    	border: 2px solid #fff;
    	border-right: none;
    	border-bottom: none;
    	border-top: none;
    	border-radius: 50% 0 0 50% / 50% 0 0 50%;
    	animation: djcontroller-rota 3s alternate infinite
    }
    
    .djcontroller-mixer-tableline2 {
    	position: absolute;
    	top: 13px;
    	left: 13px;
    	width: 50px;
    	height: 50px;
    	border: 2px solid #fff;
    	border-right: none;
    	border-bottom: none;
    	border-top: none;
    	border-radius: 50% 0 0 50% / 50% 0 0 50%;
    	animation: djcontroller-rota2 3s alternate infinite
    }
    
    @keyframes djcontroller-rota {
    	0% {
    		transform: rotate(0deg)
    	}
    	50% {
    		transform: rotate()
    	}
    	100% {
    		transform: rotate(360deg)
    	}
    }
    
    @keyframes djcontroller-rota2 {
    	0% {
    		transform: rotate(180deg)
    	}
    	100% {
    		transform: rotate(540deg)
    	}
    }
    
    .djcontroller-mixer-slider,
    .djcontroller-mixer-slider2 {
    	position: absolute;
    	left: 12px;
    	top: 30px;
    	width: 1px;
    	height: 50px;
    	background-color: #000
    }
    
    .djcontroller-mixer-slider2 {
    	left: 228px
    }
    
    .djcontroller-mixer-sliderbar {
    	position: absolute;
    	left: -3px;
    	top: 0;
    	width: 7px;
    	height: 2px;
    	background: #000;
    	animation: djcontroller-sliderbar 2s alternate infinite
    }
    
    @keyframes djcontroller-sliderbar {
    	0% {
    		top: 0
    	}
    	100% {
    		top: 46px
    	}
    }
    
    .djcontroller-mixer-volumecontrol,
    .djcontroller-mixer-volumecontrol2 {
    	position: absolute;
    	left: 110px;
    	top: 40px;
    	width: 1px;
    	height: 30px;
    	background-color: #000
    }
    
    .djcontroller-mixer-volumecontrol2 {
    	left: 130px
    }
    
    .djcontroller-mixer-volumecontrol-slider {
    	position: absolute;
    	left: -2px;
    	top: 10px;
    	width: 5px;
    	height: 2px;
    	background: #000
    }
    
    .djcontroller-mixer-pad,
    .djcontroller-mixer-pad2 {
    	position: absolute;
    	left: 25px;
    	top: 90px;
    	width: 75px;
    	height: 25px
    }
    
    .djcontroller-mixer-pad2 {
    	left: 140px
    }
    
    .djcontroller-mixer-button {
    	width: 20px;
    	height: 12px;
    	position: relative;
    	margin-left: 2px;
    	margin-top: 2px;
    	display: block;
    	float: left;
    	background: #fff
    }
    
    .djcontroller-mixer-pad2 .mixer-button {
    	float: right
    }
    
    .djcontroller-mixer-button:nth-of-type(1) {
    	animation: djcontroller-color1 2s linear infinite
    }
    
    .djcontroller-mixer-button:nth-of-type(2) {
    	animation: djcontroller-color2 2s linear infinite
    }
    
    .djcontroller-mixer-button:nth-of-type(3) {
    	animation: djcontroller-color3 2s linear infinite
    }
    
    .djcontroller-mixer-button:nth-of-type(4) {
    	animation: djcontroller-color4 2s linear infinite
    }
    
    .djcontroller-mixer-button:nth-of-type(5) {
    	animation: djcontroller-color5 2s linear infinite
    }
    
    .djcontroller-mixer-button:nth-of-type(6) {
    	animation: djcontroller-color6 2s linear infinite
    }
    
    @keyframes djcontroller-color1 {
    	0% {
    		background: #3f2dff
    	}
    	50% {
    		background: #19b55f
    	}
    	100% {
    		background: #3f2dff
    	}
    }
    
    @keyframes djcontroller-color2 {
    	0% {
    		background: #bf1c32
    	}
    	50% {
    		background: #811ca0
    	}
    	100% {
    		background: #bf1c32
    	}
    }
    
    @keyframes djcontroller-color3 {
    	0% {
    		background: #d4ff00
    	}
    	50% {
    		background: #b7fffc
    	}
    	100% {
    		background: #d4ff00
    	}
    }
    
    @keyframes djcontroller-color4 {
    	0% {
    		background: #00fff4
    	}
    	50% {
    		background: #ffa830
    	}
    	100% {
    		background: #00fff4
    	}
    }
    
    @keyframes djcontroller-color5 {
    	0% {
    		background: #bf00ff
    	}
    	50% {
    		background: #bfffe0
    	}
    	100% {
    		background: #bf00ff
    	}
    }
    
    @keyframes djcontroller-color6 {
    	0% {
    		background: #005dff
    	}
    	50% {
    		background: #ed7cff
    	}
    	100% {
    		background: #005dff
    	}
    }
    
    .djcontroller-mixer-box .data {
    	position: absolute;
    	width: 240px;
    	height: 20px;
    	top: 115%;
    	font-size: 28px;
    	font-family: 'Abril Fatface', cursive;
    	text-align: center
    }
</style>
<div class='djcontroller-mixer-main'>
	<div class='djcontroller-mixer-box'>
		<div class='djcontroller-mixer-table'>
			<div class='djcontroller-mixer-tableline'></div>
			<div class='djcontroller-mixer-tableline2'></div>
			<div class='djcontroller-mixer-innertable'></div>
		</div>
		<div class='djcontroller-mixer-table2'>
			<div class='djcontroller-mixer-tableline'></div>
			<div class='djcontroller-mixer-tableline2'></div>
			<div class='djcontroller-mixer-innertable'></div>
		</div>
		<div class='djcontroller-mixer-slider'>
			<div class='djcontroller-mixer-sliderbar'></div>
		</div>
		<div class='djcontroller-mixer-slider2'>
			<div class='djcontroller-mixer-sliderbar'></div>
		</div>
		<div class='djcontroller-mixer-volumecontrol'>
			<div class='djcontroller-mixer-volumecontrol-slider'></div>
		</div>
		<div class='djcontroller-mixer-volumecontrol2'>
			<div class='djcontroller-mixer-volumecontrol-slider'></div>
		</div>
		<div class='djcontroller-mixer-pad'>
			<div class='djcontroller-mixer-button'></div>
			<div class='djcontroller-mixer-button'></div>
			<div class='djcontroller-mixer-button'></div>
			<div class='djcontroller-mixer-button'></div>
			<div class='djcontroller-mixer-button'></div>
			<div class='djcontroller-mixer-button'></div>
		</div>
		<div class='djcontroller-mixer-pad2'>
			<div class='djcontroller-mixer-button'></div>
			<div class='djcontroller-mixer-button'></div>
			<div class='djcontroller-mixer-button'></div>
			<div class='djcontroller-mixer-button'></div>
			<div class='djcontroller-mixer-button'></div>
			<div class='djcontroller-mixer-button'></div>
		</div>
	</div>
</div>