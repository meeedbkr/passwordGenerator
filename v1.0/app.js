let characters=["abcdefghigklmnopqrstuvwxyz","abcdefghigklmnopqrstuvwxyz".toUpperCase(),"1234567890","!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
let numberInput = document.querySelector(".length input[type='number']");
let passwordInput = document.querySelector(".password >input");
let numberLine = document.querySelector(".password >input + .before");
let checkboxs = document.querySelectorAll("input[type='checkbox']");
let radios = document.querySelectorAll("input[type='radio']");


//password generator
function generate(lvl , nmbrOfChar){
	let pass="",color;
	for (var i = 0; i < nmbrOfChar; i++) {
	pass+= lvl.charAt(Math.floor(Math.random()*lvl.length));
}
if(nmbrOfChar<4){color = "#c1392b";}else if(nmbrOfChar<6){color = "#efa31d";}else if(nmbrOfChar<7){color = "#f1c410";}else if(nmbrOfChar<9){color = "#64bb5d";}else if(nmbrOfChar<11){color = "#4da186";}else{color = "#4283cd";}
numberLine.style.width= `${nmbrOfChar*(100/40)}%`;
numberLine.style.backgroundColor= color;
passwordInput.value = pass;
}

//function regenerate
function regenerate(e){
	if(e.value>40){
		e.value=40;
	}
let tab="";
let checked = document.querySelectorAll("input[type='checkbox']:checked").forEach((el)=>{
	tab+=characters[el.dataset.id];
});
if(tab.length==0){ checkboxs[0].checked=true;
	generate(characters[0],e.value);
 }
 else{
 	generate(tab,e.value);

 }
}

//checkbox checker
function checked(checked=true){
	checkboxs.forEach((el)=>{
		el.checked= checked;
	});
}
function disabled(disabled=true){
	checkboxs.forEach((el)=>{
		el.disabled= disabled;
	});
}
function checkedF(check) {
	for(i = 0; i<check.length ; i++){
		checkboxs[check[i]].checked=true;
		checkboxs[check[i]].disabled=false;
	}
}

//alerts
function modal(x){
document.querySelector(".msg").innerText = x;
document.querySelector(".modal").classList.add("active");
const myTimeout = setTimeout(()=>{
document.querySelector(".modal").classList.remove("active");
}, 1000);
}

//initialisation
let intialPassSize = Math.floor(Math.random()*40);
numberInput.value=intialPassSize;
generate(charactersLower+charactersUpper+numbers+symbols,intialPassSize);



//radio change
radios[0].addEventListener("click",()=>{
	checked(false);
	disabled(true);
	checkedF([0,1]);
});
radios[1].addEventListener("click",()=>{
	checked(false);
	disabled(true);
	checkedF([0,1,2]);
});
radios[2].addEventListener("click",()=>{
	checked(true);
	disabled(false);
});


//number Change
numberInput.addEventListener("input",(e)=>{
	regenerate(e.target);
});
document.querySelector(".regen").addEventListener("click",()=>{
	let e = document.querySelector(".length input[type='number']");
	regenerate(e);
});
document.querySelector(".copy").addEventListener("click",()=>{
	passwordInput.focus();
	passwordInput.select();
	 try {
          let successful = document.execCommand('copy');
           	modal("password copied!");
        } catch(err) {
         	modal("password couldn't be copied!");
        }
});
