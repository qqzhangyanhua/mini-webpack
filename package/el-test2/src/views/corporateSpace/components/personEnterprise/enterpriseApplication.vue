<template>
  <div class="enterprise-record">
    <el-table :data="tableData" style="width: 100%" :key="activeName">
      <el-table-column type="index" width="80" label="序号"> </el-table-column>
      <el-table-column prop="date" label="授权服务名称"> </el-table-column>
      <el-table-column prop="name" label="授权人姓名"> </el-table-column>
      <el-table-column prop="address" label="授权有效期"> </el-table-column>
      <el-table-column prop="status" label="授权状态">
        <template v-slot="scope">
          <span :style="{ color: STATUS_COLOR[scope.row.status] }">{{
            STATUS[scope.row.status]
          }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="action" label="操作">
        <template v-slot="scope">
          <el-row>
            <el-button
              type="text"
              v-for="item in getActions(scope.row.status)"
              :key="item.status"
              @click="item.handel(scope.row)"
              >{{ item.name }}</el-button
            >
          </el-row>
        </template>
      </el-table-column>
    </el-table>
    <div class="authorization-person__pagination">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="1"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      >
      </el-pagination>
    </div>
    <CheckDetails
      :showVisible="showVisible"
      @closed="showVisible = false"
      :itemStatus="itemStatus"
      :STATUS="STATUS"
      :STATUS_COLOR="STATUS_COLOR"
      compName="enterprise"
    />
  </div>
</template>
<script>
import CheckDetails from "./components/checkDetails.vue";
import { STATUS_VALUE, STATUS_COLOR } from "../utils";
import { EditionTip } from "../../../../components/tempDialog/index";

export default {
  props: {
    activeName: {
      type: String,
      default: "first",
    },
  },
  components: {
    CheckDetails,
  },
  data() {
    return {
      itemStatus: "",
      showVisible: false,
      STATUS_COLOR: {
        ...STATUS_COLOR,
        1: "#165DFF",
      },
      STATUS: {
        1: "申请中",
        2: "已同意",
        3: "已过期",
        4: "已拒绝",
        5: "已撤销",
      },
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
  created() {},
  computed: {},
  methods: {
    getList() {
      console.log("getList");
    },
    handleCurrentChange() {
      console.log("handleCurrentChange");
    },
    handleSizeChange() {
      console.log("handleSizeChange");
    },
    handelDetail(row) {
      this.itemStatus = row.status;
      this.showVisible = true;
    },
    getActions(status) {
      // 1代表申请状态 2有效 3过期 4代表被拒绝 5撤销
      if (status === STATUS_VALUE.APPLYING) {
        return [
          {
            name: "撤销授权",
            handel: () => {
              const MyComponent = {
                render(h) {
                  return h(
                    "p",
                    { style: "color:rgba(0, 0, 0, 0.6);text-align: center;" },
                    [
                      "是否撤销您向",
                      h("span", { style: "color: #000" }, "张三 "),
                      "发起的",
                      h(
                        "i",
                        { style: "color: #000" },
                        "第二类医疗器械经营企业"
                      ),
                      "的授权申请？",
                    ]
                  );
                },
              };
              EditionTip({
                title: "撤销授权",
                content: MyComponent,
                okText: "撤销",
                onOk: () => {
                  console.log("撤销授权");
                },
              });
            },
          },
          {
            name: "查看详情",
            handel: (row) => {
              this.handelDetail(row);
            },
          },
        ];
      }
      return [
        {
          name: "查看详情",
          handel: (row) => {
            this.handelDetail(row);
          },
        },
        {
          name: "删除",
          handel: () => {
            const MyComponent = {
              render(h) {
                return h(
                  "p",
                  { style: "color:rgba(0, 0, 0, 0.6);text-align: center;" },
                  [
                    "是否删除您向",
                    h("span", { style: "color: #000" }, "张三 "),
                    "发起的",
                    h("i", { style: "color: #000" }, "第二类医疗器械经营企业"),
                    "的授权申请记录？",
                  ]
                );
              },
            };
            EditionTip({
              title: "删除授权",
              content: MyComponent,
              okText: "删除",
              onOk: () => {
                console.log("删除");
              },
            });
          },
        },
      ];
    },
  },
};
</script>
<style lang="scss" scoped></style>
