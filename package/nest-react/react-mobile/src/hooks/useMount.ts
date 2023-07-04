import { useEffect } from "react";
/**
 * 组件加载的时候执行一次
 * @param fn
 * @returns
 */
const useMount = (fn: () => void) => {
  useEffect(() => {
    fn?.();
  },[]);
};
export default useMount;
