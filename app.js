const SliderWrapper = document.querySelector('.sliderWrapper');
const menuItem = document.querySelectorAll('.menuItem');
const Products = [
  {
    id: 1,
    title: 'Air Force',
    price: 199,
    color: [
      {
        code: 'black',
        img: './img/air.png',
      },
      {
        code: 'darkblue',
        img: './img/air2.png',
      },
    ],
  },
  {
    id: 2,
    title: 'Air Jordan',
    price: 259,
    color: [
      {
        code: 'black',
        img: './img/jordan.png',
      },
      {
        code: 'green',
        img: './img/jordan2.png',
      },
    ],
  },
  {
    id: 3,
    title: 'BLAZER',
    price: 149,
    color: [
      {
        code: 'white',
        img: './img/blazer.png',
      },
      {
        code: 'green',
        img: './img/blazer2.png',
      },
    ],
  },
  {
    id: 4,
    title: 'CRATER',
    price: 99,
    color: [
      {
        code: 'black',
        img: './img/crater.png',
      },
      {
        code: 'white',
        img: './img/crater2.png',
      },
    ],
  },
  {
    id: 5,
    title: 'HIPPIE',
    price: 49,
    color: [
      {
        code: 'gray',
        img: './img/hippie.png',
      },
      {
        code: 'black',
        img: './img/hippie2.png',
      },
    ],
  },
];

let chosenProduct = Products[0];
const currentProductImg = document.querySelector('.productImg');
const currentProductTitle = document.querySelector('.productTitle');
const currentProductPrice = document.querySelector('.productPrice');
const currentProductColors = document.querySelectorAll('.color');
const currentProductSizes = document.querySelectorAll('.size');

menuItem.forEach((item, index) => {
  item.addEventListener('click', () => {
    SliderWrapper.style.transform = `translateX(${-100 * index}vw)`;
    // change the current Product
    chosenProduct = Products[index];

    // change texts of currentProduct
    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = `$${chosenProduct.price}`;
    currentProductImg.src = chosenProduct.color[0].img;
    // Assign new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = chosenProduct.color[index].code;
    });

    // change the Img By clicking the color
    currentProductColors.forEach((color, index) => {
      color.addEventListener('click', () => {
        currentProductImg.src = chosenProduct.color[index].img;
      });
    });
    // change the color of clicked size
    currentProductSizes.forEach((size, index) => {
      size.addEventListener('click', () => {
        currentProductSizes.forEach((size) => {
          size.style.backgroundColor = '#fff';
          size.style.color = '#333';
        });
        size.style.backgroundColor = '#333';
        size.style.color = '#fff';
      });
    });
  });
});
const paymentGate = document.querySelector('.payment-gate');
const productBtn = document.querySelector('.productBtn');
const closeBtn = document.querySelector('.close');

productBtn.addEventListener('click', () => {
  paymentGate.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  paymentGate.style.display = 'none';
});
