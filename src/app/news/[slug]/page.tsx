import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, Share2, Bookmark, Twitter, Facebook, Link2 } from "lucide-react"

// Tipos explícitos para notícia
type News = {
  title: string
  category: string
  date: string
  readTime: string
  author: string
  image: string
  content: string
  tags: string[]
}

const newsData: Record<string, News> = {
  "bts-anuncia-retorno-triunfal-com-novo-album-em-2026": {
    title: "BTS anuncia retorno triunfal com novo álbum em 2026",
    category: "K-Pop",
    date: "5 de Dezembro, 2025",
    readTime: "5 min de leitura",
    author: "Maria Silva",
    image: "/images/bts.jpg",
    content: `
      <p>Em uma notícia que emocionou milhões de fãs ao redor do mundo, o BTS anunciou oficialmente seu retorno aos palcos com um novo álbum previsto para 2026. O anúncio foi feito através de um vídeo especial compartilhado nas redes sociais do grupo, mostrando os sete membros reunidos pela primeira vez em mais de dois anos.</p>

      <h2>O Retorno Mais Esperado</h2>
      <p>Durante o hiato para o cumprimento do serviço militar obrigatório na Coreia do Sul, os fãs do ARMY aguardaram pacientemente por este momento. A Big Hit Music confirmou que todos os membros - RM, Jin, Suga, J-Hope, Jimin, V e Jungkook - já iniciaram as sessões de gravação do novo álbum.</p>

      <p>"Sentimos muita falta dos nossos fãs e de estar no palco", declarou RM durante o anúncio. "Este novo álbum representa não apenas nosso retorno, mas também nossa evolução como artistas e como grupo."</p>

      <h2>O Que Esperar</h2>
      <p>Segundo fontes próximas à produção, o novo álbum promete ser uma obra-prima que combina a maturidade adquirida durante o período de pausa com a energia característica do grupo. Espera-se colaborações internacionais surpresa e uma sonoridade que mistura elementos tradicionais coreanos com pop contemporâneo.</p>

      <p>A turnê mundial está sendo planejada para começar no segundo semestre de 2026, com datas confirmadas em mais de 30 países, incluindo shows no Brasil em São Paulo e Rio de Janeiro.</p>

      <h2>Impacto na Indústria</h2>
      <p>O retorno do BTS já está causando ondas na indústria musical global. Ações da HYBE Corporation subiram 15% após o anúncio, e plataformas de streaming reportaram um aumento de 200% nas reproduções do catálogo do grupo nas primeiras 24 horas.</p>

      <blockquote>
        "Este é um momento histórico não apenas para o K-pop, mas para a música global. O BTS redefiniu o que significa ser um artista no século XXI."
        <cite>- Park Min-jung, Crítica Musical</cite>
      </blockquote>

      <p>Mais detalhes sobre o álbum, incluindo nome, tracklist e data de lançamento exata, serão revelados nos próximos meses através dos canais oficiais do grupo.</p>
    `,
    tags: ["BTS", "K-Pop", "Comeback", "Big Hit Music", "HYBE"],
  },
  "novo-kdrama-de-romance-sobrenatural-quebra-recordes-de-audiencia": {
    title: "Novo K-Drama de romance sobrenatural quebra recordes de audiência",
    category: "K-Drama",
    date: "4 de Dezembro, 2025",
    readTime: "4 min de leitura",
    author: "João Santos",
    image: "/images/dorama-sobrenatural.jpg",
    content: `
      <p>A nova série de romance sobrenatural da tvN, "Entre Mundos", estreou com números impressionantes, alcançando 18.2% de audiência nacional em seu episódio de estreia, marcando o maior debut de um drama coreano em 2025.</p>

      <h2>Uma História Cativante</h2>
      <p>A trama segue uma guia turística comum que descobre ter a habilidade de ver espíritos após um acidente misterioso. Sua vida vira de cabeça para baixo quando ela conhece um detetive fantasma que precisa de sua ajuda para resolver seu próprio assassinato.</p>

      <p>A química entre os protagonistas Lee Ji-eun (IU) e Park Seo-joon tem sido amplamente elogiada tanto pela crítica quanto pelo público. "É raro ver uma conexão tão genuína na tela", comentou um crítico da Korean Herald.</p>

      <h2>Produção de Alto Nível</h2>
      <p>Com um orçamento estimado em 30 bilhões de won, "Entre Mundos" utiliza efeitos especiais de última geração para criar um mundo onde vivos e mortos coexistem. O diretor Kim Sung-ho, conhecido por seus trabalhos anteriores em "Goblin" e "Hotel del Luna", mais uma vez demonstra sua maestria em narrativas fantásticas.</p>

      <p>Os cenários foram cuidadosamente construídos para refletir tanto o mundo real quanto o espiritual, com cada frame sendo uma verdadeira obra de arte visual.</p>

      <h2>Repercussão Internacional</h2>
      <p>A Netflix, que detém os direitos de distribuição internacional, reportou que "Entre Mundos" alcançou o Top 10 em 89 países nas primeiras 48 horas após a estreia, incluindo Estados Unidos, Brasil, Japão e França.</p>

      <p>Os próximos episódios prometem revelar mais sobre o passado do detetive fantasma e aprofundar no mistério que cerca sua morte. Novos episódios vão ao ar aos sábados e domingos às 21h (horário de Seul).</p>
    `,
    tags: ["K-Drama", "tvN", "Romance", "Sobrenatural", "IU", "Park Seo-joon"],
  },
  "blackpink-anuncia-turnê-mundial-com-shows-no-brasil": {
    title: "BLACKPINK anuncia turnê mundial com shows no Brasil",
    category: "K-Pop",
    date: "3 de Dezembro, 2025",
    readTime: "4 min de leitura",
    author: "Ana Costa",
    image: "/blackpink-concert-stage-performance.jpg",
    content: `
      <p>O girl group mais influente da atualidade, BLACKPINK, acaba de anunciar sua aguardada turnê mundial "BORN PINK REBORN", que incluirá apresentações históricas no Brasil. As datas confirmadas são 15 de agosto em São Paulo (Allianz Parque) e 18 de agosto no Rio de Janeiro (Jeunesse Arena).</p>

      <h2>Expectativa Global</h2>
      <p>Após uma pausa para projetos solo, Jennie, Jisoo, Lisa e Rosé retornam aos palcos como grupo com um show espetacular que promete combinar seus maiores sucessos com performances inéditas do novo álbum "REBORN".</p>

      <p>"Estamos muito animadas para finalmente nos apresentar no Brasil", disse Rosé em entrevista coletiva. "O amor e energia dos BLINKs brasileiros são incomparáveis."</p>

      <h2>Detalhes da Turnê</h2>
      <p>A turnê passará por 35 cidades em 5 continentes, começando em Seoul em junho de 2026. Cada show terá aproximadamente 2h30 de duração, com mais de 30 músicas, incluindo hits como "DDU-DU DDU-DU", "How You Like That", "Pink Venom" e faixas inéditas.</p>

      <p>A produção conta com um palco de 360 graus, telas de LED gigantes e efeitos pirotécnicos de última geração. A YG Entertainment investiu mais de 50 milhões de dólares na produção desta turnê.</p>

      <h2>Vendas de Ingressos</h2>
      <p>A pré-venda para membros do BLINK Membership começa dia 10 de dezembro, enquanto a venda geral inicia dia 17 de dezembro. Os preços variam de R$ 390 (meia-entrada pista) a R$ 2.500 (camarote premium).</p>

      <p>Especialistas preveem que os ingressos se esgotem em minutos, similar ao que aconteceu na turnê anterior do grupo em 2023.</p>
    `,
    tags: ["BLACKPINK", "K-Pop", "Turnê", "Brasil", "Concerto", "Girl Group"],
  },
  "atriz-de-squid-game-revela-bastidores-da-terceira-temporada": {
    title: "Atriz de 'Squid Game' revela bastidores da 3ª temporada",
    category: "K-Drama",
    date: "2 de Dezembro, 2025",
    readTime: "3 min de leitura",
    author: "Carlos Mendes",
    image: "/images/squid-game.jpg",
    content: `
      <p>Jung Ho-yeon, que conquistou o mundo com sua atuação como Kang Sae-byeok em "Squid Game", compartilhou detalhes exclusivos sobre as filmagens da aguardada terceira temporada durante entrevista à revista Vogue Korea.</p>

      <h2>Retorno Surpreendente</h2>
      <p>Embora sua personagem tenha tido um destino trágico na primeira temporada, a atriz confirmou sua participação na terceira temporada através de flashbacks importantes que revelarão mais sobre o passado de Sae-byeok e sua conexão com os criadores do jogo.</p>

      <p>"Foi emocionante voltar ao set", revelou Jung. "Revisitar a Sae-byeok me fez lembrar por que me apaixonei pela atuação. Essas cenas vão fazer os fãs chorarem."</p>

      <h2>Novos Desafios</h2>
      <p>A terceira temporada, programada para estrear em junho de 2026 na Netflix, promete ser ainda mais intensa que as anteriores. O diretor Hwang Dong-hyuk confirmou que novos jogos foram criados especialmente para esta temporada, mantendo o suspense e crítica social que tornaram a série um fenômeno global.</p>

      <p>As filmagens ocorreram ao longo de 8 meses em locações secretas na Coreia do Sul, com medidas de segurança extremas para evitar vazamentos da trama.</p>

      <h2>Impacto Contínuo</h2>
      <p>"Squid Game" continua sendo a série não-inglesa mais assistida da história da Netflix, com mais de 2 bilhões de horas visualizadas. A segunda temporada, lançada em 2024, também quebrou recordes de audiência.</p>

      <p>Jung Ho-yeon, que ganhou o Emmy de Melhor Atriz Coadjuvante em 2022 por seu papel, está atualmente filmando dois longas-metragens de Hollywood e foi nomeada embaixadora global da Louis Vuitton.</p>
    `,
    tags: ["Squid Game", "K-Drama", "Netflix", "Jung Ho-yeon", "Bastidores"],
  },
  "rumores-de-namoro-entre-jungkook-e-winter-cenario-atual": {
    title: "Jungkook e Winter voltam ao centro das atenções após nova onda de especulações sobre possível relacionamento",
    category: "K-Pop",
    date: "6 de Dezembro, 2025",
    readTime: "6 min de leitura",
    author: "Redação 한국 News",
    image: "/images/jungkook-e-winter.jpg",
    content: `
      <p>O início de dezembro reacendeu discussões no meio do entretenimento coreano após internautas destacarem uma série de coincidências envolvendo Jungkook, integrante do BTS, e Winter, membro do aespa. A movimentação começou quando capturas recentes de Jungkook em um programa exibiram uma tatuagem que alguns fãs consideraram semelhante à vista anteriormente em Winter. A comparação rapidamente circulou em fóruns coreanos e redes sociais, impulsionando novas teorias sobre uma possível proximidade entre os artistas.</p>
      <p>A partir daí, outras coincidências foram retomadas pelo público, como o uso de acessórios parecidos em diferentes ocasiões, itens semelhantes durante apresentações e lembranças antigas de que Jungkook teria comparecido a um concerto do aespa durante um período de folga. Esses elementos voltaram a circular com força e ganharam espaço em discussões de grande volume, tanto em plataformas coreanas quanto internacionais.</p>
      <p>Apesar de parte do público encarar as observações como possíveis indícios, há quem considere a repercussão exagerada, sobretudo pela frequência com que artistas da indústria compartilham tendências de moda, objetos de marca semelhante e círculos profissionais próximos. Ainda assim, o tema se manteve entre os mais comentados no cenário do K-pop nos últimos dias, alimentado por análises, debates e recolhimento de supostas “pistas” por usuários.</p>
      <p>Como de costume em situações desse tipo, a curiosidade do público cresce na mesma proporção em que há silêncio oficial. Até o momento, não houve manifestação de nenhuma das duas empresas responsáveis pelos artistas.</p>
      <p>São rumores e nenhuma empresa confirmou nada até agora.</p>
    `,
    tags: ["Jungkook", "Winter", "K-Pop", "Rumores", "aespa", "BTS"],
  },
}

