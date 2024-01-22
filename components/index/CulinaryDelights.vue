<template>
	<div class="wrap">
		<div class="container pb-0">
			<div class="title d-flex align-items-center">
				<h2 class="fs-1 text-primary">佳餚<br>美饌</h2>
				<span class="bar ms-5"></span>
			</div>
		</div>
		<Swiper class="me-0" v-bind="swiperConfig">
			<SwiperSlide v-for="item in culinary" :key="item._id">
				<IndexComponentFoodCard :card-info="item" />
			</SwiperSlide>
		</Swiper>
	</div>
</template>

<script lang="ts" setup>
import type { GetCulinaryRes } from '~/types/culinary';

const swiperConfig = {
	slidesPerView: 1.1,
	spaceBetween: 24,
	breakpoints: {
		768: {
			slidesPerView: 3.5,
			spaceBetween: 24
		}
	}
};

const culinary = ref<GetCulinaryRes[]>([]);
const getCulinary = async () => {
	const { response } = await useCustomFetch<GetCulinaryRes[]>('/api/v1/admin/culinary', {
		method: 'GET'
	});
	if (!response.value?.status) {
		return;
	}
	culinary.value = response.value.result;
};
getCulinary();
</script>

<style lang="scss" scoped>
.title {
	@include media-md {
		margin-bottom: 5rem;
	}

	margin-bottom: 2.5rem;
}

.wrap {
	padding: 5rem 0;

	@include media-md {
		position: relative;
		padding: 7.5rem 0;

		&::after {
			position: absolute;
			bottom: 0;
			left: 0;
			width: 11.5rem;
			height: 100%;
			background: url('/image/desktop/line1.png') no-repeat center;
			background-size: contain;
			content: '';
			transform: translate(-60%, 10%);
		}
	}
}

.bar {
	display: block;
	width: 160px;
	height: 2px;
	background: linear-gradient(90deg, #BE9C7C 0%, #FFF 100%);
}

.swiper {
	@include media-md {
		padding: 0;
	}

	margin-left: auto;
	padding: 0 0.75rem;
	max-width: calc((100% - 1297px) * 0.5 + 1297px);
}
</style>
