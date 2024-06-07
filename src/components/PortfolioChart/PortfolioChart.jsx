import React from "react";
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import "./PortfolioChart.css";

export const PortfolioChart = (props) => {
  // const data = [
  //   { name: "Group A", value: 400, color: "blue" },
  //   { name: "Group B", value: 300, color: "black" },
  //   { name: "Group C", value: 300, color: "blue" },
  //   { name: "Group D", value: 200, color: "red" },
  //   { name: "Group E", value: 278, color: "blue" },
  //   { name: "Group F", value: 189, color: "white" },
  // ];
  const data = props.chartData;

  // const renDerCustomizedLabel = (
  //   data,
  //   total = props.portfolioValue,
  //   cx = 250,
  //   cy = 130,
  //   midAngle,
  //   innerRadius = 80,
  //   outerRadius = 120
  // ) => {
  //   let percentValue = (data.value / total) * 100;
  //   let percentString =
  //     percentValue.toFixed(2).replace(".", ",").toString() + "%";
  //   let labetText = `${data.symbol} (${percentString})`;
  //   const RADIAN = Math.PI / 180;
  //   // eslint-disable-next-line
  //   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  //   // eslint-disable-next-line
  //   const x = cx + radius * Math.cos(-midAngle * RADIAN);
  //   console.log("cx", cx);
  //   // eslint-disable-next-line
  //   const y = cy + radius * Math.sin(-midAngle * RADIAN);

  //   return (
  //     <text
  //       x={x}
  //       y={y}
  //       fill="white"
  //       textAnchor={x > cx ? "start" : "end"}
  //       dominantBaseline="central"
  //     >
  //       {labetText}
  //     </text>
  //   );
  // };

  return (
    <ResponsiveContainer
      className="ResponsiveContainer"
      width="90%"
      height="90%"
    >
      <PieChart>
        <Pie
          dataKey="value"
          nameKey="symbol"
          isAnimationActive={false}
          outerRadius={110}
          innerRadius={80}
          data={data}
          cx="50%"
          cy="50%"
          label={({
            cx,
            cy,
            midAngle,
            innerRadius,
            outerRadius,
            value = data.value,
            symbol = data.symbol,
            data,
            total = props.portfolioValue,
          }) => {
            const RADIAN = Math.PI / 180;
            // eslint-disable-next-line
            const radius = innerRadius + (outerRadius - innerRadius) * 1.8;
            // eslint-disable-next-line
            const x = cx + radius * Math.cos(-midAngle * RADIAN);
            // eslint-disable-next-line
            const y = cy + radius * Math.sin(-midAngle * RADIAN);

            let percentValue = (value / total) * 100;
            let percentString =
              percentValue.toFixed(2).replace(".", ",").toString() + "%";
            let labetText = `${symbol} (${percentString})`;

            return (
              <text
                x={x}
                y={y}
                fill="#000000"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="hanging"
              >
                {`${labetText}`}
              </text>
            );
          }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend layout="vertical" align="left" verticalAlign="middle" />
      </PieChart>
    </ResponsiveContainer>
  );
};
