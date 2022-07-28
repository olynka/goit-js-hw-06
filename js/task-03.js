const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// const itemGalleryEl = ({ url, alt }) =>
//   `<li><img scr=${url} alt=${alt} width="250" height="200"/></li>`;

// const imagesEL = images.reduce((element, elements)=>element + itemGalleryEl(elements), " ");
// console.log(imagesEL); 
const imagesEl = images.map(({ url, alt }) =>
  `<li><img src=${url} alt=${alt} width=150 height=100></li>`
);
const galleryEl = document.querySelector(".gallery");
// const imagesEl = images.map((image) => 
//   `<li><img scr=${image.url} alt=${image.alt} width="150" height="100"/></li>`).join("");
galleryEl.insertAdjacentHTML("afterbegin", imagesEl);
console.log(galleryEl);