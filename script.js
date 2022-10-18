const teammembers = [{
    id: 0,
    name: "Ariel Camus",
    profession:"FOUNDER + CEO",
    image:"/images/one.jpg",
    discretion:"Ariel has lived and worked in 7 different countries including Spain, Argentina, USA, and Vietnam and has been coding since he was 12. He previously founded Tourist Eye, a travel app with 1MM+ users acquired by Lonely Planet. He is famous for his bad jokes and Argentinian asados."
}
, {
    id: 1,
    name: "Ahmad Abdel-Halim",
    profession:"ENGINEERING",
    image:"/images/two.jpg",
    discretion:"Ahmad is a software engineer located in Egypt. When he's not working, he enjoys spending time with family, traveling around Egypt, and watching football. His favorite programming language is Ruby, which he happily gets to work with it in Microverse."
} ,
{
    id: 2,
    name: "Alessio Gozzoli",
    profession:"PRODUCT",
    image:"/images/three.png",
    discretion: "Alessio cares about using technology to have a positive impact on the world. Before Microverse, he tried to start his own company, helped companies training AI models in the cloud at FloydHub, and grew Metabase Cloud. When he's not working, find him cooking, reading books & blogs, or hiking with family."
} ,
 {
    id: 3,
    name: "Andrea Funda",
    profession:"STUDENT SUCCESS",
    image:"/images/six.png",
    discretion: "As an avid traveler, Andrea believes no road trip is successful without getting lost at least once. Professionally though, she loves helping people find their way. Her background is in process, project, and people management. Outside of work, she can usually be found playing board games, hiking, or mastering new recipes."
 } ,
 {
    id: 4,
    name: "Autum Huffman",
    profession:"CAREER SERVICESS",
    image:"/images/four.png",
    discretion:"Autumn is a reformed academic with a passion for democratizing education and helping students meet their potential. Prior to Microverse, she was a college instructor, education researcher, college & career coach, and helped bootstrap a Florida non-profit education program. In her spare time Autumn loves hiking, amateur photography, and having dance parties with her 4 year old."
 } ,
 {
    id: 5,
    name: "Bee Quesada",
    profession:"STUDENT SUCCESS",
    image:"/images/five.jpg ",
    discretion:"Based in the heart of Central America, Bee is a language-loving nerd with a deep passion for education and a service mindset. Her background is in customer experience, people management, and learning & development. In her free time, Bee can be found reading post-apocalyptic literature and thrifting for vintage 90s fashion."
 }
]


const sponsor = [
    {name:"SOMA CAPITAl",
    logo:"/sponsers-img/5e581622c52d562e19f15c2f_soma-capital.png"
      },
      {
        name: "Y 50",
        logo:"/sponsers-img/5e5816210e511c21a03350d2_50Ylogo.png"
      },
      {
        name: "GENERAL CATALYST"
        ,
        logo:"/sponsers-img/5e5816210e511cdd323350d3_gc.webp"
      },
      {
        name:"yclogo",
        logo:"/sponsers-img/5e5816226dfe7b54f5cef482_yclogo.png"
      },
      {
        name:"L2 VENTURES",
        logo:"/sponsers-img/5e5816226dfe7b896acef481_l2.png"
      },
      {
        name:"hackvc",
        logo:"/sponsers-img/5e58162203fc89e9aa5acc3a_hackvc.webp"
      },
      {
        name:"",
        logo:""
      },
      { name:"Northzone",
      logo:"sponsers-img/61522595be718075aca25e5c_northzone.png"}
];

const learn = [{
  image:"images/program_icon_04.png"
  ,title:"NO UPFRONT COST"
  ,discretion:"You owe us nothing until you get a job —no matter what country you’re in."
  
},{
  image:"images/program_icon_03.png"
  ,title:"COLLAB LEARNING"
  ,discretion:"Learn through pair programming, group projects,and project reviews."
  
},{
  image:"images/program_icon_01.png"
  ,title:"GLOBAL CHANCE"
  ,discretion:"Connect with global jobs after gaining experience working on a remote team."
},{
  image:"images/program_icon_05.png"
  ,title:"SUPPORT AND LIABLE"
  ,discretion:"Receive support from our dedicated Student Success Team, mentors, a personal career coach, and more."
},
]
// const story = [{
//   name:"kevin Mwangi",
//   image:"images/Screenshot (17).png"
//   ,link:"https://www.microverse.org/blog/a-career-with-microsoft-how-microverse-helped-pave-the-way"
// },
// {name:"Gabriela Cruz Olivera",
// image:"images/Screenshot (11).png",
// link:"https://www.microverse.org/blog/join-the-global-job-market-as-a-web-developer"}
// ];

const team = document.querySelector('.team-box');
const spons = document.querySelector(".backed-by");
const box = document.querySelector(".main-big-box")
// const success = document.querySelector(".success-img");

function boredmembers() {
    teammembers.forEach((teammembers) => {
    team.innerHTML += `
      
      <div class="team-profile">
                <div class="image-box">
                    <img class="square-img" src="/images/Screenshot (12).png" alt="">
                <img class="team-image"src="${teammembers.image}" alt="${teammembers.name} image">
          </div>
          <div class="team-name"><h4>${teammembers.name}</h4>
            <p>${teammembers.profession}</p></div>
            </div>
            <p>${teammembers.discretion}</p>
    `;
  });
}
boredmembers()


function backup() {
    sponsor.forEach((sponsor) => {
    spons.innerHTML += `
      
      <img class="sponser-img"src="${sponsor.logo}" alt="${sponsor.name}">
    `;
  });
}
backup()

function experience() {
  learn.forEach((learn) => {
  box.innerHTML += `
    
    <div class="main-box">
            <img src="${learn.image}" alt="${learn.title}">
            <h4>${learn.title}</h4>
            <p>${learn.discretion}</p>
        </div>
  `;
});
}
experience()






// function winstory() {
//   story.forEach((story) => {
//     success.innerHTML += `
    
//     <a href="${story.link}"><img src="${story.image}" alt="${story.name}"></a>
//   `;
// });
// }
// winstory()