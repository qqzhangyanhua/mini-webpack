import { EditionTip } from "../../../../components/tempDialog/index";

export const applicationCanceled =  (row) => {
  return new Promise((resolve, reject) => {
    console.log('撤销申请========',row);
    const MyComponent = {
      render(h) {
        return h("p", { style: "color:rgba(0, 0, 0, 0.6);text-align: center;" }, [
          "是否撤销您向",
          h("span", { style: "color: #000" }, "上海通办服务有限公司 "),
          "发起的",
          h("i", { style: "color: #000" }, "第二类医疗器械经营企业"),
          "授权申请？",
        ]);
      },
    };
    EditionTip({
      title: "撤销申请",
      content: MyComponent,
      okText: "撤销",
      onOk: () => {
        console.log("撤销");
        resolve(true);
      },
    });


  });
 
};
