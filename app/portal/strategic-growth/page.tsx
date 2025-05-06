"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { LineChart, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function StrategicGrowthPage() {
  const [expandedComponents, setExpandedComponents] = useState<Record<string, boolean>>({})

  const toggleComponent = (component: string) => {
    setExpandedComponents((prev) => ({
      ...prev,
      [component]: !prev[component],
    }))
  }

  const components = [
    {
      id: "business-model",
      title: "Business Model Scalability",
      score: 6,
      summary: "Scalable model leveraging partnerships with banks and corporates",
      description:
        "Melanin Kapital has a scalable model that leverages partnerships with banks and corporates to expand across African markets. The integration of carbon credits into financial products positions it well for green economy growth. However, the scalability of this model still depends on the company's ability to formalize infrastructure, automate core processes, and manage cross-border operations, which are currently still in development.",
    },
    {
      id: "market-opportunity",
      title: "Market Opportunity & Positioning",
      score: 7,
      summary: "Well-positioned in high-growth green finance and carbon markets",
      description:
        "The company is positioned in a high-growth segment—green finance and carbon markets—with alignment to global ESG trends. Its focus on African SMEs and carbon credit monetization is timely and differentiated. There's also early mention of expanding into Europe, particularly France, leveraging connections with climate-focused institutions, though not targeting the U.S.. This adds a unique growth vector, but geographic expansion will require strong localization capabilities and compliance readiness.",
    },
    {
      id: "competitive-advantage",
      title: "Competitive Advantage",
      score: 6,
      summary: "First-mover advantage with carbon-backed banking model in Africa",
      description:
        "The carbon-backed banking model is still relatively unique in Africa, giving Melanin Kapital a first-mover advantage. Partnerships with Ecobank and Visa create distribution leverage. However, defensibility will depend on their ability to build proprietary systems, scale internal tech capabilities, and keep ahead of emerging fintech competition. The lack of substantial IP or proprietary AI limits long-term competitive barriers.",
    },
    {
      id: "product-innovation",
      title: "Product/Service Innovation & Development",
      score: 4,
      summary: "Concerns about carbon credit volumes from SME projects",
      description:
        "While Melanin Kapital strategically targets medium enterprises with larger green projects and client bases, there are significant concerns that these SMEs' carbon credit generation may still be too small to provide sufficient volumes for the business to scale significantly. Melanin is aware of this challenge, which is partly why they plan to expand to European markets, but the concern remains valid. Currently, validation of business cases for lending clients is not performed—clients are selected based on creditworthiness and credit scores rather than the potential of their green projects to generate carbon credits. This creates a catch-22: if Melanin begins to validate business cases more thoroughly, it would limit the scalability of their model. So while the strategy to target larger SMEs with more clients (which would also benefit the carbon-backed banking cards and cashback model) is positive, concerns about the quality and volume of carbon credits generated, especially in Africa, remain significant.",
    },
    {
      id: "expansion",
      title: "Expansion & Market Penetration",
      score: 5,
      summary: "Plans for African and European expansion with limited go-to-market activities",
      description:
        "Melanin Kapital has expressed intent to expand across Africa and enter select European markets, but current go-to-market activities remain limited. The business lacks a dedicated marketing budget, and relies heavily on strategic partnerships for reach. While this is a lean model, it limits the company's ability to drive brand visibility, customer education, and direct market penetration. Without a stronger growth engine, geographic expansion may be slower than intended.",
    },
    {
      id: "customer-acquisition",
      title: "Customer Acquisition & Retention Strategy",
      score: 5,
      summary: "Relies on institutional partnerships and referral channels",
      description:
        "Customer acquisition relies primarily on institutional partnerships and referral channels, which helps control CAC but reduces brand control and direct customer engagement. The absence of a dedicated marketing function or budget weakens the ability to scale systematically. Retention strategies are not yet clearly defined, particularly as the product offering broadens to new customer segments.",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Strategic Growth</h1>
          <p className="text-zinc-400">Business development, marketing, and competitive positioning</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-zinc-800 to-zinc-900 shadow-lg">
            <div className="absolute inset-0.5 rounded-full bg-black"></div>
            <div className="relative flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-white">5.5</span>
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
          <CardTitle className="text-white">Strategic Growth Overview</CardTitle>
          <CardDescription className="text-zinc-400">
            Assessment of growth strategy and market positioning
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
              <CardTitle className="text-white">Strategic Growth Assessment</CardTitle>
              <CardDescription className="text-zinc-400">
                Overall findings from the strategic growth evaluation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert className="bg-zinc-800 border-zinc-700">
                <LineChart className="h-4 w-4" />
                <AlertTitle>Overall Score: 5.5/10</AlertTitle>
                <AlertDescription>
                  Melanin Kapital demonstrates good market positioning in green finance, but faces significant
                  challenges with product validation, carbon credit volumes, and go-to-market capabilities.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-zinc-200">High-Potential Market Positioning</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    Melanin Kapital is well-aligned with emerging global priorities in climate finance, and its product
                    model addresses critical gaps in SME financing and carbon monetization.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Carbon Credit Volume Concerns</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    There are significant concerns about whether SMEs in Africa can generate sufficient carbon credit
                    volumes to support Melanin's business model at scale. The lack of business case validation for green
                    projects compounds this risk.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Scalability Dependent on Execution</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    The model is scalable in theory, but growth will depend on formalizing operational processes,
                    securing regulatory entry into new markets, and building more scalable infrastructure.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Limited Go-to-Market Capability</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    The absence of a dedicated marketing function and reliance on partner-driven customer acquisition
                    creates a bottleneck for organic expansion. This will limit growth velocity unless addressed.
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
                Areas where Melanin Kapital demonstrates strong strategic growth capabilities
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
                    Unique Product Positioning: Integrating carbon credits into banking and lending solutions positions
                    Melanin Kapital in a niche market with limited direct competition.
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
                    Strategic Partnerships: Collaborations with Ecobank, Visa, and climate-focused institutions provide
                    strong leverage for distribution and credibility.
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
                    Innovation Roadmap: The company is actively designing new services such as green cards and
                    carbon-backed savings accounts, demonstrating a commitment to product evolution.
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
              <CardDescription className="text-zinc-400">Suggested improvements for strategic growth</CardDescription>
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
                    Develop a Go-to-Market Engine: Introduce a basic marketing function, even on a lean budget, to
                    support brand awareness, customer education, and lead generation. Relying exclusively on
                    partnerships may slow growth in new markets.
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
                    Implement Business Case Validation: Develop a streamlined process to validate the carbon credit
                    generation potential of green projects without significantly impacting scalability.
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
                    Clarify Expansion Priorities: Prioritize Africa-first growth, ensuring operational maturity in
                    current markets before expanding into Europe. Expansion plans should be sequenced based on
                    regulatory simplicity, partnership readiness, and customer demand.
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
                    Build Retention Capabilities: Define and implement customer engagement and retention strategies
                    early—particularly as new product lines (e.g., carbon credits, green cards) increase the diversity
                    of the user base.
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
                    Strengthen Competitive Moats: Explore ways to build proprietary data, develop unique credit scoring
                    for green loans, or create technical differentiators (e.g., a carbon ledger API) to deepen
                    defensibility over time.
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
