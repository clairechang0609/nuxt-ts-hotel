<template>
	<div class="bg-primary-10">
		<!-- Banner -->
		<div class="position-relative">
			<Swiper
				:modules="[ SwiperPagination ]"
				:pagination="{
					clickable: true,
					bulletClass: 'my-swiper-pagination-bullet',
					bulletActiveClass: 'my-swiper-pagination-bullet-active'
				}"
				:loop="true"
			>
				<SwiperSlide v-for="(item, index) in bannerImages" :key="`banner_${index}`">
					<div class="banner bg-gray-60" :style="{backgroundImage: `url(${item})`}"></div>
				</SwiperSlide>
			</Swiper>
			<div class="title-wrap position-absolute d-flex flex-column flex-md-row align-items-center">
				<div class="titles border-bottom-1 flex-md-shrink-0 d-flex flex-column align-items-center align-items-md-start">
					<h2 class="text-primary mb-2">享樂酒店</h2>
					<div class="title- text-primary">Enjoyment Luxury Hotel</div>
					<hr>
				</div>
				<h1 class="text-white flex-md-shrink-0">客房旅宿</h1>
			</div>
		</div>
		<div class="container">
			<div class="fs-5">房型選擇</div>
			<h2 class="mb-5 display-5 text-primary">各種房型，任您挑選</h2>
			<div class="room-wrap d-flex flex-column">
				<div class="room-card row g-0" v-for="(item, roomIndex) in roomData" :key="`room_${roomIndex}`">
					<Swiper
						class="room-swiper col-md-8 rounded-top"
						navigation
						:loop="true"
						:modules="[ SwiperPagination, SwiperNavigation ]"
						:pagination="{
							clickable: true,
							bulletClass: 'my-swiper-pagination-bullet',
							bulletActiveClass: 'my-swiper-pagination-bullet-active'
						}"
					>
						<SwiperSlide v-for="(image, indexPic) in item.imageUrlList" :key="`room_pic_${indexPic}`">
							<!-- <template v-for="(image, indexPic) in item.imageUrlList" :key="`room_pic_${indexPic}`"> -->
							<img :src="image" class="room-pic" :alt="`room_${indexPic}`">
							<!-- </template> -->
						</SwiperSlide>
					</Swiper>
					<div class="room-details col-md-4 bg-white rounded-end d-flex flex-column">
						<h2 class="mb-2">{{ item.name }}</h2>
						<span>{{ item.description }}</span>
						<div class="room-info-wrap d-flex gap-3">
							<div class="room-info border border-1 border-primary-40 p-3 rounded d-flex flex-column justify-content-center gap-2">
								<img src="/image/ic_Size.svg" alt="" class="icon">
								<span>{{ item.areaInfo }}</span>
							</div>
							<div class="room-info border border-1 border-primary-40 p-3 rounded d-flex flex-column justify-content-center gap-2">
								<img src="/image/Group.svg" alt="" class="icon">
								<span>{{ item.bedInfo }}</span>
							</div>
							<div class="room-info border border-1 border-primary-40 p-3 rounded d-flex flex-column justify-content-center gap-2">
								<img src="/image/ic_Person.svg" alt="" class="icon">
								<span>{{ item.maxPeople }}</span>
							</div>
						</div>
						<hr>
						<div class="d-flex justify-content-between py-3">
							<div class="text-primary">NT$ {{ toThousands(item.price) }}</div>
							<NuxtLink :to="`/room/${item._id}`">
								<img src="/image/ic_ArrowRight.svg" alt="icon">
							</NuxtLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { GetRoomRes } from '@/types/rooms';

definePageMeta({
	layout: 'main'
});
const bannerImages = ref([
	'/image/desktop/banner.png',
	'/image/desktop/room2-1.png',
	'/image/desktop/room3-1.png',
	'/image/desktop/room4-1.png'
]);

const roomData = computed(() => JSON.parse(JSON.stringify(roomRes.value?.result)));
const { response: roomRes, refresh: getRooms } = await useCustomFetch<GetRoomRes[]>('/api/v1/rooms', {
	method: 'GET'
});

</script>

<style lang="scss" scoped>
.icon {
	width: 24px;
	height: 24px;
}

.banner {
	height: 100vh;
	background-position: center;
	background-size: cover;
	background-blend-mode: multiply;
}

.title-wrap {
	top: 50%;
	left: 50%;
	z-index: 2;
	transform: translate(-50%, -50%);

	.titles {
		@include media-md {
			margin-right: 5rem;
			width: 500px;
		}
	}

	hr {
		margin: 1.25rem 0 2.5rem;
		width: 2px;
		height: 83px;
		color: $primary;
		background: linear-gradient(180deg, #BE9C7C 0%, #FFF 100%);
		border-width:0;
		opacity: 1;

		@include media-md {
			margin: 2.5rem 0 0;
			width: 100%;
			height: 2px;
			background: linear-gradient(90deg, #BE9C7C 0%, #FFF 100%);
		}
	}
}

.room-wrap {
	gap: 24px;
}

.room-card {
	// height: 351px;
	height: 100%;

	@include media-md {
		height: 457px;
	}

	.room-swiper {
		height: 200px;

		@include media-md {
			height: 457px;
		}

		.room-pic{
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}

	.room-details {
		padding: 16px;
		height: 100%;

		@include media-md {
			padding: 40px;
		}

		.room-info-wrap {
			margin-top: 24px;

			@include media-md {
				margin-top: 40px;
			}

			.room-info {
				width: 97px;
				height: 97px;

				span {
					white-space: nowrap;
				}
			}
		}

		hr {
			margin-top: 24px;
			width: 100%;
			margin-bottom: 24px;

			@include media-md {
				margin-top: 40px;
				margin-bottom: 40px;
			}
		}
	}
}
</style>
