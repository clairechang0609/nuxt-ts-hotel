<template>
	<div class="container d-flex flex-column flex-md-row">
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
const newsList = ref<GetNewsRes[]>([]);
const getNews = async () => {
	const { response } = await useCustomFetch<GetNewsRes[]>('/api/v1/home/news', {
		method: 'GET'
	});
	if (!response.value?.status) {
		return;
	}
	newsList.value = response.value.result;
};
getNews();
</script>

<style lang="scss" scoped>

.bar {
	display: block;
	width: 160px;
	height: 2px;
	background: linear-gradient(90deg, #BE9C7C 0%, #FFF 100%);
}
</style>
