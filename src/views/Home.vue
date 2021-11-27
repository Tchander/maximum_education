<template>
  <div class="mxed-container">
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
}
</style>
