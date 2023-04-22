import { Blocks } from "./types";
import { computed, defineComponent, inject, onMounted, ref } from "vue";
export default defineComponent({
  props: {
    index: { type: Number, required: true },
    block: { type: Object as () => Blocks, required: true },
    focusData: {
      type: Object as () => any,
      required: true,
    },
  },
  emits: ["clearBlockFocus", "blockMousedown"],
  setup(props, { emit }) {
    const config: any = inject("config");
    console.log(config);
    const blockRef = ref(null);
    onMounted(() => {
      let { offsetWidth, offsetHeight } = blockRef.value as any;
      //只有松手的时候才是aligncenter
      if (props.block.alignCenter) {
        props.block.left = props.block.left - offsetWidth / 2;
        props.block.top = props.block.top - offsetHeight / 2;
        props.block.alignCenter = false;
      }
      props.block.width = offsetWidth;
      props.block.height = offsetHeight;
    });
    const blockStyle = computed(() => {
      return {
        top: `${props.block.top}px`,
        left: `${props.block.left}px`,
        zIndex: props.block.zIndex,
      };
    });
    const blockMousedown = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("blockMousedown", e);
      //按住了shift按键
      if (e.shiftKey) {
        if (props.focusData.focus.length <= 1) {
          props.block.focus = true;  //当前只有一个节点的十后悔按住shift不会切换focus状态
        } else {
          props.block.focus = !props.block.focus;
        }
      } else {
        //获取焦点后,
        if (!props.block.focus) {
          emit("clearBlockFocus", e);
          props.block.focus = true; //要清空其他人的block-focus
        }
      }
      emit("blockMousedown", e,props.index);
    };
    //通过block的key获取到对应的组件
    const component = config.componentMap[props.block.key];
    const renderComponent = component.render();
    return () => (
      <div
        onMousedown={(e: MouseEvent) => blockMousedown(e)}
        class={["editor-block", props.block.focus ? "editor-block--focus" : ""]}
        style={blockStyle.value}
        ref={blockRef}
      >
        {renderComponent}
      </div>
    );
  },
});
