<template>
  <div class="home">
    <el-row>
    <el-button @click="handelClick('AuthorizationPerson')">办事人授权</el-button>
    <el-button @click="handelClick('PersonEnterprise')">个人请企业办</el-button>
    <el-button @click="handelClick('AuthorizedAddress')">授权通讯录</el-button>
    <el-button>委托书签字</el-button>
    </el-row>
    <component :is="isComp"></component>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import AuthorizationPerson from './components/authorizationPerson.vue';
import PersonEnterprise from './components/personEnterprise.vue'
import AuthorizedAddress from './components/authorizedAddress.vue'
export default Vue.extend({
  name: 'HomeView',
  components: {
    AuthorizationPerson,
    PersonEnterprise,
    AuthorizedAddress
  },
  data(){
    return{
      isComp:'AuthorizationPerson'
    }
  },
  methods: {
    handelClick(val:string){
      console.log(val);
        this.isComp =val
    }
  }
});
</script>
