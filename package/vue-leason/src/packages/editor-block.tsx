import { Blocks } from "./types";
import { computed, defineComponent, inject, onMounted, ref } from "vue";
export default defineComponent({
  props: {
    block: { type: Object as () => Blocks , required: true },
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
      if (e.shiftKey) {
        props.block.focus = !props.block.focus;
      } else {
        //获取焦点后,
        if (!props.block.focus) {
          emit("clearBlockFocus", e);
          props.block.focus = true; //要清空其他人的block-focus
        } else {
          props.block.focus = false;
        }
      }
      emit("blockMousedown", e);
    };
    //通过block的key获取到对应的组件
    const component = config.componentMap[props.block.key];
    const renderComponent = component.render();
    return () => (
      <div
        onMousedown={(e: MouseEvent) => blockMousedown(e)}
        class={[
          "editor-block",
          props.block.focus ? "editor-block--focus" : "",
        ]}
        style={blockStyle.value}
        ref={blockRef}
      >
        {renderComponent}
      </div>
    );
  },
});
