import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu } from "lucide-react"

export default function ArtistasPage() {
  const artists = [
    {
      name: "IU",
      category: "Solo",
      image: "/korean-drama-actress-on-set.jpg",
      description: "Cantora e atriz sul-coreana, conhecida como 'A Nação's Little Sister'",
    },
    {
      name: "Park Seo-joon",
      category: "Ator",
      image: "/korean-cinema-film-movie.jpg",
      description: "Ator principal de 'Itaewon Class' e 'What's Wrong with Secretary Kim'",
    },
    {
      name: "Jennie Kim",
      category: "Idol",
      image: "/blackpink-concert-stage-performance.jpg",
      description: "Membro do BLACKPINK e ícone de moda global",
    },
    {
      name: "Lee Min-ho",
      category: "Ator",
      image: "/korean-cinema-film-movie.jpg",
      description: "Estrela de 'Boys Over Flowers' e 'The King: Eternal Monarch'",
    },
    {
      name: "Jungkook",
      category: "Idol",
      image: "/bts-kpop-concert-stage.jpg",
      description: "Membro do BTS e artista solo de sucesso",
    },
    {
      name: "Kim Soo-hyun",
      category: "Ator",
      image: "/korean-cinema-film-movie.jpg",
      description: "Ator premiado de 'It's Okay to Not Be Okay' e 'My Love from the Star'",
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
              <Link href="/artistas" className="text-foreground font-semibold">
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
            Artistas
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-serif tracking-tight text-balance mb-6">Artistas em Destaque</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Conheça os artistas, atores e idols que estão moldando a cultura pop coreana
          </p>
        </div>

        {/* Artists Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artists.map((artist, index) => (
            <Link key={index} href="#" className="group block space-y-4">
              <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-muted">
                <img
                  src={artist.image || "/placeholder.svg"}
                  alt={artist.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary">{artist.category}</Badge>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-serif tracking-tight leading-tight group-hover:text-muted-foreground transition-colors">
                  {artist.name}
                </h3>
                <p className="text-sm text-muted-foreground text-pretty">{artist.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories Filter */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-2xl font-serif tracking-tight mb-6">Categorias</h2>
        <div className="flex flex-wrap gap-3">
          {["Todos", "Idols", "Atores", "Cantores Solo", "Produtores", "Modelos"].map((category) => (
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
