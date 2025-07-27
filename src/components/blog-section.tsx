"use client"

import { Card, CardContent } from "zenith/components/ui/card"
import { Badge } from "zenith/components/ui/badge"
import { Button } from "zenith/components/ui/button"
import { ArrowRight, Calendar, Clock, User, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function BlogSection() {
  const blogPosts = [
    {
      title: "The Future of AI in Enterprise Software Development",
      excerpt:
        "Explore how artificial intelligence is revolutionizing enterprise software development and what it means for businesses in 2024.",
      author: "Dr. Sarah Mitchell",
      date: "March 15, 2024",
      readTime: "8 min read",
      category: "AI & Technology",
      image: "/placeholder.svg?height=300&width=400&text=AI Enterprise",
      trending: true,
      slug: "future-ai-enterprise-software",
    },
    {
      title: "Cloud Migration Strategies for Modern Businesses",
      excerpt:
        "A comprehensive guide to successful cloud migration, including best practices, common pitfalls, and ROI optimization strategies.",
      author: "Michael Chen",
      date: "March 12, 2024",
      readTime: "12 min read",
      category: "Cloud Computing",
      image: "/placeholder.svg?height=300&width=400&text=Cloud Migration",
      trending: false,
      slug: "cloud-migration-strategies",
    },
    {
      title: "Cybersecurity Best Practices for SaaS Applications",
      excerpt:
        "Essential security measures every SaaS application should implement to protect user data and maintain compliance.",
      author: "Emily Rodriguez",
      date: "March 10, 2024",
      readTime: "10 min read",
      category: "Cybersecurity",
      image: "/placeholder.svg?height=300&width=400&text=Cybersecurity",
      trending: true,
      slug: "cybersecurity-saas-best-practices",
    },
    {
      title: "Building Scalable Mobile Apps with React Native",
      excerpt:
        "Learn the architectural patterns and optimization techniques for building high-performance, scalable mobile applications.",
      author: "David Park",
      date: "March 8, 2024",
      readTime: "15 min read",
      category: "Mobile Development",
      image: "/placeholder.svg?height=300&width=400&text=React Native",
      trending: false,
      slug: "scalable-mobile-apps-react-native",
    },
    {
      title: "Data Analytics Trends Shaping Business Intelligence",
      excerpt:
        "Discover the latest trends in data analytics and how they're transforming business intelligence and decision-making processes.",
      author: "Lisa Thompson",
      date: "March 5, 2024",
      readTime: "9 min read",
      category: "Data Analytics",
      image: "/placeholder.svg?height=300&width=400&text=Data Analytics",
      trending: true,
      slug: "data-analytics-business-intelligence-trends",
    },
    {
      title: "DevOps Automation: Streamlining Development Workflows",
      excerpt:
        "How to implement effective DevOps automation strategies to improve development velocity and deployment reliability.",
      author: "James Wilson",
      date: "March 3, 2024",
      readTime: "11 min read",
      category: "DevOps",
      image: "/placeholder.svg?height=300&width=400&text=DevOps Automation",
      trending: false,
      slug: "devops-automation-workflows",
    },
  ]

  const categories = [
    "All",
    "AI & Technology",
    "Cloud Computing",
    "Cybersecurity",
    "Mobile Development",
    "Data Analytics",
    "DevOps",
  ]

  return (
    <section id="blog" className="py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge variant="secondary" className="w-fit mx-auto">
            Latest Insights
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            Technology Blog & Resources
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay ahead of the curve with our expert insights, industry trends, and technical deep-dives into the latest
            developments in technology and digital transformation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant="outline"
              className="hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-all duration-200 bg-transparent"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-white to-gray-50">
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="relative">
                <Image
                  src={blogPosts[0].image || "/placeholder.svg"}
                  alt={blogPosts[0].title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
                {blogPosts[0].trending && (
                  <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    Trending
                  </Badge>
                )}
              </div>
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <Badge className="w-fit mb-4 bg-blue-100 text-blue-700">{blogPosts[0].category}</Badge>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {blogPosts[0].title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">{blogPosts[0].excerpt}</p>
                <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{blogPosts[0].author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{blogPosts[0].date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
                <Button className="w-fit bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 group">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
          {blogPosts.slice(1).map((post, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer overflow-hidden"
            >
              <div className="relative">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {post.trending && (
                  <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600">
                    <TrendingUp className="mr-1 h-3 w-3" />
                    Trending
                  </Badge>
                )}
                <Badge className="absolute top-3 right-3 bg-white/90 text-gray-700">{post.category}</Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center group-hover:underline"
                >
                  Read More
                  <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 group"
          >
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
