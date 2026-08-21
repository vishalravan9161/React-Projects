// import React from 'react'

// import { useState } from "react"

const Header = ({ changeUser, data }) => {
  // console.log(data);

  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    // window.location.reload()
    changeUser("");
  };
  return (
    <>
      <div className="flex justify-between mb-2 ">
        <h2 className="text-xl font-medium">
          Hello <br />
          <span className="font-semibold text-3xl">
            {data?.firstName || "Admin"}👋{" "}
          </span>
        </h2>
        <button
          onClick={logOutUser}
          className="bg-red-500 text-sm cursor-pointer active:scale-95 h-8 w-20 rounded-md"
        >
          Log Out
        </button>
      </div>
    </>
  );
};

export default Header;
