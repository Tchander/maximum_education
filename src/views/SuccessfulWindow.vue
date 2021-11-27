<template>
  <div class="mxed-wrapper">
    <div class="mxed-successful">
      <div class="mxed-successful__title">
        <span @click="closeModalWindow" class="mxed-close"></span>Заявка
        отправлена.
      </div>
      <img
        class="mxed-successful__image"
        src="../assets/images/success_img.png"
        alt="success"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "SuccessfulWindow",
  methods: {
    closeModalWindow() {
      this.$router.push({
        name: "Home",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.mxed-wrapper {
  background: #2c2c2c;
  height: 100vh;
  display: flex;
}
.mxed-successful {
  width: 395px;
  height: 280px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border: 1px solid #969696;
  .mxed-successful__title {
    position: relative;
    font-weight: 700;
    letter-spacing: -0.2px;
    margin-top: 45px;
    margin-bottom: 20px;
    color: #2b2b2b;
  }
  .mxed-successful__image {
    margin: 0 auto;
    width: 249px;
    height: 164px;
  }
  .mxed-close {
    position: absolute;
    right: -128px;
    top: -34px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    &:before,
    &:after {
      position: absolute;
      content: " ";
      height: 20px;
      width: 2px;
      background-color: #252525;
    }
    &:before {
      transform: rotate(45deg);
    }
    &:after {
      transform: rotate(-45deg);
    }
  }
}
</style>
