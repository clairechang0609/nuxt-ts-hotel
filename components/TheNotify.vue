<template>
	<Notifications group="" animation-name="v-fade-top" position="top center" :duration="5000">
		<template #body="props">
			<div class="notify-card overflow-hidden bg-white m-4" :class="props.item.type">
				<div class="notify-card-body d-flex align-items-start py-2 px-3">
					<span class="icon flex-shrink-0 rounded-circle me-3">
						<span class="material-symbols-outlined text-white">
							<template v-if="props.item.type === 'success'">check</template>
							<template v-if="props.item.type === 'danger'">close</template>
						</span>
					</span>
					<div class="me-auto">
						<h5 class="notify-title lh-base fs-6">{{ props.item.title }}</h5>
						<div class="notify-description" v-dompurify-html="props.item.text"></div>
					</div>
					<span class="material-symbols-outlined close flex-shrink-0 cursor-pointer" @click="props.close">close</span>
				</div>
			</div>
		</template>
	</Notifications>
</template>

<script setup>
</script>

<style lang="scss">
$color-array: (
	success: $success,
	danger: $danger
);

.vue-notification-group {
	left: 50% !important;
	width: 100% !important;
	max-width: 600px;
	transform: translateX(-50%);
}

.icon {
	width: 1.5rem;
	height: 1.5rem;
}

.notify-card {
	color: $primary;
	background-color: $primary-10;
	border-radius: 10px;

	@each $key, $value in $color-array {
		&.#{$key} {
			border: 1px solid $value;

			.notify-card-body {
				color: $value;
				background-color: rgba($value, 0.25)
			}

			.notify-title {
				color: $value
			}

			.icon {
				background-color: $value;
			}
		}
	}
}

.notify-title, .notify-description {
	word-wrap: break-word;
	word-break: break-word;
	white-space: normal;
}

.v-fade-top-enter,
.v-fade-top-leave-to {
	opacity: 0;
}
</style>
