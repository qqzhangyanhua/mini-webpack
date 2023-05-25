<template>
  <div>
    <el-dialog
      :title="title"
      :visible.sync="showVisible"
      width="360px"
      @close="close"
      center
    >
      <div v-if="content">
        <template v-if="typeof content === 'string'">
          {{ content }}
        </template>
        <component v-else :is="content" class="dialog-content"></component>
      </div>
      <span slot="footer" class="dialog-footer">
        <t-button @click="showVisible = false" plain>取 消</t-button>
        <t-button type="primary" @click="onSubmit">{{okText}}</t-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { TButton } from "@tongban/components";
export default {
  components:{
    TButton
  },
  props: {
    title: {
      type: String,
      default: "提示",
    },
    content: {
      type: [String, Object],
      default: "",
    },
    dialogVisible: {
      type: Boolean,
      default: false,
    },
    okText: {
      type: String,
      default: "确定",
    },
  },
  data() {
    return {};
  },
  computed: {
    showVisible: {
      get() {
        return this.dialogVisible;
      },
      set(val) {
        this.$emit("closed", val);
      },
    },
  },
  methods: {
    close() {
      this.dialogVisible = false;
      this.$el.parentNode.removeChild(this.$el); //清除dom元素
    },
    onSubmit() {
      this.$emit("submit");
    },
  },
};
</script>
<style scoped>
.dialog-content{
    text-align: center;
    line-height: 28px;
}
</style>
