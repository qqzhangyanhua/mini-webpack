

import { useState , useEffect} from 'react';
import { connect ,useUserContent} from '../../utils/useHooks'

const UserInfo = ()=>{
    const {store , setStore} =  useUserContent()
   
    return (<div>ssss</div>)
} 
export default connect(UserInfo)