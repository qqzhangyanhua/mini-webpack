<template>
  <div class="corporate-space">
    <div class="corporate-space__header">
      <div
        :class="[
          'corporate-space__header--text',
          isComp === item.value ? 'corporate-space__header--active' : '',
        ]"
        v-for="item in compList"
        :key="item.value"
        @click="tabClick(item.value)"
      >
        <span>{{ item.name }}</span>
      </div>
    </div>
    <component :is="isComp" />
  </div>
</template>
<script>
import AuthorizationPerson from "./components/authorizationPerson/index.vue";
import PersonEnterprise from "./components/personEnterprise/index.vue";
import AuthorizedAddress from "./components/authorizedAddress/index.vue";
import PowerSignature from "./components/powerSignature/index.vue";
export default {
  components: {
    AuthorizationPerson,
    PersonEnterprise,
    AuthorizedAddress,
    PowerSignature
  },
  data() {
    return {
      compList: [
        {
          name: "办事人授权",
          value: "AuthorizationPerson",
        },
        {
          name: "个人请企业办",
          value: "PersonEnterprise",
        },
        {
          name: "授权通讯录",
          value: "AuthorizedAddress",
        },
        {
          name: "委托书签字",
          value: "PowerSignature",
        },
      ],
      activeName: "first",
      isComp: "AuthorizationPerson",
    };
  },
  methods: {
    tabClick(val) {
      this.isComp = val;
    },
  },
};
</script>
<style lang="scss">
.corporate-space {
  &__header {
    display: flex;
    cursor: pointer;
    justify-content: space-around;
    color: #bd984c;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;

    &--text {
      background: rgba(203, 180, 134, 0.1);
      height: 100%;
      width: 100%;
      padding: 10px 0;
      text-align: center;
    }
    &--active {
      color: #000;
      background: #fff;
      border-radius: 8px 8px 0px 0px;
    }
  }
  .el-table__header {
    .el-table__cell {
      background: #f7f8fa;
    }
  }
}
.authorization-person {
  position: relative;
  padding-top: 20px;
  .authorization-person__btn {
    position: absolute;
    top: 10px;
    right: 0;
  }
  &--title {
    color: rgba(0, 0, 0, 0.4);
    font-size: 14px;
    margin: 0;
    line-height: 22px;
    padding-bottom: 8px;
  }
  &__pagination {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
<style lang="scss"></style>
