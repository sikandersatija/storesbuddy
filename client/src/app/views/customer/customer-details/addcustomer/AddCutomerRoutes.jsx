import { MatxLoadable } from "matx";

const AddCustomer = MatxLoadable({
  loader: () => import("./AddCustomer")
});


const addCustomerRoutes = [
  {
    path: "/customer/addcustomer",
    component: AddCustomer
  },
 
];

export default addCustomerRoutes;
