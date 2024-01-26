<template>
	<Swiper id="pic-swiper" v-bind="picSwiperConfig">
		<SwiperSlide v-for="(pic,index) in props.picList" :key="index">
			<div class="bg" :style="{ backgroundImage: `url('${pic}')` }"></div>
		</SwiperSlide>
	</Swiper>
</template>

<script setup>
import { Pagination } from 'swiper/modules';

const props = defineProps({
	picList: {
		type: Array,
		required: true
	}
});

const picSwiperConfig = {
	modules: [
		Pagination
	],
	slidesPerView: 1,
	spaceBetween: 24,
	loop: true,
	breakpoints: {
		768: {
			slidesPerView: 1,
			spaceBetween: 24
		}
	},
	pagination: {
		clickable: true,
		renderBullet: function(index, className) {
			return `<span class="${className}" id="${index}"></span>`;
		}
	}
};
</script>

<style lang="scss" scoped>
.swiper {
	@include media-md {
		margin: 0 5rem 0 0;
		padding: 0;
	}

	overflow: hidden;
	margin: 0 auto 1.5rem;
	border-radius: 0 0.5rem 0.5rem 0;
	z-index: 9999;

	&:deep(.swiper-pagination-bullet) {
		width: 2rem;
		height: 0.25rem;
		background-color: $white;
		border-radius: 100px;
		opacity: 1;
		transition: all 0.3s ease-in-out;
	}

	&:deep(.swiper-pagination-bullet-active) {
		width: 3.75rem;
		background-color: $primary;
	}
}

.bg {
	@include media-md {
		min-height: 700px;
	}

	width: 100%;
	min-height: 300px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

}

</style>
