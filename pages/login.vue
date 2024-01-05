<template>
	<div>
		<TheHeader :show-menu="false" />
		<div class="main-container">
			<h2 class="p-4">我是登入頁</h2>
			<a href="/register" class="btn btn-success m-4">點我看註冊頁</a>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: false
});
</script>

<style lang="scss" scoped>
.main-container {
	padding-top: $header-height;
}
</style>
