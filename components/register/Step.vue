<template>
  <ul v-if="currentStep === 1" class="list-unstyled d-flex justify-content-between align-items-center my-3">
    <li class="d-flex flex-column align-items-center text-white">
      <span class="circle bg-primary">
        1
      </span>
      <span>
        輸入信箱及密碼
      </span>
    </li>
    <li class="col bar bg-gray-60"></li>
    <li class="d-flex flex-column align-items-center text-gray-60">
      <span class="circle bg-transparent border-gray-60">
        2
      </span>
      <span>
        填寫基本資料
      </span>
    </li>
  </ul>
  <ul v-else class="list-unstyled d-flex justify-content-between align-items-center my-3">
    <li class="d-flex flex-column align-items-center text-white">
      <span class="circle bg-primary">
        <span class="material-symbols-outlined">check</span>
      </span>
      <span>
        輸入信箱及密碼
      </span>
    </li>
    <li class="col bar bg-gray-40"></li>
    <li class="d-flex flex-column align-items-center text-white">
      <span class="circle bg-primary">
        2
      </span>
      <span>
        填寫基本資料
      </span>
    </li>
  </ul>
</template>

<script lang="ts" setup>
const props = defineProps({
  currentStep: {
    type: Number,
    default: 1
  }
});
const steps = [
  {
    step: 1,
    context: '輸入信箱及密碼'
  },
  {
    step: 'process'
  },
  {
    step: 2,
    context: '填寫基本資料'
  }
]
</script>

<style lang="scss" scope>
.circle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-bottom: 0.25rem;
}
.bar {
  height: 2px;
}
.border-gray-60 {
  border: 1px solid $gray-60;
}
</style>