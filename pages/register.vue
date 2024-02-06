<template>
	<div class="col-10 col-md-6">
		<div class="container-with-navbar">
			<span class="text-primary mb-2">享樂酒店，誠摯歡迎</span>
			<h2 class="text-white fs-1 mb-3">立即註冊</h2>
			<RegisterStep :current-step="currentStep"></RegisterStep>
			<div class="vee-wrap mt-5">
				<VeeForm v-if="currentStep === 1" v-slot="{ meta: globalMata }">
					<div class="mb-3">
						<label for="email" class="form-label">電子信箱</label>
						<VeeField name="email" label="電子信箱" rules="required|email" v-model="form.email" v-slot="{ field, errors }">
							<input type="email" class="form-control" id="email" placeholder="hello@exsample.com" v-bind="field" :class="{ 'is-invalid': errors.length }">
							<VeeErrorMessage name="email" class="form-text text-danger mt-2" />
						</VeeField>
					</div>
					<div class="mb-3">
						<label for="password" class="form-label">密碼</label>
						<VeeField name="password" label="密碼" rules="required|min:8|password" v-model="form.password" v-slot="{ field, errors }">
							<input type="password" class="form-control" id="password" placeholder="請輸入密碼" v-bind="field" :class="{ 'is-invalid': errors.length }">
							<VeeErrorMessage name="password" class="form-text text-danger mt-2" />
						</VeeField>
					</div>
					<div class="">
						<label for="confirm-password" class="form-label">確認密碼</label>
						<VeeField name="confirm-password" label="密碼" :rules="{ required: true, is: form.password }" v-model="form.confirmPassword" v-slot="{ field, errors }">
							<input type="password" class="form-control" id="confirm-password" placeholder="請再輸入一次密碼" v-bind="field" :class="{ 'is-invalid': errors.length }">
							<VeeErrorMessage name="confirm-password" class="form-text text-danger mt-2" />
						</VeeField>
					</div>
					<button type="button" class="w-100 btn btn-primary mt-5 mb-3" :disabled="!globalMata.valid" @click="submit('first')">下一步</button>
				</VeeForm>
				<VeeForm v-else v-slot="{ meta: globalMata }">
					<div class="mb-3">
						<label for="name" class="form-label">姓名</label>
						<VeeField name="name" label="姓名" rules="required" v-model="form.name" v-slot="{ field, errors }">
							<input type="text" class="form-control" id="name" placeholder="請輸入姓名" v-bind="field" :class="{ 'is-invalid': errors.length }">
							<VeeErrorMessage name="name" class="form-text text-danger mt-2" />
						</VeeField>
					</div>
					<div class="mb-3">
						<label for="mobile" class="form-label">手機號碼</label>
						<VeeField name="mobile" label="手機號碼" rules="required" v-model="form.mobile" v-slot="{ field, errors }">
							<input type="text" class="form-control" id="mobile" placeholder="請輸入手機號碼" v-bind="field" :class="{ 'is-invalid': errors.length }">
							<VeeErrorMessage name="mobile" class="form-text text-danger mt-2" />
						</VeeField>
					</div>
					<div class="mb-3 row">
						<label for="birthday" class="form-label">生日</label>
						<div class="col">
							<VeeField name="year" label="年" rules="required" v-model="form.year" v-slot="{ field, errors }">
								<select class="form-control" id="year" v-bind="field" :class="{ 'is-invalid': errors.length }">
									<option value="" disabled selected>年</option>
									<option v-for="(item, index) in years" :value="item.id" :key="index">{{ item.name }}</option>
								</select>
								<VeeErrorMessage name="year" class="form-text text-danger mt-2" />
							</VeeField>
						</div>
						<div class="col px-0">
							<VeeField name="month" label="月" rules="required" v-model="form.month" v-slot="{ field, errors }">
								<select class="form-control" id="month" v-bind="field" :class="{ 'is-invalid': errors.length }">
									<option value="" disabled selected>月</option>
									<option v-for="(item, index) in months" :value="item.id" :key="index">{{ item.name }}</option>
								</select>
								<VeeErrorMessage name="month" class="form-text text-danger mt-2" />
							</VeeField>
						</div>
						<div class="col">
							<VeeField name="day" label="日" rules="required" v-model="form.day" v-slot="{ field, errors }">
								<select class="form-control" id="day" v-bind="field" :class="{ 'is-invalid': errors.length }">
									<option value="" disabled selected>日</option>
									<option v-for="(item, index) in days" :value="item.id" :key="index">{{ item.name }}</option>
								</select>
								<VeeErrorMessage name="day" class="form-text text-danger mt-2" />
							</VeeField>
						</div>
					</div>
					<div class="mb-3 row">
						<label for="birthday" class="form-label">地址</label>
						<div class="col-6 pe-0 mb-3">
							<VeeField name="county" label="縣市" rules="required" v-model="form.county" v-slot="{ field, errors }">
								<select class="form-control" id="county" v-bind="field" :class="{ 'is-invalid': errors.length }">
									<option value="" disabled selected>縣市</option>
									<option v-for="(item, index) in getCounties" :value="item.id" :key="index">{{ item.name }}</option>
								</select>
								<VeeErrorMessage name="county" class="form-text text-danger mt-2" />
							</VeeField>
						</div>
						<div class="col-6">
							<VeeField name="distList" label="區域" rules="required" v-model="form.dist" v-slot="{ field, errors }">
								<select class="form-control" id="distList" v-bind="field" :class="{ 'is-invalid': errors.length }">
									<option value="" disabled selected>區域</option>
									<option v-for="(item, index) in getDist(form.county)" :value="item.zipcode" :key="index">{{ item.city }}</option>
								</select>
								<VeeErrorMessage name="distList" class="form-text text-danger mt-2" />
							</VeeField>
						</div>
						<div class="col-12">
							<VeeField name="address" label="地址" rules="required" v-slot="{ field, errors }">
								<input type="text" class="form-control" id="address" placeholder="請輸入詳細地址" v-bind="field" v-model="form.address" :class="{ 'is-invalid': errors.length }">
							</VeeField>
							<VeeErrorMessage name="address" class="form-text text-danger mt-2" />
						</div>
					</div>
					<div class="form-check">
						<input class="form-check-input" type="checkbox" :value="true" id="remember_account" v-model="form.isAgree">
						<label class="form-check-label text-white" for="remember_account">
							我已閱讀並同意本網站個資使用規範
						</label>
					</div>
					<button type="button" class="w-100 btn btn-primary mt-5" :disabled="!globalMata.valid || !form.isAgree" @click="submit('second')">完成註冊</button>
				</VeeForm>
			</div>
			<div class="d-flex align-items-center mt-3">
				<span class="text-white">已經有會員了嗎？</span>
				<nuxt-link class="btn btn-link ms-2" to="/login">立即登入</nuxt-link>
			</div>
		</div>
	</div>
