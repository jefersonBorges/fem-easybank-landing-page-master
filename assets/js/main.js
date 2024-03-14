const attributes = {
  mobile: 'mobile',
  active: 'active',
  darken: 'darken'
}

const elements = {
  hamburgerMenu: document.querySelector('#hamburger-menu'),
  navBar: document.querySelector('#navBar'),
  navLinks: document.querySelectorAll('.nav-link'),
  main: document.querySelector('main'),
  footer: document.querySelector('footer')
}

const breakpoints = {
  mobile: 880, //55rem
}

elements.hamburgerMenu.addEventListener('click', () => {
  toggleMobileMode()
})

elements.navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    setTimeout(() => {toggleMobileMode()}, 250)
  })
})

window.addEventListener('resize', (e) => {
  if(e.target.innerWidth >= breakpoints.mobile) {
    if(elements.hamburgerMenu.hasAttribute(attributes.active)){
      toggleMobileMode()
    }
  }
})

const toggleMobileMode = () => {
  elements.hamburgerMenu.toggleAttribute(attributes.active)
  elements.navBar.toggleAttribute(attributes.mobile)
  elements.main.toggleAttribute(attributes.darken)
  elements.footer.toggleAttribute(attributes.darken)
}
