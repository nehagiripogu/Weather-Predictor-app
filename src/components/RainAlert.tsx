"use client"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CloudRain, Sun, Cloud } from "lucide-react"

interface RainAlertProps {
  precipitation: number
}

export default function RainAlert({ precipitation }: RainAlertProps) {
  if (precipitation >= 70) {
    return (
      <Alert className="border-destructive bg-destructive/10">
        <CloudRain className="h-4 w-4 text-destructive" />
        <AlertTitle className="text-destructive">High Rain Probability!</AlertTitle>
        <AlertDescription>
          There's a {precipitation}% chance of rain. Consider rescheduling your outdoor event or preparing rain contingency plans.
        </AlertDescription>
      </Alert>
    )
  }

  if (precipitation >= 30) {
    return (
      <Alert className="border-yellow-500 bg-yellow-50 dark:bg-yellow-950/20">
        <Cloud className="h-4 w-4 text-yellow-600" />
        <AlertTitle className="text-yellow-700 dark:text-yellow-500">Moderate Rain Chance</AlertTitle>
        <AlertDescription className="text-yellow-700 dark:text-yellow-400">
          There's a {precipitation}% chance of rain. Keep an eye on the forecast and have a backup plan ready.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <Alert className="border-green-500 bg-green-50 dark:bg-green-950/20">
      <Sun className="h-4 w-4 text-green-600" />
      <AlertTitle className="text-green-700 dark:text-green-500">Great Weather Expected!</AlertTitle>
      <AlertDescription className="text-green-700 dark:text-green-400">
        Only {precipitation}% chance of rain. Perfect conditions for your outdoor event!
      </AlertDescription>
    </Alert>
  )
}