import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { Stack, Text } from '@chakra-ui/react';
import data from '../../data.json';
const dataChart = data.barChart;

export default function BarChartSimple() {
  return (
    <Stack p="4" boxShadow="lg" m="4" borderRadius="sm">
      <Stack direction="row" alignItems="center">
        <Text fontWeight="semibold">Qnt. Acesso a Plataforma</Text>
        <BarChart
      width={980}
      height={500}
      data={dataChart}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="dia" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="qnt_users" fill="#8884d8" />
    </BarChart>

      </Stack>
    </Stack>
  );
}


