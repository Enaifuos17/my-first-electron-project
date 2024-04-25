console.log("main process working");

// import electron module
const electron = require("electron");

const app = electron.app; // Module to control application life.
const BrowserWindow = electron.BrowserWindow; // Module to create native browser window.

const path = require("node:path");
const url = require("node:url");

let win;
function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false, // or true, depending on your needs
      contextIsolation: true, // recommended (for better security)
    },
  });

  // load the index html file
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file",
      slashes: true,
    })
  );

  // win.webContents.openDevTools();

  // Event when the window is closed.
  win.on("closed", () => {
    win = null;
  });
}

// when electron is ready, call the createWindow function
app.on("ready", createWindow);

// app.on(`window-all-closed`, () => {
//   if (process.platform !== `darwin`) {
//     app.quit();
//   }
// });

// app.on(`activate`, () => {
//   if (win === null) {
//     createWindow();
//   }
// });
