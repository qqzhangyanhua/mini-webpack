<template>
  <div class="authorization-person">
    <el-tabs v-model="activeName">
      <el-tab-pane label="个人授权记录" name="first">
        <p  class="authorization-person--title">以下为个人授权本企业代办的服务</p>
        <PersonAuthorization :activeName="activeName"/>
      </el-tab-pane>
      <el-tab-pane label="企业申请记录" name="second">
        <p  class="authorization-person--title">以下为本企业申请他人授权的申请记录</p>
        <EnterpriseApplication :activeName="activeName" />
      </el-tab-pane>
    </el-tabs>
  <div class="authorization-person__btn">
      <el-button icon="el-icon-plus" v-if="activeName==='second'" @click="addAuth" type="primary">申请授权</el-button>
  </div>
  </div>
</template>

<script>
import EnterpriseApplication from "./enterpriseApplication.vue";
import PersonAuthorization from "./personAuthorization.vue";
export default {
  components: {
    EnterpriseApplication,
    PersonAuthorization,
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
<style lang="scss" >
  .authorization-person{
    position: relative;
    padding-top: 20px;
    .authorization-person__btn{
      position: absolute;
     top: 10px;
     right: 0;
    }
    &--title{
      color: rgba(0, 0, 0, 0.4);
      font-size: 14px;
      margin: 0;
      line-height: 22px;
      padding-bottom: 8px;
    }
    &__pagination{
      margin-top: 20px;
      text-align: center;
    }
   
  }
</style>
