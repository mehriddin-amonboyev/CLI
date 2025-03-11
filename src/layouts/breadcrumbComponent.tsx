import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";

export const BreadcrumbComponent = () => {
  const location = useLocation();

  const pathSnippets = location.pathname.split("/").filter((item) => item);

  const breadcrumbItems = pathSnippets.map((item, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;

    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{item === "app" ? "" : item}</Link>
      </Breadcrumb.Item>
    );
  });

  return (
    <Breadcrumb style={{ margin: "16px 0" }}>
      {breadcrumbItems}
    </Breadcrumb>
  );
};
