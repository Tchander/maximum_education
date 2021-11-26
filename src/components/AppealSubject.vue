<template>
  <div class="mxed-block">
    <div class="mxed-label mxed-label--appeal">
      <span class="mxed-label__title mxed-label__title--required"
        >Тема обращения</span
      >
    </div>
    <div
      class="mxed-radio"
      v-for="(subject, index) in $options.SUBJECTS_OF_APPEAL"
      :key="index"
    >
      <input
        class="mxed-radio__button"
        type="radio"
        :id="'radio_' + index"
        name="subject_of_appeal"
        :value="subject"
        v-model="selectedAppeal"
      />
      <label class="mxed-radio__label" :for="'radio_' + index">{{
        subject
      }}</label>
    </div>
  </div>
</template>

<script>
import { SUBJECTS_OF_APPEAL } from "@/const";
export default {
  SUBJECTS_OF_APPEAL,
  name: "AppealSubject",
  data() {
    return {
      selectedAppeal: "",
    };
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
</style>
