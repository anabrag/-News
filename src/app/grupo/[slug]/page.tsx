"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu } from "lucide-react"
import { useState } from "react"

const groupsData: Record<
  string,
  {
    name: string
    image: string
    description: string
    members: { name: string; position: string; image: string }[]
    news: { date: string; title: string; category: string; slug: string; image: string }[]
    photos: string[]
  }
> = {
  blackpink: {
    name: "BLACKPINK",
    image: "/blackpink-concert-stage-performance.jpg",
    description:
      "BLACKPINK é um grupo feminino sul-coreano formado pela YG Entertainment. O grupo estreou em agosto de 2016 e rapidamente se tornou um dos grupos de K-pop mais populares do mundo.",
    members: [
      { name: "Jisoo", position: "Vocalista Principal", image: "/placeholder-snj16.png" },
      { name: "Jennie", position: "Rapper Principal", image: "/placeholder-mp5kx.png" },
      { name: "Rosé", position: "Vocalista Principal", image: "/rose-blackpink.jpg" },
      { name: "Lisa", position: "Rapper Principal", image: "/placeholder-j4ly3.png" },
    ],
    news: [
      {
        date: "DEZ 5 2025",
        title: "BLACKPINK anuncia turnê mundial com shows no Brasil",
        category: "K-Pop",
        slug: "blackpink-anuncia-turnê-mundial-com-shows-no-brasil",
        image: "/blackpink-concert-stage-performance.jpg",
      },
      {
        date: "DEZ 3 2025",
        title: "Rosé lança single solo que domina paradas globais",
        category: "K-Pop",
        slug: "rose-lanca-single-solo-que-domina-paradas-globais",
        image: "/placeholder-q2vnb.png",
      },
      {
        date: "NOV 28 2025",
        title: "Lisa assina contrato com nova gravadora para carreira solo",
        category: "K-Pop",
        slug: "lisa-assina-contrato-com-nova-gravadora",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
    photos: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
  bts: {
    name: "BTS",
    image: "/bts-kpop-concert-stage.jpg",
    description:
      "BTS é um grupo masculino sul-coreano formado pela Big Hit Entertainment em 2013. O grupo se tornou um fenômeno global, quebrando recordes e levando o K-pop a novos patamares.",
    members: [
      { name: "RM", position: "Líder, Rapper Principal", image: "/placeholder.svg?height=400&width=400" },
      { name: "Jin", position: "Vocalista", image: "/placeholder.svg?height=400&width=400" },
      { name: "Suga", position: "Rapper Principal", image: "/placeholder.svg?height=400&width=400" },
      { name: "J-Hope", position: "Rapper, Dançarino Principal", image: "/placeholder.svg?height=400&width=400" },
      { name: "Jimin", position: "Vocalista Principal", image: "/placeholder.svg?height=400&width=400" },
      { name: "V", position: "Vocalista", image: "/placeholder.svg?height=400&width=400" },
      { name: "Jungkook", position: "Vocalista Principal", image: "/placeholder.svg?height=400&width=400" },
    ],
    news: [
      {
        date: "DEZ 5 2025",
        title: "BTS anuncia retorno triunfal com novo álbum em 2026",
        category: "K-Pop",
        slug: "bts-anuncia-retorno-triunfal-com-novo-album-em-2026",
        image: "/bts-kpop-concert-stage.jpg",
      },
      {
        date: "DEZ 1 2025",
        title: "Jungkook quebra recorde com single solo",
        category: "K-Pop",
        slug: "jungkook-quebra-recorde-com-single-solo",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        date: "NOV 25 2025",
        title: "RM revela detalhes sobre próximo álbum solo",
        category: "K-Pop",
        slug: "rm-revela-detalhes-sobre-proximo-album-solo",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
    photos: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
  },
}

export default function GroupPage({ params }: { params: { slug: string } }) {
  const [activeTab, setActiveTab] = useState<"news" | "members" | "photos">("news")
  const group = groupsData[params.slug]

  if (!group) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif mb-4">Grupo não encontrado</h1>
          <Link href="/">
            <Button>Voltar para Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>

            <Link href="/" className="text-3xl font-serif tracking-tight text-foreground">
              한국 News
            </Link>

            <nav className="hidden lg:flex items-center gap-8 text-sm">
              <Link href="/k-pop" className="text-muted-foreground hover:text-foreground transition-colors">
                K-Pop
              </Link>
              <Link href="/k-drama" className="text-muted-foreground hover:text-foreground transition-colors">
                K-Drama
              </Link>
              <Link href="/artistas" className="text-muted-foreground hover:text-foreground transition-colors">
                Artistas
              </Link>
              <Link href="/grupos" className="text-muted-foreground hover:text-foreground transition-colors">
                Grupos
              </Link>
              <Link href="/series" className="text-muted-foreground hover:text-foreground transition-colors">
                Séries
              </Link>
            </nav>

            <Link href="/planos">
              <Button variant="outline" size="sm" className="hidden lg:inline-flex bg-transparent">
                Assinar
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Group Hero */}
      <section className="relative h-[400px] overflow-hidden">
        <img src={group.image || "/placeholder.svg"} alt={group.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0">
          <div className="mx-auto max-w-7xl px-6 pb-8">
            <h1 className="text-5xl lg:text-6xl font-serif tracking-tight text-foreground mb-4">{group.name}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">{group.description}</p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="border-b border-border sticky top-0 bg-background z-10">
        <div className="mx-auto max-w-7xl px-6">
          <nav className="flex gap-8">
            <button
              onClick={() => setActiveTab("news")}
              className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "news"
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Últimas Notícias
            </button>
            <button
              onClick={() => setActiveTab("members")}
              className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "members"
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Integrantes
            </button>
            <button
              onClick={() => setActiveTab("photos")}
              className={`py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === "photos"
                  ? "border-foreground text-foreground"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              Fotos
            </button>
          </nav>
        </div>
      </section>

      {/* Content Area */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        {activeTab === "news" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-serif tracking-tight">Últimas Notícias</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {group.news.map((news, index) => (
                <Link key={index} href={`/news/${news.slug}`} className="group block space-y-4">
                  <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-muted">
                    <img
                      src={news.image || "/placeholder.svg"}
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground uppercase tracking-wider">
                      <time>{news.date}</time>
                      <Badge variant="outline" className="text-xs">
                        {news.category}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-serif tracking-tight leading-tight group-hover:text-muted-foreground transition-colors">
                      {news.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {activeTab === "members" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-serif tracking-tight">Integrantes</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {group.members.map((member, index) => (
                <div key={index} className="group">
                  <div className="relative aspect-square rounded-lg overflow-hidden bg-muted mb-4">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-serif tracking-tight mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "photos" && (
          <div className="space-y-8">
            <h2 className="text-3xl font-serif tracking-tight">Galeria de Fotos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.photos.map((photo, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] rounded-lg overflow-hidden bg-muted group cursor-pointer"
                >
                  <img
                    src={photo || "/placeholder.svg"}
                    alt={`${group.name} photo ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
