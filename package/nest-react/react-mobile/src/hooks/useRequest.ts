import { useCallback, useState } from "react";
import useMount from "./useMount";

interface IOptions {
  params: Record<string, string>;
  manual: boolean;
  onSuccess?: (res:unknown) => void;
  onError?: (err:unknown) => void;
}
/**
 * 组件初始化发送请求
 * @param service
 * @param params
 * @returns
 */
const useRequest = (
  service: (params: Record<string, string>) => Promise<unknown>,
  options: IOptions
) => {
  const [data, setData] = useState<unknown>();
  const [loading, setLoading] = useState<boolean>(false);
  const init = useCallback((curParams: Record<string, string>) => {
    setLoading(true);
   return  service(curParams)
      .then((res) => {
        setData(res);
        setLoading(false);
        options.onSuccess?.(res);
      })
      .catch((err) => {
        setLoading(false);
        options.onError?.(err);
      });
  },[service]);
  useMount(() => {
    if (!options.manual) {
      init(options.params);
    }
  });
  const run = (runParams: Record<string, string>) => {
    return init(runParams);
  };
  return {
    loading, data, run
  };
};
export default useRequest;
