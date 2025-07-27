import { Header } from "zenith/components/header"
import { HeroSection } from "zenith/components/hero-section"
import { AboutSection } from "zenith/components/about-section"
import { ServicesSection } from "zenith/components/services-section"
import { CaseStudiesSection } from "zenith/components/case-studies-section"
import { TestimonialsSection } from "zenith/components/testimonials-section"
import { BlogSection } from "zenith/components/blog-section"
import { ContactSection } from "zenith/components/contact-section"
import { NewsletterSection } from "zenith/components/newsletter-section"
import { Footer } from "zenith/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  )
}
