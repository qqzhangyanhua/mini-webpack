<template>
  <el-dialog title="拒绝申请" :visible.sync="dialogVisible" width="30%" center>
    <p>
      是否拒绝 <span class="dialog-black">李晓明 </span>向您发起的
      <span class="dialog-black">市场主体专用信用报告-查看</span> 的授权申请？
    </p>
    <el-form :rules="rules" ref="form" :model="form">
      <el-form-item prop="desc" label="拒绝理由">
        <el-input :rows="4" type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">拒绝申请</el-button>
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
    return {
      form: {
        desc: "",
      },
      rules: {
        desc: [{ required: true, message: "请输入拒绝理由", trigger: "blur" }],
      },
    };
  },
  created() {},
  computed: {
    dialogVisible: {
      get() {
        return this.showVisible;
      },
      set(value) {
        this.$emit("closed", false);
      },
    },
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.dialog-black {
  color: #000;
}
</style>
