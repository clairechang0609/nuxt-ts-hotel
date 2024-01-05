<template>
	<div class="bg-primary-10">
		<div class="container-with-navbar banner-wrap">
			<div class="container d-flex align-items-center">
				<img :src="userPhoto" :alt="$store.user.name" class="user-photo rounded-circle me-4">
				<h2 class="text-white fs-1">Hello，{{ $store.user.name }}</h2>
			</div>
		</div>
		<div class="container">
			<h2 class="mb-5">我是會員頁 / 修改個人資料頁</h2>
		</div>
	</div>
</template>

<script setup>
const { $store } = useNuxtApp();

const userPhoto = computed(() => $store.user.photo || '/image/member.svg');
</script>

<style lang="scss" scoped>
.user-photo {
	width: 72px;
	height: 72px;

	@include media-md {
		width: 144px;
		height: 144px;
	}
}

.banner-wrap {
	height: 350px;
	background-repeat: no-repeat;
	background-size: cover, auto;
	background-image: url('/image/member-info-banner.png');
}
</style>
