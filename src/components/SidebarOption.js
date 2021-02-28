import React from "react";
import "./SidebarOption.sass";

function SidebarOption({ title, Icon }) {
  return (
    <div className="sidebarOption">
      <div className="sidebarOption__icon">{Icon}</div>
      <p>{title}</p>
    </div>
  );
}

export default SidebarOption;
