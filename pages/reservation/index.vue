<template>
	<div class="bg-primary-10">
		<div class="container container-with-navbar">
			<NuxtLink :to="`/room/${route.query?.id}`" class="mb-5 d-flex">
				<img src="/image/ic_arrow left.svg" class="mr-2" alt="">
				<div class="fs-3">確認訂房資訊</div>
			</NuxtLink>
			<div class="row align-items-start">
				<div class="reservation-info-wrap col-12 col-md-8">
					<!-- 訂房資訊 -->
					<h4 class="mb-5">訂房資訊</h4>
					<div class="mb-4 d-flex justify-content-between align-items-center">
						<div>
							<div class="title mb-2">選擇房型</div>
							<p>{{ roomData.name }}</p>
						</div>
						<NuxtLink :to="`/all-rooms`" class="text-decoration-underline cursor-pointer">編輯</NuxtLink>
					</div>
					<div class="mb-4 d-flex justify-content-between align-items-center">
						<div>
							<div class="title mb-2">訂房日期</div>
							<p>入住：{{ transferDateToStr(booking.checkInDate) }}</p>
							<p>退房：{{ transferDateToStr(booking.checkOutDate) }}</p>
						</div>
						<NuxtLink :to="`/room/${route.query?.id}`" class="text-decoration-underline cursor-pointer">編輯</NuxtLink>
					</div>
					<div class="mb-4 d-flex justify-content-between align-items-center">
						<div>
							<div class="title mb-2">房客人數</div>
							<ClientOnly>
								<p>{{ booking.peopleNum }} 人</p>
							</ClientOnly>
						</div>
						<NuxtLink :to="`/room/${route.query?.id}`" class="text-decoration-underline cursor-pointer">編輯</NuxtLink>
					</div>
					<hr />
					<!-- 訂房人資訊 -->
					<div class="d-flex justify-content-between align-items-center mb-5">
						<h4>訂房人資訊</h4>
						<span class="text-decoration-underline cursor-pointer text-primary" @click="setUserInfo">套用會員資料</span>
					</div>
					<VeeForm>
						<div class="mb-4">
							<label for="name" class="form-label">姓名</label>
							<VeeField name="name" label="姓名" rules="required" v-model="bookingInfo.name" v-slot="{ field, errors }">
								<input type="text" id="name" class="form-control" placeholder="請輸入姓名" v-bind="field" :class="{ 'is-invalid': errors.length }">
							</VeeField>
							<VeeErrorMessage name="name" class="form-text text-danger mt-2" />
						</div>
						<div class="mb-4">
							<label for="phone" class="form-label">手機號碼</label>
							<VeeField name="phone" label="手機號碼" rules="required" v-model="bookingInfo.phone" v-slot="{ field, errors }">
								<input type="text" id="name" class="form-control" placeholder="請輸入手機號碼" v-bind="field" :class="{ 'is-invalid': errors.length }">
							</VeeField>
							<VeeErrorMessage name="phone" class="form-text text-danger mt-2" />
						</div>
						<div class="mb-3">
							<label for="email" class="form-label">電子信箱</label>
							<VeeField name="email" label="電子信箱" rules="required" v-model="bookingInfo.email" v-slot="{ field }">
								<input type="email" class="form-control" id="email" placeholder="請輸入電子信箱" v-bind="field">
							</VeeField>
						</div>
						<div class="mb-5 row gx-2">
							<label for="confirm_email" class="form-label">地址</label>
							<div class="col-6 pe-0 mb-3">
								<VeeField name="county" label="縣市" rules="required" v-model="bookingInfo.address.county" @change="bookingInfo.address.zipcode = ''" v-slot="{ field, errors }">
									<select class="form-select" id="county" v-bind="field" :class="{ 'is-invalid': errors.length }">
										<option value="" :selected="county === ''" disabled>縣市</option>
										<option v-for="item in getCounties" :value="item.id" :key="item.id">{{ item.name }}</option>
									</select>
								</VeeField>
							</div>
							<div class="col-6">
								<VeeField name="distList" label="區域" rules="required" v-model="bookingInfo.address.zipcode" v-slot="{ field, errors }">
									<select class="form-select" id="distList" v-bind="field" :class="{ 'is-invalid': errors.length }">
										<option value="" :selected="bookingInfo.address.zipcode === ''" disabled>區域</option>
										<option v-for="item in getDist(bookingInfo.address.county as string)" :value="item.zipcode" :key="item.id">{{ item.city }}</option>
									</select>
								</VeeField>
							</div>
							<div class="col-12">
								<VeeField name="address" label="地址" rules="required" v-model="bookingInfo.address.detail" v-slot="{ field, errors }">
									<input type="text" class="form-control" id="address" placeholder="請輸入詳細地址" v-bind="field" :class="{ 'is-invalid': errors.length }">
								</VeeField>
								<VeeErrorMessage name="address" class="form-text text-danger mt-2" />
							</div>
						</div>
					</VeeForm>
					<hr />
					<h4 class="mb-5">房間資訊</h4>
					<div class="mb-4">
						<div class="title mb-3">房型基本資訊</div>
						<div class="d-flex gap-3">
							<div class="room-info bg-white border border-1 border-primary-40 p-3 rounded d-flex flex-column justify-content-center gap-2">
								<img src="/image/ic_Size.svg" class="icon" alt="">
								<span>{{ roomData.areaInfo }}</span>
							</div>
							<div class="room-info bg-white border border-1 border-primary-40 p-3 rounded d-flex flex-column justify-content-center gap-2">
								<img src="/image/Group.svg" class="icon" alt="">
								<span>{{ roomData.bedInfo }}</span>
							</div>
							<div class="room-info bg-white border border-1 border-primary-40 p-3 rounded d-flex flex-column justify-content-center gap-2">
								<img src="/image/ic_Person.svg" class="icon" alt="">
								<span>{{ roomData.maxPeople }}人</span>
							</div>
						</div>
					</div>
					<!-- 房內設備 -->
					<div class="mb-4">
						<div class="title mb-3">房內設備</div>
						<ul class="bg-white p-4 d-flex gap-4 rounded list-unstyled flex-wrap">
							<li v-for="(item, index) in roomData.facilityInfo" :key="`facility_${index+1}`">
								<img src="/image/ic_check.svg" alt="" class="me-2">
								<span>{{ item.title }}</span>
							</li>
						</ul>
					</div>
					<!-- 備品提供 -->
					<div class="mb-4">
						<div class="title mb-3">備品提供</div>
						<ul class="bg-white p-4 d-flex gap-4 rounded list-unstyled flex-wrap">
							<li v-for="(item, index) in roomData.amenityInfo" :key="`amenity_${index+1}`">
								<img src="/image/ic_check.svg" alt="" class="me-2">
								<span>{{ item.title }}</span>
							</li>
						</ul>
					</div>
				</div>
				<div class="price-info-wrap card col-12 p-4 p-md-5 col-md-4">
					<img :src="roomData?.imageUrlList?.[0]" class="rounded mb-4" alt="room">
					<div class="">
						<h5 class="mb-4">價格詳情</h5>
						<div class="d-flex justify-content-between">
							<label>NT$ {{ toThousands(roomData.price || 0) }} x {{ getNumberOfDays(booking.checkInDate, booking.checkOutDate) }} 晚</label>
							<span>NT$ {{ toThousands(roomData.price * getNumberOfDays(booking.checkInDate, booking.checkOutDate)) || 0 }}</span>
						</div>
						<div class="discount d-flex justify-content-between">
							<label>住宿折扣</label>
							<span class="text-primary">-NT$ 1,000</span>
						</div>
						<hr />
						<div class="d-flex justify-content-between mb-4">
							<label>總價</label>
							<span>NT$ {{ toThousands(roomData.price * getNumberOfDays(booking.checkInDate, booking.checkOutDate) - 1000) }}</span>
						</div>
						<button type="button" class="btn btn-primary w-100 w-md-auto" @click="submitForm">確認訂房</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { User } from '@/types/user';
