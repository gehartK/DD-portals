"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { PieChart, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function CostOptimizationPage() {
  const [expandedComponents, setExpandedComponents] = useState<Record<string, boolean>>({})

  const toggleComponent = (component: string) => {
    setExpandedComponents((prev) => ({
      ...prev,
      [component]: !prev[component],
    }))
  }

  const components = [
    {
      id: "operational-cost",
      title: "Operational Cost Management",
      score: 4,
      summary: "Manual processes add inefficiencies to operations",
      description:
        "Melanin Kapital's operational costs are currently manageable, but manual processes in key areas (like KYC, loan origination, and invoice discounting) add inefficiencies. The company relies on external partners and strategic alliances for many functions, which provides some cost control, but there are still significant overheads. As the company scales, the reliance on manual workflows and the lack of automation will continue to strain operational costs. The surprise AWS costs also indicate that there may be hidden inefficiencies in how resources are managed.",
    },
    {
      id: "technology-cost",
      title: "Technology & Infrastructure Cost",
      score: 5,
      summary: "Cloud infrastructure offers flexibility but costs may rise",
      description:
        "The use of cloud infrastructure and blockchain offers flexibility and scalability. However, as Melanin Kapital scales, the costs of maintaining and upgrading its infrastructure—including the high AWS costs mentioned—could rise significantly. The company should prioritize cost optimization strategies, such as cloud cost management, to avoid surprise costs in the future. Additionally, ensuring technology investments are aligned with the company's growth stage will be critical to maintaining affordable infrastructure costs.",
    },
    {
      id: "cost-structure",
      title: "Cost Structure",
      score: 5,
      summary: "Lean structure but not optimized for growth",
      description:
        "Melanin Kapital's cost structure is currently lean, but as it expands, costs will increase, especially in terms of personnel, technology, and external services. The company faces a challenge in keeping fixed costs manageable as it scales across multiple regions. The current structure is not yet optimized for growth, and without further automation and strategic adjustments, operational costs may increase disproportionately as the company expands. The reliance on AWS and other external services needs to be scrutinized to ensure these are cost-effective in the long term.",
    },
    {
      id: "financial-sustainability",
      title: "Financial Sustainability & Profitability",
      score: 4,
      summary: "Not yet profitable with challenges in scaling sustainably",
      description:
        "Melanin Kapital has not yet achieved profitability, and while it is efficient in many areas, it faces significant challenges in scaling its operations sustainably. The company needs to develop a clearer path toward financial sustainability, focusing on cost management and ensuring that growth does not outpace its ability to manage expenses. Additionally, its reliance on external funding (such as fellowships and grants) to fuel operations can be unstable as the company moves toward a more self-sustaining financial model. Profitability remains a long-term goal.",
    },
    {
      id: "shared-resources",
      title: "Shared Resources and Resource Selection",
      score: 6,
      summary: "Good use of partnerships but reliance on external funding",
      description:
        "The company has done well to leverage shared resources through partnerships with Ecobank and Visa, as well as external programs like fellowships that provide access to funding and resources. However, Melanin Kapital's reliance on fellowships and programs (which Melanie attended) introduces some instability in long-term funding. The company should consider diversifying its resource base to reduce reliance on external grants and focus on developing long-term strategic partnerships and revenue-generating models that ensure financial independence.",
    },
    {
      id: "credits-programmes",
      title: "Credits, Programmes, and Fellowships",
      score: 6,
      summary: "Benefits from fellowships but creates funding uncertainty",
      description:
        "Melanin Kapital has benefitted from various credits, fellowships, and programmes, which provide funding and credibility. However, relying on such programs creates uncertainty in terms of long-term funding stability. The company will need to transition towards sustainable revenue generation and reduce its dependence on short-term fellowships. It's important for Melanin Kapital to secure long-term funding from more diversified sources, such as impact investors or self-sustaining revenue models.",
    },
  ]

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
              <span className="text-3xl font-bold text-white">5.2</span>
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
          <CardTitle className="text-white">Cost Optimization Overview</CardTitle>
          <CardDescription className="text-zinc-400">
            Assessment of resource management and cost efficiency
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
              <CardTitle className="text-white">Cost Optimization Assessment</CardTitle>
              <CardDescription className="text-zinc-400">
                Overall findings from the cost optimization evaluation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert className="bg-zinc-800 border-zinc-700">
                <PieChart className="h-4 w-4" />
                <AlertTitle>Overall Score: 5.2/10</AlertTitle>
                <AlertDescription>
                  Melanin Kapital demonstrates standard cost optimization practices with a lean operational model, but
                  faces challenges with manual processes, technology costs, and achieving financial sustainability.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Manual Processes Impact Cost Management</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    While Melanin Kapital has managed operational costs well at its current scale, the reliance on
                    manual processes and external partnerships adds inefficiencies that will be costly to scale.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Technology Costs May Increase</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    The company's reliance on AWS and cloud services presents potential for unexpected costs. It will
                    need to focus on optimizing its cloud infrastructure and avoiding further surprise technology
                    expenses.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Dependency on External Resources</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    While fellowships and credits provide short-term funding and resources, Melanin Kapital should work
                    to diversify its revenue streams and reduce its reliance on external grants to ensure long-term
                    financial sustainability.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Financial Sustainability Still in Progress</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    The company has yet to achieve profitability, and scaling efficiently without increasing costs is a
                    major hurdle. Cost structure optimization will be key for future financial sustainability.
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
                Areas where Melanin Kapital demonstrates strong cost optimization
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
                    Lean Operations: The company has a cost-effective operational model with a lean team and strategic
                    partnerships that reduce the need for significant upfront investment in infrastructure.
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
                    Strategic Use of Fellowships and Programs: The use of fellowships and external programs has allowed
                    the company to gain access to valuable resources and funding at a relatively low cost.
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
                    Cloud & Blockchain Leverage: The company's use of cloud infrastructure and blockchain provides
                    flexibility, scalability, and cost control in the early stages of its operations.
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
                    Automate Processes to Improve Cost Efficiency: Melanin Kapital should prioritize automating manual
                    processes such as KYC, loan origination, and invoice management to reduce operational costs as it
                    scales.
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
                    Optimize Technology Infrastructure: The company should focus on cloud cost optimization strategies
                    to prevent unexpected AWS costs and ensure that its technology stack can scale efficiently as the
                    business grows.
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
                    Diversify Revenue Streams: Melanin Kapital should reduce its reliance on external fellowships and
                    grants, focusing on long-term revenue generation models, such as impact investors and sustainable
                    business practices.
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
                    Strengthen Financial Planning: Developing a clearer path to profitability and ensuring that growth
                    does not outpace cost control will be critical. The company should work to improve its financial
                    sustainability through more effective cost management.
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
