"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "zenith/components/ui/button"
import { Input } from "zenith/components/ui/input"
import { Badge } from "zenith/components/ui/badge"
import { Mail, CheckCircle, TrendingUp, Users, Zap } from "lucide-react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)

    // Simulate subscription
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubscribed(true)

    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false)
      setEmail("")
    }, 3000)
  }

  const benefits = [
    { icon: TrendingUp, text: "Latest tech trends & insights" },
    { icon: Zap, text: "Exclusive tips & best practices" },
    { icon: Users, text: "Industry case studies" },
  ]

  return (
    <section className="py-24 lg:py-32 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-white/5 to-transparent"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="space-y-6 mb-12">
            <Badge className="w-fit mx-auto bg-white/10 text-white border-white/20">
              <Mail className="mr-2 h-4 w-4" />
              Stay Updated
            </Badge>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Get the Latest Tech Insights</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
              Join 10,000+ tech leaders who receive our weekly newsletter with industry insights, best practices, and
              exclusive content.
            </p>
          </div>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="flex items-center space-x-3 text-blue-100">
                  <Icon className="h-5 w-5" />
                  <span className="text-sm font-medium">{benefit.text}</span>
                </div>
              )
            })}
          </div>

          {/* Subscription Form */}
          {isSubscribed ? (
            <div className="space-y-4 py-8">
              <CheckCircle className="h-16 w-16 mx-auto text-green-400" />
              <h3 className="text-2xl font-bold">Welcome to Our Community!</h3>
              <p className="text-blue-100">Thank you for subscribing. You&apos;ll receive our next newsletter soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:bg-white/20 focus:border-white/40"
                />
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-200 whitespace-nowrap"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe Now"}
                </Button>
              </div>
              <p className="text-xs text-blue-200 mt-4">No spam, unsubscribe at any time. We respect your privacy.</p>
            </form>
          )}

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <div className="text-center">
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-sm text-blue-200">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">95%</div>
              <div className="text-sm text-blue-200">Open Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">Weekly</div>
              <div className="text-sm text-blue-200">Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
