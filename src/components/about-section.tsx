"use client"

import { useState } from "react"
import { Card, CardContent } from "zenith/components/ui/card"
import { Badge } from "zenith/components/ui/badge"
import { Target, Eye, Heart, Users, Award, TrendingUp, CheckCircle } from "lucide-react"
import Image from "next/image"

export function AboutSection() {
  const [activeTab, setActiveTab] = useState("mission")

  const tabs = [
    { id: "mission", label: "Our Mission", icon: Target },
    { id: "vision", label: "Our Vision", icon: Eye },
    { id: "values", label: "Our Values", icon: Heart },
  ]

  const tabContent = {
    mission: {
      title: "Empowering Digital Excellence",
      description:
        "We exist to transform businesses through innovative technology solutions that drive measurable growth and competitive advantage.",
      points: [
        "Deliver cutting-edge solutions that exceed expectations",
        "Foster long-term partnerships built on trust and results",
        "Continuously innovate to stay ahead of industry trends",
        "Provide exceptional value through expert consultation",
      ],
    },
    vision: {
      title: "Leading the Digital Future",
      description:
        "To be the global leader in digital transformation, recognized for our innovation, expertise, and commitment to client success.",
      points: [
        "Pioneer next-generation technology solutions",
        "Set industry standards for quality and innovation",
        "Expand our global footprint and impact",
        "Create a sustainable digital ecosystem",
      ],
    },
    values: {
      title: "Our Core Principles",
      description:
        "Our values guide every decision we make and every solution we deliver, ensuring consistent excellence and integrity.",
      points: [
        "Innovation: Pushing boundaries with creative solutions",
        "Integrity: Transparent and honest in all interactions",
        "Excellence: Delivering quality that exceeds expectations",
        "Collaboration: Working together for mutual success",
      ],
    },
  }

  const achievements = [
    { number: "500+", label: "Projects Completed", icon: TrendingUp },
    { number: "200+", label: "Happy Clients", icon: Users },
    { number: "50+", label: "Expert Team", icon: Users },
    { number: "99.9%", label: "Success Rate", icon: Award },
  ]

  return (
    <section id="about" className="py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">
            About Zenith Digital
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            Pioneering Digital Innovation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded with a vision to revolutionize how businesses leverage technology, Zenith Digital Solution has grown
            into a trusted partner for digital transformation worldwide.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-16 lg:grid-cols-2 items-center mb-16">
          {/* Content */}
          <div className="space-y-8">
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Tab Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                {tabContent[activeTab as keyof typeof tabContent].title}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {tabContent[activeTab as keyof typeof tabContent].description}
              </p>
              <ul className="space-y-3">
                {tabContent[activeTab as keyof typeof tabContent].points.map((point, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-3xl opacity-20"></div>
            <Image
              src="/placeholder.svg?height=500&width=600&text=Our Team at Work"
              alt="Zenith Digital Team"
              width={600}
              height={500}
              className="relative rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <Icon className="h-8 w-8 mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                  <div className="text-sm text-gray-600">{achievement.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
