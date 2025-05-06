"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Brain, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function CriticalSkillsPage() {
  const [expandedComponents, setExpandedComponents] = useState<Record<string, boolean>>({})

  const toggleComponent = (component: string) => {
    setExpandedComponents((prev) => ({
      ...prev,
      [component]: !prev[component],
    }))
  }

  const components = [
    {
      id: "team-composition",
      title: "Team Composition & Expertise",
      score: 4.5,
      summary: "Strong leadership but critical skill gaps in specialized areas",
      description:
        "Melanin Kapital's leadership team has experience in sustainable finance and technology. The co-founders bring expertise, but the company remains in the early stages with a small team. There is a very strong need for an in-house legal compliance officer, risk management expert, carbon credit specialist, and another senior developer to support integrations especially. These skill gaps present significant challenges to the company's ability to scale effectively and manage the complex regulatory and technical aspects of their business model.",
    },
    {
      id: "management-practices",
      title: "Management Practices",
      score: 5,
      summary: "Functional practices with clear roles for co-founders",
      description:
        "The management practices are functional at the current stage with clear roles for the co-founders, ensuring operational alignment. However, as the company scales, more formalized processes will be necessary to handle the complexity of managing larger teams and expanding into new regions.",
    },
    {
      id: "talent-development",
      title: "Talent Development & Retention",
      score: 4,
      summary: "Limited talent development with need for structured retention strategies",
      description:
        "Talent development is currently limited, and retention strategies have not been fully established. A high turnover of junior staff took place following operational restructuring in 2023, and the staff component was reduced to half in 2024. Notably, all staff in the business are contractors and not full-time employees due to regulatory changes to employment laws in Kenya. This presents a significant risk to business continuity and raises concerns about staff potentially moonlighting. However, this decision was made in consultation with an HR consultant and with the staff themselves, with the primary goal of helping staff achieve better net income from their salary packages. This arrangement was transparently communicated to investors and the board, but remains a key area requiring attention as the company grows.",
    },
    {
      id: "organizational-structure",
      title: "Organizational Structure",
      score: 5,
      summary: "Flat structure works for current size but needs formalization",
      description:
        "The organization operates with a flat structure, which works for the current team size but will become a bottleneck as the company expands. Formalizing roles and leadership layers will be critical to manage growth effectively and ensure efficiency across regions. The company has established a theoretical ceiling of 50 employees with a ratio of 10 accounts to 1 manager, which provides some framework for future scaling but will need further refinement as operations expand.",
    },
    {
      id: "leadership-governance",
      title: "Leadership & Governance",
      score: 6.5,
      summary: "Experienced leadership team with strong market understanding",
      description:
        "The leadership team is experienced and has a strong understanding of both the business model and market. Melanin is currently utilizing tax and HR consultants to support their operations. It's worth noting that according to management members' LinkedIn profiles, most are reflected as having other businesses or employment in addition to Melanin Kapital, which raises concerns about divided attention and commitment to the company's growth trajectory.",
    },
  ]

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
              <span className="text-3xl font-bold text-white">5.0</span>
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
          <CardTitle className="text-white">Critical Skills Overview</CardTitle>
          <CardDescription className="text-zinc-400">
            Assessment of team composition and professional capacity
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
                    expandedComponents[component.id] ? "max-h-40" : "max-h-0 py-0 px-0",
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
              <CardTitle className="text-white">Critical Skills Assessment</CardTitle>
              <CardDescription className="text-zinc-400">
                Overall findings from the critical skills evaluation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert className="bg-zinc-800 border-zinc-700">
                <Brain className="h-4 w-4" />
                <AlertTitle>Overall Score: 5.0/10</AlertTitle>
                <AlertDescription>
                  Melanin Kapital demonstrates industry-standard critical skills with leadership expertise but needs
                  significant improvement in team composition, talent development, and organizational structure as it
                  scales.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Critical Skill Gaps</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    While Melanin Kapital has experienced leadership, there are significant skill gaps in specialized
                    areas including legal compliance, risk management, carbon credit expertise, and technical
                    integration capabilities that need to be addressed to support the company's growth ambitions.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Small Team and Limited Formalization</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    The company's team size is currently small, and while this allows for agility, it also requires more
                    formal HR policies and an expanded organizational structure to support growth.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Contractor-Based Workforce</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    All staff are currently engaged as contractors rather than full-time employees, a decision made in
                    response to regulatory changes in Kenya. While this arrangement provides staff with better net
                    income, it presents significant business continuity risks and potential divided loyalty concerns,
                    especially as the company aims to scale operations.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Governance and Formalization Needs</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    The governance and management practices are effective at the current stage but will need to evolve
                    to ensure the company can scale efficiently, particularly with regional leadership and formalized
                    governance structures.
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
                Areas where Melanin Kapital demonstrates strong critical skills
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
                    Experienced Leadership: The co-founders have strong industry experience in both finance and
                    technology, which positions the company well for long-term success.
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
                    Clear Vision: The leadership team has a clear vision for the business and its impact, with a solid
                    understanding of the green finance landscape.
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
                    Commitment to Diversity: The leadership shows a strong commitment to gender diversity, a key
                    strength in building a diverse and inclusive organizational culture.
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
                    Hire Key Specialists: Prioritize recruiting an in-house legal compliance officer, risk management
                    expert, carbon credit specialist, and senior developer to address critical skill gaps and support
                    business growth.
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
                    Convert Core Staff to Employees: Transition key staff members from contractor status to formal
                    employment contracts to mitigate business continuity risks, ensure loyalty, and create a stable
                    foundation for growth.
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
                    Formalize Talent Development: Implement structured talent development and retention strategies to
                    help grow and nurture a skilled workforce as the company scales.
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
                    Enhance Organizational Structure: Build a formal management structure to support regional operations
                    and better manage the increased complexity of cross-border expansion.
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
                    Address Moonlighting Concerns: Establish clear policies regarding outside business interests for
                    leadership team members to ensure full commitment to Melanin Kapital's growth and success.
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
