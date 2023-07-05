import { useMemo, useState, createContext, useContext } from "react";
interface IStore {
  key: string;
  store: Record<string, any>;
  setStore: (payload: Record<string, any>) => void;
}
interface IProp {
  children: React.ReactNode;
}
const getCtxProvider =
  (
    key: string,
    defaultValue: Record<string, any>,
    AppContext: React.Context<IStore>
  ) =>
  ({ children }: IProp) => {
    const [store, setStore] = useState(defaultValue);
    const value = useMemo(() => {
      return {
        key,
        store,
        setStore,
      };
    }, [store]);
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
  };
const ctxCache: Record<string, Ctx> = {};
export class Ctx {
  defaultStore: IStore;
  AppContext: React.Context<IStore>;
  Provider: ({ children }: IProp) => JSX.Element;
  constructor(key: string, defaultValue: Record<string, any>) {
    this.defaultStore = {
      key,
      store: defaultValue,
      setStore: () => {
        console.log("1");
      },
    };
    this.AppContext = createContext(this.defaultStore);
    this.Provider = getCtxProvider(key, defaultValue, this.AppContext);
    ctxCache[key] = this;
  }
}
export const useAppContext = (key: string) => {
  const ctx = ctxCache[key];
  if (!ctx) {
    throw new Error(`useAppContext: ${key} is not found`);
  }
  const app = useContext(ctx.AppContext);
  return {
    store: app.store,
    setStore: app.setStore,
  };
};

export const connectFactory = (
  key: string,
  defaultValue: Record<string, any>
) => {
  const ctx = ctxCache[key];
  let ctxProvider: Ctx;
  if (ctx) {
    ctxProvider = ctx;
  } else {
    ctxProvider = new Ctx(key, defaultValue);
  }
  return (Child: React.FunctionComponent<any>) => (props: any) =>
    (
      <ctxProvider.Provider>
        <Child {...props} />
      </ctxProvider.Provider>
    );
};
