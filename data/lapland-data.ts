import {
  Mountain, Snowflake, Sparkles, Bird, Fish,
  Compass, TreePine, MapPin, Tent,
  type LucideIcon,
} from "lucide-react";


export type Destination = {
  slug: string;
  name: string;
  tagline: string;
  badge: string;
  icon: LucideIcon;
  knownFor: string;
  airport: string;
  bestTime: string;
};

export const destinations: Destination[] = [
  {
    slug: "rovaniemi",
    name: "Rovaniemi",
    tagline: "Santa's hometown",
    badge: "Most popular",
    icon: TreePine,
    knownFor: "Santa Claus Village, Arctic Circle, husky parks",
    airport: "Rovaniemi (RVN) — direct UK winter routes",
    bestTime: "December–March",
  },
  {
    slug: "levi",
    name: "Levi",
    tagline: "Best ski resort",
    badge: "Ski capital",
    icon: Mountain,
    knownFor: "Alpine skiing, gondola, lively après-ski",
    airport: "Kittilä (KTT) — 15 min drive",
    bestTime: "November–April",
  },
  {
    slug: "saariselka",
    name: "Saariselkä",
    tagline: "Remote wilderness",
    badge: "Aurora hotspot",
    icon: Compass,
    knownFor: "Glass igloos, Urho Kekkonen National Park",
    airport: "Ivalo (IVL) — 30 min drive",
    bestTime: "September–March",
  },
  {
    slug: "yllas",
    name: "Ylläs",
    tagline: "Hidden gem",
    badge: "Quiet escape",
    icon: Tent,
    knownFor: "Pallas-Yllästunturi National Park, fells",
    airport: "Kittilä (KTT) — 45 min drive",
    bestTime: "December–April",
  },
];

export type Activity = {
  slug: string;
  name: string;
  short: string;
  icon: LucideIcon;
  featured?: boolean;
  badge?: string;
  bestSeason: string;
  duration: string;
  difficulty: string;
  priceRange: string;
  destinations: string[];
};

export const activities: Activity[] = [
  {
    slug: "snow-safari",
    name: "Snow Safari",
    short: "Glide through frozen forests on a guided snowmobile expedition.",
    icon: Snowflake,
    featured: true,
    badge: "Most booked",
    bestSeason: "November – March",
    duration: "2–4 hours",
    difficulty: "Easy — driving licence required",
    priceRange: "€95–€180 per person",
    destinations: ["rovaniemi", "levi", "saariselka"],
  },
  {
    slug: "husky-safari",
    name: "Husky Safari",
    short: "Mush a team of huskies across snow-covered trails with a local guide.",
    icon: MapPin,
    bestSeason: "December – April",
    duration: "1–3 hours",
    difficulty: "Easy",
    priceRange: "€140–€260",
    destinations: ["rovaniemi", "levi", "yllas"],
  },
  {
    slug: "aurora-hunting",
    name: "Aurora Hunting",
    short: "Chase the northern lights with a guide who reads the sky.",
    icon: Sparkles,
    bestSeason: "September – March",
    duration: "3–5 hours",
    difficulty: "Easy",
    priceRange: "€120–€220",
    destinations: ["saariselka", "yllas", "rovaniemi"],
  },
  {
    slug: "reindeer-safari",
    name: "Reindeer Safari",
    short: "Visit a working reindeer farm and ride through the forest.",
    icon: Bird,
    bestSeason: "December – March",
    duration: "1–2 hours",
    difficulty: "Very easy",
    priceRange: "€90–€160",
    destinations: ["rovaniemi", "levi"],
  },
  {
    slug: "ice-fishing",
    name: "Ice Fishing",
    short: "Drill a hole in a frozen lake and fish like a local.",
    icon: Fish,
    bestSeason: "January – April",
    duration: "2–3 hours",
    difficulty: "Easy",
    priceRange: "€75–€140",
    destinations: ["levi", "yllas", "saariselka"],
  },
  {
    slug: "skiing-snowboard",
    name: "Skiing & Snowboard",
    short: "Hit the slopes at Finland's best alpine resorts.",
    icon: Mountain,
    bestSeason: "November – April",
    duration: "Full day",
    difficulty: "All levels",
    priceRange: "€55–€95 lift pass",
    destinations: ["levi", "yllas"],
  },
];

