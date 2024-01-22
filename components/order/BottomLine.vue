<template>
	<div class="bg-line"></div>
</template>

<style lang="scss" scoped>
.bg-line {
	padding: 0;
	padding-bottom: 22.5%;
	height: 0;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: 100%;
	background-image: url('/image/mobile/line1.png');

	@include media-md {
		padding-bottom: 18%;
		background-image: url('/image/mobile/line.png');
	}

	@include media-xl {
		padding-bottom: 10%;
		background-image: url('/image/desktop/line.png');
	}
}
</style>
