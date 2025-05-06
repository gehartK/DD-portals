"use client"

import {
  ArrowUpRight,
  Award,
  BarChart3,
  Building2,
  Calendar,
  DollarSign,
  Globe,
  Landmark,
  LineChart,
  MapPin,
  ShieldAlert,
  Smartphone,
  Sprout,
  Target,
  Tractor,
  Wallet,
} from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function CompanyOverviewPage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Tractor className="h-12 w-12" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl font-bold tracking-tight text-white">Emata</h1>
              <p className="text-zinc-400">The in-house bank for agri companies</p>
              <div className="mt-2 flex flex-wrap gap-3">
                <div className="flex items-center gap-1 rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                  <Building2 className="h-3 w-3" />
                  <span>Founded 2021</span>
                </div>
                <div className="flex items-center gap-1 rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                  <MapPin className="h-3 w-3" />
                  <span>Kampala, Uganda</span>
                </div>
                <div className="flex items-center gap-1 rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                  <Landmark className="h-3 w-3" />
                  <span>Fintech, AgriTech</span>
                </div>
                <Link
                  href="https://emata.ug"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 rounded-full bg-primary/20 px-3 py-1 text-xs text-primary hover:bg-primary/30 transition-colors"
                >
                  <Globe className="h-3 w-3" />
                  <span>Website</span>
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Co-Founders Section */}
      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            Co-Founders
          </CardTitle>
          <CardDescription className="text-zinc-400">Leadership team behind Emata</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="h-16 w-16 rounded-full bg-zinc-800 flex items-center justify-center text-primary">
                <span className="text-xl font-bold">BB</span>
              </div>
              <div>
                <h3 className="font-medium text-zinc-200">Bram van den Bosch</h3>
                <p className="text-sm text-primary">CEO & Co-Founder</p>
                <p className="mt-2 text-sm text-zinc-400">
                  Experienced fintech leader with background in digital banking and financial services
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-16 w-16 rounded-full bg-zinc-800 flex items-center justify-center text-primary">
                <span className="text-xl font-bold">LN</span>
              </div>
              <div>
                <h3 className="font-medium text-zinc-200">Lillian Nassanga</h3>
                <p className="text-sm text-primary">CPO & Co-Founder</p>
                <p className="mt-2 text-sm text-zinc-400">
                  Product leader with expertise in financial services and agricultural technology
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-16 w-16 rounded-full bg-zinc-800 flex items-center justify-center text-primary">
                <span className="text-xl font-bold">DA</span>
              </div>
              <div>
                <h3 className="font-medium text-zinc-200">Dave Agaba</h3>
                <p className="text-sm text-primary">CTO & Co-Founder</p>
                <p className="mt-2 text-sm text-zinc-400">
                  Technology expert with experience in software development for financial institutions
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-16 w-16 rounded-full bg-zinc-800 flex items-center justify-center text-primary">
                <span className="text-xl font-bold">DR</span>
              </div>
              <div>
                <h3 className="font-medium text-zinc-200">Dario Raffaele</h3>
                <p className="text-sm text-primary">Chief Data Science Officer</p>
                <p className="mt-2 text-sm text-zinc-400">
                  Data science specialist joining full-time upon next funding milestone
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mission & Vision Section */}
      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Mission & Vision
          </CardTitle>
          <CardDescription className="text-zinc-400">Our purpose and long-term goals</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-lg bg-zinc-800 p-4">
            <h3 className="font-medium text-zinc-200">Vision</h3>
            <p className="mt-2 text-zinc-400">
              To unlock agricultural productivity and rural prosperity across Africa by embedding finance into the
              agricultural value chain.
            </p>
          </div>
          <div className="rounded-lg bg-zinc-800 p-4">
            <h3 className="font-medium text-zinc-200">Mission</h3>
            <p className="mt-2 text-zinc-400">
              To bring affordable digital loans to millions of smallholder farmers who are currently excluded from
              formal financial services.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex flex-col items-center rounded-lg bg-zinc-800 p-4 text-center">
              <Sprout className="h-8 w-8 text-primary mb-2" />
              <h4 className="font-medium text-zinc-200">Agricultural Growth</h4>
              <p className="mt-2 text-sm text-zinc-400">
                Transforming African agriculture through accessible financing
              </p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-zinc-800 p-4 text-center">
              <Wallet className="h-8 w-8 text-primary mb-2" />
              <h4 className="font-medium text-zinc-200">Financial Inclusion</h4>
              <p className="mt-2 text-sm text-zinc-400">
                Providing affordable loans to underserved smallholder farmers
              </p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-zinc-800 p-4 text-center">
              <Globe className="h-8 w-8 text-primary mb-2" />
              <h4 className="font-medium text-zinc-200">Rural Prosperity</h4>
              <p className="mt-2 text-sm text-zinc-400">Improving livelihoods through data-driven financial services</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Products & Services */}
      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Landmark className="h-5 w-5 text-primary" />
            Key Products & Services
          </CardTitle>
          <CardDescription className="text-zinc-400">
            Digital financial solutions for agricultural value chains
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary/20 text-primary">
                <Landmark className="h-5 w-5" />
              </div>
              <h3 className="font-medium text-zinc-200">Digital Farmer Loans</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Small, affordable digital loans for farmers, accessible via WhatsApp or cooperative-owned devices and
                disbursed via mobile money.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary/20 text-primary">
                <Smartphone className="h-5 w-5" />
              </div>
              <h3 className="font-medium text-zinc-200">Management Information System</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Proprietary MIS offered free to agricultural cooperatives, helping digitize farmer records and serving
                as the backbone for credit scoring.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary/20 text-primary">
                <DollarSign className="h-5 w-5" />
              </div>
              <h3 className="font-medium text-zinc-200">Trade Finance</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Short-term trader finance and enterprise loans funded by agri-corporates and banks to support
                agricultural value chains.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary/20 text-primary">
                <ShieldAlert className="h-5 w-5" />
              </div>
              <h3 className="font-medium text-zinc-200">Crop Insurance</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Insurance products offered on a zero-markup basis to build loyalty and protect farmers against crop
                failures and other risks.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Business Model & Market Opportunity */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              Business Model
            </CardTitle>
            <CardDescription className="text-zinc-400">How Emata creates and delivers value</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium text-zinc-200">Revenue Generation</h3>
              <p className="text-sm text-zinc-400">
                Emata monetizes primarily through interest earned on digital loans, with rates ranging from 2.5% to
                4.25% per month—up to five times more affordable than informal lenders.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-zinc-200">Free MIS Platform</h3>
              <p className="text-sm text-zinc-400">
                Emata does not charge cooperatives for its MIS platform. Instead, the software gathers valuable farmer
                data that feeds into its credit scoring engine.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-zinc-200">Complementary Services</h3>
              <p className="text-sm text-zinc-400">
                Additional services like insurance and digital payments are offered on a zero-markup basis to build
                loyalty and expand functionality, not as standalone revenue streams.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <LineChart className="h-5 w-5 text-primary" />
              Market Opportunity
            </CardTitle>
            <CardDescription className="text-zinc-400">The unmet financing gap in African agriculture</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-zinc-400">
                Emata is tackling a $240 billion unmet financing gap in African agriculture, with operations in Uganda
                and planned expansion to Tanzania and Ethiopia.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-400">Agriculture's Share of Uganda's GDP</span>
                <span className="text-sm font-medium text-zinc-200">30%</span>
              </div>
              <Progress value={30} className="h-2" />
              <p className="text-xs text-zinc-500">
                While agriculture makes up 30% of Uganda's GDP and employs 70% of its population, it receives only a
                fraction of total bank loans.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-400">Target Market Size</span>
                <span className="text-sm font-medium text-zinc-200">$240B</span>
              </div>
              <div className="h-2 w-full rounded-full bg-zinc-800">
                <div className="h-2 rounded-full bg-primary" style={{ width: "60%" }}></div>
              </div>
              <p className="text-xs text-zinc-500">
                Emata targets high-potential value chains including dairy, coffee, and potatoes, with longer-term
                ambitions to serve millions of farmers across East Africa.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Developments */}
      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Recent Developments
          </CardTitle>
          <CardDescription className="text-zinc-400">Key milestones and future plans</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-zinc-800">
            <div className="relative mb-8 pl-6">
              <div className="absolute -left-[13px] top-0 h-6 w-6 rounded-full border-2 border-primary bg-zinc-900"></div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-zinc-200">Loan Disbursements</span>
                  <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400">2023-2024</span>
                </div>
                <p className="text-sm text-zinc-400">
                  Emata disbursed over $1.9 million in loans to more than 7,000 farmers across dairy, coffee, and crop
                  sectors.
                </p>
              </div>
            </div>
            <div className="relative mb-8 pl-6">
              <div className="absolute -left-[13px] top-0 h-6 w-6 rounded-full border-2 border-primary bg-zinc-900"></div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-zinc-200">MIS Implementation</span>
                  <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400">2023-2024</span>
                </div>
                <p className="text-sm text-zinc-400">
                  Emata's MIS is live with 62 agricultural partners, reaching more than 100,000 farmers, resulting in a
                  30% increase in farmer productivity.
                </p>
              </div>
            </div>
            <div className="relative pl-6">
              <div className="absolute -left-[13px] top-0 h-6 w-6 rounded-full border-2 border-primary bg-zinc-900"></div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-zinc-200">2025 Expansion Plans</span>
                  <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400">2025</span>
                </div>
                <p className="text-sm text-zinc-400">
                  Emata plans to launch trade finance in the coffee sector, expand potato lending, and raise $750k in
                  new funding for market expansion into Tanzania and Ethiopia.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Financial Summary & Investment Opportunity */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Financial Summary
            </CardTitle>
            <CardDescription className="text-zinc-400">Current performance and projections</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg bg-zinc-800 p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-400">Total Loans Disbursed</span>
                <span className="text-lg font-medium text-white">$1.9M+</span>
              </div>
            </div>
            <div className="rounded-lg bg-zinc-800 p-4 mt-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-400">Revenue Growth</span>
                <span className="text-lg font-medium text-white">$55K → $186K → $260K+</span>
              </div>
              <p className="text-xs text-zinc-500 mt-1">2022 → 2023 → 2024 (projected)</p>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-zinc-200">Key Financial Metrics</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-400">Gross Margins</span>
                  <span className="text-xs font-medium text-zinc-200">67%</span>
                </div>
                <Progress value={67} className="h-1.5" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-400">Projected Profitability</span>
                  <span className="text-xs font-medium text-zinc-200">2026-2027</span>
                </div>
                <Progress value={60} className="h-1.5" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-zinc-200">Funding History</h3>
              <p className="text-sm text-zinc-400">
                To date, Emata has raised $3.5 million, including $1.6 million in on-lending capital and $1.1 million in
                grant funding. The company posted $80K+ gross profit in 2023 despite a net loss of ~$330K.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              Investment Opportunity
            </CardTitle>
            <CardDescription className="text-zinc-400">Current funding round and valuation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg bg-zinc-800 p-4">
              <h3 className="font-medium text-zinc-200">Seed Extension Round (2025)</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Emata is seeking up to $450k in a seed extension round, with a targeted Series A of $1–2.5 million in
                2026 or 2027.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg bg-zinc-800 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-400">Funding Target</span>
                  <span className="text-sm font-medium text-zinc-200">$450K</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <div className="h-2 flex-1 rounded-full bg-zinc-700">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "33%" }}></div>
                  </div>
                  <span className="text-xs text-zinc-400">33%</span>
                </div>
                <div className="mt-2 text-xs text-zinc-500">
                  <p>Capital will be used to:</p>
                  <ul className="list-disc pl-4 mt-1 space-y-1">
                    <li>Hire in tech and sales</li>
                    <li>Fund market expansion into Tanzania and Ethiopia</li>
                    <li>Onboard new partners</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Strengths */}
      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            Key Strengths
          </CardTitle>
          <CardDescription className="text-zinc-400">
            Competitive advantages and unique value proposition
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
              <h3 className="font-medium text-zinc-200">Team Synergy</h3>
              <p className="mt-2 text-sm text-zinc-400">
                All co-founders previously worked together at Laboremus Uganda, creating a strong foundational synergy
                and shared vision for transforming agricultural finance.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
              <h3 className="font-medium text-zinc-200">Digital Innovation</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Fully digitized loan lifecycle from data collection to credit scoring to disbursement, accessible even
                for farmers without smartphones through WhatsApp and cooperative-owned devices.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
              <h3 className="font-medium text-zinc-200">Network Effects</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Builds proprietary data and network effects by embedding into agricultural value chains via cooperatives
                and processors, creating a sustainable competitive advantage.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
              <h3 className="font-medium text-zinc-200">Scalable Market Approach</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Addresses high unmet need through B2B onboarding rather than direct-to-farmer acquisition, significantly
                reducing customer acquisition costs while scaling rapidly.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
              <h3 className="font-medium text-zinc-200">Strong Financial Performance</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Margin-positive loans from Day 1 with strong repayment rates (less than 5% default, outperforming
                Ugandan banks) and a clear roadmap to profitability by 2027.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
              <h3 className="font-medium text-zinc-200">Operational Excellence</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Demonstrating clear operational scaling with maturity in product development, risk management, and
                partner enablement across multiple agricultural value chains.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Risks */}
      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <ShieldAlert className="h-5 w-5 text-primary" />
            Key Risks
          </CardTitle>
          <CardDescription className="text-zinc-400">Challenges and considerations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
              <h3 className="font-medium text-zinc-200">Cooperative Governance</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Need for improved governance structures within agricultural cooperatives to ensure effective
                partnership.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
              <h3 className="font-medium text-zinc-200">Scaling Challenges</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Challenges in scaling operations across diverse East African markets with varying regulatory
                environments.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
              <h3 className="font-medium text-zinc-200">Team Completion</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Need to bring the Chief Data Science Officer fully onboard to strengthen the technical leadership team.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Conclusion */}
      <Card className="border-zinc-800 bg-zinc-900">
        <CardContent className="pt-6">
          <div className="rounded-lg bg-primary/10 p-6 text-center">
            <h3 className="text-lg font-medium text-white">Conclusion</h3>
            <p className="mt-2 text-zinc-400">
              Emata is positioned to become the de facto infrastructure for embedded agri-finance across East Africa.
              With a powerful founding team, innovative digital lending platform, and deep integration into agricultural
              value chains, Emata effectively addresses the significant financing gap for smallholder farmers. The
              company's strong unit economics, clear scaling roadmap, and impressive repayment metrics demonstrate a
              compelling investment case in the agri-fintech sector. By combining financial inclusion with agricultural
              transformation, Emata is building a sustainable business that delivers both social impact and financial
              returns across East Africa.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
