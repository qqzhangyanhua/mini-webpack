<template>
  <el-dialog title="查看详情" :visible.sync="dialogVisible" width="50%">
    <div class="auth-check-detail">
      <h3>道路货物运输经营（含普通货运、专用运输、大件运输）许可-变更</h3>
      <ul class="auth-check-detail__content">
        <li>
          <span>授权状态</span>
          <span :style="{ color: STATUS_COLOR[itemStatus] }"
            >{{ STATUS[itemStatus] }}
          </span>
        </li>
        <li v-for="item in getListItems()" :key="item.id">
          <span>{{ item.label }}</span>
          <span>{{ item.value }}</span>
        </li>
      </ul>
    </div>
    <div class="auth-check-detail__footer">
      <el-button
        v-for="item in getBtnGroup()"
        :key="item.id"
        v-bind="item.btnProps"
        @click="item.click"
        >{{ item.label
        }}<i :class="[item.icon, 'auth-check-detail__content--icon']"></i
      ></el-button>
    </div>
  </el-dialog>
</template>
<script>
import { STATUS_VALUE, STATUS_COLOR } from "../../utils";
export default {
  props: {
    showVisible: {
      type: Boolean,
      default: false,
    },
    itemStatus: {
      type: String,
      default: "",
    },
    STATUS: {
      type: Object,
      default: () => {},
    },
    compName: {
      type: String,
      default: "",
    },
    STATUS_COLOR: {
      type: Object,
      default: () => {
        return STATUS_COLOR;
      },
    },
  },
  data() {
    return {
      listItems: [],
    };
  },
  watch: {
    showVisible(val, newVal) {
      if (true) {
        // this.getBtnGroup();
      }
    },
  },
  methods: {
    getListItems() {
      if (this.compName === "enterprise") {
        return [
          { id: 11, label: "被申请人姓名", value: "李晓栋" },
          { id: 12, label: "授权有效期", value: "2023-01-01 ~ 2023-07-31" },
          { id: 13, label: "授权次数", value: "1" },
          { id: 14, label: "申请提交时间", value: "2023-07-01 13:14" },
          { id: 15, label: "申请同意时间", value: "2023-07-01 13:14" },
        ];
      }
      return [
        { id: 1, label: "授权人信息", value: "李晓栋" },
        { id: 2, label: "授权有效期", value: "2023-01-01 ~ 2023-07-31" },
        { id: 3, label: "授权次数", value: "1" },
        { id: 4, label: "授权提交时间", value: "2023-07-01 13:14" },
        { id: 5, label: "授权说明", value: "24334" },
      ];
    },
    getBtnGroup() {
      if (this.compName === "enterprise") {
        return this.enterpriseBtn();
      }
      if (
        this.itemStatus === STATUS_VALUE.EFFECTIVE ||
        this.itemStatus === STATUS_VALUE.EXPIRE
      ) {
        return [
          {
            id: 1,
            label: "关闭",
            btnProps: {},
            click: () => {
              this.dialogVisible = false;
            },
          },
          {
            id: 2,
            label: "授权委托书",
            icon: "el-icon-download",
            btnProps: {
              type: "primary",
            },
            click: () => {
              this.dialogVisible = false;
            },
          },
        ];
      }
      if (this.itemStatus === STATUS_VALUE.APPLYING) {
        return [
          {
            id: 12,
            label: "关闭",
            btnProps: {},
            click: () => {
              this.dialogVisible = false;
            },
          },
          {
            id: 13,
            label: "授权委托书",
            icon: "el-icon-download",
            btnProps: {
              type: "primary",
            },
            click: () => {
              this.dialogVisible = false;
            },
          },
          {
            id: 14,
            label: "拒绝",
            btnProps: {
              type: "primary",
            },
            click: () => {
              this.dialogVisible = false;
            },
          },
          {
            id: 15,
            label: "同意",
            btnProps: {
              type: "primary",
            },
            click: () => {
              this.dialogVisible = false;
            },
          },
        ];
      }

      return [
        {
          id: 10,
          label: "我知道了",
          btnProps: {},
          click: () => {
            this.dialogVisible = false;
          },
        },
      ];
    },
    enterpriseBtn() {
      if (this.itemStatus === STATUS_VALUE.APPLYING) {
        return [
          {
            id: 31,
            label: "关闭",
            btnProps: {},
            click: () => {
              this.dialogVisible = false;
            },
          },
          {
            id: 30,
            label: "撤销申请",
            btnProps: {
              type: "primary",
            },
            click: () => {
              this.dialogVisible = false;
            },
          },
        ];
      }
      return [
        {
          id: 11,
          label: "我知道了",
          btnProps: {},
          click: () => {
            this.dialogVisible = false;
          },
        },
      ];
    },
  },
  computed: {
    dialogVisible: {
      get() {
        return this.showVisible;
      },
      set() {
        this.$emit("closed", false);
      },
    },
  },
};
</script>
<style lang="scss" scoped>
.auth-check-detail {
  h3 {
    font-size: 20px;
    line-height: 28px;
    color: #000;
    margin: 10px 0;
  }
  &__content {
    li {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 10px;
      span {
        line-height: 24px;
        &:first-child {
          display: inline-block;
          width: 100px;
        }
      }
    }
    &--icon {
      margin-left: 5px;
      font-size: 18px;
    }
  }
  &__footer {
    text-align: center;
    margin-top: 20px;
    button {
      margin-left: 20px;
    }
  }
}
</style>
