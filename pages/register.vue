<template>
	<div class="col-10 col-md-6">
		<div class="container-with-navbar">
			<span class="text-primary mb-2">享樂酒店，誠摯歡迎</span>
			<h2 class="text-white fs-1 mb-3">立即註冊</h2>
			<RegisterStep :currentStep="currentStep"></RegisterStep>
			<div class="vee-wrap mt-5">
				<VeeForm v-if="currentStep === 1" @submit="currentStep ++" v-slot="{ meta: globalMata }">
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
					<div class="">
						<label for="confirm-password" class="form-label">確認密碼</label>
						<VeeField name="confirm-password" label="密碼" rules="required" v-slot="{ field }">
							<input type="password" class="form-control" id="confirm-password" placeholder="請再輸入一次密碼" v-bind="field">
						</VeeField>
					</div>
					<button class="w-100 btn btn-primary mt-5 mb-3" :disabled="!globalMata.valid" @click="currentStep ++">下一步</button>
				</VeeForm>
				<VeeForm v-else @submit="" v-slot="{ meta: globalMata }">
					<div class="mb-3">
						<label for="name" class="form-label">姓名</label>
						<VeeField name="name" label="姓名" rules="required" v-slot="{ field }">
							<input type="text" class="form-control" id="name" placeholder="請輸入姓名" v-bind="field">
						</VeeField>
					</div>
					<div class="mb-3">
						<label for="mobile" class="form-label">手機號碼</label>
						<VeeField name="mobile" label="手機號碼" rules="required" v-slot="{ field }">
							<input type="text" class="form-control" id="mobile" placeholder="請輸入手機號碼" v-bind="field">
						</VeeField>
					</div>
					<div class="mb-3 row">
						<label for="birthday" class="form-label">生日</label>
						<div class="col">
							<VeeField name="year" label="年" rules="required" v-slot="{ field }">
								<select class="form-control" id="year" v-bind="field">
									<option v-for="item in years" :value="item.value">{{ item.label }}</option>
								</select>
							</VeeField>
						</div>
						<div class="col px-0">
							<VeeField name="month" label="月" rules="required" v-slot="{ field }">
								<select class="form-control" id="month" v-bind="field">
									<option v-for="item in months" :value="item.value">{{ item.label }}</option>
								</select>
							</VeeField>
						</div>
						<div class="col">
							<VeeField name="day" label="日" rules="required" v-slot="{ field }">
								<select class="form-control" id="day" v-bind="field">
									<option v-for="item in days" :value="item.value">{{ item.label }}</option>
								</select>
							</VeeField>
						</div>
					</div>
				</VeeForm>
			</div>
			<div class="d-flex align-items-center">
				<span class="text-white">已經有會員了嗎？</span>
				<nuxt-link class="btn btn-link ms-2" to="/login">立即登入</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
definePageMeta({
	layout: 'login',
});
interface Dropdown {
	label: string;
	value: string;
}
	// 生成1971-2023年的陣列，且每個物件都符合Dropdown介面
	const years: Dropdown[] = Array.from({ length: 53 }, (_, i) => ({
		label: `${i + 1971}年`,
		value: `${i + 1971}`,
	}));
	// 生成1-12月的陣列，且每個物件都符合Dropdown介面
	const months: Dropdown[] = Array.from({ length: 12 }, (_, i) => ({
		label: `${i + 1}月`,
		value: `${i + 1}`,
	}));
	// 生成1-31日的陣列，且每個物件都符合Dropdown介面
	const days: Dropdown[] = Array.from({ length: 31 }, (_, i) => ({
		label: `${i + 1}日`,
		value: `${i + 1}`,
	}));
let currentStep = ref(2);

</script>
