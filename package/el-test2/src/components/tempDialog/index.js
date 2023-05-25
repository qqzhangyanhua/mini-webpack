import Vue from "vue";
import Tip from "./index.vue";
export function EditionTip(options) {
  console.log("data========", options);
  //通过函数创建组件
  // const EditionTipcom = new EditionTipConstructor({ data:options ,}).$mount();
  const dialogInstance = new Vue({
    data(){
      return {
        dialogVisible:true
      }
    },
    render: function (h) {
      return h(Tip, {
        props: {
          okText: options.okText,
          title: options.title,
          content: options.content,
          dialogVisible:this.dialogVisible,

        },
        on: {
          close: this.closeDialog,
          submit: () => {
            options?.onOk();
           this.dialogVisible =false
          },
          closed: () => {
            this.dialogVisible =false
          },
        },
      });
    },
    methods: {
      closeDialog() {
        closeHandler(); // 调用外部传入的关闭处理函数
        dialogInstance.$destroy(); // 销毁组件实例
        document.body.removeChild(dialogInstance.$el); // 移除组件挂载的 DOM 元素
      },
    },
  }).$mount(); // 挂载组件，得到组件实例
  document.body.appendChild(dialogInstance.$el);
}
