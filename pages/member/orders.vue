<template>
	<div>
		<div class="row text-white">
			<!-- 最新一筆訂單 -->
			<div class="col-lg-7 mb-4 mb-lg-0">
				<div class="card rounded-4">
					<div class="card-body text-gray-80 p-5">
						<p class="mb-2">預訂參考編號：{{ newOrder?._id }}</p>
						<h5 class="card-title text-black mb-5">即將來的行程</h5>
						<div class="fw-bold" v-if="newOrder">
							<div class="new-image-wrap rounded-3 overflow-hidden mb-5">
								<img :src="newOrder.roomId.imageUrl" :alt="newOrder.roomId.imageUrl" class="object-fit-cover bg-gray-10 w-100 h-100">
							</div>
							<h6 class="mb-4">
								{{ newOrder.roomId.name }}，{{ getDays(newOrder.checkInDate, newOrder.checkOutDate) }} 晚
								｜
								住宿人數：{{ newOrder.peopleNum }} 位
							</h6>
							<div class="subtitle mb-2">入住：{{ transferDate(newOrder.checkInDate) }}，15:00 可入住</div>
							<div class="subtitle subtitle-gray mb-4">退房：{{ transferDate(newOrder.checkOutDate) }}，12:00 前退房</div>
							<p>NT$ {{ toThousands(newOrder.roomId.price) }}</p>
							<div class="my-5 border-bottom"></div>
							<div class="subtitle text-black mb-4">房內設備</div>
							<div class="border p-4 rounded-3 mb-5">
								<ul class="row row-cols-5 list-unstyled">
									<li class="col d-flex align-items-center" v-for="(item, index) in filterProvideItems(newOrder.roomId.facilityInfo)" :key="`facility_${index}`">
										<span class="material-symbols-outlined text-primary me-2">check</span>
										{{ item.title }}
									</li>
								</ul>
							</div>
							<div class="subtitle text-black mb-4">備品提供</div>
							<div class="border p-4 rounded-3 mb-5">
								<ul class="row row-cols-5 list-unstyled">
									<li class="col d-flex align-items-center" v-for="(item, index) in filterProvideItems(newOrder.roomId.amenityInfo)" :key="`amenity_${index}`">
										<span class="material-symbols-outlined text-primary me-2">check</span>
										{{ item.title }}
									</li>
								</ul>
							</div>
							<div class="d-flex">
								<button type="button" class="btn btn-outline-primary w-100 me-2" data-bs-toggle="modal" data-bs-target="#modal">取消預訂</button>
								<NuxtLink :href="`/room/${newOrder.roomId._id}`" target="_blank" class="btn btn-primary w-100">查看詳情</NuxtLink>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 歷史訂單 -->
			<div class="col-lg-5">
				<div class="card rounded-4">
					<div class="card-body text-gray-80 p-5">
						<h5 class="card-title mb-5">歷史訂單</h5>
						<ul class="list-unstyled mb-5">
							<li v-for="(item, index) in oldOders" :key="item._id" class="d-flex" :class="{ 'border-bottom pb-5 mb-5': index + 1 !== oldOders.length }">
								<div class="old-image-wrap rounded-3 overflow-hidden flex-shrink-0 me-4">
									<img :src="item.roomId.imageUrl" :alt="item.roomId.imageUrl" class="object-fit-cover bg-gray-10 w-100 h-100">
								</div>
								<div>
									<p class="text-gray-80 mb-3">預訂參考編號：<span class="fs-sm">{{ item?._id }}</span></p>
									<h6 class="mb-3">{{ item.roomId.name }}</h6>
									<div class="mb-2">住宿天數：{{ getDays(item.checkInDate, item.checkOutDate) }} 晚</div>
									<div class="mb-3">住宿人數：{{ item.peopleNum }} 位</div>
									<div class="subtitle mb-2">入住：{{ transferDate(item.checkInDate) }}</div>
									<div class="subtitle subtitle-gray mb-3">退房：{{ transferDate(item.checkOutDate) }}</div>
									<p class="fw-bold">NT$ {{ toThousands(item.roomId.price) }}</p>
								</div>
							</li>
						</ul>
						<button type="button" class="btn btn-outline-primary w-100" @click="isShowAll = !isShowAll" v-if="orders.length > 4">
							{{ !isShowAll ? '查看更多': '顯示較少' }}
							<span class="material-symbols-outlined ms-1">{{ !isShowAll ? 'expand_more': 'expand_less' }}</span>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="modal fade" tabindex="-1" data-bs-backdrop="static" id="modal">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content border-white">
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
	</div>
</template>

<script lang="ts" setup>
import type { ProvideItems, Order } from '@/types/member-orders';
const { $notify } = useNuxtApp();

// 是否顯示所有訂單
const isShowAll = ref(false);

// 取得訂單資料
const orders = computed(() => JSON.parse(JSON.stringify(ordersRes.value?.result)).reverse().filter((item: Order) => item.status !== -1));
const newOrder = computed(() => orders.value[0]);
const oldOders = computed(() => isShowAll.value ? orders.value.slice(1) : orders.value.slice(1, 4));
const { response: ordersRes, refresh: getOrders } = await useCustomFetch<Order[]>('/api/v1/orders', {
	method: 'GET'
});

// 取得預約天數
const getDays = (startDate: Date, endDate: Date): number => {
	const timeDifference = new Date(endDate).valueOf() - new Date(startDate).valueOf();
	return timeDifference / (1000 * 60 * 60 * 24);
};

// 轉換日期
const transferDate = (dateString: Date): string => {
	const date = new Date(dateString);
	const daysOfWeek = [ '星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六' ];
	const dayIndex = date.getUTCDay();
	const month = date.getUTCMonth() + 1;
	const day = date.getUTCDate();
	return `${month} 月 ${day} 日 ${daysOfWeek[dayIndex]}`;
};

// 篩選有提供的備品
const filterProvideItems = (items: ProvideItems[]) => {
	return items.filter(item => item.isProvide);
};

// 取消預約
const cancelReservation = async () => {
	const { response } = await useCustomFetch(`/api/v1/orders/${newOrder.value._id}`, {
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
.new-image-wrap {
	height: 240px;
}

.old-image-wrap {
	width: 120px;
	height: 80px;
}

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
</style>
