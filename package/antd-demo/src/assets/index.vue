<template>
  <div>
    <child :item="item" :name="name" />
  </div>
</template>
<script>
import child from "./child.vue";
export default {
  components: { child },
  data() {
    return {
      name: "",
      item: {
        xx: 1,
      },
    };
  },
  created() {},

  methods: {},
};
</script>
