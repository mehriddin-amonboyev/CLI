// import {
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
// } from "@ant-design/icons";

export const items = [
  {
    path: "/",
    title: "Home",
    // icon: UserOutlined,
  },
  {
    path: "/products",
    title: "Products",
    // icon: UploadOutlined,
    children: [
      {
        path: "/create-products",
        title: "Create product",
      },
      {
        path: "/edit-products",
        title: "Edit product",
      },
    ],
  },
  {
    path: "/categoryes",
    title: "Categoryes",
    // icon: VideoCameraOutlined,
  },
];
