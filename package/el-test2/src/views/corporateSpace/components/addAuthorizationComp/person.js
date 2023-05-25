export const formDataConfig = [
    {
      type: "ElInput",
      key: "sceneName",
      componentProps: {
        placeholder: "请输入",
      },
      formItemProps: {
        label: "姓名",
        rules: [
          {
            required: true,
            message: "请输入姓名",
            trigger: "blur",
          },
        ],
      },
      colProps: {
        span: 20,
      },
      value: "",
    },
   
    {
      type: "ElSelect",
      key: "sceneName3",
      componentProps: {
        placeholder: "请选择",
        style:{
          width:'100%'
        }
      },
      formItemProps: {
        label: "证件类型",
        rules: [
          {
            required: true,
            message: "请输入证件类型",
            trigger: "blur",
          },
        ],
      },
      colProps: {
        span: 20,
      },
      value: "",
    },
    {
      type: "ElInput",
      key: "sceneName4",
      componentProps: {
        placeholder: "请输入",
      },
      formItemProps: {
        label: "证件号码",
        rules: [
          {
            required: true,
            message: "请输入证件号码",
            trigger: "blur",
          },
        ],
      },
      colProps: {
        span: 20,
      },
      value: "",
    },
  
    {
      type: "ElInput",
      key: "sceneName7",
      componentProps: {
        placeholder: "请输入",
      },
      formItemProps: {
        label: "手机号码",
        rules: [
          {
            required: true,
            message: "请输入手机号码",
            trigger: "blur",
          },
        ],
      },
      colProps: {
        span: 20,
      },
      value: "",
    },
  ];
  