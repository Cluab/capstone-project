const story = [{
  name: 'kevin Mwangi',
  image: 'images/Screenshot (22).png',
  link: 'https://www.microverse.org/blog/a-career-with-microsoft-how-microverse-helped-pave-the-way',
},
{
  name: 'Gabriela Cruz Olivera',
  image: 'images/Screenshot (11).png',
  link: 'https://www.microverse.org/blog/join-the-global-job-market-as-a-web-developer',
},
];

const success = document.querySelector('.success-img');

function winstory() {
  story.forEach((story) => {
    success.innerHTML += `
      
      <a href="${story.link}"><img src="${story.image}" alt="${story.name}"></a>
    `;
  });
}
winstory();
