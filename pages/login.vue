<template>
	<div class="col-10 col-md-6">
		<div class="container-with-navbar">
			<span class="text-primary mb-2">享樂酒店，誠摯歡迎</span>
			<h2 class="text-white fs-1 mb-5">立即開始旅程</h2>
			<div class="vee-wrap mb-5">
				<VeeForm @submit="login" v-slot="{ meta: globalMata }">
					<div class="mb-3">
						<label for="check_email" class="form-label">電子信箱</label>
						<VeeField name="check_email" label="電子信箱" rules="required|email" v-model="form.email" v-slot="{ field, errors }">
							<input type="email" class="form-control" id="check_email" placeholder="hello@exsample.com" v-bind="field" :class="{ 'is-invalid': errors.length }">
						</VeeField>
						<VeeErrorMessage name="check_email" class="form-text text-danger mt-2" />
					</div>
					<div class="mb-3">
						<label for="password" class="form-label">密碼</label>
						<VeeField name="password" label="密碼" rules="required" v-model="form.password" v-slot="{ field, errors }">
							<input type="password" class="form-control" id="password" placeholder="請輸入密碼" v-bind="field" :class="{ 'is-invalid': errors.length }">
						</VeeField>
						<VeeErrorMessage name="password" class="form-text text-danger mt-2" />
					</div>
					<div class="d-flex justify-content-between align-items-center">
						<div class="form-check">
							<input class="form-check-input" type="checkbox" id="remember_account" :value="true" v-model="isStoreAccount">
							<label class="form-check-label text-white" for="remember_account">
								記住帳號
							</label>
						</div>
						<button type="button" class="btn btn-link" @click="showForgotModal">忘記密碼？</button>
					</div>
					<button type="submit" class="w-100 btn btn-primary mt-5" :disabled="!globalMata.valid">會員登入</button>
				</VeeForm>
			</div>
			<div class="d-flex align-items-center">
				<span class="text-white">沒有會員嗎？</span>
				<nuxt-link class="btn btn-link ms-2" to="/register">前往註冊</nuxt-link>
			</div>
		</div>
		<LoginForgotModal ref="forgotRef" @close="closeForgotModal"></LoginForgotModal>
	</div>
</template>

<script lang="ts" setup>
import type { LoginRes } from '@/types/login';
const router = useRouter();
const { $store, $bootstrap } = useNuxtApp();
definePageMeta({
	layout: 'login'
});

const forgotRef = ref();
let forgotModal: bootstrap.Modal;
const showForgotModal = () => {
	forgotModal.show();
};
const closeForgotModal = () => {
	forgotModal.hide();
};
onMounted(() => {
	forgotModal = $bootstrap.modal(forgotRef.value.$el);
});
onBeforeUnmount(() => {
	// 記得加上 dispose，避免切換頁面時或是 HMR 看到殘留畫面
	forgotModal.dispose();
});
// 記住帳號
const storeAccount = useCookie('storeAccount');
const isStoreAccount = computed({
	get: () => {
		return storeAccount.value !== undefined;
	},
	set: val => {
		if (!val) {
			storeAccount.value = undefined;
		} else {
			storeAccount.value = form.value.email;
		}
	}
});

const form = ref({
	email: '',
	password: ''
});
// 登入
const login = async () => {
	const { response } = await useCustomFetch<LoginRes>('/api/v1/user/login', {
		method: 'POST',
		body: {
			...form.value
		}
	});
	if (!response.value?.status) {
		return;
	}
	if (isStoreAccount.value) {
		storeAccount.value = form.value.email;
	}
	const token = useCookie('token');
	token.value = response.value.token;
	$store.user.name = response.value.result.name;
	router.push('/');
};
</script>
