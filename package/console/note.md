## 关于谷歌浏览器控制台

### 入口

- F12 要进行检查，请右键单击页面上的元素，然后选择“检查”.
- 若要打开最后一个“开发人员工具”面板，请单击右上角...按钮，然后选择更多工具 > 开发人员工具 .
- 快捷键 mac: Cmd+Option+C (打开元素)  Cmd+Option+I (打开控制台) Cmd+Option+J (打开控制台console) 
- 接上相同命令也可以关闭控制台
- Command+] (Mac)  聚焦下一个面版
- 放大, 缩小 Command + Shift + + -
- Command+Shift+P (Mac)  Command+Shift+P (Windows, Linux, Chrome OS)  打开命令菜单
- 接上(打开菜单后 删除 > 然后搜索 如 png)
- 输入 'javascript' 然后点击disabled 这个时候会在窗口出现一个X, 就是在禁用掉js 
- 然后在输入框输入 'javascript' 然后点击enable 就可以启用js了
- 输入'chinese' 切换到中文, 输入'english' 切换到英文
- 点击Element 然后选中某一行up down 可以移动元素的位置 left right 可以收缩元素
- 显示悬停尺寸 Command+Shift+P  搜索' show rules on hover'
- 右键---可以拖动元素
- 点击元素 按下H 会隐藏元素 再次输入H会显示元素
- 点击元素 按下Delete 会删除元素  (按下command+z 会恢复删除的元素)
- 点击元素  在console输入$0 会显示当前选中的元素
- 点击元素  右键---copy---copy selector 会复制当前元素的css选择器
- 点击元素 右键-- scroll into view 会将当前元素滚动到可视区域
- 点击元素 点击元素 -style  右上角 .cls 给类添加class
- 点击元素 点击元素 -style  右上角 :hover 给类添加hover(如果之前有状态会显示出来)
- 布局flex 的使用在-style 点击 flex 会出现一个弹窗 里面有很多flex的属性
- flex 布局,在layout中可以看到flex布局的属性点击颜色


```shell
open -a "Google Chrome" --args --auto-open-devtools-for-tabs

快速回到谷歌浏览器
```