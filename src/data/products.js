// Centralized product data — single source of truth for cards across
// Home (featured) and Products & Services (full grid).

export const products = [
  {
    id: "crm",
    name: "Zoho CRM",
    category: "Sales",
    tagline: "Close deals, not tabs.",
    description:
      "A sales CRM that brings leads, deals, and customer conversations into one pipeline, with automation that handles the busywork between calls.",
    features: ["Pipeline & deal tracking", "Workflow automation", "Sales forecasting", "Omnichannel customer view"],
    color: "#C8202F",
  },
  {
    id: "mail",
    name: "Zoho Mail",
    category: "Communication",
    tagline: "Email, minus the noise.",
    description:
      "Secure, ad-free business email built for teams — with shared inboxes, calendars, and a clean interface that gets out of your way.",
    features: ["Custom domain email", "Shared team inboxes", "Built-in calendar & tasks", "Enterprise-grade security"],
    color: "#1F8A57",
  },
  {
    id: "books",
    name: "Zoho Books",
    category: "Finance",
    tagline: "Accounting that adds up.",
    description:
      "End-to-end accounting software for growing businesses — invoicing, expense tracking, and compliance, reconciled automatically.",
    features: ["Automated invoicing", "Bank reconciliation", "Multi-currency support", "Tax compliance"],
    color: "#1A6FB0",
  },
  {
    id: "projects",
    name: "Zoho Projects",
    category: "Productivity",
    tagline: "Plans that ship on time.",
    description:
      "Project management built for teams that need more than a to-do list — Gantt charts, time tracking, and issue management in one place.",
    features: ["Gantt charts & timelines", "Time tracking", "Issue & bug tracking", "Team collaboration"],
    color: "#B6791E",
  },
  {
    id: "creator",
    name: "Zoho Creator",
    category: "Low-code",
    tagline: "Build the app you couldn't find.",
    description:
      "A low-code platform that lets teams design custom business applications quickly, without waiting on a dev team backlog.",
    features: ["Drag-and-drop builder", "Custom workflows", "Cross-platform apps", "Enterprise integrations"],
    color: "#6B3FA0",
  },
  {
    id: "desk",
    name: "Zoho Desk",
    category: "Support",
    tagline: "Tickets, resolved faster.",
    description:
      "Context-aware customer support software that helps agents resolve tickets faster with the right information always on hand.",
    features: ["Multi-channel ticketing", "SLA management", "Self-service help center", "AI-assisted responses"],
    color: "#C8202F",
  },
];

export const allProducts = [
  ...products,
  {
    id: "people",
    name: "Zoho People",
    category: "HR",
    tagline: "HR that feels human.",
    description: "Core HR software covering onboarding, attendance, performance, and employee self-service.",
    features: ["Onboarding workflows", "Leave & attendance", "Performance reviews", "Employee self-service"],
    color: "#1A6FB0",
  },
  {
    id: "analytics",
    name: "Zoho Analytics",
    category: "Business Intelligence",
    tagline: "Decisions, backed by data.",
    description: "Self-service BI and data analytics that turns raw business data into shareable dashboards.",
    features: ["Drag-and-drop dashboards", "AI-powered insights", "150+ data integrations", "Embedded analytics"],
    color: "#1F8A57",
  },
  {
    id: "campaigns",
    name: "Zoho Campaigns",
    category: "Marketing",
    tagline: "Campaigns that convert.",
    description: "Email marketing software to design, send, and track campaigns that actually reach the inbox.",
    features: ["Drag-and-drop email builder", "Marketing automation", "A/B testing", "Campaign analytics"],
    color: "#B6791E",
  },
];
