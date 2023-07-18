<template>
  <div id="app">
    <AInput :form="form" ref="aInput"></AInput>
    {{ form.name }}
    {{ form.age }}
    <!-- <AButton :form='form'  ref='aButton' @changeName='changeName'></AButton> -->
    <button @click="handelClick">按扭</button>
  </div>
</template>
<script>
import AButton from "./components/aButton/index.vue";
import AInput from "./components/aInput/index.vue";
export default {
  components: {
    AButton,
    AInput,
  },
  data() {
    return {
      form: {
        name: "张三",
        age: 4,
      },
    };
  },
  created() {
    this.timeOut();
  },
  computed: {},
  methods: {
    clearTime(timer){
      clearInterval(timer)
    },
    timeOut() {
      let timer = setInterval(() => {
        if (this.form.age === 0) {
          this.clearTime(timer)
          return;
        }
        this.form.age--;
      }, 1000);
    },
    changeName(val) {
      this.form.name = val;
    },
    handelClick() {
      console.log("this.$refs.aButton", this.$refs.aButton);
      const aButton = this.$refs.aButton;
      aButton.changeName("麦子");

      this.form.name = "李四";
      this.form.age = new Date().getTime();
    },
  },
};
</script>
<style lang="scss" scoped></style>
