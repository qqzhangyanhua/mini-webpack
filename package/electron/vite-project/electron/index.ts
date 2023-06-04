// electron-main/index.ts
import { app, BrowserWindow, ipcMain,Menu } from "electron";
import path from "path";


//创建窗口
const createWindow = () => {

  const win = new BrowserWindow({
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      // preload: path.join(__dirname, "../electron-preload/index.js"),
    },
    x:100,
    y:100,
    minHeight: 300,
    minWidth: 300,
    autoHideMenuBar: false,
    // frame: false,
    // width: 600,
    // height: 400,
  });

  if (app.isPackaged) {
    win.loadFile(path.join(__dirname, "../index.html"));
  } else {
    const url = `${process.env["VITE_DEV_SERVER_URL"]}`;
   
    win.loadURL(url);
  }
win.webContents.openDevTools();
setTimeout(() => {
  win.webContents.send("load", {message:'初始化完成'});
}, 1000);

};

const setMenu = () => {
  let menuTemp =[{
    label: '文件123',
    submenu:[{
      label: '新建',
    }]
  },{
    label: '编辑',
  }]
  //生成一个菜单
  const menu123 = Menu.buildFromTemplate(menuTemp)
  //设置菜单
  Menu.setApplicationMenu(menu123)
}

ipcMain.on("message", (_, num) => {
  console.log(num, "来了");
});
app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
app.on('ready',()=>{
    setMenu();
})
//所有窗口都关闭了
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
