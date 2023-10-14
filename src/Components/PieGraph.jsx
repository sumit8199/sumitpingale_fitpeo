import React from "react";
import "../CSS files/PieGraph.css";
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 200 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const PieGraph = () => {
  return (
    <div className="pie-content">
        
    <h3>Customers</h3>
    <h4>Customers That Buy Product</h4>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx={145}
          cy={180}
          innerRadius={80}
          outerRadius={100}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default PieGraph;
