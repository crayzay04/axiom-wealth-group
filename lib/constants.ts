export const SITE = {
  name: "Axiom Wealth Group",
  url: "https://axiomwgllc.com",
  tagline: "Clarity in Every Decision.",
  description:
    "Financial planning, cash flow strategy, and protection for families and business owners who want one team that sees the whole picture.",
  address: "5501 Ming Avenue, Suite 265, Bakersfield, CA 93309",
  street: "5501 Ming Avenue, Suite 265",
  city: "Bakersfield",
  region: "CA",
  postalCode: "93309",
  phone: "(818) 726-0541",
  phoneE164: "+18187260541",
  email: "JCarter@AxWealthGroup.com",
  hours: "Mon to Fri, 8:00 AM to 5:00 PM PT",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=5501%20Ming%20Avenue%20Suite%20265%20Bakersfield%20CA%2093309",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=5501%20Ming%20Avenue%20Suite%20265%20Bakersfield%20CA%2093309&output=embed",
};

export const BROKERCHECK_URL = "https://brokercheck.finra.org/";

export const BROKERCHECK_LINE =
  "Check the background of this firm and its professionals on FINRA's BrokerCheck";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

// Facts the client has not supplied yet are written as [[CONFIRM: ...]] so they
// render visibly in review and can be found with: grep -rn "CONFIRM" app components lib
export const DISCLOSURE_TEXT =
  'Axiom Wealth Group is a member of FINRA. [[CONFIRM: member SIPC? If yes, add "and SIPC".]] [[CONFIRM: Is Axiom Wealth Group itself the registered broker-dealer, or a DBA offering securities through another broker-dealer? If the latter, add "Securities offered through NAME, member FINRA/SIPC."]] Information on this website is for general educational purposes and does not constitute individualized investment, tax, or legal advice, nor an offer or solicitation to buy or sell any security or product. Insurance products are offered through [[CONFIRM: licensed entity name and state license numbers, if required]]. Please consult a qualified professional regarding your specific situation.';

export const AUDIENCES = [
  {
    title: "Families",
    icon: "Users",
    description:
      "Households building toward retirement, education, and the transfer of what they have built.",
  },
  {
    title: "Business owners",
    icon: "Briefcase",
    description:
      "Owners who need their business and personal finances to work as one plan.",
  },
  {
    title: "Pre-retirees",
    icon: "Hourglass",
    description:
      "People within ten years of retirement who want a clear income picture before they step away.",
  },
];

export const SERVICES = [
  {
    title: "Wealth Management",
    icon: "TrendingUp",
    description:
      "Our wealth management approach brings every part of your financial life into one coherent strategy, addressing cash flow, tax efficiency, and long-term growth so the pieces work together.",
    offerings: [
      "Personalized financial roadmap",
      "Risk assessment and mitigation",
      "Cash flow and liquidity planning",
      "Multi-generational wealth transfer",
    ],
  },
  {
    title: "Retirement Planning",
    icon: "Sunset",
    description:
      "We build detailed retirement projections and income strategies so you can see what stepping away looks like before you do it, and adjust the plan while there is still time.",
    offerings: [
      "Retirement income projections",
      "Social Security claiming strategies",
      "401(k) and IRA rollover strategies",
      "Healthcare cost planning",
    ],
  },
  {
    title: "Cash Flow Management",
    icon: "Wallet",
    description:
      "Lasting wealth starts with knowing where your money goes and putting it to work with intention. We align your income, spending, and savings so each supports your goals.",
    offerings: [
      "Income and expense analysis",
      "Budgeting and savings strategy",
      "Debt reduction planning",
      "Liquidity and emergency reserves",
    ],
  },
  {
    title: "Insurance Solutions",
    icon: "Shield",
    description:
      "The right insurance strategy protects what you have built. We review your current coverage and identify gaps that could leave your family or assets exposed to unexpected events.",
    offerings: [
      "Life insurance analysis",
      "Long-term care planning",
      "Disability income protection",
      "Umbrella liability coverage",
    ],
  },
  {
    title: "Estate Planning",
    icon: "ScrollText",
    description:
      "Your legacy deserves careful stewardship. We coordinate with your estate attorney so your wishes are clearly documented and the financial side of your plan lines up with them.",
    offerings: [
      "Trust and estate coordination",
      "Beneficiary coordination",
      "Estate tax considerations",
      "Succession planning",
    ],
  },
  {
    title: "Tax Planning",
    icon: "Calculator",
    description:
      "Taxes touch every part of a financial plan. We work alongside your CPA to identify planning opportunities and keep tax consequences in view when decisions are made.",
    offerings: [
      "Tax-loss harvesting",
      "Roth conversion strategies",
      "Charitable giving strategies",
      "Capital gains management",
    ],
  },
  {
    title: "Business Financial Planning",
    icon: "Briefcase",
    description:
      "Business owners face their own financial complexities. From compensation strategies to exit planning, we help owners align their business and personal finances in one plan.",
    offerings: [
      "Business succession and exit planning",
      "Executive compensation analysis",
      "Key person insurance",
      "Cash flow and working capital strategy",
    ],
  },
];

