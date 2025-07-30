"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "zenith/components/ui/card"
import { Badge } from "zenith/components/ui/badge"
import { Button } from "zenith/components/ui/button"
import { Input } from "zenith/components/ui/input"
import { Textarea } from "zenith/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "zenith/components/ui/select"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare, Calendar, Users } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        budget: "",
        message: "",
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Office",
      details: ["123 Innovation Drive", "Tech Park, Suite 500", "San Francisco, CA 94105"],
      color: "text-blue-600",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543", "Mon-Fri 9AM-6PM PST"],
      color: "text-green-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["hello@zenithdigital.com", "support@zenithdigital.com", "careers@zenithdigital.com"],
      color: "text-purple-600",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM", "Sunday: Closed"],
      color: "text-orange-600",
    },
  ]

  const services = [
    "Web Development",
    "Mobile App Development",
    "Cloud Solutions",
    "AI & Machine Learning",
    "Data Analytics",
    "Cybersecurity",
    "DevOps & Automation",
    "Digital Transformation",
    "Other",
  ]

  const budgetRanges = [
    "Under $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000 - $250,000",
    "$250,000+",
    "Let&apos;s discuss",
  ]

  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">
            Get In Touch
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            Let&apos;s Build Something Amazing Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with cutting-edge technology? Our expert team is here to help you achieve
            your digital transformation goals.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <Card className="border-0 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Start Your Project</CardTitle>
              <p className="text-gray-600 text-center">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
            </CardHeader>
            <CardContent className="p-8">
              {isSubmitted ? (
                <div className="text-center space-y-4 py-8">
                  <CheckCircle className="h-16 w-16 mx-auto text-green-600" />
                  <h3 className="text-2xl font-bold text-gray-900">Thank You!</h3>
                  <p className="text-gray-600">
                    Your message has been sent successfully. We&apos;ll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="John Doe"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="john@company.com"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                      <Input
                        type="text"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Your Company"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+1 (555) 123-4567"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed *</label>
                      <Select onValueChange={(value) => handleInputChange("service", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service} value={service}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Project Budget</label>
                      <Select onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      placeholder="Tell us about your project requirements, goals, and timeline..."
                      rows={5}
                      required
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 group"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6 sm:grid-cols-2">
              {contactInfo.map((info, index) => {
                const Icon = info.icon
                return (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <Icon
                        className={`h-8 w-8 mx-auto mb-4 ${info.color} group-hover:scale-110 transition-transform`}
                      />
                      <h3 className="font-bold text-gray-900 mb-3">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-sm text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Prefer a Different Approach?</h3>
              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full justify-start hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-all duration-200 bg-transparent"
                >
                  <MessageSquare className="mr-3 h-5 w-5" />
                  Start Live Chat
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start hover:bg-green-50 hover:border-green-200 hover:text-green-700 transition-all duration-200 bg-transparent"
                >
                  <Calendar className="mr-3 h-5 w-5" />
                  Schedule a Call
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start hover:bg-purple-50 hover:border-purple-200 hover:text-purple-700 transition-all duration-200 bg-transparent"
                >
                  <Users className="mr-3 h-5 w-5" />
                  Book Consultation
                </Button>
              </div>
            </div>

            {/* Map Placeholder */}
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 mx-auto text-blue-600 mb-4" />
                  <p className="text-gray-700 font-medium">Interactive Map</p>
                  <p className="text-sm text-gray-600">Find us in San Francisco</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
