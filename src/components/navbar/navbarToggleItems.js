const navbarToggleItems = [
  {
    id: 1,
    name: "About",
    itemClass: "nav-item",
    a: {
      class: "nav-link",
      link: "#about",
    },
    ul: {
      class: "",
      link: "",
    },
  },
  {
    id: 2,
    name: "Collections",
    itemClass: "nav-item dropdown",
    a: {
      class: "nav-link dropdown-toggle",
      link: "#",
      id: "navbarDropdown",
      role: "button",
      bsSetting: "dropdown",
      ariaSetting: "false",
    },
    ul: {
      class: "dropdown-menu",
      ariaLabel: "navbarDropdown",
    },
  },
  {
    id: 3,
    name: "Steps",
    itemClass: "nav-item",
    a: {
      class: "nav-link",
      link: "#steps",
    },
    ul: {
      class: "",
      link: "",
    },
  },

  {
    id: 4,
    name: "Contact",
    itemClass: "nav-item",
    a: {
      class: "nav-link",
      link: "#footer",
    },
    ul: {
      class: "",
      link: "",
    },
  },
  {
    id: 5,
    name: "Sign In",
    itemClass: "nav-item",
    a: {
      class: "nav-link",
      link: "",
    },
    ul: {
      class: "",
      link: "",
    },
  },
];

export default navbarToggleItems;
