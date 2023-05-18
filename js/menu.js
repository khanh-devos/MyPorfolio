function mobileProjects() {
  return {
    project0: {
      title: 'Multi-Post Stories',
      img: './imgs/works.png',
      tech: ['CSS', 'HTML', 'Bootstrap', 'Ruby'],
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    },
    project1: {
      title: 'Profesional Art Printing Data',
      img: './imgs/works-bg.png',
      tech: ['HTML', 'Bootstrap', 'Ruby'],
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    },
    project2: {
      title: 'Profesional Art Printing Data',
      img: './imgs/works-bg.png',
      tech: ['HTML', 'Bootstrap', 'Ruby'],
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    },
    project3: {
      title: 'Profesional Art Printing Data',
      img: './imgs/works-bg.png',
      tech: ['HTML', 'Bootstrap', 'Ruby'],
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    },
    project4: {
      title: 'Profesional Art Printing Data',
      img: './imgs/works-bg.png',
      tech: ['HTML', 'Bootstrap', 'Ruby'],
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    },
    project5: {
      title: 'Profesional Art Printing Data',
      img: './imgs/works-bg.png',
      tech: ['HTML', 'Bootstrap', 'Ruby'],
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    },
    project6: {
      title: 'Profesional Art Printing Data',
      img: './imgs/works-bg.png',
      tech: ['HTML', 'Bootstrap', 'Ruby'],
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's ",

    },
  };
}

function desktopProjects() {
  return {
    project0: {
      title: '',
      img: './imgs/box1.png',
      tech: [],
      description: '',
    },
    project1: {
      title: 'Data Dashboard Healthcare',
      img: './imgs/box-2.png',
      tech: ['HTML', 'Bootstrap', 'Ruby'],
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    },
    project2: {
      title: 'Website Portfolio',
      img: './imgs/box-3.png',
      tech: ['HTML', 'Bootstrap', 'Ruby'],
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    },
    project3: {
      title: 'Profesional Art Printing Data More',
      img: './imgs/works-bg.png',
      tech: ['HTML', 'Bootstrap', 'Ruby'],
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    },
    project4: {
      title: 'Data Dashboard Healthcare',
      img: './imgs/box-2.png',
      tech: ['HTML', 'Bootstrap', 'Ruby'],
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    },
    project5: {
      title: 'Website Portfolio',
      img: './imgs/box-3.png',
      tech: ['HTML', 'Bootstrap', 'Ruby'],
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. Has been the industry's standard.",
    },
  };
}

function mobileCards() {
  const projects = mobileProjects();
  delete projects.project0;

  const cards = Object.keys(projects).map((item) => {
    const project = projects[item];

    return `<div class="works-box" style="background: url(${project.img}) center center no-repeat; background-size: 100% 100%;">

    <h2>${project.title}</h2>
    <p>${project.description}</p>

    <ul class="nav-buttons box-nav">
      <li><a href="">${project.tech[0]}</a></li>
      <li><a href="">${project.tech[1]}</a></li>
      <li><a href="">${project.tech[2]}</a></li>
    </ul>

    <button id="project1" onclick="clickedMobileBtn(this)" class="btn-type-1 box-btn">See Project</button>
  </div>`;
  });
  return cards;
}

function desktopCards() {
  const projects = desktopProjects();

  const cards = Object.keys(projects).map((item) => {
    const project = projects[item];

    return `<div class="works-box" 
    style="background: url(${project.img}) center center no-repeat; background-size: cover;"
    id="${item}"
    onclick="clickedDesktopBtn(this)"
    >
    <h2>${project.title}</h2>
    <p>${project.description}</p>

    <ul class="nav-buttons box-nav">
      ${project.tech[0] === undefined ? '' : `<li><a href="">${project.tech[0]}</a></li>`}
      ${project.tech[1] === undefined ? '' : `<li><a href="">${project.tech[1]}</a></li>`}
      ${project.tech[2] === undefined ? '' : `<li><a href="">${project.tech[2]}</a></li>`}
    </ul>

    ${item === 'project0' ? '<img width=30 height=30 src="./imgs/socialIcons/Shape.png" alt="cursor">' : ''}

    ${item === 'project0' ? '<button class="btn-type-1 box-btn">See Project</button>' : ''}
  </div> `;
  });
  return cards;
}

window.onload = () => {
  document.querySelector('#works-box-container').innerHTML = mobileCards().join('');
  document.querySelector('#works-box-container-desktop').innerHTML = desktopCards().join('');
};

function toggleHamburgerBtn() {
  const mobileMenu = document.querySelector('#mobile-menu');
  const img = document.querySelector('#menu-btn img');
  const logo = document.querySelector('#header a');

  // expression
  if (mobileMenu.style.display === 'none' || !mobileMenu.style.display) {
    mobileMenu.style.display = 'block';
    img.src = './imgs/x.svg';
    logo.style.opacity = 0;
  } else {
    mobileMenu.style.display = 'none';
    img.src = './imgs/IconMenu.svg';
    logo.style.opacity = 1;
  }
}

toggleHamburgerBtn();

// popup window
function showPopup(project) {
  // dynamic the tech
  const lis = project.tech.map((tech) => `<li><a href="">${tech}</a></li>`);

  // setup the popup
  return `<div id="popup">
  <div id="popup-content">
    <div id="popup-title-X">
      <h3>${project.title}</h3>
      <button id="popup-X-btn" onclick="hidePopup()">
        <img src="./imgs/x.svg" alt="close button">
      </button>
    </div>

    <div id="popup-skill-btns">
      <ul class="nav-buttons">
        ${lis.join('')}
      </ul>
    </div>

    <div id="popup-info">
      <img width="100%" src="${project.img}" alt="project-image">

      <div id="popup-info-details">
        <p>${project.description}</p>

        <div id="function-btns">
          <button class="btn-type-1">
            See Live
            <img width="20" src="./imgs/socialIcons/popupIcon.svg" alt="popupIcon">
          </button>
          </button>
          <button class="btn-type-1">
            See Source
            <img width="20" src="./imgs/socialIcons/gitIcon.svg" alt="gitIcon"></button>
        </div>
      </div>
    </div>
  </div>
</div>`;
}

function clickedMobileBtn(btn) {
  const body = document.querySelector('body');
  body.style.overflow = 'hidden';

  // popup
  const projects = mobileProjects();
  const matchProject = projects[btn.id];
  const worksBox = document.querySelector('#popup-window');
  worksBox.innerHTML = showPopup(matchProject);
}

function clickedDesktopBtn(btn) {
  const body = document.querySelector('body');
  body.style.overflow = 'hidden';

  // popup
  const projects = desktopProjects();
  const matchProject = projects[btn.id];
  const worksBox = document.querySelector('#popup-window');
  worksBox.innerHTML = showPopup(matchProject);
}

clickedMobileBtn(null);
clickedDesktopBtn(null);

// Hide the popup
function hidePopup() {
  document.querySelector('body').style.overflow = 'auto';
  document.querySelector('#popup-window').innerHTML = '';
}

hidePopup();