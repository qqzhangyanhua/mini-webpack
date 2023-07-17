<template>
  <div>
    <input v-model="form.name" />
    {{form.age}}
  </div>
</template>
<script>
export default {
  props: {
    form: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  created() {},

  methods: {},
};
</script>
