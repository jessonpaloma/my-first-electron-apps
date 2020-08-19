const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow
const ipc = electron.ipcRenderer

const record = document.getElementById('record')
const capture  = document.getElementById('capture')

//screen recorder
record.addEventListener('click', function(event){

    const modalPath = path.join('file://',__dirname,'record.html')
    let win = new BrowserWindow({ frame:false,transfarent:true,width:600 , height: 400, webPreferences: {
        nodeIntegration: true}  })

        win.on('close', function() { win = null })
        win.loadURL(modalPath)
        win.show()
})


//capture tools

capture.addEventListener('click', function(event){

    const modalPath = path.join('file://',__dirname,'capture.html')
    let win = new BrowserWindow({ frame:false,transfarent:true,width:600 , height: 400, webPreferences: {
        nodeIntegration: true}  })

        win.on('close', function() { win = null })
        win.loadURL(modalPath)
        win.show()
})
