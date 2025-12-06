import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Menu } from "lucide-react"
import Image from "next/image"

export default function Home() {
  const featuredNews = [
    {
      date: "DEZ 5 2025",
      title: "BTS anuncia retorno triunfal com novo álbum em 2026",
      category: "K-Pop",
      image: "/images/bts.jpg",
      slug: "bts-anuncia-retorno-triunfal-com-novo-album-em-2026",
    },
    {
      date: "DEZ 4 2025",
      title: "Novo K-Drama de romance sobrenatural quebra recordes de audiência",
      category: "K-Drama",
      image: "/images/dorama-sobrenatural.jpg",
      slug: "novo-kdrama-de-romance-sobrenatural-quebra-recordes-de-audiencia",
    },
    {
      date: "DEZ 3 2025",
      title: "BLACKPINK anuncia turnê mundial com shows no Brasil",
      category: "K-Pop",
      image: "/images/blackpink-capa.jpg",
      slug: "blackpink-anuncia-turnê-mundial-com-shows-no-brasil",
    },
    {
      date: "DEZ 2 2025",
      title: "Atriz de 'Squid Game' revela bastidores da 3ª temporada",
      category: "K-Drama",
      image: "/images/squid-game.jpg",
      slug: "atriz-de-squid-game-revela-bastidores-da-terceira-temporada",
    },
  ]

  const latestNews = [
    {
      date: "DEZ 5 2025",
      title: "NewJeans lança clipe inovador com tecnologia de IA",
      category: "K-Pop",
      slug: "newjeans-lanca-clipe-inovador-com-tecnologia-de-ia",
    },
    {
      date: "DEZ 5 2025",
      title: "Remake de 'Boys Over Flowers' confirmado para 2026",
      category: "K-Drama",
      slug: "remake-de-boys-over-flowers-confirmado-para-2026",
    },
    {
      date: "DEZ 4 2025",
      title: "SEVENTEEN bate recorde de vendas com novo álbum",
      category: "K-Pop",
      slug: "seventeen-bate-recorde-de-vendas-com-novo-album",
    },
    {
      date: "DEZ 4 2025",
      title: "Netflix anuncia 10 novos K-Dramas originais",
      category: "K-Drama",
      slug: "netflix-anuncia-10-novos-kdramas-originais",
    },
    {
      date: "DEZ 3 2025",
      title: "Stray Kids conquista topo da Billboard pela quarta vez",
      category: "K-Pop",
      slug: "stray-kids-conquista-topo-da-billboard-pela-quarta-vez",
    },
    {
      date: "DEZ 3 2025",
      title: "Ator de 'Aterrissagem de Emergência no Amor' estrela novo thriller",
      category: "K-Drama",
      slug: "ator-de-aterrissagem-de-emergencia-no-amor-estrela-novo-thriller",
    },
  ]

  const categories = [
    { name: "Girl Groups", slug: "girl-groups" },
    { name: "Boy Bands", slug: "boy-bands" },
    { name: "Romance", slug: "romance" },
    { name: "Thriller", slug: "thriller" },
    { name: "Histórico", slug: "historico" },
    { name: "Fantasia", slug: "fantasia" },
    { name: "Comebacks", slug: "comebacks" },
    { name: "Atores", slug: "atores" },
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
      <section className="mx-auto max-w-7xl px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-4">
              Destaque do Dia
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-serif tracking-tight text-balance mb-6">Rumores de namoro entre Jungkook e Winter ganham força</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 text-pretty">
              No início de dezembro de 2025, a especulação sobre um possível romance entre Jungkook (do BTS) e Winter (da aespa) ressurgiu com força nas redes e fóruns de fãs.
            </p>
              <Link href="/news/rumores-de-namoro-entre-jungkook-e-winter-cenario-atual">
                <Button size="lg" className="group flex items-center gap-2">
                  Veja na íntegra
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
          </div>
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
            <Image
              src="/images/jungkook-e-winter.jpg"
              alt="K-pop performance"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured News Grid */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-serif tracking-tight">Em Destaque</h2>
          <Link href="#" className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-2">
            Ver todas
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredNews.map((news, index) => (
            <Link key={index} href={`/news/${news.slug}`} className="group block space-y-4">
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-muted">
                <Image
                  src={news.image || "/placeholder.svg"}
                  alt={news.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-4 text-xs text-muted-foreground uppercase tracking-wider">
                  <time>{news.date}</time>
                  <Badge variant="outline" className="text-xs">
                    {news.category}
                  </Badge>
                </div>
                <h3 className="text-2xl font-serif tracking-tight leading-tight group-hover:text-muted-foreground transition-colors text-balance">
                  {news.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest News List */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="bg-accent/30 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-serif tracking-tight mb-8">Últimas Notícias</h2>
          <div className="space-y-6">
            {latestNews.map((news, index) => (
              <Link
                key={index}
                href={`/news/${news.slug}`}
                className="group flex items-center justify-between py-6 border-b border-border last:border-0 hover:px-4 transition-all"
              >
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground uppercase tracking-wider">
                    <time>{news.date}</time>
                    <span className="text-accent-foreground/50">{news.category}</span>
                  </div>
                  <h3 className="text-xl font-serif tracking-tight leading-tight group-hover:text-muted-foreground transition-colors text-pretty">
                    {news.title}
                  </h3>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-3xl font-serif tracking-tight mb-8">Explore por Categoria</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/categoria/${category.slug}`}
              className="group relative aspect-square rounded-lg overflow-hidden bg-muted hover:shadow-lg transition-shadow"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-lg font-serif tracking-tight">{category.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 lg:p-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-serif tracking-tight mb-4">Não perca nenhum comeback ou estreia</h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Receba as últimas notícias de K-Pop e K-Drama direto no seu email
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu email"
              className="flex-1 px-4 py-3 rounded-lg bg-background text-foreground border-0 focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <Button size="lg" variant="secondary">
              Inscrever
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-serif text-xl mb-4">한국 News</h3>
              <p className="text-sm text-muted-foreground">Conectando você ao mundo do K-Pop e K-Drama desde 2025.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Conteúdo</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    K-Pop News
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    K-Drama Reviews
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Entrevistas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Bastidores
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Contato
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Anuncie
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Siga-nos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    Twitter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-foreground">
                    YouTube
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 한국 News. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
