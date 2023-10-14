import React from "react";
import "../CSS files/BarGraph.css";
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from "recharts";
const BarGraph = () => {
  const data = [
    {
      name: "Jan",
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Feb",
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Mar",
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Apr",
      pv: 9800,
      amt: 2290,
    },
    {
      name: "May",
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Jun",
      pv: 4800,
      amt: 2181,
    },
    {
      name: "July",
      pv: 900,
      amt: 2500,
    },
    {
      name: "Aug",
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Sept",
      pv: 4800,
      amt: 2100,
    },
    {
      name: "Oct",
      pv: 3000,
      amt: 2100,
    },
    {
      name: "Nov",
      pv: 4000,
      amt: 2100,
    },
    {
      name: "Dec",
      pv: 4030,
      amt: 2100,
    },
  ];
  return (
    <div className="bargraph-container">
      <h3>Overview</h3>
      <h4>monthly Earnings</h4>
      <div className="dropbox">
        <label for="yearparts"></label>

        <select name="yearparts" id="yearparts">
          <option value="Quarterly">Quarterly</option>
          <option value="Montly">Montly</option>
          <option value="Yearly">Yearly</option>
        </select>
      </div>
      <div className="charts">
        <ResponsiveContainer >
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Bar dataKey="pv" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarGraph;
