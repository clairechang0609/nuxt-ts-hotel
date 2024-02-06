<template>
	<div class="modal fade" tabindex="-1" data-bs-backdrop="static" ref="modalRef">
		<div class="modal-dialog modal-md">
			<div class="modal-content border-white">
				<div class="modal-header">
					<h5 class="fs-3 text-black">忘記密碼</h5>
					<button type="button" class="btn-close fs-7" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
					<div class="vee-wrap">
						<VeeForm ref="step1Ref" v-if="currentStep === 1" v-slot="{ meta: globalMata }">
							<div class="mb-3">
								<label for="email" class="form-label text-black">電子信箱</label>
								<VeeField name="email" label="電子信箱" rules="required|email" v-model="step1form.email" v-slot="{ field, errors }">
									<input type="email" class="form-control" id="email" placeholder="hello@exsample.com" v-bind="field" :class="{ 'is-invalid': errors.length }">
								</VeeField>
								<VeeErrorMessage name="email" class="form-text text-danger mt-2" />
							</div>
							<div class="d-flex justify-content-end align-items-center mt-auto">
								<button type="button" class="btn btn-outline-primary me-2" data-bs-dismiss="modal">close</button>
								<button type="button" class="btn btn-primary" :disabled="!globalMata.valid" @click="sendCheckMail">驗證</button>
							</div>
						</VeeForm>
						<VeeForm @submit="resetPassword" v-if="currentStep === 2" v-slot="{ meta: globalMata }">
							<div class="mb-3">
								<label for="default_email" class="form-label text-black">電子信箱</label>
								<VeeField name="default_email" label="電子信箱" rules="required|email" v-model="step2form.email" v-slot="{ field, errors }">
									<input type="email" class="form-control" id="default_email" placeholder="hello@exsample.com" v-bind="field" :class="{ 'is-invalid': errors.length }" disabled>
								</VeeField>
								<VeeErrorMessage name="default_email" class="form-text text-danger mt-2" />
							</div>
							<div class="d-flex align-items-end justify-content-between mb-3">
								<div class="col-9">
									<label for="code" class="form-label text-black">驗證碼</label>
									<VeeField name="code" label="驗證碼" rules="required" v-model="step2form.code" v-slot="{ field, errors }">
										<input type="text" class="form-control" id="code" placeholder="請輸入驗證碼" v-bind="field" :class="{ 'is-invalid': errors.length }">
									</VeeField>
									<VeeErrorMessage name="code" class="form-text text-danger mt-2" />
								</div>
								<button class="btn btn-link px-0" @click.stop="sendCheckMail">重寄驗證碼</button>
							</div>
							<div class="mb-3">
								<label for="newPassword" class="form-label text-black">新密碼</label>
								<VeeField name="newPassword" label="新密碼" rules="required|min:8|password" v-model="step2form.newPassword" v-slot="{ field, errors }">
									<input type="password" class="form-control" id="newPassword" placeholder="請輸入新密碼" v-bind="field" :class="{ 'is-invalid': errors.length }">
								</VeeField>
								<VeeErrorMessage name="newPassword" class="form-text text-danger mt-2" />
							</div>
							<div class="d-flex justify-content-end align-items-center mt-auto">
								<button type="button" class="btn btn-outline-primary me-2" data-bs-dismiss="modal">close</button>
								<button type="submit" class="btn btn-primary" :disabled="!globalMata.valid">送出</button>
							</div>
						</VeeForm>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const { $notify } = useNuxtApp();

const currentStep = ref(1);

const defaultStep1Data = () => ({
	email: ''
});
const defaultStep2Data = () => ({
	email: '',
	code: '',
	newPassword: ''
});

const emit = defineEmits([ 'close' ]);
const step1form = ref(defaultStep1Data());
const step2form = ref(defaultStep2Data());
const modalRef = ref(null);
const step1Ref = ref(null);
const step2Ref = ref(null);
onMounted(() => {
	const modal = document.querySelector('.modal');
	modal.addEventListener('show.bs.modal', () => {
		// reset form
		currentStep.value = 1;
		Object.assign(step1form.value, defaultStep1Data());
		Object.assign(step2form.value, defaultStep2Data());
		step1Ref.value?.resetForm();
		step2Ref.value?.resetForm();
	});
});

const sendCheckMail = async () => {
	const { response } = await useCustomFetch('/api/v1/verify/generateEmailCode', {
		method: 'POST',
		body: {
			...step1form.value
		}
	});
	if (!response.value.status) {
		return;
	}
	$notify({
		type: 'success',
		text: '驗證碼已寄出，請至信箱查收'
	});
	currentStep.value = 2;
	step2form.value.email = step1form.value.email;
};
const resetPassword = async () => {
	const { response } = await useCustomFetch('/api/v1/user/forgot', {
		method: 'POST',
		body: {
			...step2form.value
		}
	});
	if (!response.value.status) {
		return;
	}
	$notify({
		type: 'success',
		text: '密碼已重設，請使用新密碼登入'
	});
	emit('close');
};
</script>
