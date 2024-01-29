<template>
	<div class="bg-primary-10">
		<!-- 手機板Banner -->
		<div class="room-banner-mobile position-relative col-12 d-lg-none">
			<Swiper class="room-swiper" v-bind="swiperConfig">
				<SwiperSlide v-for="(item, index) in roomData.imageUrlList" :key="index">
					<img class="room-pic" :src="item" :alt="`room${index+1}`">
				</SwiperSlide>
			</Swiper>
			<button type="button" class="check-more-btn btn btn-outline-primary bg-white me-3 position-absolute">看更多</button>
		</div>
		<!-- 電腦版Banner -->
		<div class="room-banner-desktop position-relative col-12 d-none d-lg-block">
			<div class="room-wrap row g-0">
				<div class="col-6 h-100 pe-2">
					<img class="room-pic" :src="roomData.imageUrlList[0]" alt="">
				</div>
				<div class="col-6 h-100">
					<div class="row g-2 h-100">
						<div v-for="(item, index) in roomData.imageUrlList.slice(1)" :key="index" class="col-6 h-50">
							<img class="room-pic" :src="item" :alt="`room_${index+1}`">
						</div>
					</div>
				</div>
			</div>
			<button type="button" class="check-more-btn btn btn-outline-primary bg-white	me-3 position-absolute">看更多</button>
		</div>
		<!-- 主要內容 -->
		<div class="container">
			<div class="row">
				<div class="room-info-wrap col-12 col-md-6 col-lg-7">
					<h1 class="mb-2">{{ roomData.name }}</h1>
					<div class="mb-4">
						{{ roomData.description }}
					</div>
					<!-- 房型基本資訊 -->
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
					<!-- 訂房須知 -->
					<div class="mb-4">
						<div class="title mb-3">訂房須知</div>
						<ol>
							<li>入住時間為下午3點，退房時間為上午12點。</li>
							<li>如需延遲退房，請提前與櫃檯人員聯繫，視當日房況可能會產生額外費用。</li>
							<li>請勿在房間內抽煙，若有抽煙需求，可以使用設在酒店各樓層的專用吸煙區。</li>
							<li>若發現房間內的設施有損壞或遺失，將會按照價值收取賠償金。</li>
							<li>請愛惜我們的房間與公共空間，並保持整潔。</li>
							<li>如需額外的毛巾、盥洗用品或其他物品，請聯繫櫃檯。</li>
							<li>我們提供免費的Wi-Fi，密碼可以在櫃檯或是房間內的資訊卡上找到。</li>
							<li>請勿帶走酒店房內的物品，如有需要購買，請與我們的櫃檯人員聯繫。</li>
							<li>我們提供24小時櫃檯服務，若有任何需求或疑問，歡迎隨時詢問。</li>
							<li>為了確保所有客人的安全，請勿在走廊或公共區域大聲喧嘩，並遵守酒店的其他規定。</li>
						</ol>
					</div>
				</div>
				<div class="order-room-desktop d-none d-md-block col-md-6 col-lg-5">
					<div class="card">
						<div class="card-header fs-5">預訂房型</div>
						<div class="card-body p-0">
							<h2 class="card-title">尊爵雙人房</h2>
							<p class="card-text">享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</p>
							<div class="position-relative">
								<div class="date-picker-wrap mb-3 d-flex gap-2 position-relative">
									<button type="button" class="btn btn-outline-primary text-black border-black d-flex flex-column align-items-start w-50 p-3"
										@click="isOpenDesktopDatePickerModal = !isOpenDesktopDatePickerModal">
										<span>入住</span>
										<span>{{ transferToFullDate(range.start) }}</span>
									</button>
									<button type="button" class="btn btn-outline-primary text-black border-black d-flex flex-column align-items-start w-50 p-3"
										@click="isOpenDesktopDatePickerModal = !isOpenDesktopDatePickerModal">
										<span>退房</span>
										<span>{{ transferToFullDate(range.end) }}</span>
									</button>
								</div>
								<!-- desktop 日曆Modal -->
								<div class="mobile-date-picker-modal-wrap" :class="isOpenDesktopDatePickerModal ? 'd-block' : ' d-none'">
									<div class="modal-backdrop"></div>
									<div class="mobile-date-picker-modal position-absolute bg-white">
										<div class="mobile-date-picker-modal-header">
											<h5 v-if="range.start || range.end">
												{{ getNumberOfDays(range.start, range.end) }} 晚
												<p class="text-gray-80 fs-sm mt-2">{{ transferToFullDate(range.start) }} - {{ transferToFullDate(range.end) }}</p>
											</h5>
											<h5 v-else>請選擇入住日期</h5>
										</div>
										<div class="mobile-date-picker-modal-body bg-white">
											<client-only>
												<!-- 選擇日期區塊 -->
												<VDatePicker expanded :columns="2" :attributes="attrs" v-model.range="range" mode="date" transparent borderless color="gray" />
											</client-only>
										</div>
										<div class="mobile-date-picker-modal-footer d-flex justify-content-end">
											<button class="btn btn-white" type="button" @click="clearDate">清除日期</button>
											<button class="btn btn-primary" type="button" @click="confirmDate('desktop')" :disabled="!range.start || !range.end">確定日期</button>
										</div>
									</div>
								</div>
							<!-- End -->
							</div>
							<!-- 調整人數 -->
							<div class="peopel-info d-flex justify-content-between align-items-center">
								<label for="">人數</label>
								<div>
									<button type="button" class="adjust-people-btn" @click="adjustPeople('decrease')" :disabled="totalPeople <= 1">
										<img :src="totalPeople <= 1 ? '/image/ic_minus_disabled.svg' : '/image/ic_minus.svg'" alt="minus icon">
									</button>
									<span class="mx-3">{{ totalPeople }}</span>
									<button type="button" class="adjust-people-btn" @click="adjustPeople('increase')" :disabled="totalPeople >= roomData.maxPeople">
										<img src="/image/ic_plus.svg" alt="plus icon">
									</button>
								</div>
							</div>
							<p class="total-price fs-5 text-primary">NT$ {{ toThousands(roomData.price) }}</p>
							<NuxtLink to="/reservation" class="booking-btn btn btn-primary w-100">立即預訂</NuxtLink>
							<!-- <NuxtLink :to="{ name:'/reservation', params: { id: `${route.params?.id}` }}" class="booking-btn btn btn-primary w-100">立即預訂</NuxtLink> -->
						</div>
					</div>
				</div>
				<div v-if="!isOpenOffcanvasModal" class="order-room-mobile d-flex justify-content-between align-items-center d-md-none bg-white position-fixed bottom-0 fs-sm">
					<!-- 未打開日曆 -->
					<div>NT$ {{ toThousands(roomData.price) }} / 晚</div>
					<button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom" @click="openDatePickerModal">
						查看可訂日期
					</button>
				</div>
				<div v-else class="order-room-mobile d-flex justify-content-between align-items-center d-md-none bg-white position-fixed bottom-0 fs-sm">
					<!-- 選擇日期 -->
					<div class="w-100" v-if="!isConfirmDate">
						<button class="btn btn-white w-50" type="button" @click="clearDate">清除日期</button>
						<button class="btn btn-primary w-50" type="button" @click="confirmDate('mobile')" :disabled="!range.start || !range.end">確定日期</button>
					</div>
					<!-- 選擇人數 -->
					<div class="w-100" v-else-if="isConfirmDate && !isConfirmPeople">
						<button class="btn btn-white w-50" type="button" @click="isConfirmDate = !isConfirmDate">重新選擇日期</button>
						<button class="btn btn-primary w-50" type="button" @click="confirmPeople">儲存</button>
					</div>
					<!-- 立即預定 -->
					<div class="w-100 d-flex" v-else>
						<div class="w-50 d-flex flex-column justify-content-center">
							<p>NT$ {{ toThousands(roomData.price) }} / {{ getNumberOfDays(range.start, range.end) }} 晚 / {{ totalPeople }} 人</p>
							<p>{{ transferToOnlyDate(range.start) }} - {{ transferToOnlyDate(range.end) }}</p>
						</div>
						<button class="btn btn-primary w-50" type="button" @click="goBooking" :disabled="!isConfirmDate || !isConfirmPeople">立即預訂</button>
					</div>
				</div>
			</div>
		</div>
		<!-- mobile 日曆 Modal -->
		<div class="offcanvas offcanvas-bottom d-md-none" :class="{ 'confirm-date-modal-height': isConfirmDate, 'show': isOpenOffcanvasModal}" ref="offcanvasRef" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
			<div class="offcanvas-header py-3 px-4 d-flex	flex-column align-items-start">
				<button type="button" class="btn-close text-reset mb-2" data-bs-dismiss="offcanvas" aria-label="Close"></button>
				<h5 v-if="range.start || range.end" class="offcanvas-title" id="offcanvasBottomLabel">
					{{ getNumberOfDays(range.start, range.end) }} 晚
					<span class="text-gray-80 fs-sm ms-3">{{ transferToFullDate(range.start) }} - {{ transferToFullDate(range.end) }}</span>
				</h5>
				<h5 v-else class="offcanvas-title" id="offcanvasBottomLabel">請選擇入住日期</h5>
			</div>
			<div class="offcanvas-body small p-4">
				<div v-if="!isConfirmDate">
					<client-only>
						<!-- 選擇日期區塊 -->
						<VDatePicker expanded :rows="2" :attributes="attrs" v-model.range="range" mode="date" transparent borderless color="gray" />
					</client-only>
				</div>
				<div v-else>
					<div class="fs-normal fw-bold mb-2">選擇人數</div>
					<span>此房型最多供 4 人居住，不接受寵物入住。</span>
					<!-- 調整人數 -->
					<div class="mt-3">
						<button type="button" class="adjust-people-btn" @click="adjustPeople('decrease')" :disabled="totalPeople <= 1">
							<img :src="totalPeople <= 1 ? '/image/ic_minus_disabled.svg' : '/image/ic_minus.svg'" alt="minus icon">
						</button>
						<span class="mx-3">{{ totalPeople || 0 }}</span>
						<button type="button" class="adjust-people-btn" @click="adjustPeople('increase')" :disabled="totalPeople >= roomData.maxPeople">
							<img src="/image/ic_plus.svg" alt="plus icon">
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { GetRoomRes } from '@/types/rooms';

