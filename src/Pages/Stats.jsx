import React, { useContext } from 'react';
import { InteractionContext } from '../Context/InteractionProvider';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';

const Stats = () => {
  const {interactions}=useContext(InteractionContext);
  const messageData= interactions.filter((item) => item.type == 'text');
  const calledData= interactions.filter((item) => item.type == 'call');
  const videoData= interactions.filter((item) => item.type == 'video');
     const data = [
    { name: "message", value: messageData.length, fill: "#0088FE" },
    { name: "call", value: calledData.length, fill: "#FF8042" },
    { name: "video call", value: videoData.length, fill: "#008000" },
  ];

  return (
    <div className=" my-10 shadow p-10 rounded-md border border-slate-300 container mx-auto">
      <h2 className="font-semibold text-3xl mb-16 text-center">
        Friendship Analytics
      </h2>
      <PieChart
        style={{
          width: "50%",
          maxWidth: "300px",
          maxHeight: "60vh",
          margin: "auto",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          // Corner radius is the rounded edge of each pie slice
          cornerRadius="50%"
          fill="#8884d8"
          // padding angle is the gap between each pie slice
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        <Legend />
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Stats;
