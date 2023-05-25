<template>
  <div class="home">
    <el-tabs v-model="activeName">
      <el-tab-pane label="企业授权记录" name="first">
        <el-table :data="tableData" style="width: 100%" :key="activeName">
          <el-table-column type="index" width="80" label="序号">
          </el-table-column>
          <el-table-column prop="date" label="授权服务名称"> </el-table-column>
          <el-table-column prop="name" label="被授权人姓名"> </el-table-column>
          <el-table-column prop="address" label="授权有效期"> </el-table-column>
          <el-table-column prop="status" label="授权状态">
            <template slot-scope="scope">
              <span :style="{color:STATUS_COLOR[scope.row.status]}">{{ STATUS[scope.row.status] }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="action" label="操作">
            <template slot-scope="scope">
              <el-row>
                <el-button
                  type="text"
                  v-for="item in getActions(scope.row.status)"
                  :key="item.status"
                  @click="item.handel"
                  >{{ item.name }}</el-button
                >
              </el-row>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="1000">
        </el-pagination>
      </el-tab-pane>
      <el-tab-pane label="个人申请记录" name="second">
        <el-table :data="tableData" style="width: 100%" :key="activeName">
          <el-table-column type="index" width="80" label="序号">
          </el-table-column>
          <el-table-column prop="date" label="申请授权服务名称">
          </el-table-column>
          <el-table-column prop="name" label="申请人姓名"> </el-table-column>
          <el-table-column prop="address" label="申请授权时间">
          </el-table-column>
          <el-table-column prop="address" label="状态"> </el-table-column>
          <el-table-column prop="action" label="操作">
            <template slot-scope="scope">
              <el-row>
                <el-button
                  type="text"
                  v-for="item in getActionsSecond(scope.row.status)"
                  :key="item.status"
                  @click="item.handel"
                  >{{ item.name }}</el-button
                >
              </el-row>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :total="40">
        </el-pagination>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { STATUS_VALUE, STATUS_COLOR, STATUS } from "./utils";

export default Vue.extend({
  name: "HomeView",
  components: {},
  data() {
    return {
      STATUS,
      STATUS_COLOR,
      activeName: "first",
      tableData2: [],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          status: "4",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          status: "3",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          status: "1",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          status: "2",
        },
      ],
    };
  },
  methods: {
    getActions(status: string) {
      // 1代表申请状态 2有效 3过期 4代表被拒绝 5撤销
      if (
        status === STATUS_VALUE.EFFECTIVE ||
        status === STATUS_VALUE.APPLYING
      ) {
        return [
          {
            name: "撤消授权",
            handel: () => {
              console.log("撤消授权");
            },
          },
          {
            name: "查看详情",
            handel: () => {
              console.log("延长授权");
            },
          },
        ];
      } else if (
        status === STATUS_VALUE.EXPIRE ||
        status === STATUS_VALUE.REJECT
      ) {
        return [
          {
            name: "重新授权",
            handel: () => {
              console.log("重新授权");
            },
          },
          {
            name: "查看详情",
            handel: () => {
              console.log("延长授权");
            },
          },
          {
            name: "删除",
            handel: () => {
              console.log("删除");
            },
          },
        ];
      }
      return [];
    },
    getActionsSecond(status: string) {
      // 1代表申请状态 2有效 3过期 4代表被拒绝 5撤销
      if (status === STATUS_VALUE.APPLYING) {
        return [
          {
            name: "查看详情",
            handel: () => {
              console.log("查看详情");
            },
          },
          {
            name: "拒绝",
            handel: () => {
              console.log("拒绝");
            },
          },
          {
            name: "同意",
            handel: () => {
              console.log("同意");
            },
          },
        ];
      } else {
        return [
          {
            name: "查看详情",
            handel: () => {
              console.log("延长授权");
            },
          },
          {
            name: "删除",
            handel: () => {
              console.log("删除");
            },
          },
        ];
      }
    },
  },
});
</script>
