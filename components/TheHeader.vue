<template>
	<nav class="navbar fixed-top flex-nowrap" :class="props.bgColor">
		<h1 class="logo px-3">
			<NuxtLink to="/" title="享樂酒店｜Enjoyment Luxury Hotel" class="d-flex">
				<img src="/image/logo_white.svg" alt="享樂酒店｜Enjoyment Luxury Hotel" />
			</NuxtLink>
		</h1>
		<div class="menu-wrap d-flex align-items-center" v-if="showMenu">
			<NuxtLink to="/all-rooms" class="btn btn-ghost me-3">客房旅宿</NuxtLink>
			<NuxtLink to="/login" class="btn btn-ghost me-3" v-if="!isLogin">會員登入</NuxtLink>
			<NuxtLink to="/member-info" class="btn btn-ghost me-3" v-if="isLogin">
				<span class="material-symbols-outlined fill-0 me-2">account_circle</span>
				Jessica
			</NuxtLink>
			<NuxtLink to="/reservation" class="btn btn-primary">立即訂房</NuxtLink>
			<NuxtLink to="/guideline" class="btn btn-primary ms-3">Guideline</NuxtLink>
		</div>
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

const isLogin = ref(false);
</script>

<style lang="scss" scoped>
.navbar {
	padding-right: 5rem;
	padding-left: 5rem;
	height: $header-height;
}

.menu-wrap {
	font-weight: 600;
}
</style>