const route = useRoute();
const router = useRouter();
const totalPeople = ref<number>(2);
const isOpenOffcanvasModal = ref<boolean>(false);
const isOpenDesktopDatePickerModal = ref<boolean>(false);
const offcanvasRef = ref<HTMLElement | null>(null);
const isConfirmDate = ref<boolean>(false);
const isConfirmPeople = ref<boolean>(false);
const swiperConfig = {
	modules: [ SwiperPagination ],
	loop: true,
	pagination: {
		clickable: true,
		bulletClass: 'my-swiper-pagination-bullet',
		bulletActiveClass: 'my-swiper-pagination-bullet-active'
	}
};

// VDatePicker
const range = ref<any>({
	start: new Date(),
	end: new	Date(new Date().setDate(new Date().getDate() + 1))
});
const attrs = ref([
	{
		key: 'today'
		// dates: new Date()
		// highlight: true,
	}
]);

onMounted(() => {
	// console.log('offcanvasRef:', offcanvasRef.value);
	offcanvasRef.value!.addEventListener('shown.bs.offcanvas', function() {
		isOpenOffcanvasModal.value = true;
	});
	offcanvasRef.value!.addEventListener('hidden.bs.offcanvas', function() {
		isOpenOffcanvasModal.value = false;
	});
});

