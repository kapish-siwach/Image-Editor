let image = document.querySelector("img");
let bright = document.getElementById("brightness");
let contrast = document.getElementById("contrast");
let saturation = document.getElementById("saturation");
let grayscale = document.getElementById("grayscale");
let sepia = document.getElementById("sepia");
let imageinput = document.getElementById("imageinput")
let imgdiv = document.getElementById("imgDiv");
let inputdiv = document.getElementById("inputDiv");
let dbtn = document.getElementById("downloadbtn");

imageinput.addEventListener("change",()=>{
    
    let reader = new FileReader();
    reader.readAsDataURL(imageinput.files[0]);
    reader.addEventListener("load",()=>{
        image.src = reader.result;
        inputdiv.classList.add("d-none");
        imgdiv.classList.remove("d-none");
    })
})

function applyFilters() {
    let brightnessValue = bright.value;
    let contrastValue = contrast.value;
    let saturationValue = saturation.value;
    let grayscaleValue = grayscale.value;
    let sepiaValue = sepia.value;

    image.style.filter = `
        brightness(${brightnessValue}%)
        contrast(${contrastValue}%)
        saturate(${saturationValue}%)
        grayscale(${grayscaleValue}%)
        sepia(${sepiaValue}%)
    `;

    dbtn.disabled = false;

};

bright.addEventListener("input", applyFilters);
contrast.addEventListener("input", applyFilters);
saturation.addEventListener("input", applyFilters);
grayscale.addEventListener("input", applyFilters);
sepia.addEventListener("input", applyFilters);

dbtn.addEventListener("click",()=>{
    let link = document.createElement("a");
    link.href=image.src;
    link.download="Edited_image.png";
    link.click();
});