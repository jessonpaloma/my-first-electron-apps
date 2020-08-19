

const closeBtn = document.getElementById('closeBtn')
closeBtn.addEventListener('click', function(event){
    var window = remote.getCurrentWindow()
    window.close()

})
