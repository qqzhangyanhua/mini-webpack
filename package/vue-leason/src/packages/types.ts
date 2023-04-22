
    /*Container*/
export interface Container {
    width: number;
    height: number;
  }
  
  /*Blocks*/
  export interface Blocks {
    top: number;
    left: number;
    zIndex: number;
    key: string;
    focus?: boolean;
    alignCenter?: boolean;
  }
  
  /*tsModel2*/
  export interface tsModel2 {
    container: Container;
    blocks: Blocks[];
  }
  
