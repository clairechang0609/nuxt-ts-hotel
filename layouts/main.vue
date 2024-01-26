<template>
	<div>
		<TheHeader :bg-color="bgColor" />
		<div class="main-container">
			<slot />
		</div>
		<TheFooter />
	</div>
</template>

<script setup lang="ts">
const bgColor = ref('bg-transparent');

// 監聽視窗滾動事件
const scrollHandler = () => {
	// const headerHeight = 120;
	const scrollY = window.scrollY;
	if (scrollY >= 120) {
		bgColor.value = 'bg-black';
	} else {
		bgColor.value = 'bg-transparent';
	}
};

onMounted(() => {
	window.addEventListener('scroll', scrollHandler);
});
</script>
