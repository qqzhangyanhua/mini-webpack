import {  useRef } from "react";
/**
 * 获取最新的
 * @param fn
 * @returns
 */
const useLatest = <T>(value:T) => {
  const fnRef = useRef(value);
  fnRef.current = value;
  return fnRef;
};
export default useLatest;
