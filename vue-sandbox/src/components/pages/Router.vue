<template>
  <ul class="list-disc list-inside">
    <li>Check <a class="c-link" href="/router/123">/router/123</a></li>
    <li>Check <a class="c-link" href="/router/456">/router/456</a></li>
    <li>
      Check <a class="c-link" href="/router/delete/1">/router/delete/1</a>
    </li>
    <li>
      Check <a class="c-link" href="/router/delete/2">/router/delete/2</a>
    </li>
    <li v-if="num">
      Parameter <span class="m-name">:num</span>, passed through
      <span class="m-name">$route.params</span> = {{ num }}
    </li>
    <li v-if="numDelete">
      Parameter <span class="m-name">:numDelete</span>, passed through
      <span class="m-name">props</span> = {{ numDelete }}
    </li>
    <li><a class="c-link" href="/redirect">/redirect</a></li>
    <li><a class="c-link" href="/alias">/alias</a></li>
  </ul>
</template>

<script>
export default {
  name: "Router",
  props: {
    numDelete: String
  },
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
