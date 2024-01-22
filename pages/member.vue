<template>
	<div class="bg-secondary">
		<div class="container-with-navbar banner-wrap">
			<div class="container d-flex flex-column flex-md-row align-items-md-center h-100 px-4">
				<ClientOnly>
					<img src="/image/member.svg" :alt="$store.user.name" class="user-photo rounded-circle me-4">
					<h2 class="text-white fs-3 fs-md-1 mt-3 mt-md-0">Hello，{{ $store.user.name }}</h2>
				</ClientOnly>
			</div>
		</div>
		<div class="container">
			<ul class="nav">
				<li class="nav-item" v-for="item in tabs" :key="item.id">
					<NuxtLink class="nav-link" :to="`/member/${item.id}`" :class="{ 'active': route.href === `/member/${item.id}` }">
						{{ item.name }}
					</NuxtLink>
				</li>
			</ul>
			<NuxtPage />
		</div>
		<OrderBottomLine />
	</div>
</template>

<script setup>
const { $store } = useNuxtApp();
const route = useRoute();
const tabs = ref([
	{
		id: 'info',
		name: '個人資料'
	},
	{
		id: 'orders',
		name: '我的訂單'
	}
]);
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
	height: 210px;
	background-repeat: no-repeat;
	background-size: cover auto;
	background-image: url('/image/mobile/member-info-banner.png');

	@include media-md {
		height: 350px;
		background-image: url('/image/desktop/member-info-banner.png');
	}
}

.nav {
	margin-bottom: 40px;

	@include media-md {
		margin-bottom: 80px;
	}
}
</style>
