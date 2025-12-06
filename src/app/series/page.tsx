import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu, Star } from "lucide-react"

export default function SeriesPage() {
  const series = [
    {
      title: "Squid Game",
      year: "2021-2024",
      genre: "Thriller",
      rating: "9.2",
      image: "/korean-drama-actress-on-set.jpg",
      seasons: "3 temporadas",
    },
    {
      title: "Aterrissagem de Emergência no Amor",
      year: "2019-2020",
      genre: "Romance",
      rating: "9.1",
      image: "/korean-cinema-film-movie.jpg",
      seasons: "1 temporada",
    },
    {
      title: "It's Okay to Not Be Okay",
      year: "2020",
      genre: "Romance",
      rating: "8.9",
      image: "/korean-drama-actress-on-set.jpg",
      seasons: "1 temporada",
    },
    {
      title: "Boys Over Flowers",
      year: "2009",
      genre: "Romance",
      rating: "8.5",
      image: "/korean-cinema-film-movie.jpg",
      seasons: "1 temporada",
    },
    {
      title: "Itaewon Class",
      year: "2020",
      genre: "Drama",
      rating: "8.7",
      image: "/korean-drama-actress-on-set.jpg",
      seasons: "1 temporada",
    },
    {
      title: "The King: Eternal Monarch",
      year: "2020",
      genre: "Fantasia",
      rating: "8.4",
      image: "/korean-cinema-film-movie.jpg",
      seasons: "1 temporada",
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
              <Link href="/series" className="text-foreground font-semibold">
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
            Séries
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-serif tracking-tight text-balance mb-6">Séries e K-Dramas</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explore os K-Dramas mais populares, de clássicos atemporais a lançamentos recentes
          </p>
        </div>

        {/* Series Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {series.map((show, index) => (
            <Link key={index} href="#" className="group block">
              <div className="relative aspect-[2/3] rounded-lg overflow-hidden bg-muted mb-4">
                <img
                  src={show.image || "/placeholder.svg"}
                  alt={show.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{show.genre}</Badge>
                </div>
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-black/80 px-2 py-1 rounded">
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs text-white font-semibold">{show.rating}</span>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-serif tracking-tight leading-tight group-hover:text-muted-foreground transition-colors text-balance">
                  {show.title}
                </h3>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span>{show.year}</span>
                  <span>•</span>
                  <span>{show.seasons}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories Filter */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-2xl font-serif tracking-tight mb-6">Gêneros</h2>
        <div className="flex flex-wrap gap-3">
          {["Todos", "Romance", "Thriller", "Comédia", "Histórico", "Fantasia", "Melodrama", "Ação"].map((category) => (
            <Button key={category} variant={category === "Todos" ? "default" : "outline"} size="sm">
              {category}
            </Button>
          ))}
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
