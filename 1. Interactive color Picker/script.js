const imageCanvas = document.getElementById("imageCanvas");
const colorPreview = document.getElementById("colorPreview");
const showColor=document.getElementById("show-color");

function updateColorPreview(color) {
    colorPreview.style.backgroundColor = color;
    showColor.innerHTML=`<p style="color:${color};">Selected Color: ${color}</p>`;
}



imageCanvas.addEventListener("click", (event) => {
    const canvasReact=imageCanvas.getBoundingClientRect();
    const x=event.clientX-canvasReact.left;
    const y=event.clientY-canvasReact.top;
    const ctx=imageCanvas.getContext("2d");
    const pixelData=ctx.getImageData(x,y,1,2).data; 
    // console.log(pixelData);
    const r=pixelData[0];
    const g=pixelData[1];
    const b=pixelData[2];
    const a=pixelData[3];
    const color=`rgba(${r},${g},${b},${a})`;
    updateColorPreview(color);
});

const image=new Image();

image.onload=()=>{
    const ctx=imageCanvas.getContext("2d");
    imageCanvas.width=image.width;
    imageCanvas.height=image.height;
    ctx.drawImage(image,0,0,image.width,image.height);
    
}

image.src="2.jpg";