"use client";

import React from "react";
import { Chart as ChartJs } from "chart.js/auto";
import { Doughnut, Line } from "react-chartjs-2";

const HandleGender = () => {
  return (
    <div className="gender_cont w-72 h-64 rounded-2xl bg-[#f6f8fb] p-3 flex flex-col">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span className="font-semibold">Gender</span>
          <span className=" text-slate-700">Till Today</span>
        </div>
        <button className=" bg-white p-1.5 rounded-lg text-[#5A6ACF] font-semibold text-sm">
          View Report
        </button>
      </div>
      <div className="h-40 w-40 p-2 mx-[auto]">
        <Doughnut
          data={{
            datasets: [
              {
                data: [60, 35, 5],
                backgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"],
                borderColor: ["#36A2EB", "#FF6384", "#FFCE56"],
              },
            ],
          }}
        />
      </div>
      <div className="flex gap-4">
        <div className="flex items-center">
          <span className="w-4 h-4 inline-block mr-1 bg-[#36A2EB] rounded-full"></span>
          <p className="text-lg font-semibold">Male</p>
        </div>
        <div className="flex items-center">
          <span className="w-4 h-4 inline-block mr-1 bg-[#FF6384] rounded-full"></span>
          <span className="text-lg font-semibold">Female</span>
        </div>
        <div className="flex items-center">
          <span className="w-4 h-4 inline-block mr-1 bg-[#FFCE56] rounded-full"></span>
          <span className="text-lg font-semibold">Other</span>
        </div>
      </div>
    </div>
  );
};

const HandleAdmission = () => {
  const AdmissionData = [
    {
      lable: 2021,
      newAdmission: 100,
      left: 25,
    },
    {
      lable: 2022,
      newAdmission: 500,
      left: 300,
    },
    {
      lable: 2023,
      newAdmission: 150,
      left: 15,
    },
    {
      lable: 2024,
      newAdmission: 600,
      left: 200,
    },
  ];

  return (
    <div className="admission_cont w-72 h-64 rounded-2xl bg-[#f6f8fb] p-3 flex flex-col gap-4">
      <div className="flex justify-between items-center font-semibold text-sm">
        <div className="flex flex-col">
          <span>Admission vs Left</span>
          <span className="font-bold">2568</span>
          <span className="text-red-400 font-bold text-lg">
            &#8659; 2.1&#37;{" "}
            <span className="text-slate-500 font-medium text-sm">vs New</span>
          </span>
        </div>
        <button className=" bg-white p-1.5 rounded-lg text-[#5A6ACF]">
          View Report
        </button>
      </div>

      <Line
        data={{
          labels: AdmissionData.map((data) => data.lable),
          datasets: [
            {
              label: "New Admission",
              data: AdmissionData.map((data) => data.newAdmission),
              backgroundColor: ["#5a6acf"],
              borderColor: ["#5a6acf"],
            },
            {
              label: "Left",
              data: AdmissionData.map((data) => data.left),
              backgroundColor: ["#e61c1c"],
              borderColor: ["#e61c1c"],
            },
          ],
        }}
      />
    </div>
  );
};

const HandleRating = () => {
  return (
    <div className="rating_cont w-72 h-64 rounded-2xl bg-[#f6f8fb] p-3">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span>Rating</span>
          <span>Till Today</span>
        </div>
        <button>View Report</button>
      </div>
    </div>
  );
};

const HandleComplaint = () => {
  return (
    <div className="complaint_cont w-72 h-64 rounded-2xl bg-[#f6f8fb] p-3">
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <span>Complaint</span>
          <span>Till Today</span>
        </div>
        <button>View Report</button>
      </div>
    </div>
  );
};

const HandleDailyAdmission = () => {
  return (
    <div className="daily_admission bg-[#f6f8fb] rounded-xl p-4 w-[45%] h-60"></div>
  );
};
const HandleRevenue = () => {
  return (
    <div className="revenue_cont bg-[#f6f8fb] rounded-xl p-4 w-[45%] h-60"></div>
  );
};

const Overview = () => {
  return (
    <div className="overview_container text-black cursor-default">
      <div className="relative bg-[#f6f8fb] rounded-xl p-4 z-10">
        <h1 className="text-2xl font-bold">Overview</h1>
        <p className="text-lg">This is the overview page.</p>
        <button className=" absolute top-2 right-4 scale-125 font-semibold ">
          x
        </button>
      </div>
      <div className="my-4 flex flex-wrap justify-evenly gap-10">
        <HandleGender />
        <HandleAdmission />
        <HandleRating />
        <HandleComplaint />
      </div>
      <div className="flex justify-evenly">
        <HandleDailyAdmission />
        <HandleRevenue />
      </div>
    </div>
  );
};

export default Overview;
