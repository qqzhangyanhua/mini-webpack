<template>
  <div class="choose-second">
    <div class="choose-second__header">
      <h3>第二类医疗器械经营变更备案</h3>
      <el-tag size='small'>授权服务</el-tag>
    </div>
    <div class="choose-second__content">
      <p class="choose-second__content--title">选择被授权人</p>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input placeholder="请输入内容" v-model="input3" size='small'>
            <el-select
              v-model="select"
              slot="prepend"
              placeholder="请选择"
              style="width: 150px"
            >
              <el-option label="餐厅名" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="用户电话" value="3"></el-option>
            </el-select>
          </el-input>
        </el-col>
        <el-col :span="6">
          <t-button type="primary" >查询</t-button>
          <t-button plain>重置</t-button>
        </el-col>
        <el-col :span="2" :offset="7">
          <t-button icon="el-icon-plus" @click="showVisible = true" plain
            >添加授权</t-button
          >
        </el-col>
      </el-row>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="selection" width="55"> </el-table-column>
        <el-table-column prop="date" label="姓名" width="180">
        </el-table-column>
        <el-table-column prop="name" label="手机号" width="180">
        </el-table-column>
        <el-table-column prop="address" label="证件类型"> </el-table-column>
        <el-table-column prop="address" label="证件号码"> </el-table-column>
      </el-table>
      <!-- <div class="choose-second__footer">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-size="100"
          layout="total, prev, pager, next"
          :total="1000"
        >
        </el-pagination>
      </div> -->
    </div>
    <AddAuthPerson :showVisible="showVisible" @closed="showVisible = false" />
  </div>
</template>
<script>
 import { TButton, } from "@tongban/components";

import AddAuthPerson from "./addAuthPerson.vue";
export default {
  components: {
    TButton,
    AddAuthPerson,
  },
  data() {
    return {
      showVisible: false,
      input3: "",
      select: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.choose-second {
  padding: 24px;
  &__header {
    display: flex;
    align-items: center;
    padding-bottom: 24px;
    h3 {
      margin: 0;
      padding-right: 20px;
    }
  }
  &__content {
    border-top: 1px solid #e5e5e5;
    padding-top: 16px;
    &--title {
      color: rgba(0, 0, 0, 0.8);
      font-size: 20px;
      line-height: 28px;
      padding-bottom: 24px;
    }
  }
  &__footer {
    padding-top: 24px;
    text-align: center;
  }
}
</style>
<style lang="scss">
.choose-second {
  .el-input-group__prepend {
    background-color: #fff;
  }
}
</style>
