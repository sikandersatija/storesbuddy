export const navigations = [
  {
    name: "Dashboard",
    path: "/dashboard/analytics",
    icon: "dashboard"
  },
  {
    name: "Inventory",
    icon: "description",
    children: [
      {
        name: "Stock Management",
        path: "/products/productsDetails",
        iconText: "B"
      },
      {
        name: "Category",
        path: "/products/category",
        iconText: "B"
      },
      {
        name: "Subcategory",
        path: "/products/subcategory",
        iconText: "B"
      },
      {
        name: "Brand",
        path: "/products/brand",
        iconText: "B"
      },
    ]
  },
  {
    name: "Customers",
    icon: "people_outline",
    children: [
      {
        name: "Add Customer",
        path: "/customer/addcustomer",
        icon: "person_add",
      },
    ]
  },

  {
    name: "Localities",
    icon: "location_on",
    children: [
      {
        name: "City List",
        path: "/locality/citylist",
        iconText: "B"
      },
      {
        name: "Warehouse List",
        path: "/locality/warehouse",
        iconText: "B"
      },
      {
        name: "Hub List",
        path: "/locality/hublist",
        iconText: "B"
      },
      {
        name: "Store List",
        path: "/locality/storelist",
        iconText: "B"
      },
      {
        name: "Locality List",
        path: "/locality/localitylist",
        iconText: "B"
      },
    ]
  }

];
