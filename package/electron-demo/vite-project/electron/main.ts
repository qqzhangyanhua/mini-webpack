import { app, BrowserWindow } from 'electron';
import path from 'path'

const createdWindow = () => {
    const win = new BrowserWindow({
        width:900,
        height:600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation:false,
        }
    })

    if (process.env.VITE_DEV_SERVER_URL) {
        win.loadURL(process.env.VITE_DEV_SERVER_URL)
    } else {
        win.loadFile(path.resolve(__dirname, '../dist/index.html'));
    }
}

app.whenReady().then(()=>{
    createdWindow()
})
