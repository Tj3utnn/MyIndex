// Variation: 1 = N, 2 = G, 3 = RB, 4 = SN, 5 = SG, 6 = SRB
const items = [
  { name: 'Soon', img: 'noicon.png', category: 'Work in progress', power: 5, variation: 1 }
];

const itemGrid = document.getElementById('itemGrid');
const searchBar = document.getElementById('searchBar');
const sortPowerButton = document.getElementById('sortPower');
const sortNameButton = document.getElementById('sortName');
const sortCategoryButton = document.getElementById('sortCategory');
const sortVariationButton = document.getElementById('sortVariation');

function populateItems(itemsToDisplay) {
  itemGrid.innerHTML = '';
  itemsToDisplay.forEach(item => {
    const itemElement = document.createElement('div');
    itemElement.classList.add('item');
    if (item.variation == 1) {
      itemElement.id = 'Normal';
    } else if (item.variation == 2) {
      itemElement.id = 'Gold';
    } else if (item.variation == 3) {
      itemElement.id = 'Rainbow';
    } else if (item.variation == 4) {
      itemElement.id = 'Shiny';
    } else if (item.variation == 5) {
      itemElement.id = 'ShinyGold';
    } else if (item.variation == 6) {
      itemElement.id = 'ShinyRainbow';
    }


    const imgElement = document.createElement('img');
    if (item.img == 'noicon.png') {
      imgElement.src = item.name + '.webp';
    } else {
      imgElement.src = item.img;
    }
    itemElement.appendChild(imgElement);

    if (item.variation == 4 || item.variation == 5 || item.variation == 6) {
      const shinyEffectDiv = document.createElement('div');
      shinyEffectDiv.id = 'ShinyEffect';
      shinyEffectDiv.style.position = 'absolute';
      shinyEffectDiv.style.top = '0';
      shinyEffectDiv.style.left = '0';
      shinyEffectDiv.style.width = '100%';
      shinyEffectDiv.style.height = '100%';
      itemElement.appendChild(shinyEffectDiv);
    }

    const nameElement = document.createElement('p');
    if (item.variation == 1) {
      nameElement.classList.add('item-name');
      nameElement.innerText = `\n${item.name}\n(${item.category})`
    } else if (item.variation == 2) {
      nameElement.classList.add('item-name');
      nameElement.innerText = `gold\n${item.name}\n(${item.category})`;
    } else if (item.variation == 3) {
      nameElement.classList.add('item-name');
      nameElement.innerText = `rainbow\n${item.name}\n(${item.category})`;
    } else if (item.variation == 4) {
      nameElement.classList.add('item-name');
      nameElement.innerText = `shiny \n${item.name}\n(${item.category})`;
    } else if (item.variation == 5) {
      nameElement.classList.add('item-name');
      nameElement.innerText = `shiny gold\n${item.name}\n(${item.category})`;
    } else if (item.variation == 6) {
      nameElement.classList.add('item-name');
      nameElement.innerText = `shiny rainbow\n${item.name}\n(${item.category})`;
    }


    itemElement.appendChild(nameElement);
    itemGrid.appendChild(itemElement);
  });
}

function sortItemsByPower() {
  items.sort((a, b) => a.power - b.power);
  populateItems(items);
}

function sortItemsByName() {
  items.sort((a, b) => a.name.localeCompare(b.name));
  populateItems(items);
}

function sortItemsByCategory() {
  items.sort((a, b) => a.category.localeCompare(b.category));
  populateItems(items);
}

function sortItemsByVariation() {
  items.sort((a, b) => a.variation - b.variation);
  populateItems(items);
}

function searchItems() {
  const query = searchBar.value.toLowerCase();
  const filteredItems = items.filter(item =>
    `${item.name} (${item.category})`.toLowerCase().includes(query)
  );
  populateItems(filteredItems);
}

sortPowerButton.addEventListener('click', sortItemsByPower);
sortNameButton.addEventListener('click', sortItemsByName);
sortCategoryButton.addEventListener('click', sortItemsByCategory);
sortVariationButton.addEventListener('click', sortItemsByVariation);
searchBar.addEventListener('input', searchItems);

document.addEventListener('DOMContentLoaded', () => {
  sortItemsByName();
  sortItemsByPower();
});

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.menu button, .joinme-button');

  buttons.forEach(button => {
    button.addEventListener('click', function() {
      const link = button.getAttribute('data-link');
      if (link) {
        const linkOrigin = new URL(link, window.location.href).origin;
        const currentOrigin = window.location.origin;
        if (linkOrigin !== currentOrigin) {
          window.open(link, '_blank');
        } else {
          window.location.href = link;
        }
      }
    });
  });
});

