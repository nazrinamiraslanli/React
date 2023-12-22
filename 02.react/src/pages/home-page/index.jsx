import React from "react";
import Table from "../../components/table";

const HomePage = (props) => {
  let { users } = props;
  return (
    <div id="home-page">
      <div className="container">
        <div className="home-page">This is HOMEPAGE</div>
        <br />
        <h3>USERS TABLE</h3>
        <br />
        <Table users={users} />
      </div>
    </div>
  );
};

export default HomePage;