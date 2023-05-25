<template>
  <el-dialog
    :visible.sync="dialogVisible"
    width="460px"
    center
    :show-close="false"
    class="auth-success"
  >
    <div class="auth-success__content">
      <i class="el-icon-success"></i>
      <h3 class="auth-success--msg">授权成功</h3>
      <p class="auth-success--return">{{ timeNum }}S跳转至{{ returnTitle }}</p>
      <el-button type="primary" @click="handBack"
        >前往{{ returnTitle }}</el-button
      >
    </div>
  </el-dialog>
</template>
<script>
export default {
  props: {
    showVisible: {
      type: Boolean,
      default: false,
    },
    returnTitle: {
      type: String,
      default: "个人申请记录",
    },
  },
  data() {
    return {
      timeNum: 3,
      timer: null,
    };
  },
  created() {},
  watch: {
    showVisible(value) {
      if (value) {
        if (this.timeNum < 0) return;
        this.timer = setInterval(() => {
          this.timeNum--;
          if (this.timeNum === 0) {
            clearInterval(this.timer);
            this.handBack();
          }
        }, 1000);
      }
    },
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  computed: {
    dialogVisible: {
      get() {
        return this.showVisible;
      },
      set() {
        this.$emit("closed", false);
      },
    },
  },
  methods: {
    handBack() {
      this.dialogVisible = false;
      this.timeNum = 3;
      this.$emit("back");
    },
  },
};
</script>
<style lang="scss" scoped>
.auth-success {
  text-align: center;
  color: rgba(0, 0, 0, 0.4);
  font-size: 14px;
  line-height: 22px;
  margin: 0 auto;
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .el-icon-success {
    font-size: 70px;
    color: #09bd65;
    margin-bottom: 20px;
  }
  &--msg {
    font-size: 20px;
    line-height: 28px;
    color: #000;
    margin: 10px 0;
  }
  &--return {
    margin-bottom: 20px;
    font-size: 14px;
  }
}
</style>
