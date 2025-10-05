"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Thermometer, Droplets, CloudRain, TrendingUp, TrendingDown } from "lucide-react"

interface WeatherDataProps {
  data: {
    temperature: number
    temperatureMax: number
    temperatureMin: number
    humidity: number
    precipitation: number
    rainfallAmount: number
  }
}

export default function WeatherData({ data }: WeatherDataProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Temperature */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Temperature</CardTitle>
          <Thermometer className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.temperature}°C</div>
          <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              <span>High: {data.temperatureMax}°C</span>
            </div>
            <div className="flex items-center gap-1">
              <TrendingDown className="h-3 w-3" />
              <span>Low: {data.temperatureMin}°C</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Humidity */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Humidity</CardTitle>
          <Droplets className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.humidity}%</div>
          <p className="text-xs text-muted-foreground mt-2">
            {data.humidity > 70 ? "High humidity expected" : data.humidity > 40 ? "Moderate humidity" : "Low humidity"}
          </p>
        </CardContent>
      </Card>

      {/* Precipitation Probability */}
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Rain Probability</CardTitle>
          <CloudRain className="h-4 w-4 text-primary" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{data.precipitation}%</div>
          <p className="text-xs text-muted-foreground mt-2">
            Expected rainfall: {data.rainfallAmount.toFixed(1)}mm
          </p>
        </CardContent>
      </Card>
    </div>
  )
}