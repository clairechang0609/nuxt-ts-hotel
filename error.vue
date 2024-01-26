<template>
	<div class="nuxt-error-wrap position-fixed start-0 top-0 end-0 bottom-0 d-flex flex-column
		align-items-center justify-content-center bg-primary-10">
		<div class="text-secondary text-center py-4">
			<h2 class="display-1 mb-2">{{ error.statusCode }}</h2>
			<h3 class="fw-normal fs-7 fs-md-6">{{ getObjValue(errorMessage, error.statusCode) || error.message }}</h3>
		</div>
		<NuxtLink to="/" class="btn btn-primary px-5">回首頁</NuxtLink>
	</div>
</template>

<script lang="ts" setup>
defineProps({
	error: {
		type: Object,
		required: true
	}
});

const errorMessage = {
	403: '無頁面權限',
	404: '找不到頁面',
	500: '頁面發生錯誤'
};
</script>
