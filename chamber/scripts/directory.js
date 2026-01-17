const membersContainer = document.querySelector('#members');
const gridBtn = document.querySelector('#grid');
const listBtn = document.querySelector('#list');


const listHeader = document.querySelector('.list-header');

gridBtn.addEventListener('click', () => {
  membersContainer.classList.add('grid');
  membersContainer.classList.remove('list');
  listHeader.classList.remove('active');
});

listBtn.addEventListener('click', () => {
  membersContainer.classList.add('list');
  membersContainer.classList.remove('grid');
  listHeader.classList.add('active');
});



async function getMembers() {
const response = await fetch('data/members.json');
const data = await response.json();
displayMembers(data);
}


function displayMembers(members) {
membersContainer.innerHTML = '';
members.forEach(member => {
const card = document.createElement('div');
card.classList.add('member-card');


card.innerHTML = `
  <h2>${member.name}</h2>
  <div class="img-wrapper">
    <img src="images/${member.image}" alt="${member.name} logo" loading="lazy">
  </div>
  <p>${member.address}</p>
  <p>${member.phone}</p>
  <a href="${member.website}" target="_blank" rel="noopener">Visit Website</a>
`;



membersContainer.appendChild(card);
});
}


gridBtn.addEventListener('click', () => {
membersContainer.classList.add('grid');
membersContainer.classList.remove('list');
});


listBtn.addEventListener('click', () => {
membersContainer.classList.add('list');
membersContainer.classList.remove('grid');
});


getMembers();