import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import MainContent from "@/components/main-content"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <MainContent />
      <Footer />
    </div>
  )
}
