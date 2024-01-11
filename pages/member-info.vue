<template>
	<div class="bg-secondary">
		<div class="container-with-navbar banner-wrap">
			<div class="container d-flex flex-column flex-md-row align-items-md-center h-100 px-4">
				<img :src="userPhoto" :alt="form.name" class="user-photo rounded-circle me-4">
				<h2 class="text-white fs-3 fs-md-1 mt-3 mt-md-0">Hello，{{ form.name }}</h2>
			</div>
		</div>
		<div class="container">
			<ul class="nav">
				<li class="nav-item" v-for="item in tabs" :key="item.id">
					<a class="nav-link" href="#" :class="{ 'active': item.id === selectedTab }" @click.prevent="selectedTab = item.id">
						{{ item.name }}
					</a>
				</li>
			</ul>
			<div class="info-wrap row" v-if="selectedTab === 'info'">
				<div class="col-lg-5">
					<div class="card rounded-4">
						<div class="card-body p-5">
							<h5 class="card-title mb-5">修改密碼</h5>
							<div class="mb-4">
								<label for="email" class="form-label">電子信箱</label>
								<input type="email" id="email" class="form-control-plaintext" :value="form.email" readonly>
							</div>
							<div class="mb-4" v-if="!editPassword">
								<label for="password" class="form-label">密碼</label>
								<div class="d-flex align-items-center justify-content-between">
									<svg width="152" height="24" viewBox="0 0 152 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<circle cx="4" cy="12" r="4" fill="black" />
										<circle cx="20" cy="12" r="4" fill="black" />
										<circle cx="36" cy="12" r="4" fill="black" />
										<circle cx="52" cy="12" r="4" fill="black" />
										<circle cx="68" cy="12" r="4" fill="black" />
										<circle cx="84" cy="12" r="4" fill="black" />
										<circle cx="100" cy="12" r="4" fill="black" />
										<circle cx="116" cy="12" r="4" fill="black" />
										<circle cx="132" cy="12" r="4" fill="black" />
										<circle cx="148" cy="12" r="4" fill="black" />
									</svg>
									<button type="button" class="btn btn-link" @click="editPassword = true">重設</button>
								</div>
							</div>
							<template v-else>
								<VeeForm v-slot="{ meta: globalMata }">
									<div class="mb-4">
										<label for="old_email" class="form-label">舊密碼</label>
										<VeeField name="old_email" label="舊密碼" rules="required" v-model="form.old_password" v-slot="{ field, meta }">
											<input type="password" id="old_email" class="form-control" placeholder="請輸入舊密碼" v-bind="field" :class="{ 'is-invalid': meta.errors.length }">
										</VeeField>
										<VeeErrorMessage name="old_email" class="form-text text-danger mt-2" />
									</div>
									<div class="mb-4">
										<label for="new_email" class="form-label">新密碼</label>
										<VeeField name="new_email" label="新密碼" rules="required" v-model="form.new_password" v-slot="{ field, meta }">
											<input type="password" id="new_email" class="form-control" placeholder="請輸入新密碼" v-bind="field" :class="{ 'is-invalid': meta.errors.length }">
										</VeeField>
										<VeeErrorMessage name="new_email" class="form-text text-danger mt-2" />
									</div>
									<div class="mb-5">
										<label for="confirm_email" class="form-label">確認新密碼</label>
										<VeeField name="confirm_email" label="確認新密碼" rules="required" v-model="form.confirm_password" v-slot="{ field, meta }">
											<input type="password" id="confirm_email" class="form-control" placeholder="請再輸入一次新密碼" v-bind="field" :class="{ 'is-invalid': meta.errors.length }">
										</VeeField>
										<VeeErrorMessage name="confirm_email" class="form-text text-danger mt-2" />
									</div>
									<button type="button" class="btn btn-primary" @click="submitPassword()" :disabled="!globalMata.valid">儲存設定</button>
								</VeeForm>
							</template>
						</div>
					</div>
				</div>
				<div class="col-lg-7">
					<div class="card rounded-4">
						<div class="card-body p-5">
							<h5 class="card-title mb-5">基本資料</h5>
							<template v-if="!editForm">
								<div class="mb-4">
									<label for="name" class="form-label">姓名</label>
									<input type="text" id="name" class="form-control-plaintext" :value="form.name" readonly>
								</div>
								<div class="mb-4">
									<label for="mobile" class="form-label">手機號碼</label>
									<input type="text" id="mobile" class="form-control-plaintext" :value="form.mobile" readonly>
								</div>
								<div class="mb-4">
									<label for="birthday" class="form-label">生日</label>
									<input type="text" id="birthday" class="form-control-plaintext" :value="form.birthday" readonly>
								</div>
								<div class="mb-4">
									<label for="address" class="form-label">地址</label>
									<input type="text" id="address" class="form-control-plaintext" :value="form.address" readonly>
								</div>
							</template>
							<template v-else>
								<VeeForm @submit="submitForm" v-slot="{ meta: globalMata }">
									<div class="mb-4">
										<label for="old_email" class="form-label">舊密碼</label>
										<VeeField name="old_email" label="舊密碼" rules="required" v-model="form.old_password" v-slot="{ field, meta }">
											<input type="password" id="old_email" class="form-control" placeholder="請輸入舊密碼" v-bind="field" :class="{ 'is-invalid': meta.errors.length }">
										</VeeField>
										<VeeErrorMessage name="old_email" class="form-text text-danger mt-2" />
									</div>
									<div class="mb-4">
										<label for="new_email" class="form-label">新密碼</label>
										<VeeField name="new_email" label="新密碼" rules="required" v-model="form.new_password" v-slot="{ field, meta }">
											<input type="password" id="new_email" class="form-control" placeholder="請輸入新密碼" v-bind="field" :class="{ 'is-invalid': meta.errors.length }">
										</VeeField>
										<VeeErrorMessage name="new_email" class="form-text text-danger mt-2" />
									</div>
									<div class="mb-5">
										<label for="confirm_email" class="form-label">確認新密碼</label>
										<VeeField name="confirm_email" label="確認新密碼" rules="required" v-model="form.confirm_password" v-slot="{ field, meta }">
											<input type="password" id="confirm_email" class="form-control" placeholder="請再輸入一次新密碼" v-bind="field" :class="{ 'is-invalid': meta.errors.length }">
										</VeeField>
										<VeeErrorMessage name="confirm_email" class="form-text text-danger mt-2" />
									</div>
									<button type="submit" class="btn btn-primary" :disabled="!globalMata.valid">儲存設定</button>
								</VeeForm>
							</template>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="bg-line"></div>
	</div>