export const SERVICE_PILLARS = [
  {
    id: "plan",
    title: "Plan",
    intro: "Where your money is, where it is going, and what it needs to do.",
    services: ["Wealth Management", "Retirement Planning", "Cash Flow Management"],
  },
  {
    id: "protect",
    title: "Protect",
    intro: "Keeping what you have built intact for the people who depend on it.",
    services: ["Insurance Solutions", "Estate Planning"],
  },
  {
    id: "optimize",
    title: "Optimize",
    intro: "Making the plan more efficient every year it runs.",
    services: ["Tax Planning", "Business Financial Planning"],
  },
];

export interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio: string;
  credentials: string[];
  // Direct BrokerCheck profile URL. Until supplied, the link falls back to the
  // BrokerCheck home page and a [[CONFIRM]] marker renders next to it.
  brokerCheckUrl: string | null;
}

// [[CONFIRM: full names for Nikki, Luis, and Lyle]]
export const TEAM: TeamMember[] = [
  {
    name: "Jason Doss-Carter",
    title: "Founder & CEO",
    image: "/team/jason.jpg",
    bio: "[[CONFIRM: bio for Jason Doss-Carter]]",
    credentials: [],
    brokerCheckUrl: null,
  },
  {
    name: "Nikki",
    title: "Financial Representative",
    image: "/team/nikki.jpg",
    bio: "[[CONFIRM: bio for Nikki]]",
    credentials: [],
    brokerCheckUrl: null,
  },
  {
    name: "Luis",
    title: "Financial Representative",
    image: "/team/luis.jpg",
    bio: "[[CONFIRM: bio for Luis]]",
    credentials: [],
    brokerCheckUrl: null,
  },
  {
    name: "Lyle",
    title: "Financial Representative",
    image: "/team/lyle.jpg",
    bio: "[[CONFIRM: bio for Lyle]]",
    credentials: [],
    brokerCheckUrl: null,
  },
];

export const VALUES = [
  {
    title: "Integrity",
    icon: "ShieldCheck",
    description: "We put your interests first in every recommendation.",
  },
  {
    title: "Clarity",
    icon: "Eye",
    description: "Complex strategies explained simply.",
  },
  {
    title: "Legacy",
    icon: "Landmark",
    description: "We plan not just for today, but for generations.",
  },
  {
    title: "Partnership",
    icon: "Handshake",
    description: "Your team is a lifelong ally, not a transaction.",
  },
];

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Discovery Call",
    description:
      "We begin with a conversation to understand your financial picture, your priorities, and what success looks like to you.",
  },
  {
    step: 2,
    title: "Financial Analysis",
    description:
      "Our team reviews your assets, liabilities, tax situation, and existing plans to identify opportunities.",
  },
  {
    step: 3,
    title: "Custom Strategy",
    description:
      "We design a personalized plan that integrates cash flow management, tax planning, estate goals, and risk management.",
  },
  {
    step: 4,
    title: "Ongoing Partnership",
    description:
      "Your plan evolves with your life. We meet regularly to review progress, adapt to changes, and keep you on track.",
  },
];

export const FOOTER_LINKS = {
  company: [
    { label: "About", href: "/about" },
    { label: "Team", href: "/team" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Plan", href: "/services#plan" },
    { label: "Protect", href: "/services#protect" },
    { label: "Optimize", href: "/services#optimize" },
  ],
  legal: [
    { label: "Disclosures", href: "/disclosures" },
    { label: "Form CRS", href: "/disclosures#form-crs" },
    { label: "Privacy Policy", href: "/disclosures#privacy" },
  ],
};
