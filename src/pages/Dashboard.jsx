import React from "react";
import { Outlet } from "react-router-dom";
import { BsFileMedical } from "react-icons/bs";
import { FaRegListAlt, FaRegEdit } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";
import { Link } from "react-router-dom";

const dashboardRouteList = [
  {
    icon: <FaRegListAlt className="w-5 h-5" />,
    pathUrl: "/productList",
    pathName: "Product list",
  },
  {
    icon: <FaRegEdit className="w-5 h-5" />,
    pathUrl: "/add-product",
    pathName: "Add Product",
  },
  {
    icon: <BsFileMedical className="w-5 h-5" />,
    pathUrl: "/orderList",
    pathName: "Order List",
  },
  {
    icon: <HiOutlineUsers className="w-5 h-5" />,
    pathUrl: "/customers",
    pathName: "Customers",
  },
];

const DashBoard = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* Page content here */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          {dashboardRouteList.map((dashboardRoute) => (
            <li>
              <Link to={dashboardRoute.pathUrl}>
                {dashboardRoute.icon} {dashboardRoute.pathName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
