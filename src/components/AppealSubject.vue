<template>
  <div class="mxed-block mxed-block--less_margin">
    <div class="mxed-label mxed-label--appeal">
      <span class="mxed-label__title mxed-label__title--required"
        >Тема обращения</span
      >
    </div>
    <div
      class="mxed-radio"
      v-for="(subject, index) in $options.SUBJECTS_OF_APPEAL"
      :key="index"
      :class="{
        'mxed-radio--last': index === $options.SUBJECTS_OF_APPEAL.length - 1,
      }"
    >
      <input
        class="mxed-radio__button"
        v-model="selected"
        type="radio"
        :id="'radio_' + index"
        name="subject_of_appeal"
        :value="subject"
        @click="onChangeAppeal(subject)"
      />
      <label class="mxed-radio__label" :for="'radio_' + index">{{
        subject
      }}</label>
    </div>
    <input
      class="mxed__input"
      type="text"
      placeholder="Другое"
      :value="inputAppeal"
      @input="onChangeValue"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import { SUBJECTS_OF_APPEAL } from "@/const";
export default {
  SUBJECTS_OF_APPEAL,
  name: "AppealSubject",
  data() {
    return {
      selected: "",
    };
  },
  computed: {
    ...mapGetters("appeals", {
      selectedAppeal: "selectedAppeal",
      inputAppeal: "inputAppeal",
    }),
  },
  methods: {
    ...mapActions("appeals", ["changeInputAppeal", "changeSelectedAppeal"]),
    onChangeAppeal(subject) {
      this.changeSelectedAppeal(subject);
    },
    onChangeValue({ target: { value } }) {
      this.changeInputAppeal(value);
      this.selected = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.mxed-label--appeal {
  margin-bottom: 16px;
}
.mxed-radio {
  position: relative;
  margin-bottom: 18px;
  &--last {
    margin-bottom: 14px;
  }
  .mxed-radio__button {
    -webkit-appearance: none;
    appearance: none;
    position: absolute;
  }
  .mxed-radio__label {
    padding-left: 30px;
    line-height: 20px;
    letter-spacing: -0.35px;
    &:before {
      content: "";
      display: block;
      position: absolute;
      top: -3px;
      left: -2px;
      z-index: 1;
      width: 24px;
      height: 24px;
      border: 1px solid #000;
      box-sizing: border-box;
      border-radius: 50%;
      background-color: #fff;
      cursor: pointer;
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      top: 3px;
      left: 4px;
      z-index: 2;
      width: 12px;
      height: 12px;
      background-color: #000;
      border-radius: 50%;
      opacity: 0;
      cursor: pointer;
    }
  }
  .mxed-radio__button:checked + .mxed-radio__label:after {
    opacity: 1;
  }
}
.mxed__input {
  border: 1px solid #e1e1e1;
  border-radius: 2px;
  width: 100%;
  max-width: 236px;
  letter-spacing: 0.6px;
  background: #fff;
  color: #4e4a49;
  padding: 8px;
}
</style>
