export const formDataConfig = [
  {
    type: "ElInput",
    key: "sceneName",
    componentProps: {
      placeholder: "请输入",
    },
    formItemProps: {
      label: "受委托人联系电话",
      rules: [
        {
          required: true,
          message: "请输入受委托人联系电话",
          trigger: "blur",
        },
      ],
    },
    colProps: {
      span: 24,
    },
    value: "",
  },
  {
    type: "ElDatePicker",
    key: "sceneName22",
    componentProps: {
      placeholder: "请输入",
      type: "daterange",
      rangeSeparator: "至",
      startPlaceholder: "开始日期",
      endPlaceholder: "结束日期",
    },
    formItemProps: {
      label: "受委托人身份证有效期限",
      rules: [
        {
          required: true,
          message: "请输入受委托人身份证有效期限",
          trigger: "blur",
        },
      ],
    },
    colProps: {
      span: 24,
    },
    value: "",
  },
  {
    type: "ElInput",
    key: "sceneName3",
    componentProps: {
      placeholder: "请输入",
    },
    formItemProps: {
      label: "委托人联系地址",
      rules: [
        {
          required: true,
          message: "请输入委托人联系地址",
          trigger: "blur",
        },
      ],
    },
    colProps: {
      span: 24,
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
      label: "委托人联系电话",
      rules: [
        {
          required: true,
          message: "请输入委托人联系电话",
          trigger: "blur",
        },
      ],
    },
    colProps: {
      span: 24,
    },
    value: "",
  },
  {
    type: "ElRadioGroup",
    key: "sceneName5",
    componentProps: {
      placeholder: "请输入",
    },
    groupProps: {
      options: [
        { label: "男", value: "1" },
        { label: "女", value: "2" },
      ],
    },
    formItemProps: {
      label: "委托人性别",
    },
    colProps: {
      span: 24,
    },
    value: "1",
  },
  {
    type: "ElCheckboxGroup",
    key: "sceneName6",
    componentProps: {
      placeholder: "请输入",
    },
    groupProps: {
      options: [
        { label: "内资有限责任公司", value: "1" },
        { label: "内资股份有限公司", value: "2" },
      ],
    },
    formItemProps: {
      label: "公司类型",
      rules: [
        {
          required: true,
          message: "请输入委托人联系电话",
          trigger: "blur",
        },
      ],
    },
    colProps: {
      span: 24,
    },
    value: ["1"],
  },
  {
    type: "ElInput",
    key: "sceneName7",
    componentProps: {
      placeholder: "请输入",
    },
    formItemProps: {
      label: "行政区划",
    },
    colProps: {
      span: 24,
    },
    value: "",
  },
  {
    type: "ElInput",
    key: "sceneName8",
    componentProps: {
      placeholder: "请输入",
      type: "textarea",
      rows: 4,
      maxlength: "100",
      showWordLimit: true,
    },
    formItemProps: {
      label: "其它说明",
    },
    colProps: {
      span: 24,
    },
    value: "",
  },
  {
    type: "ElInput",
    key: "sceneName9",
    componentProps: {
      placeholder: "请输入",
    },
    formItemProps: {
      label: "身份证正面",
    },
    colProps: {
      span: 24,
    },
    value: "",
  },
];
