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
import { mapActions, mapGetters } from "vuex";
export default {
  name: "DocumentsUploading",
  computed: {
    ...mapGetters("file", {
      fileUrl: "fileUrl",
    }),
  },
  methods: {
    ...mapActions("file", ["changeFileUrl"]),
    onChangeValue({ target: { value } }) {
      this.changeFileUrl(value);
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
