<template>
	<div class="">
		<TheHeader :show-menu="false" />
		<div class="main-container d-flex w-100 min-vh-100">
			<div class="d-none d-md-flex col-6 background">
			</div>
			<div class="col-12 col-md-6 d-flex align-items-center justify-content-center bg-secondary wrap">
				<slot />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.background {
	background: url('/image/desktop/register.png') no-repeat center center;
	background-size: cover;
}
.wrap {
	position: relative;
	z-index: 9999;
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: url('/image/desktop/line.png') no-repeat center center;
		background-size: 200%;
		transform: translate(0, -24%);
		z-index: -1;
	}
}
</style>
