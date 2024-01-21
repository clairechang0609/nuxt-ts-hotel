<template>
	<div class="wrap">
		<div class="container pb-0">
			<div class="title d-flex align-items-center">
				<h2 class="fs-1 text-primary">佳餚<br>美饌</h2>
				<span class="bar ms-5"></span>
			</div>
		</div>
		<Swiper class="me-0" v-bind="swiperConfig">
			<SwiperSlide v-for="item in foodList" :key="item.id">
				<IndexComponentFoodCard :card-info="item" />
			</SwiperSlide>
		</Swiper>
	</div>
</template>

<script lang="ts" setup>
interface Food {
	id: number;
	title: string;
	date: string;
	time: string;
	description: string;
};
const foodList:Food[] = [
	{
		id: 1,
		title: '海霸',
		date: 'SUN-MON',
		time: '11:00-22:00',
		description: '以新鮮海產料理聞名，我們的專業廚師選用高雄當地的海鮮，每一道菜都充滿海洋的鮮美與清甜。無論是烤魚、蒸蝦還是煮蛤蜊，都能讓您品嚐到最新鮮的海洋風味。'
	},
	{
		id: 2,
		title: '日食',
		date: 'SUN-MON',
		time: '17:00-22:00',
		description: '為您提供優質的牛排，每一塊肉都來自頂級的牛肉，經過專業廚師的巧手烹調，口感豐滿、風味絕佳。搭配我們的特製醬料，讓您的味蕾享受一場美味的盛宴。'
	},
	{
		id: 3,
		title: '山臻',
		date: 'SUN-MON',
		time: '11:30-20:30',
		description: '帶您進入一次辣味與鮮香兼具的川菜美食之旅。我們的廚師掌握正宗的川菜烹調技巧，從麻辣鍋到口水雞，每一道菜都有其獨特的風味，讓您回味無窮。'
	},
	{
		id: 4,
		title: '月永',
		date: 'SUN-MON',
		time: '11:00-22:00',
		description: '從鮮美的海鮮、經典的牛排，到各國的特色美食，我們都一應俱全。在這裡，您可以品嚐到世界各地的美食，每一道菜都由專業廚師用心製作，讓您在享受美食的同時，也能感受到我們的熱情與用心。'
	},
	{
		id: 5,
		title: '天潮',
		date: 'SUN-MON',
		time: '14:00-19:30',
		description: '我們提供各種精緻甜點與糕點，無論您喜歡的是巧克力蛋糕、法式馬卡龍，還是台灣傳統的糕點，都能在這裡找到。讓我們的甜點帶您進入一場繽紛的甜蜜旅程。'
	}
];

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
