<template>
	<div class="backdrop position-fixed start-0 top-0 end-0 bottom-0 d-flex flex-column
		align-items-center justify-content-center" v-if="isLoading">
		<div class="spinner-border text-primary-80 opacity-75" role="status">
			<span class="visually-hidden">Loading...</span>
		</div>
	</div>
</template>

<script setup>
const isLoading = useLoading();
</script>
