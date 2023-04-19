import { computed, defineComponent, inject, ref } from "vue";
import "./editor.scss";
import EditorBlock from "./editor-block";
import { toRefs } from "vue";
import { cloneDeep } from "lodash-es";
import { useMenuDragger } from "./useMenuDragger";
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
    const handelChange =(val:any)=>{
      emit("change", val);
    }
    //1 实现单个元素脱转功能
    const {drawStart,drawEnd}  =useMenuDragger(data,containerRef,currentComponent,handelChange)
     //2 实现多个元素拖拽功能
 

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
            >
              {
                // 画布
                (data.value as any).blocks.map((item: any) => (
              
                   <EditorBlock block={item}></EditorBlock>
            
                ))
              }
            </div>
          </div>
        </div>
      </div>
    );
  },
});
