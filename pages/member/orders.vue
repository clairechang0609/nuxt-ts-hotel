<template>
	<div class="row text-white">
		<!-- <pre>{{ orders }}</pre> -->
		<div class="col-lg-7 mb-4 mb-lg-0">
			<div class="card rounded-4">
				<div class="card-body p-5">
					<p class="text-gray-80 mb-2">預訂參考編號：{{ newOrder?._id }}</p>
					<h5 class="card-title mb-5">即將來的行程</h5>
					<div class="fw-bold" v-if="newOrder">
						<div class="image-wrap rounded-3 overflow-hidden mb-5">
							<img :src="newOrder.roomId.imageUrl" :alt="newOrder.roomId.imageUrl" class="object-fit-cover bg-gray-10 w-100 h-100">
						</div>
						<h6 class="mb-4">
							{{ newOrder.roomId.name }}，{{ checkDateRange(newOrder.checkInDate, newOrder.checkOutDate) }} 晚
							｜
							住宿人數：{{ newOrder.peopleNum }} 位
						</h6>
						<div class="subtitle mb-2">入住：{{ transferDate(newOrder.checkInDate) }}，15:00 可入住</div>
						<div class="subtitle subtitle-gray mb-4">退房：{{ transferDate(newOrder.checkOutDate) }}，12:00 前退房</div>
						<p>NT$ {{ toThousands(newOrder.roomId.price) }}</p>
						<div class="my-5 border-bottom"></div>
						<div class="subtitle mb-4">房內設備</div>
						<div class="border p-4 rounded-3 mb-5">
							123
						</div>
						<div class="subtitle mb-4">備品提供</div>
						<div class="border p-4 rounded-3 mb-5">
							123
						</div>
						<div class="d-flex">
							<button type="button" class="btn btn-outline-primary w-100 me-2">取消預訂</button>
							<a :href="`/room/${newOrder.roomId._id}`" class="btn btn-primary w-100 ms-2">查看詳情</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-lg-5">
			<div class="card rounded-4"></div>
		</div>
	</div>
</template>

<script setup>
const { fetchData } = useApiFetcher();
const token = useCookie('token');

const orders = ref([]);
const newOrder = computed(() => orders.value[0]);

// 取得訂單資料
const getOrders = async () => {
	const response = await fetchData({
		url: '/api/v1/orders',
		method: 'GET',
		headers: {
			Authorization: `Bearer ${token.value}`
		}
	});
	if (!response) {
		return;
	}
	orders.value = response.result.reverse();
};
onMounted(() => {
	getOrders();
});

const checkDateRange = (startDate, endDate) => {
	const timeDifference = new Date(endDate) - new Date(startDate);
	return timeDifference / (1000 * 60 * 60 * 24);
};
const transferDate = dateString => {
	const date = new Date(dateString);
	const daysOfWeek = [ '星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六' ];
	const dayIndex = date.getUTCDay();
	const month = date.getUTCMonth() + 1;
	const day = date.getUTCDate();
	return `${month} 月 ${day} 日 ${daysOfWeek[dayIndex]}`;
};
</script>

<style lang="scss" scoped>
.image-wrap {
	height: 240px;
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
