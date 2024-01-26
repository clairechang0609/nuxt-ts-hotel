<template>
	<div class="news-bg container d-flex flex-column flex-md-row">
		<div class="d-flex flex-column align-items-start me-5 mb-5">
			<h2 class="fs-1 text-primary mb-4 mb-5">最新<br>消息</h2>
			<span class="bar"></span>
		</div>
		<ul class="list-unstyled">
			<li v-for="(item,index) in newsList" :key="index" class="mb-5">
				<IndexComponentNewsCard :news-info="item"></IndexComponentNewsCard>
			</li>
		</ul>
	</div>
</template>

<script lang="ts" setup>
import type { GetNewsRes } from '@/types/news';

// 最新消息
const getNews = async () => {
	const { response } = await useCustomFetch<GetNewsRes[]>('/api/v1/home/news', {
		method: 'GET'
	});
	if (!response.value?.status) {
		return;
	}
	return response.value.result;
};
const newsList = await getNews();
</script>

<style lang="scss" scoped>
.news-bg {
	position: relative;
	z-index: 1;

	&::before {
		@include media-md {
			top: 5%;
			right: -10%;
			width: 12.5rem;
			height: 12.5rem;
			background: url('/image/desktop/dot.png') no-repeat center center;
		}

		content: '';
		position: absolute;
		top: 2%;
		right: 5%;
		width: 6.25rem;
		height: 6.25rem;
		background: url('/image/mobile/dot.png') no-repeat center center;
		background-size: cover;
		z-index: 0;
	}
}

.bar {
	display: block;
	width: 160px;
	height: 2px;
	background: linear-gradient(90deg, #BE9C7C 0%, #FFF 100%);
}
</style>