export default async function NewsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const news = newsData[slug]

  // Se a notícia não existir, mostrar mensagem
  if (!news) {
    return (
      <div className="min-h-screen bg-background">
        <header className="border-b border-border">
          <div className="mx-auto max-w-7xl px-6 py-6">
            <Link href="/" className="text-3xl font-serif tracking-tight text-foreground">
              한국 News
            </Link>
          </div>
        </header>
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h1 className="text-4xl font-serif mb-4">Notícia não encontrada</h1>
          <Link href="/" className="text-primary hover:underline">
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    )
  }

  // Sugestões de notícias relacionadas
  type RelatedNews = {
    title: string
    category: string
    slug: string
  }
  const relatedNews: RelatedNews[] = [
    {
      title: "NewJeans lança clipe inovador com tecnologia de IA",
      category: "K-Pop",
      slug: "newjeans-lanca-clipe-inovador-com-tecnologia-de-ia",
    },
    {
      title: "SEVENTEEN bate recorde de vendas com novo álbum",
      category: "K-Pop",
      slug: "seventeen-bate-recorde-de-vendas-com-novo-album",
    },
    {
      title: "Netflix anuncia 10 novos K-Dramas originais",
      category: "K-Drama",
      slug: "netflix-anuncia-10-novos-k-dramas-originais",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-3xl font-serif tracking-tight text-foreground">
              한국 News
            </Link>
            <Link href="/planos">
              <Button variant="outline" size="sm" className="bg-transparent">
                Assinar
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Back Button */}
      <div className="mx-auto max-w-4xl px-6 py-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          Voltar para início
        </Link>
      </div>

      {/* Article Header */}
      <article className="mx-auto max-w-4xl px-6 pb-24">
        <div className="mb-8">
          <Badge variant="secondary" className="mb-4">
            {news.category}
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-serif tracking-tight text-balance mb-6">{news.title}</h1>

          <div className="flex items-center justify-between flex-wrap gap-4 py-6 border-y border-border">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span>Por {news.author}</span>
              <time>{news.date}</time>
              <span>{news.readTime}</span>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <Bookmark className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Link2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-12">
          <img
            src={news.image || "/placeholder.svg"}
            alt={news.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Article Content */}
        <div
          className="prose prose-lg max-w-none
            prose-headings:font-serif prose-headings:tracking-tight
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-6
            prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:my-8
            prose-cite:block prose-cite:not-italic prose-cite:text-sm prose-cite:text-muted-foreground prose-cite:mt-2
            prose-strong:text-foreground prose-strong:font-semibold"
          dangerouslySetInnerHTML={{ __html: news.content }}
        />

        {/* Tags */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-wrap gap-2">
            {news.tags.map((tag: string) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold">Compartilhe esta notícia</span>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Twitter className="h-4 w-4 mr-2" />
                Twitter
              </Button>
              <Button variant="outline" size="sm">
                <Facebook className="h-4 w-4 mr-2" />
                Facebook
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Copiar link
              </Button>
            </div>
          </div>
        </div>

        {/* Related News */}
        <div className="mt-16">
          <h2 className="text-2xl font-serif tracking-tight mb-8">Leia também</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedNews.map((related, index) => (
              <Link key={index} href={`/news/${related.slug}`} className="group space-y-3">
                <div className="aspect-video bg-muted rounded-lg" />
                <Badge variant="outline" className="text-xs">
                  {related.category}
                </Badge>
                <h3 className="font-serif text-lg leading-tight group-hover:text-muted-foreground transition-colors">
                  {related.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 한국 News. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
