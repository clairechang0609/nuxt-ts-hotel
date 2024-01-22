<template>
	<div class="d-flex justify-content-end">
		<button class="btn py-0 px-3 border-0" @click="swiper.slidePrev()">
			<img src="/image/ic_ArrowLeft.svg" alt="">
		</button>
		<button class="btn py-0 px-3 border-0" @click="swiper.slideNext()">
			<img src="/image/ic_ArrowRight.svg" alt="">
		</button>
	</div>
</template>

<script setup>
import { useSwiper } from 'swiper/vue';

const swiper = useSwiper();
</script>

<style lang="scss" scoped>
.btn {
	&:focus, &:active, &:hover {
		border: none;
	}
}
</style>
