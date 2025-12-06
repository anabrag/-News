import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu } from "lucide-react"

export default function KPopPage() {
  const kpopNews = [
    {
      date: "DEZ 6 2025",
      title: "BTS anuncia retorno triunfal com novo álbum em 2026",
      category: "Comeback",
      image: "/bts-kpop-concert-stage.jpg",
      slug: "bts-anuncia-retorno-triunfal-com-novo-album-em-2026",
    },
    {
      date: "DEZ 5 2025",
      title: "BLACKPINK anuncia turnê mundial com shows no Brasil",
      category: "Tour",
      image: "/blackpink-concert-stage-performance.jpg",
      slug: "blackpink-anuncia-turnê-mundial-com-shows-no-brasil",
    },
    {
      date: "DEZ 5 2025",
      title: "NewJeans lança clipe inovador com tecnologia de IA",
      category: "Lançamento",
      image: "/k-pop-idol-group-performing-on-stage-with-dramatic.jpg",
    },
    {
      date: "DEZ 4 2025",
      title: "SEVENTEEN bate recorde de vendas com novo álbum",
      category: "Conquista",
      image: "/bts-kpop-concert-stage.jpg",
    },
    {
      date: "DEZ 3 2025",
      title: "Stray Kids conquista topo da Billboard pela quarta vez",
      category: "Chart",
      image: "/k-pop-idol-group-performing-on-stage-with-dramatic.jpg",
    },
    {
      date: "DEZ 3 2025",
      title: "TWICE revela teaser misterioso para próximo comeback",
      category: "Teaser",
      image: "/blackpink-concert-stage-performance.jpg",
    },
  ]

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
              <Link href="/k-pop" className="text-foreground font-semibold">
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

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            K-Pop
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-serif tracking-tight text-balance mb-6">Notícias de K-Pop</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Fique por dentro dos últimos lançamentos, comebacks, tours e conquistas dos seus grupos e artistas favoritos
          </p>
        </div>

        {/* Featured K-Pop News */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {kpopNews.map((news, index) => (
            <Link key={index} href={news.slug ? `/news/${news.slug}` : "#"} className="group block space-y-4">
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
                <h3 className="text-xl font-serif tracking-tight leading-tight group-hover:text-muted-foreground transition-colors text-balance">
                  {news.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories Filter */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-2xl font-serif tracking-tight mb-6">Categorias</h2>
        <div className="flex flex-wrap gap-3">
          {["Todos", "Boy Bands", "Girl Groups", "Solos", "Debuts", "Comebacks", "Charts", "Colaborações"].map(
            (category) => (
              <Button key={category} variant={category === "Todos" ? "default" : "outline"} size="sm">
                {category}
              </Button>
            ),
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 한국 News. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
