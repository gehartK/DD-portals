"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Target, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function ReliabilityPage() {
  const [expandedComponents, setExpandedComponents] = useState<Record<string, boolean>>({})

  const toggleComponent = (component: string) => {
    setExpandedComponents((prev) => ({
      ...prev,
      [component]: !prev[component],
    }))
  }

  const components = [
    {
      id: "system-uptime",
      title: "System Uptime & Stability",
      score: 6,
      summary: "Strong blockchain foundation but untested at scale",
      description:
        "Melanin Kapital's platform leverages blockchain and cloud-based infrastructure, which offers a strong foundation for system uptime and stability. However, as the company is still in its early stages, the full robustness of the platform in terms of uptime consistency and handling high traffic volumes across multiple regions is not fully tested. As the company scales, it will need to focus on ensuring high availability and addressing any potential system failures quickly to maintain user trust and business continuity.",
    },
    {
      id: "business-continuity",
      title: "Business Continuity & Disaster Recovery",
      score: 5,
      summary: "Limited information on continuity and recovery plans",
      description:
        "While the company is investing in technology, there is limited information on its business continuity and disaster recovery plans. As the company expands into new regions and markets, having a solid framework for continuity and the ability to respond to unexpected disruptions (whether technical, operational, or external) will be crucial. This includes data backups, failover systems, and contingency protocols to ensure operations remain stable in case of any disruptions.",
    },
    {
      id: "operational-processes",
      title: "Operational Processes & Consistency",
      score: 6,
      summary: "Efficient core processes but manual operations introduce inconsistencies",
      description:
        "Melanin Kapital has established efficient processes for carbon credit tracking and loan disbursements through its partnerships with Ecobank and Visa. However, the reliance on manual processes in areas such as KYC and invoice discounting introduces inconsistencies and potential delays in operational execution. Improving process automation and eliminating manual interventions will be essential to improving the reliability of the company's day-to-day operations.",
    },
    {
      id: "risk-management",
      title: "Risk Management & Issue Resolution",
      score: 6,
      summary: "Basic protocols in place but need enhancement for scaling",
      description:
        "The company has some risk management protocols in place, particularly around compliance with local regulations and financial transactions. However, the manual processes and reliance on external partners for various services can sometimes introduce risk in terms of timeliness and accuracy. As Melanin Kapital grows and expands into new markets, it will need to ensure faster issue resolution protocols and risk mitigation strategies to maintain operational reliability.",
    },
    {
      id: "vendor-reliability",
      title: "Vendor & Partner Reliability",
      score: 7,
      summary: "Strong partnerships with established financial institutions",
      description:
        "Melanin Kapital has secured strong partnerships with Ecobank and Visa, both of which are reputable and reliable partners in the African and global financial ecosystems. These partnerships significantly contribute to the company's reliability by ensuring access to well-established financial infrastructure. However, as the company scales and forms new partnerships, it will need to ensure that vendor performance is consistently monitored to avoid disruptions in service delivery.",
    },
  ]

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
              <span className="text-3xl font-bold text-white">6.0</span>
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
          <CardTitle className="text-white">Reliability Overview</CardTitle>
          <CardDescription className="text-zinc-400">
            Assessment of system uptime, business continuity, and operational processes
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
              <CardTitle className="text-white">Reliability Assessment</CardTitle>
              <CardDescription className="text-zinc-400">
                Overall findings from the reliability evaluation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert className="bg-zinc-800 border-zinc-700">
                <Target className="h-4 w-4" />
                <AlertTitle>Overall Score: 6/10</AlertTitle>
                <AlertDescription>
                  Melanin Kapital demonstrates above-average reliability with strong technological foundations and
                  partnerships, but faces challenges with manual processes and business continuity planning.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Strong Foundations for Reliability</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    Melanin Kapital's use of blockchain and cloud-based infrastructure provides a solid foundation for
                    system stability. However, the company's manual processes and reliance on external partners for key
                    operations present potential risks to reliability, particularly as the company scales.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Room for Improvement in Continuity Plans</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    The company does not yet have fully developed disaster recovery or business continuity plans. As
                    Melanin Kapital expands, establishing these protocols will be critical to maintaining operational
                    reliability across diverse regions and markets.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Vendor & Partner Reliance</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    While partnerships with Ecobank and Visa provide strong infrastructure support, Melanin Kapital's
                    reliability will depend on how well it manages and ensures consistent vendor performance as it
                    scales.
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
                Areas where Melanin Kapital demonstrates reliability strengths
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
                    Solid Partnerships: Ecobank and Visa are trusted partners, which strengthens Melanin Kapital's
                    reliability in delivering financial products and services at scale.
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
                    Technological Infrastructure: The company uses blockchain and cloud solutions, which are inherently
                    scalable and offer strong security and transparency features, important for maintaining long-term
                    operational reliability.
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
                    Risk Mitigation Focus: The company is actively engaged in compliance management and regulatory
                    navigation, which bolsters operational resilience.
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
                    Develop Business Continuity & Disaster Recovery Plans: Melanin Kapital should implement a business
                    continuity plan that includes disaster recovery protocols, such as automated backups, failover
                    systems, and clear issue resolution procedures, to ensure resilience in case of disruptions.
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
                    Automate Manual Processes: To improve reliability, the company should prioritize automating key
                    manual workflows such as KYC and loan origination to eliminate bottlenecks and ensure consistent
                    operational performance.
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
                    Strengthen Vendor Management: As the company scales, Melanin Kapital should ensure that it has a
                    robust vendor management system in place to monitor and assess the performance of its partners
                    regularly, minimizing potential disruptions in service delivery.
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
                    Enhance Risk Management Framework: Melanin Kapital should create a comprehensive risk management
                    framework that includes incident response plans, clearer issue escalation processes, and regular
                    performance reviews to address potential reliability risks as the company grows.
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
