"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Brain } from "lucide-react"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from "recharts"

export default function CriticalSkillsPage() {
  const components = [
    {
      id: "team-composition",
      title: "Team Composition & Expertise",
      score: 7.5,
      standard: 6.0,
      summary: "Highly experienced founding team with deep domain expertise",
      description:
        "The founding team is highly experienced, with deep overlap in agriculture, credit, technology, and product. Technical and data leaders (CTO, CDSO) are hands-on and strategically aligned. The core engineering team consists of full-stack developers with .NET experience, while the AI/data science team includes advanced ML and ops specialists. External leadership support from Dutch holding company and accelerators provides cross-market insight.",
    },
    {
      id: "management-practices",
      title: "Management Practices",
      score: 7.0,
      standard: 5.5,
      summary: "Strong execution clarity with active founder involvement",
      description:
        "Strong execution clarity across product, lending, and data roadmap. Founders are actively involved in all strategic and operational decisions. Budgeting, cash management, and investor updates are well managed. Management has created buffers between operations and lending capital (OpCo vs LendingCo structure). However, some delegation gaps persist; key reports still flow directly to CTO/CEO.",
    },
    {
      id: "talent-development",
      title: "Talent Development & Retention",
      score: 6.5,
      standard: 5.0,
      summary: "Core internal training practices with some attrition",
      description:
        "Internal training and mentoring are core practices — notably training back-end engineers to handle front-end UI work. Attrition exists (two exits in 2024), but exit transitions have been well managed. Hybrid model with mandatory office presence 2x/week ensures team cohesion in Kampala. The team is lean and high performing, but some over-reliance on senior staff limits upskilling bandwidth.",
    },
    {
      id: "organizational-structure",
      title: "Organizational Structure",
      score: 6.0,
      standard: 5.0,
      summary: "Flat hierarchy with emerging vertical leadership",
      description:
        "Flat hierarchy; all tech and data staff report directly to CTO. Attempts are underway to create vertical leads (e.g., seniors owning MIS, BackOffice), but formal delegation is incomplete. Start-up flatness works for agility, but bottlenecks exist in core decision-making and infrastructure knowledge.",
    },
    {
      id: "leadership-governance",
      title: "Leadership & Governance",
      score: 7.5,
      standard: 6.0,
      summary: "Mission-aligned founders with strong governance support",
      description:
        "Highly mission-aligned founders with shared history and deep contextual understanding of East African agri-finance. Governance supported by Dutch parent company and external advisors. Board participation and transparency in investor relations are strong. Leadership is realistic about weaknesses and consistently receptive to feedback and structured transformation.",
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
          <h1 className="text-2xl font-bold tracking-tight text-white">Critical Skills</h1>
          <p className="text-zinc-400">Team composition, professional capacity, and management style</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-lg">
            <div className="absolute inset-0.5 rounded-full bg-black"></div>
            <div className="relative flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-white">6.9</span>
              <span className="text-xs text-zinc-400">out of 10</span>
            </div>
          </div>
          <div className="mt-2 max-w-[120px] text-center">
            <p className="text-xs text-zinc-500">Above industry standard for early-stage fintech</p>
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
              <CardTitle className="text-white">Critical Skills Assessment</CardTitle>
              <CardDescription className="text-zinc-400">
                Overall findings from the critical skills evaluation
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
                        <span className="text-4xl font-bold text-green-500">6.9</span>
                        <span className="text-xs text-zinc-400">Overall Score</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-1">Overall Assessment</h3>
                    <p className="text-zinc-300">
                      Emata exhibits above-industry strength in core leadership, domain expertise, and team development,
                      especially for a seed-stage business operating in a complex environment.
                    </p>
                    <div className="mt-2 text-xs text-zinc-500 flex items-center">
                      <Brain className="h-3 w-3 mr-1" />
                      <span>Assessment based on 5 key components</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Founder-Driven with Organizational Scaffolding</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    The company is founder-driven but intentionally building organizational scaffolding to scale
                    sustainably. The current structure still reflects early-stage flatness, with reliance on key
                    individuals (e.g., Davis for all tech streams), but the intentions to decentralize are in motion.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Complementary Leadership Team</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    The founding team demonstrates highly complementary skills with deep vertical and horizontal
                    expertise across agriculture, credit, technology, and product development, positioning the company
                    well for continued growth.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Strong Developer Culture</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    Emata has cultivated a respected local developer culture with minimal turnover and a strong internal
                    training ethos, which contributes to team stability and knowledge retention despite operating in a
                    competitive talent market.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Governance and Innovation</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    The company benefits from strong governance culture backed by external Dutch holding and
                    impact-aligned investors, while active DevOps, AI, and product experimentation encourage innovation
                    throughout the organization.
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
                Areas where Emata demonstrates strong critical skills
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
                    Highly complementary founding team with deep vertical and horizontal expertise across agriculture,
                    credit, technology, and product development.
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
                    Respected local developer culture with minimal turnover and strong internal training ethos,
                    contributing to team stability and knowledge retention.
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
                    Strong governance culture backed by external Dutch holding and impact-aligned investors, providing
                    additional oversight and strategic guidance.
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
                    Active DevOps, AI, and product experimentation that encourages innovation and continuous improvement
                    throughout the organization.
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
                Suggested improvements for critical skills development
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
                  <span>
                    Delegate engineering ownership for BackOffice, MIS, and Frontend to senior developers to mitigate
                    key-person dependency and distribute technical leadership.
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
                    Codify engineering and data leadership roles in preparation for multi-country scale to ensure
                    consistent practices across expanding operations.
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
                    Formalize internal mentorship and documentation practices to reduce operational bottlenecks and
                    facilitate knowledge transfer across the organization.
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
                    Prepare succession and transition plans for 2–3 core technical functions to mitigate risks
                    associated with key personnel departures.
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
