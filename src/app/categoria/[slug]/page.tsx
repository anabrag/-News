import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Menu } from "lucide-react"

const categoryGroups: Record<string, { name: string; slug: string; image: string; members: number }[]> = {
  "girl-groups": [
    { name: "BLACKPINK", slug: "blackpink", image: "/blackpink-concert-stage-performance.jpg", members: 4 },
    { name: "NewJeans", slug: "newjeans", image: "/placeholder-wbadm.png", members: 5 },
    { name: "aespa", slug: "aespa", image: "/placeholder-4qa0s.png", members: 4 },
    { name: "IVE", slug: "ive", image: "/placeholder-hby9z.png", members: 6 },
    { name: "LE SSERAFIM", slug: "le-sserafim", image: "/placeholder-p4nzc.png", members: 5 },
    { name: "ITZY", slug: "itzy", image: "/placeholder-wnjok.png", members: 5 },
  ],
  "boy-bands": [
    { name: "BTS", slug: "bts", image: "/bts-kpop-concert-stage.jpg", members: 7 },
    { name: "SEVENTEEN", slug: "seventeen", image: "/placeholder-jy5xy.png", members: 13 },
    { name: "Stray Kids", slug: "stray-kids", image: "/placeholder-4ncue.png", members: 8 },
    { name: "TOMORROW X TOGETHER", slug: "txt", image: "/placeholder-907ub.png", members: 5 },
    { name: "ENHYPEN", slug: "enhypen", image: "/placeholder-le3rz.png", members: 7 },
    { name: "NCT", slug: "nct", image: "/placeholder-3c8y1.png", members: 23 },
  ],
}

const categoryNames: Record<string, string> = {
  "girl-groups": "Girl Groups",
  "boy-bands": "Boy Bands",
  romance: "Romance",
  thriller: "Thriller",
  historico: "Histórico",
  fantasia: "Fantasia",
  comebacks: "Comebacks",
  atores: "Atores",
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const categoryName = categoryNames[slug] || slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase())
  const groups = categoryGroups[slug] || []

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

      {/* Category Header */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex items-center gap-4 mb-4">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-foreground">{categoryName}</span>
        </div>
        <h1 className="text-5xl font-serif tracking-tight text-balance mb-4">{categoryName}</h1>
        <p className="text-lg text-muted-foreground">
          Explore todos os grupos de {categoryName ? categoryName.toLowerCase() : "esta categoria"}
        </p>
      </section>

      {/* Groups Grid */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        {groups.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {groups.map((group) => (
              <Link key={group.slug} href={`/grupo/${group.slug}`} className="group block">
                <div className="relative aspect-square rounded-lg overflow-hidden bg-muted mb-4">
                  <img
                    src={group.image || "/placeholder.svg"}
                    alt={group.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-serif tracking-tight mb-1 group-hover:text-muted-foreground transition-colors">
                  {group.name}
                </h3>
                <p className="text-sm text-muted-foreground">{group.members} membros</p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nenhum conteúdo disponível para esta categoria ainda.</p>
          </div>
        )}
      </section>
    </div>
  )
}
