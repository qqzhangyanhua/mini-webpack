<template>
  <div>
    {{ name }}
    {{ item.xx }}
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return {};
      },
    },
    name: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped></style>
