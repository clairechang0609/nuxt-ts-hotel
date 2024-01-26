<template>
	<div class="info-bg bg-black text-white">
		<div class="wrap d-flex align-items-end flex-column flex-md-row">
			<div class="col-12 col-md-6">
				<IndexComponentPicSwiper :pic-list="currentRoom.imageUrlList"></IndexComponentPicSwiper>
			</div>
			<div class="col-12 col-md-6 room-info">
				<div class="col-12 col-md-8 d-flex flex-column">
					<div class="content">
						<div class="mb-4 mb-md-5">
							<h3 class="fs-2 fw-bold mb-3">{{ currentRoom.name }}</h3>
							<p>{{ currentRoom.description }}</p>
						</div>
						<p class="fs-3 fw-bold mb-4 mb-md-5">NT$ {{ toThousands(currentRoom.price) }}</p>
					</div>
					<nuxt-link class="btn viewmore-btn p-4 p-md-5 mb-4" to="/">
						<span class="col-9 text-end">
							查看更多
						</span>
						<span class="col bar fs-5 fw-bold ms-3"></span>
					</nuxt-link>
					<div class="d-flex justify-content-end">
						<button class="btn py-0 px-3 border-0" @click="currentRoomIndex --" :disabled="currentRoomIndex <= 0">
							<img src="/image/ic_ArrowLeft.svg" alt="">
						</button>
						<button class="btn py-0 px-3 border-0" @click="currentRoomIndex ++" :disabled="currentRoomIndex === roomList.length - 1">
							<img src="/image/ic_ArrowRight.svg" alt="">
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { GetRoomRes } from '~/types/rooms';

const getRoomList = async () => {
	const { response } = await useCustomFetch<GetRoomRes[]>('/api/v1/rooms', {
		method: 'GET'
	});
	return response.value?.result || [];
	// console.log(roomList.value);
};
const roomList:GetRoomRes[] = await getRoomList();
getRoomList();
const currentRoomIndex = ref(0);
const currentRoom = computed(() => {
	return roomList[currentRoomIndex.value];
});

</script>

<style lang="scss" scoped>
.info-bg {
	position: relative;
	z-index: 2;

	&::before {
		@include media-md {
			background-image: url('/image/desktop/line.png');
		}

		position: absolute;
		top: 5%;
		left: 0;
		width: 100%;
		height: 100%;
		background-position: 80% 0;
		background-repeat: no-repeat;
		background-size: contain;
		content: "";
		background-image: url('/image/mobile/line.png');
		z-index: 1;
	}

	&::after {
		@include media-md {
			top: 10%;
			left: 0;
			width: 100%;
			height: 100%;
			background-image: url('/image/desktop/bg.png');
		}

		position: absolute;
		top: 13%;
		left: 0;
		width: 100%;
		height: 100%;
		background-position: center;
		background-repeat: no-repeat;
		background-size: contain;
		content: "";
		background-image: url('/image/mobile/bg.png');
		z-index: -1;
	}
}

.wrap {
	margin-right: auto;
	padding: 10rem 0.75rem 5rem;
	z-index: 99;

	@include media-md {
		padding: 0 0 7.5rem;
	}
}

.room-info {
	position: relative;
	z-index: 99;

	.content {
		@include media-md {
			margin-right: calc((100vw - 1297px) * 0.5);
		}

		padding: 0 0.75rem;
	}
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
