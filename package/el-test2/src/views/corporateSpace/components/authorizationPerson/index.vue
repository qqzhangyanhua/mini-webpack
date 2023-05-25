<template>
  <div class="authorization-person">
    <el-tabs v-model="activeName">
      <el-tab-pane label="企业授权记录" name="first">
        <p  class="authorization-person--title">以下为本企业授权办事人代办的服务</p>
        <EnterpriseRecord :activeName="activeName"/>
      </el-tab-pane>
      <el-tab-pane label="个人申请记录" name="second">
        <p  class="authorization-person--title">以下为办事人申请本企授权的申请记录</p>
        <PersonalRecord :activeName="activeName" />
      </el-tab-pane>
    </el-tabs>
  <div class="authorization-person__btn">
      <el-button icon="el-icon-plus" v-if="activeName==='first'" @click="addAuth" type="primary">添加授权</el-button>
  </div>
  </div>
</template>

<script>
import EnterpriseRecord from "./enterpriseRecord.vue";
import PersonalRecord from "./personalRecord.vue";
export default {
  components: {
    EnterpriseRecord,
    PersonalRecord,
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
        this.$router.push({
          name:'AddAuthorization'
        })
    }
  },
};
</script>

