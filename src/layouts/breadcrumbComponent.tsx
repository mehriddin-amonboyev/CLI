import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";

export const BreadcrumbComponent: React.FC = () => {
  const location = useLocation(); // Hozirgi pathni olish

  // Pathni ajratib, har bir segment uchun breadcrumb yaratish
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const breadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{url.replace("/app", "").replace("/",'').replace("/",'')}</Link>
      </Breadcrumb.Item>
    );
  });

  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      {/* <Breadcrumb.Item>
        <Link to="/">Home</Link>
      </Breadcrumb.Item> */}
      {breadcrumbItems}
    </Breadcrumb>
  );
};
