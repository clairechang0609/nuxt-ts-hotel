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
	background: url('/image/desktop/line.png') no-repeat;
	background-position: 0 15%;
	background-size: 160%;
}
</style>
