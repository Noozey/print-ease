function changeimg(){
    const nextimg = document.querySelector(".offer-img-1");
    const secondimg = document.querySelector(".offer-img-2");
    if(nextimg.style.display=="block"){
        nextimg.style.display = "none";
        secondimg.style.display="block";
    }
    else
    {
        nextimg.style.display = "block";
        secondimg.style.display="none";
    }
}
setInterval(changeimg,5000);


function selectPrinter(event,imageId){
    const dropdownValue = event.currentTarget.value;
    const imageElement = document.getElementById(imageId);
    imageElement.src = `./picture/img/compare/${dropdownValue}.png`;
}


function showDeliveryInfo(info){
    const deliveryInfo = document.querySelector(`.${info}`);
    deliveryInfo.style.display = "block";
}
function closeDeliveryInfo(close){
    const deliveryInfoClose = document.querySelector(`.${close}`);
    deliveryInfoClose.style.display = "none";
}