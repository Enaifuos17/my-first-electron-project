console.log("main process working");

const electron = require("electron");

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require("node:path");
const url = require("node:url");

let win;
function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file",
      slashes: true,
    })
  );

  win.on("closed", () => {
    win = null;
  });
}

app.on("ready", createWindow);
