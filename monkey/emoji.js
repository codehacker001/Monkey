const closedface = document.querySelector('.closed')
const openface = document.querySelector('.open')
const mess = document.querySelector('.cloud')

//ADD Event listener
closedface.addEventListener('click',()=>{
    if (openface.classList.contains('open')) {
        openface.classList.add('active')
        mess.classList.add('active')
        closedface.classList.remove('active')
    }
});

openface.addEventListener('click',()=>{
    if (closedface.classList.contains('closed')) {
        closedface.classList.add('active')
        mess.classList.remove('active')
        openface.classList.remove('active')
    }
});