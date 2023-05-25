<template>
  <div>
    <el-table :data="tableData" style="width: 100%" :key="activeName">
      <el-table-column type="index" width="80" label="序号"> </el-table-column>
      <el-table-column prop="date" label="服务名称"> </el-table-column>
      <el-table-column prop="name" label="被申请企业名称"> </el-table-column>
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
    <RejectApplication
      :showVisible="showVisible"
      @closed="showVisible = false"
    />
    <CheckDetails
      :showVisible="showDetails"
      @closed="showDetails = false"
      :STATUS="STATUS"
      :STATUS_COLOR="STATUS_COLOR"
      :itemStatus="itemStatus"
      compName="applicationRecord"
    />
    <AgreeAuthorize :showVisible="showAgree" @closed="showAgree = false" />
  </div>
</template>
<script>
import { STATUS_VALUE, STATUS_COLOR } from "../utils";
import RejectApplication from "./components/rejectApplication.vue";
import { EditionTip } from "../../../../components/tempDialog/index";
import CheckDetails from "./components/checkDetails.vue";
import { applicationCanceled } from "./utils";
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
    CheckDetails,
  },
  data() {
    return {
      itemStatus: "",
      showDetails: false,
      checkList: [],
      showAgree: false,
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
    handleCurrentChange() {},
    handleSizeChange() {},
    handelDetails(row) {
      console.log("row", row);
      this.itemStatus = row.status;
      this.showDetails = true;
    },
    getActionsSecond(status) {
      // 1代表申请状态 2有效 3过期 4代表被拒绝 5撤销
      if (status === STATUS_VALUE.APPLYING) {
        return [
          {
            name: "撤销申请",
            handel: (row) => {
              applicationCanceled(row)
            },
          },
          {
            name: "查看详情",
            handel: (row) => {
              this.handelDetails(row);
            },
          },
        ];
      } else {
        return [
          {
            name: "查看详情",
            handel: (row) => {
              this.handelDetails(row);
            },
          },
          {
            name: "删除",
            handel: (row) => {
              const MyComponent = {
                render(h) {
                  return h(
                    "p",
                    { style: "color:rgba(0, 0, 0, 0.6);text-align: center;" },
                    [
                      "是否删除您向",
                      h(
                        "span",
                        { style: "color: #000" },
                        "上海通办服务有限公司 "
                      ),
                      "发起的",
                      h(
                        "i",
                        { style: "color: #000" },
                        "第二类医疗器械经营企业"
                      ),
                      "授权记录？",
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
          },
        ];
      }
    },
  },
};
</script>
<style lang="scss" scoped></style>
