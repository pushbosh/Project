const gallery = document.getElementById("gallery");
const fullViewContainer = document.getElementById("fullViewContainer");
const fullViewCloseButton = document.getElementById("fullViewCloseButton");
const fullViewImage = document.getElementById("fullViewImage");

const images = [
    "https://risovach.ru/upload/2017/01/mem/niger-v-kindere_135445247_orig_.jpg",
    "https://i1.sndcdn.com/artworks-QUm7YOdv7XffUjIo-SVNU7g-t500x500.jpg",
    "https://risovach.ru/upload/2017/01/mem/niger-v-kindere_135445247_orig_.jpg",
    "https://i1.sndcdn.com/artworks-QUm7YOdv7XffUjIo-SVNU7g-t500x500.jpg",
    "https://risovach.ru/upload/2017/01/mem/niger-v-kindere_135445247_orig_.jpg",
    "https://i1.sndcdn.com/artworks-QUm7YOdv7XffUjIo-SVNU7g-t500x500.jpg",
    "https://risovach.ru/upload/2017/01/mem/niger-v-kindere_135445247_orig_.jpg",
    "https://i1.sndcdn.com/artworks-QUm7YOdv7XffUjIo-SVNU7g-t500x500.jpg",
    "https://risovach.ru/upload/2017/01/mem/niger-v-kindere_135445247_orig_.jpg"    
];
images.forEach(createImage)
function createImage(img){
    const imageElement = document.createElement("img")
    imageElement.src = img;
    imageElement.className = "gallery__image";
    gallery.appendChild(imageElement);
    imageElement.addEventListener("click",function(e){
        fullViewContainer.style.display = "grid";
        fullViewImage.src = img;
    } )
}

fullViewCloseButton.addEventListener("click",function (e) {
    fullViewContainer.style.display = "none"; //backdrop-filter: blur(5px);
})

