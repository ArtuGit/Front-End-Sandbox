<template>
  <ul class="list-disc list-inside">
    <li>Check <a class="c-link" href="/router/123">/router/123</a></li>
    <li>Check <a class="c-link" href="/router/456">/router/456</a></li>
    <li v-if="num">Parameter <span class="m-name">:num</span> = {{ num }}</li>
  </ul>
</template>

<script>
export default {
  name: "Router",
  data() {
    return {
      num: Number
    };
  },
  created() {
    this.num = this.$route.params.num;
  }
};
</script>

<style scoped></style>
