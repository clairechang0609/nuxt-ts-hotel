<template>
	<div class="card rounded-4">
		<div class="card-body text-gray-80 p-3 p-md-5">
			<p class="fs-sm fs-md-normal mb-2" v-if="order">預訂參考編號：{{ order?._id }}</p>
			<h5 class="card-title text-black fs-normal fs-md-5 mb-4 mb-md-5">即將來的行程</h5>
			<div class="fw-bold" v-if="order">
				<div class="image-wrap rounded-3 overflow-hidden mb-4 mb-md-5">
					<img :src="order.roomId.imageUrl" :alt="order.roomId.imageUrl" class="object-fit-cover bg-gray-10 w-100 h-100">
				</div>
				<h6 class="fs-normal fs-md-6 mb-4">
					{{ order.roomId.name }}，{{ getNumberOfDays(order.checkInDate, order.checkOutDate) }} 晚
					｜
					住宿人數：{{ order.peopleNum }} 位
				</h6>
				<div class="subtitle mb-2">入住：{{ transferDateToStr(order.checkInDate) }}，15:00 可入住</div>
				<div class="subtitle subtitle-gray mb-4">退房：{{ transferDateToStr(order.checkOutDate) }}，12:00 前退房</div>
				<p>NT$ {{ toThousands(order.roomId.price) }}</p>
				<div class="border-bottom my-4 my-md-5"></div>
				<div class="subtitle text-black mb-4">房內設備</div>
				<div class="border py-3 px-4 rounded-3 mb-4 mb-md-5">
					<ul class="row row-cols-2 list-unstyled" :class="provideItemsRowCols">
						<template v-for="(item, key) in order.roomId.facilityInfo" :key="`facility_${key}`">
							<li class="col d-flex align-items-center my-2" v-if="item.isProvide">
								<span class="material-symbols-outlined text-primary me-2">check</span>
								{{ item.title }}
							</li>
						</template>
					</ul>
				</div>
				<div class="subtitle text-black mb-4">備品提供</div>
				<div class="border py-3 px-4 rounded-3">
					<ul class="row row-cols-2 list-unstyled" :class="provideItemsRowCols">
						<template v-for="(item, key) in order.roomId.amenityInfo" :key="`amenity_${key}`">
							<li class="col d-flex align-items-center my-2" v-if="item.isProvide">
								<span class="material-symbols-outlined text-primary me-2">check</span>
								{{ item.title }}
							</li>
						</template>
					</ul>
				</div>
				<slot />
			</div>
			<div class="my-5 d-flex flex-column align-items-center justify-content-center" v-else>
				<h6 class="text-gray-60 mb-4">目前沒有行程</h6>
				<a href="/all-rooms" class="btn btn-primary px-5">快速預約</a>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
defineProps({
	order: {
		type: Object,
		default: () => {}
	},
	provideItemsRowCols: {
		type: String,
		default: 'row-cols-md-3'
	}
});
</script>

<style lang="scss" scoped>
.image-wrap {
	height: 150px;

	@include media-md {
		height: 240px;
	}
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
