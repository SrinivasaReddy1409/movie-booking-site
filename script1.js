var swiper = new Swiper(".popular-content", {
  slidesPerView:1,
  spaceBetween: 10,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    280:{
      slidesPerView:1,
      spaceBetween: 10,
    },
    320:{
      slidesPerView:2,
      spaceBetween: 10,
    },
    510:{
      slidesPerView:2,
      spaceBetween: 10,
    },
    758:{
      slidesPerView:3,
      spaceBetween: 15,
    },
    900:{
      slidesPerView:4,
      spaceBetween: 20,
    },
  },
});

const container = document.querySelector('.container1');
const seats= document.querySelectorAll('.row .seat:not(.occupied');
const count=document.getElementById('count');
const total=document.getElementById('total');
const seatalpha=document.getElementById('seat-alpha');
populateUI();
function updateSelectedCount(){
  const selectedSeats=document.querySelectorAll('.row .seat.selected');
  const seatsIndex=[...selectedSeats].map(function(seat){
    return [...seats].indexOf(seat);
  });
  let seatnumber=[];
  if(Math.max(...seatsIndex)>=0 && Math.max(...seatsIndex)<18){
    seatalpha.innerText='A';
    for(let i=0;i<seatsIndex.length;i++){
      seatnumber[i]=seatsIndex[i]+1;
    }
    document.getElementById('seat-number').innerHTML=seatnumber;
  }
  else if(Math.max(...seatsIndex)>=18 && Math.max(...seatsIndex)<36){
    seatalpha.innerText='B';
    for(let i=0;i<seatsIndex.length;i++){
      seatnumber[i]=seatsIndex[i]-17;
    }
    document.getElementById('seat-number').innerHTML=seatnumber;
  }
  else if(Math.max(...seatsIndex)>=36 && Math.max(...seatsIndex)<54){
    seatalpha.innerText='C';
    for(let i=0;i<seatsIndex.length;i++){
      seatnumber[i]=seatsIndex[i]-35;
    }
    document.getElementById('seat-number').innerHTML=seatnumber;
  }
  else if(Math.max(...seatsIndex)>=54 && Math.max(...seatsIndex)<72){
    seatalpha.innerText='D';
    for(let i=0;i<seatsIndex.length;i++){
      seatnumber[i]=seatsIndex[i]-53;
    }
    document.getElementById('seat-number').innerHTML=seatnumber;
  }
  else if(Math.max(...seatsIndex)>=72 && Math.max(...seatsIndex)<90){
    seatalpha.innerText='E';
    for(let i=0;i<seatsIndex.length;i++){
      seatnumber[i]=seatsIndex[i]-71;
    }
    document.getElementById('seat-number').innerHTML=seatnumber;
  }
  else if(Math.max(...seatsIndex)>=90 && Math.max(...seatsIndex)<108){
    seatalpha.innerText='F';
    for(let i=0;i<seatsIndex.length;i++){
      seatnumber[i]=seatsIndex[i]-89;
    }
    document.getElementById('seat-number').innerHTML=seatnumber;
  }
  else if(Math.max(...seatsIndex)>=108 && Math.max(...seatsIndex)<126){
    seatalpha.innerText='G';
    for(let i=0;i<seatsIndex.length;i++){
      seatnumber[i]=seatsIndex[i]-107;
    }
    document.getElementById('seat-number').innerHTML=seatnumber;
  }
  else if(Math.max(...seatsIndex)>=126 && Math.max(...seatsIndex)<144){
    seatalpha.innerText='H';
    for(let i=0;i<seatsIndex.length;i++){
      seatnumber[i]=seatsIndex[i]-125;
    }
    document.getElementById('seat-number').innerHTML=seatnumber;
  }
  localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));
  const selectedSeatsCount=selectedSeats.length;
  total.innerText=selectedSeatsCount*ticketprice;
}
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  if(selectedSeats !== null && selectedSeats.length > 0){
    seats.forEach((seat,index) => {
      if(selectedSeats.indexOf(index)>-1){
        seat.classList.add('selected');
      }
    });
  }
}
let ticketprice = 177;
container.addEventListener('click', (e) => {
  if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
  }

  updateSelectedCount();
});

updateSelectedCount();