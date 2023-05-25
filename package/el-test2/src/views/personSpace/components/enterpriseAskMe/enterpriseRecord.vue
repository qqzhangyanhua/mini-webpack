<template>
  <div class="enterprise-record">
    <el-table :data="tableData" style="width: 100%" :key="activeName">
      <el-table-column type="index" width="80" label="序号"> </el-table-column>
      <el-table-column prop="date" label="服务名称"> </el-table-column>
      <el-table-column prop="name" label="授权企业名称"> </el-table-column>
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
              v-for="item in getActions(scope.row)"
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
      :STATUS="STATUS"
      :STATUS_COLOR="STATUS_COLOR"
      :itemStatus="itemStatus"
    />
    <AuthSuccess
      :showVisible="showSuccess"
      @closed="showSuccess = false"
      @back="handelSuccessBack"
    />
  </div>
</template>
<script>
import { STATUS_VALUE, STATUS_COLOR, STATUS } from "../utils";
import CheckDetails from "./components/checkDetails.vue";
import { EditionTip } from "../../../../components/tempDialog/index";
import AuthSuccess from "../../../../components/authSuccess/index.vue";
export default {
  props: {
    activeName: {
      type: String,
      default: "first",
    },
  },
  components: {
    CheckDetails,
    AuthSuccess,
  },
  data() {
    return {
      showSuccess: false,
      STATUS_COLOR,
      STATUS: {
        1: "授权待确认",
        2: "有效",
        3: "已过期",
        4: "已拒绝",
        5: "已撤销",
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎22",
          status: "4",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎11",
          address: "上海市普陀区金沙江路 1517 弄",
          status: "3",
        },
        {
          date: "2016-05-01",
          name: "王小虎33",
          address: "上海市普陀区金沙江路 1519 弄",
          status: "1",
        },
        {
          date: "2016-05-03",
          name: "王小虎11333",
          address: "上海市普陀区金沙江路 1516 弄",
          status: "2",
        },
      ],
      showVisible: false,
      itemStatus: "",
    };
  },

  created() {},
  computed: {},
  methods: {
    handelSuccessBack() {
      this.showSuccess = false;
      console.log("我要跳转=======");
    },
    getList() {
      console.log("getList");
    },
    handleCurrentChange() {
      console.log("handleCurrentChange");
    },
    handleSizeChange() {
      console.log("handleSizeChange");
    },
    handDelete(row) {
      console.log("handDelete", row);
      const MyComponent = {
        render(h) {
          return h(
            "p",
            { style: "color:rgba(0, 0, 0, 0.6);text-align: center;" },
            [
              "是否删除",
              h("span", { style: "color: #000" }, "上海通办服务有限公司 "),
              "向您授权的",
              h("i", { style: "color: #000" }, "第二类医疗器械经营企业"),
              "记录？",
            ]
          );
        },
      };
      EditionTip({
        title: "删除授权",
        content: MyComponent,
        okText: "删除",
        onOk: () => {
          console.log("onOk111111111111");
        },
      });
    },
    getActions(row) {
      const status = row.status;
      // 1代表申请状态 2有效 3过期 4代表被拒绝 5撤销
      if (status === STATUS_VALUE.APPLYING) {
        return [
          {
            name: "同意",
            handel: () => {
              const MyComponent = {
                render(h) {
                  return h(
                    "p",
                    { style: "color:rgba(0, 0, 0, 0.6);text-align: center;" },
                    [
                      "是否同意",
                      h("span", { style: "color: #000" }, "通办心心有限公司 "),
                      "向您授权的",
                      h(
                        "i",
                        { style: "color: #000" },
                        "第二类医疗器械经营企业"
                      ),
                      "？",
                    ]
                  );
                },
              };
              EditionTip({
                title: "同意授权",
                content: MyComponent,
                okText: "同意",
                onOk: () => {
                  this.showSuccess = true;
                },
              });
            },
          },
          {
            name: "拒绝",
            handel: () => {
              const MyComponent = {
                render(h) {
                  return h(
                    "p",
                    { style: "color:rgba(0, 0, 0, 0.6);text-align: center;" },
                    [
                      "是否拒绝",
                      h("span", { style: "color: #000" }, "通办心心有限公司 "),
                      "向您授权的",
                      h(
                        "i",
                        { style: "color: #000" },
                        "第二类医疗器械经营企业"
                      ),
                      "？",
                    ]
                  );
                },
              };
              EditionTip({
                title: "拒绝授权",
                content: MyComponent,
                okText: "拒绝",
                onOk: () => {
                  console.log("onOk111111111111");
                },
              });
            },
          },
          {
            name: "查看详情",
            handel: () => {
              this.handelDetail(row);
            },
          },
        ];
      } else if (status === STATUS_VALUE.EFFECTIVE) {
        return [
          {
            name: "查看详情",
            handel: () => {
              this.handelDetail(row);
            },
          },
        ];
      }
      return [
        {
          name: "查看详情",
          handel: () => {
            this.handelDetail(row);
          },
        },
        {
          name: "删除",
          handel: (row) => {
            this.handDelete(row);
          },
        },
      ];
    },
    handelGroups() {},
    handelDetail(row) {
      console.log("current-------", row);
      this.itemStatus = row.status;
      this.showVisible = true;
    },
  },
};
</script>
<style lang="scss" scoped></style>
