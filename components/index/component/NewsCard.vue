<template>
	<div class="d-flex flex-column flex-md-row align-items-center">
		<img class="new-bg col-12 col-md-5 me-md-4 mb-4 mb-md-0" :src="props.newsInfo.image" :alt="props.newsInfo.title">
		<div class="text-black col">
			<h3 class="fs-4 fs-md-3 fw-bold mb-2 mb-md-4">{{ props.newsInfo.title }}</h3>
			<p class="fs-sm fs-md-normal">{{ props.newsInfo.description }}</p>
		</div>
	</div>
</template>

<script lang="ts" setup>
const props = defineProps({
	newsInfo: {
		type: Object,
		default: () => {}
	}
});
</script>

<style lang="scss" scoped>
.new-bg {
	border-radius: 0.5rem;
}
</style>
