<template>
	<div class="container-with-navbar p-5">
		<h1 class="mb-5 pb-3 border-bottom">Guideline</h1>
		<ul class="nav mb-5 pb-5 border-bottom">
			<li class="nav-item mb-2">
				<NuxtLink class="nav-link active" to="#color-system">Color System</NuxtLink>
			</li>
			<li class="nav-item mb-2">
				<NuxtLink class="nav-link active" to="#icon">Icon</NuxtLink>
			</li>
			<li class="nav-item mb-2">
				<NuxtLink class="nav-link active" to="#button">Button</NuxtLink>
			</li>
			<li class="nav-item mb-2">
				<NuxtLink class="nav-link active" to="#input">Input</NuxtLink>
			</li>
			<li class="nav-item mb-2">
				<NuxtLink class="nav-link active" to="#checkbox">Checkbox</NuxtLink>
			</li>
			<li class="nav-item mb-2">
				<NuxtLink class="nav-link active" to="#vee-validate">Vee Validate</NuxtLink>
			</li>
			<li class="nav-item mb-2">
				<NuxtLink class="nav-link active" to="#tabs">Tabs</NuxtLink>
			</li>
			<li class="nav-item mb-2">
				<NuxtLink class="nav-link active" to="#bootstrap-modal">Bootstrap Modal</NuxtLink>
			</li>
			<li class="nav-item mb-2">
				<NuxtLink class="nav-link active" to="#api-fetch">API Fetch</NuxtLink>
			</li>
		</ul>
		<h3 class="mb-3 pb-3 border-bottom" id="color-system">Color System</h3>
		<div class="mb-5">
			<h5 class="mb-3">Primary</h5>
			<div class="d-flex mb-4">
				<div class="me-3">
					<div class="color-card rounded-1 bg-primary-120 text-white mb-2">bg-primary-120</div>
					<p class="text-primary-120">text-primary-120</p>
				</div>
				<div class="me-3">
					<div class="color-card rounded-1 bg-primary text-white mb-2">bg-primary</div>
					<p class="text-primary">text-primary (base)</p>
				</div>
				<div class="me-3">
					<div class="color-card rounded-1 bg-primary-80 text-white mb-2">bg-primary-80</div>
					<p class="text-primary-80">text-primary-80</p>
				</div>
				<div class="me-3">
					<div class="color-card rounded-1 bg-primary-60 mb-2">bg-primary-60</div>
					<p class="text-primary-60">text-primary-60</p>
				</div>
				<div class="me-3">
					<div class="color-card rounded-1 bg-primary-40 mb-2">bg-primary-40</div>
					<p class="text-primary-40">text-primary-40</p>
				</div>
				<div class="me-3">
					<div class="color-card rounded-1 bg-primary-10 mb-2">bg-primary-10</div>
					<p class="text-primary-10">text-primary-10</p>
				</div>
			</div>
			<h5 class="mb-3">Success</h5>
			<div class="d-flex mb-4">
				<div class="me-3">
					<div class="color-card rounded-1 bg-success-120 text-white mb-2">bg-success-120</div>
					<p class="text-success-120">text-success-120</p>
				</div>
				<div class="me-3">
					<div class="color-card rounded-1 bg-success text-white mb-2">bg-success</div>
					<p class="text-success">text-success (base)</p>
				</div>
				<div class="me-3">
					<div class="color-card rounded-1 bg-success-20 mb-2">bg-success-20</div>
					<p class="text-success-20">text-success-20</p>
				</div>
				<div class="me-3">
					<div class="color-card rounded-1 bg-success-10 mb-2">bg-success-10</div>
					<p class="text-success-10">text-success-10</p>
				</div>
			</div>
			<h5 class="mb-3">Info</h5>
			<div class="d-flex mb-4">
				<div class="me-3">
					<div class="color-card rounded-1 bg-info-120 text-white mb-2">bg-info-120</div>
					<p class="text-info-120">text-info-120</p>
				</div>
				<div class="me-3">
					<div class="color-card rounded-1 bg-info text-white mb-2">bg-info</div>
					<p class="text-info">text-info (base)</p>
				</div>
				<div class="me-3">
					<div class="color-card rounded-1 bg-info-20 mb-2">bg-info-20</div>
					<p class="text-info-20">text-info-20</p>
				</div>
				<div class="me-3">
					<div class="color-card rounded-1 bg-info-10 mb-2">bg-info-10</div>
					<p class="text-info-10">text-info-10</p>
				</div>
			</div>
			<h5 class="mb-3">Danger</h5>
			<div class="d-flex mb-4">
				<div class="me-3">
					<div class="color-card rounded-1 bg-danger-120 text-white mb-2">bg-danger-120</div>
					<p class="text-danger-120">text-danger-120</p>
				</div>
				<div class="me-3">
					<div class="color-card rounded-1 bg-danger text-white mb-2">bg-danger</div>
					<p class="text-danger">text-danger (base)</p>
				</div>
				<div class="me-3">
					<div class="color-card rounded-1 bg-danger-20 mb-2">bg-danger-20</div>
					<p class="text-danger-20">text-danger-20</p>
				</div>
				<div class="me-3">
					<div class="color-card rounded-1 bg-danger-10 mb-2">bg-danger-10</div>
					<p class="text-danger-10">text-danger-10</p>
				</div>
			</div>
			<h5 class="mb-3">Neutral</h5>
			<div class="d-flex mb-4">
				<div class="me-3">
					<div class="color-card rounded-1 bg-secondary text-white mb-2">background-color</div>
					<p class="text-secondary">background-color</p>
				</div>
				<div class="me-3">
					<div class="color-card rounded-1 bg-black text-white mb-2">bg-black</div>
					<p class="text-black">text-black</p>
				</div>
				<div class="me-3">
					<div class="color-card rounded-1 bg-gray-80 text-white mb-2">bg-gray-80</div>
					<p class="text-gray-80">text-gray-80</p>
				</div>
				<div class="me-3">
					<div class="color-card rounded-1 bg-gray-60 text-white mb-2">bg-gray-60</div>
					<p class="text-gray-60">text-gray-60</p>
				</div>
				<div class="me-3">
					<div class="color-card rounded-1 bg-gray-40 mb-2">bg-gray-40</div>
					<p class="text-gray-40">text-gray-40</p>
				</div>
				<div class="me-3">
					<div class="color-card rounded-1 bg-gray-10 mb-2">bg-gray-10</div>
					<p class="text-gray-10">text-gray-10</p>
				</div>
				<div class="me-3">
					<div class="color-card rounded-1 bg-white border mb-2">bg-white</div>
					<p class="text-white">text-white</p>
				</div>
			</div>
		</div>
		<h3 class="mb-3 pb-3 border-bottom" id="icon">Icon</h3>
		<div class="mb-5">
			<h5 class="mb-3">Material Design Icons Fill</h5>
			<div class="mb-4">
				<span class="material-symbols-outlined me-3">check</span>
				<span class="material-symbols-outlined me-3">chevron_left</span>
				<span class="material-symbols-outlined me-3">bed</span>
				<span class="material-symbols-outlined me-3">person</span>
				<span class="material-symbols-outlined me-3">close</span>
			</div>
			<h5 class="mb-3">Material Design Icons Not Fill</h5>
			<div class="mb-4">
				<span class="material-symbols-outlined fill-0 me-3">check</span>
				<span class="material-symbols-outlined fill-0 me-3">chevron_left</span>
				<span class="material-symbols-outlined fill-0 me-3">bed</span>
				<span class="material-symbols-outlined fill-0 me-3">person</span>
				<span class="material-symbols-outlined fill-0 me-3">close</span>
			</div>
			<h5 class="mb-3">Iconfy Icons</h5>
			<div class="mb-4">
				<img src="/image/bi_line.svg" alt="bi_line" class="me-3" />
				<img src="/image/ic_car.svg" alt="ic_car" class="me-3" />
				<img src="/image/ic_luxurycar.svg" alt="ic_luxurycar" class="me-3" />
				<img src="/image/ic_Profile.svg" alt="ic_Profile" class="me-3" />
				<img src="/image/ic_train.svg" alt="ic_train" class="me-3" />
			</div>
		</div>
		<h3 class="mb-3 pb-3 border-bottom" id="button">Button</h3>
		<div class="mb-5">
			<h5 class="mb-3">Primary</h5>
			<div class="d-flex mb-4">
				<div class="me-3">
					<h6 class="mb-3">initial</h6>
					<div class="mb-4">
						<button type="button" class="btn btn-primary me-3">
							Button
							<span class="material-symbols-outlined ms-1">chevron_right</span>
						</button>
						<button type="button" class="btn btn-primary me-3">
							Button
						</button>
					</div>
				</div>
				<div class="me-3">
					<h6 class="mb-3">disabled</h6>
					<div class="mb-4">
						<button type="button" class="btn btn-primary me-3" disabled>
							Button
							<span class="material-symbols-outlined ms-1">chevron_right</span>
						</button>
						<button type="button" class="btn btn-primary me-3" disabled>
							Button
						</button>
					</div>
				</div>
			</div>
			<h5 class="mb-3">Outline Primary</h5>
			<div class="d-flex mb-4">
				<div class="me-3">
					<h6 class="mb-3">initial</h6>
					<div class="mb-4">
						<button type="button" class="btn btn-outline-primary me-3">
							Button
							<span class="material-symbols-outlined ms-1">chevron_right</span>
						</button>
						<button type="button" class="btn btn-outline-primary me-3">
							Button
						</button>
					</div>
				</div>
				<div class="me-3">
					<h6 class="mb-3">disabled</h6>
					<div class="mb-4">
						<button type="button" class="btn btn-outline-primary me-3" disabled>
							Button
							<span class="material-symbols-outlined ms-1">chevron_right</span>
						</button>
						<button type="button" class="btn btn-outline-primary me-3" disabled>
							Button
						</button>
					</div>
				</div>
			</div>
			<h5 class="mb-3">Ghost</h5>
			<div class="d-flex mb-4">
				<div class="me-3">
					<h6 class="mb-3">initial</h6>
					<div class="mb-4">
						<button type="button" class="btn btn-ghost me-3">
							Button
							<span class="material-symbols-outlined ms-1">chevron_right</span>
						</button>
						<button type="button" class="btn btn-ghost me-3">
							Button
						</button>
					</div>
				</div>
				<div class="me-3">
					<h6 class="mb-3">disabled</h6>
					<div class="mb-4">
						<button type="button" class="btn btn-ghost me-3" disabled>
							Button
							<span class="material-symbols-outlined ms-1">chevron_right</span>
						</button>
						<button type="button" class="btn btn-ghost me-3" disabled>
							Button
						</button>
					</div>
				</div>
			</div>
			<h5 class="mb-3">Text</h5>
			<div class="d-flex mb-4">
				<div class="me-3">
					<h6 class="mb-3">initial</h6>
					<div class="mb-4">
						<button type="button" class="btn btn-link">Button</button>
					</div>
				</div>
				<div class="me-3">
					<h6 class="mb-3">disabled</h6>
					<div class="mb-4">
						<button type="button" class="btn btn-link" disabled>Button</button>
					</div>
				</div>
			</div>
		</div>
		<h3 class="mb-3 pb-3 border-bottom" id="input">Input</h3>
		<div class="mb-5 bg-gray-40">
			<div class="mb-3 p-3">
				<h5 class="mb-3">Initial</h5>
				<label for="example" class="form-label">Text</label>
				<input type="email" class="form-control" id="example" placeholder="Text">
			</div>
			<div class="mb-3 p-3">
				<h5 class="mb-3">InValid</h5>
				<label for="example-invalid" class="form-label">Text</label>
				<input type="email" class="form-control is-invalid" id="example-invalid" placeholder="Text">
				<span class="form-text text-danger mt-2">錯誤提示訊息</span>
			</div>
		</div>
		<h3 class="mb-3 pb-3 border-bottom" id="checkbox">Checkbox</h3>
		<div class="mb-5 bg-gray-40 p-3">
			<div class="form-check">
				<input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
				<label class="form-check-label" for="flexCheckDefault">
					checkbox
				</label>
			</div>
		</div>
		<h3 class="mb-3 pb-3 border-bottom" id="vee-validate">Vee Validate</h3>
		<div class="vee-wrap mb-5">
			<VeeForm @submit="submitForm" v-slot="{ meta: globalMata }">
				<div class="mb-4">
					<label for="old_email" class="form-label">舊密碼</label>
					<VeeField name="old_email" label="舊密碼" rules="required" v-model="form.old_password" v-slot="{ field, errors }">
						<input type="password" id="old_email" class="form-control" placeholder="請輸入舊密碼" v-bind="field" :class="{ 'is-invalid': errors.length }">
					</VeeField>
					<VeeErrorMessage name="old_email" class="form-text text-danger mt-2" />
				</div>
				<div class="mb-4">
					<label for="new_email" class="form-label">新密碼</label>
					<VeeField name="new_email" label="新密碼" rules="required" v-model="form.new_password" v-slot="{ field, errors }">
						<input type="password" id="new_email" class="form-control" placeholder="請輸入新密碼" v-bind="field" :class="{ 'is-invalid': errors.length }">
					</VeeField>
					<VeeErrorMessage name="new_email" class="form-text text-danger mt-2" />
				</div>
				<div class="mb-5">
					<label for="confirm_email" class="form-label">確認新密碼</label>
					<VeeField name="confirm_email" label="確認新密碼" rules="required" v-model="form.confirm_password" v-slot="{ field, errors }">
						<input type="password" id="confirm_email" class="form-control" placeholder="請再輸入一次新密碼" v-bind="field" :class="{ 'is-invalid': errors.length }">
					</VeeField>
					<VeeErrorMessage name="confirm_email" class="form-text text-danger mt-2" />
				</div>
				<button type="submit" class="btn btn-primary" :disabled="!globalMata.valid">儲存設定</button>
			</VeeForm>
		</div>
		<h3 class="mb-3 pb-3 border-bottom" id="tabs">Tabs</h3>
		<div class="mb-5 bg-gray-40 p-3">
			<ul class="nav">
				<li class="nav-item">
					<a class="nav-link active" href="#">Active</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Link</a>
				</li>
				<li class="nav-item">
					<a class="nav-link disabled" aria-disabled="true">Disabled</a>
				</li>
			</ul>
		</div>
		<h3 class="mb-3 pb-3 border-bottom" id="bootstrap-modal">Bootstrap Modal</h3>
		<div class="mb-5">
			<div class="modal fade" tabindex="-1" data-bs-backdrop="static" ref="modalRef">
				<div class="modal-dialog modal-lg">
					<div class="modal-content border-white">
						<div class="modal-header">
							<h5 class="fs-3 text-black">Modal Title</h5>
							<button type="button" class="btn-close fs-7" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div class="modal-body">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas quidem similique doloribus pariatur culpa aliquid quibusdam eos magnam mollitia earum nostrum explicabo aperiam, sit velit. Nesciunt ab explicabo eos repudiandae!
							Quod tempore quae dicta nesciunt aperiam hic quidem dignissimos in vitae porro ab, sunt neque? Deleniti excepturi delectus voluptatem sed et iste aperiam praesentium nihil est accusamus, vero, impedit temporibus.
							Sunt sint reprehenderit mollitia dolores maxime cupiditate iure tempora quia asperiores ullam, eligendi ratione iste debitis perferendis placeat dicta possimus cumque vitae ducimus, illo enim totam eos. Sapiente, earum nam!
						</div>
						<div class="modal-footer">
							<button type="button" class="btn btn-outline-primary px-5 me-2" data-bs-dismiss="modal">close</button>
						</div>
					</div>
				</div>
			</div>
			<button type="button" class="btn btn-success" @click="showModal">開啟 Modal</button>
		</div>
		<h3 class="mb-3 pb-3 border-bottom" id="api-fetch">API Fetch</h3>
		<div class="mb-5">
			<button type="button" class="btn btn-success mb-4" @click="getAllRooms()">點我發出請求</button>
			<h5 class="mb-4">顯示所有房型</h5>
			<pre>{{ rooms }}</pre>
		</div>
	</div>
</template>

<script lang="ts" setup>
// Bootstrap Modal
const { $bootstrap } = useNuxtApp();
const modalRef = ref();
let modal: bootstrap.Modal;
const showModal = () => {
	modal.show();
};
onMounted(() => {
	modal = $bootstrap.modal(modalRef.value);
});
onBeforeUnmount(() => {
	// 記得加上 dispose，避免切換頁面時或是 HMR 看到殘留畫面
	modal.dispose();
});

interface Room {
	name: string;
}
// API Fetch
const rooms = ref<Room[]>([]);
const getAllRooms = async () => {
	const { response } = await useCustomFetch<Room[]>('/api/v1/rooms', {
		method: 'GET'
	});
	if (!response.value?.status) {
		return;
	}
	rooms.value = response.value.result;
};

// vee-validate
const submitForm = () => {
	console.log('submit');
};
const form = ref({
	old_password: '',
	new_password: '',
	confirm_password: ''
});
</script>

<style lang="scss" scoped>
.color-card {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 10rem;
	height: 5rem;
}

.vee-wrap .form-label {
	color: $black;
}
</style>
