"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PieChart } from "lucide-react"
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
  Legend,
} from "recharts"

export default function ReliabilityPage() {
  const components = [
    {
      id: "system-uptime",
      title: "System Uptime & Stability",
      score: 6.5,
      standard: 5.0,
      summary: "Modern architecture but lacks formal uptime monitoring",
      description:
        "Emata runs on a modern microservices architecture with robust modularity (BackOffice, ML model registry, SyncService), supporting generally high platform availability. However, there is no documented uptime SLAs or observability tools to track real-time stability, nor evidence of automated alerting or redundancy systems.",
    },
    {
      id: "business-continuity",
      title: "Business Continuity & Disaster Recovery",
      score: 6.0,
      standard: 5.0,
      summary: "Periodic backups but no formal disaster recovery plan",
      description:
        "While backups are performed periodically, there is no formal disaster recovery plan (DRP) or documented recovery time objectives (RTO/RPO). Recovery from data errors relies on ad hoc reprocessing using manual tools (e.g., data cleaning scripts, audit workflows). No mention of automated failover infrastructure, hot/warm standby databases, or multi-region redundancy.",
    },
    {
      id: "process-consistency",
      title: "Process Consistency & Reliability",
      score: 6.8,
      standard: 5.0,
      summary: "Strong core processes but manual data entry reduces reliability",
      description:
        "Loan request, approval, and repayment processes are tightly coupled with partner flows, and Emata's BackOffice system ensures repeatable logic per partner configuration. However, 30% of data entry is manual and informal, reducing reliability of end-to-end automation. Credit limit reviews include both internal and external review cycles to manage over/underestimation bias, increasing robustness.",
    },
    {
      id: "risk-management",
      title: "Risk Management & Issue Resolution",
      score: 7.0,
      standard: 5.0,
      summary: "Clear credit risk policies but limited operational risk protocols",
      description:
        "Credit and repayment risks are mitigated via clear policies: blacklist, extension periods, CRB reporting, and police/legal escalation options. Cooperative performance is evaluated quarterly; non-performing partners may be greylisted or exited. Emata actively trains and monitors agents and partners to identify anomalies or risks. Broader operational risk protocols (e.g., fraud detection, business interruption response) remain lightly formalized.",
    },
    {
      id: "vendor-reliability",
      title: "Vendor & Partner Reliability",
      score: 7.2,
      standard: 5.0,
      summary: "Strong partner structure with clear responsibilities",
      description:
        "Strong structure of responsibilities in place: repayment enforcement, data digitization, SMS communications, and loan application processing all delineated in contracts. Cooperative reliability is enforced through incentives (e.g., bonuses for guarantees) and performance-based engagement status. Partners like UGACOF and Omia have structured roles across loan lifecycle, and Emata reserves the right to suspend or exit partners on failure.",
    },
  ]

  // Calculate overall score
  const overallScore = Number.parseFloat(
    (components.reduce((sum, component) => sum + component.score, 0) / components.length).toFixed(1),
  )

  // Prepare data for radar chart
  const radarData = components.map((component) => ({
    subject: component.title.split(" ")[0],
    score: component.score,
    standard: component.standard,
    fullMark: 10,
  }))

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Reliability</h1>
          <p className="text-zinc-400">System stability, business continuity, and operational consistency</p>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Column - Radar Chart and Scores */}
        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader>
            <CardTitle className="text-white">Component Scores</CardTitle>
            <CardDescription className="text-zinc-400">Reliability assessment across key dimensions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[280px] w-full mb-6">
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
                  <Tooltip contentStyle={{ backgroundColor: "#222", borderColor: "#333" }} />
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

        {/* Right Column - Detailed Analysis */}
        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader>
            <CardTitle className="text-white">Detailed Analysis</CardTitle>
            <CardDescription className="text-zinc-400">In-depth assessment of reliability components</CardDescription>
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
              <CardTitle className="text-white">Reliability Assessment</CardTitle>
              <CardDescription className="text-zinc-400">
                Overall findings from the reliability evaluation
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
                      Emata shows high operational reliability at the partner level, but has technical reliability gaps
                      in system observability and disaster recovery.
                    </p>
                    <div className="mt-2 text-xs text-zinc-500 flex items-center">
                      <PieChart className="h-3 w-3 mr-1" />
                      <span>Assessment based on 5 key components</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Strong Operational Reliability</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    Emata shows high operational reliability at the partner and field level, driven by structured
                    contracts, a robust credit workflow, and clear escalation strategies for defaults. The organization
                    has established effective processes for loan management and partner engagement.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Technical Reliability Gaps</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    Technical reliability (i.e., system observability, failover, disaster recovery) lacks maturity.
                    While the microservices architecture provides a solid foundation, the absence of formal monitoring,
                    alerting systems, and disaster recovery planning presents potential risks as the platform scales.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Partner Dependency</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    The organization relies heavily on the strength of cooperative partnerships, which mitigates some
                    risk but does not substitute for deeper infrastructural safeguards. While partner management is
                    strong, this dependency could become a vulnerability without additional system-level resilience
                    measures.
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
                Areas where Emata demonstrates reliability strengths
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
                    Structured partner agreements ensure strong last-mile reliability and role clarity, with clear
                    delineation of responsibilities across the loan lifecycle.
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
                    Repayment and credit workflows are repeatable and configurable, allowing for consistent loan
                    processing and management across different partners and contexts.
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
                    Credit risk resolution logic is formalized and field-tested, with clear policies for handling
                    defaults, extensions, and escalations.
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
                    Automated messaging (SMS, reminders) reduces dependency on manual intervention during recovery
                    cycles, enhancing communication efficiency.
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
              <CardDescription className="text-zinc-400">Suggested improvements for reliability</CardDescription>
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
                    Develop and publish a formal Disaster Recovery Plan, including backup frequency, RTO/RPO, and
                    communication protocols to ensure business continuity in case of system failures.
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
                    Implement uptime monitoring and error logging infrastructure (e.g., Datadog, AWS CloudWatch) to
                    improve issue detection and resolution speed.
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
                    Define partner-level reliability scoring or early warning system to flag data delays or operational
                    breakdowns before they impact service delivery.
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
                    Automate fallback logic for SyncService failures and introduce retry and rollback flows across key
                    API interactions to enhance system resilience.
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
