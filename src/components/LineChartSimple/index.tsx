import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { Stack, Text } from '@chakra-ui/react';
import data from '../../data.json';
const users =  data.lineChart; 

export default function LineChartSimple() {
  return (
    <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold">Balanço</Text>
        <LineChart
          width={980}
          height={500}
          data={users}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="users" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="vendas"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="compras" stroke="#82ca9d" />
    </LineChart>
      </Stack>
    </Stack>
  );
}


