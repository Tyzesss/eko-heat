import type { SitePreset } from "./types";

const siteCity = "Leszno i okolice";
const cityLocative = "w Lesznie";
const siteName = "Eko-Heat";

export const ekoHeatPreset: SitePreset = {
  id: "eko-heat",
  label: "Eko-Heat — Leszno",
  siteName,
  companyLegalName: "Eko-Heat Sp. z o.o.",
  siteCity,
  cityLocative,
  siteDefaultUrl: "http://www.eko-heat.pl",
  email: "biuro@eko-heat.pl",
  phoneDisplay: "514 268 512",
  phoneE164: "+48514268512",
  address: "ul. Święciechowska 52B, 64-100 Lasocice",
  addressStreet: "ul. Święciechowska 52B",
  addressCity: "Lasocice",
  addressPostal: "64-100",
  serviceArea: "Leszno i okolice, dojazd do klienta",
  mapsQuery: "Eko Heat Święciechowska 52B Lasocice",
  mapsUrl: "https://maps.app.goo.gl/oRqdH31BjMCYiMir7",
  googleReviewsUrl: "https://maps.app.goo.gl/oRqdH31BjMCYiMir7",
  nip: "697-24-00-799",
  regon: "528781170",
  hours: "Pn - Pt: 8:00 - 17:00",
  logoUrl: "/logo.png",
  logoIncludesName: true,
  faviconUrl: "/favicon.png",
  heroImage: "/gallery/eko-heat-hero.webp",
  siteTitle: `Pompy ciepła Leszno | ${siteName}`,
  siteKeywords:
    "pompy ciepła, montaż pompy ciepła, serwis pompy ciepła, klimatyzacja, fotowoltaika, Leszno, Lasocice, ogrzewanie",
  siteDescription: `Sprzedaż, montaż i serwis pomp ciepła ${cityLocative} i okolicach. Dobór urządzeń, klimatyzacja i fotowoltaika. Zadzwoń: 514 268 512.`,
  ogImage: "/gallery/eko-heat-hero.webp",
  googleRating: 5.0,
  googleReviewCount: 23,
  partners: ["Ferroli", "LG", "Rotenso", "Atlantic", "Kaisai"],
  gallery: [
    {
      image: "/gallery/eko-heat-1.webp",
      alt: "Montaż pompy ciepła, realizacja Eko-Heat, Leszno",
      caption: "Montaż pompy ciepła",
    },
    {
      image: "/gallery/eko-heat-2.webp",
      alt: "Instalacja pompy ciepła u klienta, Leszno i okolice",
      caption: "Instalacja u klienta",
    },
    {
      image: "/gallery/eko-heat-3.webp",
      alt: "Pompa ciepła po montażu, Eko-Heat Lasocice",
      caption: "Uruchomienie instalacji",
    },
    {
      image: "/gallery/eko-heat-4.webp",
      alt: "Montaż urządzenia grzewczego, realizacja w Lesznie",
      caption: "Montaż urządzenia",
    },
    {
      image: "/gallery/eko-heat-5.webp",
      alt: "Serwis i montaż pomp ciepła, Eko-Heat",
      caption: "Realizacja montażowa",
    },
    {
      image: "/gallery/eko-heat-6.webp",
      alt: "Pompa ciepła zamontowana u klienta, wielkopolskie",
      caption: "Gotowa instalacja",
    },
  ],
  reviews: [
    {
      name: "Marcin D.",
      text: "Pełen profesjonalizm, bardzo miła obsługa. Polecam.",
      source: "google",
      rating: 5,
      relativeTime: "3 lata temu",
    },
    {
      name: "Rafał L.",
      text: "Bardzo mocno polecam firmę Eko Heat. Potrafi dobrać rozwiązanie, doradzić i wykonać pracę na najwyższym poziomie.",
      source: "google",
      rating: 5,
      relativeTime: "3 lata temu",
    },
    {
      name: "Wojciech K.",
      text: "Szybki i sprawny montaż pompy ciepła. Fachowe doradztwo przy wyborze urządzenia. Zdecydowanie polecam.",
      source: "google",
      rating: 5,
      relativeTime: "3 lata temu",
    },
    {
      name: "Emilia S.",
      text: "Polecam firmę Eko Heat. Profesjonalne podejście, szybki montaż i porządnie wykonana robota.",
      source: "google",
      rating: 5,
      relativeTime: "3 lata temu",
    },
    {
      name: "Magdalena C.",
      text: "Kontrakt bardzo dobry. Praca wykonana na czas, zgodnie z ustaleniami i posprzątane po montażu. Polecam.",
      source: "google",
      rating: 5,
      relativeTime: "3 lata temu",
    },
  ],
  heroHeadline: "Montaż i serwis pomp ciepła",
  heroBullets: [
    "Sprzedaż, montaż i serwis pomp ciepła powietrznych. Dobór urządzenia pod Twój dom.",
    "Bezpłatna wycena i doradztwo przed montażem. Dojazd w Lesznie i okolicach.",
  ],
  footerTagline: "Pompy ciepła, klimatyzacja i fotowoltaika",
  servicesSectionSubtitle:
    "Sprzedaż, montaż i serwis pomp ciepła, klimatyzacji oraz instalacji fotowoltaicznych.",
  gallerySectionSubtitle: "Realizacje montażowe pomp ciepła w Lesznie i okolicach.",
  services: [
    {
      icon: "zap",
      title: "Montaż pomp ciepła",
      desc: "Dobór mocy, montaż powietrznych pomp ciepła i pierwsze uruchomienie u klienta.",
    },
    {
      icon: "check-circle",
      title: "Sprzedaż pomp ciepła",
      desc: "Urządzenia marek Ferroli, LG, Rotenso, Atlantic i Kaisai. Bezpłatna wycena i dobór.",
    },
    {
      icon: "wrench",
      title: "Serwis pomp ciepła",
      desc: "Przeglądy, diagnostyka i naprawy gwarancyjne oraz pogwarancyjne.",
    },
    {
      icon: "check-circle",
      title: "Montaż klimatyzacji",
      desc: "Instalacja klimatyzacji split i multi-split dla domów oraz firm.",
    },
    {
      icon: "zap",
      title: "Instalacje fotowoltaiczne",
      desc: "Montaż paneli PV i integracja z pompą ciepła oraz magazynem energii.",
    },
    {
      icon: "shield-check",
      title: "Dobór i doradztwo",
      desc: "Analiza zapotrzebowania na ciepło, wycena i pomoc przy formalnościach.",
    },
  ],
  faqs: [
    {
      q: "Ile kosztuje montaż pompy ciepła?",
      a: "Na stronie firmy podawany jest przedział od 30 000 do 50 000 zł. Dokładną wycenę przygotujemy po rozmowie lub oględzinach.",
    },
    {
      q: "Czy montujecie pompy ciepła powietrzne?",
      a: "Tak. Specjalizujemy się w sprzedaży, montażu i serwisie pomp ciepła powietrznych na terenie Leszna i okolic.",
    },
    {
      q: "Czy serwisujecie pompy po montażu?",
      a: "Tak. Oferujemy serwis gwarancyjny i pogwarancyjny, przeglądy oraz diagnostykę usterek.",
    },
    {
      q: "Jakie marki pomp ciepła oferujecie?",
      a: "Pracujemy m.in. na urządzeniach Ferroli, LG, Rotenso, Atlantic i Kaisai. Dobierzemy model pod Twój budynek.",
    },
    {
      q: "Czy dojeżdżacie do klienta?",
      a: `Tak. Obsługujemy ${siteCity.toLowerCase()}. Przyjeżdżamy na montaż, serwis i oględziny.`,
    },
  ],
  serviceOptionGroups: [
    {
      label: "Pompy ciepła",
      options: [
        "Wycena i dobór pompy ciepła",
        "Montaż pompy ciepła",
        "Serwis pompy ciepła",
      ],
    },
    {
      label: "Klimatyzacja",
      options: ["Montaż klimatyzacji split", "Serwis klimatyzacji"],
    },
    {
      label: "Fotowoltaika",
      options: ["Montaż instalacji PV", "Serwis fotowoltaiki"],
    },
    {
      label: "Inne",
      options: ["Potrzebuję doradztwa", "Pierwsze uruchomienie urządzenia"],
    },
  ],
};
