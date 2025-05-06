"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  DollarSign,
  ArrowRight,
  AlertTriangle,
  TrendingUp,
  BarChart3,
  PieChart,
  Repeat,
  Building,
  CreditCard,
  Coins,
  Banknote,
  RefreshCw,
  Landmark,
  ArrowDownToLine,
  ArrowUpFromLine,
  MinusCircle,
  AlertCircle,
  Lightbulb,
  TrendingDown,
  Map,
  Layers,
  Users,
  Server,
  Briefcase,
  LineChart,
  Scale,
  FileText,
  Search,
  BarChart,
} from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"

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

      <Tabs defaultValue="flow" className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="flow">Flow of Funds</TabsTrigger>
          <TabsTrigger value="projections">Projections</TabsTrigger>
          <TabsTrigger value="unit-economics">Unit Economics</TabsTrigger>
        </TabsList>

        {/* Flow of Funds Tab */}
        <TabsContent value="flow" className="space-y-6">
          {/* Introduction Card */}
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle className="flex items-center">
                <RefreshCw className="mr-2 h-5 w-5 text-primary" />
                Emata – Flow of Funds Summary (2022–2024)
              </CardTitle>
              <CardDescription>Overview of capital movement through Emata's ecosystem</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-zinc-400">
                <p>
                  This analysis examines how funds flow through Emata's financial ecosystem, tracking sources of
                  capital, deployment mechanisms, and resulting financial position over the 2022-2024 period.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Sources of Funds */}
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle className="flex items-center">
                <ArrowDownToLine className="mr-2 h-5 w-5 text-green-500" />
                Sources of Funds
              </CardTitle>
              <CardDescription>Capital inflows and revenue streams</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                <h3 className="mb-3 text-sm font-medium flex items-center">
                  <Landmark className="mr-2 h-4 w-4 text-primary" />
                  Loan Capital
                </h3>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li className="flex gap-2">
                    <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span>
                      <strong>On-balance sheet capital:</strong> Deployed for core lending operations (primarily dairy,
                      coffee, crops). ~UGX 6.96B (USD ~$1.8M) in cumulative disbursements by end of 2024.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span>
                      <strong>Convertible Notes:</strong> UGX 2.5B (~USD 660K) raised in 2023 as debt with an equity
                      conversion option.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span>
                      <strong>Enterprise Lending:</strong> Off-balance loan capital facilitated by partners (e.g.,
                      UGACOF), although still limited in volume.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                <h3 className="mb-3 text-sm font-medium flex items-center">
                  <Coins className="mr-2 h-4 w-4 text-yellow-500" />
                  Grants
                </h3>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li className="flex gap-2">
                    <div className="mt-0.5 h-4 w-4 rounded-full bg-yellow-500/20 flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-yellow-500"></div>
                    </div>
                    <span>Cumulative grant income across 2022–2023 exceeds UGX 1.22B (~USD 330K).</span>
                  </li>
                  <li className="flex gap-2">
                    <div className="mt-0.5 h-4 w-4 rounded-full bg-yellow-500/20 flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-yellow-500"></div>
                    </div>
                    <span>
                      Used to fund operational scaling, R&D, partner onboarding, and expansion into new crops and
                      geographies.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                  <h3 className="mb-3 text-sm font-medium flex items-center">
                    <Banknote className="mr-2 h-4 w-4 text-blue-500" />
                    Interest Income
                  </h3>
                  <ul className="space-y-3 text-sm text-zinc-400">
                    <li className="flex gap-2">
                      <div className="mt-0.5 h-4 w-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                      </div>
                      <span>Generated from performing loans across dairy, coffee, and crops.</span>
                    </li>
                    <li className="flex gap-2">
                      <div className="mt-0.5 h-4 w-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                      </div>
                      <span>2023: ~UGX 186M (~USD 50K)</span>
                    </li>
                    <li className="flex gap-2">
                      <div className="mt-0.5 h-4 w-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                      </div>
                      <span>2024 (forecast): UGX 262M+ (~USD 70K)</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                  <h3 className="mb-3 text-sm font-medium flex items-center">
                    <Building className="mr-2 h-4 w-4 text-purple-500" />
                    Cash Injections / Shareholder Equity
                  </h3>
                  <ul className="space-y-3 text-sm text-zinc-400">
                    <li className="flex gap-2">
                      <div className="mt-0.5 h-4 w-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                      </div>
                      <span>
                        Equity capital: UGX 328M (~USD 87K), including paid-in share capital and application money from
                        founders and Laboremus Group.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <div className="mt-0.5 h-4 w-4 rounded-full bg-purple-500/20 flex items-center justify-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                      </div>
                      <span>
                        Cash position at end of 2023: UGX 5.37B, indicating strong liquidity bolstered by debt
                        financing.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Uses of Funds */}
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle className="flex items-center">
                <ArrowUpFromLine className="mr-2 h-5 w-5 text-red-500" />
                Uses of Funds
              </CardTitle>
              <CardDescription>Capital deployment and expenditures</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                <h3 className="mb-3 text-sm font-medium flex items-center">
                  <CreditCard className="mr-2 h-4 w-4 text-primary" />
                  Loan Disbursement
                </h3>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li className="flex gap-2">
                    <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span>Bulk of working capital used for issuing short-term agricultural loans.</span>
                  </li>
                  <li className="flex gap-2">
                    <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span>
                      Average ticket size: ~UGX 313K (USD ~$80) in 2023, shrinking in 2024 as crop-lending diversifies.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <div className="mt-0.5 h-4 w-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                    </div>
                    <span>Majority of funds rotate within ~5-month cycles.</span>
                  </li>
                </ul>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                  <h3 className="mb-3 text-sm font-medium flex items-center">
                    <BarChart3 className="mr-2 h-4 w-4 text-blue-500" />
                    Operating Expenses
                  </h3>
                  <ul className="space-y-3 text-sm text-zinc-400">
                    <li className="flex gap-2">
                      <div className="mt-0.5 h-4 w-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                      </div>
                      <span>OPEX (2023): UGX 2.3B (~USD 610K), up ~50% from 2022.</span>
                    </li>
                    <li className="flex gap-2">
                      <div className="mt-0.5 h-4 w-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                      </div>
                      <span>
                        Driven by increased staffing, field operations, partner support, and agent network growth.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <div className="mt-0.5 h-4 w-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                      </div>
                      <span>
                        Largest line items include: Salaries and team (~50%), Software/infrastructure (SaaS tools, MIS
                        support), Travel & field ops.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                  <h3 className="mb-3 text-sm font-medium flex items-center">
                    <AlertTriangle className="mr-2 h-4 w-4 text-red-500" />
                    Loan Losses / Provisions
                  </h3>
                  <ul className="space-y-3 text-sm text-zinc-400">
                    <li className="flex gap-2">
                      <div className="mt-0.5 h-4 w-4 rounded-full bg-red-500/20 flex items-center justify-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                      </div>
                      <span>2023: UGX 166M (~USD 44K) provisioned.</span>
                    </li>
                    <li className="flex gap-2">
                      <div className="mt-0.5 h-4 w-4 rounded-full bg-red-500/20 flex items-center justify-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                      </div>
                      <span>Losses incurred mainly in non-dairy segments (potato, coffee).</span>
                    </li>
                    <li className="flex gap-2">
                      <div className="mt-0.5 h-4 w-4 rounded-full bg-red-500/20 flex items-center justify-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                      </div>
                      <span>
                        Total PAR {">"} 30 days reached ~28% by end of 2023, leading to increased write-downs.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                  <h3 className="mb-3 text-sm font-medium flex items-center">
                    <Repeat className="mr-2 h-4 w-4 text-green-500" />
                    Technology and Platform Investment
                  </h3>
                  <ul className="space-y-3 text-sm text-zinc-400">
                    <li className="flex gap-2">
                      <div className="mt-0.5 h-4 w-4 rounded-full bg-green-500/20 flex items-center justify-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                      </div>
                      <span>
                        Includes proprietary MIS systems, farmer onboarding tools, integrations for API scoring.
                      </span>
                    </li>
                    <li className="flex gap-2">
                      <div className="mt-0.5 h-4 w-4 rounded-full bg-green-500/20 flex items-center justify-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                      </div>
                      <span>Capitalized within operating accounts or amortized via software licenses.</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                  <h3 className="mb-3 text-sm font-medium flex items-center">
                    <Coins className="mr-2 h-4 w-4 text-yellow-500" />
                    Interest and Financing Costs
                  </h3>
                  <ul className="space-y-3 text-sm text-zinc-400">
                    <li className="flex gap-2">
                      <div className="mt-0.5 h-4 w-4 rounded-full bg-yellow-500/20 flex items-center justify-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-yellow-500"></div>
                      </div>
                      <span>2023 onwards: interest expense begins accruing on convertible note.</span>
                    </li>
                    <li className="flex gap-2">
                      <div className="mt-0.5 h-4 w-4 rounded-full bg-yellow-500/20 flex items-center justify-center">
                        <div className="h-1.5 w-1.5 rounded-full bg-yellow-500"></div>
                      </div>
                      <span>Finance & forex costs hit UGX 353M (~USD 94K) in 2023.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Resulting Position */}
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="mr-2 h-5 w-5 text-primary" />
                Resulting Position
              </CardTitle>
              <CardDescription>Financial outcomes and outlook</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                <h3 className="mb-3 text-sm font-medium flex items-center">
                  <PieChart className="mr-2 h-4 w-4 text-blue-500" />
                  FY2023 Summary
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-lg bg-zinc-800 p-3">
                    <div className="text-sm text-zinc-400">Net Loss</div>
                    <div className="mt-1 text-xl font-bold text-red-500">UGX 1.24B</div>
                    <div className="mt-1 text-xs text-zinc-500">~USD 330K, up 4x vs. FY2022</div>
                  </div>
                  <div className="rounded-lg bg-zinc-800 p-3">
                    <div className="text-sm text-zinc-400">Net Assets</div>
                    <div className="mt-1 text-xl font-bold text-red-500">Negative UGX 693M</div>
                    <div className="mt-1 text-xs text-zinc-500">Due to accumulated losses</div>
                  </div>
                  <div className="rounded-lg bg-zinc-800 p-3">
                    <div className="text-sm text-zinc-400">Cash Balance</div>
                    <div className="mt-1 text-xl font-bold text-green-500">UGX 5.4B</div>
                    <div className="mt-1 text-xs text-zinc-500">High due to recent capital injection</div>
                  </div>
                  <div className="rounded-lg bg-zinc-800 p-3">
                    <div className="text-sm text-zinc-400">Outstanding Loans</div>
                    <div className="mt-1 text-xl font-bold text-white">UGX 1.05B</div>
                    <div className="mt-1 text-xs text-zinc-500">Deferred Income: UGX 4.96B</div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                <h3 className="mb-3 text-sm font-medium flex items-center">
                  <TrendingUp className="mr-2 h-4 w-4 text-green-500" />
                  FY2024 Outlook (Projected)
                </h3>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li className="flex gap-2">
                    <div className="mt-0.5 h-4 w-4 rounded-full bg-green-500/20 flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                    </div>
                    <span>More efficient unit economics</span>
                  </li>
                  <li className="flex gap-2">
                    <div className="mt-0.5 h-4 w-4 rounded-full bg-green-500/20 flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                    </div>
                    <span>Greater enterprise lending partnerships to reduce balance sheet risk</span>
                  </li>
                  <li className="flex gap-2">
                    <div className="mt-0.5 h-4 w-4 rounded-full bg-green-500/20 flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                    </div>
                    <span>Focused reduction in PAR through partner audits and agent retraining</span>
                  </li>
                  <li className="flex gap-2">
                    <div className="mt-0.5 h-4 w-4 rounded-full bg-green-500/20 flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                    </div>
                    <span>Targeting path to profitability by 2027</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                <h3 className="mb-3 text-sm font-medium flex items-center">
                  <Lightbulb className="mr-2 h-4 w-4 text-yellow-500" />
                  Observations & Strategic Notes
                </h3>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li className="flex gap-2">
                    <div className="mt-0.5 h-4 w-4 rounded-full bg-yellow-500/20 flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-yellow-500"></div>
                    </div>
                    <span>
                      Emata's financial structure is grant-heavy with high reliance on external capital for growth.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <div className="mt-0.5 h-4 w-4 rounded-full bg-yellow-500/20 flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-yellow-500"></div>
                    </div>
                    <span>
                      Revolving loan capital ensures liquidity isn't tied down long-term — core advantage in
                      agriculture.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <div className="mt-0.5 h-4 w-4 rounded-full bg-yellow-500/20 flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-yellow-500"></div>
                    </div>
                    <span>
                      Convertible note funding creates a time-sensitive pressure to show trajectory toward profitability
                      and improved credit performance.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <div className="mt-0.5 h-4 w-4 rounded-full bg-yellow-500/20 flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-yellow-500"></div>
                    </div>
                    <span>
                      A shift to off-balance sheet (enterprise) lending will improve capital efficiency and risk
                      exposure over time.
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Projections Tab */}
        <TabsContent value="projections" className="space-y-6">
          {/* Revenue Projections */}
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                Revenue Projections
              </CardTitle>
              <CardDescription>Strong top-line growth between 2023 and 2027</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-sm text-zinc-400">
                <p>
                  Emata projects strong top-line growth between 2023 and 2027, driven by loan volume expansion and
                  product diversification.
                </p>
              </div>

              {/* Revenue Timeline */}
              <div className="relative mt-8 pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-zinc-800">
                {/* 2023 */}
                <div className="relative mb-8 pl-6">
                  <div className="absolute -left-[13px] top-0 h-6 w-6 rounded-full border-2 border-primary bg-zinc-900"></div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-zinc-200">2023 Actual Revenue</span>
                      <Badge variant="outline" className="bg-zinc-800">
                        ~$133K (USD)
                      </Badge>
                    </div>
                    <p className="text-sm text-zinc-400">Up from ~$55K in 2022</p>
                  </div>
                </div>

                {/* 2024 */}
                <div className="relative mb-8 pl-6">
                  <div className="absolute -left-[13px] top-0 h-6 w-6 rounded-full border-2 border-primary bg-zinc-900"></div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-zinc-200">2024 Projection</span>
                      <Badge variant="outline" className="bg-zinc-800">
                        ~$260K
                      </Badge>
                    </div>
                    <p className="text-sm text-zinc-400">Primarily from interest income and partner platform fees</p>
                  </div>
                </div>

                {/* 2025-2027 */}
                <div className="relative pl-6">
                  <div className="absolute -left-[13px] top-0 h-6 w-6 rounded-full border-2 border-primary bg-zinc-900"></div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-zinc-200">2025-2027 Forecast</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <Badge variant="outline" className="bg-zinc-800">
                        2025: ~$470K
                      </Badge>
                      <Badge variant="outline" className="bg-zinc-800">
                        2026: ~$670K
                      </Badge>
                      <Badge variant="outline" className="bg-zinc-800">
                        2027: ~$860K
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>

              {/* Revenue Growth Visualization */}
              <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                <h3 className="mb-3 text-sm font-medium">Revenue Growth Trajectory</h3>
                <div className="h-[200px] w-full">
                  <svg width="100%" height="100%" viewBox="0 0 800 200">
                    {/* Background grid */}
                    <g>
                      {[0, 1, 2, 3, 4].map((i) => (
                        <line
                          key={`h-${i}`}
                          x1="0"
                          y1={i * 50}
                          x2="800"
                          y2={i * 50}
                          stroke="#3f3f46"
                          strokeWidth="1"
                          strokeDasharray="5,5"
                        />
                      ))}
                      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                        <line
                          key={`v-${i}`}
                          x1={i * 133}
                          y1="0"
                          x2={i * 133}
                          y2="200"
                          stroke="#3f3f46"
                          strokeWidth="1"
                          strokeDasharray="5,5"
                        />
                      ))}
                    </g>

                    {/* Revenue line */}
                    <path
                      d="M 0 180 L 133 160 L 266 120 L 399 80 L 532 50 L 665 20"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="3"
                    />

                    {/* Data points */}
                    <circle cx="0" cy="180" r="6" fill="#10b981" />
                    <circle cx="133" cy="160" r="6" fill="#10b981" />
                    <circle cx="266" cy="120" r="6" fill="#10b981" />
                    <circle cx="399" cy="80" r="6" fill="#10b981" />
                    <circle cx="532" cy="50" r="6" fill="#10b981" />
                    <circle cx="665" cy="20" r="6" fill="#10b981" />

                    {/* Year labels */}
                    <text x="0" y="195" fill="#a1a1aa" fontSize="12" textAnchor="middle">
                      2022
                    </text>
                    <text x="133" y="195" fill="#a1a1aa" fontSize="12" textAnchor="middle">
                      2023
                    </text>
                    <text x="266" y="195" fill="#a1a1aa" fontSize="12" textAnchor="middle">
                      2024
                    </text>
                    <text x="399" y="195" fill="#a1a1aa" fontSize="12" textAnchor="middle">
                      2025
                    </text>
                    <text x="532" y="195" fill="#a1a1aa" fontSize="12" textAnchor="middle">
                      2026
                    </text>
                    <text x="665" y="195" fill="#a1a1aa" fontSize="12" textAnchor="middle">
                      2027
                    </text>

                    {/* Value labels */}
                    <text x="0" y="170" fill="#ffffff" fontSize="12" textAnchor="middle">
                      $55K
                    </text>
                    <text x="133" y="150" fill="#ffffff" fontSize="12" textAnchor="middle">
                      $133K
                    </text>
                    <text x="266" y="110" fill="#ffffff" fontSize="12" textAnchor="middle">
                      $260K
                    </text>
                    <text x="399" y="70" fill="#ffffff" fontSize="12" textAnchor="middle">
                      $470K
                    </text>
                    <text x="532" y="40" fill="#ffffff" fontSize="12" textAnchor="middle">
                      $670K
                    </text>
                    <text x="665" y="10" fill="#ffffff" fontSize="12" textAnchor="middle">
                      $860K
                    </text>
                  </svg>
                </div>
              </div>

              {/* Growth Drivers */}
              <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                <h3 className="mb-3 text-sm font-medium">Growth Drivers</h3>
                <p className="text-sm text-zinc-400 mb-3">
                  This reflects a ~6.5x revenue growth from 2022 to 2027, largely attributed to:
                </p>
                <ul className="space-y-2 text-sm text-zinc-400">
                  <li className="flex gap-2">
                    <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Geographic expansion (into Tanzania, Ethiopia)</span>
                  </li>
                  <li className="flex gap-2">
                    <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Increasing lending cycles per farmer</span>
                  </li>
                  <li className="flex gap-2">
                    <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary" />
                    <span>Higher ticket-size loans in enterprise and trader segments</span>
                  </li>
                </ul>
              </div>

              <Alert className="bg-primary/10 border-primary/20">
                <AlertCircle className="h-4 w-4 text-primary" />
                <AlertTitle>Critical Insight</AlertTitle>
                <AlertDescription className="text-zinc-300">
                  The revenue model heavily assumes compound scaling of lending throughput with modest default
                  drag—dependent on quality of onboarding, MIS usage, and risk controls.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Profitability Metrics */}
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart className="mr-2 h-5 w-5 text-primary" />
                Profitability Metrics
              </CardTitle>
              <CardDescription>Historical losses and future outlook</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Historical Losses */}
              <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                <h3 className="mb-3 text-sm font-medium flex items-center">
                  <TrendingDown className="mr-2 h-4 w-4 text-red-500" />
                  Historical Losses
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="rounded-lg bg-zinc-800 p-4">
                    <div className="text-sm text-zinc-400">2022 Net Loss</div>
                    <div className="mt-1 text-2xl font-bold text-red-500">~$84K</div>
                    <div className="mt-2 text-xs text-zinc-500">UGX 318M</div>
                  </div>
                  <div className="rounded-lg bg-zinc-800 p-4">
                    <div className="text-sm text-zinc-400">2023 Net Loss</div>
                    <div className="mt-1 text-2xl font-bold text-red-500">~$330K</div>
                    <div className="mt-2 text-xs text-zinc-500">UGX 1.2B</div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-zinc-400">
                  Operating expenses ballooned to over UGX 2.3B as team, partnerships, and tech scale accelerated.
                </p>
              </div>

              {/* Future Profitability */}
              <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                <h3 className="mb-3 text-sm font-medium flex items-center">
                  <TrendingUp className="mr-2 h-4 w-4 text-green-500" />
                  Future Profitability Outlook (as per model)
                </h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div className="rounded-lg bg-zinc-800 p-4">
                    <div className="text-sm text-zinc-400">2025 EBITDA</div>
                    <div className="mt-1 text-2xl font-bold text-green-500">~$7K</div>
                    <div className="mt-2 text-xs text-zinc-500">Projected to break even</div>
                  </div>
                  <div className="rounded-lg bg-zinc-800 p-4">
                    <div className="text-sm text-zinc-400">2026 EBITDA</div>
                    <div className="mt-1 text-2xl font-bold text-green-500">~$125K</div>
                    <div className="mt-2 text-xs text-zinc-500">Positive</div>
                  </div>
                  <div className="rounded-lg bg-zinc-800 p-4">
                    <div className="text-sm text-zinc-400">2027 Net Income</div>
                    <div className="mt-1 text-2xl font-bold text-green-500">~$116K</div>
                    <div className="mt-2 text-xs text-zinc-500">Profitable</div>
                  </div>
                </div>
              </div>

              {/* Margins */}
              <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                <h3 className="mb-3 text-sm font-medium">Margins</h3>
                <p className="text-sm text-zinc-400 mb-3">
                  Gross margins forecasted to rise from 30% to 65% by 2027, driven by:
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <div className="text-sm">Loan loss ratio decline</div>
                      <div className="text-sm text-zinc-400">~34% (2023) → ~10–15% (2025+)</div>
                    </div>
                    <Progress value={70} className="h-2" />
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <div className="text-sm">OPEX plateauing post-2024</div>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                </div>
              </div>

              <Alert className="bg-yellow-900/20 border-yellow-900/50">
                <AlertTriangle className="h-4 w-4 text-yellow-500" />
                <AlertTitle>Critical Insight</AlertTitle>
                <AlertDescription className="text-yellow-200/70">
                  Profitability depends on 2 things:
                  <ul className="mt-2 ml-6 list-disc">
                    <li>Holding portfolio quality (i.e., PAR {"<"} 10%) as scale accelerates</li>
                    <li>Keeping enterprise lending off Emata's balance sheet to limit capital exposure</li>
                  </ul>
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>

          {/* Key Growth Drivers */}
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Layers className="mr-2 h-5 w-5 text-primary" />
                Key Growth Drivers
              </CardTitle>
              <CardDescription>Primary factors driving business expansion</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                  <h3 className="mb-2 text-sm font-medium flex items-center">
                    <Map className="mr-2 h-4 w-4 text-blue-500" />
                    Geographic Expansion
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Entry into Tanzania (2025), Ethiopia (2026), and potential Rwanda (2027), enabled by replicated MIS
                    and partner onboarding model.
                  </p>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                  <h3 className="mb-2 text-sm font-medium flex items-center">
                    <Briefcase className="mr-2 h-4 w-4 text-green-500" />
                    Product Diversification
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Expanding from dairy and coffee into high-value crops (e.g., potatoes, vanilla, cocoa), and
                    introducing trader finance and enterprise loans.
                  </p>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                  <h3 className="mb-2 text-sm font-medium flex items-center">
                    <Users className="mr-2 h-4 w-4 text-purple-500" />
                    Partner Network Growth
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Cooperatives and processors increase from ~60 (2023) to 160+ by 2026. This drives farmer access,
                    data, and repayment enforcement.
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                  <h3 className="mb-2 text-sm font-medium flex items-center">
                    <Server className="mr-2 h-4 w-4 text-amber-500" />
                    Platform Maturity
                  </h3>
                  <ul className="space-y-2 text-xs text-zinc-400">
                    <li className="flex gap-2">
                      <div className="mt-0.5 h-3 w-3 rounded-full bg-amber-500/20 flex items-center justify-center">
                        <div className="h-1 w-1 rounded-full bg-amber-500"></div>
                      </div>
                      <span>Continued investment in credit scoring models (API + satellite data)</span>
                    </li>
                    <li className="flex gap-2">
                      <div className="mt-0.5 h-3 w-3 rounded-full bg-amber-500/20 flex items-center justify-center">
                        <div className="h-1 w-1 rounded-full bg-amber-500"></div>
                      </div>
                      <span>
                        Improved integration of partner guarantees and incentive structures (e.g., Gold Partner Program)
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                  <h3 className="mb-2 text-sm font-medium flex items-center">
                    <Scale className="mr-2 h-4 w-4 text-cyan-500" />
                    External Capital Efficiency
                  </h3>
                  <p className="text-xs text-zinc-400">
                    Shift toward partner-funded (enterprise) loan models will allow scale without matching balance sheet
                    liabilities.
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
                Risks & Concerns
              </CardTitle>
              <CardDescription>Key challenges that may impact financial projections</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                <h3 className="mb-2 text-sm font-medium flex items-center">
                  <TrendingDown className="mr-2 h-4 w-4 text-red-500" />
                  1. Aggressive Loan Loss Reduction Assumptions
                </h3>
                <p className="text-xs text-zinc-400">
                  PAR {">"} 30 was ~28% in 2023. Model assumes drop to ~10% by 2025, which lacks clear operating levers
                  unless cooperative quality screening improves drastically.
                </p>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                <h3 className="mb-2 text-sm font-medium flex items-center">
                  <FileText className="mr-2 h-4 w-4 text-yellow-500" />
                  2. Revenue CAGR Depends on Perfect Partner Execution
                </h3>
                <p className="text-xs text-zinc-400">
                  High dependence on agri partners for both data and repayment enforcement. Variability in partner
                  reliability (e.g., UGACOF vs smallholder coops) could cause unpredictable recovery or fraud.
                </p>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                <h3 className="mb-2 text-sm font-medium flex items-center">
                  <BarChart3 className="mr-2 h-4 w-4 text-blue-500" />
                  3. OPEX Efficiency Assumptions May Be Optimistic
                </h3>
                <p className="text-xs text-zinc-400">
                  Personnel and support costs are projected to flatten post-2024. But further expansion into new
                  countries and crop ecosystems will likely require additional field and compliance teams, especially if
                  fraud monitoring is to be tightened.
                </p>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                <h3 className="mb-2 text-sm font-medium flex items-center">
                  <LineChart className="mr-2 h-4 w-4 text-purple-500" />
                  4. Convertible Note Dilution Pressure
                </h3>
                <p className="text-xs text-zinc-400">
                  ~$660K convertible note matures into equity by 2025. If unit economics and risk metrics aren't
                  improved substantially, further dilution may be required to maintain solvency beyond 2026.
                </p>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                <h3 className="mb-2 text-sm font-medium flex items-center">
                  <Coins className="mr-2 h-4 w-4 text-amber-500" />
                  5. Macroeconomic & FX Exposure
                </h3>
                <p className="text-xs text-zinc-400">
                  Operating in Uganda, Tanzania, and Ethiopia subjects Emata to currency volatility, especially as debt
                  exposure increases and cost bases diversify.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Final Take */}
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="mr-2 h-5 w-5 text-primary" />
                Final Take
              </CardTitle>
              <CardDescription>Summary assessment and recommendations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-zinc-400 space-y-4">
                <p>
                  Emata's financial plan is ambitious yet rooted in a replicable model, showing thoughtful layering of
                  credit scoring, partner incentives, and geographic growth. However, achieving breakeven by 2025–2026
                  requires material improvement in loan performance and cost containment.
                </p>

                <div>
                  <p className="mb-2">To instill greater investor confidence, the projections would benefit from:</p>
                  <ul className="space-y-2 ml-6 list-disc">
                    <li>Scenario modeling under varying default rates</li>
                    <li>Sensitivity analysis on partner underperformance</li>
                    <li>Detailed breakdown of enterprise lending economics vs. balance sheet loans</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Unit Economics Tab */}
        <TabsContent value="unit-economics" className="space-y-4">
          {/* Summary Card */}
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="mr-2 h-5 w-5 text-primary" />
                Unit Economics Overview
              </CardTitle>
              <CardDescription>Value generated per loan disbursed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg bg-zinc-800/50 p-4">
                <p className="text-sm text-zinc-400">
                  Unit economics measures how much value is generated (or lost) per loan disbursed. This analysis is
                  crucial for understanding Emata's path to profitability and operational efficiency at the most
                  granular level.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Revenue Card */}
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="mr-2 h-5 w-5 text-green-500" />
                Revenue per Loan
              </CardTitle>
              <CardDescription>Interest income generated from each loan</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-zinc-800 p-4">
                  <div className="text-sm text-zinc-400">2022 Revenue/Loan</div>
                  <div className="mt-1 text-2xl font-bold text-white">$39.81</div>
                  <div className="mt-2 text-xs text-zinc-500">Initial market entry</div>
                </div>
                <div className="rounded-lg bg-zinc-800 p-4">
                  <div className="text-sm text-zinc-400">2023 Revenue/Loan</div>
                  <div className="mt-1 text-2xl font-bold text-green-500">$78.90</div>
                  <div className="mt-2 text-xs text-zinc-500">Peak revenue year</div>
                </div>
                <div className="rounded-lg bg-zinc-800 p-4">
                  <div className="text-sm text-zinc-400">2024 Revenue/Loan (Forecast)</div>
                  <div className="mt-1 text-2xl font-bold text-white">$56.50</div>
                  <div className="mt-2 text-xs text-zinc-500">Shift to smaller loans</div>
                </div>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                <h3 className="mb-3 text-sm font-medium">Revenue Trend Analysis</h3>
                <div className="h-[200px] w-full">
                  <svg width="100%" height="100%" viewBox="0 0 800 200">
                    {/* Background grid */}
                    <g>
                      {[0, 1, 2, 3, 4].map((i) => (
                        <line
                          key={`h-${i}`}
                          x1="0"
                          y1={i * 50}
                          x2="800"
                          y2={i * 50}
                          stroke="#3f3f46"
                          strokeWidth="1"
                          strokeDasharray="5,5"
                        />
                      ))}
                      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                        <line
                          key={`v-${i}`}
                          x1={i * 114}
                          y1="0"
                          x2={i * 114}
                          y2="200"
                          stroke="#3f3f46"
                          strokeWidth="1"
                          strokeDasharray="5,5"
                        />
                      ))}
                    </g>

                    {/* Revenue line */}
                    <path
                      d="M 0 160 L 114 120 L 228 40 L 342 80 L 456 90 L 570 100 L 684 110"
                      fill="none"
                      stroke="#10b981"
                      strokeWidth="3"
                    />

                    {/* Data points */}
                    <circle cx="0" cy="160" r="6" fill="#10b981" />
                    <circle cx="114" cy="120" r="6" fill="#10b981" />
                    <circle cx="228" cy="40" r="6" fill="#10b981" />
                    <circle cx="342" cy="80" r="6" fill="#10b981" />
                    <circle cx="456" cy="90" r="6" fill="#10b981" stroke="#27272a" strokeWidth="2" />
                    <circle cx="570" cy="100" r="6" fill="#10b981" stroke="#27272a" strokeWidth="2" />
                    <circle cx="684" cy="110" r="6" fill="#10b981" stroke="#27272a" strokeWidth="2" />

                    {/* Year labels */}
                    <text x="0" y="190" fill="#a1a1aa" fontSize="12" textAnchor="middle">
                      2022
                    </text>
                    <text x="114" y="190" fill="#a1a1aa" fontSize="12" textAnchor="middle">
                      2023
                    </text>
                    <text x="228" y="190" fill="#a1a1aa" fontSize="12" textAnchor="middle">
                      2024
                    </text>
                    <text x="342" y="190" fill="#a1a1aa" fontSize="12" textAnchor="middle">
                      2025
                    </text>
                    <text x="456" y="190" fill="#a1a1aa" fontSize="12" textAnchor="middle">
                      2026
                    </text>
                    <text x="570" y="190" fill="#a1a1aa" fontSize="12" textAnchor="middle">
                      2027
                    </text>
                    <text x="684" y="190" fill="#a1a1aa" fontSize="12" textAnchor="middle">
                      2028
                    </text>

                    {/* Value labels */}
                    <text x="228" y="30" fill="#ffffff" fontSize="12" textAnchor="middle">
                      $78.90
                    </text>
                    <text x="114" y="110" fill="#ffffff" fontSize="12" textAnchor="middle">
                      $39.81
                    </text>
                    <text x="342" y="70" fill="#ffffff" fontSize="12" textAnchor="middle">
                      $56.50
                    </text>
                  </svg>
                </div>
                <p className="mt-4 text-xs text-zinc-400">
                  Revenue per loan fluctuates with average loan sizes and crop type expansion. 2023 saw peak revenue,
                  while 2024 forecasts a decrease due to a shift toward smaller or more experimental loans.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Costs Card */}
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MinusCircle className="mr-2 h-5 w-5 text-red-500" />
                Key Costs per Loan
              </CardTitle>
              <CardDescription>Major cost components affecting unit economics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-zinc-800 p-4">
                  <div className="text-sm text-zinc-400">Partner Acquisition & Support (2023)</div>
                  <div className="mt-1 text-2xl font-bold text-white">$12.13</div>
                  <div className="mt-2 text-xs text-zinc-500">Per loan disbursed</div>
                </div>
                <div className="rounded-lg bg-zinc-800 p-4">
                  <div className="text-sm text-zinc-400">Loan Losses (2023)</div>
                  <div className="mt-1 text-2xl font-bold text-red-500">$26.42</div>
                  <div className="mt-2 text-xs text-zinc-500">PAR &gt; 30% at 28.3%</div>
                </div>
                <div className="rounded-lg bg-zinc-800 p-4">
                  <div className="text-sm text-zinc-400">Funding Costs (2028 Forecast)</div>
                  <div className="mt-1 text-2xl font-bold text-white">$4.53</div>
                  <div className="mt-2 text-xs text-zinc-500">Due to external capital</div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-medium">Cost Evolution (2022-2024)</h3>
                <div className="space-y-6">
                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <div className="text-sm">Partner Costs</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <div className="mb-1 text-xs text-zinc-400">2022: $21.91</div>
                        <Progress value={100} className="h-2 bg-zinc-700" indicatorClassName="bg-amber-500" />
                      </div>
                      <div>
                        <div className="mb-1 text-xs text-zinc-400">2023: $12.13</div>
                        <Progress value={55} className="h-2 bg-zinc-700" indicatorClassName="bg-amber-500" />
                      </div>
                      <div>
                        <div className="mb-1 text-xs text-zinc-400">2024: $5.91</div>
                        <Progress value={27} className="h-2 bg-zinc-700" indicatorClassName="bg-amber-500" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-1 flex items-center justify-between">
                      <div className="text-sm">Loan Losses</div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <div className="mb-1 text-xs text-zinc-400">2022: $0.53</div>
                        <Progress value={2} className="h-2 bg-zinc-700" indicatorClassName="bg-red-500" />
                      </div>
                      <div>
                        <div className="mb-1 text-xs text-zinc-400">2023: $26.42</div>
                        <Progress value={100} className="h-2 bg-zinc-700" indicatorClassName="bg-red-500" />
                      </div>
                      <div>
                        <div className="mb-1 text-xs text-zinc-400">2024: $12.80</div>
                        <Progress value={48} className="h-2 bg-zinc-700" indicatorClassName="bg-red-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                <h3 className="mb-3 text-sm font-medium">Cost Breakdown Details</h3>
                <ul className="space-y-3 text-sm text-zinc-400">
                  <li className="flex gap-2">
                    <div className="mt-0.5 h-4 w-4 rounded-full bg-amber-500/20 flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-amber-500"></div>
                    </div>
                    <span>
                      <strong>Partner acquisition & support</strong> includes partner onboarding, MIS deployment, and
                      agent training. This cost is decreasing as Emata's processes become more efficient.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <div className="mt-0.5 h-4 w-4 rounded-full bg-red-500/20 flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                    </div>
                    <span>
                      <strong>Loan losses</strong> are Emata's most critical margin risk, driven by PAR {">"} 30% rising
                      to 28.3% in 2023. Forecasts show improvement as risk management processes mature.
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <div className="mt-0.5 h-4 w-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                    </div>
                    <span>
                      <strong>Funding costs</strong> have been $0 historically as Emata used its own capital, but by
                      2028 are forecasted at ~$4.53/loan due to use of external lending capital and debt.
                    </span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Profitability Table */}
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="mr-2 h-5 w-5 text-primary" />
                Profitability Per Loan
              </CardTitle>
              <CardDescription>Year-by-year breakdown of unit economics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="pb-3 text-left text-sm font-medium text-zinc-400">Year</th>
                      <th className="pb-3 text-right text-sm font-medium text-zinc-400">Revenue ($)</th>
                      <th className="pb-3 text-right text-sm font-medium text-zinc-400">Partner Cost ($)</th>
                      <th className="pb-3 text-right text-sm font-medium text-zinc-400">Loan Losses ($)</th>
                      <th className="pb-3 text-right text-sm font-medium text-zinc-400">Gross Margin ($)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    <tr>
                      <td className="py-3 text-left text-sm">2022</td>
                      <td className="py-3 text-right text-sm">$39.81</td>
                      <td className="py-3 text-right text-sm">$21.91</td>
                      <td className="py-3 text-right text-sm">$0.53</td>
                      <td className="py-3 text-right text-sm font-medium text-green-500">~$17.37</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-left text-sm">2023</td>
                      <td className="py-3 text-right text-sm">$78.90</td>
                      <td className="py-3 text-right text-sm">$12.13</td>
                      <td className="py-3 text-right text-sm">$26.42</td>
                      <td className="py-3 text-right text-sm font-medium text-green-500">~$40.35</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-left text-sm">2024 (Forecast)</td>
                      <td className="py-3 text-right text-sm">$56.50</td>
                      <td className="py-3 text-right text-sm">$5.91</td>
                      <td className="py-3 text-right text-sm">$12.80</td>
                      <td className="py-3 text-right text-sm font-medium text-green-500">~$37.79</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-left text-sm">2025-2028 (Forecast)</td>
                      <td className="py-3 text-right text-sm">Variable</td>
                      <td className="py-3 text-right text-sm">Decreasing</td>
                      <td className="py-3 text-right text-sm">Stabilizing</td>
                      <td className="py-3 text-right text-sm font-medium text-amber-500">$35+ (target)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 rounded-lg bg-zinc-800/50 p-4">
                <h3 className="mb-3 text-sm font-medium">Gross Margin Visualization</h3>
                <div className="h-[200px] w-full">
                  <svg width="100%" height="100%" viewBox="0 0 800 200">
                    {/* Background grid */}
                    <g>
                      {[0, 1, 2, 3, 4].map((i) => (
                        <line
                          key={`h-${i}`}
                          x1="0"
                          y1={i * 50}
                          x2="800"
                          y2={i * 50}
                          stroke="#3f3f46"
                          strokeWidth="1"
                          strokeDasharray="5,5"
                        />
                      ))}
                      {[0, 1, 2, 3].map((i) => (
                        <line
                          key={`v-${i}`}
                          x1={i * 200 + 100}
                          y1="0"
                          x2={i * 200 + 100}
                          y2="200"
                          stroke="#3f3f46"
                          strokeWidth="1"
                          strokeDasharray="5,5"
                        />
                      ))}
                    </g>

                    {/* Revenue bars */}
                    <rect x="50" y="140" width="100" height="60" fill="#10b981" opacity="0.7" />
                    <rect x="250" y="60" width="100" height="140" fill="#10b981" opacity="0.7" />
                    <rect x="450" y="100" width="100" height="100" fill="#10b981" opacity="0.7" />
                    <rect x="650" y="110" width="100" height="90" fill="#10b981" opacity="0.7" />

                    {/* Cost bars - Partner */}
                    <rect x="50" y="140" width="100" height="30" fill="#f59e0b" />
                    <rect x="250" y="60" width="100" height="20" fill="#f59e0b" />
                    <rect x="450" y="100" width="100" height="10" fill="#f59e0b" />
                    <rect x="650" y="110" width="100" height="8" fill="#f59e0b" />

                    {/* Cost bars - Losses */}
                    <rect x="50" y="170" width="100" height="1" fill="#ef4444" />
                    <rect x="250" y="80" width="100" height="40" fill="#ef4444" />
                    <rect x="450" y="110" width="100" height="20" fill="#ef4444" />
                    <rect x="650" y="118" width="100" height="15" fill="#ef4444" />

                    {/* Year labels */}
                    <text x="100" y="190" fill="#a1a1aa" fontSize="12" textAnchor="middle">
                      2022
                    </text>
                    <text x="300" y="190" fill="#a1a1aa" fontSize="12" textAnchor="middle">
                      2023
                    </text>
                    <text x="500" y="190" fill="#a1a1aa" fontSize="12" textAnchor="middle">
                      2024
                    </text>
                    <text x="700" y="190" fill="#a1a1aa" fontSize="12" textAnchor="middle">
                      2025+
                    </text>

                    {/* Legend */}
                    <rect x="650" y="20" width="10" height="10" fill="#10b981" opacity="0.7" />
                    <text x="665" y="30" fill="#ffffff" fontSize="12" dominantBaseline="middle">
                      Revenue
                    </text>

                    <rect x="650" y="40" width="10" height="10" fill="#f59e0b" />
                    <text x="665" y="50" fill="#ffffff" fontSize="12" dominantBaseline="middle">
                      Partner Cost
                    </text>

                    <rect x="650" y="60" width="10" height="10" fill="#ef4444" />
                    <text x="665" y="70" fill="#ffffff" fontSize="12" dominantBaseline="middle">
                      Loan Losses
                    </text>
                  </svg>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Observations */}
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lightbulb className="mr-2 h-5 w-5 text-yellow-500" />
                Key Observations
              </CardTitle>
              <CardDescription>Critical insights from unit economics analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                  <h3 className="mb-2 text-sm font-medium flex items-center">
                    <TrendingUp className="mr-2 h-4 w-4 text-green-500" />
                    Peak Revenue Year
                  </h3>
                  <p className="text-sm text-zinc-400">
                    2023 was a peak unit revenue year at $78.90 per loan, but also marked by a sharp rise in
                    default-related losses ($26.42 per loan).
                  </p>
                </div>

                <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                  <h3 className="mb-2 text-sm font-medium flex items-center">
                    <BarChart3 className="mr-2 h-4 w-4 text-blue-500" />
                    Stabilizing Operations
                  </h3>
                  <p className="text-sm text-zinc-400">
                    2024–2025 forecasts suggest stabilizing operations, improved loss control, and more efficient
                    partner onboarding with costs dropping to $5.91 per loan.
                  </p>
                </div>

                <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                  <h3 className="mb-2 text-sm font-medium flex items-center">
                    <AlertTriangle className="mr-2 h-4 w-4 text-yellow-500" />
                    Critical Success Factors
                  </h3>
                  <p className="text-sm text-zinc-400">
                    Emata's ability to preserve {">"}$35 per loan in contribution margin depends on keeping PAR {"<"}{" "}
                    10% and maintaining low customer acquisition costs via partners.
                  </p>
                </div>

                <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                  <h3 className="mb-2 text-sm font-medium flex items-center">
                    <TrendingDown className="mr-2 h-4 w-4 text-amber-500" />
                    Future Margin Pressure
                  </h3>
                  <p className="text-sm text-zinc-400">
                    Margin slowly reduces as portfolio matures and funding costs begin to factor in (reaching
                    ~$4.53/loan by 2028), but this is offset by losses shrinking proportionally.
                  </p>
                </div>
              </div>

              <Alert className="mt-6 bg-primary/10 border-primary/20">
                <AlertCircle className="h-4 w-4 text-primary" />
                <AlertTitle>Critical Insight</AlertTitle>
                <AlertDescription className="text-zinc-300">
                  Loan losses represent Emata's biggest unit economics risk. Reducing PAR from 28.3% (2023) to below 10%
                  would significantly improve margins and create a sustainable lending model.
                </AlertDescription>
              </Alert>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
