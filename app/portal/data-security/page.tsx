"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Database, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function SolutionComponentsPage() {
  const [expandedComponents, setExpandedComponents] = useState<Record<string, boolean>>({})

  const toggleComponent = (component: string) => {
    setExpandedComponents((prev) => ({
      ...prev,
      [component]: !prev[component],
    }))
  }

  const components = [
    {
      id: "software-stack",
      title: "Software Technology Stack",
      score: 5,
      summary: "Standard setup but needs multi-region deployment for global scale",
      description:
        "The software stack is relatively standard in its setup and configuration and in itself very scalable. The use of managed AWS services and containerization is a positive approach for growth. However, the company needs more than one availability zone due to the fact that they aim to serve many other countries. The current single-AZ deployment lacks the necessary redundancy and regional presence required for a truly global financial platform. Additionally, while the separate platform for blockchain integration is functional, better integration would improve operational efficiency.",
    },
    {
      id: "development-approach",
      title: "Development Approach",
      score: 4,
      summary: "CI/CD pipeline in place but documentation needs improvement",
      description:
        "A CI/CD pipeline is in place but manual processes still impact efficiency. The lack of comprehensive development documentation creates low visibility on the efficiency of the architecture and associated processes. As the company scales, this documentation gap could lead to challenges in onboarding new developers and maintaining consistent development practices. Improving documentation and further automating the development workflow would enhance the team's ability to deliver features rapidly and reliably.",
    },
    {
      id: "process-flows",
      title: "Process Flows",
      score: 3,
      summary: "Manual processes creating operational bottlenecks",
      description:
        "Many processes in the business are still manual or at different stages of maturity, which may hold back process optimization and create bottlenecks or dependencies, especially from external parties. The lack of standardized, automated workflows across departments impacts operational efficiency and scalability. As the company expands to serve multiple countries, these manual processes will become increasingly problematic, potentially limiting growth and increasing operational risks. Implementing workflow automation and standardizing processes should be a priority to support the company's ambitious expansion plans.",
    },
    {
      id: "data-security",
      title: "Data & Security",
      score: 4,
      summary: "Standard security measures but needs vulnerability testing",
      description:
        "The current security setup with IAM, TLS encryption, and basic routing security provides standard encryption protections. The manual minting process for carbon credits and the tokenization approach needs more robust security controls as the company handles more sensitive financial data. While financial institutions like Ecobank have excellent security controls, currently no vulnerability testing is done from Melanin's side, which represents a potential risk as the platform scales and handles more sensitive financial transactions.",
    },
    {
      id: "customer-experience",
      title: "Customer Experience & Applications",
      score: 3,
      summary: "Underdeveloped UI/UX limiting customer adoption",
      description:
        "The demo was quite light and the user interface seems underdeveloped especially for a company with such aggressive scaling prospects. Not all parts are live and basic banking function integrations are not yet active, which limits the current user experience. The absence of user-centric design and a robust UX shows a lack of readiness for broader customer adoption, which could significantly impact growth targets if not addressed promptly.",
    },
    {
      id: "integrations",
      title: "Integrations",
      score: 3,
      summary: "External dependencies may block progress",
      description:
        "Integration with external parties such as Ecobank can sometimes take long and these types of dependencies on external parties may be a progress blocker for Melanin. DFNS and Polygon are used for carbon credit tokenization, but minting and burning are manual processes with no automated handling for carbon credit transactions. It's worth noting that low volumes have been minted to date, with just a few transactions processed so far, which raises questions about the readiness for scale.",
    },
    {
      id: "financial-tech-fit",
      title: "Financial-Technological Model Fit",
      score: 5,
      summary: "Innovative but speculative model with external dependencies",
      description:
        "The blockchain-based carbon credit system is innovative but remains speculative and unvalidated at the moment. Manual processes are still a challenge to scalability and the lack of budget allocation to tech is questioned. Key dependencies on external partnerships are both a risk and strength as they have strong partnerships but integrations and interfacing still require maturation. Due to the model, Melanin cannot be both the authorizing entity and verification entity when it comes to issuing the tokens, which means the model targets clients that are already geared and at a certain level of readiness to transact the carbon credits, but Melanin cannot therefore facilitate or support client readiness in this regard.",
    },
  ]

  // Calculate the overall score
  const calculateOverallScore = () => {
    const totalScore = components.reduce((sum, component) => sum + component.score, 0)
    return (totalScore / components.length).toFixed(1)
  }

  const overallScore = calculateOverallScore()

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Solution Components</h1>
          <p className="text-zinc-400">Technology stack, development approach, and customer experience</p>
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

      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader>
          <CardTitle className="text-white">Solution Components Overview</CardTitle>
          <CardDescription className="text-zinc-400">
            Assessment of technology infrastructure and application design
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
              <CardTitle className="text-white">Solution Components Assessment</CardTitle>
              <CardDescription className="text-zinc-400">
                Overall findings from the solution components evaluation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert className="bg-zinc-800 border-zinc-700">
                <Database className="h-4 w-4" />
                <AlertTitle>Overall Score: {overallScore}/10</AlertTitle>
                <AlertDescription>
                  Melanin Kapital demonstrates an innovative financial-technological concept but faces significant
                  challenges in scalability, automation, and integration that must be addressed for sustainable growth.
                  The heavy reliance on manual processes and underdeveloped systems presents major risks to achieving
                  projected growth targets.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Innovative Financial Model</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    Melanin Kapital's integration of green finance with blockchain and carbon credits is a key
                    differentiator in the market. This model shows a strong fit between its technology stack and
                    financial products.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Technology Stack Needs Scaling</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    While the use of blockchain is innovative, the overall technology infrastructure is not yet fully
                    scalable for handling increased transaction volumes and expanding to new markets.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Manual Processes Impede Efficiency</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    The reliance on manual processes in areas such as data management and loan origination limits the
                    company's performance efficiency and security, creating risks as the company grows.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">UI/UX Improvements Needed</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    The user experience is functional but lacks the intuitive design expected from leading fintech
                    platforms. Enhancing UX/UI design will help improve customer engagement and adoption.
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
                Areas where Melanin Kapital demonstrates strong solution components
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
                    Innovative Product Offering: Melanin Kapital's green finance products, including carbon credits and
                    savings accounts, differentiate it in the market and cater to the growing sustainable finance
                    segment.
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
                    Strategic Partnerships: Collaborations with Ecobank and Visa provide valuable support for scaling
                    operations and expanding into new markets.
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
                    Blockchain Integration: The company's use of blockchain for carbon tracking offers transparency and
                    data integrity, making it well-suited for green finance.
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
                Suggested improvements for solution components
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
                    Scale Technology Infrastructure: Melanin Kapital should focus on improving its technology stack to
                    ensure it is scalable for handling higher transaction volumes and cross-border operations.
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
                    Enhance Customer Experience: Investing in UX/UI improvements will help improve the customer
                    experience and drive higher adoption rates, particularly as the company scales.
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
                    Automate Key Processes: The company should prioritize automating manual processes, especially in
                    loan origination, KYC, and compliance management, to improve efficiency and data security.
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
                    Expand Integrations: The company should increase its API integrations with other financial systems
                    and payment platforms to broaden its market reach and enhance operational capabilities.
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
                    Implement Vulnerability Testing: Melanin should conduct regular vulnerability testing with its
                    financial institution partners to ensure robust security across all integrated systems.
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
