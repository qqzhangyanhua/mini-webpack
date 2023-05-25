<template>
  <div>
    <el-table :data="tableData" style="width: 100%" :key="activeName">
      <el-table-column type="index" width="80" label="序号"> </el-table-column>
      <el-table-column prop="date" label="申请授权服务名称"> </el-table-column>
      <el-table-column prop="name" label="申请人姓名"> </el-table-column>
      <el-table-column prop="address" label="申请授权时间"> </el-table-column>
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
              v-for="item in getActionsSecond(scope.row.status)"
              :key="item.status"
              @click="item.handel"
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
    <RejectApplication
      :showVisible="showVisible"
      @closed="showVisible = false"
    />
    <AgreeAuthorize :showVisible="showAgree" @closed="showAgree = false" />
  </div>
</template>
<script>
import { STATUS_VALUE, STATUS_COLOR, STATUS } from "../utils";
import RejectApplication from "./components/rejectApplication.vue";
import { EditionTip } from "../../../../components/tempDialog/index";

import AgreeAuthorize from "./components/agree-authorize.vue";
export default {
  props: {
    activeName: {
      type: String,
      default: "first",
    },
  },
  components: {
    RejectApplication,
    AgreeAuthorize,
  },
  data() {
    return {
      checkList:[],
      showAgree: false,
      showVisible: false,
      STATUS_COLOR,
      STATUS: {
        1: "待处理",
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
    handleCurrentChange() {},
    handleSizeChange() {},
    getActionsSecond(status) {
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
              this.showVisible = true;
            },
          },
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
                      h("span", { style: "color: #000" }, "张三 "),
                      "向您发起的",
                      h(
                        "i",
                        { style: "color: #000" },
                        "第二类医疗器械经营企业"
                      ),
                      "的授权申请?",
                    ]
                  );
                },
              };
              EditionTip({
                title: "同意授权",
                content: MyComponent,
                okText: "同意并签章",
                onOk: () => {
                 this.showAgree = true;
                },
              });
            },
          },
        ];
      } else {
        return [
          {
            name: "查看详情",
            handel: () => {
              console.log("查看详情");
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
};
</script>
<style lang="scss" scoped></style>
