function slider() {
	const img = {
		slider:document.getElementById('slider'),
		childEl(a,b){
          return  a.appendChild(document.body.appendChild(document.createElement(b)))
		},
		createArr(n){
            let a = [];
            for (let i = 0; i < n; i++) {
                 a[i] = i;
            }
            return a;
	}
}

let div = img.childEl(img.slider,'div');
let div2 = img.childEl(div,'div');
let countImg = img.createArr(10);
countImg.map((x)=>img.childEl(img.childEl(div2,'div'),'div'))
.map((x2,j)=>{x2.style.backgroundImage = "url(/img/1.jpg)";x2.className = "images";})
.map((x3,f)=>console.log(document.getElementsByClassName('images')[f].offsetParent.className = "imagesBlockHidden"));
div2.className = "imageBlock";
document.getElementsByClassName('imagesBlockHidden')[1].style.marginLeft = '100px';
document.getElementsByClassName('images')[1].style.marginLeft = '-100px';
document.getElementsByClassName('imagesBlockHidden')[2].style.marginLeft = '200px';
document.getElementsByClassName('images')[2].style.marginLeft = '-200px';
document.getElementsByClassName('imagesBlockHidden')[3].style.marginLeft = '300px';
document.getElementsByClassName('images')[3].style.marginLeft = '-300px';
document.getElementsByClassName('imagesBlockHidden')[4].style.marginLeft = '400px';
document.getElementsByClassName('images')[4].style.marginLeft = '-400px';
document.getElementsByClassName('imagesBlockHidden')[5].style.marginLeft = '500px';
document.getElementsByClassName('images')[5].style.marginLeft = '-500px';
document.getElementsByClassName('imagesBlockHidden')[6].style.marginLeft = '600px';
document.getElementsByClassName('images')[6].style.marginLeft = '-600px';
document.getElementsByClassName('imagesBlockHidden')[7].style.marginLeft = '700px';
document.getElementsByClassName('images')[7].style.marginLeft = '-700px';
document.getElementsByClassName('imagesBlockHidden')[8].style.marginLeft = '800px'
document.getElementsByClassName('images')[8].style.marginLeft = '-800px'
document.getElementsByClassName('imagesBlockHidden')[9].style.marginLeft = '900px'
document.getElementsByClassName('images')[9].style.marginLeft = '-900px'
}
slider();
