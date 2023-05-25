<template>
  <el-dialog title="提示" :visible.sync="dialogVisible"  width="360px" class="">
    <i class="el-icon-success"></i>
    <h3>授权成功</h3>
    <p>3S跳转至个人申请记录</p>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="dialogVisible = false">前往个人授权记录</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  props: {
    showVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  created() {},
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
  methods: {},
};
</script>
<style lang="scss" scoped></style>
