import { computed, defineComponent, inject, ref } from "vue";
import "./editor.scss";
import EditorBlock from "./editor-block";
import { useMenuDragger } from "./useMenuDragger";
import { useBlockDragger } from "./useBlockDragger";
export default defineComponent({
  props: {
    modelValue: { type: Object, required: true },
  },
  emits: ["update:modeValue", "change"],
  setup(props, { emit }) {
    const data = computed({
      get() {
        return props.modelValue;
      },
      set(newValue) {
        // emit('update:modeValue',cloneDeep(newValue))
      },
    });
    const currentComponent = ref(null);
    const containerStyle = computed(() => {
      return {
        width: (data.value as any).container.width + "px",
        height: (data.value as any).container.height + "px",
      };
    });
    const containerRef = ref(null);
    const handelChange = (val: any) => {
      emit("change", val);
    };
    //1 实现单个元素脱转功能
    const { drawStart, drawEnd } = useMenuDragger(
      data,
      containerRef,
      currentComponent,
      handelChange
    );
    //2 实现多个元素拖拽功能
    const clearBlockFocus = (e: MouseEvent) => {
      (data.value as any).blocks.forEach((item: any) => {
        item.focus = false;
      });
      mousedown(e);
    };
    //点击空白的时候记得清空所有的block的focus
    const containerMousedown = (e: MouseEvent) => {
      clearBlockFocus(e);
    };
    //计算多少个被选中,多少个未被选中
    const focusData = computed(() => {
      let focus: any = [];
      let unFocus: any = [];
      (data.value as any).blocks.forEach((item: any) => {
        if (item.focus) {
          focus.push(item);
        } else {
          unFocus.push(item);
        }
      });
      return {
        focus,
        unFocus,
      };
    });
    //实现组件的拖拽
    const { mousedown } = useBlockDragger(focusData);
    const blockMousedown = (e: MouseEvent) => {
      mousedown(e);
    };
    const config: any = inject("config");
    return () => (
      <div class="editor">
        <div class="editor-left">
          {/* 左侧 根据列表显示对应的内容*/}
          {/* 实现H5的拖拽 */}
          {config.componentList.map((item: any) => (
            <div
              class="editor-left__item"
              draggable
              onDragstart={(e) => drawStart(e, item)}
              onDragend={(e) => drawEnd(e)}
            >
              <span>{item.label}</span>
              <div>{item.preview()}</div>
            </div>
          ))}
        </div>
        <div class="editor-top">菜单</div>
        <div class="editor-right">右侧</div>
        <div class="editor-container">
          <div class="editor-container-canvas">
            <div
              ref={containerRef}
              class="editor-container-canvas__content"
              style={containerStyle.value}
              onMousedown={containerMousedown}
            >
              {
                // 画布
                (data.value as any).blocks.map((item: any) => (
                  <EditorBlock
                    block={item}
                    onClearBlockFocus={clearBlockFocus}
                    onBlockMousedown={blockMousedown}
                  ></EditorBlock>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    );
  },
});
