const electron = require('electron')
const path = require('path')
const BrowserWindow = electron.remote.BrowserWindow
const remote = electron.remote
const shell = require('electron').shell
const axios = require('axios')
const ipc = electron.ipcRenderer


var price  = document.querySelector('h1')
var targetPrice = document.getElementById('targetPrice')
var targetPriceVal

const notification = {
     title: 'BTC Alert',
     body: 'BTC just beat your target price!'
    }

const notifyBtn = document.getElementById('notifyBtn')
notifyBtn.addEventListener('click', function(event){

    const modalPath = path.join('file://', __dirname, 'add.html')
    let win = new BrowserWindow({ frame: false, transparent: true, alwaysOnTop: true, width: 400, height: 200,webPreferences: {
        nodeIntegration: true
        } })
win.on('close', function(){ win = null })
win.loadURL(modalPath)
win.show()

})

const exitBtn = document.getElementById('exitBtn')
exitBtn.addEventListener('click', function(event){
    var window = remote.getCurrentWindow()
    window.close()
})


const capBtn = document.getElementById('capBtn')
capBtn.addEventListener('click',function(event){
shell.openExternal('http://coins.ph')

})



function getBTC()
{
    axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC&tsyms=USD')
    .then(res => {
        const cryptos = res.data.BTC.USD
        price.innerHTML = '$' + cryptos.toLocaleString('en')

        if(targetPrice.innerHTML != '' && targetPriceVal < res.data.BTC.USD)
        {
            const myNotification = new window.Notification(notification.title, notification)
        }
    })
}
 
getBTC();
setInterval(getBTC,10000)

ipc.on('targetPriceVal', function (event, arg){
    targetPriceVal = Number(arg)
    targetPrice.innerHTML = '$' + targetPriceVal.toLocaleString('en')
})