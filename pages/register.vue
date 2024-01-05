<template>
	<div>
		<TheHeader :show-menu="false" />
		<div class="container-with-navbar">
			<h2 class="p-4">我是註冊頁</h2>
			<a href="/login" class="btn btn-success m-4">點我看登入頁</a>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: false
});
</script>
