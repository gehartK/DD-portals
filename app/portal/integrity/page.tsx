"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Shield, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function IntegrityPage() {
  const [expandedComponents, setExpandedComponents] = useState<Record<string, boolean>>({})

  const toggleComponent = (component: string) => {
    setExpandedComponents((prev) => ({
      ...prev,
      [component]: !prev[component],
    }))
  }

  const components = [
    {
      id: "ethical-standards",
      title: "Ethical Standards & Transparency",
      score: 7,
      summary: "Strong ethical focus with blockchain-enabled transparency",
      description:
        "Melanin Kapital is focused on sustainable finance and green lending, which aligns well with its mission of promoting financial inclusion and addressing climate change. The company's use of blockchain for carbon credit tracking ensures transparency in its operations, which is a key factor in building trust with customers and partners. While the company's ethical standards appear strong, its overall transparency in financial reporting and internal processes can be improved as it scales.",
    },
    {
      id: "regulatory-compliance",
      title: "Regulatory Compliance",
      score: 6,
      summary: "Progress in regulatory sandbox but needs international readiness",
      description:
        "Melanin Kapital has made progress in terms of regulatory compliance, including being part of the Capital Markets Authority's regulatory sandbox in Kenya. However, as the company expands into new regions (including Europe), it will need to ensure full compliance with local regulations and financial standards in each market. While the company is moving in the right direction, its regulatory readiness for international expansion still needs further development.",
    },
    {
      id: "financial-transparency",
      title: "Financial Transparency & Reporting",
      score: 5,
      summary: "Financial model satisfactory but contains accuracy issues",
      description:
        "The integrity of Melanin Kapital's financial model is generally satisfactory, with clear structures and methodologies in place. However, our assessment identified several calculation errors and inconsistencies that reduce the overall accuracy of the projections. These include discrepancies in growth rate applications, misaligned expense forecasts, and some formula errors in the cash flow statements. While these issues don't suggest intentional misrepresentation, they do impact the reliability of the financial forecasts and should be addressed to provide investors with more accurate projections. The company has been receptive to feedback and has committed to reviewing and correcting these errors.",
    },
    {
      id: "social-responsibility",
      title: "Commitment to Social Responsibility",
      score: 8,
      summary: "Strong focus on inclusion and sustainable finance",
      description:
        "Melanin Kapital has a strong commitment to social responsibility, particularly through its focus on financial inclusion, sustainable finance, and empowering women-owned businesses. The company's products, such as green loans and carbon-backed savings accounts, are designed to benefit underserved populations in Africa. This aligns with their mission to support the green economy and create positive social and environmental impact, which is a significant strength of the company.",
    },
    {
      id: "trustworthiness",
      title: "Trustworthiness & Reputation",
      score: 4,
      summary: "Early-stage reputation with limited market validation",
      description:
        "Melanin Kapital has made notable progress in building trust with its partners, such as Ecobank and Visa, and has demonstrated a strong ethical focus in its business model. However, as the company is still in the early stages of scaling, its reputation is not yet fully tested across a broader market. The trustworthiness of the company will become more evident as it navigates its expansion into new regions and continues to deliver on its commitments to sustainability and financial inclusion.",
    },
  ]

  // Calculate the average score
  const averageScore = components.reduce((sum, component) => sum + component.score, 0) / components.length

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Integrity</h1>
          <p className="text-zinc-400">Ethical standards, transparency, and regulatory compliance</p>
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
          <CardTitle className="text-white">Integrity Overview</CardTitle>
          <CardDescription className="text-zinc-400">
            Assessment of ethical standards, transparency, and social responsibility
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
              <CardTitle className="text-white">Integrity Assessment</CardTitle>
              <CardDescription className="text-zinc-400">
                Overall findings from the integrity evaluation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert className="bg-zinc-800 border-zinc-700">
                <Shield className="h-4 w-4" />
                <AlertTitle>Overall Score: 6.0/10</AlertTitle>
                <AlertDescription>
                  Melanin Kapital demonstrates above-average integrity with strong ethical focus and social
                  responsibility, but needs improvement in financial transparency, reputation building, and regulatory
                  compliance for international expansion.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Ethical Focus & Mission Alignment</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    Melanin Kapital has a clear focus on sustainability, financial inclusion, and empowering underserved
                    markets, which is reflected in its products and partnerships. The company's business model aligns
                    well with its mission to address climate change and promote financial equity.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Transparency Gaps</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    While blockchain ensures transparency in carbon credit management, the company still has room to
                    improve financial reporting and regulatory compliance as it expands internationally.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Building Trust</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    The company has a solid reputation within its current partnerships, but its trustworthiness and
                    reputation will need to be tested as it scales and attracts new investors, customers, and partners.
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
                Areas where Melanin Kapital demonstrates integrity strengths
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
                    Commitment to Sustainability: The company is deeply committed to social responsibility, particularly
                    through its green finance solutions and support for women-owned businesses.
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
                    Transparent Operations: Blockchain technology enables clear tracking of carbon credits, enhancing
                    transparency in financial transactions and lending.
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
                    Ethical Business Model: Melanin Kapital operates with strong ethical standards, prioritizing both
                    financial inclusion and climate action.
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
              <CardDescription className="text-zinc-400">Suggested improvements for integrity</CardDescription>
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
                    Improve Financial Transparency: As Melanin Kapital seeks to scale, it should prioritize clearer
                    financial reporting to demonstrate operational health and growth potential. Providing regular
                    updates on revenue, cost structures, and profitability projections will help build trust with
                    investors and stakeholders.
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
                    Strengthen Regulatory Compliance: To ensure smooth international expansion, the company should
                    continue to monitor and adhere to local regulations in each target market, particularly as it moves
                    into Europe and other regulated regions.
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
                    Build Reputation in New Markets: The company should actively focus on building its reputation in new
                    regions, ensuring that its values of sustainability and inclusion are clearly communicated and
                    demonstrated through consistent delivery on commitments to partners and customers.
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
