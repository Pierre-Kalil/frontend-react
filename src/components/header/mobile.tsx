import "./styles.scss";
import React, { useState } from "react";
import Options from "./options";
import { TiThMenuOutline } from "react-icons/ti";
import { RiMenuFoldFill } from "react-icons/ri";
import { RiMenuUnfoldFill } from "react-icons/ri";

export const Mobile = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="icon" onClick={() => setOpen(!open)}>
        {open ? <RiMenuUnfoldFill /> : <RiMenuFoldFill />}
      </div>
      <Options open={open} />
    </>
  );
};
