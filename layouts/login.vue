<template>
	<div class="">
		<TheHeader :show-menu="false" />
		<div class="main-container d-flex w-100 min-vh-100">
			<div class="d-none d-md-flex col-6 background">
			</div>
			<div class="col-12 col-md-6 d-flex align-items-center justify-content-center bg-secondary wave">
				<slot />
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.wave {
	background: url('/image/desktop/line.png') no-repeat;
	background-position: 0 20%;
	background-size: 160%;
}
.background {
	background: url('/image/desktop/register.png') no-repeat center center;
	background-size: cover;
}
</style>
