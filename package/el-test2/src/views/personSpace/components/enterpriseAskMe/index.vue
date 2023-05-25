<template>
  <div class="authorization-person">
    <el-tabs v-model="activeName">
      <el-tab-pane label="企业授权记录" name="first">
        <p  class="authorization-person--title">以下为企业授权我代办的服务</p>
        <EnterpriseRecord :activeName="activeName"/>
      </el-tab-pane>
      <el-tab-pane label="我的申请记录" name="second">
        <p  class="authorization-person--title">以下为本人申请企业授权的申请记录</p>
        <ApplicationRecord :activeName="activeName" />
      </el-tab-pane>
    </el-tabs>
  <div class="authorization-person__btn">
      <el-button icon="el-icon-plus"  @click="addAuth" type="primary">申请授权</el-button>
  </div>
  </div>
</template>

<script>
import EnterpriseRecord from "./enterpriseRecord.vue";
import ApplicationRecord from "./applicationRecord.vue";
export default {
  components: {
    EnterpriseRecord,
    ApplicationRecord,
  },
  data() {
    return {
      activeName: "first",
    };
  },
  created() {},
  computed: {},
  methods: {
    addAuth(){
        console.log('添加授权');
        
    }
  },
};
</script>

