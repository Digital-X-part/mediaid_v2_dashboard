import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../pages/AddProduct";
import Dashboard from "../pages/Dashboard";
import Customers from "../pages/customers/Customers";
import CustomerDetails from "../pages/customers/CustomerDetails";
import OrderList from "../pages/orders/OrderList";
import OrderDetails from "../pages/orders/OrderDetails";
import ProductList from "../pages/products/ProductList";
import ProductDetails from "../pages/products/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/add-product",
    element: <AddProduct />,
  },
  {
    path: "/dashboard/customers",
    element: <Customers />,
  },
  {
    path: "/dashboard/customers/:id",
    element: <CustomerDetails />,
  },
  {
    path: "/dashboard/orderList",
    element: <OrderList />,
  },
  {
    path: "/dashboard/orderList/:id",
    element: <OrderDetails />,
  },
  {
    path: "/dashboard/productList",
    element: <ProductList />,
  },
  {
    path: "/dashboard/productList/:id",
    element: <ProductDetails />,
  },
]);

export default router;
