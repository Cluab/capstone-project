const teammembers = [{
  id: 0,
  name: 'Ariel Camus',
  profession: 'FOUNDER + CEO',
  image: ['images/one.jpg', 'images/one.jpg'],
  discretion: ['Ariel has lived and worked in 7 different countries including Spain, Argentina, USA, and Vietnam and has been coding since he was 12. He previously founded Tourist Eye, a travel app with 1MM+ users acquired by Lonely Planet. He is famous for his bad jokes and Argentinian asados.', 'Ariel has lived and worked in 7 different countries including Spain, Argentina, USA, and Vietnam and has been coding since he was 12.'],
},
{
  id: 1,
  name: 'Ahmad Abdel-Halim',
  profession: 'ENGINEERING',
  image: ['images/Screenshot (19).png', 'images/two.jpg'],
  discretion: ["Ahmad is a software engineer located in Egypt. When he's not working, he enjoys spending time with family, traveling around Egypt, and watching football. His favorite programming language is Ruby, which he happily gets to work with it in Microverse.", "Ahmad is a software engineer located in Egypt. When he's not working, he enjoys spending time with family, traveling around Egypt, and watching football."],
},
{
  id: 2,
  name: 'Alessio Gozzoli',
  profession: 'PRODUCT',
  image: ['images/three.png', 'images/three.png'],
  discretion: ["Alessio cares about using technology to have a positive impact on the world. Before Microverse, he tried to start his own company, helped companies training AI models in the cloud at FloydHub, and grew Metabase Cloud. When he's not working, find him cooking, reading books & blogs, or hiking with family.", 'Alessio cares about using technology to have a positive impact on the world.'],
},
{
  id: 3,
  name: 'Andrea Funda',
  profession: 'STUDENT SUCCESS',
  image: ['images/Screenshot (20).png', 'images/six.png'],
  discretion: ['As an avid traveler, Andrea believes no road trip is successful without getting lost at least once. Professionally though, she loves helping people find their way. Her background is in process, project, and people management. Outside of work, she can usually be found playing board games, hiking, or mastering new recipes.', 'As an avid traveler, Andrea believes no road trip is successful without getting lost at least once. Professionally though, she loves helping people find their way.'],
},
{
  id: 4,
  name: 'Autum Huffman',
  profession: 'CAREER SERVICESS',
  image: ['images/four.png', 'images/four.png'],
  discretion: ['Autumn is a reformed academic with a passion for democratizing education and helping students meet their potential. Prior to Microverse, she was a college instructor, education researcher, college & career coach, and helped bootstrap a Florida non-profit education program. In her spare time Autumn loves hiking, amateur photography, and having dance parties with her 4 year old.', 'Autumn is a reformed academic with a passion for democratizing education and helping students meet their potential.'],
},
{
  id: 5,
  name: 'Bee Quesada',
  profession: 'STUDENT SUCCESS',
  image: ['images/Screenshot (21).png ', 'images/five.jpg'],
  discretion: ['Based in the heart of Central America, Bee is a language-loving nerd with a deep passion for education and a service mindset. Her background is in customer experience, people management, and learning & development. In her free time, Bee can be found reading post-apocalyptic literature and thrifting for vintage 90s fashion.', 'Based in the heart of Central America, Bee is a language-loving nerd with a deep passion for education and a service mindset.'],
},
];

const team = document.querySelector('.team-box');

window.onload = function win() {
  function boredmembers() {
    teammembers.forEach((teammembers) => {
      team.innerHTML += `
      <div class="mobile-version">
      <div class="team-profile">
            <div class="image-box">
                    <img class="square-img" src="/images/Screenshot (12).png" alt="">
                <img class="team-image"src="${teammembers.image[1]}" alt="${teammembers.name} image">
            </div>
          <div class="minebox">
            <div class="team-name"><h4>${teammembers.name}</h4>
            <p>${teammembers.profession}</p></div>
            
            <p>${teammembers.discretion[1]}</p></div></div></div>

            <div class="desktop-version">
      <div class="team-profile">
                <div class="image-box">
                    <img class="square-img" src="images/Screenshot (12).png" alt="">
                <img class="team-image"src="${teammembers.image[0]}" alt="${teammembers.name} image">
          </div>
          <div class="minebox">
          <div class="team-name"><h4>${teammembers.name}</h4>
            <p>${teammembers.profession}</p>
            </div>
            <p>${teammembers.discretion[0]}</p></div></div></div>
    `;
    });
  }
  boredmembers();
};
