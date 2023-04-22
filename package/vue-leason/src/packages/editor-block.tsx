import { computed, defineComponent, inject, onMounted, ref } from "vue";
export default defineComponent({
  props: {
    block: { type: Object },
  },
  emits: ["clearBlockFocus",'blockMousedown'],
  setup(props, { emit }) {
    const config: any = inject("config");
    console.log(config);
    const blockRef = ref(null);
    onMounted(() => {
      let { offsetWidth, offsetHeight } = blockRef.value as any;
      //只有松手的时候才是aligncenter
      if ((props.block as any).alignCenter) {
        console.log(offsetWidth, offsetHeight);

        (props.block as any).left = (props.block as any).left - offsetWidth / 2;
        (props.block as any).top = (props.block as any).top - offsetHeight / 2;
        (props.block as any).alignCenter = false;
      }
    });
    const blockStyle = computed(() => {
      return {
        top: `${(props.block as any).top}px`,
        left: `${(props.block as any).left}px`,
        zIndex: (props.block as any).zIndex,
      };
    });
    const blockMousedown = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      console.log("blockMousedown", e);
      if (e.shiftKey) {
        (props.block as any).focus = !(props.block as any).focus
      } else {
        //获取焦点后,
        if (!(props.block as any).focus) {
          emit("clearBlockFocus",e);
          (props.block as any).focus = true; //要清空其他人的block-focus
        } else {
          (props.block as any).focus = false;
        }
      }
      emit('blockMousedown',e)
    };
    //通过block的key获取到对应的组件
    const component = config.componentMap[(props.block as any).key];
    const renderComponent = component.render();
    return () => (
      <div
        onMousedown={(e: MouseEvent) => blockMousedown(e)}
        class={[
          "editor-block",
          (props.block as any).focus ? "editor-block--focus" : "",
        ]}
        style={blockStyle.value}
        ref={blockRef}
      >
        {renderComponent}
      </div>
    );
  },
});
