<template>
  <div class="add-authorization">
    <div class="add-authorization__header">
      <el-steps :active="active" align-center>
        <el-step
          v-for="item in stepList"
          :key="item.id"
          :title="item.title"
        ></el-step>
      </el-steps>
    </div>
    <div class="add-authorization__content">
      <component :is="isComp"></component>
    </div>
    <div class="add-authorization__footer">
      <el-row type="flex" class="row-bg" justify="center">
        <el-col :span="6">
          <t-button v-if="active===1">返回</t-button>
          <t-button plain @click="handelPrev" v-if="isShowPrev">上一步</t-button>
        
          <t-button type="primary" @click="handelNext" >下一步</t-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import ChooseFifth from "./components/addAuthorizationComp/chooseFifth.vue";
import ChooseSecond from "./components/addAuthorizationComp/chooseSecond.vue";
import ChooseThird from "./components/addAuthorizationComp/chooseThird.vue";
import ChooseFourth from "./components/addAuthorizationComp/chooseFourth.vue";
import ChooseFirst from "./components/addAuthorizationComp/chooseFirst.vue";
export default {
  components: {
    ChooseFirst,
    ChooseSecond,
    ChooseThird,
    ChooseFourth,
    ChooseFifth,
  },
  data() {
    return {
      isComp: "ChooseFirst",
      compObj: {
        1: "ChooseFirst",
        2: "ChooseSecond",
        3: "ChooseThird",
        4: "ChooseFourth",
        5: "ChooseFifth",
      },
      stepList: [
        { title: "选择服务", id: 1 },
        { title: "选择被授权人", id: 2 },
        { title: "设置有效期", id: 3 },
        { title: "生成授权委托书", id: 4 },
        { title: "完成", id: 5 },
      ],
      active: 1,
    };
  },
  created() {},
  computed: {
    isShowPrev(){
      if(this.active>1){
        return true
      }
      return false
    }
  },
  methods: {
    handelPrev() {
      this.active--;
      this.isComp = this.compObj[this.active];
    },
    handelNext() {
      this.active++;
      this.isComp = this.compObj[this.active];
    },
  },
};
</script>
<style lang="scss" scoped>
@import '@/styles/var.scss';
.add-authorization {
  background: #f5f5f5;
  display: flex;
  height: 100%;
  flex-direction: column;
  &__header {
    background: #fff;
    padding: 20px 0;
  }
  &__content {
    flex: 1;
    background: #fff;
    margin-top: 16px;

  }
  &__footer {
    background: #fff;
    box-shadow: 0px -4px 16px rgba(0, 0, 0, 0.05);
    padding: 24px 0;
  }
}
</style>
