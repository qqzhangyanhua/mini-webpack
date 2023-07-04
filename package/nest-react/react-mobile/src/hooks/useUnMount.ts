import { useEffect,  } from "react";
import useLatest from "./useLatest";
/**
 * 组件卸载的时候执行一次
 * @param fn
 * @returns
 */
const useUnMount = (fn: () => void) => {
  const fnRef = useLatest(fn);
  useEffect(() => {
    fnRef.current?.();
  },[]);
};
export default useUnMount;
