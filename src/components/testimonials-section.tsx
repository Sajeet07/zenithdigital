"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "zenith/components/ui/card"
import { Badge } from "zenith/components/ui/badge"
import { Button } from "zenith/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO",
      company: "TechCorp Industries",
      image: "/placeholder.svg?height=80&width=80&text=SJ",
      rating: 5,
      testimonial:
        "Zenith Digital transformed our entire infrastructure. Their expertise in cloud migration and AI implementation helped us reduce costs by 40% while improving performance dramatically. The team's professionalism and technical depth are unmatched.",
      project: "Cloud Migration & AI Integration",
      results: "40% cost reduction, 3x performance improvement",
    },
    {
      name: "Michael Chen",
      position: "CEO",
      company: "InnovateLab",
      image: "/placeholder.svg?height=80&width=80&text=MC",
      rating: 5,
      testimonial:
        "Working with Zenith Digital was a game-changer for our startup. They delivered a world-class mobile app that exceeded our expectations. The attention to detail and user experience design helped us secure $2M in Series A funding.",
      project: "Mobile App Development",
      results: "$2M funding secured, 100K+ downloads",
    },
    {
      name: "Emily Rodriguez",
      position: "VP of Operations",
      company: "Global Retail Solutions",
      image: "/placeholder.svg?height=80&width=80&text=ER",
      rating: 5,
      testimonial:
        "The data analytics platform Zenith Digital built for us revolutionized our decision-making process. Real-time insights and predictive analytics have improved our inventory management by 60% and customer satisfaction scores significantly.",
      project: "Data Analytics Platform",
      results: "60% inventory optimization, 95% satisfaction",
    },
    {
      name: "David Park",
      position: "Head of Digital",
      company: "FinanceFirst Bank",
      image: "/placeholder.svg?height=80&width=80&text=DP",
      rating: 5,
      testimonial:
        "Security and compliance were our top priorities. Zenith Digital delivered a robust fintech solution that not only met all regulatory requirements but also provided an exceptional user experience. Their cybersecurity expertise is outstanding.",
      project: "Fintech Security Solution",
      results: "100% compliance, 99.9% uptime",
    },
    {
      name: "Lisa Thompson",
      position: "Chief Innovation Officer",
      company: "HealthTech Dynamics",
      image: "/placeholder.svg?height=80&width=80&text=LT",
      rating: 5,
      testimonial:
        "The healthcare platform developed by Zenith Digital has transformed patient care delivery. The AI-powered diagnostics and real-time monitoring capabilities have improved patient outcomes by 35% while reducing operational costs.",
      project: "Healthcare AI Platform",
      results: "35% better outcomes, 25% cost reduction",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">
            Client Testimonials
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what industry leaders say about their experience working with Zenith
            Digital Solution.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-white to-gray-50">
            <CardContent className="p-8 lg:p-12">
              <div className="text-center space-y-8">
                {/* Quote Icon */}
                <Quote className="h-12 w-12 mx-auto text-blue-600 opacity-50" />

                {/* Rating */}
                <div className="flex justify-center space-x-1">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
                  &quot;{testimonials[currentTestimonial].testimonial}&quot;
                </blockquote>

                {/* Project Info */}
                <div className="bg-blue-50 rounded-lg p-4 inline-block">
                  <div className="text-sm font-semibold text-blue-900 mb-1">
                    Project: {testimonials[currentTestimonial].project}
                  </div>
                  <div className="text-sm text-blue-700">Results: {testimonials[currentTestimonial].results}</div>
                </div>

                {/* Author */}
                <div className="flex items-center justify-center space-x-4">
                  <Image
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    width={80}
                    height={80}
                    className="rounded-full border-4 border-white shadow-lg"
                  />
                  <div className="text-left">
                    <div className="font-bold text-gray-900 text-lg">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-600">{testimonials[currentTestimonial].position}</div>
                    <div className="text-blue-600 font-medium">{testimonials[currentTestimonial].company}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="rounded-full hover:bg-blue-50 hover:border-blue-200 bg-transparent"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentTestimonial === index ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="rounded-full hover:bg-blue-50 hover:border-blue-200 bg-transparent"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* All Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                currentTestimonial === index ? "ring-2 ring-blue-600 scale-105" : ""
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 line-clamp-3">&quot;{testimonial.testimonial}&quot;</p>
                <div className="flex items-center space-x-3">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                    <div className="text-gray-600 text-xs">
                      {testimonial.position}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
