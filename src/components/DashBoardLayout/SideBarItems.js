export const sideBarItems = [
  {
    name: "Products",
    links: [
      {
        name: "Create",
        pathname: "/products",
        state: "createProduct",
      },
      {
        name: "All Products",
        pathname: "/products",
        state: "products",
      },
    ],
  },
  {
    name: "Organization Management",
    links: [
      {
        name: "Create",
        pathname: "/organizations",
        state: "createOrganization",
      },
      {
        name: "All Organizations",
        pathname: "/organizations",
        state: "organizations",
      },
    ],
  },
  {
    name: "Orders",
    links: [
      {
        name: "Create",
        pathname: "/orders",
        state: "createOrder",
      },
      {
        name: "All Orders",
        pathname: "/orders",
        state: "orders",
      },
      // {
      //   name: "Seller Orders",
      //   routeTo: "/orders/sellerOrders",
      // },
    ],
  },
];
