import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import {
  Sparkles,
  MapPin,
  Clock,
  Instagram,
  Star,
  CalendarCheck,
  Navigation,
  HeartHandshake,
  ShieldCheck,
  ScanLine,
  Gem,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/reveal";
import { Marquee } from "@/components/marquee";
import { WhatsAppButton, WhatsAppIcon } from "@/components/whatsapp-button";
import logoAsset from "@/assets/logo-millard-bronze.png.asset.json";
import retrato from "@/assets/gabriela-retrato.jpg.asset.json";
import {
  services,
  benefits,
  testimonials,
  howItWorks,
  aboutPillars,
  faqs,
  WHATSAPP_URL,
  INSTAGRAM_URL,
} from "@/lib/site-content";
import { googleReviewsQueryOptions } from "@/lib/google-reviews.functions";

const serviceImages: Record<string, string> = {
  "estetica-avancada": "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2000&auto=format&fit=crop",
  laserterapia: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2000&auto=format&fit=crop",
  "estetica-facial": "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=2000&auto=format&fit=crop",
  "estetica-corporal": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=2000&auto=format&fit=crop",
  regenerativa: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2000&auto=format&fit=crop",
  "cuidados-personalizados": "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2000&auto=format&fit=crop",
};

const logo = logoAsset.url;

const title = "Millard | Estética e Laserterapia";
const description =
  "Millard Estética e Laserterapia. Estética avançada sem dor nem agulhas, através de procedimentos inovadores baseados na nanotecnologia, em São Carlos, SP.";

export const Route = createFileRoute("/")({
  loader: ({ context }) => {
    context.queryClient.ensureQueryData(googleReviewsQueryOptions);
  },
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          name: "Millard Estética e Laserterapia",
          description,
          image: logo,
          address: {
            "@type": "PostalAddress",
            addressLocality: "São Carlos",
            addressRegion: "SP",
            addressCountry: "BR",
          },
          areaServed: "São Carlos, SP",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <main>
        <Hero />
        <Trust />
        <HowItWorks />
        <Services />
        <BeforeAfter />
        <Benefits />
        <About />
        <Testimonials />
        <Location />
        <Faq />
      </main>
      <Footer />
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Agendar pelo WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-whatsapp transition-transform hover:scale-110 sm:h-[4.5rem] sm:w-[4.5rem]"
      >
        <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
      </a>
    </div>
  );
}

function SectionTitle({
  eyebrow,
  title: heading,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal className="text-center">
      <p className="eyebrow divider-ornament">{eyebrow}</p>
      <h2 className="mt-2.5 text-[2rem] leading-tight text-foreground sm:text-4xl">
        {heading}
      </h2>
      <div className="rule-gold mx-auto mt-3 w-32" />
      {subtitle ? (
        <p className="mx-auto mt-3.5 max-w-2xl text-[0.94rem] leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  );
}

function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-[#080808]">
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 pb-16 pt-6 text-center sm:pb-24">
        <img
          src={logo}
          alt="Millard Estética e Laserterapia"
          width={900}
          height={760}
          className="h-auto w-[11rem] max-w-[70vw] object-contain sm:w-[15rem]"
        />
        <p className="eyebrow -mt-2">Estética avançada • Laserterapia</p>
        <h1 className="mt-4 max-w-3xl font-display text-[2.45rem] leading-[1.04] text-[#f4e6d9] sm:text-6xl">
          Estética avançada sem dor nem agulhas.
        </h1>
        <p className="mt-5 max-w-2xl text-[1rem] leading-relaxed text-[#c8bdb5] sm:text-lg">
          Procedimentos inovadores baseados na nanotecnologia para cuidar da sua
          beleza com tecnologia, conforto e naturalidade.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-2.5">
          <WhatsAppButton size="xl">Agendar avaliação</WhatsAppButton>
          <a
            href="#servicos"
            className="inline-flex items-center rounded-full border border-gold/60 px-7 py-3.5 text-[0.74rem] uppercase tracking-[0.2em] text-gold-deep transition-colors hover:bg-accent"
          >
            Conhecer procedimentos
          </a>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-2.5 text-[0.82rem] text-[#b7aca4]">
          <span className="flex items-center gap-2">
            <MapPin className="h-4 w-4 shrink-0 text-gold" /> São Carlos · SP
          </span>
          <span className="flex items-center gap-2">
            <Clock className="h-4 w-4 shrink-0 text-gold" /> Atendimento personalizado
          </span>
          <span className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 shrink-0 text-gold" /> Tecnologia e inovação
          </span>
        </div>
      </div>
    </section>
  );
}

function Trust() {
  const items = [
    { icon: HeartHandshake, short: "Cuidado Humanizado" },
    { icon: ShieldCheck, short: "Tecnologia e Segurança" },
    { icon: ScanLine, short: "Procedimentos Inovadores" },
  ];
  return (
    <section id="faixa-confianca" className="border-y border-gold/30 bg-[#faf6f1]">
      <div className="bg-[#faf6f1] sm:hidden">
        <Marquee speed={18} className="py-2.5">
          {[...items, ...items].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-2 px-3 text-[0.7rem] font-medium uppercase tracking-[0.2em] text-primary"
            >
              <item.icon className="h-3.5 w-3.5 shrink-0 text-primary" />
              {item.short}
            </span>
          ))}
        </Marquee>
      </div>
      <div className="mx-auto hidden max-w-6xl items-center gap-5 px-5 py-7 text-center sm:grid sm:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.short} delay={i * 80} className="flex items-center justify-center gap-2.5">
            <item.icon className="h-4 w-4 shrink-0 text-primary" />
            <p className="text-sm font-medium text-primary">{item.short}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-[#11100f] py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Como funciona"
          title="Um cuidado pensado para você"
          subtitle="Da avaliação ao acompanhamento, cada etapa é planejada para entregar uma experiência estética moderna, confortável e personalizada."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((item, i) => (
            <Reveal key={item.step} delay={i * 90} className="h-full">
              <article className="card-lux flex h-full flex-col items-center overflow-hidden px-5 py-6 text-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-gradient font-display text-lg text-[#15110d] shadow-silk">
                  {item.step}
                </span>
                <h3 className="mt-3.5 text-xl leading-snug text-foreground">{item.title}</h3>
                <div className="rule-gold my-2.5 w-12" />
                <p className="text-[0.85rem] leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={180} className="mt-7 flex justify-center">
          <WhatsAppButton size="lg">Começar agora</WhatsAppButton>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="bg-background py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Procedimentos"
          title="Novos procedimentos estéticos e laserterapia"
          subtitle="Tecnologia, estética avançada e protocolos personalizados para diferentes objetivos, sempre respeitando a individualidade de cada paciente."
        />
      </div>
      <Reveal delay={100} className="mt-8 block">
        <Marquee speed={30} className="py-1">
          {services.map((service, i) => (
            <article
              key={service.name}
              className="card-lux flex h-full w-[19rem] flex-col items-center overflow-hidden text-center sm:w-[21rem]"
            >
              <div className="relative w-full overflow-hidden">
                <img
                  src={serviceImages[service.slug]}
                  alt={service.name}
                  loading="lazy"
                  width={900}
                  height={640}
                  className="aspect-[4/3] w-full object-cover"
                />
                <span className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#0b0b0b]/85 font-display text-[0.95rem] text-gold-deep backdrop-blur-sm">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="flex flex-1 flex-col items-center px-5 py-5">
                <h3 className="text-xl leading-snug text-foreground">{service.name}</h3>
                <div className="rule-gold my-2.5 w-12" />
                <p className="flex-1 text-[0.85rem] leading-relaxed text-muted-foreground">{service.text}</p>
                <p className="mt-3.5 flex items-center gap-2 text-[0.66rem] uppercase tracking-[0.2em] text-gold-deep">
                  <Clock className="h-3.5 w-3.5" /> {service.duration}
                </p>
              </div>
            </article>
          ))}
        </Marquee>
      </Reveal>
      <Reveal delay={160} className="mt-7 flex justify-center px-5">
        <WhatsAppButton size="lg">Quero conhecer os procedimentos</WhatsAppButton>
      </Reveal>
    </section>
  );
}

function BeforeAfter() {
  return (
    <section id="antes-e-depois" className="bg-[#0b0b0b] py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Antes e depois"
          title="Veja a evolução do seu cuidado"
          subtitle="Espaço reservado para mostrar visualmente a evolução dos procedimentos e resultados reais da Millard."
        />
        <div className="mt-9 grid gap-5 md:grid-cols-2">
          {[
            { label: "Antes", tone: "border-gold/25", text: "Imagem antes do procedimento" },
            { label: "Depois", tone: "border-gold/55", text: "Imagem depois do procedimento" },
          ].map((item, i) => (
            <Reveal key={item.label} delay={i * 100}>
              <article className={`overflow-hidden rounded-3xl border ${item.tone} bg-[#11100f] shadow-lift`}>
                <div className="relative aspect-[4/3] bg-[radial-gradient(circle_at_50%_40%,rgba(218,178,142,0.12),transparent_50%)]">
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <Gem className="h-9 w-9 text-gold/70" />
                    <span className="mt-3 text-xs uppercase tracking-[0.28em] text-gold-deep">{item.label}</span>
                    <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={180} className="mt-7 flex justify-center">
          <WhatsAppButton size="lg">Agendar avaliação</WhatsAppButton>
        </Reveal>
      </div>
    </section>
  );
}

function Benefits() {
  return (
    <section id="diferenciais" className="bg-[#151311] py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Diferenciais"
          title="Tecnologia com conforto e naturalidade"
          subtitle="Uma proposta estética moderna para quem busca procedimentos inovadores sem abrir mão do cuidado."
        />
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <Reveal key={benefit} delay={i * 60} className="h-full">
              <div className="card-lux flex h-full items-center gap-3.5 px-5 py-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-[#15110d]">
                  <Sparkles className="h-4 w-4" />
                </span>
                <p className="min-w-0 text-[0.88rem] text-secondary-foreground">{benefit}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={180} className="mt-7 flex justify-center">
          <WhatsAppButton size="lg">Agendar avaliação</WhatsAppButton>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="bg-[#0b0b0b] py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Quem é Sandra Millard"
          title="Cuidado, tecnologia e beleza natural"
          subtitle="Uma nova proposta em estética avançada e laserterapia para quem busca inovação com atendimento personalizado."
        />

        <div className="mt-9 grid items-center gap-9 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal className="relative mx-auto w-full max-w-[19rem]">
            <div className="absolute -inset-2.5 rounded-3xl border border-gold/40" />
            <img
              src={retrato.url}
              alt="Sandra Millard — foto provisória"
              loading="lazy"
              width={905}
              height={1358}
              className="relative aspect-square w-full rounded-2xl object-cover shadow-lift"
            />
          </Reveal>

          <Reveal delay={100} className="text-center lg:text-left">
            <div className="space-y-3 text-[0.95rem] leading-relaxed text-muted-foreground">
              <p>
                Sandra Millard representa uma proposta de estética moderna, voltada para tecnologia, conforto e valorização da beleza natural.
              </p>
              <p>
                Na Millard, cada atendimento parte de uma avaliação individual para definir procedimentos e tecnologias alinhados aos objetivos de cada paciente.
              </p>
              <p>
                A proposta é unir procedimentos inovadores, laserterapia e uma experiência de cuidado elegante, personalizada e acolhedora.
              </p>
            </div>
            <p className="mt-4 font-script text-3xl text-gold-gradient">Sandra Millard</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {aboutPillars.map((pillar) => (
                <div key={pillar.title} className="card-lux gold-cap overflow-hidden px-4 py-4 text-center">
                  <h3 className="text-base text-foreground">{pillar.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{pillar.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <WhatsAppButton size="lg">Falar com a Millard</WhatsAppButton>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-gold/50 px-4 py-2.5 text-[0.58rem] font-medium uppercase tracking-[0.12em] text-gold-deep transition-colors duration-300 hover:bg-gold-soft/30 sm:px-7 sm:py-3.5 sm:text-[0.72rem] sm:tracking-[0.18em]"
              >
                <Instagram className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                <span>Ver o Instagram</span>
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Stars({
  rating = 5,
  size = "md",
  align = "center",
}: {
  rating?: number;
  size?: "md" | "lg";
  align?: "center" | "start";
}) {
  const starSize = size === "lg" ? "h-6 w-6" : "h-5 w-5";
  return (
    <div className={`flex items-center gap-1 ${align === "center" ? "justify-center" : "justify-start"}`} aria-label={`Avaliação ${rating} de 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={i < rating ? `${starSize} fill-gold text-gold` : `${starSize} text-muted-foreground/30`} />
      ))}
    </div>
  );
}

function GoogleGlyph({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" aria-hidden="true">
      <path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-2.8-.4-4H24v7.3h12.1c-.2 2-1.6 5-4.5 7l-.1.3 6.6 5.1.5.1c4.2-3.9 6.5-9.6 6.5-15.8" />
      <path fill="#34A853" d="M24 46c5.9 0 10.9-2 14.6-5.3l-6.9-5.4c-1.9 1.3-4.4 2.2-7.7 2.2-5.8 0-10.8-3.9-12.5-9.2l-.3.1-6.9 5.3-.1.3C7.8 41 15.3 46 24 46" />
      <path fill="#FBBC05" d="M11.5 28.3c-.5-1.4-.7-2.8-.7-4.3s.3-3 .7-4.3v-.4l-7-5.4-.2.1C2.8 17 2 20.4 2 24s.8 7 2.3 10.1z" />
      <path fill="#EA4335" d="M24 10.5c4.1 0 6.9 1.8 8.5 3.3l6.2-6C34.9 4.4 29.9 2 24 2 15.3 2 7.8 7 4.3 13.9l7.2 5.6c1.7-5.3 6.7-9 12.5-9" />
    </svg>
  );
}

const numberFmt = new Intl.NumberFormat("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

function Testimonials() {
  const { data } = useSuspenseQuery(googleReviewsQueryOptions);
  const googleReviews = data?.reviews ?? [];
  const hasGoogle = googleReviews.length > 0;
  const rating = data?.rating ?? 5;
  const total = data?.total ?? 0;
  const mapsUrl = data?.mapsUrl ?? "https://www.google.com/maps";

  const cards = hasGoogle
    ? googleReviews.map((review) => ({ key: review.id, name: review.author, role: review.when, rating: review.rating, text: review.text, photo: review.photo, url: review.url }))
    : testimonials.map((item) => ({ key: item.name, name: item.name, role: item.role, rating: item.rating, text: item.text, photo: null as string | null, url: "" }));

  return (
    <section id="depoimentos" className="bg-[#11100f] py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle
          eyebrow="Depoimentos"
          title="Experiências de quem se cuidou"
          subtitle={hasGoogle ? "Avaliações publicadas no Google por clientes atendidos pela Millard." : "Relatos de experiências com o atendimento e os procedimentos."}
        />
        <Reveal delay={80} className="mt-4 flex flex-col items-center gap-2">
          <Stars rating={Math.round(rating)} size="lg" />
          <p className="text-[0.68rem] uppercase tracking-[0.22em] text-gold-deep">
            {numberFmt.format(rating)} de 5{total > 0 ? ` · ${total} avaliações no Google` : " · avaliação média"}
          </p>
        </Reveal>
      </div>
      <Reveal delay={120} className="mt-7 block">
        <Marquee speed={30}>
          {cards.map((item) => (
            <figure key={item.key} className="card-lux flex h-full w-[19rem] flex-col px-6 py-6 text-left sm:w-[23rem]">
              <div className="flex items-center gap-3">
                {item.photo ? (
                  <img src={item.photo} alt={`Foto de ${item.name}`} loading="lazy" width={48} height={48} referrerPolicy="no-referrer" className="h-12 w-12 shrink-0 rounded-full border border-gold/40 object-cover" />
                ) : (
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold-gradient font-display text-lg text-[#15110d]">{item.name.charAt(0)}</span>
                )}
                <div className="min-w-0">
                  <p className="truncate text-sm tracking-wide text-foreground">{item.name}</p>
                  <p className="mt-0.5 flex items-center gap-1.5 text-[0.66rem] uppercase tracking-[0.18em] text-muted-foreground">
                    {hasGoogle ? <GoogleGlyph className="h-3 w-3" /> : null}
                    {item.role}
                  </p>
                </div>
              </div>
              <div className="mt-3.5"><Stars rating={item.rating} align="start" /></div>
              <blockquote className="mt-3 line-clamp-6 flex-1 font-display text-[1.05rem] leading-relaxed text-secondary-foreground">“{item.text}”</blockquote>
            </figure>
          ))}
        </Marquee>
      </Reveal>
      {hasGoogle ? (
        <Reveal delay={160} className="mt-7 flex justify-center px-5">
          <a href={mapsUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gold/50 bg-card px-6 py-3 text-[0.68rem] uppercase tracking-[0.18em] text-gold-deep shadow-silk transition-colors hover:bg-accent">
            <GoogleGlyph /> Ver no Google
          </a>
        </Reveal>
      ) : null}
      <Reveal delay={200} className="mt-5 flex justify-center px-5"><WhatsAppButton size="lg">Agendar avaliação</WhatsAppButton></Reveal>
    </section>
  );
}

function Location() {
  const info = [
    { icon: MapPin, label: "Onde fica", value: "São Carlos · São Paulo · SP." },
    { icon: Clock, label: "Horários", value: "Atendimento com hora marcada." },
    { icon: Navigation, label: "Localização", value: "São Carlos e região." },
    { icon: CalendarCheck, label: "Agendamento", value: "Agende sua avaliação para conhecer o protocolo ideal para você." },
  ];

  return (
    <section id="localizacao" className="bg-[#0b0b0b] py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-5">
        <SectionTitle eyebrow="Localização" title="Millard em São Carlos" subtitle="Uma nova proposta de estética avançada e laserterapia em São Carlos, São Paulo." />
        <Reveal delay={100} className="mt-8 block">
          <div className="overflow-hidden rounded-3xl border border-gold/30 bg-card shadow-lift">
            <div className="grid items-stretch lg:grid-cols-2">
              <div className="flex flex-col gap-5 p-6 sm:p-8">
                <div className="flex items-center gap-3.5">
                  <img src={logo} alt="" aria-hidden="true" loading="lazy" width={80} height={80} className="h-16 w-16 shrink-0 rounded-xl object-cover" />
                  <div className="min-w-0 text-left">
                    <p className="font-display text-xl leading-tight text-foreground">Millard Estética e Laserterapia</p>
                    <p className="text-[0.66rem] uppercase tracking-[0.22em] text-gold-deep">São Carlos · SP</p>
                  </div>
                </div>
                <div className="rule-gold w-full" />
                <dl className="grid gap-4 sm:grid-cols-2">
                  {info.map((item) => (
                    <div key={item.label} className="flex gap-3 text-left">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-gradient text-[#15110d] shadow-silk"><item.icon className="h-4 w-4" /></span>
                      <div className="min-w-0"><dt className="text-[0.85rem] text-foreground">{item.label}</dt><dd className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.value}</dd></div>
                    </div>
                  ))}
                </dl>
                <div className="mt-auto flex flex-wrap items-center gap-2.5">
                  <WhatsAppButton size="lg">Agendar avaliação</WhatsAppButton>
                  <a href="https://www.google.com/maps/search/?api=1&query=S%C3%A3o%20Carlos%20SP" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-gold/60 px-6 py-3.5 text-[0.7rem] uppercase tracking-[0.2em] text-gold-deep transition-colors hover:bg-accent"><Navigation className="h-4 w-4" /> Ver localização</a>
                </div>
              </div>
              <div className="relative min-h-[18rem] border-t border-gold/25 lg:min-h-full lg:border-l lg:border-t-0">
                <iframe title="Mapa — São Carlos, SP" src="https://www.google.com/maps?q=S%C3%A3o%20Carlos%2C%20SP&hl=pt-BR&z=13&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen className="absolute inset-0 h-full w-full border-0" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="duvidas" className="mx-auto max-w-3xl bg-background px-5 py-14 sm:py-16">
      <SectionTitle eyebrow="Dúvidas frequentes" title="Tudo o que você precisa saber" subtitle="E se ficar qualquer outra pergunta, é só chamar a Millard no WhatsApp." />
      <Reveal delay={100} className="mt-7 block">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((item, i) => (
            <AccordionItem key={item.q} value={`faq-${i}`} className="border-b border-gold/25">
              <AccordionTrigger className="py-3.5 text-left font-display text-base text-foreground hover:no-underline sm:text-lg">{item.q}</AccordionTrigger>
              <AccordionContent className="text-[0.85rem] leading-relaxed text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
      <Reveal delay={160} className="mt-7 flex flex-col items-center gap-6">
        <WhatsAppButton size="lg">Tirar minha dúvida</WhatsAppButton>
        <img src={logo} alt="Logomarca Millard" loading="lazy" width={220} height={180} className="h-28 w-36 object-contain" />
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-gold/25 bg-[#080808]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-brand-band" />
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-8 text-center">
        <img src={logo} alt="Millard Estética e Laserterapia" width={260} height={220} className="h-28 w-36 object-contain" />
        <p className="max-w-sm text-[0.85rem] text-muted-foreground">Estética avançada e laserterapia em São Carlos. Tecnologia, conforto e naturalidade em cada protocolo.</p>
        <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 text-gold-deep transition-colors hover:bg-accent" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
        <p className="text-[0.64rem] uppercase tracking-[0.25em] text-muted-foreground">© {new Date().getFullYear()} Millard · Estética e Laserterapia</p>
      </div>
    </footer>
  );
}
