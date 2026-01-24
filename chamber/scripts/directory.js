const membersContainer = document.querySelector('#members');
const gridBtn = document.querySelector('#grid');
const listBtn = document.querySelector('#list');
const listHeader = document.querySelector('.list-header');

/* =======================
   VIEW TOGGLE (SINGLE SET)
======================= */
function setGridView() {
  membersContainer.classList.add('grid');
  membersContainer.classList.remove('list');
  listHeader.classList.remove('active');
}

function setListView() {
  membersContainer.classList.add('list');
  membersContainer.classList.remove('grid');
  listHeader.classList.add('active');
}

gridBtn.addEventListener('click', setGridView);
listBtn.addEventListener('click', setListView);

/* =======================
   FETCH MEMBERS (ASYNC)
======================= */
async function getMembers() {
  try {
    const response = await fetch('data/members.json');
    if (!response.ok) throw new Error('Failed to fetch members');
    const members = await response.json();
    displayMembers(members);
  } catch (error) {
    console.error(error);
  }
}




/* =======================
   DISPLAY MEMBERS
======================= */
function displayMembers(members) {
  membersContainer.innerHTML = '';

  const fragment = document.createDocumentFragment();

  members.forEach(member => {
    const card = document.createElement('div');
    card.className = 'member-card';

    const title = document.createElement('h2');
    title.textContent = member.name;

    const imgWrapper = document.createElement('div');
    imgWrapper.className = 'img-wrapper';

    const img = document.createElement('img');
    img.src = `images/${member.image}`;
    img.alt = `${member.name} logo`;
    img.width = 300;
    img.height = 160;
    img.loading = 'lazy';

    imgWrapper.appendChild(img);

    const address = document.createElement('p');
    address.textContent = member.address;

    const phone = document.createElement('p');
    phone.textContent = member.phone;

    const link = document.createElement('a');
    link.href = member.website;
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = 'Visit Website';

    card.append(title, imgWrapper, address, phone, link);
    fragment.appendChild(card);
  });

  membersContainer.appendChild(fragment);
}

/* =======================
   INIT
======================= */
setGridView();
getMembers();
