import {  WritableComputedRef, computed, defineComponent, inject, ref } from "vue";
import "./editor.scss";
import EditorBlock from "./editor-block";
import { useMenuDragger } from "./useMenuDragger";
import { useBlockDragger } from "./useBlockDragger";
import { Blocks, tsModel2 } from "./types";
export default defineComponent({
  props: {
    modelValue: { type: Object as () => tsModel2, required: true },
  },
  emits: ["update:modeValue", "change"],
  setup(props, { emit }) {
    const data:WritableComputedRef<tsModel2>  = computed({
      get() {
        return props.modelValue as tsModel2;
      },
      set(newValue) {
        // emit('update:modeValue',cloneDeep(newValue))
      },
    }) 
    const currentComponent = ref(null);
    const containerStyle = computed(() => {
      return {
        width: data.value.container.width + "px",
        height: data.value.container.height + "px",
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
      data.value.blocks.forEach((item: Blocks) => {
        item.focus = false;
      });
      mousedown(e);
    };
    //点击空白的时候记得清空所有的block的focus
    const containerMousedown = (e: MouseEvent) => {
      clearBlockFocus(e);
    };
    const selectIndex = ref(-1);
    //获取最后一个被选中的元素
    const lastSelectBlock = computed(() => {
      return focusData.value.focus[focusData.value.focus.length - 1];
    });
    //计算多少个被选中,多少个未被选中
    const focusData = computed(() => {
      let focus: Blocks[] = [];
      let unFocus: Blocks[] = [];
      data.value.blocks.forEach((item: Blocks) => {
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
    const { mousedown } = useBlockDragger(focusData,lastSelectBlock);
    const blockMousedown = (e: MouseEvent,index:number) => {
      mousedown(e);
      selectIndex.value = index;
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
                data.value.blocks.map((item: Blocks,index:number) => (
                  <EditorBlock
                    block={item}
                    index={index}
                    focusData={focusData.value}
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
