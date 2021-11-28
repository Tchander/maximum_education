<template>
  <div class="mxed-block mxed-block--no_margin">
    <button
      :disabled="isButtonDisabled"
      class="mxed-btn"
      :class="{ 'mxed-btn--active': !isButtonDisabled }"
      type="submit"
      @click="sendData"
    >
      Отправить
    </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { CHOOSE_CITY } from "@/const";
import { sendRequest } from "@/api/sendRequestApi";

export default {
  name: "SubmitButton",
  CHOOSE_CITY,
  computed: {
    isButtonDisabled() {
      return (
        this.outputCityData === this.$options.CHOOSE_CITY ||
        this.outputAppealData === "" ||
        this.description === ""
      );
    },
    ...mapGetters("cities", {
      outputCityData: "outputCityData",
    }),
    ...mapGetters("file", {
      file: "file",
    }),
    ...mapGetters("description", {
      description: "description",
    }),
    ...mapGetters("appeals", {
      outputAppealData: "outputAppealData",
    }),
  },
  methods: {
    async sendData() {
      const formData = new FormData();
      formData.append("city", this.outputCityData);
      formData.append("subjectOfAppeal", this.outputAppealData);
      formData.append("problemDescription", this.description);
      formData.append("document", this.file);
      try {
        // Отправка запроса по api
        // const { response } = await sendRequest(formData);
        // Получение случайного ответа, без отправки запроса из-за проблемы на стороне api
        const response = sendRequest();
        if (response) {
          this.changeIsOnline(false);
          this.changeCurrentCity(this.$options.CHOOSE_CITY);
          this.changeSelectedAppeal("");
          this.changeDescription("");
          this.changeFile(null);
          await this.$router.push({
            name: "SuccessfulWindow",
          });
        } else {
          alert("Ошибка отправки заявки");
        }
      } catch (e) {
        console.error(e);
      }
    },
    ...mapActions("cities", ["changeCurrentCity", "changeIsOnline"]),
    ...mapActions("appeals", ["changeSelectedAppeal"]),
    ...mapActions("description", ["changeDescription"]),
    ...mapActions("file", ["changeFile"]),
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
  &--active {
    cursor: pointer;
    background: #ff966a;
  }
}
</style>
