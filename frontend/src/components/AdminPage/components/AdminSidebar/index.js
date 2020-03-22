import React, { useState } from "react";
import { ReactComponent as EyeSvg } from "../../../../assets/eye.svg";
import { ReactComponent as PersonSvg } from "../../../../assets/person.svg";
import { ReactComponent as CircleSvg } from "../../../../assets/circle.svg";

import "./admin-sidebar.scss";

const sidebarTabs = [
  { name: "Dashboard", svg: <EyeSvg /> },
  { name: "Cazuri red flag", svg: <PersonSvg /> },
  { name: "Toti utilizatorii", svg: <PersonSvg /> },
  { name: "Rapoarte trimise", svg: <CircleSvg /> }
];

const AdminSidebar = () => {
  const [activesidebar, setActiveSidebar] = useState("Dashboard");

  const handleChangeTab = event => {
    setActiveSidebar(event.currentTarget.dataset.tab);
  };

  return (
    <ul className="admin-sidebar-menu">
      {sidebarTabs.map((tab, i) => (
        <li
          key={i}
          data-tab={tab.name}
          className={activesidebar === tab.name && "active"}
          onClick={handleChangeTab}
        >
          {tab.svg} <span>{tab.name}</span>
        </li>
      ))}
    </ul>
  );
};

export default AdminSidebar;
