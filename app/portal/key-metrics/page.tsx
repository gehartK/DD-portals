"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { BarChart3, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function KeyMetricsPage() {
  const [expandedComponents, setExpandedComponents] = useState<Record<string, boolean>>({})

  const toggleComponent = (component: string) => {
    setExpandedComponents((prev) => ({
      ...prev,
      [component]: !prev[component],
    }))
  }

  const components = [
    {
      id: "operational-metrics",
      title: "Operational Metrics",
      score: 6,
      summary: "Solid loan portfolio with low non-performing loan ratio",
      description:
        "Melanin Kapital has achieved a gross loan portfolio of USD 365K and a projected pipeline of over USD 1M, indicating a solid start to scaling. The company has managed to maintain a low non-performing loan ratio of 3%, which is a positive sign of risk management. However, the ability to sustain this performance as the loan book grows and expands into new markets will require stronger operational controls and more robust processes to handle increased volume and complexity.",
    },
    {
      id: "financial-performance",
      title: "Financial Performance & Profitability",
      score: 4,
      summary: "Post-revenue but not yet profitable",
      description:
        "The company is post-revenue, with USD 176,000 YTD (2024), but it is still not profitable. Projections and documentation stating a 100% EBITDA margin and extremely high profit margins are questioned because some oversights were noted in the interviews, especially regarding scaling of operational and tech costs. A robust cost structuring exercise should be undertaken. The projections and assumptions provided, although comprehensive, seem very aggressive and optimistic.",
    },
    {
      id: "customer-acquisition",
      title: "Customer Acquisition & Retention Metrics",
      score: 5,
      summary: "9 active lending clients with focus on rural SMEs and women-owned businesses",
      description:
        "Melanin Kapital currently has 9 active lending clients with a total portfolio size of close to $300,000 and a net profit ratio of 5%. The focus on rural SMEs and women-owned businesses is a strong starting point. However, as the company scales, customer retention will be crucial, especially as the business moves beyond early adopters. The current strategy is largely based on partnerships, but the company will need to develop its own customer acquisition and retention strategies to ensure consistent growth in a competitive market.",
    },
    {
      id: "market-performance",
      title: "Market Performance & Growth Indicators",
      score: 4.5,
      summary: "Strategic partnerships with Ecobank and Visa for market expansion",
      description:
        "Melanin Kapital has established strategic partnerships with Ecobank and Visa, which will provide a strong foundation for market expansion across Africa. However, scaling in different regional markets will come with challenges in terms of local regulations, market demand, and competition. The carbon credit model and carbon-backed cards are still in their infancy and unvalidated. The company's growth trajectory is promising, but consistent and sustainable market performance will depend on overcoming these challenges as it scales.",
    },
    {
      id: "impact-metrics",
      title: "Impact Metrics",
      score: 7,
      summary: "Significant strides in financial inclusion and green finance",
      description:
        "The company is making significant strides in impact metrics, particularly in financial inclusion and green finance. Over 16,000 smallholder farmers and 10,000+ women-owned businesses have benefited from Melanin Kapital's products. The company's focus on carbon credits further enhances its environmental impact, positioning it as a leader in the green finance space. However, continued tracking and reporting of these metrics will be needed to maintain its leadership position in this area as it scales.",
    },
    {
      id: "unit-economics",
      title: "Unit Economics",
      score: 3,
      summary: "Undefined unit economics across business operations",
      description:
        "Unit economics across the business are not well defined. Management cannot state what the customer acquisition costs are or cost per client for onboarding. Tech-based unit economics are not defined. This lack of clarity makes it difficult to assess the true profitability of individual business lines and to make informed decisions about resource allocation and scaling strategies.",
    },
  ]

  // Calculate the overall score
  const overallScore = components.reduce((sum, component) => sum + component.score, 0) / components.length
  const roundedScore = Math.round(overallScore * 10) / 10

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Key Metrics</h1>
          <p className="text-zinc-400">Continuous monitoring and improvement of key business areas</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-lg">
            <div className="absolute inset-0.5 rounded-full bg-black"></div>
            <div className="relative flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-white">{roundedScore}</span>
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
          <CardTitle className="text-white">Key Metrics Overview</CardTitle>
          <CardDescription className="text-zinc-400">
            Assessment of performance tracking and business drivers
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
              <CardTitle className="text-white">Key Metrics Assessment</CardTitle>
              <CardDescription className="text-zinc-400">
                Overall findings from the key metrics evaluation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert className="bg-zinc-800 border-zinc-700">
                <BarChart3 className="h-4 w-4" />
                <AlertTitle>Overall Score: {roundedScore}/10</AlertTitle>
                <AlertDescription>
                  Melanin Kapital demonstrates early-stage growth in key metrics with strong impact performance, but
                  needs to focus on profitability, unit economics, and scaling its operations sustainably.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Early-Stage Growth</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    Melanin Kapital is showing early-stage growth in terms of loan performance and revenue generation.
                    However, the company is still in the early stages of building a sustainable, scalable model with
                    only 9 active lending clients.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Profitability & Financial Stability</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    While the company has started generating revenue, it has not yet reached profitability. The
                    projections appear overly optimistic, particularly regarding EBITDA margins and scaling costs. A
                    more realistic financial model is needed for sustainable growth.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Unit Economics Management</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    Management of unit economics is critical to ensure that the financial management of the platform and
                    business can be more robustly framed and to help manage tech-related costs effectively. Currently,
                    there is insufficient clarity on customer acquisition costs and tech-based unit economics.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Impact Metrics & Social Responsibility</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    The company is excelling in impact metrics, particularly in financial inclusion and green finance.
                    These areas set Melanin Kapital apart as a leader in impact-driven fintech.
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
                Areas where Melanin Kapital demonstrates strong key metrics
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
                    Strong Market Position: Melanin Kapital has established key partnerships with major players like
                    Ecobank and Visa, positioning it well for scalable growth in the African market.
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
                    Impressive Impact Metrics: The company is making significant strides in financial inclusion and
                    green finance, offering innovative solutions for underserved markets.
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
                    Operational Efficiency: Despite being early stage, the company has managed to maintain a reasonable
                    non-performing loan rate of 3%, which is a positive indicator of its operational competence.
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
                Suggested improvements for key metrics development
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
                    Develop Robust Unit Economics: Establish clear metrics for customer acquisition costs, cost per
                    client for onboarding, and tech-based unit economics to better understand profitability drivers and
                    make informed scaling decisions.
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
                    Revise Financial Projections: Conduct a robust cost structuring exercise to develop more realistic
                    financial projections that account for scaling operational and tech costs, providing a more accurate
                    picture of future profitability.
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
                    Enhance Customer Retention Strategies: As the company grows beyond its current 9 active lending
                    clients, it should develop stronger customer retention strategies, including loyalty programs or
                    personalized services, to keep its customer base engaged beyond the initial acquisition phase.
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
                    Validate Carbon Credit Model: Conduct market validation for the carbon credit model and
                    carbon-backed cards to ensure product-market fit before significant scaling, reducing the risk of
                    investing in unproven business lines.
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
                    Track and Report Impact Metrics: Continue to track and improve impact metrics, as these are a key
                    part of the company's value proposition and differentiation in the market. More frequent and
                    detailed reporting can strengthen the company's brand in the green finance space.
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
