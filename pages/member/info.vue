<template>
	<div class="row">
		<div class="col-lg-5 mb-4 mb-lg-0">
			<div class="card rounded-4">
				<div class="card-body p-4 p-md-5">
					<h5 class="card-title mb-5">修改密碼</h5>
					<div class="mb-4">
						<label for="email" class="form-label">電子信箱</label>
						<input type="email" id="email" class="form-control-plaintext" :value="userInfo.email" readonly>
					</div>
					<div class="mb-4" v-if="!editPassword">
						<label for="password" class="form-label">密碼</label>
						<div class="d-flex align-items-center justify-content-between">
							<img src="/image/password.svg" alt="password">
							<button type="button" class="btn btn-link" @click="editPassword = true">重設</button>
						</div>
					</div>
					<template v-else>
						<VeeForm v-slot="{ meta: globalMata }">
							<div class="mb-4">
								<label for="old_email" class="form-label">舊密碼</label>
								<VeeField name="old_email" label="舊密碼" rules="required|min:8" v-model="userPassword.oldPassword" v-slot="{ field, errors }">
									<input type="password" id="old_email" class="form-control" placeholder="請輸入舊密碼" v-bind="field" :class="{ 'is-invalid': errors.length }">
								</VeeField>
								<VeeErrorMessage name="old_email" class="form-text text-danger mt-2" />
							</div>
							<div class="mb-4">
								<label for="new_email" class="form-label">新密碼</label>
								<VeeField name="new_email" label="新密碼" rules="required|min:8" v-model="userPassword.newPassword" v-slot="{ field, errors }">
									<input type="password" id="new_email" class="form-control" placeholder="請輸入新密碼" v-bind="field" :class="{ 'is-invalid': errors.length }">
								</VeeField>
								<VeeErrorMessage name="new_email" class="form-text text-danger mt-2" />
							</div>
							<div class="mb-5">
								<label for="confirm_email" class="form-label">確認新密碼</label>
								<VeeField name="confirm_email" label="確認新密碼" :rules="{ is: userPassword.newPassword }" v-model="userPassword.confirmPassword" v-slot="{ field, errors }">
									<input type="password" id="confirm_email" class="form-control" placeholder="請再輸入一次新密碼" v-bind="field" :class="{ 'is-invalid': errors.length }">
								</VeeField>
								<VeeErrorMessage name="confirm_email" class="form-text text-danger mt-2" />
							</div>
							<button type="button" class="btn btn-primary w-100 w-md-auto" @click="submitPassword()" :disabled="!globalMata.valid">儲存設定</button>
						</VeeForm>
					</template>
				</div>
			</div>
		</div>
		<div class="col-lg-7">
			<div class="card rounded-4">
				<div class="card-body p-4 p-md-5">
					<h5 class="card-title mb-5">基本資料</h5>
					<template v-if="!editForm">
						<div class="mb-4">
							<label for="name" class="form-label">姓名</label>
							<input type="text" id="name" class="form-control-plaintext" :value="userInfo.name" readonly>
						</div>
						<div class="mb-4">
							<label for="phone" class="form-label">手機號碼</label>
							<input type="text" id="phone" class="form-control-plaintext" :value="userInfo.phone" readonly>
						</div>
						<div class="mb-4">
							<label for="birthday" class="form-label">生日</label>
							<input type="text" id="birthday" class="form-control-plaintext" :value="userInfo.birthday.slice(0, 10)" readonly>
						</div>
						<div class="mb-4">
							<label for="address" class="form-label">地址</label>
							<input type="text" id="address" class="form-control-plaintext" :value="addressDetail" readonly>
						</div>
						<button type="button" class="btn btn-outline-primary" @click="editForm = true">編輯</button>
					</template>
					<template v-else>
						<VeeForm @submit="submitForm" v-slot="{ meta: globalMata }">
							<div class="mb-4">
								<label for="name" class="form-label">姓名</label>
								<VeeField name="name" label="姓名" rules="required" v-model="userInfo.name" v-slot="{ field, errors }">
									<input type="text" id="name" class="form-control" placeholder="請輸入姓名" v-bind="field" :class="{ 'is-invalid': errors.length }">
								</VeeField>
								<VeeErrorMessage name="name" class="form-text text-danger mt-2" />
							</div>
							<div class="mb-4">
								<label for="phone" class="form-label">手機號碼</label>
								<VeeField name="phone" label="手機號碼" rules="required" v-model="userInfo.phone" v-slot="{ field, errors }">
									<input type="text" id="name" class="form-control" placeholder="請輸入手機號碼" v-bind="field" :class="{ 'is-invalid': errors.length }">
								</VeeField>
								<VeeErrorMessage name="phone" class="form-text text-danger mt-2" />
							</div>
							<div class="mb-4 row gx-2">
								<label for="birthday" class="form-label">生日</label>
								<div class="col">
									<VeeField name="year" label="年" rules="required" v-model="editBirthday[0]" @change="editBirthday = editBirthday" v-slot="{ field, errors }">
										<select class="form-select" id="year" v-bind="field" :class="{ 'is-invalid': errors.length }">
											<option value="" disabled selected>年</option>
											<option v-for="item in years" :value="item.id" :key="item.id">{{ item.name }}</option>
										</select>
									</VeeField>
								</div>
								<div class="col">
									<VeeField name="month" label="月" rules="required" v-model="editBirthday[1]" @change="editBirthday = editBirthday" v-slot="{ field, errors }">
										<select class="form-select" id="month" v-bind="field" :class="{ 'is-invalid': errors.length }">
											<option value="" disabled selected>月</option>
											<option v-for="item in months" :value="item.id" :key="item.id">{{ item.name }}</option>
										</select>
									</VeeField>
								</div>
								<div class="col">
									<VeeField name="day" label="日" rules="required" v-model="editBirthday[2]" @change="editBirthday = editBirthday" v-slot="{ field, errors }">
										<select class="form-select" id="day" v-bind="field" :class="{ 'is-invalid': errors.length }">
											<option value="" disabled selected>日</option>
											<option v-for="item in days" :value="item.id" :key="item.id">{{ item.name }}</option>
										</select>
									</VeeField>
								</div>
							</div>
							<div class="mb-5 row gx-2">
								<label for="confirm_email" class="form-label">地址</label>
								<div class="col-6 pe-0 mb-3">
									<VeeField name="county" label="縣市" rules="required" v-model="county" @change="userInfo.address.zipcode = ''" v-slot="{ field, errors }">
										<select class="form-select" id="county" v-bind="field" :class="{ 'is-invalid': errors.length }">
											<option value="" :selected="county === ''" disabled>縣市</option>
											<option v-for="item in getCounties" :value="item.id" :key="item.id">{{ item.name }}</option>
										</select>
									</VeeField>
								</div>
								<div class="col-6">
									<VeeField name="distList" label="區域" rules="required" v-model="userInfo.address.zipcode" v-slot="{ field, errors }">
										<select class="form-select" id="distList" v-bind="field" :class="{ 'is-invalid': errors.length }">
											<option value="" :selected="userInfo.address.zipcode === ''" disabled>區域</option>
											<option v-for="item in getDist(county)" :value="item.zipcode" :key="item.id">{{ item.city }}</option>
										</select>
									</VeeField>
								</div>
								<div class="col-12">
									<VeeField name="address" label="地址" rules="required" v-model="userInfo.address.detail" v-slot="{ field, errors }">
										<input type="text" class="form-control" id="address" placeholder="請輸入詳細地址" v-bind="field" :class="{ 'is-invalid': errors.length }">
									</VeeField>
									<VeeErrorMessage name="address" class="form-text text-danger mt-2" />
								</div>
							</div>
							<button type="submit" class="btn btn-primary w-100 w-md-auto" :disabled="!globalMata.valid">儲存設定</button>
						</VeeForm>
					</template>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { User } from '@/types/user';