export const seasons = [
  {
    title: "Nov – Feb",
    label: "Peak winter",
    desc: "Deep snow, polar nights, prime aurora window and full Christmas magic.",
    activities: ["Snow Safari", "Husky", "Aurora", "Reindeer"],
  },
  {
    title: "March",
    label: "Best light",
    desc: "Long blue days, stable snow, fewer crowds. Our favourite month.",
    activities: ["Skiing", "Snow Safari", "Aurora"],
  },
  {
    title: "April",
    label: "Shoulder season",
    desc: "Mild temperatures, spring skiing and great value on accommodation.",
    activities: ["Skiing", "Husky", "Ice Fishing"],
  },
  {
    title: "Jun – Aug",
    label: "Midnight sun",
    desc: "24-hour daylight, hiking, paddling and the surreal nightless night.",
    activities: ["Hiking", "Canoeing", "Fishing"],
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  body: string;
  relatedCombinations: { destination: string; activity: string; label: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "best-time-see-northern-lights-finland",
    title: "Best time to see the northern lights in Finland",
    category: "Aurora",
    date: "November 2025",
    excerpt: "The aurora season runs September to March, but a few weeks stand out. Here's when locals actually go looking.",
    body: `The northern lights are the single biggest reason people visit Finnish Lapland. But timing your trip around them is more art than science — and most travel sites get it wrong.

The aurora season technically runs from late August to early April, whenever the nights are dark enough. But the sweet spot is narrower than that.

**September and October** are underrated. The nights are long, the landscape hasn't fully frozen yet, and you'll pay shoulder-season prices. The aurora can be spectacular — and you'll have the sky almost to yourself.

**November through February** is peak season. Polar nights mean near-total darkness, which sounds extreme but is genuinely magical. The downside: this is also when prices peak, crowds gather in Rovaniemi, and cloud cover is at its worst. The aurora doesn't care about your Instagram schedule.

**March is our favourite month.** The days are lengthening — you get golden hour light on the snow — but the nights are still dark enough for a strong aurora display. Snow conditions are usually excellent, temperatures are slightly less brutal, and the Christmas crowds are long gone.

The aurora itself is unpredictable. Clear skies and high solar activity both need to align. The best strategy is to stay at least five nights, get away from town light pollution, and go out every clear night rather than booking a single "aurora tour" and hoping for the best.

Saariselkä and Ylläs consistently outperform Rovaniemi for aurora viewing because they're further from light pollution and sit in areas with statistically clearer skies.`,
    relatedCombinations: [
      { destination: "saariselka", activity: "aurora-hunting", label: "Aurora hunting in Saariselkä" },
      { destination: "yllas", activity: "aurora-hunting", label: "Aurora hunting in Ylläs" },
      { destination: "rovaniemi", activity: "aurora-hunting", label: "Aurora hunting in Rovaniemi" },
    ],
  },
  {
    slug: "rovaniemi-vs-levi",
    title: "Rovaniemi vs Levi — which is right for you?",
    category: "Destinations",
    date: "October 2025",
    excerpt: "One has Santa, the other has the slopes. We compare both Lapland headliners to help you choose.",
    body: `Rovaniemi and Levi are the two names most people encounter when they start planning a Lapland trip. They're both excellent — but they're very different places, and choosing the wrong one can leave you feeling like you missed something.

**Rovaniemi: the experience capital**

Rovaniemi is the capital of Finnish Lapland and sits exactly on the Arctic Circle. Santa Claus Village is here, which makes it the default choice for families with young children. But it's also the best base if you want the widest variety of activities — husky farms, snowmobile parks, reindeer experiences, aurora tours — all within easy reach.

The downside is that Rovaniemi is busy. In December it can feel genuinely overcrowded, prices spike sharply around Christmas and New Year, and the town itself isn't especially charming. It's a functional city that happens to have extraordinary experiences on its doorstep.

**Levi: the resort**

Levi is Finland's largest ski resort and the choice if skiing or snowboarding is central to your trip. It's a purpose-built resort village — compact, walkable, and oriented entirely around winter sport. The après-ski scene is the best in Lapland.

Non-skiers aren't left out — there are husky and snowmobile operators nearby — but if you're not going near the slopes, you're paying resort prices for a location that doesn't fully reward you.

**How to choose**

Go to Rovaniemi if: you have children, you want maximum activity variety, or this is your first Lapland trip.

Go to Levi if: skiing is the point, or you want a more resort-village atmosphere.

Consider Ylläs if you want the skiing without the crowds — it has Finland's longest runs and a fraction of Levi's visitors.`,
    relatedCombinations: [
      { destination: "rovaniemi", activity: "husky-safari", label: "Husky safari in Rovaniemi" },
      { destination: "levi", activity: "skiing-snowboard", label: "Skiing in Levi" },
      { destination: "yllas", activity: "skiing-snowboard", label: "Skiing in Ylläs" },
      { destination: "rovaniemi", activity: "snow-safari", label: "Snow safari in Rovaniemi" },
    ],
  },
  {
    slug: "lapland-trip-from-uk",
    title: "How to plan a Lapland trip from the UK",
    category: "Planning",
    date: "October 2025",
    excerpt: "Direct flights, budgets, school holiday tips and the operators worth booking three months ahead.",
    body: `Finland is one of the most accessible Arctic destinations from the UK — and one of the most underrated. Here's how to plan it properly.

**Flights**

Direct charter flights run from London Gatwick, Manchester, Birmingham and Edinburgh to Rovaniemi and Kittilä (for Levi and Ylläs) throughout the winter season, typically November to March. Operators like Jet2, TUI and various package providers run these routes, but seats go fast for December and early January dates.

If you're flexible on dates, flying via Helsinki on Finnair gives you more options and sometimes better prices. Helsinki is a two-hour connection at most.

**When to book**

For Christmas week and New Year: book in September at the latest. Operators sell out. Accommodation sells out. The good husky farms sell out.

For January, February and March: you have more breathing room, but the best glass igloo accommodation and small-group experiences still fill up 6–8 weeks out.

**Budget**

A realistic 5-night Lapland trip from the UK including flights, accommodation and two or three activities runs £1,500–£2,500 per person in peak season. March is typically 20–30% cheaper than December for the same quality of experience.

The activities are where people underestimate costs. A single husky safari runs €140–€260 per person. A snowmobile safari is €95–€180. Budget for two or three experiences minimum.

**School holidays**

Half-term in February has become extremely popular and prices reflect it. If your children are young enough that you have flexibility, the first two weeks of December offer a genuine winter wonderland experience at significantly lower cost than the Christmas peak.

**What to pack**

Temperatures regularly reach –20°C to –30°C in January and February. Operators provide thermal suits for outdoor activities, but your transfer from the airport and any time spent outdoors between activities requires proper kit. Merino base layers, a mid-layer fleece and a windproof outer shell. Proper winter boots — not fashion boots. Hand warmers are not optional.`,
    relatedCombinations: [
      { destination: "rovaniemi", activity: "husky-safari", label: "Husky safari in Rovaniemi" },
      { destination: "levi", activity: "snow-safari", label: "Snow safari in Levi" },
      { destination: "saariselka", activity: "aurora-hunting", label: "Aurora hunting in Saariselkä" },
      { destination: "rovaniemi", activity: "reindeer-safari", label: "Reindeer safari in Rovaniemi" },
    ],
  },
];
