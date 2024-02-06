<template>
	<div>
		<div class="row text-white">
			<!-- 最新一筆訂單 -->
			<div class="col-lg-7 mb-4 mb-lg-0">
				<OrderUpcomingOrderCard :order="upcomingOrders[currentPage - 1]" provide-items-row-cols="row-cols-md-5">
					<div class="d-flex mt-4 mt-md-5">
						<button type="button" class="btn btn-outline-primary w-100 me-2 d-none d-md-inline" data-bs-toggle="modal" data-bs-target="#modal">取消預訂</button>
						<button type="button" class="btn btn-outline-primary w-100 me-2 d-md-none" data-bs-toggle="offcanvas" data-bs-target="#offcanvas">取消預訂</button>
						<NuxtLink :to="`/room/${upcomingOrders[currentPage - 1].roomId._id}`" target="_blank" class="btn btn-primary w-100">查看詳情</NuxtLink>
					</div>
					<div class="d-flex align-items-center justify-content-center mt-4 mt-md-5">
						<ThePagination v-model:current-page="currentPage" :total-pages="upcomingOrders.length" />
					</div>
				</OrderUpcomingOrderCard>
			</div>
			<!-- 歷史訂單 -->
			<div class="col-lg-5">
				<div class="card rounded-4">
					<div class="card-body text-gray-80 p-3 p-md-5">
						<h5 class="card-title fs-normal fs-md-5 mb-5 mb-4 mb-md-5">歷史訂單</h5>
						<template v-if="showOldOrders.length">
							<ul class="list-unstyled mb-5">
								<li v-for="(item, index) in showOldOrders" :key="item._id" class="d-md-flex" :class="{ 'border-bottom pb-4 mb-4 pb-md-5 mb-md-5': index + 1 !== showOldOrders.length }">
									<div class="old-image-wrap rounded-3 overflow-hidden flex-shrink-0 mb-4 me-4">
										<img :src="item.roomId.imageUrl" :alt="item.roomId.imageUrl" class="object-fit-cover bg-gray-10 w-100 h-100">
									</div>
									<div>
										<p class="fs-sm fs-md-normal text-gray-80 mb-3">預訂參考編號：<span class="fs-sm">{{ item?._id }}</span></p>
										<h6 class="fs-normal fs-md-6 mb-3">{{ item.roomId.name }}</h6>
										<div class="fs-sm fs-md-normal mb-2">住宿天數：{{ getNumberOfDays(item.checkInDate, item.checkOutDate) }} 晚</div>
										<div class="fs-sm fs-md-normal mb-3">住宿人數：{{ item.peopleNum }} 位</div>
										<div class="subtitle fs-sm fs-md-normal mb-2">入住：{{ transferDateToStr(item.checkInDate) }}</div>
										<div class="subtitle fs-sm fs-md-normal subtitle-gray mb-3">退房：{{ transferDateToStr(item.checkOutDate) }}</div>
										<p class="fw-bold">NT$ {{ toThousands(item.roomId.price) }}</p>
									</div>
								</li>
							</ul>
							<button type="button" class="btn btn-outline-primary w-100" @click="isShowAll = !isShowAll" v-if="oldOrders.length > 4">
								{{ !isShowAll ? '查看更多': '顯示較少' }}
								<span class="material-symbols-outlined ms-1">{{ !isShowAll ? 'expand_more': 'expand_less' }}</span>
							</button>
						</template>
						<div class="my-5 d-flex flex-column align-items-center justify-content-center" v-else>
							<h6 class="text-gray-60">沒有歷史訂單</h6>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="modal fade" tabindex="-1" data-bs-backdrop="static" id="modal">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content border-white">
					<div class="modal-header">
						<h5 class="modal-title">取消預訂</h5>
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body py-5">
						<h6 class="text-center text-gray-80 py-5">確定要取消此房型的預訂嗎？</h6>
					</div>
					<div class="modal-footer flex-nowrap">
						<button type="button" class="btn btn-outline-primary w-100 me-2" data-bs-dismiss="modal">關閉視窗</button>
						<button type="button" class="btn btn-primary w-100" data-bs-dismiss="modal" @click="cancelReservation()">確定取消</button>
					</div>
				</div>
			</div>
		</div>
		<div class="offcanvas offcanvas-bottom rounded-top" tabindex="-1" data-bs-backdrop="static" id="offcanvas">
			<div class="modal-header p-3 border-bottom">
				<h5 class="modal-title fs-normal">取消預訂</h5>
				<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
			</div>
			<div class="modal-body p-5">
				<h6 class="text-center text-gray-80 fs-normal">確定要取消此房型的預訂嗎？</h6>
			</div>
			<div class="modal-footer flex-nowrap border-top p-3">
				<button type="button" class="btn btn-outline-primary w-100 me-2" data-bs-dismiss="offcanvas">關閉視窗</button>
				<button type="button" class="btn btn-primary w-100" data-bs-dismiss="offcanvas" @click="cancelReservation()">確定取消</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { Order } from '@/types/order';
const { $notify } = useNuxtApp();

// 是否顯示所有訂單
const isShowAll = ref(false);

// 取得訂單資料
const currentPage = ref(1);
const upcomingOrders = ref<Order[]>([]);
const oldOrders = ref<Order[]>([]);
const showOldOrders = computed(() => isShowAll.value ? oldOrders.value : oldOrders.value.slice(0, 4));
const { response: ordersRes, refresh: fetchOrders } = await useCustomFetch<Order[]>('/api/v1/orders', {
	method: 'GET',
	immediate: false
});
const getOrders = async () => {
	await fetchOrders();
	setOrders();
};
onMounted(() => {
	getOrders();
});
const setOrders = () => {
	if (ordersRes.value?.result) {
		upcomingOrders.value = [];
		oldOrders.value = [];

		ordersRes.value?.result.forEach((item: Order) => {
			const checkInDate = new Date(item.checkInDate);
			const today = new Date();
			today.setHours(0, 0, 0, 0);
			item.status !== -1 && checkInDate >= today
				? upcomingOrders.value.push(item)
				: oldOrders.value.push(item);
		});
	}
};

// 取消預約
const cancelReservation = async () => {
	const { response } = await useCustomFetch(`/api/v1/orders/${upcomingOrders.value?.[currentPage.value - 1]._id}`, {
		method: 'DELETE'
	});
	if (!response.value?.status) {
		return;
	}
	$notify({
		type: 'success',
		text: '取消成功'
	});
	getOrders();
};
</script>

<style lang="scss" scoped>
.subtitle {
	position: relative;
	padding-left: 1rem;

	&::before {
		position: absolute;
		top: 50%;
		left: 0;
		width: 4px;
		height: 24px;
		background-color: $primary;
		border-radius: 10px;
		transform: translateY(-50%);
		content: '';
	}

	&.subtitle-gray::before {
		background-color: $gray-60;
	}
}

.old-image-wrap {
	width: 120px;
	height: 80px;
}

.offcanvas-bottom {
	height: auto;
}
</style>
