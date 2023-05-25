<template>
  <el-dialog title="同意授权" :visible.sync="dialogVisible" width="40%" center>
    <p class="agree-author--title"
      >若要同意 王恒 向您发起的
      第二类医疗器械经营变更备案的授权申请，需补全以下信息：</p
    >
    <div>
      <TForm ref="tForm" :formConfig="formDataConfig" label-width="180px" />
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="handelAgree">同意并签章</el-button>
    </span>
  </el-dialog>
</template>
<script>
import TForm from "../../../../../components/tForm/index.vue";
import { formDataConfig } from "./formConfig";
export default {
  props: {
    showVisible: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    TForm,
  },
  data() {
    return {
      formDataConfig,
      form: {
        name: "",
      },
      rules: {},
    };
  },
  created() {},
  mounted() {},
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
    handelAgree() {
      this.$nextTick(() => {
        console.log("this.$refs.tForm==", this.$refs.tForm);

        // this.$refs.tForm.getFormData();
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.agree-author--title{
  color: #FC7A43;
  display: inline-block;
  padding-bottom: 24px;
}
</style>
