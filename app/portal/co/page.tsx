"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PieChart } from "lucide-react"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from "recharts"

export default function COPage() {
  const components = [
    {
      id: "operational-cost",
      title: "Operational Cost Management",
      score: 7,
      standard: 5.0,
      summary: "Lean operations with partner-led field execution",
      description:
        "Emata operates with lean headcount and shared digital infrastructure, reducing fixed overhead. Field operations are partner-led and embedded, keeping agent-related costs variable and performance-tied. Loan collection, partner training, and MIS deployment are handled by regionally distributed agents and coops, avoiding heavy HQ dependencies.",
    },
    {
      id: "technology-cost",
      title: "Technology & Infrastructure Cost",
      score: 6.8,
      standard: 5.0,
      summary: "Hybrid cloud infrastructure with in-house tools",
      description:
        "Emata leverages AWS + Azure hybrid cloud infrastructure, with autoscaling principles and minimal fixed hosting costs. In-house product and data tools (Data Audit, SyncService) reduce the need for external licensing or SaaS spend. Major cost centers include compute-intensive ML inference and storage of farmer transactional history, which are increasing with volume.",
    },
    {
      id: "cost-structure",
      title: "Cost Structuring",
      score: 7.3,
      standard: 5.0,
      summary: "Strategic MIS offering with isolated capital needs",
      description:
        "Free MIS software is strategically offered to partners, allowing Emata to monetize through lending while subsidizing software costs. LendingCo structure isolates working capital needs and cost of funds from operational cost burn. Strong budgetary control reflected in audited accounts and alignment between OpEx and scale.",
    },
    {
      id: "financial-sustainability",
      title: "Financial Sustainability",
      score: 7,
      standard: 5.0,
      summary: "Positive gross profit with path to breakeven",
      description:
        "Despite a net loss in 2023 (UGX 1.23B / ~$330K), Emata posted $80K+ gross profit, sustained by high-margin operations and grant leverage. Grants, convertible notes, and donor funding (~$1.6M facility) continue to support scale-up without distorting CAC or margin logic. Breakeven projected by 2026, supported by shift to enterprise lending (zero balance-sheet risk).",
    },
    {
      id: "shared-resources",
      title: "Shared Resources and Resource Selection",
      score: 6.8,
      standard: 5.0,
      summary: "Co-developed solutions with shared infrastructure",
      description:
        "Emata co-develops solutions with partners, and shares digital infrastructure via its MIS platform. Agent resources, partner field officers, and mobile money rails act as shared infrastructure reducing last-mile cost. Resource selection is thoughtful, but scaling outside cooperative ecosystems will require rethinking this embedded cost model.",
    },
    {
      id: "credits-programmes",
      title: "Credits, Programmes, and Fellowships",
      score: 7.5,
      standard: 5.0,
      summary: "Strong external support reducing capital costs",
      description:
        "Emata benefits from multiple external support programmes: Norrsken, Katapult, Plug & Play, and DGGF (Dutch Good Growth Fund). Received convertible notes and donor-backed credit lines, reducing effective cost of growth capital. Also supported by technical fellowships and advisory resources (e.g., strategy fellows and technical mentors) at near-zero direct cost.",
    },
  ]

  // Format data for radar chart
  const radarData = components.map((component) => ({
    subject: component.title.split(" ")[0], // Use first word for brevity in chart
    score: component.score,
    standard: component.standard,
    fullMark: 10,
  }))

  // Calculate the average score
  const averageScore = components.reduce((sum, component) => sum + component.score, 0) / components.length

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Cost Optimization</h1>
          <p className="text-zinc-400">Resource management, scaling, and efficient utilization</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-lg">
            <div className="absolute inset-0.5 rounded-full bg-black"></div>
            <div className="relative flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-white">7.1</span>
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
              <CardTitle className="text-white">Cost Optimization Assessment</CardTitle>
              <CardDescription className="text-zinc-400">
                Overall findings from the cost optimization evaluation
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
                        <span className="text-4xl font-bold text-green-500">7.1</span>
                        <span className="text-xs text-zinc-400">Overall Score</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">Overall Assessment</h3>
                    <p className="text-zinc-300">
                      Emata demonstrates disciplined cost structuring, donor leverage, and modular platform design; some
                      complexity exists in scaling cost per partner.
                    </p>
                    <div className="mt-2 text-xs text-zinc-500 flex items-center">
                      <PieChart className="h-3 w-3 mr-1" />
                      <span>Assessment based on 6 key components</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Strong Intentional Cost Structure</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    Emata has established a strong and intentional cost structure with minimal fixed overhead, lean tech
                    architecture, and a hybrid funding model combining donor support and revenue.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Efficient Operational Model</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    Operational and infrastructure costs are efficiently managed through partner-led field operations,
                    shared digital infrastructure, and in-house tools that reduce external dependencies.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Strategic MIS-Based Model</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    The company's MIS-based model ensures cost-sharing with partners while creating value through
                    lending services, effectively subsidizing software costs while maintaining revenue streams.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Future Scaling Complexity</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    While Emata has minimized burn through smart structuring, it faces future complexity as geographic
                    and product diversity increases, potentially requiring adjustments to its embedded cost model.
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
                Areas where Emata demonstrates strong cost optimization
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
                    Free MIS incentivizes adoption while keeping customer acquisition costs low, creating a strategic
                    entry point for lending services.
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
                  <span>
                    Hybrid OpCo/LendingCo structure isolates risk and aligns resource flows, creating clear separation
                    between operational costs and lending capital.
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
                  <span>
                    Grants and fellowships have dramatically lowered actual cost of early-stage growth, providing
                    valuable resources without diluting equity.
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
                  <span>
                    Cloud-native infrastructure supports cost-efficient scaling with autoscaling principles and minimal
                    fixed hosting costs.
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
              <CardDescription className="text-zinc-400">Suggested improvements for cost optimization</CardDescription>
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
                    Track cost per partner onboarding to manage increases in support or integration cost as the partner
                    network expands and diversifies.
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
                    Introduce multi-region financial models to stress test infrastructure and funding as expansion
                    begins into Tanzania, Ethiopia, and Rwanda.
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
                    Begin planning post-grant sustainability milestones tied to margins, not just runway, to ensure
                    long-term financial viability beyond donor support.
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
                    Explore tiered MIS support levels to unlock revenue while preserving partner value, potentially
                    creating premium features for larger or more established partners.
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
