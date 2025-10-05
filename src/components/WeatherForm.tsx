"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Search } from "lucide-react"
import { format } from "date-fns"

export default function WeatherForm() {
  const router = useRouter()
  const [city, setCity] = useState("")
  const [date, setDate] = useState<Date>()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!city || !date) return

    setIsLoading(true)
    
    // Navigate to results page with city and date as query params
    const params = new URLSearchParams({
      city: city,
      date: format(date, "yyyy-MM-dd")
    })
    
    router.push(`/results?${params.toString()}`)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
      <div className="space-y-2">
        <Label htmlFor="city">City or Location</Label>
        <Input
          id="city"
          type="text"
          placeholder="Enter city name (e.g., San Francisco)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Label>Event Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start text-left font-normal"
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              disabled={(date) => date < new Date()}
            />
          </PopoverContent>
        </Popover>
      </div>

      <Button 
        type="submit" 
        className="w-full" 
        size="lg"
        disabled={!city || !date || isLoading}
      >
        {isLoading ? (
          <>Checking Weather...</>
        ) : (
          <>
            <Search className="mr-2 h-4 w-4" />
            Check Weather Forecast
          </>
        )}
      </Button>
    </form>
  )
}