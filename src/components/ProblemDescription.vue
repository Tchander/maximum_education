<template>
  <div class="mxed-block mxed-block--less_margin">
    <div class="mxed-label mxed-label--increased_margin">
      <span
        class="
          mxed-label__title
          mxed-label__title--required
          mxed-label__title--increased_ls
        "
        >Описание проблемы</span
      >
    </div>
    <textarea
      :value="description"
      @input="onChangeValue"
      class="mxed-description"
      placeholder="Введите текст"
    ></textarea>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ProblemDescription",
  computed: {
    ...mapGetters("description", {
      description: "description",
    }),
  },
  methods: {
    ...mapActions("description", ["changeDescription"]),
    onChangeValue({ target: { value } }) {
      this.changeDescription(value);
    },
  },
};
</script>

<style lang="scss" scoped>
.mxed-description {
  width: 100%;
  height: 120px;
  resize: none;
  border: 1px solid #e1e1e1;
  border-radius: 2px;
  padding: 5px 8px;
}
</style>
