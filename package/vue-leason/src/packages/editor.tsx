import { computed, defineComponent } from "vue";
import "./editor.scss";
import EditorBlock from "./editor-block";
import { toRefs } from "vue";
export default defineComponent({
  props: {
    modelValue: { type: Object },
  },
  setup(props) {
    const data = computed({
      get() {
        return props.modelValue;
      },
      set(data) {},
    });
    console.log(data.value);
    const containerStyle = computed(() => {
      return {
        width: (data.value as any).container.width + "px",
        height: (data.value as any).container.height + "px",
      };
    });
    return () => (
      <div class="editor">
        <div class="editor-left">左侧</div>
        <div class="editor-top">菜单</div>
        <div class="editor-right">右侧</div>
        <div class="editor-container">
          <div class="editor-container-canvas">
            <div class="editor-container-canvas__content" style={containerStyle.value}>

              {
                // 画布
                (data.value as any).blocks.map((item: any) => (
                  <EditorBlock block={item}/>
                )
                )
              }
            </div>
          </div>
        </div>
      </div>
    );
  },
});
