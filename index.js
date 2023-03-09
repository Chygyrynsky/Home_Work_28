window.onload=function(){
const changeImg = ()=> {
    const rand = Math.ceil(Math.random() * 10)
document.querySelector('img').src = 'images/' + rand + '.jpg'
}
document.querySelector('button').addEventListener('click', changeImg)
}