import type { Order } from '@/types/order';
import type { GetRoomRes } from '@/types/rooms';

const { getCounties, getDist, districts } = useZipcode();
const router = useRouter();
const route = useRoute();
const { $bookingStore } = useNuxtApp();
const { booking, clearBookingInfo } = $bookingStore;
const county = ref('');

// 訂房人資訊
const defaultBookingInfo: User = {
	name: '',
	phone: '',
	email: '',
	birthday: '',
	address: {
		zipcode: 0,
		detail: '',
		county: '',
		city: ''
	},
	_id: ''
};
// 房型資訊
const defaultRoomData: GetRoomRes = {
	name: '',
	description: '',
	imageUrl: '',
	imageUrlList: [],
	areaInfo: '',
	bedInfo: '',
	maxPeople: 0,
	price: 0,
	status: 1,
	facilityInfo: [],
	amenityInfo: [],
	_id: '',
	createdAt: '',
	updatedAt: ''
};
const bookingInfo = ref<User>({ ...defaultBookingInfo });

const { response: userRes, refresh: getUserInfo } = await useCustomFetch<User>('/api/v1/user', {
	method: 'GET',
	immediate: false
});
onMounted(async () => {
	await getUserInfo();
});

const setUserInfo = () => {
	bookingInfo.value = userRes.value?.result || bookingInfo.value;
};

