"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Zap, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function PerformanceEfficiencyPage() {
  const [expandedComponents, setExpandedComponents] = useState<Record<string, boolean>>({})

  const toggleComponent = (component: string) => {
    setExpandedComponents((prev) => ({
      ...prev,
      [component]: !prev[component],
    }))
  }

  const components = [
    {
      id: "resource-allocation",
      title: "Resource Allocation & Cost Efficiency",
      score: 5,
      summary: "Lean operations but under-resourced in key growth areas",
      description:
        "Melanin Kapital has demonstrated cost efficiency in its operations, particularly with its lean team and focused product offering. However, the lack of a marketing budget and limited dedicated resources for expansion in new markets suggest that the company is under-resourced in areas that are crucial for growth. As it seeks to scale, Melanin Kapital will need to allocate resources more effectively to ensure marketing, customer acquisition, and operational scaling are adequately funded.",
    },
    {
      id: "operational-performance",
      title: "Operational Performance & Execution",
      score: 4,
      summary: "Manual processes limit execution and scalability",
      description:
        "Melanin Kapital has efficient systems in place for managing loans and carbon credit tracking, leveraging blockchain and automated processes in certain areas. However, the company still faces execution challenges related to manual processes and the lack of automated back-end systems. As the company scales, improving operational efficiency and execution capabilities will be crucial to handle the increasing complexity of multi-market operations.",
    },
    {
      id: "technology-infrastructure",
      title: "Technology Infrastructure & Efficiency",
      score: 4,
      summary: "Backend scalable but manual processes reduce efficiency",
      description:
        "The company's technology stack, which includes blockchain for carbon credit management, is innovative and the backend in its current state is scalable. However, bottlenecks associated with manual processes and segmentation reduce efficiency, although these improvements are in the pipeline and being developed. The company must continue enhancing its technology infrastructure to ensure it can manage growth and operate efficiently across regions.",
    },
    {
      id: "profitability",
      title: "Profitability & Financial Sustainability",
      score: 4,
      summary: "Financial model errors and speculative projections",
      description:
        "Melanin Kapital is not yet profitable, with early-stage revenue generation of USD 176,000 (YTD 2024). Some errors in the financial model made it hard to assess it accurately, and projections remain speculative, although there are significant business development milestones that are planned based on preliminary agreements with partners. The company will need to find ways to increase revenue streams and optimize spending to achieve financial sustainability.",
    },
  ]

  // Calculate the average score
  const averageScore = components.reduce((sum, component) => sum + component.score, 0) / components.length

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Performance Efficiency</h1>
          <p className="text-zinc-400">Optimization, waste reduction, and productivity enhancement</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-lg">
            <div className="absolute inset-0.5 rounded-full bg-black"></div>
            <div className="relative flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-white">4.3</span>
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
          <CardTitle className="text-white">Performance Efficiency Overview</CardTitle>
          <CardDescription className="text-zinc-400">
            Assessment of resource allocation, operational performance, and technology efficiency
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
              <CardTitle className="text-white">Performance Efficiency Assessment</CardTitle>
              <CardDescription className="text-zinc-400">
                Overall findings from the performance efficiency evaluation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert className="bg-zinc-800 border-zinc-700">
                <Zap className="h-4 w-4" />
                <AlertTitle>Overall Score: 4.3/10</AlertTitle>
                <AlertDescription>
                  Melanin Kapital demonstrates below-standard performance efficiency with significant challenges in
                  operational execution, technology infrastructure, and achieving profitability.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Under-Resourced in Key Areas</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    The lack of a marketing budget and limited operational resources could hinder growth. The company
                    needs to allocate more resources toward customer acquisition, marketing, and scaling operational
                    capacity as it enters new markets.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Execution Challenges Due to Manual Processes</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    While Melanin Kapital has a lean and efficient operation in certain areas, the continued reliance on
                    manual processes will limit performance efficiency as the company scales. Enhancing automation and
                    technology infrastructure will be critical for long-term efficiency.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Financial Model Concerns</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    Errors in the financial model and speculative projections make it difficult to accurately assess the
                    company's path to profitability. While business development milestones are planned with partners,
                    the financial sustainability of the company remains uncertain.
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
                Areas where Melanin Kapital demonstrates strong performance efficiency
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
                    Efficient Cost Structure: The company has demonstrated a strong ability to manage costs with its
                    lean team and focused operational model.
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
                    Innovative Technology: The use of blockchain for carbon credit tracking provides a transparent and
                    secure solution that is ahead of the curve in terms of integrating technology into green finance.
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
                    Operational Performance: Despite challenges, the company has maintained a relatively low
                    non-performing loan ratio (3%) and is executing well in its core areas, such as SME lending and
                    green finance.
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
                Suggested improvements for performance efficiency
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
                    Increase Resource Allocation for Growth: Melanin Kapital should invest in marketing and customer
                    acquisition resources to support its expansion efforts. Allocating a dedicated marketing budget will
                    be key to driving brand awareness and customer engagement.
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
                    Automate Key Operational Processes: The company must prioritize automating key manual processes,
                    particularly in loan origination, KYC, and compliance to improve operational efficiency and prepare
                    for scaling.
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
                    Enhance Technology Infrastructure: To support growth and scalability, Melanin Kapital needs to
                    upgrade its technology infrastructure, ensuring that its backend systems can handle the increased
                    volume of transactions and regional complexities.
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
                    Improve Financial Modeling: The company should address errors in its financial model and develop
                    more realistic projections based on validated assumptions. This will help in making more informed
                    decisions about resource allocation and growth strategies.
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
