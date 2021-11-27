<template>
  <div class="mxed-block mxed-block--less_margin">
    <div class="mxed-label mxed-label--increased_margin">
      <span class="mxed-label__title mxed-label__title--increased_ls"
        >Загрузка документов</span
      >
    </div>
    <div class="mxed-text">
      Приложите, пожалуйста, полноэкранный скриншот. Это поможет быстрее решить
      проблему.
    </div>
    <input @input="onChangeValue" class="mxed-file" type="file" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "DocumentsUploading",
  methods: {
    ...mapActions("file", ["changeFile"]),
    onChangeValue(e) {
      const {
        target: { files },
      } = e;
      this.changeFile(files[0]);
    },
  },
};
</script>

<style lang="scss" scoped>
.mxed-text {
  color: #8d948c;
  width: 100%;
  max-width: 320px;
  letter-spacing: -0.4px;
  margin-bottom: 12px;
}
.mxed-file {
  letter-spacing: -0.3px;
}
</style>
