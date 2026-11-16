let imageNumber=1;
let overlay=document.querySelector(".galleryoverlay");
let imgBox=document.querySelector(".imgbox");
let gallery=document.querySelector('#gallery');
var img=document.querySelector(".mainimg");

let next=document.querySelector("#next");
let prev=document.querySelector("#prev");



let close=document.querySelector(".imgbox span")
gallery.addEventListener("click",(event)=>{
    let currentImagePath=event.target.src;

    if(currentImagePath!==undefined){
    imageNumber=Number(currentImagePath.match(/\d+/)[0]);
    overlay.classList.add('galleryoverlayshow');
    imgBox.classList.add('imgboxshow');
    img.src=currentImagePath;
    }

    console.log(currentImagePath);
});
close.addEventListener("click",()=>{
    overlay.classList.remove('galleryoverlayshow');
    imgBox.classList.remove('imgboxshow');
})

overlay.addEventListener("click",()=>{
    overlay.classList.remove('galleryoverlayshow');
    imgBox.classList.remove('imgboxshow');
})


next.addEventListener("click",()=>{
    imageNumber++;
    if (imageNumber>8){
        imageNumber=1;
    }
    img.src=`img/${imageNumber}.jpg`;
});
prev.addEventListener("click",()=>{
    imageNumber--;
    if(imageNumber<1){
        imageNumber=8;
    }
    console.log(`img/${imageNumber}.jpg`);
    img.src=`img/${imageNumber}.jpg`;

});