</template>

<script setup>
const { getCounties, getDist } = useZipcode();
const { $notify, $store } = useNuxtApp();
const router = useRouter();
definePageMeta({
	layout: 'login'
});

const currentStep = ref(1);

// 生成1971-2023年的陣列，且每個物件都符合Dropdown介面
const years = Array.from({ length: 53 }, (_, i) => ({
	name: `${i + 1971}年`,
	id: `${i + 1971}`
}));
// 生成1-12月的陣列，且每個物件都符合Dropdown介面
const months = Array.from({ length: 12 }, (_, i) => ({
	name: `${i + 1}月`,
	id: `${i + 1}`
}));
// 生成1-31日的陣列，且每個物件都符合Dropdown介面
const days = Array.from({ length: 31 }, (_, i) => ({
	name: `${i + 1}日`,
	id: `${i + 1}`
}));

const form = ref({
	email: '',
	password: '',
	confirmPassword: '',
	name: '',
	mobile: '',
	year: '',
	month: '',
	day: '',
	county: '',
	dist: '',
	address: '',
	isAgree: false
});
// 檢查信箱是否已被註冊
const verifyEmail = async () => {
	const configData = {
		email: form.value.email
	};
	const { response } = await useCustomFetch('/api/v1/verify/email', {
		method: 'POST',
		body: { ...configData }
	});
	if (!response.value?.status) {
		return;
	}
	if (response.value.result.isEmailExists) {
		$notify({
			type: 'danger',
			text: '此信箱已被註冊'
		});
		return;
	}
	currentStep.value = 2;
};
// 註冊
const register = async () => {
	const configData = {
		name: form.value.name,
		email: form.value.email,
		password: form.value.password,
		phone: form.value.mobile,
		birthday: `${form.value.year}/${form.value.month}/${form.value.day}`,
		address: {
			zipcode: form.value.dist,
			detail: form.value.address
		}
	};
	const { response } = await useCustomFetch('/api/v1/user/signup', {
		method: 'POST',
		body: { ...configData }
	});
	if (!response.value?.status) {
		return;
	}
	const token = useCookie('token');
	token.value = response.value.token;
	$store.user.name = response.result.name;
	router.push('/');
};
// 送出表單
const submit = step => {
	switch (step) {
	case 'first':
		verifyEmail();
		break;
	case 'second':
		register();
		break;
	}
};
</script>
