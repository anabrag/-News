import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Menu } from "lucide-react"

export default function GruposPage() {
  const groups = [
    {
      name: "BTS",
      category: "Boy Band",
      members: "7 membros",
      image: "/bts-kpop-concert-stage.jpg",
      debut: "2013",
    },
    {
      name: "BLACKPINK",
      category: "Girl Group",
      members: "4 membros",
      image: "/blackpink-concert-stage-performance.jpg",
      debut: "2016",
    },
    {
      name: "SEVENTEEN",
      category: "Boy Band",
      members: "13 membros",
      image: "/k-pop-idol-group-performing-on-stage-with-dramatic.jpg",
      debut: "2015",
    },
    {
      name: "NewJeans",
      category: "Girl Group",
      members: "5 membros",
      image: "/k-pop-idol-group-performing-on-stage-with-dramatic.jpg",
      debut: "2022",
    },
    {
      name: "Stray Kids",
      category: "Boy Band",
      members: "8 membros",
      image: "/bts-kpop-concert-stage.jpg",
      debut: "2018",
    },
    {
      name: "TWICE",
      category: "Girl Group",
      members: "9 membros",
      image: "/blackpink-concert-stage-performance.jpg",
      debut: "2015",
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
              <Link href="/grupos" className="text-foreground font-semibold">
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
            Grupos
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-serif tracking-tight text-balance mb-6">Grupos de K-Pop</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Descubra os grupos de K-Pop que estão conquistando o mundo com suas músicas e performances
          </p>
        </div>

        {/* Groups Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {groups.map((group, index) => (
            <Link key={index} href="#" className="group block">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-muted mb-4">
                <img
                  src={group.image || "/placeholder.svg"}
                  alt={group.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary">{group.category}</Badge>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-serif tracking-tight leading-tight group-hover:text-muted-foreground transition-colors">
                  {group.name}
                </h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{group.members}</span>
                  <span>•</span>
                  <span>Debut: {group.debut}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories Filter */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <h2 className="text-2xl font-serif tracking-tight mb-6">Categorias</h2>
        <div className="flex flex-wrap gap-3">
          {["Todos", "Boy Bands", "Girl Groups", "Co-ed", "1ª Geração", "2ª Geração", "3ª Geração", "4ª Geração"].map(
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
