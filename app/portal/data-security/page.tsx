"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Database } from "lucide-react"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from "recharts"

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
      score: 7,
      standard: 5.0,
      summary: "Modern, modular architecture with scalable design",
      description:
        "Emata employs a modern, modular architecture utilizing .NET Core, Blazor, REST APIs, and Azure ML for machine learning operations. The system is designed for scalability and maintainability, with microservices facilitating modular development and deployment. The tech stack supports integration with mobile money platforms and cooperative MIS systems, enabling seamless financial transactions and data exchange.",
    },
    {
      id: "development-approach",
      title: "Development Approach",
      score: 6.5,
      standard: 5.0,
      summary: "In-house development with proprietary tools but lacking SOPs",
      description:
        "Development is primarily in-house, allowing for rapid iteration and customization to meet specific market needs. The team has built proprietary tools such as the Data Cleaning App and Data Audit Service to manage data quality and integrity. However, the lack of standardized Standard Operating Procedures (SOPs) for informal staff and manual data entry processes indicates room for improvement in development practices and documentation.",
    },
    {
      id: "process-flows",
      title: "Process Flows",
      score: 6,
      standard: 5.0,
      summary: "Streamlined loan processing with manual data entry challenges",
      description:
        "Emata's loan processing workflow is streamlined, leveraging digital tools for loan application, approval, and disbursement. Despite this, approximately 30% of data entry remains manual, with no SOPs guiding informal staff, leading to inconsistencies and potential errors in data handling. The absence of automated retraining for machine learning models further suggests a need for enhanced process automation and standardization.",
    },
    {
      id: "data-security",
      title: "Data & Security",
      score: 6.5,
      standard: 5.0,
      summary: "Basic security measures with room for compliance enhancement",
      description:
        "Emata has implemented basic data security measures, including encryption and secure data storage practices. The company adheres to privacy policies and terms of use as outlined on their website. However, there is no mention of compliance with international data security standards such as ISO 27001 or SOC 2, indicating an area for potential enhancement in data governance and security protocols.",
    },
    {
      id: "customer-experience",
      title: "Customer Experience & Applications",
      score: 7.2,
      standard: 5.0,
      summary: "User-friendly WhatsApp interface with real-time tracking",
      description:
        "Emata offers a user-friendly interface accessible via WhatsApp, enabling farmers to apply for and manage loans through a familiar platform. The integration with cooperative MIS systems allows for real-time tracking of agricultural produce and loan repayments. While effective, the reliance on WhatsApp may limit the user experience for farmers without access to smartphones or stable internet connections.",
    },
    {
      id: "integrations",
      title: "Integrations",
      score: 7,
      standard: 5.0,
      summary: "Strong third-party integrations supporting core functionality",
      description:
        "Emata's platform integrates with various third-party systems, including mobile money services and cooperative management systems, facilitating seamless financial transactions and data sharing. These integrations enhance the platform's functionality and user experience, allowing for efficient loan processing and repayment tracking. The current integration framework supports scalability, but further expansion into additional services could strengthen the platform's ecosystem.",
    },
    {
      id: "financial-tech-fit",
      title: "Financial-Technology Model Fit",
      score: 7.5,
      standard: 5.0,
      summary: "Well-aligned fintech model for smallholder farmers",
      description:
        "Emata's fintech model is well-aligned with the needs of smallholder farmers, offering affordable, collateral-free loans tailored to agricultural cycles. The platform's use of alternative data for credit scoring and its integration with agricultural value chains demonstrate a strong fit between financial services and technology. The model's scalability and adaptability position Emata favorably for expansion into new markets and services.",
    },
  ]

  // Calculate the overall score
  const calculateOverallScore = () => {
    const totalScore = components.reduce((sum, component) => sum + component.score, 0)
    return (totalScore / components.length).toFixed(1)
  }

  const overallScore = calculateOverallScore()

  // Format data for radar chart
  const radarData = components.map((component) => ({
    subject: component.title.split(" ")[0], // Use first word for brevity in chart
    score: component.score,
    standard: component.standard,
    fullMark: 10,
  }))

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Left Card - Scores and Progress Bars */}
        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader>
            <CardTitle className="text-white">Component Scores</CardTitle>
            <CardDescription className="text-zinc-400">Quantitative assessment of each dimension</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Radar Chart */}
            <div className="mb-6">
              <div className="text-sm font-medium text-zinc-200 mb-2">Score Distribution vs. Industry Standard</div>
              <div className="h-[280px] w-full">
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

        {/* Right Card - Descriptions */}
        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader>
            <CardTitle className="text-white">Detailed Analysis</CardTitle>
            <CardDescription className="text-zinc-400">In-depth assessment of each component</CardDescription>
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
              <CardTitle className="text-white">Solution Components Assessment</CardTitle>
              <CardDescription className="text-zinc-400">
                Overall findings from the solution components evaluation
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
                      Emata has developed a robust technological foundation that effectively addresses the financial
                      needs of smallholder farmers.
                    </p>
                    <div className="mt-2 text-xs text-zinc-500 flex items-center">
                      <Database className="h-3 w-3 mr-1" />
                      <span>Assessment based on 7 key components</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Solid Technical Foundation</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    Emata's modern, modular architecture utilizing .NET Core, Blazor, REST APIs, and Azure ML provides a
                    strong foundation for scalability and maintainability, enabling efficient development and
                    deployment.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Manual Process Challenges</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    Despite technological strengths, approximately 30% of data entry remains manual with no standardized
                    SOPs, creating inconsistencies and potential errors that could impact operational efficiency.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">User Experience Innovation</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    The WhatsApp-based interface provides a familiar and accessible platform for farmers, though this
                    approach may limit access for those without smartphones or reliable internet connectivity.
                  </p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-zinc-200">Integration Ecosystem</h3>
                  <p className="mt-1 text-sm text-zinc-400">
                    Strategic integrations with mobile money services and cooperative management systems create a
                    cohesive ecosystem that facilitates seamless financial transactions and data sharing.
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
                Areas where Emata demonstrates strong solution components
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
                    Modular and scalable architecture supporting rapid development and deployment, with microservices
                    facilitating efficient system management.
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
                    Strategic integrations with financial and agricultural systems enhancing user experience and
                    creating a seamless ecosystem for loan processing and management.
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
                    Strong alignment between financial services and technological capabilities tailored to the specific
                    needs of smallholder farmers in agricultural value chains.
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
                    Develop and implement SOPs for all data entry processes, particularly for informal staff, to ensure
                    consistency and accuracy in data handling.
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
                    Automate machine learning model retraining and data validation processes to enhance efficiency and
                    scalability as transaction volumes increase.
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
                    Pursue compliance with international data security standards such as ISO 27001 or SOC 2 to
                    strengthen data governance and build trust with users and partners.
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
                    Diversify user access channels beyond WhatsApp to include USSD or SMS-based interfaces, increasing
                    accessibility for users with limited internet connectivity or smartphone access.
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
