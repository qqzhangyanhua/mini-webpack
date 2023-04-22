export function useBlockDragger(focusData: any) {
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
    };
    document.addEventListener("mousemove", mousemove);
    document.addEventListener("mouseup", mouseup);
  };
  return {
    mousedown,
  };
}
