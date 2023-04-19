import { ElButton, ElInput } from "element-plus";

function createEditorConfig() {
  const componentList:any[] = [];
  const componentMap = {};
  return {
    componentList,
    componentMap,
    register: (component: any) => {
        componentList.push(component) ;
        (componentMap as any)[component.key] = component;
    },
  };
}
export let registerConfig = createEditorConfig();
registerConfig.register({
  label: "文本",
  preview: () => "预览文本",
  render: () => "渲染文本",
  key:'text'
});
registerConfig.register({
    label: "按扭",
    preview: () => <ElButton>预览按扭</ElButton>,
    render: () => <ElButton>渲染按扭</ElButton>,
    key:'button'
  });
  registerConfig.register({
    label: "输入框",
    preview: () => <ElInput placeholder="请输入"></ElInput>,
    render: () => <ElInput></ElInput>,
    key:'input'
  });