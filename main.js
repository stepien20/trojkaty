const calcBut=document.querySelector(`#calcBut`)

calcBut.addEventListener(`click`,evt=>{
    evt.preventDefault()
    const bok1=parseFloat(document.querySelector(`#bok1`).value)
    const bok2=parseFloat(document.querySelector(`#bok2`).value)
    const bok3=parseFloat(document.querySelector(`#bok3`).value)
    const display=document.querySelector(`#display`)
    const array=[bok1,bok2,bok3].sort((a,b)=>a-b)
    
    if (isNaN(bok1)||isNaN(bok2)||isNaN(bok2)){
        display.classList.remove("visually-hidden")

    }
    else if(array[0]+array[1]<array[2]){
        display.classList.remove("visually-hidden")
    }
    else {
        display.classList.add("visually-hidden")
    
    obwod=bok1+bok2+bok3
    p=obwod/2
    pole=Math.sqrt((p*(p-bok1)*(p-bok2)*(p-bok3)))
    trojkat=""
    let trojkatnazwa=""
    pitagoras=Math.pow(array[0],2)+Math.pow(array[1],2)
    if (pitagoras>Math.pow(array[2],2)){
        trojkat="ostry"
        trojkatnazwa="ostrokątny"
    }
    else if(pitagoras==Math.pow(array[2],2)){
        trojkat="prosty"
        trojkatnazwa="prostokątny"
    }
    else{
        trojkat="rozwarty"
        trojkatnazwa="rozwartokątny"
    }
    const element=document.createElement(`div`)
    element.classList.add(`card`)
    element.style.width="18 rem"
    element.innerHTML=`
    
  <img class="card-img-top" src="/img/${trojkat}.jpg" alt="Card image cap" style="width: 18rem;">
  <div class="card-body">
  <p class="card-text">Z boków ${bok1},${bok2},${bok3} można utworzyć trójkąt</p>
  <h5 class="card-title text-primary">${trojkatnazwa}</h5>
  <p class="card-text">Pole wynosi ${pole.toFixed(2)}</p> 
  </div>
`
   document.querySelector(`main`).append(element)


    array.length=0
    document.querySelector(`#bok1`).value=''
    document.querySelector(`#bok2`).value=''
    document.querySelector(`#bok3`).value=''
    document.querySelector(`#bok1`).focus()
    }
})