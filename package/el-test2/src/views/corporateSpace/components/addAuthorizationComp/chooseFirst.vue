<template>
  <div class="choose-first">
    <el-row :gutter="20" class="choose-first__header">
      <el-col :span="12">
        <h3>
          请选择要代办的服务
          <span class="choose-first--tags"
            >您只可以授权已开通代办功能的服务</span
          >
        </h3>
      </el-col>
      <el-col :span="4">
        <el-select size="small" style="width: 100%" v-model="value"></el-select>
      </el-col>
      <el-col :span="6">
        <el-input
          size="small"
          placeholder="请输入事项或主体服务名称"
        ></el-input>
      </el-col>
      <el-col :span="2">
        <el-button type="primary" size="small">搜索</el-button>
      </el-col>
    </el-row>
    <div class="choose-first__content">
      <p class="choose-first__content--remark">
        授权待办服务已开通 <span>{{ pendingList.length }}</span> 项
      </p>
      <el-radio-group v-model="radio" class="choose-first__list-group">
        <div
          v-for="item in pendingList"
          :key="item.id"
          class="choose-first__list-group__radio"
        >
          <el-radio :label="item.id">{{ item.name }} <el-tag size='small'>一件事</el-tag></el-radio>
        </div>
      </el-radio-group>
      <div class="choose-first__footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-size="100"
          layout="total, prev, pager, next"
          :total="1000"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pendingList: [
        {
          id: 1,
          name: "申报职业技能鉴定（健康 昭护专项职业能力考核)",
        },
        {
          id: 2,
          name: "政府信息依申请公开（依申清重项新办）",
        },
        {
          id: 3,
          name: "开药店（已办理药店抽建申请）",
        },
      ],
      radio: "",
      value: "",
      formInline: {
        user: "",
      },
    };
  },
  created() {},
  computed: {},
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.choose-first {
  padding: 24px;
  &__header {
    padding-bottom: 24px;
    h3 {
      margin: 0;
    }
  }

  .choose-first--tags {
    color: #fc7a43;
    font-size: 14px;
  }
  &__content {
    border-top: 1px solid #e5e5e5;
    padding-top: 16px;
    &--remark {
      color: rgba(0, 0, 0, 0.6);
      font-size: 16px;
      line-height: 24px;
      span {
        color: red;
      }
    }
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
<style lang="scss">
.choose-first__list-group {
  width: 100%;

  &__radio {
    width: 100%;
    .el-radio {
      padding: 16px 0;
      width: 100%;
      .el-radio__input {
        padding-left: 10px;
      }
    }
    .is-checked {
      background: rgba(203, 180, 134, 0.1);
      color: rgba(0, 0, 0, 0.8);
      .el-radio__label {
        color: rgba(0, 0, 0, 0.8);
      }
    }
  }
}
</style>
