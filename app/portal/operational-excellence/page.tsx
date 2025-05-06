"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cog } from "lucide-react"
import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts"

export default function OperationalExcellencePage() {
  const [expandedComponents, setExpandedComponents] = useState<Record<string, boolean>>({})

  const toggleComponent = (component: string) => {
    setExpandedComponents((prev) => ({
      ...prev,
      [component]: !prev[component],
    }))
  }

  const components = [
    {
      id: "process-automation",
      title: "Process Automation and Time",
      score: 6,
      standard: 5.0,
      summary: "Manual processes in credit review, MIS sync validation, and data entry",
      description:
        "While Emata uses APIs, internal microservices, and modular workflows, much of the credit limit review, MIS sync validation, and data entry remains manual. 30% of data is manually input with no SOPs for informal staff, leading to inconsistencies and avoidable cleanup work. Some automation exists in model deployment and notifications (e.g., SMS reminders), but this is not yet fully standardized.",
    },
    {
      id: "operational-scalability",
      title: "Operational Scalability and Labor Output",
      score: 6.5,
      standard: 5.0,
      summary: "Lean field operations but human bottlenecks in reviews and validation",
      description:
        "Field operations are lean and highly scalable via cooperative partner integration and agent deployment. Team covers over 62 partners and 100K+ farmers with <25 operational staff, suggesting high efficiency per person. But human bottlenecks exist: reviews, manual risk checks, and data validation steps that cannot scale linearly without structured delegation or digital workflows.",
    },
    {
      id: "supply-chain",
      title: "Supply Chain and Vendor Management",
      score: 6.8,
      standard: 5.0,
      summary: "Detailed vendor engagements but no systematic audit of partner data quality",
      description:
        "Vendor (partner) engagements are detailed and include roles for loan repayment enforcement, agent training, and MIS onboarding. Contracts with partners like UGACOF and Omia show structured performance expectations, data sharing protocols, and digital touchpoints. However, there's no systematic way to audit partner-side data quality or track long-term performance improvement.",
    },
    {
      id: "risk-management",
      title: "Risk Management",
      score: 6.7,
      standard: 5.0,
      summary: "Well-articulated credit risk processes but emerging operational risk governance",
      description:
        "Emata uses tiered partner risk categories, ML-powered credit scores, and portfolio ROI simulators. Formalized processes for blacklisting defaulters, grace periods, and enforcement (e.g., police letters, CRB reporting) are in place. Credit risk processes are well-articulated, but broader operational risk governance (e.g., fraud escalation, internal control audits) is still emerging.",
    },
    {
      id: "data-management",
      title: "Data Management and Security",
      score: 6.5,
      standard: 5.0,
      summary: "Strong in-house tools but lacks real-time error correction and SOPs",
      description:
        "Strong in-house tools (Data Cleaning App, Data Audit Service, ML update APIs) bolster data hygiene. Lack of real-time error correction, and absence of internal SOPs for MIS-to-model reconciliation, limits robustness. Access control via VPNs and VPCs is in place but lacks role-based audit logging and admin-specific session governance.",
    },
    {
      id: "operational-capacity",
      title: "Operational Capacity",
      score: 7,
      standard: 5.0,
      summary: "Semi-structured rollout playbooks with capacity constraints in technical validation",
      description:
        "Current ops can onboard multiple new partners per quarter, with semi-structured rollout playbooks. MIS installation, agent training, and farmer engagement are handled in batches — offering scale potential. Capacity constraints are mostly visible in technical validation (credit limits, data cleaning), not fieldwork, which is relatively standardized.",
    },
  ]

  // Calculate the average score
  const averageScore = (components.reduce((sum, component) => sum + component.score, 0) / components.length).toFixed(1)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Operational Excellence</h1>
          <p className="text-zinc-400">Monitoring, continuous improvement, and automation</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-lg">
            <div className="absolute inset-0.5 rounded-full bg-black"></div>
            <div className="relative flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-white">6.6</span>
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
            <div className="mb-6">
              <div className="text-sm font-medium text-zinc-200 mb-2">Score Distribution vs. Industry Standard</div>
              <div className="h-[280px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="70%"
                    data={components.map((c) => ({
                      subject: c.title.split(" ")[0],
                      score: c.score,
                      standard: c.standard,
                      fullMark: 10,
                    }))}
                  >
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
                    <Tooltip
                      content={({ active, payload }) => {
                        if (active && payload && payload.length) {
                          const component = components.find((c) => c.title.startsWith(payload[0].payload.subject))
                          return (
                            <div className="bg-zinc-800 border border-zinc-700 p-2 rounded shadow-md">
                              <p className="text-sm font-medium text-white">{component?.title}</p>
                              <p className="text-xs text-zinc-300">Score: {payload[0].value}/10</p>
                              <p className="text-xs text-zinc-300">Industry Standard: {component?.standard}</p>
                              <p className="text-xs text-zinc-400 max-w-[200px] mt-1">{component?.summary}</p>
                            </div>
                          )
                        }
                        return null
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
              <CardTitle className="text-white">Operational Excellence Assessment</CardTitle>
              <CardDescription className="text-zinc-400">
                Overall findings from the operational excellence evaluation
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
                        <span className="text-4xl font-bold text-green-500">6.6</span>
                        <span className="text-xs text-zinc-400">Overall Score</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">Overall Assessment</h3>
                    <p className="text-zinc-300">
                      Emata's operations are mature for its stage, with evident strengths in partner-driven scalability
                      and risk containment. However, its reliance on informal, manual inputs without SOPs, and
                      semi-structured processes in model retraining and partner validation, introduces operational
                      fragility.
                    </p>
                    <div className="mt-2 text-xs text-zinc-500 flex items-center">
                      <Cog className="h-3 w-3 mr-1" />
                      <span>Assessment based on 6 key components</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Manual Processes Limit Efficiency</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    While Emata uses APIs and microservices, significant portions of credit limit review, MIS sync
                    validation, and data entry remain manual. 30% of data is manually input with no SOPs for informal
                    staff, leading to inconsistencies and cleanup work.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Operational Scalability Challenges</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    Field operations are lean and scalable, but human bottlenecks exist in reviews, manual risk checks,
                    and data validation steps that cannot scale linearly without structured delegation or digital
                    workflows.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Process Gaps Will Limit Growth</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    As the company grows across regions and crop categories, process gaps in SOPs, model retraining, and
                    partner validation will limit efficiency and increase error rates if not addressed.
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
                Areas where Emata demonstrates operational excellence strengths
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
                  <span>Scalable field model using cooperative infrastructure and certified agent frameworks.</span>
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
                  <span>Clear contracts and vendor accountability via repayment and disbursement logic.</span>
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
                  <span>Internal tools developed for data auditing and cleaning signal strong process ownership.</span>
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
                    High labor productivity, with team coverage &gt;4,000 farmers per operations staff member.
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
              <CardDescription className="text-zinc-400">
                Suggested improvements for operational excellence
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
                  <span>Implement and enforce basic SOPs for all informal field data inputs and agent operations.</span>
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
                    Automate partner data validation, especially post-sync MIS verification and credit review triage.
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
                    Define and codify internal risk protocols, particularly for process, fraud, and technical
                    escalations.
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
                    Expand ops QA to include agent performance tracking dashboards and partner data reliability scores.
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
