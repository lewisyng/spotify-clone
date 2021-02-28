import React from "react";
import "./Header.sass";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";

function Header() {
  const state = useSelector((state) => state);
  return (
    <div className="header">
      <div className="header__avatar">
        <Avatar
          src={state.user?.images[0]?.url}
          alt={state.user?.display_name}
        />
      </div>
      <div className="header__name">Lewis Young</div>
    </div>
  );
}

export default Header;
