<template>
	<nav class="navbar fixed-top flex-nowrap" :class="props.bgColor">
		<h1 class="logo px-3">
			<NuxtLink to="/" title="享樂酒店｜Enjoyment Luxury Hotel" class="d-flex">
				<img src="/image/logo_white.svg" alt="享樂酒店｜Enjoyment Luxury Hotel" />
			</NuxtLink>
		</h1>
		<template v-if="showMenu">
			<!-- 手機版 menu -->
			<div class="d-md-none">
				<button type="button" class="btn btn-ghost" @click="openMenu = true">
					<span class="material-symbols-outlined fill-0">menu</span>
				</button>
				<transition name="slide">
					<div class="position-fixed start-0 top-0 end-0 bottom-0 bg-secondary" v-show="openMenu">
						<div class="position-absolute top-50 start-50 translate-middle d-flex flex-column justify-content-center p-4 w-100">
							<NuxtLink to="/all-rooms" class="btn btn-ghost mb-3">客房旅宿</NuxtLink>
							<NuxtLink to="/login" class="btn btn-ghost mb-3" v-if="!$store.user.name">會員登入</NuxtLink>
							<NuxtLink to="/member" class="btn btn-ghost mb-3" v-else>我的帳戶</NuxtLink>
							<NuxtLink to="/reservation" class="btn btn-primary w-100">立即訂房</NuxtLink>
						</div>
						<button type="button" class="btn btn-ghost position-absolute top-0 end-0" @click="openMenu = false">
							<span class="material-symbols-outlined fill-0 p-3">close</span>
						</button>
					</div>
				</transition>
			</div>
			<!-- 電腦版 menu -->
			<div class="d-none d-md-flex align-items-center">
				<NuxtLink to="/all-rooms" class="btn btn-ghost me-3">客房旅宿</NuxtLink>
				<NuxtLink to="/login" class="btn btn-ghost me-3" v-if="!$store.user.name">會員登入</NuxtLink>
				<div class="dropdown" v-else>
					<button class="btn btn-ghost me-3" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						<span class="material-symbols-outlined fill-0 me-2">account_circle</span>
						{{ $store.user.name }}
					</button>
					<div class="dropdown-menu">
						<NuxtLink to="/member" class="dropdown-item">我的帳戶</NuxtLink>
						<NuxtLink to="/login" class="dropdown-item">登出</NuxtLink>
					</div>
				</div>
				<NuxtLink to="/reservation" class="btn btn-primary">立即訂房</NuxtLink>
				<!-- TODO: Guideline 按鈕要刪除 -->
				<NuxtLink to="/guideline" class="btn btn-primary ms-3">Guideline</NuxtLink>
			</div>
		</template>
	</nav>
</template>

<script lang="ts" setup>
const props = defineProps({
	bgColor: {
		type: String,
		default: 'bg-secondary'
	},
	showMenu: {
		type: Boolean,
		default: true
	}
});
const route = useRoute();
const { $store } = useNuxtApp();

// 控制 menu
const openMenu = ref(false);
watch(() => route.path, () => {
	openMenu.value = false;
});
watch(() => openMenu.value, val => {
	const event = val ? 'add' : 'remove';
	document.body.classList[event]('overflow-hidden');
});
</script>

<style lang="scss" scoped>
.navbar {
	padding-right: 0.75rem;
	padding-left: 0.75rem;
	height: $header-height-sm;

	@include media-md {
		padding-right: 5rem;
		padding-left: 5rem;
		height: $header-height;
	}

}

.logo img {
	width: 110px;

	@include media-md {
		width: auto;
	}
}

.slide-enter-active {
	animation: slide 0.3s ease-in-out;
}

.slide-leave-active {
	animation: slide 0.3s ease-in-out reverse;
}

@keyframes slide {
	0% {
		transform-origin: top;
		transform: scaleY(0);
	}

	100% {
		transform-origin: top;
		transform: scaleY(1);
	}
}
</style>
