"use client"

import { useState } from "react"
import { Card, CardContent } from "zenith/components/ui/card"
import { Badge } from "zenith/components/ui/badge"
import { Button } from "zenith/components/ui/button"
import { ArrowRight, ExternalLink, TrendingUp, Users, DollarSign, Clock } from "lucide-react"
import Image from "next/image"

export function CaseStudiesSection() {
  const [selectedCase, setSelectedCase] = useState(0)

  const caseStudies = [
    {
      title: "E-Commerce Platform Transformation",
      client: "RetailMax Corporation",
      industry: "E-Commerce",
      challenge: "Legacy system causing 40% cart abandonment and slow load times",
      solution: "Modern React-based platform with AI-powered recommendations",
      results: [
        { metric: "Cart Abandonment", value: "40% → 15%", icon: TrendingUp },
        { metric: "Page Load Time", value: "8s → 1.2s", icon: Clock },
        { metric: "Revenue Increase", value: "+250%", icon: DollarSign },
        { metric: "User Engagement", value: "+180%", icon: Users },
      ],
      image: "/placeholder.svg?height=400&width=600&text=E-Commerce Platform",
      technologies: ["React", "Node.js", "AWS", "MongoDB", "AI/ML"],
      duration: "6 months",
      teamSize: "8 developers",
    },
    {
      title: "Healthcare Data Analytics Platform",
      client: "MedTech Solutions",
      industry: "Healthcare",
      challenge: "Fragmented patient data across multiple systems",
      solution: "Unified analytics platform with real-time monitoring",
      results: [
        { metric: "Data Processing", value: "10x Faster", icon: TrendingUp },
        { metric: "Patient Outcomes", value: "+35%", icon: Users },
        { metric: "Cost Reduction", value: "-45%", icon: DollarSign },
        { metric: "Response Time", value: "24h → 2h", icon: Clock },
      ],
      image: "/placeholder.svg?height=400&width=600&text=Healthcare Analytics",
      technologies: ["Python", "TensorFlow", "Azure", "PostgreSQL", "React"],
      duration: "8 months",
      teamSize: "12 specialists",
    },
    {
      title: "FinTech Mobile Banking App",
      client: "NextGen Bank",
      industry: "Financial Services",
      challenge: "Need for secure, user-friendly mobile banking solution",
      solution: "Native mobile app with biometric authentication and AI fraud detection",
      results: [
        { metric: "User Adoption", value: "1M+ Downloads", icon: Users },
        { metric: "Security Score", value: "99.9%", icon: TrendingUp },
        { metric: "Transaction Speed", value: "5x Faster", icon: Clock },
        { metric: "Customer Satisfaction", value: "4.8/5", icon: DollarSign },
      ],
      image: "/placeholder.svg?height=400&width=600&text=Mobile Banking App",
      technologies: ["React Native", "Node.js", "Blockchain", "AWS", "AI/ML"],
      duration: "10 months",
      teamSize: "15 developers",
    },
  ]

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">
            Case Studies
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            Success Stories That Inspire
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover how we&apos;ve helped businesses across industries achieve remarkable digital transformation results
            through innovative technology solutions.
          </p>
        </div>

        {/* Case Study Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {caseStudies.map((study, index) => (
            <button
              key={index}
              onClick={() => setSelectedCase(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                selectedCase === index
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {study.client}
            </button>
          ))}
        </div>

        {/* Selected Case Study */}
        <div className="grid gap-12 lg:grid-cols-2 items-center mb-16">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-blue-100 text-blue-700">{caseStudies[selectedCase].industry}</Badge>
              <h3 className="text-3xl font-bold text-gray-900">{caseStudies[selectedCase].title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                <strong>Challenge:</strong> {caseStudies[selectedCase].challenge}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                <strong>Solution:</strong> {caseStudies[selectedCase].solution}
              </p>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-2 gap-4 p-6 bg-white rounded-xl shadow-sm">
              <div>
                <div className="text-sm text-gray-500">Duration</div>
                <div className="font-semibold">{caseStudies[selectedCase].duration}</div>
              </div>
              <div>
                <div className="text-sm text-gray-500">Team Size</div>
                <div className="font-semibold">{caseStudies[selectedCase].teamSize}</div>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {caseStudies[selectedCase].technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="bg-gray-50">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 group">
              View Full Case Study
              <ExternalLink className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-3xl opacity-20"></div>
            <Image
              src={caseStudies[selectedCase].image || "/placeholder.svg"}
              alt={caseStudies[selectedCase].title}
              width={600}
              height={400}
              className="relative rounded-2xl shadow-2xl"
            />
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {caseStudies[selectedCase].results.map((result, index) => {
            const Icon = result.icon
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <Icon className="h-8 w-8 mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold text-gray-900 mb-2">{result.value}</div>
                  <div className="text-sm text-gray-600">{result.metric}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 group"
          >
            Start Your Success Story
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
