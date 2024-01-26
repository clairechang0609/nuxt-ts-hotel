<template>
	<div class="d-flex flex-column flex-lg-row justify-content-between align-items-center">
		<nav aria-label="pagination navigation">
			<ul class="pagination align-items-center">
				<li class="page-item mx-2">
					<button type="button" class="btn btn-link" :class="{ 'disabled': currentPage === 1 }" @click="getCurrentPage = currentPage - 1">
						<span class="material-symbols-outlined me-1">chevron_left</span>
						上一頁
					</button>
				</li>
				<template v-for="(page, index) in pageNumbers" :key="`page_${index}`">
					<!-- 分隔元素 -->
					<li class="page-item" v-if="page === 'separator'">
						<div class="page-link page-num border-0 mx-1 pe-none">…</div>
					</li>
					<!-- 分頁 -->
					<li class="page-item" v-else>
						<div class="page-link page-num border-0 rounded-circle px-1 mx-1"
							:class="{ 'active': page === currentPage }"
							@click="getCurrentPage = Number(page)">
							{{ page }}
						</div>
					</li>
				</template>
				<li class="page-item mx-2">
					<button type="button" class="btn btn-link" :class="{ 'disabled': currentPage === totalPages }" @click="getCurrentPage = currentPage + 1">
						下一頁
						<span class="material-symbols-outlined ms-1">chevron_right</span>
					</button>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script lang="ts" setup>
const props = defineProps({
	currentPage: { // 當前頁數
		type: Number,
		required: true
	},
	totalPages: { // 總頁數
		type: Number,
		required: true
	}
});

const emit = defineEmits([ 'update:length', 'update:currentPage' ]);

// 顯示頁數
const pageNumbers = computed(() => {
	let returnArr = [];
	const totalPages = props.totalPages;
	const currentPage = props.currentPage;

	if (!totalPages) {
		return [ 1 ];
	}
	if (totalPages <= 5) {
		returnArr = [ ...Array(totalPages).keys() ].map(i => i + 1);
	} else if (currentPage <= 4) {
		returnArr = [ 1, 2, 3, 4, 5, 'separator', totalPages ];
	} else if (currentPage >= (totalPages - 3)) {
		returnArr = [ 1, 'separator', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages ];
	} else {
		returnArr = [ 1, 'separator', currentPage - 1, currentPage, currentPage + 1, 'separator', totalPages ];
	}
	return returnArr;
});

const getCurrentPage = computed({
	get() {
		return props.currentPage;
	},
	set(val) {
		emit('update:currentPage', val);
	}
});
</script>

<style lang="scss" scoped>
.page-link {
	color: $gray-60;
	background-color: transparent;
	cursor: pointer;

	&:hover, &.active {
		color: $white;
		background-color: $primary;
	}

	&.page-num {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
		min-width: 30px;
		height: 30px
	}
}

.page-item.disabled .page-link {
	color: $gray-60;
	background-color: transparent;
	opacity: 0.5;
}

.previous, .next {
	&.active, &:hover {
		color: $primary;
		background-color: transparent;
	}
}
</style>
