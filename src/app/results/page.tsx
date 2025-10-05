"use client"

import { useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react"
import Navigation from "@/components/Navigation"
import WeatherData from "@/components/WeatherData"
import RainfallChart from "@/components/RainfallChart"
import RainAlert from "@/components/RainAlert"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, MapPin, Calendar as CalendarIcon } from "lucide-react"
import { format } from "date-fns"

function ResultsContent() {
  const searchParams = useSearchParams()
  const city = searchParams.get("city")
  const date = searchParams.get("date")
  
  const [weatherData, setWeatherData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchWeather = async () => {
      if (!city || !date) {
        setError("Missing city or date parameter")
        setLoading(false)
        return
      }

      try {
        setLoading(true)
        // Simulate API call with mock NASA POWER data
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        // Mock weather data (in production, this would call NASA POWER API)
        const mockData = {
          city,
          date,
          temperature: Math.round(15 + Math.random() * 15), // 15-30°C
          temperatureMax: Math.round(20 + Math.random() * 15), // 20-35°C
          temperatureMin: Math.round(10 + Math.random() * 10), // 10-20°C
          humidity: Math.round(40 + Math.random() * 40), // 40-80%
          precipitation: Math.round(Math.random() * 100), // 0-100%
          rainfallAmount: Math.random() * 50, // 0-50mm
          dailyRainfall: Array.from({ length: 7 }, (_, i) => ({
            date: new Date(new Date(date).getTime() + i * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
            rainfall: Math.random() * 40
          }))
        }
        
        setWeatherData(mockData)
        setError(null)
      } catch (err) {
        setError("Failed to fetch weather data. Please try again.")
      } finally {
        setLoading(false)
      }
    }

    fetchWeather()
  }, [city, date])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 space-y-6">
        <Skeleton className="h-12 w-3/4 mx-auto" />
        <Skeleton className="h-32 w-full" />
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-48 w-full" />
      </div>
    )
  }

  if (error || !weatherData) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error || "Unable to load weather data"}</AlertDescription>
        </Alert>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold">Weather Forecast</h1>
        <div className="flex items-center justify-center gap-4 text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{city}</span>
          </div>
          <div className="flex items-center gap-1">
            <CalendarIcon className="h-4 w-4" />
            <span>{format(new Date(date!), "PPP")}</span>
          </div>
        </div>
      </div>

      {/* Rain Alert */}
      <RainAlert precipitation={weatherData.precipitation} />

      {/* Weather Data Cards */}
      <WeatherData data={weatherData} />

      {/* Rainfall Chart */}
      <Card>
        <CardHeader>
          <CardTitle>7-Day Rainfall Forecast</CardTitle>
        </CardHeader>
        <CardContent>
          <RainfallChart data={weatherData.dailyRainfall} />
        </CardContent>
      </Card>

      {/* Data Source Note */}
      <p className="text-center text-sm text-muted-foreground">
        Weather data powered by NASA POWER API
      </p>
    </div>
  )
}

export default function ResultsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Suspense fallback={
        <div className="container mx-auto px-4 py-8">
          <Skeleton className="h-64 w-full" />
        </div>
      }>
        <ResultsContent />
      </Suspense>
    </div>
  )
}