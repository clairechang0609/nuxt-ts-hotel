<template>
	<div class="col-10 col-md-6">
		<div class="container-with-navbar">
			<span class="text-primary mb-2">享樂酒店，誠摯歡迎</span>
			<h2 class="text-white fs-1 mb-5">立即開始旅程</h2>
			<div class="vee-wrap mb-5">
				<VeeForm @submit="submitForm" v-slot="{ meta: globalMata }">
					<div class="mb-3">
						<label for="email" class="form-label">電子信箱</label>
						<VeeField name="email" label="電子信箱" rules="required" v-slot="{ field }">
							<input type="email" class="form-control" id="email" placeholder="hello@exsample.com" v-bind="field">
						</VeeField>
					</div>
					<div class="mb-3">
						<label for="password" class="form-label">密碼</label>
						<VeeField name="password" label="密碼" rules="required" v-slot="{ field }">
							<input type="password" class="form-control" id="password" placeholder="請輸入密碼" v-bind="field">
						</VeeField>
					</div>
					<div class="d-flex justify-content-between align-items-center">
						<div class="form-check">
							<input class="form-check-input" type="checkbox" value="" id="remember_account">
							<label class="form-check-label text-white" for="remember_account">
								記住帳號
							</label>
						</div>
						<nuxt-link class="btn btn-link" to="/#">忘記密碼？</nuxt-link>
					</div>
					<button class="w-100 btn btn-primary mt-5" :disabled="!globalMata.valid">會員登入</button>
				</VeeForm>
			</div>
			<div class="d-flex align-items-center">
				<span class="text-white">沒有會員嗎？</span>
				<nuxt-link class="btn btn-link ms-2" to="/register">前往註冊</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'login'
});
</script>
