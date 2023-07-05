import { useAppContext,connectFactory } from "./contentFactory";
const KEY = "user";
const DEFAULT_VALUE ={
    
}
export const useUserContent = () => useAppContext(KEY);


export const connect = connectFactory(KEY,DEFAULT_VALUE);