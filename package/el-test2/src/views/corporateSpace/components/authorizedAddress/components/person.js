export const formDataConfig = [
  {
    type: "ElInput",
    key: "relationName",
    componentProps: {
      placeholder: "请输入",
      maxlength: 20,
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
    key: "relationCardtype",
    groupProps:{
      options:[
        { label: "身份证", value: 1 }
      ]
    },
    componentProps: {
      placeholder: "请选择",
      style: {
        width: "100%",
      },
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
    key: "relationUniqueid",
    componentProps: {
      placeholder: "请输入",
      maxlength: 18,
    },
    formItemProps: {
      label: "证件号码",
      rules: [
        {
          required: true,
          message: "请输入证件号码",
          trigger: "blur",
        },
        {
          max: 18,
          min: 18,
          message: "请输入正确的身份证号码",
          trigger: "blur",
        }
      ],
    },
    colProps: {
      span: 20,
    },
    value: "",
    handel:{
      blur: (e) => {
        console.log('失去焦点==并且判断当前是否有人员存在====',e)
      }
    }
  },

  {
    type: "ElInput",
    key: "relationPhone",
    componentProps: {
      placeholder: "请输入",
      maxlength: 11,
    },
    formItemProps: {
      label: "手机号码",
      rules: [
        {
          required: true,
          message: "请输入手机号码",
          trigger: "blur",
        },
        {
          min:11,
          max:11,
          message: "请输入正确的手机号码",
          trigger: "blur",
        }
      ],
    },
    colProps: {
      span: 20,
    },
    value: "",

  },
];
