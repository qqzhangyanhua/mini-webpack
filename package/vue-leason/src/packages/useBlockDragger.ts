import { Ref } from "vue";
import { Blocks, BlocksRequired } from "./types";

export function useBlockDragger(focusData: any,lastSelectBlock:Ref<Blocks>) {
  let dragState: any = {
    startX: 0,
    startY: 0,
  };
  //获取焦点后,选中后就可以直接进行拖拽
  const mousemove = (e: MouseEvent) => {
    let { clientX, clientY } = e;
    let durX = clientX - dragState.startX;
    let durY = clientY - dragState.startY;
    focusData.value.focus.forEach((item: any, index: number) => {
      let { left, top } = dragState.startPos[index];
      item.left = left + durX;
      item.top = top + durY;
    });
  };
  const mouseup = (e: MouseEvent) => {
    document.removeEventListener("mousemove", mousemove);
    document.removeEventListener("mouseup", mouseup);
  };

  const mousedown = (e: MouseEvent) => {
    console.log("mousedown========",lastSelectBlock.value);
    const {width:BWidth, height:BHeight } = lastSelectBlock.value as BlocksRequired;
    //获取到当前的坐标绑定拖拽
    dragState = {
      startX: e.clientX,
      startY: e.clientY,
      startPos: focusData.value.focus.map((item: any) => {
        return {
          left: item.left,
          top: item.top,
        };
      }),
      line:()=>{
        const {unfocus} = focusData.value; //其他没选中的因为他们的位置是不变的
        let lines:any = {x:[],y:[]};
        unfocus.forEach((item: Blocks) => {
            const {top:ATop,left:ALeft,width:AWidth,height:AHeight}=item;
            //当次元素拖拽到A元素top一致的时候需要显示这根辅助线,辅助线的位置就是Atop
            lines.y.push({showTop:ATop,top:ATop});
            lines.y.push({showTop:ATop,top:ATop - BHeight});  //顶对底的辅助线


        })
      }
    };
    document.addEventListener("mousemove", mousemove);
    document.addEventListener("mouseup", mouseup);
  };
  return {
    mousedown,
  };
}
