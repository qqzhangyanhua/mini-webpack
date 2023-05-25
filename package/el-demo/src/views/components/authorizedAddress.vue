<template>
  <div class="home">
    <el-tabs v-model="activeName">
      <el-tab-pane label="个人通讯录" name="first">
       <el-form label-position="left" label-width="80px" >
        <el-row :gutter="16">
          <el-col :span="6">
            <el-form-item label="名称">
              <el-input v-model="name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="证件号码">
              <el-input v-model="name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="手机号码">
              <el-input v-model="name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-button>查询</el-button>
            <el-button>重置</el-button>
          </el-col>
        </el-row>
       </el-form>
        <el-table :data="tableData" style="width: 100%" :key="activeName">
          <el-table-column prop="date" label="姓名"> </el-table-column>
          <el-table-column prop="name" label="证件类型"> </el-table-column>
          <el-table-column prop="address" label="证件号码"> </el-table-column>
          <el-table-column prop="address" label="手机号码"> </el-table-column>
          <el-table-column prop="action" label="操作">
            <el-row>
              <el-button type="text">编辑</el-button>
              <el-button type="text">删除</el-button>
            </el-row>
          </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HomeView",
  components: {},
  data() {
    return {
      name: "",
      activeName: "first",
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
});
</script>
