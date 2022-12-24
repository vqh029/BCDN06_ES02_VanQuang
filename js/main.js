let dataGlasses = [
  {
    id: "G1",
    src: "./img/g1.jpg",
    virtualImg: "./img/v1.png",
    brand: "Armani Exchange",
    name: "Bamboo wood",
    color: "Brown",
    price: 150,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? ",
  },
  {
    id: "G2",
    src: "./img/g2.jpg",
    virtualImg: "./img/v2.png",
    brand: "Arnette",
    name: "American flag",
    color: "American flag",
    price: 150,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G3",
    src: "./img/g3.jpg",
    virtualImg: "./img/v3.png",
    brand: "Burberry",
    name: "Belt of Hippolyte",
    color: "Blue",
    price: 100,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G4",
    src: "./img/g4.jpg",
    virtualImg: "./img/v4.png",
    brand: "Coarch",
    name: "Cretan Bull",
    color: "Red",
    price: 100,
    description: "In assumenda earum eaque doloremque, tempore distinctio.",
  },
  {
    id: "G5",
    src: "./img/g5.jpg",
    virtualImg: "./img/v5.png",
    brand: "D&G",
    name: "JOYRIDE",
    color: "Gold",
    price: 180,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?",
  },
  {
    id: "G6",
    src: "./img/g6.jpg",
    virtualImg: "./img/v6.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Blue, White",
    price: 120,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    id: "G7",
    src: "./img/g7.jpg",
    virtualImg: "./img/v7.png",
    brand: "Ralph",
    name: "TORTOISE",
    color: "Black, Yellow",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam.",
  },
  {
    id: "G8",
    src: "./img/g8.jpg",
    virtualImg: "./img/v8.png",
    brand: "Polo",
    name: "NATTY ICE",
    color: "Red, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim.",
  },
  {
    id: "G9",
    src: "./img/g9.jpg",
    virtualImg: "./img/v9.png",
    brand: "Coarch",
    name: "MIDNIGHT VIXEN REMIX",
    color: "Blue, Black",
    price: 120,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet.",
  },
];

const glassList = document.getElementById("vglassesList");
const glassOnModel = document.getElementById("avatar");
const glassInfo = document.getElementById("glassesInfo");

const wearGlass = (id) => {
  let img = ``;
  let in4 = ``;
  dataGlasses.map((item, index) => {
    if (id == index) {
      localStorage.setItem("glass", JSON.stringify(item));
      img = `<img src="${item.virtualImg}" alt="...">`;
      in4 = `<h3 style="margin-bottom: 10px">${item.name} - ${item.brand} (${item.color})</h3>
                <span style="background-color: #FF6464; padding: 8px 14px; border-radius: 6px">${item.price}</span>
                <span style="margin-left: 6px; color: #38E54D">Stocking</span>
                <p style="margin-top: 10px;">${item.description}</p>
            `;
    }
  });
  glassOnModel.innerHTML = img;
  glassInfo.innerHTML = in4;
  glassInfo.style.display = "block";
};

const removeGlasses = (right) => {
  let img = ``;
  let in4 = ``;
  if (right) {
    glassOnModel.innerHTML = "";
    glassInfo.innerHTML = "";
    glassInfo.style.display = "none";
  } else {
    if (JSON.parse(localStorage.getItem("glass"))) {
      let vglass = JSON.parse(localStorage.getItem("glass"));
      img = `<img src="${vglass.virtualImg}" alt="...">`;
      in4 = `<h3 style="margin-bottom: 10px">${vglass.name} - ${vglass.brand} (${vglass.color})</h3>
                <span style="background-color: #FF6464; padding: 8px 14px; border-radius: 6px">${vglass.price}</span>
                <span style="margin-left: 6px; color: #38E54D">Stocking</span>
                <p style="margin-top: 10px;">${vglass.description}</p>
            `;
      glassOnModel.innerHTML = img;
      glassInfo.innerHTML = in4;
      glassInfo.style.display = "block";
    }
  }
};

const loadGlass = () => {
  let content = ``;

  dataGlasses.map((item, index) => {
    content += `<button class="btn card" style="width: 10rem; height: 10rem; margin: 6px" onclick="wearGlass(${index})">
        <img src="${item.src}" class="card-img-top" style="object-fit: contain; height: 100%" alt="...">
      </button>`;
  });

  glassList.innerHTML = content;
};

loadGlass();
