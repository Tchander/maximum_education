<template>
  <div class="mxed-wrapper">
    <h3 class="mxed__title">Форма подачи заявки в отдел сервиса и качества</h3>
    <form class="mxed-form" @submit.prevent="">
      <branch-selector />
      <appeal-subject />
      <problem-description />
      <documents-uploading />
      <submit-button />
    </form>
  </div>
</template>

<script>
import BranchSelector from "@/components/BranchSelector";
import AppealSubject from "@/components/AppealSubject";
import ProblemDescription from "@/components/ProblemDescription";
import DocumentsUploading from "@/components/DocumentsUploading";
import SubmitButton from "@/components/SubmitButton";
export default {
  name: "FormWindow",
  components: {
    SubmitButton,
    DocumentsUploading,
    ProblemDescription,
    AppealSubject,
    BranchSelector,
  },
};
</script>

<style lang="scss" scoped>
.mxed__title {
  color: #4e4a49;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0.5px;
  margin: 14px 0 24px 0;
  @media (max-width: 599px) {
    margin: 8px 0 12px 0;
    font-size: 18px;
    text-align: center;
  }
  @media (max-width: 319px) {
    font-size: 16px;
  }
}
.mxed-form {
  border: 1px solid #e1e1e1;
  border-radius: 2px;
  padding: 38px 36px;
  color: #4e4a49;
  @media (max-width: 599px) {
    padding: 10px;
  }
}
</style>
