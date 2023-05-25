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
      <TForm ref="tForm" :formConfig="formDataConfig" label-width="120px" />
      <div class="add-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >保存</el-button
        >
      </div>
    </div>
    <div v-else>
      <p class="auth-add-person--info">是否将 张爱国 从通讯录中删除？</p>
      <div class="add-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >删除</el-button
        >
      </div>
    </div>
  </el-dialog>
</template>
<script>
import TForm from "../../../../../components/tForm/index.vue";
import { formDataConfig } from "./person";
export default {
  components: {
    TForm,
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
  },
  methods: {},
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
  .el-dialog__body {
    padding: 0;
    padding-bottom: 24px;
  }
}
</style>
