const initialState = {
  navItems: [
      {
          title: "Home",
          id: 1,
          path: "/"
      },
      {
          title: "Our Sponsors",
          id: 2,
          path: "/sponsors"
      },
      {
          title: "About Us",
          id: 3,
          path: "/aboutus"
      },
      {
          title: "SVA Programs",
          id: 4,
          path: "/programs"
      },
      {
          title: "Parents",
          id: 5,
          path: "/parents"
      },
      {
          title: "Admissions",
          id: 6,
          path: "/admissions"
      },
      {
          title: "Contact Us",
          id: 7,
          path: "/contactus"
      },
      {
          title: "Zakat Donations",
          id: 8,
          path: "/donations"
      }
  ]
};

export default (state = initialState, action) => {
    return state;
};
