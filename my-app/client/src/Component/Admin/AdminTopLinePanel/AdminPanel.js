import React, { useContext, useEffect } from "react";
import "antd/dist/antd.css";
import { ButtonSc } from "./AdminPanelStyle";
import { AdminContext } from "../../Context";
import { Link } from "react-router-dom"

function AdminPanel() {
  const { login, setLogin, userAdmin, setUserAdmin } = useContext(
    AdminContext
  );

  useEffect(()=>{
    if (userAdmin === true) setLogin(true)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userAdmin])

  if (userAdmin === true) {
    return (
        <ButtonSc 
          onClick={()=>{
            localStorage.removeItem("lpsData")
            setUserAdmin(false)
            setLogin(false)
          }}
        >
          выйти
          <Link to="/"/>
        </ButtonSc>
    );
  } else if (userAdmin === false && login === false) {
    return (
      <ButtonSc
        onClick={() => {
          setLogin(true);
        }}
      >
        войти
      </ButtonSc>
    );
  } else {
    return null;
  }
}

export default AdminPanel;
