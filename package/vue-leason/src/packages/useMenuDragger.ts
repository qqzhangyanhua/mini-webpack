export function useMenuDragger(data:any,containerRef:any,currentComponent:any,fn?:any){
    const drawStart = (e: any, component: any) => {
        console.log('',containerRef.value);
        //进入元素dragenter
        //离开元素dragleave
        //在元素上移动dragover(要阻止默认行为)
        //drop 松手的时候根据拖拽的组件,添加一个组件
        (containerRef.value as any).addEventListener("dragover", dragOver);
        (containerRef.value as any).addEventListener("dragenter", dragenter);
        (containerRef.value as any).addEventListener("dragleave", dragleave);
        (containerRef.value as any).addEventListener("drop", drop);
        currentComponent.value = component;
      };
      const dragOver = (e: any) => {
        e.preventDefault();
      };
      const dragenter = (e: any) => {
        e.dataTransfer.dropEffect = "move";
      };
      const dragleave = (e: any) => {
        e.dataTransfer.dropEffect = "none";
      };
      const drop = (e: any) => {
        const testObj = {
          left: e.offsetX,
          top: e.offsetY,
          zIndex: 1,
          key: (currentComponent.value as any).key,
          alignCenter: true,
        };
        fn && fn(testObj);
        console.log("撒手了===", testObj, data.value);
  
        currentComponent.value = null;
      };
      const drawEnd = (e:any) => {
        (containerRef.value as any).removeEventListener("dragover", dragOver);
        (containerRef.value as any).removeEventListener("dragenter", dragenter);
        (containerRef.value as any).removeEventListener("dragleave", dragleave);
        (containerRef.value as any).removeEventListener("drop", drop);
        };
      return {
        drawStart,
        dragOver,
        dragenter,
        dragleave,
        drop,
        drawEnd
      }
}