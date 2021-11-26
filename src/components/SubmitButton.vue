<template>
  <div class="mxed-block mxed-block--no_margin">
    <button
      :disabled="isButtonDisabled"
      class="mxed-btn"
      :class="{ 'mxed-btn--active': !isButtonDisabled }"
      @click="sendData"
    >
      Отправить
    </button>
  </div>
</template>

<script>
export default {
  name: "SubmitButton",
  computed: {
    isButtonDisabled() {
      return true;
    },
  },
  methods: {
    sendData() {
      console.log("42");
    },
  },
};
</script>

<style lang="scss" scoped>
.mxed-btn {
  background: #e2e2e2;
  color: #fff;
  padding: 8px 15px;
  text-transform: uppercase;
  cursor: not-allowed;
}
</style>
