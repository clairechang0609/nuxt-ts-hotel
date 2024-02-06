<template>
	<Swiper class="custom-swiper-pagination" v-bind="bannerSwiperConfig">
		<SwiperSlide v-for="item in 4" :key="item">
			<div class="banner-wrap">
				<div class="w-100 container d-flex flex-column flex-md-row align-items-end align-items-md-center justify-content-between py-0">
					<div class="col-12 col-md-4 d-flex flex-column flex-md-row align-items-center mb-5">
						<div class="text-primary text-center text-md-start mb-3 mb-md-5">
							<h3 class="fs-4 fs-md-2">享樂酒店</h3>
							<h4 class="fs-6 fs-md-5">Enjoyment Luxury Hotel</h4>
						</div>
						<span class="banner-bar"></span>
					</div>
					<div class="col-10 col-md-7 title-box">
						<div class="w-100 box-container">
							<div class="text-white">
								<h2 class="banner-title mb-4 text-nowrap">高雄<br>豪華住宿之選</h2>
								<p class="fs-3 text-md-nowrap ">我們致力於為您提供無與倫比的奢華體驗與優質服務</p>
							</div>
							<nuxt-link class="w-100 btn viewmore-btn p-4 p-md-5 mb-4" to="/reservation">
								<span class="col-7 col-md-8 fs-5 text-end">
									立即訂房
								</span>
								<span class="col bar fw-bold ms-3"></span>
							</nuxt-link>
						</div>
					</div>
				</div>
			</div>
		</SwiperSlide>
	</Swiper>
</template>

<script setup>
import { Pagination } from 'swiper/modules';

const bannerSwiperConfig = {
	modules: [
		Pagination
	],
	slidesPerView: 1,
	spaceBetween: 0,
	loop: true,
	pagination: {
		clickable: true,
		renderBullet: function(index, className) {
			return `<span class="${className}" id="${index}"></span>`;
		}
	}
};
</script>

<style lang="scss" scoped>
.banner-wrap {
	@include media-md {
		padding: 12.25rem 0 7.25rem;
		background-image: url('/image/desktop/banner.png');
	}

	position: relative;
	padding: 2.5rem 1.25rem ;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	background-image: url('/image/mobile/banner.png');
	z-index: 1;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgb($gray-bg, .6);
		z-index: -1;
	}
}

.banner-bar {
	@include media-md {
		width: 100%;
		height: 2px;
	}

	display: block;
	width: 2px;
	height: 5rem;
	background: linear-gradient(90deg, #BE9C7C 0%, #FFF 100%);
}

.title-box {
	@include media-md {
		padding: 6rem 6.25rem 6rem 0;
		border-radius: 80px;
	}

	padding: 3.75rem 1.25rem 3.25rem 0;
	background: linear-gradient(180deg, rgb(255 255 255 / 0%) 0%, rgb(255 255 255 / 30%) 100%);
	border-radius: 40px;
	border-top: 1px solid #F5F7F9;
	border-right: 1px solid #F5F7F9;
	backdrop-filter: blur(10px);

	.box-container {
		transform: translateX(-7%);
	}
}

.banner-title {
	@include media-md {
		font-size: 6.25rem;
	}

	font-size: 3rem;
}

.viewmore-btn {
	margin-top: 3.75rem;
	background-color: $white;
	border-radius: 0.5rem;

	.bar {
		display: block;
		height: 1px;
		background-color: $black;
	}

	&:hover {
		color: $white;
		background-color: $primary;

		.bar {
			background-color: $white;
		}
	}
}
</style>