</template>

<script setup>
const { fetchData } = useApiFetcher();

const tabs = ref([
	{
		id: 'info',
		name: '個人資料'
	},
	{
		id: 'orders',
		name: '我的訂單'
	}
]);
const selectedTab = ref('info');

const userPhoto = computed(() => form.photo || '/image/member.svg');

const form = ref({
	old_password: '',
	new_password: '',
	confirm_password: '',
	email: 'Jessica@exsample.com',
	name: 'Jessica Wang',
	photo: '',
	mobile: '0912345678',
	birthday: '1990-08-15',
	address: '高雄市新興區六角路 123 號'
});
const editPassword = ref(false);
const submitPassword = async () => {
	const response = await fetchData({
		url: '/api/v1/user',
		method: 'GET'
	});
	if (!response) {
		return;
	}
	console.log('submitPassword', response);
};
const editForm = ref(false);
const submitForm = () => {
	console.log('submitForm');
};
</script>

<style lang="scss" scoped>
.user-photo {
	width: 72px;
	height: 72px;

	@include media-md {
		width: 144px;
		height: 144px;
	}
}

.banner-wrap {
	height: 210px;
	background-repeat: no-repeat;
	background-size: cover auto;
	background-image: url('/image/mobile/member-info-banner.png');

	@include media-md {
		height: 350px;
		background-image: url('/image/desktop/member-info-banner.png');
	}
}

.nav {
	margin-bottom: 80px;
}

.card-body {
	.form-label {
		color: $black;
	}

	.form-control-plaintext {
		font-weight: 700;
		color: $black;
	}
}

.bg-line {
	padding: 0;
	padding-bottom: 22.5%;
	height: 0;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: 100%;
	background-image: url('/image/mobile/line1.png');

	@include media-md {
		padding-bottom: 18%;
		background-image: url('/image/mobile/line.png');
	}

	@include media-xl {
		padding-bottom: 10%;
		background-image: url('/image/desktop/line.png');
	}
}
</style>
