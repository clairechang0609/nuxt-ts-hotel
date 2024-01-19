<template>
	<div class="bg-primary-10">
		<div class="position-relative">
			<Swiper
				class="room-swiper col-12 col-md-6"
				:modules="[ SwiperPagination ]"
				:pagination="{ 
					clickable: true,
					bulletClass: 'my-swiper-pagination-bullet',
					bulletActiveClass: 'my-swiper-pagination-bullet-active'
				}"
				:loop="true"
				>
				<SwiperSlide v-for="(item, index) in images" :key="index">
					<img class="room-pic" :src="item" :alt="`room${index+1}`">
				</SwiperSlide>
			</Swiper>
			<button type="button" class="check-more-btn btn btn-outline-primary bg-white	me-3 position-absolute">看更多</button>
		</div>
		<div class="container">
			<h2 class="mb-2">尊爵雙人房</h2>
			<div class="mb-4">
				享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
			</div>
			<div class="mb-3">房型基本資訊</div>
			<div class="room-info-wrap d-flex gap-3 mb-3">
				<div class="room-info border border-1 border-primary-40 p-3 rounded d-flex flex-column justify-content-center gap-2">
					<img src="/image/ic_Size.svg" alt="" class="icon">
					<span>24坪</span>
				</div>
				<div class="room-info border border-1 border-primary-40 p-3 rounded d-flex flex-column justify-content-center gap-2">
					<img src="/image/ic_Size.svg" alt="" class="icon">
					<span>1張大床</span>
				</div>
				<div class="room-info border border-1 border-primary-40 p-3 rounded d-flex flex-column justify-content-center gap-2">
					<img src="/image/ic_Size.svg" alt="" class="icon">
					<span>2-4人</span>
				</div>
			</div>
			<div class="mb-3">房間格局</div>
			<!-- <ul class="bg-white p-4 d-flex gap-4 rounded">
				<li>市景</li>
				<li>獨立衛浴</li>
				<li>客廳</li>
				<li>書房</li>
			</ul> -->
		</div>
	</div>
</template>

<script setup>

const images = ref([
	'https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-1.png?raw=true',
	'https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-2.png?raw=true',
	'https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-3.png?raw=true'
])
</script>

<style lang="scss" scoped>

.room-swiper {
	margin-top: 72px;
	height: 251px;

	@include media-md {
		// display: none;
		margin-top: 120px;
		height: 600px;
	}

	.room-pic {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
}

.check-more-btn {
	bottom: 23px;
	right: 13px;
	z-index: 2;
}
</style>
