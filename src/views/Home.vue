<template>
  <div class="mxed-container">
    <h3 class="mxed__title">Форма подачи заявки в отдел сервиса и качества</h3>
    <form-window />
  </div>
</template>

<script>
import FormWindow from "../components/FormWindow";
export default {
  name: "Home",
  components: { FormWindow },
};
</script>

<style lang="scss">
.mxed-container {
  width: 100%;
  max-width: 920px;
  margin: 0 auto;
  .mxed__title {
    color: #4e4a49;
    font-weight: 700;
    font-size: 20px;
    letter-spacing: 0.5px;
    margin: 12px 0 24px 0;
  }
}
</style>
