import React from "react";
import { Redirect } from "react-router-dom";

import dashboardRoutes from "./views/dashboard/DashboardRoutes";
import sessionRoutes from "./views/sessions/SessionRoutes";

import productsDetailsRoutes from "./views/inventory/products-details/ProductDetailsRoutes";
import productsCategoryRoutes from "./views/inventory/category/CategoryRoutes";
import productsSubcategoryRoutes from "./views/inventory/subcategory/SubcategoryRoutes";
import productsBrandRoutes from "./views/inventory/brand/BrandRoutes";
import addProductsRoutes from "./views/inventory/add-product/AddProductRoutes";
import SKUAdditonRoutes from "./views/inventory/sku-addition/SKUAdditionRoutes";
import addCustomerRoutes from "./views/customer/customer-details/addcustomer/AddCutomerRoutes";
import localityListRoutes from "./views/localities/localitylist/LocalityListRoutes";
import cityListRoutes from "./views/localities/citylist/CityListRoutes";
import warehouseListRoutes from "./views/localities/warehouselist/WarehouseRoutes";
import hubListRoutes from "./views/localities/hublist/HubListRoutes";
import storeListRoutes from "./views/localities/storelist/StoreListRoutes";

const redirectRoute = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/dashboard/analytics" />
  }
];

const errorRoute = [
  {
    component: () => <Redirect to="/session/404" />
  }
];

const routes = [
  ...sessionRoutes,
  ...dashboardRoutes,
  ...redirectRoute,
  ...productsDetailsRoutes,
  ...productsCategoryRoutes,
  ...productsSubcategoryRoutes,
  ...productsBrandRoutes,
  ...addProductsRoutes,
  ...SKUAdditonRoutes,
  ...addCustomerRoutes,
  ...localityListRoutes,
  ...cityListRoutes,
  ...warehouseListRoutes,
  ...hubListRoutes,
  ...storeListRoutes,
  ...errorRoute,
];

export default routes;
