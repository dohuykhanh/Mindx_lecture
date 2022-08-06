import React from "react";
import {useNavigate, Outlet} from "react-router-dom"

const Home = () => {
  const navigation = useNavigate();
  const navigateToDetail = () => {
    navigation("/detail");
  };
  return (<div>
      This is Home page
        <button onClick={() => navigateToDetail()}>Navigate to Detail</button>
        <Outlet />
  </div> );
};

export default Home;
