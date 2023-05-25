<template>
  <el-dialog
    title="添加授权人"
    center
    :visible.sync="dialogVisible"
    width="560px"
    class="auth-add-person"
  >
    <TForm ref="tForm" :formConfig="formDataConfig" label-width="120px" />
    <div class="add-footer">
      <t-button plain @click="dialogVisible = false">取消</t-button>
      <t-button type="primary" :disabled='isDisabled' @click="dialogVisible = false">保存</t-button>
    </div>
  </el-dialog>
</template>
<script>
import TForm from '@/components/tForm/index.vue'
import { formDataConfig } from "./person";
  import { TButton } from "@tongban/components";
export default {
  components: {
    TForm,
    TButton
  },
  props: {
    showVisible: {
      type: Boolean,
      default: false,
    },

    dialogType: {
      type: String,
      default: "add",
    },
  },
  data() {
    return {
      formDataConfig,
    };
  },
  created() {},
  computed: {
        isDisabled(){
      return true
    },
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
<style lang="scss" scoped>
.add-footer {
  text-align: center;
}
.auth-add-person--info {
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  padding-bottom: 40px;
}
</style>
<style lang="scss">
.auth-add-person {
  .el-dialog__body {
    // padding: 0;
    padding-bottom: 24px;
  }
}
</style>
