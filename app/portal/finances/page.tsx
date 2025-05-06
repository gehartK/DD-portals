"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  DollarSign,
  Calendar,
  ArrowRight,
  AlertTriangle,
  TrendingUp,
  BarChart3,
  PieChart,
  Repeat,
  Leaf,
  Building,
  CreditCard,
  Coins,
  Banknote,
  RefreshCw,
  ChevronDown,
  ChevronUp,
  Landmark,
  ArrowDownToLine,
  ArrowUpFromLine,
} from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { cn } from "@/lib/utils"

export default function FinancesPage() {
  const [expandedSections, setExpandedSections] = useState({
    greenLending: false,
    carbonCredit: false,
    guaranteeFacility: false,
    flowInPractice: false,
  })

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">Financial Dashboard</h1>
        <p className="text-zinc-400">Financial performance, funding history, and projections</p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="funding">Funding</TabsTrigger>
          <TabsTrigger value="flow">Flow of Funds</TabsTrigger>
          <TabsTrigger value="projections">Projections</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="funding" className="space-y-4">
          {/* Current Fundraising Round */}
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="mr-2 h-5 w-5 text-primary" />
                Current Fundraising Round (Seed Round, 2024)
              </CardTitle>
              <CardDescription>Status of the ongoing fundraising efforts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Key Metrics */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-zinc-800 p-4">
                  <div className="text-sm text-zinc-400">Amount Sought</div>
                  <div className="mt-1 text-2xl font-bold text-white">$3,000,000</div>
                  <div className="mt-2 flex items-center gap-2">
                    <Badge variant="outline" className="bg-zinc-700">
                      Debt: $2,000,000
                    </Badge>
                    <Badge variant="outline" className="bg-zinc-700">
                      Equity: $1,000,000
                    </Badge>
                  </div>
                </div>
                <div className="rounded-lg bg-zinc-800 p-4">
                  <div className="text-sm text-zinc-400">Equity Offered</div>
                  <div className="mt-1 text-2xl font-bold text-white">9.02%</div>
                  <div className="mt-2 text-xs text-zinc-500">Based on pre-money valuation</div>
                </div>
                <div className="rounded-lg bg-zinc-800 p-4">
                  <div className="text-sm text-zinc-400">Committed Capital</div>
                  <div className="mt-1 text-2xl font-bold text-white">$500,000</div>
                  <div className="mt-2 text-xs text-zinc-500">Soft commitments</div>
                </div>
              </div>

              {/* Progress Bars */}
              <div className="space-y-4">
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="text-sm font-medium">Debt Commitments</div>
                    <div className="text-sm text-zinc-400">$1,500,000 / $2,000,000</div>
                  </div>
                  <Progress value={75} className="h-2" />
                  <div className="mt-1 text-xs text-zinc-500">
                    Soft commitments from Bestseller Foundation, GIZ, Gather Ventures, and Ecobank
                  </div>
                </div>
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <div className="text-sm font-medium">Equity Commitments</div>
                    <div className="text-sm text-zinc-400">$600,000 / $1,000,000</div>
                  </div>
                  <Progress value={60} className="h-2" />
                  <div className="mt-1 text-xs text-zinc-500">
                    Soft commitments from Sagana, Bestseller Foundation, DEG, Ryad, and Katapult
                  </div>
                </div>
              </div>

              {/* Use of Funds */}
              <div>
                <h3 className="mb-3 text-sm font-medium">Use of Funds</h3>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                  <div className="rounded-lg bg-zinc-800 p-3">
                    <div className="flex items-center justify-between">
                      <div className="text-sm">Technology Development</div>
                      <div className="text-sm font-medium">50%</div>
                    </div>
                    <Progress value={50} className="mt-2 h-1.5" />
                  </div>
                  <div className="rounded-lg bg-zinc-800 p-3">
                    <div className="flex items-center justify-between">
                      <div className="text-sm">Commercial Team Expansion</div>
                      <div className="text-sm font-medium">30%</div>
                    </div>
                    <Progress value={30} className="mt-2 h-1.5" />
                  </div>
                  <div className="rounded-lg bg-zinc-800 p-3">
                    <div className="flex items-center justify-between">
                      <div className="text-sm">CMA Licensing Compliance</div>
                      <div className="text-sm font-medium">20%</div>
                    </div>
                    <Progress value={20} className="mt-2 h-1.5" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Funding History */}
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2 h-5 w-5 text-primary" />
                Funding History
              </CardTitle>
              <CardDescription>Past funding rounds and capital raised</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Timeline visualization */}
              <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-zinc-800">
                {/* 2023 Round */}
                <div className="relative mb-8 pl-6">
                  <div className="absolute -left-[13px] top-0 h-6 w-6 rounded-full border-2 border-primary bg-zinc-900"></div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-zinc-200">Convertible Round</span>
                      <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400">2023</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-zinc-800">
                        $200,000
                      </Badge>
                      <span className="text-xs text-zinc-500">Adaverse</span>
                    </div>
                    <p className="text-sm text-zinc-400">
                      Convertible note with $5,000,000 cap. Funds used for scaling operations and expanding market
                      presence.
                    </p>
                  </div>
                </div>

                {/* 2022 Round */}
                <div className="relative mb-8 pl-6">
                  <div className="absolute -left-[13px] top-0 h-6 w-6 rounded-full border-2 border-primary bg-zinc-900"></div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-zinc-200">Convertible Round</span>
                      <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400">2022</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-zinc-800">
                        $100,000 - Techstars Berlin
                      </Badge>
                      <Badge variant="outline" className="bg-zinc-800">
                        €10,000 - Marwin Keïta
                      </Badge>
                      <Badge variant="outline" className="bg-zinc-800">
                        €50,000 - Sylvie Bogenschütz
                      </Badge>
                      <Badge variant="outline" className="bg-zinc-800">
                        €14,000 - Eva Keita
                      </Badge>
                      <Badge variant="outline" className="bg-zinc-800">
                        $15,000 - Julio Mupemba
                      </Badge>
                    </div>
                    <p className="text-sm text-zinc-400">
                      Convertible notes issued with discount rates and valuation caps. Funds used for expansion and
                      product development, particularly for building the digital platform.
                    </p>
                  </div>
                </div>

                {/* 2020 Round */}
                <div className="relative pl-6">
                  <div className="absolute -left-[13px] top-0 h-6 w-6 rounded-full border-2 border-primary bg-zinc-900"></div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-zinc-200">Initial Capital</span>
                      <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400">2020</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-zinc-800">
                        €1,000
                      </Badge>
                    </div>
                    <p className="text-sm text-zinc-400">
                      Founders each contributed €500 as the initial subscribed capital. Funds used for initial
                      establishment and setup of the company.
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Observations */}
              <div className="mt-8 rounded-lg bg-zinc-800/50 p-4">
                <h3 className="mb-3 text-sm font-medium">Key Observations</h3>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex gap-2">
                    <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>
                      <strong>Convertible Financing:</strong> The company has used convertible financing in the past,
                      including discounts and valuation caps, to raise funds. This has allowed them to maintain flexible
                      financing structures, especially with early-stage investors.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>
                      <strong>Progressing to Equity Financing:</strong> The current round reflects a more traditional
                      equity-based funding approach with a fixed pre-money valuation and clear equity allocation.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>
                      <strong>Growth & Expansion:</strong> Funds raised are being directed towards scaling operations,
                      improving digital infrastructure, and expanding the customer base (with a focus on green finance
                      products like carbon credits and green loans).
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Flow of Funds Tab */}
        <TabsContent value="flow" className="space-y-6">
          {/* Introduction Card */}
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle className="flex items-center">
                <RefreshCw className="mr-2 h-5 w-5 text-primary" />
                Flow of Funds Overview
              </CardTitle>
              <CardDescription>How capital moves through Melanin Kapital's ecosystem</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-zinc-400">
                <p>
                  Melanin Kapital's financial ecosystem combines traditional banking with innovative blockchain
                  technology to create a sustainable green finance model. The flow of funds encompasses green lending
                  mechanisms, carbon credit tokenization, and strategic banking partnerships.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Visual Flow Diagram */}
          <Card className="border-zinc-800 bg-zinc-900 overflow-hidden">
            <CardHeader className="bg-zinc-800/50">
              <CardTitle className="text-white">Funds Flow Visualization</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="relative h-[400px] w-full overflow-hidden bg-zinc-900 p-4">
                <svg width="100%" height="100%" viewBox="0 0 800 350" className="mx-auto">
                  {/* Background Elements */}
                  <rect x="0" y="0" width="800" height="350" fill="transparent" />

                  {/* Nodes */}
                  {/* Melanin Kapital */}
                  <circle cx="400" cy="80" r="50" fill="rgba(0, 230, 118, 0.2)" stroke="#00E676" strokeWidth="2" />
                  <text x="400" y="80" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">
                    Melanin Kapital
                  </text>
                  <text x="400" y="100" textAnchor="middle" fill="#CCCCCC" fontSize="10">
                    Central Hub
                  </text>

                  {/* Ecobank */}
                  <circle cx="200" cy="180" r="40" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" strokeWidth="2" />
                  <text x="200" y="180" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">
                    Ecobank
                  </text>
                  <text x="200" y="200" textAnchor="middle" fill="#CCCCCC" fontSize="10">
                    Banking Partner
                  </text>

                  {/* Businesses/SMEs */}
                  <circle cx="600" cy="180" r="40" fill="rgba(139, 92, 246, 0.2)" stroke="#8B5CF6" strokeWidth="2" />
                  <text x="600" y="180" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">
                    SMEs
                  </text>
                  <text x="600" y="200" textAnchor="middle" fill="#CCCCCC" fontSize="10">
                    Loan Recipients
                  </text>

                  {/* Carbon Credit Market */}
                  <circle cx="400" cy="280" r="40" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" strokeWidth="2" />
                  <text x="400" y="280" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">
                    Carbon Market
                  </text>
                  <text x="400" y="300" textAnchor="middle" fill="#CCCCCC" fontSize="10">
                    Trading Platform
                  </text>

                  {/* Arrows and Flows */}
                  {/* Melanin to Ecobank */}
                  <path
                    d="M360 110 L240 150"
                    stroke="#00E676"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                  />
                  <text
                    x="290"
                    y="120"
                    textAnchor="middle"
                    fill="#CCCCCC"
                    fontSize="10"
                    transform="rotate(-20, 290, 120)"
                  >
                    Pooled Funds
                  </text>

                  {/* Ecobank to Melanin */}
                  <path
                    d="M240 160 L360 120"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                  />
                  <text
                    x="290"
                    y="150"
                    textAnchor="middle"
                    fill="#CCCCCC"
                    fontSize="10"
                    transform="rotate(-20, 290, 150)"
                  >
                    80% Overdraft
                  </text>

                  {/* Melanin to SMEs */}
                  <path
                    d="M440 110 L560 150"
                    stroke="#00E676"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                  />
                  <text
                    x="510"
                    y="120"
                    textAnchor="middle"
                    fill="#CCCCCC"
                    fontSize="10"
                    transform="rotate(20, 510, 120)"
                  >
                    Green Loans
                  </text>

                  {/* SMEs to Melanin */}
                  <path
                    d="M560 160 L440 120"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                  />
                  <text
                    x="510"
                    y="150"
                    textAnchor="middle"
                    fill="#CCCCCC"
                    fontSize="10"
                    transform="rotate(20, 510, 150)"
                  >
                    Loan Repayments
                  </text>

                  {/* SMEs to Carbon Market */}
                  <path
                    d="M570 210 L430 260"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                  />
                  <text
                    x="500"
                    y="245"
                    textAnchor="middle"
                    fill="#CCCCCC"
                    fontSize="10"
                    transform="rotate(30, 500, 245)"
                  >
                    Carbon Credits
                  </text>

                  {/* Carbon Market to Melanin */}
                  <path
                    d="M380 250 L390 130"
                    stroke="#10B981"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                  />
                  <text
                    x="370"
                    y="190"
                    textAnchor="middle"
                    fill="#CCCCCC"
                    fontSize="10"
                    transform="rotate(-80, 370, 190)"
                  >
                    Tokenized Credits
                  </text>

                  {/* Melanin to Carbon Market */}
                  <path
                    d="M410 130 L420 250"
                    stroke="#00E676"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                  />
                  <text
                    x="430"
                    y="190"
                    textAnchor="middle"
                    fill="#CCCCCC"
                    fontSize="10"
                    transform="rotate(80, 430, 190)"
                  >
                    MelanCarbon Tokens
                  </text>

                  {/* Arrowhead Marker */}
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#CCCCCC" />
                    </marker>
                  </defs>
                </svg>
              </div>
            </CardContent>
          </Card>

          {/* Green Lending Mechanism */}
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader className="cursor-pointer" onClick={() => toggleSection("greenLending")}>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <Leaf className="mr-2 h-5 w-5 text-primary" />
                  Green Lending Mechanism
                </div>
                {expandedSections.greenLending ? (
                  <ChevronUp className="h-5 w-5 text-zinc-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-zinc-400" />
                )}
              </CardTitle>
              <CardDescription>How green loans are funded, disbursed, and repaid</CardDescription>
            </CardHeader>
            <CardContent
              className={cn(
                "grid gap-4 overflow-hidden transition-all duration-300",
                expandedSections.greenLending ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div className="grid gap-4 md:grid-cols-2">
                  {/* Funding Flow */}
                  <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <ArrowDownToLine className="h-5 w-5 text-primary" />
                      <h3 className="font-medium text-zinc-200">Funding Flow</h3>
                    </div>
                    <ul className="space-y-3 text-sm text-zinc-400">
                      <li className="flex gap-2">
                        <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        </div>
                        <span>
                          Melanin Kapital provides green loans to businesses that want to reduce their carbon footprint,
                          using carbon credit certifications as collateral.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        </div>
                        <span>
                          Funding is pooled in Ecobank Kenya, where Melanin Kapital leverages a guarantee facility to
                          draw 80% of pooled funds through an overdraft agreement at 3% interest.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        </div>
                        <span>
                          Loans are provided with interest rates ranging from 0.5% to 5% per month, depending on the
                          carbon certification status of the borrower.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Repayment and Tracking */}
                  <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <ArrowUpFromLine className="h-5 w-5 text-primary" />
                      <h3 className="font-medium text-zinc-200">Repayment and Tracking</h3>
                    </div>
                    <ul className="space-y-3 text-sm text-zinc-400">
                      <li className="flex gap-2">
                        <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        </div>
                        <span>
                          Loan repayments are made to Ecobank accounts and tracked in relation to the carbon credits
                          associated with the loan recipient.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        </div>
                        <span>
                          As businesses repay the loan, carbon credits are used to verify that repayments are made,
                          ensuring alignment with environmental goals.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        </div>
                        <span>
                          The use of carbon credits for loan security ensures that the company's green financing remains
                          verifiable and traceable.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Interest Rate Structure */}
                <div className="mt-4 rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <Coins className="h-5 w-5 text-primary" />
                    <h3 className="font-medium text-zinc-200">Interest Rate Structure</h3>
                  </div>
                  <div className="grid gap-3 md:grid-cols-3">
                    <div className="rounded-lg bg-zinc-800 p-3">
                      <div className="text-sm font-medium text-zinc-200">Ecobank Overdraft</div>
                      <div className="mt-1 text-2xl font-bold text-primary">3%</div>
                      <div className="mt-1 text-xs text-zinc-500">Cost of capital for Melanin Kapital</div>
                    </div>
                    <div className="rounded-lg bg-zinc-800 p-3">
                      <div className="text-sm font-medium text-zinc-200">Min Loan Rate</div>
                      <div className="mt-1 text-2xl font-bold text-primary">0.5%</div>
                      <div className="mt-1 text-xs text-zinc-500">Monthly for certified green businesses</div>
                    </div>
                    <div className="rounded-lg bg-zinc-800 p-3">
                      <div className="text-sm font-medium text-zinc-200">Max Loan Rate</div>
                      <div className="mt-1 text-2xl font-bold text-primary">5%</div>
                      <div className="mt-1 text-xs text-zinc-500">Monthly for businesses without certification</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Carbon Credit Tokenization and Trading */}
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader className="cursor-pointer" onClick={() => toggleSection("carbonCredit")}>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <Repeat className="mr-2 h-5 w-5 text-primary" />
                  Carbon Credit Tokenization & Trading
                </div>
                {expandedSections.carbonCredit ? (
                  <ChevronUp className="h-5 w-5 text-zinc-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-zinc-400" />
                )}
              </CardTitle>
              <CardDescription>How carbon credits are tokenized, traded, and utilized</CardDescription>
            </CardHeader>
            <CardContent
              className={cn(
                "grid gap-4 overflow-hidden transition-all duration-300",
                expandedSections.carbonCredit ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div className="grid gap-4 md:grid-cols-2">
                  {/* Tokenization Process */}
                  <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <CreditCard className="h-5 w-5 text-primary" />
                      <h3 className="font-medium text-zinc-200">Tokenization Process</h3>
                    </div>
                    <ul className="space-y-3 text-sm text-zinc-400">
                      <li className="flex gap-2">
                        <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        </div>
                        <span>
                          Melanin Kapital leverages blockchain technology to tokenize verified carbon credits into NFTs
                          or ERC-20 tokens known as MelanCarbon.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        </div>
                        <span>
                          MelanCarbon tokens act as verifiable proof of carbon credit ownership, conducted through a
                          multi-party computation (MPC) system.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        </div>
                        <span>
                          The tokenization involves Melanin Kapital, the DFNS custodian, and hosting providers to ensure
                          security and immutability.
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Burning & Utilization */}
                  <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                    <div className="mb-3 flex items-center gap-2">
                      <Banknote className="h-5 w-5 text-primary" />
                      <h3 className="font-medium text-zinc-200">Burning & Utilization</h3>
                    </div>
                    <ul className="space-y-3 text-sm text-zinc-400">
                      <li className="flex gap-2">
                        <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        </div>
                        <span>
                          As a carbon credit is used or traded, it undergoes a burning process within the blockchain
                          system, symbolizing that it's no longer available.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        </div>
                        <span>
                          The burning of tokens ensures scarcity and prevents double-counting of credits, making the
                          process transparent and secure.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                        </div>
                        <span>
                          A smart contract then mints an NFT certificate as a permanent digital record of the carbon
                          credit being retired or used.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Blockchain Platform Integration */}
                <div className="mt-4 rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    <h3 className="font-medium text-zinc-200">Blockchain Platform & Market Expansion</h3>
                  </div>
                  <p className="mb-4 text-sm text-zinc-400">
                    Blockchain technology ensures all transactions, including token minting, burning, and trading, are
                    recorded immutably. This provides transparency to corporate buyers and carbon credit traders, who
                    can verify their purchases and sales in real time.
                  </p>
                  <p className="text-sm text-zinc-400">
                    Melanin Kapital is actively working on expanding its carbon credit marketplace, where businesses can
                    buy and sell carbon credits using MelanCarbon tokens. The company plans to automate token minting
                    and burning processes once the marketplace is fully operational, enabling a more efficient and
                    scalable carbon credit trading system.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Guarantee Facility with Ecobank */}
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader className="cursor-pointer" onClick={() => toggleSection("guaranteeFacility")}>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <Landmark className="mr-2 h-5 w-5 text-primary" />
                  Guarantee Facility with Ecobank
                </div>
                {expandedSections.guaranteeFacility ? (
                  <ChevronUp className="h-5 w-5 text-zinc-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-zinc-400" />
                )}
              </CardTitle>
              <CardDescription>Banking partnership and leverage mechanism</CardDescription>
            </CardHeader>
            <CardContent
              className={cn(
                "grid gap-4 overflow-hidden transition-all duration-300",
                expandedSections.guaranteeFacility ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    <h3 className="font-medium text-zinc-200">Leverage Mechanism</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-sm text-zinc-400">
                      Melanin Kapital has established a guarantee facility with Ecobank, which allows it to pool funds
                      in an account and then access 80% of those funds as a credit facility. This overdraft facility
                      helps provide capital for lending purposes.
                    </p>
                    <p className="text-sm text-zinc-400">
                      The guarantee facility acts as collateral, allowing Melanin Kapital to scale its lending
                      operations without needing to raise external funds for each loan, thereby ensuring capital
                      efficiency.
                    </p>

                    <div className="rounded-lg bg-zinc-800 p-4">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-zinc-200">Pooled Funds</div>
                        <div className="text-sm text-zinc-400">100%</div>
                      </div>
                      <Progress value={100} className="mt-2 h-2" />
                      <div className="mt-4 flex items-center justify-between">
                        <div className="text-sm font-medium text-zinc-200">Available as Overdraft</div>
                        <div className="text-sm text-zinc-400">80%</div>
                      </div>
                      <Progress value={80} className="mt-2 h-2" />
                      <div className="mt-1 text-xs text-zinc-500">
                        Melanin Kapital can access 80% of pooled funds as an overdraft facility at 3% interest
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Flow of Funds in Practice */}
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader className="cursor-pointer" onClick={() => toggleSection("flowInPractice")}>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center">
                  <RefreshCw className="mr-2 h-5 w-5 text-primary" />
                  Flow of Funds in Practice
                </div>
                {expandedSections.flowInPractice ? (
                  <ChevronUp className="h-5 w-5 text-zinc-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-zinc-400" />
                )}
              </CardTitle>
              <CardDescription>Step-by-step process of how funds move through the system</CardDescription>
            </CardHeader>
            <CardContent
              className={cn(
                "grid gap-4 overflow-hidden transition-all duration-300",
                expandedSections.flowInPractice ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-primary/30">
                  {/* Step 1 */}
                  <div className="relative mb-8 pl-6">
                    <div className="absolute -left-[13px] top-0 h-6 w-6 rounded-full border-2 border-primary bg-zinc-900"></div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-zinc-200">Step 1: Pooling Funds</span>
                      </div>
                      <p className="text-sm text-zinc-400">
                        Melanin Kapital sets up the guarantee facility with Ecobank and deposits initial funds from
                        investors, grants, and other sources into an Ecobank account. This serves as collateral for the
                        overdraft facility.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative mb-8 pl-6">
                    <div className="absolute -left-[13px] top-0 h-6 w-6 rounded-full border-2 border-primary bg-zinc-900"></div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-zinc-200">Step 2: Loan Disbursement</span>
                      </div>
                      <p className="text-sm text-zinc-400">
                        SMEs or other businesses that wish to access green loans approach Melanin Kapital and provide
                        carbon credit certifications as collateral. Once the loan terms are agreed upon, funds are
                        transferred from the pooled account into the borrower's Ecobank account.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative mb-8 pl-6">
                    <div className="absolute -left-[13px] top-0 h-6 w-6 rounded-full border-2 border-primary bg-zinc-900"></div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-zinc-200">
                          Step 3: Loan Repayment and Carbon Credit Tracking
                        </span>
                      </div>
                      <p className="text-sm text-zinc-400">
                        The borrower repays the loan, and payments are tracked against the carbon credits associated
                        with the loan. This ensures that the borrower's repayment is in line with their green finance
                        obligations.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="relative pl-6">
                    <div className="absolute -left-[13px] top-0 h-6 w-6 rounded-full border-2 border-primary bg-zinc-900"></div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium text-zinc-200">
                          Step 4: Tokenization of Carbon Credits
                        </span>
                      </div>
                      <p className="text-sm text-zinc-400">
                        When a business completes a carbon-saving project or contributes to carbon offset, the
                        associated carbon credits are tokenized into MelanCarbon tokens via the blockchain system. These
                        tokens can be traded or held as proof of carbon offset. If the credits are used (e.g., in a
                        carbon trading market), the tokens are burned, and a digital certificate (NFT) is issued to
                        confirm the transaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conclusion */}
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle className="text-white">Conclusion</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-400">
                The flow of funds within Melanin Kapital's green finance and carbon credit mechanisms combines
                traditional banking systems with innovative blockchain technology. The funds raised via Ecobank's
                guarantee facility allow for efficient green lending and the pooling of funds to support multiple loan
                disbursements. At the same time, carbon credits are tokenized, and these tokens are utilized for both
                loan collateral and carbon trading. This model promotes transparency, efficiency, and scalability in the
                green finance sector, positioning Melanin Kapital as a key player in the sustainable finance ecosystem.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Projections Tab */}
        <TabsContent value="projections" className="space-y-4">
          {/* Revenue Projections */}
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                Revenue Projections (2025-2029)
              </CardTitle>
              <CardDescription>Projected revenue growth over the next five years</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Revenue Breakdown */}
              <div>
                <h3 className="mb-3 text-sm font-medium">Revenue Breakdown</h3>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <div className="text-sm">Carbon Credits</div>
                      <div className="text-sm text-zinc-400">99% of revenue (2025)</div>
                    </div>
                    <Progress value={99} className="h-2" />
                    <p className="mt-1 text-xs text-zinc-500">
                      The largest portion of revenue, expected to comprise about 99% of total revenue by 2025.
                    </p>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <div className="text-sm">Carbon Cards</div>
                      <div className="text-sm text-zinc-400">Growing segment</div>
                    </div>
                    <Progress value={5} className="h-2" />
                    <p className="mt-1 text-xs text-zinc-500">
                      Revenue from carbon cards, in partnership with Ecobank and Visa, will begin in Kenya by 2025,
                      contributing a smaller portion of revenue.
                    </p>
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <div className="text-sm">Green Lending</div>
                      <div className="text-sm text-zinc-400">Emerging segment</div>
                    </div>
                    <Progress value={3} className="h-2" />
                    <p className="mt-1 text-xs text-zinc-500">
                      Melanin Kapital also aims to generate revenue through green lending to SMEs, though this segment
                      is projected to contribute less compared to carbon credits.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Profitability Metrics */}
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="mr-2 h-5 w-5 text-primary" />
                Profitability Metrics
              </CardTitle>
              <CardDescription>Key profitability indicators and projections</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-zinc-800 p-4">
                  <div className="text-sm text-zinc-400">Gross Profit Margin</div>
                  <div className="mt-1 text-2xl font-bold text-white">99%</div>
                  <div className="mt-2 text-xs text-zinc-500">Maintained throughout the forecast period</div>
                </div>
                <div className="rounded-lg bg-zinc-800 p-4">
                  <div className="text-sm text-zinc-400">EBITDA Margin (2025)</div>
                  <div className="mt-1 text-2xl font-bold text-white">100%</div>
                  <div className="mt-2 text-xs text-zinc-500">Strong margin forecast</div>
                </div>
                <div className="rounded-lg bg-zinc-800 p-4">
                  <div className="text-sm text-zinc-400">Net Profit Margin</div>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-2xl font-bold text-white">21%</span>
                    <ArrowRight className="h-4 w-4 text-primary" />
                    <span className="text-2xl font-bold text-white">49%</span>
                  </div>
                  <div className="mt-2 text-xs text-zinc-500">Expected growth from 2025 to 2029</div>
                </div>
              </div>

              {/* Operating Expenses */}
              <div className="mt-6">
                <h3 className="mb-3 text-sm font-medium">Operating Expenses</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between rounded-lg bg-zinc-800 p-3">
                    <div className="text-sm">2025</div>
                    <div className="text-sm font-medium">$505,325</div>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-zinc-800 p-3">
                    <div className="text-sm">2029</div>
                    <div className="text-sm font-medium">$2,500,000</div>
                  </div>
                  <p className="text-xs text-zinc-500">
                    Operating expenses are expected to grow in line with revenue expansion, from $505,325 in 2025 to
                    $2.5 million by 2029.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Growth Drivers */}
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle className="flex items-center">
                <PieChart className="mr-2 h-5 w-5 text-primary" />
                Key Growth Drivers
              </CardTitle>
              <CardDescription>Primary factors driving revenue growth</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                  <h3 className="mb-2 text-sm font-medium">Carbon Credit Trading</h3>
                  <p className="text-xs text-zinc-400">
                    Expected to be the primary revenue driver for the next several years, with potential expansion into
                    other African countries and Europe.
                  </p>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                  <h3 className="mb-2 text-sm font-medium">Carbon Cards</h3>
                  <p className="text-xs text-zinc-400">
                    Will incentivize climate-friendly behaviors, with early launches scheduled in Kenya starting in May
                    2025.
                  </p>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                  <h3 className="mb-2 text-sm font-medium">Green Lending</h3>
                  <p className="text-xs text-zinc-400">
                    Providing financial services to SMEs focused on sustainable practices, creating a new revenue stream
                    as the company expands.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Risks and Concerns */}
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle className="flex items-center">
                <AlertTriangle className="mr-2 h-5 w-5 text-yellow-500" />
                Risks and Concerns
              </CardTitle>
              <CardDescription>Key challenges that may impact financial projections</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert className="bg-yellow-900/20 border-yellow-900/50">
                <AlertTriangle className="h-4 w-4 text-yellow-500" />
                <AlertTitle>Overly Optimistic Revenue Growth</AlertTitle>
                <AlertDescription className="text-yellow-200/70">
                  The projected revenue growth from $707,977 in 2025 to $5.99 million in 2029 is highly ambitious and
                  may face challenges in execution.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                  <h3 className="mb-2 text-sm font-medium">Dependence on Carbon Credits</h3>
                  <p className="text-xs text-zinc-400">
                    Carbon credits are expected to account for 99% of revenue by 2025, which raises questions about the
                    sustainability and diversification of revenue. While carbon credits are a growing market, price
                    volatility in carbon markets, regulatory changes, and market demand could affect the predictability
                    of future revenues.
                  </p>
                </div>

                <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                  <h3 className="mb-2 text-sm font-medium">Customer Acquisition Challenges</h3>
                  <p className="text-xs text-zinc-400">
                    The projections assume rapid customer acquisition and retention, particularly from SMEs and
                    women-owned businesses. The reliance on partnerships for customer acquisition (e.g., with Ecobank
                    and Visa) is a risk. If these partnerships change or fail to meet expectations, it could
                    significantly affect growth projections.
                  </p>
                </div>

                <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                  <h3 className="mb-2 text-sm font-medium">External Funding Dependence</h3>
                  <p className="text-xs text-zinc-400">
                    The company is still in the early stages of revenue generation, and much of its progress depends on
                    external investments. Without financial independence, Melanin Kapital's projections could face
                    significant challenges in the future.
                  </p>
                </div>

                <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                  <h3 className="mb-2 text-sm font-medium">Technology Infrastructure and Costs</h3>
                  <p className="text-xs text-zinc-400">
                    The cloud infrastructure (AWS) costs and the blockchain technology may become significant as the
                    company scales. Melanin Kapital needs to ensure that it has cloud cost optimization strategies in
                    place to avoid unforeseen increases in infrastructure costs.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
