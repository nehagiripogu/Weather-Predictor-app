"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts"

interface RainfallChartProps {
  data: Array<{
    date: string
    rainfall: number
  }>
}

export default function RainfallChart({ data }: RainfallChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
        <XAxis 
          dataKey="date" 
          className="text-xs"
          tick={{ fill: 'hsl(var(--muted-foreground))' }}
        />
        <YAxis 
          label={{ value: 'Rainfall (mm)', angle: -90, position: 'insideLeft' }}
          className="text-xs"
          tick={{ fill: 'hsl(var(--muted-foreground))' }}
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: 'hsl(var(--card))',
            border: '1px solid hsl(var(--border))',
            borderRadius: '8px'
          }}
          formatter={(value: number) => [`${value.toFixed(1)} mm`, 'Rainfall']}
        />
        <Legend />
        <Bar 
          dataKey="rainfall" 
          fill="hsl(var(--primary))" 
          name="Rainfall"
          radius={[8, 8, 0, 0]}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}