const apiUrl = computed(() => `/api/v1/rooms/${route.params?.id}`);
const roomData = computed(() => JSON.parse(JSON.stringify(roomRes.value?.result)));
const { response: roomRes, refresh: getRooms } = await useCustomFetch<GetRoomRes>(apiUrl.value, {
	method: 'GET'
});

const clearDate = () => {
	range.value.start = '';
	range.value.end = '';
};

const transferToOnlyDate = (param: Date) => {
	const dateTime = new Date(param);
	return `${dateTime.getMonth() + 1} / ${dateTime.getDate()}`;
};

const transferToFullDate = (param: Date) => {
	const dateTime = new Date(param);
	return `${dateTime.getFullYear()} / ${dateTime.getMonth() + 1} / ${dateTime.getDate()}`;
};

const openDatePickerModal = () => {
	isOpenOffcanvasModal.value = !isOpenOffcanvasModal.value;
};

const confirmDate = (param: string) => {
	isConfirmDate.value = true;
	if (param === 'desktop') {
		router.push({ name: 'reservation' });
	}
};

const adjustPeople = (param: string) => {
	if (param === 'increase') {
		totalPeople.value += 1;
	} else {
		totalPeople.value -= 1;
	}
};

const confirmPeople = () => {
	isConfirmPeople.value = true;
};

