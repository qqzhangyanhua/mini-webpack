<template>
  <el-dialog
    :title="titleTypeItem[dialogType]"
    center
    :visible.sync="dialogVisible"
    width="560px"
    class="auth-add-person"
  >
    <p class="add-header">
      温馨提示：编辑通讯通不会影响历史授权记录被授权人信息。
    </p>
    <div v-if="dialogType !== 'delete'">
      <TForm ref="tForm" :formConfig="formDataConfig" label-width="120px" size='small' />
      <div class="add-footer">
        <t-button @click="dialogVisible = false" plain>取消</t-button>
        <t-button type="primary" :disabled="!isDisabled" @click="submit"
          >保存</t-button
        >
      </div>
    </div>
    <div v-else>
      <p class="auth-add-person--info">是否将 张爱国 从通讯录中删除？</p>
      <div class="add-footer">
        <t-button @click="dialogVisible = false" plain>取消</t-button>
        <t-button type="primary" @click="submit">删除</t-button>
      </div>
    </div>
  </el-dialog>
</template>
<script>
import TForm from "../../../../../components/tForm/index.vue";
import { formDataConfig } from "./person";
import { TButton } from "@tongban/components";
export default {
  components: {
    TForm,
    TButton,
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
      formData:{},
      formDataConfig,
      titleTypeItem: {
        add: "新增人员",
        edit: "编辑人员",
        delete: "删除授权",
      },
    };
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
    isDisabled() {
      return true
    },
  },
  mounted() {
    this.$nextTick(() => {
        const data =  this.$refs.tForm.getFormDataValue();
        this.formData = data
        console.log("data", data);
    });
  },
  methods: {
    submit() {
      console.log('submit',this.formData);
      
      // const refForm = this.$refs.tForm.getFormRef();
      // console.log("refForm", refForm);
      // refForm && refForm.validate();

    },
  },
};
</script>
<style lang="scss" scoped>
.add-header {
  background: rgba(253, 171, 77, 0.05);
  color: #f5a623;
  font-size: 14px;
  line-height: 22px;
  padding: 12px 0 12px 12px;
  margin-bottom: 24px;
  border: 1px solid rgba(253, 171, 77, 0.1);
  border-radius: 4px;
}
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
  .el-dialog--center {
    .el-dialog__body {
      padding: 0;
      padding-bottom: 24px;
    }
  }
}
</style>
