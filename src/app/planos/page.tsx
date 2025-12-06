import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PlanosPage() {
  const plans = [
    {
      name: "Gratuito",
      price: "R$ 0",
      period: "/mês",
      description: "Para quem está começando a explorar o mundo do K-Pop e K-Drama",
      features: ["Acesso a notícias básicas", "Atualizações semanais", "Newsletter mensal", "Anúncios"],
      buttonText: "Começar Grátis",
      highlighted: false,
    },
    {
      name: "Premium",
      price: "R$ 19,90",
      period: "/mês",
      description: "Para fãs dedicados que querem conteúdo exclusivo",
      features: [
        "Tudo do plano Gratuito",
        "Notícias em tempo real",
        "Conteúdo exclusivo e bastidores",
        "Sem anúncios",
        "Newsletter diária",
        "Acesso antecipado a entrevistas",
        "Wallpapers e conteúdo para download",
      ],
      buttonText: "Assinar Agora",
      highlighted: true,
    },
    {
      name: "VIP",
      price: "R$ 39,90",
      period: "/mês",
      description: "Para super fãs que querem a experiência completa",
      features: [
        "Tudo do plano Premium",
        "Lives exclusivas com artistas",
        "Grupo VIP no Discord",
        "Sorteios de ingressos e produtos",
        "Acesso a documentários exclusivos",
        "Badge especial no site",
        "Suporte prioritário",
        "Descontos em eventos parceiros",
      ],
      buttonText: "Seja VIP",
      highlighted: false,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-serif font-bold text-foreground">
              한국 News
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm hover:text-accent transition-colors">
                Início
              </Link>
              <Link href="/k-pop" className="text-sm hover:text-accent transition-colors">
                K-Pop
              </Link>
              <Link href="/k-drama" className="text-sm hover:text-accent transition-colors">
                K-Drama
              </Link>
              <Link href="/artistas" className="text-sm hover:text-accent transition-colors">
                Artistas
              </Link>
              <Link href="/grupos" className="text-sm hover:text-accent transition-colors">
                Grupos
              </Link>
              <Link href="/series" className="text-sm hover:text-accent transition-colors">
                Séries
              </Link>
              <Link href="/planos" className="text-sm font-semibold text-accent">
                Assinar
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-accent/5 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">Escolha Seu Plano</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Tenha acesso ao melhor conteúdo sobre K-Pop, K-Drama e cultura coreana com nossos planos exclusivos
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-lg border-2 p-8 transition-all hover:shadow-xl ${
                  plan.highlighted ? "border-accent bg-accent/5 scale-105 md:scale-110" : "border-border bg-background"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Mais Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-3">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-accent text-accent-foreground hover:bg-accent/90"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-12">
            Perguntas Frequentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-background rounded-lg p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Posso cancelar a qualquer momento?</h3>
              <p className="text-muted-foreground">
                Sim! Você pode cancelar sua assinatura a qualquer momento sem taxas ou multas. Seu acesso continuará até
                o final do período pago.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Como funciona o período de teste?</h3>
              <p className="text-muted-foreground">
                Todos os planos pagos incluem 7 dias de teste gratuito. Você pode cancelar antes do fim do período e não
                será cobrado.
              </p>
            </div>
            <div className="bg-background rounded-lg p-6 border border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Posso mudar de plano depois?</h3>
              <p className="text-muted-foreground">
                Com certeza! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças entram em
                vigor imediatamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card text-card-foreground py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-serif font-bold mb-4">한국 News</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Sua fonte completa de notícias sobre K-Pop, K-Drama e cultura coreana
            </p>
            <div className="flex justify-center gap-6 text-sm text-muted-foreground">
              <Link href="/sobre" className="hover:text-accent transition-colors">
                Sobre
              </Link>
              <Link href="/contato" className="hover:text-accent transition-colors">
                Contato
              </Link>
              <Link href="/privacidade" className="hover:text-accent transition-colors">
                Privacidade
              </Link>
              <Link href="/termos" className="hover:text-accent transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