const goBooking = () => {
	router.push({ name: 'reservation' });
};
</script>

<style lang="scss" scoped>
.icon {
	width: 24px;
	height: 24px;
}

.room-pic {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.adjust-people-btn {
	padding: 16px;
	background-color: transparent;
	border: 1px solid $gray-40;
	border-radius: 100px;

	&:focus {
		background-color: $primary-10;
	}
}

.room-banner-mobile {
	margin-top: 72px;

	.room-swiper {
		height: 251px;

		@include media-md {
			// display: none;
			margin-top: 120px;
			height: 600px;
		}
	}

	.check-more-btn {
		bottom: 23px;
		right: 13px;
		z-index: 2;
	}
}

.room-banner-desktop {
	padding-top: 120px;

	.room-wrap {
		overflow: hidden;
		margin: 80px;
		height: 600px;
		border-radius: 15px;
	}

	.check-more-btn {
		bottom: 40px;
		right: 120px;
		z-index: 2;
	}
}

.container {
	padding-top: 40px;
	padding-bottom: 40px;

	@include media-lg {
		padding-top: 120px;
		padding-bottom: 120px;
	}

	.room-info-wrap {
		@include media-lg {
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

		.room-info {
			width: 97px;
			height: 97px;

			span {
				white-space: nowrap;
			}
		}
	}

	.order-room-desktop {
		.card	{
			position: sticky;
			top: 160px;
			padding: 40px;

			.card-header {
				padding: 0 0 16px;
				margin-bottom: 40px;
				background-color: transparent
			}

			.card-body {
				.card-text {
					margin-bottom: 40px;
				}

				.date-picker-wrap {
					z-index: 1060;
				}

				.mobile-date-picker-modal {
					top: -32px;
					right: -32px;
					padding: 32px;
					width: 740px;
					border-radius: 20px;
					z-index: 1055;

					.mobile-date-picker-modal-header {
						height: 54px;
					}

					.mobile-date-picker-modal-body {
						padding-top: 40px;
					}
				}
			}

			.peopel-info {
				margin-bottom: 40px;
			}

			.total-price {
				margin-bottom: 40px;
			}

			.booking-btn {
				padding: 16px 32px;
			}

			.amount	{
				margin-bottom: 40px;
			}
		}
	}

	.order-room-mobile {
		padding: 12px;
		z-index: 1065;
		border-top: 1px solid $gray-40;
	}
}

.confirm-date-modal-height {
	bottom: 81px;
	height: auto;
}
</style>
