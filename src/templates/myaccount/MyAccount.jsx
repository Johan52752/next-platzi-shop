import React from "react";
import MyAccountCreate from "../../containers/my-account-create/MyAccountCreate";
import MyAccountEdit from "../../containers/my-account-edit/MyAccountEdit";
import styles from "./MyAccount.module.css";

const MyAccount = () => {
  return (
    <div>
        {
            true ? (
                <MyAccountEdit />
            ) : (
                <MyAccountCreate />
            )
        }
    </div> 
  );
};

export default MyAccount;
