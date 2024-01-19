<template>
	<div class="bg-secondary">
		<div class="container container-with-navbar">
			<div class="row gx-5 text-white">
				<div class="col-lg-7 pe-md-5 mb-4 mb-lg-0">
					<div class="d-flex align-items-center mb-5">
						<div class="check-icon bg-success rounded-circle d-flex align-items-center justify-content-center me-5">
							<span class="material-symbols-outlined text-white fs-2">check</span>
						</div>
						<h2 class="fs-1 lh-sm">
							恭喜，{{ order?.userInfo.name }} <br />
							您已預訂成功
						</h2>
					</div>
					<p>我們已發送訂房資訊及詳細內容至你的電子信箱，入住時需向櫃檯人員出示訂房人證件。</p>
					<div class="divider border-bottom"></div>
					<h5 class="mb-5">立即查看您的訂單紀錄</h5>
					<NuxtLink to="/member/orders" class="order-link btn btn-primary">前往我的訂單</NuxtLink>
					<div class="divider border-bottom"></div>
					<h5 class="mb-5">訂房人資訊</h5>
					<div class="mb-4">
						<label for="name" class="form-label">姓名</label>
						<input type="text" id="name" class="form-control-plaintext" :value="order?.userInfo.name" readonly>
					</div>
					<div class="mb-4">
						<label for="phone" class="form-label">手機號碼</label>
						<input type="text" id="phone" class="form-control-plaintext" :value="order?.userInfo.phone" readonly>
					</div>
					<div class="mb-4">
						<label for="email" class="form-label">電子信箱</label>
						<input type="text" id="email" class="form-control-plaintext" :value="order?.userInfo.email" readonly>
					</div>
				</div>
				<div class="col-lg-5">
					<OrderUpcomingOrderCard :order="order" />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { Order } from '@/types/member-orders';

const route = useRoute();
const apiUrl = computed(() => `/api/v1/orders/${route.query?.id}`);
const order = computed(() => response.value?.result);
const { response } = await useCustomFetch<Order>(apiUrl.value, {
	method: 'GET'
});
// 當預約不存在，直接導回預約頁
watch(() => response, () => {
	const { status, result } = response.value!;
	if (!status || result.status === -1) {
		navigateTo('/reservation');
	}
}, {
	immediate: true
});

</script>

<style lang="scss" scoped>
.check-icon {
	width: 3.5rem;
	height: 3.5rem;
}

.divider {
	margin-top: 5rem;
	margin-bottom: 5rem;
}

.order-link {
	padding-right: 3.75rem;
	padding-left: 3.75rem;
}

.form-label {
	font-weight: normal;
}

.form-control-plaintext {
	color: $white;
}
</style>
