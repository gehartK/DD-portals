"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3 } from "lucide-react"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from "recharts"

export default function KeyMetricsPage() {
  // Calculate the overall score
  const overallScore = 7.2
  const roundedScore = Math.round(overallScore * 10) / 10

  const components = [
    {
      id: "financial-performance",
      title: "Financial Performance & Profitability",
      score: 7.0,
      standard: 5.0,
      summary: "Strong revenue growth with path to profitability",
      description:
        "Revenue grew from $55K (2022) to $186K (2023) and projected at $260K+ (2024)​. Losses widened (net loss ~$330K in 2023) due to scaling and hiring, but Emata maintains strong liquidity from grant and debt funding. Break-even projected in 2026–2027, with unit economics already gross-margin positive in 2023 (67% GM). Strong cost control on partner acquisition, while loan capital efficiency is improving with enterprise lending.",
    },
    {
      id: "customer-acquisition",
      title: "Customer Acquisition & Retention Metrics",
      score: 7.3,
      standard: 5.0,
      summary: "62 live partners with 70% retention rate",
      description:
        "62 live partners, over 100,000 farmers reached, and a 70% partner retention rate​. Conversion funnel is structured: 10% partner signup rate, 40–50% farmer conversion once onboarded. Repeat borrowing among dairy and coffee farmers is improving; WhatsApp-based UX increases touchpoints.",
    },
    {
      id: "market-performance",
      title: "Market Performance & Growth Indicators",
      score: 7.8,
      standard: 5.0,
      summary: "$1.9M disbursed across 7,127 loans",
      description:
        "Emata disbursed over $1.9M across 7,127 loans, with clear breakdown by crop: Dairy: $440 avg, Coffee: $115 avg, Crops: $70 avg​. Future TAM includes Ethiopia, Rwanda, and Tanzania with multi-billion dollar ag-financing gaps. Growth forecast: 6x revenue increase by 2027, 10x+ loan volume increase across new regions.",
    },
    {
      id: "impact-metrics",
      title: "Impact Metrics",
      score: 7.5,
      standard: 5.0,
      summary: "+80% sourcing volumes for dairy partners",
      description:
        "Productivity impact: +80% sourcing volumes for dairy partners, +30% farmer yield improvements, reduced side-selling behavior reported​. Affordability: interest rates 3–5x lower than informal lenders; crop insurance integrated in lending experience. Formalizes value chains, reduces friction and cash handling, and improves trust across the rural financial ecosystem.",
    },
    {
      id: "unit-economics",
      title: "Unit Economics",
      score: 7.2,
      standard: 5.0,
      summary: "Gross income per loan: $78.90 (2023)",
      description:
        "Gross income per loan: $78.90 (2023), with projected cost reductions by 2025–2026 (due to enterprise lending). Loan losses are a concern: ~$42K in 2023, but AI-led improvements and partner segmentation expected to reduce this. Enterprise lending lowers income per loan but increases scale with zero balance-sheet risk​.",
    },
    {
      id: "data-metrics",
      title: "Data Metrics",
      score: 6.5,
      standard: 5.0,
      summary: "Rich transactional data with ML models for forecasting",
      description:
        "Emata collects rich transactional data (milk/crop deliveries, repayment behavior, mobile money logs). ML models track ROI simulations, credit limit forecasting, and cohort-based scoring. However, data quality from MIS and limited real-time monitoring of model drift are current challenges​​.",
    },
  ]

  // Format data for radar chart
  const radarData = components.map((component) => ({
    subject: component.title.split(" ")[0], // Use first word for brevity in chart
    score: component.score,
    standard: component.standard,
    fullMark: 10,
  }))

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Key Metrics</h1>
          <p className="text-zinc-400">
            Above industry standard – robust across financial, impact, and operational indicators
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-lg">
            <div className="absolute inset-0.5 rounded-full bg-black"></div>
            <div className="relative flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-white">{roundedScore}</span>
              <span className="text-xs text-zinc-400">out of 10</span>
            </div>
          </div>
          <div className="mt-2 max-w-[120px] text-center">
            <p className="text-xs text-zinc-500">5/10 represents industry standard</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Card - Scores and Progress Bars */}
        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader>
            <CardTitle className="text-white">Component Scores</CardTitle>
            <CardDescription className="text-zinc-400">Quantitative assessment of each dimension</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Radar Chart */}
            <div className="mb-6">
              <div className="text-sm font-medium text-zinc-200 mb-2">Score Distribution vs. Industry Standard</div>
              <div className="h-[280px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                    <PolarGrid stroke="#3f3f46" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: "#a1a1aa", fontSize: 12 }} />
                    <PolarRadiusAxis
                      angle={30}
                      domain={[0, 10]}
                      tick={{ fill: "#a1a1aa", fontSize: 10 }}
                      stroke="#3f3f46"
                    />
                    <Radar name="Actual Score" dataKey="score" stroke="#10b981" fill="#10b981" fillOpacity={0.3} />
                    <Radar
                      name="Industry Standard"
                      dataKey="standard"
                      stroke="#6366f1"
                      fill="#6366f1"
                      fillOpacity={0.2}
                    />
                    <Legend
                      verticalAlign="bottom"
                      height={36}
                      iconSize={10}
                      wrapperStyle={{
                        paddingTop: "10px",
                        fontSize: "12px",
                        color: "#a1a1aa",
                      }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="space-y-4">
              {components.map((component) => (
                <div key={component.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-zinc-200">{component.title}</div>
                    <div className="flex items-center gap-2">
                      <div className="text-sm text-zinc-400">{component.score}/10</div>
                      <div className="text-xs text-zinc-500">(Standard: {component.standard})</div>
                    </div>
                  </div>
                  <Progress value={component.score * 10} className="h-1.5" />
                  <div className="flex justify-between items-center">
                    <p className="text-xs text-zinc-500">{component.summary}</p>
                    <div className="text-xs px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400">
                      {component.score > component.standard ? (
                        <span className="text-green-500">+{(component.score - component.standard).toFixed(1)}</span>
                      ) : component.score < component.standard ? (
                        <span className="text-red-500">{(component.score - component.standard).toFixed(1)}</span>
                      ) : (
                        <span className="text-zinc-400">0</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Right Card - Descriptions */}
        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader>
            <CardTitle className="text-white">Detailed Analysis</CardTitle>
            <CardDescription className="text-zinc-400">In-depth assessment of each component</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {components.map((component) => (
                <div key={component.id} className="space-y-2">
                  <h3 className="font-medium text-zinc-200">{component.title}</h3>
                  <div className="text-sm text-zinc-400 rounded-md bg-zinc-800/50 px-3 py-2">
                    {component.description}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="findings" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-zinc-800">
          <TabsTrigger value="findings">Key Findings</TabsTrigger>
          <TabsTrigger value="strengths">Strengths</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>

        <TabsContent value="findings" className="mt-4 space-y-4">
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle className="text-white">Key Metrics Assessment</CardTitle>
              <CardDescription className="text-zinc-400">
                Overall findings from the key metrics evaluation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Enhanced Overall Score Element */}
              <div className="bg-gradient-to-r from-zinc-800 via-zinc-800/80 to-zinc-800 border-l-4 border-green-500 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-green-900/30 to-green-800/20 shadow-lg">
                      <div className="absolute inset-1 rounded-full bg-zinc-900/80"></div>
                      <div className="relative flex flex-col items-center justify-center">
                        <span className="text-4xl font-bold text-green-500">{roundedScore}</span>
                        <span className="text-xs text-zinc-400">Overall Score</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">Overall Assessment</h3>
                    <p className="text-zinc-300">
                      Emata tracks a comprehensive and strategically aligned set of metrics across performance, customer
                      engagement, and impact. Financially, it is scaling with margin awareness and future profitability
                      in sight.
                    </p>
                    <div className="mt-2 text-xs text-zinc-500 flex items-center">
                      <BarChart3 className="h-3 w-3 mr-1" />
                      <span>Assessment based on 6 key components</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Comprehensive Metrics Framework</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    Emata maintains a robust set of metrics across financial performance, customer engagement, market
                    growth, impact, unit economics, and data analytics. This comprehensive approach enables strategic
                    decision-making and performance tracking.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Financial Trajectory</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    While currently operating at a loss as expected for its stage, Emata shows strong revenue growth and
                    a clear path to profitability with break-even projected in 2026-2027. The company maintains healthy
                    gross margins and demonstrates effective cost control.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Market & Impact Performance</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    With over $1.9M disbursed across 7,127 loans and measurable impact on farmer productivity, Emata
                    demonstrates strong market traction and social impact. The company's expansion plans into new
                    regions and crops are supported by clear metrics and growth indicators.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Data & Analytics Maturity</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    While Emata collects rich transactional data and employs ML models for forecasting and credit
                    scoring, there are opportunities to improve real-time monitoring and data quality from MIS systems.
                    This represents the area with the most room for growth.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="strengths" className="mt-4 space-y-4">
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle className="text-white">Key Strengths</CardTitle>
              <CardDescription className="text-zinc-400">
                Areas where Emata demonstrates strong key metrics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="flex gap-2">
                  <div className="rounded-full bg-green-900/20 p-1 text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span>
                    Revenue growth and margin expansion trends are strong given loan sizes and repayment cycles.
                  </span>
                </li>
                <li className="flex gap-2">
                  <div className="rounded-full bg-green-900/20 p-1 text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span>High partner retention and smart distribution model via embedded agents lowers CAC.</span>
                </li>
                <li className="flex gap-2">
                  <div className="rounded-full bg-green-900/20 p-1 text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span>Extensive impact data supports positioning with donors and impact-focused investors.</span>
                </li>
                <li className="flex gap-2">
                  <div className="rounded-full bg-green-900/20 p-1 text-green-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-check"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </div>
                  <span>Unit economics resilient even under moderate loss conditions.</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recommendations" className="mt-4 space-y-4">
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle className="text-white">Recommendations</CardTitle>
              <CardDescription className="text-zinc-400">
                Suggested improvements for key metrics development
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="flex gap-2">
                  <div className="rounded-full bg-blue-900/20 p-1 text-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                  <span>Improve data instrumentation for ML pipelines (drift detection, auto-retraining).</span>
                </li>
                <li className="flex gap-2">
                  <div className="rounded-full bg-blue-900/20 p-1 text-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                  <span>
                    Expand real-time dashboarding across repayment, credit scoring, and loan usage to improve
                    monitoring.
                  </span>
                </li>
                <li className="flex gap-2">
                  <div className="rounded-full bg-blue-900/20 p-1 text-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                  <span>
                    Add NPS or farmer-level satisfaction metrics to validate retention and social performance.
                  </span>
                </li>
                <li className="flex gap-2">
                  <div className="rounded-full bg-blue-900/20 p-1 text-blue-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                  <span>Start tracking cohort behavior more aggressively (repeat loans, drop-offs, seasonal ROI).</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
