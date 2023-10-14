import React from "react";
import {
  BsFillArchiveFill,
  BsFillGrid3X3GapFill,
  BsPeopleFill,
  BsFillBellFill,
} from "react-icons/bs";

import "../CSS files/Home.css";
import RectangleCard from "./RectangleCard";
import BarGraph from "./BarGraph";
import PieGraph from "./PieGraph";
import TableData from "./TableData";

const Home = () => {
  
  
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <RectangleCard
          title="Earning"
          price="500"
          icon={<BsFillBellFill color="#01A848"/>}
          backgroundColor="#DEFEED"
        />
        <RectangleCard
          title="Orders"
          price="300"
          icon={<BsFillArchiveFill color="#AC1FFF"/>}
          backgroundColor="#E7DBFF"
        />
        <RectangleCard
          title="Balance"
          price="300"
          icon={<BsFillGrid3X3GapFill color="#1665C4"/>}
          backgroundColor="#CCF2FF" 
        />
        <RectangleCard
          title="Total sales"
          price="300"
          icon={<BsPeopleFill color="#FE008A"/>}
          backgroundColor="#FFB1D9"
          data="38% of month"
        />
      </div>
      <div className="graph-content">
      <BarGraph/>
      <PieGraph />
      </div>
      <div>
      <TableData />
      </div> 
    </main>
  );
};

export default Home;