watch(() => bookingInfo.value.address.zipcode, value => {
	if (value) {
		const result = districts.find(item => String(item.zipcode) === String(bookingInfo.value.address.zipcode));

		bookingInfo.value.address.county = result?.county || '';
		bookingInfo.value.address.zipcode = result?.zipcode || 0;
	}
}, {
	immediate: true
});

// 拿房型資料
const apiUrl = computed(() => `/api/v1/rooms/${route.query?.id}`);
const roomData = ref<GetRoomRes>({ ...defaultRoomData });
const { response: roomRes } = await useCustomFetch<GetRoomRes>(apiUrl.value, {
	method: 'GET'
});
watch(() => roomRes, () => {
	if (roomRes.value?.result) {
		roomData.value = roomRes.value?.result;
	}
}, {
	immediate: true
});

const submitForm = async () => {
	const { response } = await useCustomFetch<Order>('/api/v1/orders', {
		method: 'POST',
		body: {
			...booking,
			checkInDate: transferToFullDate(booking.checkInDate),
			checkOutDate: transferToFullDate(booking.checkOutDate),
			userInfo: { ...JSON.parse(JSON.stringify(bookingInfo.value)) }
		}
	});
	if (!response.value?.status) {
		return;
	}
	router.push(`/reservation/success?id=${response.value.result._id}`);

	clearBookingInfo();

	return response.value.result;
};

</script>

<style lang="scss" scoped>

.reservation-info-wrap {
	@include media-md {
		padding-right: 72px;
	}

	.title::before {
		display: inline-block;
		margin-right: 12px;
		width: 4px;
		height: 24px;
		background: #BF9D7D;
		border-radius: 10px;
		content: "";
		vertical-align: middle;
	}

	.form-label {
		color: $black;
	}

	.room-info {
		width: 97px;
		height: 97px;

		span {
			white-space: nowrap;
		}
	}

	hr {
		margin: 47px 0;
		width: 100%;
		color: $gray-60;

		@include media-md {
			margin: 40px 0;
		}
	}
}

.price-info-wrap {
	position: sticky;
	top: 160px;

	.discount {
		margin-top: 12px;
	}

	hr {
		margin: 24px 0;
		width: 100%;
		color: $gray-60;
	}
}

</style>
