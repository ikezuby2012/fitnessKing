import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import clsx from "clsx";

// import style from "./style.module.scss";

const data = [
    {
        name: 'Jan',
        uv: 4000,
        pv: 2400,
        amt: 2400,
    },
    {
        name: 'Feb',
        uv: 3000,
        pv: 1398,
        amt: 2210,
    },
    {
        name: 'Mar',
        uv: 2000,
        pv: 9800,
        amt: 2290,
    },
    {
        name: 'Apr',
        uv: 2780,
        pv: 3908,
        amt: 2000,
    },
];

export default class DashAsideChart extends PureComponent {
    // static demoUrl = 'https://codesandbox.io/s/simple-bar-chart-tpz8r';

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={600}
                    height={100}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="name" />
                    {/* <YAxis display="none" fontSize="7px" /> */}
                    <Tooltip />
                    {/* <Legend /> */}
                    <Bar dataKey="pv" fill="#3629B7" barSize={5}/>
                    <Bar dataKey="uv" fill="#EC7E4A" barSize={5}/>
                </BarChart>
            </ResponsiveContainer>
        );
    }
}
