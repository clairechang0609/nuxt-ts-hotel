<template>
	<div class="bg-primary-10">
		<div class="container container-with-navbar">
			<NuxtLink :to="{path: `room/${$route.params}`}" class="mb-5 d-flex">
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
							<p>尊爵雙人房</p>
						</div>
						<span class="text-decoration-underline cursor-pointer">編輯</span>
					</div>
					<div class="mb-4 d-flex justify-content-between align-items-center">
						<div>
							<div class="title mb-2">訂房日期</div>
							<p>入住：12 月 4 日星期二</p>
							<p>退房：12 月 6 日星期三</p>
						</div>
						<span class="text-decoration-underline cursor-pointer">編輯</span>
					</div>
					<div class="mb-4 d-flex justify-content-between align-items-center">
						<div>
							<div class="title mb-2">房客人數</div>
							<p>2 人</p>
						</div>
						<span class="text-decoration-underline cursor-pointer">編輯</span>
					</div>
					<hr />
					<!-- 訂房人資訊 -->
					<div class="d-flex justify-content-between align-items-center mb-5">
						<h4>訂房人資訊</h4>
						<span class="text-decoration-underline cursor-pointer text-primary">套用會員資料</span>
					</div>
					<VeeForm @submit="submitForm" v-slot="{ meta: globalMata }">
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
								<VeeField name="county" label="縣市" rules="required" v-model="county" @change="bookingInfo.address.zipcode = ''" v-slot="{ field, errors }">
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
										<option v-for="item in getDist(county)" :value="item.zipcode" :key="item.id">{{ item.city }}</option>
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
					<!-- 房間格局 -->
					<div class="mb-4">
						<div class="title mb-3">房間格局</div>
						<ul class="bg-white p-4 d-flex gap-4 rounded list-unstyled flex-wrap">
							<li v-for="(item, index) in roomData.roomLayout" :key="`layout_${index+1}`">
								<img src="/image/ic_check.svg" alt="" class="me-2">
								<span>{{ item }}</span>
							</li>
						</ul>
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
					<img :src="roomData.imageUrlList[0]" class="rounded mb-4" alt="room">
					<div class="">
						<h5 class="mb-4">價格詳情</h5>
						<div class="d-flex justify-content-between">
							<label>NT$ {{ roomData.price }} x 2 晚</label>
							<span>NT$ 20,000</span>
						</div>
						<div class="d-flex justify-content-between">
							<label>住宿折扣</label>
							<span>-NT$ 1,000</span>
						</div>
						<hr />
						<div class="d-flex justify-content-between mb-4">
							<label>總價</label>
							<span>NT$ 19,000</span>
						</div>
						<NuxtLink :to="`/reservation/success?id=${orderId}`" class="btn btn-primary w-100">確認訂房</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const { getCounties, getDist, districts } = useZipcode();

// TODO: 這是假的 id
const orderId = ref('65a8c16758767d4550207785');
const route = useRoute();
// 訂房人資訊
const bookingInfo = ref({
	name: '',
	phone: '',
	email: '',
	address: {
		detail: '',
		zipcode: ''
	},
	_id: ''
});
const county = ref('');

const roomData = ref({
	name: '尊爵雙人房',
	description: '享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。',
	imageUrl: 'https://fakeimg.pl/300/',
	imageUrlList: [
		'https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-1.png?raw=true',
		'https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-2.png?raw=true',
		'https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-3.png?raw=true',
		'https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-4.png?raw=true',
		'https://github.com/hexschool/2022-web-layout-training/blob/main/typescript-hotel/%E6%A1%8C%E6%A9%9F%E7%89%88/room2-5.png?raw=true'
	],
	areaInfo: '24坪',
	bedInfo: '一張大床',
	maxPeople: 4,
	price: 10000,
	status: 1,
	roomLayout: [ '市景', '獨立衛浴', '客廳', '書房', '樓層電梯' ],
	facilityInfo: [
		{
			title: '平面電視',
			isProvide: true
		}
	],
	amenityInfo: [
		{
			title: '衛生紙',
			isProvide: true
		}
	],
	_id: '653e4661336cdccc752127a0',
	createdAt: '2023-10-29T11:47:45.641Z',
	updatedAt: '2023-10-29T11:47:45.641Z'
});

const submitForm = async () => {
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
	hr {
		margin: 24px 0;
		width: 100%;
		color: $gray-60;
	}
}

</style>
