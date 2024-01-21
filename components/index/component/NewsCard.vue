<template>
	<div class="d-flex flex-column flex-md-row align-items-center">
		<div class="new-bg col-12 col-md-5 me-md-4 mb-4 mb-md-0"></div>
		<div class="text-black col">
			<h3 class="fs-4 fs-md-3 fw-bold mb-2 mb-md-4">{{ props.newsInfo.title }}</h3>
			<p class="fs-sm fs-md-normal">{{ props.newsInfo.description }}</p>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	newsInfo: {
		type: Object,
		default: () => {}
	}
});
</script>

<style lang="scss" scoped>
.new-bg {
	@include media-md {
		background-image: v-bind("`url('/image/desktop/news${props.newsInfo.id}.png')`");
		padding-bottom: 0;
		min-height: 18rem;
	}

	overflow: hidden;
	padding-bottom: 100%;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 0.5rem;
	background-image: v-bind("`url('/image/mobile/news${props.newsInfo.id}.png')`");
}
</style>
