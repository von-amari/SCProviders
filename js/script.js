//import { providerList } from "providerList.js";
 providerLists = [
  {
    id: 1,
    first: "Shameka",
    last: "Argo",
    title: "Licensed Professional Counselor, MA, LPC",
    business: "Points of Origin, LLC",
    phone: "864-633-2842",
    email: "",
    city: "Greenville",
    state: "South Carolina",
    zip: "29607"
  },
  {
    id: 2,
    first: "Julian",
    last: "Green",
    title: "Clinical Social Work/Therapist, MSW, LCSW, LISW-CP, CCTP",
    business: "Hope + Healing + Happiness Life Solutions w/Jules",
    phone: "803-200-5639",
    email: "jules_green@email.com",
    city: "Columbia",
    state: "South Carolina",
    zip: "29203"
},
{
  id: 3,
  first: "Royce",
  last: "Miller",
  title: "Licensed Professional Counselor, MA, LPC",
  business: "There Is Hope Counseling, LLC",
  phone: "864-881-2797",
  email: "endiajones@tihcounseling.com",
  city: "Clemson",
  state: "South Carolina",
  zip: "29631"
},
{
  id: 4,
  first: "Sabrina",
  last: "Richardson",
  title: "LMFT",
  business: "Intrinsic Therapy, LLC",
  phone: "864-464-9029",
  email: "",
  city: "Spartanburg",
  state: "South Carolina",
  zip: "29302"
},
{
  id: 5,
  first: "Valeria",
  last: "Smith-Byrd",
  title: "Licensed Professional Counselor",
  business: "LiveWell Consulting & Counseling",
  phone: "864-719-7594",
  email: "",
  city: "Piedmont",
  state: "South Carolina",
  zip: "29673"
}
]


providerList = providerLists.sort();

const providerCardTemplate = document.querySelector("[data-provider-template]");
const cardContainer=  document.querySelector("[data-provider-cards-container]");
const searchInput = document.querySelector("[data-search]");

// let providers = [];
//
// searchInput.addEventListener("input", e => {
//   const value = e.target.value.toLowerCase()
//   providers.forEach(provider => {
//     const isVisible =
//       provider.name.toLowerCase().includes(value) ||
//       provider.email.toLowerCase().includes(value)
//     //provider.element.classList.toggle("hide", !isVisible)
//    const tog=  provider.element.classList;
//    if(isVisible){
//     // tog.add("hide")
//     provider.element.style.display = "";
//    }
//    else{
//      provider.element.style.display = "hide";
//    }
//
//   })
// })

function search_providers() {
  let input = document.getElementById("search").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("provider");

for (i = 0; i < x.length; i++){
  if(!x[i].innerHTML.toLowerCase().includes(input)){
    x[i].style.display="none";
    console.log("first");

  }
  else{
    x[i].style.display="flex";
    console.log("second");
  }
}
}


providers = providerList.map(provider => {
const card = providerCardTemplate.content.cloneNode(true);
imageName = provider.first + "_" + provider.last;
card.getElementById("provider-image").src = '\assets\\'+imageName +'.jpg';
 console.log(imageName);

const header = card.querySelector('[data-header]');
 const title = card.querySelector('[data-title]');
 const email = card.querySelector('[data-email]');
  const phone = card.querySelector('[data-phone]');
  const business = card.querySelector('[data-business]')
  const city = card.querySelector('[data-city]');
  const state = card.querySelector('[data-state]');
  const zip= card.querySelector('[data-zip]');
// console.log(provider.first);
// console.log(header);
  header.textContent = provider.first + " " + provider.last;
  title.textContent = provider.title;
  business.textContent = provider.business;
  email.textContent= provider.email;
  phone.textContent = provider.phone;
  city.textContent = provider.city + ", ";
  state.textContent = provider.state + " ";
  zip.textContent = provider.zip;
//
cardContainer.append(card);
  return{ name: provider.first, email: provider.email, element: card }
});
