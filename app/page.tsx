"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  GraduationCap,
  TrendingUp,
  Users,
  Globe,
  Smartphone,
  BarChart3,
  Lightbulb,
  Target,
  CheckCircle,
  Star,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Quote,
  ChevronDown,
  ChevronUp,
  Eye,
  Zap,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function Component() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    const animatedElements = document.querySelectorAll(".animate-on-scroll")
    animatedElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const faqs = [
    {
      question: "Apa saja persyaratan masuk Program Studi Bisnis Digital?",
      answer:
        "Persyaratan umum meliputi lulusan SMA/SMK/MA, memiliki nilai rapor yang baik, lulus tes masuk, dan memiliki minat di bidang teknologi dan bisnis. Informasi lengkap dapat dilihat di website PMB.",
    },
    {
      question: "Berapa lama masa studi Program Diploma III Bisnis Digital?",
      answer:
        "Program Diploma III Bisnis Digital ditempuh dalam waktu 3 tahun (6 semester) dengan total 146 SKS, termasuk program magang dan KKN.",
    },
    {
      question: "Apakah ada program magang industri?",
      answer:
        "Ya, program magang industri merupakan bagian wajib dari kurikulum yang dilaksanakan pada semester 5. Mahasiswa akan ditempatkan di perusahaan-perusahaan partner di kawasan industri Cilegon.",
    },
    {
      question: "Bagaimana prospek kerja lulusan Bisnis Digital?",
      answer:
        "Lulusan memiliki prospek kerja yang sangat luas, mulai dari Digital Marketing Specialist, Data Analyst, E-Commerce Manager, hingga menjadi Technopreneur dengan rata-rata gaji awal 8-15 juta rupiah.",
    },
    {
      question: "Apakah tersedia beasiswa untuk mahasiswa?",
      answer:
        "Ya, tersedia berbagai program beasiswa seperti beasiswa prestasi akademik, beasiswa kurang mampu, dan beasiswa dari perusahaan partner. Informasi lengkap dapat dikonsultasikan saat pendaftaran.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
        
        html, body {
          overflow-x: hidden;
          width: 100%;
        }
        
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }
        
        .animate-fade-in-up {
          opacity: 1;
          transform: translateY(0);
        }
        
        .scroll-smooth {
          scroll-behavior: smooth;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        /* Responsive image fixes */
        img {
          max-width: 100%;
          height: auto;
        }
        
        /* Container fixes */
        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }
        
        @media (min-width: 640px) {
          .container {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }
        
        @media (min-width: 1024px) {
          .container {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }
      `}</style>

      {/* Header */}
      <header className="w-full px-4 lg:px-6 h-16 flex items-center justify-between border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center">
          <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
          <span className="ml-2 text-lg sm:text-xl font-bold text-gray-900">Politeknik Krakatau</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 lg:gap-6">
          <Link href="#tentang" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Tentang
          </Link>
          <Link href="#visi-misi" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Visi Misi
          </Link>
          <Link href="#kurikulum" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Kurikulum
          </Link>
          <Link href="#testimoni" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Testimoni
          </Link>
          <Link href="#faq" className="text-sm font-medium hover:text-blue-600 transition-colors">
            FAQ
          </Link>
          <Link href="#kontak" className="text-sm font-medium hover:text-blue-600 transition-colors">
            Kontak
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b shadow-lg md:hidden">
            <nav className="flex flex-col p-4 space-y-2">
              <Link
                href="#tentang"
                className="text-sm font-medium hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tentang
              </Link>
              <Link
                href="#visi-misi"
                className="text-sm font-medium hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Visi Misi
              </Link>
              <Link
                href="#kurikulum"
                className="text-sm font-medium hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kurikulum
              </Link>
              <Link
                href="#testimoni"
                className="text-sm font-medium hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimoni
              </Link>
              <Link
                href="#faq"
                className="text-sm font-medium hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="#kontak"
                className="text-sm font-medium hover:text-blue-600 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kontak
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1 w-full scroll-smooth">
        {/* Hero Section */}
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 items-center animate-on-scroll">
              <div className="flex flex-col justify-center space-y-4 order-2 lg:order-1">
                <div className="space-y-2">
                  <Badge className="w-fit bg-blue-100 text-blue-800 hover:bg-blue-200 text-xs sm:text-sm">
                    Program Studi Unggulan
                  </Badge>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tighter bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                    Bisnis Digital
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                    Program Studi Bisnis Digital Politeknik Krakatau dirancang untuk menjawab kebutuhan dunia industri
                    yang terus berkembang seiring dengan revolusi digital. Mengintegrasikan pembelajaran di bidang
                    manajemen bisnis, teknologi informasi, analisis data dan pemasaran digital.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto" asChild>
                    <Link href="https://pmb.polka.ac.id/" target="_blank">
                      Daftar Sekarang
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-transparent" asChild>
                    <Link href="https://polka.ac.id/bisnis-digital/" target="_blank">
                      Pelajari Lebih Lanjut
                    </Link>
                  </Button>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">4.8/5</span>
                    <span>Rating Alumni</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span className="font-medium">500+</span>
                    <span>Lulusan Sukses</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center order-1 lg:order-2">
                <div className="relative w-full max-w-lg">
                  <Image
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    width="600"
                    height="400"
                    alt="Digital Business Team Working"
                    className="w-full h-auto aspect-video rounded-xl object-cover shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-8 sm:py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 animate-on-scroll">
              <div className="flex flex-col items-center space-y-2 text-center p-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-100">
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                </div>
                <div className="text-xl sm:text-2xl font-bold">95%</div>
                <p className="text-xs sm:text-sm text-gray-600">Tingkat Kelulusan</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center p-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-green-100">
                  <Target className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                </div>
                <div className="text-xl sm:text-2xl font-bold">88%</div>
                <p className="text-xs sm:text-sm text-gray-600">Langsung Bekerja</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center p-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-purple-100">
                  <Globe className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                </div>
                <div className="text-xl sm:text-2xl font-bold">50+</div>
                <p className="text-xs sm:text-sm text-gray-600">Perusahaan Partner</p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center p-4">
                <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-orange-100">
                  <BarChart3 className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
                </div>
                <div className="text-xl sm:text-2xl font-bold">12jt+</div>
                <p className="text-xs sm:text-sm text-gray-600">Rata-rata Gaji Awal</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="tentang" className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center animate-on-scroll mb-8 sm:mb-12">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Mengapa Memilih Bisnis Digital?
                </h2>
                <p className="max-w-4xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Program Studi Bisnis Digital Politeknik Krakatau memberikan Anda kesempatan untuk menjadi bagian dari
                  revolusi digital yang sedang berlangsung.
                </p>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center animate-on-scroll">
              <div className="order-2 lg:order-1">
                <div className="relative w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                    width="600"
                    height="400"
                    alt="Students Learning Digital Business"
                    className="w-full h-auto aspect-video rounded-xl object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 sm:space-y-6 order-1 lg:order-2">
                <div className="grid gap-4 sm:gap-6">
                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-blue-100 flex-shrink-0">
                      <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2">Kurikulum Berbasis Industri</h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        Kurikulum dirancang sesuai dengan kebutuhan industri 4.0 dan tren teknologi terkini, memastikan
                        lulusan memiliki kompetensi yang relevan dan siap kerja.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-green-100 flex-shrink-0">
                      <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2">Lokasi Strategis di Jantung Industri</h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        Terletak di Kota Cilegon — pusat industri nasional — mahasiswa memiliki akses langsung ke
                        perusahaan-perusahaan besar, termasuk peluang magang dan kerja sama proyek sejak dini.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 sm:gap-4">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-purple-100 flex-shrink-0">
                      <Users className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-2">Pembelajaran Praktis</h3>
                      <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                        Program ini mengedepankan pendekatan pembelajaran berbasis praktikum dan kerja sama dengan dunia
                        usaha serta UMKM, sehingga mahasiswa mendapatkan pengalaman nyata.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Mission Section */}
        <section id="visi-misi" className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center animate-on-scroll mb-8 sm:mb-12">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">Visi & Misi</h2>
                <p className="max-w-4xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Komitmen kami dalam menghasilkan lulusan yang berkualitas dan berdaya saing tinggi.
                </p>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 xl:gap-12">
              <Card className="animate-on-scroll">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-100 mb-4">
                    <Eye className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl">Visi</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                    Terwujudnya program studi terbaik di bidang ilmu bisnis digital, marketing dan teknologi informasi
                    sehingga dapat melahirkan sarjana terapan yang berdaya saing tinggi sebagai Digital Marketing
                    profesional, Entrepreneur & Business Analyst.
                  </p>
                </CardContent>
              </Card>
              <Card className="animate-on-scroll">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-green-100 mb-4">
                    <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl">Misi</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-gray-600">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Menyelenggarakan pendidikan di bidang Bisnis Digital yang dinamis dan unggul melalui
                        pembelajaran yang berkualitas.
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Melaksanakan pendidikan Bisnis Digital yang berorientasi pada kebutuhan untuk menghasilkan
                        lulusan yang berkompetensi Bisnis Digital.
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Melaksanakan penelitian dengan mengikuti perkembangan ilmu bisnis digital dan terpublikasikan
                        secara nasional maupun internasional.
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Melaksanakan kegiatan pengabdian masyarakat dengan menerapkan hasil riset bisnis digital sesuai
                        dengan kebutuhan industri 4.0.
                      </p>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-xs sm:text-sm leading-relaxed">
                        Mengembangkan jejaring nasional dan internasional dalam pengembangan bisnis digital dengan
                        prinsip kolaborasi, kesetaraan, dan ilmu pengetahuan.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Curriculum Section */}
        <section id="kurikulum" className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center animate-on-scroll mb-8 sm:mb-12">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Kurikulum Unggulan
                </h2>
                <p className="max-w-4xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Kurikulum yang dirancang bersama industri untuk memastikan lulusan siap kerja dan berdaya saing tinggi
                  di era digital.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <Card className="animate-on-scroll">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-blue-100 flex-shrink-0">
                      <span className="text-xs sm:text-sm font-bold text-blue-600">1</span>
                    </div>
                    Fondasi Bisnis Digital
                  </CardTitle>
                  <CardDescription className="text-sm">Semester 1-2</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">Pengantar Manajemen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">Pengantar Teknologi Informasi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">E-Business</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">Manajemen Pemasaran</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">Matematika Bisnis</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="animate-on-scroll">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-green-100 flex-shrink-0">
                      <span className="text-xs sm:text-sm font-bold text-green-600">2</span>
                    </div>
                    Pengembangan Keahlian
                  </CardTitle>
                  <CardDescription className="text-sm">Semester 3-4</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">E-Commerce</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">Digital Marketing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">Internet of Things</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">Sistem Informasi Manajemen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">Pemrograman Web</span>
                  </div>
                </CardContent>
              </Card>
              <Card className="animate-on-scroll md:col-span-2 lg:col-span-1">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg sm:text-xl">
                    <div className="flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-purple-100 flex-shrink-0">
                      <span className="text-xs sm:text-sm font-bold text-purple-600">3</span>
                    </div>
                    Spesialisasi & Praktik
                  </CardTitle>
                  <CardDescription className="text-sm">Semester 5-8</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">Business Intelligence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">Big Data</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">Technopreneurship</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">Social Media Analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-600 flex-shrink-0" />
                    <span className="text-xs sm:text-sm">Magang Industri</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimoni" className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center animate-on-scroll mb-8 sm:mb-12">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Testimoni Alumni
                </h2>
                <p className="max-w-4xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Dengarkan pengalaman sukses alumni kami yang telah berkarir di berbagai perusahaan terkemuka.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <Card className="animate-on-scroll">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
                      <Image
                        src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                        width="64"
                        height="64"
                        alt="Sarah Putri"
                        className="rounded-full object-cover w-full h-full"
                      />
                    </div>
                    <div className="min-w-0">
                      <CardTitle className="text-base sm:text-lg truncate">Sarah Putri</CardTitle>
                      <CardDescription className="text-xs sm:text-sm">
                        Digital Marketing Manager di Tokopedia
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mb-3 sm:mb-4" />
                  <p className="text-xs sm:text-sm text-gray-600 italic leading-relaxed mb-3 sm:mb-4">
                    "Program Bisnis Digital di Politeknik Krakatau memberikan saya fondasi yang kuat dalam digital
                    marketing. Kurikulum yang praktis dan magang industri sangat membantu saya siap kerja."
                  </p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="animate-on-scroll">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
                      <Image
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                        width="64"
                        height="64"
                        alt="Ahmad Rizki"
                        className="rounded-full object-cover w-full h-full"
                      />
                    </div>
                    <div className="min-w-0">
                      <CardTitle className="text-base sm:text-lg truncate">Ahmad Rizki</CardTitle>
                      <CardDescription className="text-xs sm:text-sm">Founder Startup E-Commerce</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mb-3 sm:mb-4" />
                  <p className="text-xs sm:text-sm text-gray-600 italic leading-relaxed mb-3 sm:mb-4">
                    "Mata kuliah Technopreneurship dan Business Intelligence sangat membantu saya membangun startup.
                    Sekarang perusahaan saya sudah memiliki omzet miliaran rupiah."
                  </p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="animate-on-scroll md:col-span-2 lg:col-span-1">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="relative w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
                      <Image
                        src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        width="64"
                        height="64"
                        alt="Maya Sari"
                        className="rounded-full object-cover w-full h-full"
                      />
                    </div>
                    <div className="min-w-0">
                      <CardTitle className="text-base sm:text-lg truncate">Maya Sari</CardTitle>
                      <CardDescription className="text-xs sm:text-sm">Data Analyst di Gojek</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Quote className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 mb-3 sm:mb-4" />
                  <p className="text-xs sm:text-sm text-gray-600 italic leading-relaxed mb-3 sm:mb-4">
                    "Pembelajaran Big Data dan Social Media Analysis di kampus sangat aplikatif. Saya langsung bisa
                    menerapkan ilmunya saat bekerja sebagai Data Analyst di perusahaan unicorn."
                  </p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Career Section */}
        <section id="karir" className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center animate-on-scroll mb-8 sm:mb-12">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Peluang Karir Cemerlang
                </h2>
                <p className="max-w-4xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Lulusan Bisnis Digital memiliki peluang karir yang sangat luas di berbagai industri yang sedang
                  berkembang pesat.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:gap-8 xl:gap-12">
              <div className="grid gap-4 sm:gap-6 animate-on-scroll">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                      <Lightbulb className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 flex-shrink-0" />
                      Technopreneur
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm">Wirausaha Digital</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      Membangun dan mengembangkan bisnis berbasis teknologi digital dengan inovasi dan kreativitas.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                      <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0" />
                      Digital Marketing Specialist
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm">Spesialis Pemasaran Digital</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      Mengelola strategi pemasaran digital, kampanye online, dan optimasi performa marketing di berbagai
                      platform.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                      <Smartphone className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600 flex-shrink-0" />
                      Social Media Specialist
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm">Spesialis Media Sosial</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      Mengelola konten dan strategi media sosial untuk membangun brand awareness dan engagement.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 sm:gap-6 animate-on-scroll">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                      <BarChart3 className="h-4 w-4 sm:h-5 sm:w-5 text-orange-600 flex-shrink-0" />
                      Data Analyst
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm">Analis Data</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      Menganalisis data bisnis untuk memberikan insights dan rekomendasi strategis bagi pengambilan
                      keputusan.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                      <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 flex-shrink-0" />
                      E-Commerce Manager
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm">Manajer E-Commerce</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      Mengelola platform e-commerce, optimasi penjualan online, dan pengembangan strategi bisnis
                      digital.
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                      <Target className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-600 flex-shrink-0" />
                      Business Analyst
                    </CardTitle>
                    <CardDescription className="text-xs sm:text-sm">Analis Bisnis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      Menganalisis proses bisnis dan memberikan solusi untuk meningkatkan efisiensi dan produktivitas
                      perusahaan.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center animate-on-scroll mb-8 sm:mb-12">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-4xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Temukan jawaban atas pertanyaan yang sering diajukan tentang Program Studi Bisnis Digital.
                </p>
              </div>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="animate-on-scroll">
                  <CardHeader className="cursor-pointer p-4 sm:p-6" onClick={() => toggleFAQ(index)}>
                    <CardTitle className="flex items-center justify-between text-left text-sm sm:text-base">
                      <span className="pr-4">{faq.question}</span>
                      {openFAQ === index ? (
                        <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 flex-shrink-0" />
                      )}
                    </CardTitle>
                  </CardHeader>
                  {openFAQ === index && (
                    <CardContent className="pt-0 px-4 pb-4 sm:px-6 sm:pb-6">
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{faq.answer}</p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 text-center text-white animate-on-scroll">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Siap Memulai Perjalanan Anda?
                </h2>
                <p className="max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 leading-relaxed">
                  Bergabunglah dengan ribuan mahasiswa yang telah memilih masa depan cemerlang di bidang Bisnis Digital.
                </p>
              </div>
              <div className="w-full max-w-md space-y-2">
                <form className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="email"
                    placeholder="Masukkan email Anda"
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-white/70 text-sm"
                  />
                  <Button type="submit" variant="secondary" className="w-full sm:w-auto">
                    Daftar Info
                  </Button>
                </form>
                <p className="text-xs text-blue-100">Dapatkan informasi terbaru tentang pendaftaran dan beasiswa.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto"
                >
                  Download Brosur
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent w-full sm:w-auto"
                >
                  Konsultasi Gratis
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontak" className="w-full py-8 sm:py-12 md:py-16 lg:py-24 xl:py-32 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center animate-on-scroll mb-8 sm:mb-12">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                  Hubungi Kami
                </h2>
                <p className="max-w-4xl text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Tim kami siap membantu Anda mendapatkan informasi lebih lanjut tentang program Bisnis Digital.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              <Card className="animate-on-scroll">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-blue-100">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">Telepon</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-base sm:text-lg font-semibold">0819 5280 8081</p>
                  <p className="text-xs sm:text-sm text-gray-600">Senin - Jumat, 08:00 - 17:00</p>
                </CardContent>
              </Card>
              <Card className="animate-on-scroll">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-green-100">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">Email</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-base sm:text-lg font-semibold break-all">politeknikrakatau@gmail.com</p>
                  <p className="text-xs sm:text-sm text-gray-600">Respon dalam 24 jam</p>
                </CardContent>
              </Card>
              <Card className="animate-on-scroll md:col-span-2 lg:col-span-1">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-purple-100">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl">Alamat</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-base sm:text-lg font-semibold">Bonakarta Blok B07</p>
                  <p className="text-xs sm:text-sm text-gray-600">Jl. S.A Tirtayasa No. 49</p>
                  <p className="text-xs sm:text-sm text-gray-600">Kota Cilegon, Banten</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full flex flex-col gap-2 sm:flex-row py-4 sm:py-6 items-center px-4 sm:px-6 border-t bg-white">
        <p className="text-xs text-gray-600 text-center sm:text-left">
          © 2024 Politeknik Krakatau - Program Studi Bisnis Digital. Semua hak dilindungi.
        </p>
        <nav className="flex gap-4 sm:gap-6 sm:ml-auto">
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Syarat & Ketentuan
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            Kebijakan Privasi
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-600">
            FAQ
          </Link>
        </nav>
      </footer>
    </div>
  )
}