const { getCounties, getDist, districts } = useZipcode();
const { $store, $notify } = useNuxtApp();

// 年/月/日選單
// 1971-2023年
const years = Array.from({ length: 53 }, (_, i) => ({
	name: `${i + 1971}年`,
	id: `${i + 1971}`
}));
// 1-12月
const months = Array.from({ length: 12 }, (_, i) => ({
	name: `${i + 1}月`,
	id: `${i + 1}`
}));
// 1-31日
const days = Array.from({ length: 31 }, (_, i) => ({
	name: `${i + 1}日`,
	id: `${i + 1}`
}));

// 會員基本資料
const defaultUserInfo: User = {
	address: {
		detail: '',
		zipcode: ''
	},
	_id: '',
	name: '',
	email: '',
	phone: '',
	birthday: ''
};

const userInfo = ref<User>(defaultUserInfo);
const county = ref('');
// 取得會員資料
const { response: memberInfo } = await useCustomFetch<User>('/api/v1/user', {
	method: 'GET'
});
watch(() => memberInfo, () => {
	userInfo.value = memberInfo.value?.result || userInfo.value;
	$store.user.name = userInfo.value.name;
	county.value = districts.find(item => String(item.zipcode) === String(userInfo.value.address.zipcode))?.county || '';
}, {
	immediate: true
});
const addressDetail = computed(() => {
	const result = districts.find(item => String(item.zipcode) === String(userInfo.value.address.zipcode));
	return `${result?.county || ''}${result?.city || ''}${userInfo.value?.address.detail || ''}`;
});

// 傳送使用者資料
const sendUserData = async (params: object) => {
	const { response } = await useCustomFetch<User>('/api/v1/user', {
		method: 'PUT',
		body: {
			userId: userInfo.value?._id,
			...JSON.parse(JSON.stringify(params))
		}
	});
	if (!response.value?.status) {
		return;
	}
	$notify({
		type: 'success',
		text: '編輯成功'
	});
	return response.value.result;
};

// 編輯基本資料
const editForm = ref(false);
const editBirthday = computed({
	get() {
		return userInfo.value?.birthday.slice(0, 10).split('-').map(item => String(Number(item)));
	},
	set(val) {
		if (userInfo.value) {
			userInfo.value.birthday = val ? val.join('-') : '';
		}
	}
});
// 修改基本資料
const submitForm = async () => {
	const result = await sendUserData(userInfo.value);
	if (!result) {
		return;
	}
	editForm.value = false;
	userInfo.value = result;
};

// 編輯密碼
const editPassword = ref(false);
const userPassword = reactive({
	oldPassword: '',
	newPassword: '',
	confirmPassword: ''
});
// 修改密碼
const submitPassword = async () => {
	const result = await sendUserData(userPassword);
	if (!result) {
		return;
	}
	editPassword.value = false;
};
</script>

<style lang="scss" scoped>
.card-body {
	.form-label {
		color: $black;
	}

	.form-control-plaintext {
		font-weight: 700;
		color: $black;
	}
}
</style>
