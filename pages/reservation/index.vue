<template>
	<div class="bg-primary-10">
		<div class="container container-with-navbar">
			<h2 class="mb-5">我是預約房型頁</h2>
			<div class="test">
				<NuxtLink :to="`/reservation/success?id=${orderId}`" class="btn btn-success mb-5">點我看預約成功頁</NuxtLink>
				<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum odit velit porro voluptate, sit ipsa sunt, sapiente, cumque excepturi reprehenderit voluptatibus consequuntur dolor? Sunt dicta quam, enim temporibus quaerat rerum.</p>
			</div>
		</div>
	</div>
</template>

<script setup>
// TODO: 這是假的 id
const orderId = ref('65a8c16758767d4550207785');
</script>

<style lang="scss" scoped>
.test {
	height: 500px;
}
</style>
