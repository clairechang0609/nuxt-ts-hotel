<template>
	<div class="food-card overflow-hidden d-flex align-items-end">
		<div class="description text-white p-3 p-md-4">
			<div class="d-flex justify-content-between align-items-center mb-4">
				<span class="fs-5 fw-bold">{{ props.cardInfo.title }}</span>
				<span class="fw-bold">{{ props.cardInfo.date }} {{ props.cardInfo.time }}</span>
			</div>
			<p>{{ props.cardInfo.description }}</p>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	cardInfo: {
		type: Object,
		default: () => {}
	}
});
</script>

<style lang="scss" scoped>
.food-card {
	@include media-md {
		background-image: v-bind("`url('/image/desktop/food${props.cardInfo.id}.png')`");
		min-height: 600px;
	}

	min-height: 400px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	background-image: v-bind("`url('/image/mobile/food${props.cardInfo.id}.png')`");
	border-radius: 8px;
}

.description {
	background: linear-gradient(180deg, rgb(0 0 0 / 0%) 0%, #140F0A 77.6%);
	backdrop-filter: blur(10px);

	p {
		display: -webkit-box;
		overflow: hidden;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 4; // 超過第 N 行後省略
	}
}
</style>
