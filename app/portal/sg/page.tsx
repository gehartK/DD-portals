"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart } from "lucide-react"
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  Tooltip,
} from "recharts"

export default function SGPage() {
  const components = [
    {
      id: "business-model",
      title: "Business Model Scalability",
      score: 7.8,
      standard: 5.0,
      summary: "Scales through embedded distribution with low incremental cost",
      description:
        "Emata's model scales through embedded distribution (via cooperatives, exporters, processors) with low incremental cost. The free MIS model for partners creates data access, platform lock-in, and mutual value creation. Lending models (balance sheet + enterprise) offer flexibility in scaling without capital drag. APIs, modular microservices, and a chatbot-based UI reduce barriers to replication in other countries.",
    },
    {
      id: "market-opportunity",
      title: "Market Opportunity & Positioning",
      score: 7.9,
      standard: 5.0,
      summary: "Operating in a $1.7B+ addressable market across East Africa",
      description:
        "Operating in a $1.7B+ addressable market across Uganda, Tanzania, Ethiopia, and Rwanda. Emata positions itself between banks (expensive and inaccessible) and informal lenders (predatory) with instant, low-friction loans. Serves a non-consumption market — over 70% of farmers have no access to formal credit. Early mover with a regulated microfinance license and data-led credit scoring in agri-finance.",
    },
    {
      id: "competitive-advantage",
      title: "Competitive Advantage",
      score: 7.2,
      standard: 5.0,
      summary: "First mover with automated lending + embedded MIS and AI/ML-driven credit limits",
      description:
        "First mover in East Africa with automated lending + embedded MIS and AI/ML-driven credit limits. WhatsApp bot, mobile money integration, and real-time risk analytics create high entry barriers. Competitive advantages are functional and embedded, but remain exposed to replication unless further IP or behavioral stickiness is developed.",
    },
    {
      id: "product-innovation",
      title: "Product/Service Innovation & Development",
      score: 7.0,
      standard: 5.0,
      summary: "Digital lending via WhatsApp is a significant UX differentiator",
      description:
        "Digital lending via WhatsApp (even for non-smartphone users) is a significant UX differentiator. Products include: balance sheet loans, enterprise lending, trader finance, and climate insurance bundling. Emata MIS also drives cooperative performance — uniquely creates digitization incentives. Expansion into input finance and weather-indexed credit models is underway.",
    },
    {
      id: "expansion",
      title: "Market Expansion & Penetration",
      score: 7.7,
      standard: 5.0,
      summary: "Structured country roadmap with templated rollout strategy",
      description:
        "Country roadmap: Tanzania (2025), Ethiopia (2026), Rwanda (2027) — validated by sector partners. Product roadmap includes: new crops (vanilla, cocoa), trader loans, and non-cooperative partnerships. Uses a templated rollout strategy: partner digitization → onboarding → loan deployment. Currently live with 62 partners and >100,000 farmers.",
    },
    {
      id: "customer-acquisition",
      title: "Marketing Strategy & Success",
      score: 6.8,
      standard: 5.0,
      summary: "B2B2C distribution avoids traditional marketing spend",
      description:
        "B2B2C distribution avoids traditional marketing spend; cooperative agents act as sales force. Uses WhatsApp engagement, SMS alerts, and partner-led trust building. Norrsken, Plug & Play, and Global Startup Awards recognition adds external brand credibility. Could enhance market visibility with more structured thought leadership and product PR.",
    },
  ]

  // Calculate the overall score
  const overallScore = (components.reduce((sum, component) => sum + component.score, 0) / components.length).toFixed(1)

  // Format data for radar chart - using the same format as Key Metrics page
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
          <h1 className="text-2xl font-bold tracking-tight text-white">Strategic Growth</h1>
          <p className="text-zinc-400">Business development, marketing, and competitive positioning</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-lg">
            <div className="absolute inset-0.5 rounded-full bg-black"></div>
            <div className="relative flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-white">{overallScore}</span>
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
          <CardHeader className="pb-3">
            <CardTitle className="text-white text-lg">Component Scores</CardTitle>
            <CardDescription className="text-zinc-400">Quantitative assessment of each dimension</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Radar Chart - Matching the Key Metrics page implementation */}
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
                    <Tooltip />
                    <Radar
                      name="Actual Score"
                      dataKey="score"
                      stroke="#10b981"
                      fill="#10b981"
                      fillOpacity={0.3}
                      isAnimationActive={true}
                      animationBegin={0}
                      animationDuration={1000}
                      animationEasing="ease-out"
                    />
                    <Radar
                      name="Industry Standard"
                      dataKey="standard"
                      stroke="#6366f1"
                      fill="#6366f1"
                      fillOpacity={0.2}
                      isAnimationActive={true}
                      animationBegin={0}
                      animationDuration={1000}
                      animationEasing="ease-out"
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
          <CardHeader className="pb-3">
            <CardTitle className="text-white text-lg">Detailed Analysis</CardTitle>
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
              <CardTitle className="text-white">Strategic Growth Assessment</CardTitle>
              <CardDescription className="text-zinc-400">
                Overall findings from the strategic growth evaluation
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
                        <span className="text-4xl font-bold text-green-500">{overallScore}</span>
                        <span className="text-xs text-zinc-400">Overall Score</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">Overall Assessment</h3>
                    <p className="text-zinc-300">
                      Strong above-average growth positioning with scalable infrastructure, clear market access
                      strategy, and defensible economics.
                    </p>
                    <div className="mt-2 text-xs text-zinc-500 flex items-center">
                      <LineChart className="h-3 w-3 mr-1" />
                      <span>Assessment based on {components.length} key components</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Scalable Growth Engine</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    Emata has built a well-structured, highly scalable growth engine rooted in embedded partner access,
                    algorithmic credit modeling, and adaptive loan offerings.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Market Understanding</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    Combines top-down market understanding (e.g., financial infrastructure, regulatory clarity) with
                    grassroots agent distribution and mobile engagement.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Practical Innovation</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    While its innovations are practical and defensible, sustained leadership will require further
                    differentiation, particularly in user loyalty and tech defensibility.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Underserved Market</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    Targeting a large, underserved market with real-time data flows enabling responsive product delivery
                    in East African agricultural finance.
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
                Areas where Emata demonstrates strong strategic growth capabilities
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
                  <span>Large, underserved market with real-time data flows enabling responsive product delivery.</span>
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
                  <span>Hybrid business model (enterprise lending + balance sheet) enables capital-light scale.</span>
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
                  <span>Geographic and crop expansion strategy is data-informed and already underway.</span>
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
                  <span>
                    First mover advantage in East African ag-fintech gives a head start in building behaviorally sticky
                    partner relationships.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recommendations" className="mt-4 space-y-4">
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle className="text-white">Recommendations</CardTitle>
              <CardDescription className="text-zinc-400">Suggested improvements for strategic growth</CardDescription>
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
                  <span>
                    Deepen partner lock-in by building loyalty tools, exclusive feature tiers, or performance rewards.
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
                  <span>Develop country-specific market entry playbooks to accelerate multi-region execution.</span>
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
                    Explore intangible IP creation (e.g., proprietary credit model or partner ranking index) for
                    additional differentiation.
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
                    Enhance communications & positioning, especially in thought leadership and climate/sustainability
                    finance themes.
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
