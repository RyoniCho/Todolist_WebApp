
const images=[];//["0.jpg","1.jpg","2.jpg","3.jpg"];
const bgImage=document.createElement("img");

const randNum=GetRandomNumber(0,images.length-1);

if (images.length>0)
{
    const selectedImage=images[randNum];
    bgImage.src=`image/${selectedImage}`;
}
else
{
    bgImage.src="https://source.unsplash.com/random/1600*900"
}



document.body.appendChild(bgImage);

//Random Number(max inclusive)
function GetRandomNumber(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}