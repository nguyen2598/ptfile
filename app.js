let arrImg=[
    'https://bantranh.com/wp-content/uploads/2019/04/tranh-dan-tuong-3d-vu-tru-cua-con.jpg',
    'https://bizweb.dktcdn.net/100/330/208/files/hinh-nen-anime-cute-1-1.jpg?v=1649325674617',
    'https://haycafe.vn/wp-content/uploads/2022/03/Anh-Rimuru-hinh-nen-Rimuru.jpg',
    'https://phunugioi.com/wp-content/uploads/2020/03/hinh-nen-anime-dep-de-thuong-cute-buon-ngau-lanh-lung.jpg'
]
const Feture=document.querySelector('.feature')
let prevImg=Feture.style.backgroundImage
let newImg =Feture.style.backgroundImage
setInterval(nextImage,4000)

function nextImage(){
    while(newImg==prevImg){
        newImg=arrImg[Math.floor(Math.random()*arrImg.length)]
    }
    prevImg=newImg
    Feture.style.backgroundImage=`url(${newImg})`
    // console.log(newImg)
}

const navcontent=document.querySelector('.nav-content');
const navBar=document.querySelector('.navbar .fa-bars');console.log(navBar)
navBar.addEventListener('click',e=>{
    navBar.classList.toggle('clickNavBar');
    
})

