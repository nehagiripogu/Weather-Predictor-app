"use client"

import Navigation from "@/components/Navigation"
import WeatherForm from "@/components/WeatherForm"
import { Cloud, Calendar, TrendingUp, Bell } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="flex justify-center">
            <Cloud className="h-20 w-20 text-primary animate-pulse" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Will It Rain On My Parade?
          </h1>
          <p className="text-xl text-muted-foreground">
            Plan your outdoor events with confidence. Get accurate weather forecasts 
            powered by NASA POWER data to ensure perfect weather for your special day.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="pt-6 text-center space-y-3">
              <Calendar className="h-12 w-12 text-primary mx-auto" />
              <h3 className="font-semibold text-lg">Future Forecasting</h3>
              <p className="text-sm text-muted-foreground">
                Check weather predictions for any upcoming date to plan ahead
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="pt-6 text-center space-y-3">
              <TrendingUp className="h-12 w-12 text-primary mx-auto" />
              <h3 className="font-semibold text-lg">Detailed Analytics</h3>
              <p className="text-sm text-muted-foreground">
                View comprehensive data including temperature, humidity, and rainfall charts
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-colors">
            <CardContent className="pt-6 text-center space-y-3">
              <Bell className="h-12 w-12 text-primary mx-auto" />
              <h3 className="font-semibold text-lg">Smart Alerts</h3>
              <p className="text-sm text-muted-foreground">
                Get instant notifications about high or low rain probability
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Weather Form Section */}
      <section id="forecast" className="container mx-auto px-4 py-16 scroll-mt-20">
        <div className="max-w-xl mx-auto">
          <div className="text-center space-y-4 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Check Your Weather Forecast
            </h2>
            <p className="text-muted-foreground">
              Enter your location and event date to get started
            </p>
          </div>
          
          <Card className="shadow-lg">
            <CardContent className="pt-6">
              <WeatherForm />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Weather data powered by NASA POWER API</p>
          <p className="mt-2">© 2024 Will It Rain On My Parade? All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}