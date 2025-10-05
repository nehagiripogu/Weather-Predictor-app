"use client"

import { Cloud } from "lucide-react"
import Link from "next/link"

export default function Navigation() {
  return (
    <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <Cloud className="h-6 w-6 text-primary" />
          <span className="font-bold text-lg">Will It Rain On My Parade?</span>
        </Link>
        <div className="flex gap-4">
          <Link 
            href="/" 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/#forecast" 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Check Weather
          </Link>
        </div>
      </div>
    </nav>
  )
}