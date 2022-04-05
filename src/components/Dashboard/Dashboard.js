import React from 'react';
import { Bar, BarChart, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import './Dashboard.css'
const Dashboard = () => {
    const data = [
        {
            month: "Mar",
            investment: 100000,
            sell: 241,
            revenue: 10401
        },
        {
            month: "Apr",
            investment: 200000,
            sell: 423,
            revenue: 24500
        },
        {
            month: "May",
            investment: 500000,
            sell: 726,
            revenue: 67010
        },
        {
            month: "Jun",
            investment: 500000,
            sell: 529,
            revenue: 40405
        },
        {
            month: "Jul",
            investment: 600000,
            sell: 601,
            revenue: 50900
        },
        {
            month: "Aug",
            investment: 700000,
            sell: 670,
            revenue: 61000
        }
    ]
    return (
        <div className='charts-container'>
            <div className="line-chart">
                <LineChart width={600} height={400} data={data}>
                    <Line dataKey={'investment'} fill={'skyblue'}></Line>
                    <Line dataKey={'sell'} fill={'skyblue'}></Line>
                    <XAxis dataKey={'month'}></XAxis>
                    <Tooltip></Tooltip>
                    <YAxis></YAxis>
                </LineChart>
            </div>
            <div className="bar-chart">
                <BarChart width={600} height={400} data={data}>
                    <Bar dataKey={'investment'} fill={'skyblue'}></Bar>
                    <XAxis dataKey={'month'}></XAxis>
                    <Tooltip></Tooltip>
                    <YAxis></YAxis>
                </BarChart>
            </div>
        </div>
    );
};

export default Dashboard;