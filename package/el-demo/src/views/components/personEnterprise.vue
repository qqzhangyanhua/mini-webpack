<template>
  <div class="home">
    <el-tabs v-model="activeName">
      <el-tab-pane label="企业授权记录" name="first">
        <el-table :data="tableData2" style="width: 100%" :key="activeName">
          <el-table-column type="index" width="80" label="序号">
          </el-table-column>
          <el-table-column prop="date" label="授权服务名称"> </el-table-column>
          <el-table-column prop="name" label="被授权人姓名"> </el-table-column>
          <el-table-column prop="address" label="授权有效期"> </el-table-column>
          <el-table-column prop="address" label="授权状态"> </el-table-column>
          <el-table-column prop="action" label="操作">
            <el-row>
              <el-button type="text">撤消授权</el-button>
              <el-button type="text">详情</el-button>
            </el-row>
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
          <el-table-column prop="name" label="被申请人姓名"> </el-table-column>
          <el-table-column prop="address" label="申请授权时间">
          </el-table-column>
          <el-table-column prop="address" label="状态"> </el-table-column>
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
                <el-button type="text">详情</el-button>
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

export default Vue.extend({
  name: "HomeView",
  components: {},
  data() {
    return {
      activeName: "first",
      tableData2: [],
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          status: 1,
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          status: 2,
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          status: 2,
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          status: 2,
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  methods: {
    getActions(status: any): any[] {
        //s授权待确认 同意,拒绝,查看详情
        //有效  查看详情
        //其他 查看详情,删除
      if (status === 1) {
        return [
          {
            name: "查看详情",
            status,
            handel: this.handelDetail,
          },
        ];
      } else {
        return [{ name: "同意", handel: this.handelDetail, status }];
      }
    },
    handelDetail() {
      console.log("xxxxxxxxxx");
    },
  },
});
</script>
