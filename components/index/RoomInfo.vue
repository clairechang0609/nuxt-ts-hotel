<template>
	<div class="bg-black text-white">
		<div class="wrap">
			<Swiper class="position-relative me-0" id="room-swiper" v-bind="swiperConfig">
				<SwiperSlide v-for="item in roomList" :key="item._id" class="d-flex flex-column flex-md-row">
					<div class="col-12 col-md-6">
						<IndexComponentPicSwiper :pic-list="item.imageUrlList"></IndexComponentPicSwiper>
					</div>
					<div class="wave col-12 col-md-6 d-flex flex-column justify-content-end">
						<div class="room-info">
							<div class="content">
								<div class="mb-4 mb-md-5">
									<h3 class="fs-2 fw-bold mb-3">{{ item.name }}</h3>
									<p>{{ item.description }}</p>
								</div>
								<p class="fs-3 fw-bold mb-4 mb-md-5">NT$ {{ toThousands(item.price) }}</p>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<div class="col-12 col-md-6 sticky-btn">
					<nuxt-link class="w-100 btn viewmore-btn p-4 p-md-5 mb-4" to="/">
						<span class="col-9 text-end">
							查看更多
						</span>
						<span class="col bar fs-5 fw-bold ms-3"></span>
					</nuxt-link>
					<IndexComponentSwiperController />
				</div>
			</Swiper>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { GetRoomRes } from '~/types/rooms';

const swiperConfig = {
	modules: [
		SwiperNavigation
	],
	slidesPerView: 1,
	spaceBetween: 24,
	loop: true,
	allowTouchMove: false,
	breakpoints: {
		768: {
			slidesPerView: 1,
			spaceBetween: 24
		}
	}
};

const roomList = ref<GetRoomRes[]>([]);
const getRoomList = async () => {
	const { response } = await useCustomFetch<GetRoomRes[]>('/api/v1/rooms', {
		method: 'GET'
	});
	if (!response.value?.status) {
		return;
	}
	roomList.value = response.value.result;
};
getRoomList();
</script>

<style lang="scss" scoped>

.wrap {
	position: relative;
	margin-right: auto;
	padding: 10rem 0 5rem;

	@include media-md {
		padding: 0 0 7.5rem;
	}

	&::before {
		position: absolute;
		top: 5%;
		left: 13%;
		width: 87%;
		height: 100%;
		background-position: top;
		background-repeat: no-repeat;
		background-size: 200%;
		content: "";
		background-image: url('/image/mobile/line.png');
		z-index: 1;
	}
}

.wave {
	position: relative;

	&::before {
		@include media-md {
			position: absolute;
			top: 0;
			left: -20%;
			width: 120%;
			height: 100%;
			background-position: top;
			background-repeat: no-repeat;
			background-size: 100%;
			content: "";
			background-image: url('/image/mobile/line.png');
			z-index: 1;
		}
	}
}

.room-info {
	@include media-md {
		bottom: 10.5rem;
		padding-top: 5rem;
	}

	position: relative;
	z-index: 1;

	&::after {
		@include media-md {
			top: -20%;
			left: -100%;
			width: 200%;
			height: 200%;
			background-image: url('/image/mobile/bg.png');
		}

		position: absolute;
		top: -55%;
		left: -35%;
		width: 150%;
		height: 200%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: 100%;
		content: "";
		background-image: url('/image/desktop/bg.png');
		z-index: -1;
	}

	.content {
		@include media-md {
			margin-right: calc((100vw - 1297px) * 0.5);
		}

		padding: 0 0.75rem;
	}
}

.sticky-btn {
	@include media-md {
		position: absolute;
		bottom: 0;
		right: 0;
		margin-right: calc((100vw - 1297px) * 0.5);
		padding-left: 5rem;
	}

	padding: 0 0.75rem;
	z-index: 99;
}

.viewmore-btn {
	background-color: $white;

	.bar {
		display: block;
		height: 1px;
		background-color: $black;
	}

	&:hover {
		background-color: $primary;

		.bar {
			background-color: $white;
		}
	}
}
</style>
