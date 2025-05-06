"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Cog, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

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
      id: "process-efficiency",
      title: "Process Efficiency & Automation",
      score: 4,
      summary: "Many operational processes remain manual despite blockchain use",
      description:
        "Despite leveraging blockchain for carbon credit tracking, many of Melanin Kapital's operational processes remain manual, such as loan origination, KYC, and invoice discounting. These manual processes limit the company's ability to scale efficiently and introduce significant risk as the business expands into new regions. The lack of automation in core operational workflows is a major barrier to achieving operational excellence at scale.",
    },
    {
      id: "operational-scalability",
      title: "Operational Scalability",
      score: 4,
      summary: "Scalability hindered by manual workflows and lack of automated systems",
      description:
        "While Melanin Kapital's business model has the potential to scale, its operational scalability is hindered by the heavy reliance on manual workflows and the lack of automated systems for key operations. The company has yet to implement scalable back-end infrastructure to support growth in multiple regions, and expansion into new African markets or Europe will require a more robust operational framework to handle the increased complexity and demand.",
    },
    {
      id: "supply-chain",
      title: "Supply Chain & Vendor Management",
      score: 5,
      summary: "Strong partnerships but vendor management processes still developing",
      description:
        "Melanin Kapital has strong partnerships with Ecobank and Visa, providing access to significant infrastructure for expanding its financial services. However, the company's vendor management processes are still in development. As the company scales, it will need to strengthen its supplier relationships and create more formal service level agreements (SLAs) to ensure consistent service delivery, especially in areas like carbon credit certification and regional compliance.",
    },
    {
      id: "risk-management",
      title: "Risk Management & Compliance",
      score: 5,
      summary: "Progress in compliance but manual risk management processes",
      description:
        "Melanin Kapital has made strides in compliance by joining the Capital Markets Authority's regulatory sandbox and working with Ecobank under an MOU. However, the company's manual risk management processes and lack of formalized compliance frameworks may pose challenges as the company enters new jurisdictions with differing regulatory requirements. The company will need to automate and formalize compliance management systems to ensure scalability and minimize risk exposure.",
    },
    {
      id: "data-management",
      title: "Data Management & Security",
      score: 5,
      summary: "Blockchain and IoT use but data security still developing",
      description:
        "Melanin Kapital uses blockchain and IoT technologies for carbon tracking and data management, providing transparency and security in certain aspects of its operations. However, data security is still a work in progress, particularly when dealing with sensitive financial and personal data. The company needs to implement stronger data protection measures and ensure compliance with international privacy regulations (e.g., GDPR) as it scales.",
    },
  ]

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
              <span className="text-3xl font-bold text-white">4.8</span>
              <span className="text-xs text-zinc-400">out of 10</span>
            </div>
          </div>
          <div className="mt-2 max-w-[120px] text-center">
            <p className="text-xs text-zinc-500">5/10 represents industry standard</p>
          </div>
        </div>
      </div>

      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader>
          <CardTitle className="text-white">Operational Excellence Overview</CardTitle>
          <CardDescription className="text-zinc-400">
            Assessment of monitoring, automation, and continuous improvement
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {components.map((component) => (
              <div key={component.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="font-medium text-zinc-200">{component.title}</div>
                  <div className="text-sm text-zinc-400">{component.score}/10</div>
                </div>
                <Progress value={component.score * 10} className="h-1.5" />
                <div className="flex items-start justify-between">
                  <p className="text-xs text-zinc-500">{component.summary}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-6 w-6 p-0 rounded-full"
                    onClick={() => toggleComponent(component.id)}
                  >
                    {expandedComponents[component.id] ? (
                      <ChevronUp className="h-4 w-4 text-zinc-400" />
                    ) : (
                      <ChevronDown className="h-4 w-4 text-zinc-400" />
                    )}
                    <span className="sr-only">{expandedComponents[component.id] ? "Collapse" : "Expand"}</span>
                  </Button>
                </div>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 text-sm text-zinc-400 rounded-md bg-zinc-800/50 px-3 py-2",
                    expandedComponents[component.id] ? "max-h-60" : "max-h-0 py-0 px-0",
                  )}
                >
                  {expandedComponents[component.id] && component.description}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

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
              <Alert className="bg-zinc-800 border-zinc-700">
                <Cog className="h-4 w-4" />
                <AlertTitle>Overall Score: 4.8/10</AlertTitle>
                <AlertDescription>
                  Melanin Kapital faces challenges in operational excellence due to manual processes and limited
                  scalable infrastructure, despite innovative technology use and strategic partnerships.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Manual Processes Limit Efficiency</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    Despite some use of advanced technologies like blockchain, many core operational processes remain
                    manual, significantly impacting the company's process efficiency and its ability to scale quickly
                    and securely.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Operational Scalability Constraints</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    Melanin Kapital is not yet equipped with automated systems or scalable infrastructure, which are
                    essential for handling increased operational complexity as it expands into new markets.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Lack of Formalized Risk & Compliance Systems</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    Risk management and compliance processes are still manual, leaving the company vulnerable as it
                    scales. The regulatory landscape in each market will require automated and formal compliance
                    management to ensure long-term viability.
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
                Areas where Melanin Kapital demonstrates operational excellence strengths
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
                    Partnerships with Major Institutions: Melanin Kapital has strategic alliances with Ecobank and Visa,
                    giving it access to established infrastructure for financial services and expansion potential.
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
                    Innovative Use of Blockchain: The company has a forward-looking approach by integrating blockchain
                    and IoT into its operations, particularly in tracking carbon credits, which provides a level of
                    transparency and security.
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
                  <span>
                    Automate Core Processes: Melanin Kapital must prioritize the automation of key operational
                    workflows, including loan origination, KYC, and invoice discounting, to eliminate bottlenecks and
                    improve efficiency. This will be critical as the company scales operations.
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
                    Develop Scalable Infrastructure: To support expansion, the company should invest in scalable
                    back-end systems that can handle increased transaction volumes, cross-border operations, and
                    compliance management without introducing manual intervention.
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
                    Strengthen Data Security & Compliance: The company should invest in stronger data protection
                    measures to ensure it meets international standards and regional regulations (e.g., GDPR, local data
                    laws). Automating compliance tracking will help mitigate the risk of non-compliance as the company
                    enters new markets.
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
                    Improve Vendor Management: As the company expands, formalizing vendor management processes will be
                    crucial. This includes establishing service level agreements (SLAs) with key partners to ensure
                    consistent service and timely delivery of products and services across markets.
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
                    Formalize Risk Management Systems: Implementing automated risk management tools and formalizing
                    compliance procedures will be critical for managing regulatory risks and operational risk as the
                    company expands into new regions.
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
