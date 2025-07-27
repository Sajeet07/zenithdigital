"use client"

import { useState, useEffect } from "react"
import { Button } from "zenith/components/ui/button"
import { Badge } from "zenith/components/ui/badge"
import { ArrowRight, Play, Sparkles, TrendingUp, Users, Award } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [currentStat, setCurrentStat] = useState(0)

  const stats = [
    { value: "500+", label: "Projects Delivered", icon: TrendingUp },
    { value: "200+", label: "Happy Clients", icon: Users },
    { value: "50+", label: "Team Members", icon: Users },
    { value: "99.9%", label: "Success Rate", icon: Award },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [stats.length])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-purple-100/20 to-transparent"></div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <Badge
                variant="secondary"
                className="w-fit mx-auto lg:mx-0 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200 hover:from-blue-200 hover:to-purple-200 transition-all duration-300"
              >
                <Sparkles className="mr-2 h-4 w-4" />
                #1 Digital Transformation Partner
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
                Innovate.
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
                  {" "}
                  Transform.
                </span>
                <br />
                <span className="text-gray-900">Succeed.</span>
              </h1>

              <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Zenith Digital Solution empowers businesses with cutting-edge technology solutions. From AI-powered
                applications to cloud infrastructure, we deliver measurable results that drive sustainable growth.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 group bg-white/80 backdrop-blur border-2 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Our Story
              </Button>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div
                    key={index}
                    className={`text-center p-4 rounded-xl transition-all duration-500 ${
                      currentStat === index
                        ? "bg-gradient-to-br from-blue-50 to-purple-50 shadow-lg scale-105"
                        : "bg-white/50 hover:bg-white/80"
                    }`}
                  >
                    <Icon
                      className={`h-6 w-6 mx-auto mb-2 ${currentStat === index ? "text-blue-600" : "text-gray-500"}`}
                    />
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-3xl opacity-20 scale-105 animate-pulse"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-1 border border-white/20 shadow-2xl">
              <Image
                src="/placeholder.svg?height=600&width=800&text=Zenith Digital Platform"
                alt="Zenith Digital Platform Dashboard"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-xl p-4 border animate-bounce">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">99.9% Uptime</span>
                <TrendingUp className="h-4 w-4 text-green-600" />
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 border animate-bounce delay-1000">
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium">500+ Projects</span>
                <Badge className="bg-purple-100 text-purple-700 text-xs">Delivered</Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
