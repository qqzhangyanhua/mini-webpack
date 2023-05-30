// electron-main/index.ts
import { app, BrowserWindow, ipcMain } from "electron";
import path from "path";

const createWindow = () => {
  const win = new BrowserWindow({
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true,
      preload: path.join(__dirname, "../electron-preload/index.js"),
    },
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

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
