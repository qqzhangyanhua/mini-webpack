<template>
  <el-dialog title="查看详情" :visible.sync="dialogVisible" width="50%">
    <div class="auth-check-detail">
      <h3>道路货物运输经营（含普通货运、专用运输、大件运输）许可-变更</h3>
      <ul class="auth-check-detail__content">
        <li>
          <span>授权状态</span>
          <span :style="{color:STATUS_COLOR[itemStatus]}">有效</span>
        </li>
        <li>
          <span>被授权人信息</span>
          <span>李晓栋</span>
        </li>
        <li>
          <span>授权有效期</span>
          <span>2023-01-01 ~ 2023-07-31</span>
        </li>
        <li>
          <span>授权次数</span>
          <span>1</span>
        </li>
        <li>
          <span>授权提交时间</span>
          <span>2023-07-01 13:14</span>
        </li>
        <li>
          <span>授权说明</span>
          <span
            >这是一段说明文本这是一段说明文本这是一段说明文本这是一段说明文本这是一段说明文本这是一段说明文本这是一段说明文本这是一段说明文本这是一段说明文本这是一段说明文本这是一段说明文本这是一段说明文本</span
          >
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
import { STATUS_VALUE,STATUS_COLOR } from "../../utils";
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
  },
  data() {
    return {
      STATUS_COLOR,
      btnGroups: [
        {
          id: 1,
          label: "我知道了",
          btnProps: {
            type: "primary",
            plain: true,
          },
          click: () => {
            this.dialogVisible = false;
          },
        },
      ],
    };
  },
  watch:{
    showVisible(val,newVal){
      if(true){
      // this.getBtnGroup();

      }
    }
  },
  methods: {
    getBtnGroup() {
      if (this.itemStatus === STATUS_VALUE.EFFECTIVE || this.itemStatus === STATUS_VALUE.EXPIRE) {
      return [
          {
            id: 1,
            label: "关闭",
            btnProps: {
              type: "primary",
              plain: true,
            },
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
            label: "我知道了",
            btnProps: {
              type: "primary",
              plain: true,
            },
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
        ];
      }
      return [
        {
          id: 10,
          label: "我知道了",
          btnProps: {
            type: "primary",
            plain: true,
          },
          click: () => {
            this.dialogVisible = false;
          },
        },
      ]

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
