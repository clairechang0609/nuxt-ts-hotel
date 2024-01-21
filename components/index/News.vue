<template>
	<div class="container d-flex flex-column flex-md-row">
		<div class="d-flex flex-column align-items-start me-5 mb-5">
			<h2 class="fs-1 text-primary mb-4 mb-5">最新<br>消息</h2>
			<span class="bar"></span>
		</div>
		<ul class="list-unstyled">
			<li v-for="item in newsList" :key="item.id" class="mb-5">
				<IndexComponentNewsCard :news-info="item"></IndexComponentNewsCard>
			</li>
		</ul>
	</div>
</template>

<script setup>
const newsList = [
	{
		id: 1,
		title: '秋季旅遊，豪華享受方案',
		description: '秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家人共度美好時光，都能在這裡找到最適合的方案。'
	},
	{
		id: 2,
		title: '輕鬆住房專案',
		description: '我們知道，有時候您只是需要一個舒適的地方放鬆心情。因此，我們推出了「輕鬆住房專案」，讓您無壓力地享受住宿。不管是短期的休息，還是長期的住宿，我們都會以最貼心的服務，讓您感到賓至如歸。'
	},
	{
		id: 3,
		title: '耶誕快樂，住房送禮',
		description: '聖誕節來臨，我們為您準備了特別的禮物！在聖誕期間訂房，不僅有特別優惠，還會送上我們精心準備的聖誕禮物。讓我們一起慶祝這個溫馨的節日吧！'
	}
];
</script>

<style lang="scss" scoped>

.bar {
	display: block;
	width: 160px;
	height: 2px;
	background: linear-gradient(90deg, #BE9C7C 0%, #FFF 100%);
}
</style>
