const data=[
  {
   flagImgSource:'https://cdn.britannica.com/97/897-004-232BDF01/Flag-Germany.jpg',
   countryName:'Germany',
   population: '81,770,900',
   region:'Europe',
   capital:'Berlin'
  },
  {
    flagImgSource:'https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg',
    countryName:'United States of America',
    population: '323,947,000',
    region:'Americas',
    capital:'Washington, D.C'
   },
   {
    flagImgSource:'https://cdn.britannica.com/47/6847-004-7D668BB0/Flag-Brazil.jpg',
    countryName:'Brazil',
    population: '206,135,893',
    region:'Americas',
    capital:'Brasilia'
   },
   {
    flagImgSource:'https://cdn.britannica.com/85/1485-004-94C3DEDA/Flag-Iceland.jpg',
    countryName:'Iceland',
    population: '334,300',
    region:'Europe',
    capital:'Reykjavil'
   },
   {
    flagImgSource:'https://cdn.britannica.com/40/5340-004-B25ED5CF/Flag-Afghanistan.jpg',
    countryName:'Afghanistan',
    population: '27,657,145',
    region:'Asia',
    capital:'Kabul'
   }
];
// const section=document.createElement('section');
for(i=0;i<=5;i++){
const card=document.createElement('div');
const flagImage=document.createElement('div');
const img=document.createElement('img');
img.setAttribute('src',data[i].flagImgSource);
flagImage.append(img);
img.style.height="13rem";
img.style.width="18rem";
const h3=document.createElement('h2');
h3.innerText=data[i].countryName;
const p1=document.createElement('p');
p1.innerHTML='<b>Population:</b> '+data[i].population;
const p2=document.createElement('p');
p2.innerHTML='<b>Region:</b> '+data[i].region;
const p3=document.createElement('p');
p3.innerHTML='<b>Capital:</b> '+data[i].capital;
const div=document.createElement('div');
card.style.backgroundColor='white';
card.style.border='1px';
card.style.width='18rem';
card.style.borderRadius='3%';
card.style.overflow='hidden';
div.style.paddingLeft='20px';
div.append(h3,p1,p2,p3);
card.style.marginLeft='2rem';
card.style.marginTop='2rem';
card.style.boxShadow='rgba(0, 0, 0, 0.15) 0px 5px 15px 0px';

card.append(flagImage, div);
// section.append(card);
document.body.append(card);
document.body.style.display='flex';
document.body.style.flexWrap='wrap';
document.body.style.justifyContent='space-evenly';
// section.style.display='flex';
document.body.style.backgroundColor='whitesmoke';
}

