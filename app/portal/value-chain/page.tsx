"use client"
import { useState } from "react"
import type React from "react"

import { ChevronRight, GitFork, Network, Users, Building, CreditCard, Scale, Server, Shield } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

// Define the activity types and their content
type ActivityType = "primary" | "supporting"
type ActivityContent = {
  title: string
  description: string
  value: string
}

// Define the stakeholder type for the value network
type Stakeholder = {
  id: string
  name: string
  role: string
  valueExchange: string
  icon: React.ReactNode
  color: string
  position: { x: number; y: number }
}

export default function ValueChainPage() {
  // State for tracking which activity is selected in the dialog
  const [selectedActivity, setSelectedActivity] = useState<ActivityContent | null>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  // State for tracking which stakeholder is selected in the network
  const [selectedStakeholder, setSelectedStakeholder] = useState<Stakeholder | null>(null)
  const [stakeholderDialogOpen, setStakeholderDialogOpen] = useState(false)

  // State for hover effects in the network visualization
  const [hoveredStakeholder, setHoveredStakeholder] = useState<string | null>(null)

  // Primary activities data
  const primaryActivities: ActivityContent[] = [
    {
      title: "Inbound Logistics",
      description:
        "Involves the acquisition of raw data for creating financial products, sourcing carbon credits, and integrating partners (such as Ecobank and Visa).",
      value:
        "Facilitates access to sustainable finance products, helping Melanin Kapital offer carbon-backed loans and other financial services.",
    },
    {
      title: "Operations",
      description:
        "Core operations include loan origination, credit assessment, carbon credit tracking, and financial service execution. This is powered by blockchain technology and cloud infrastructure.",
      value:
        "Melanin Kapital's operations allow for the efficient and transparent management of loans, carbon credits, and financial transactions. The company processes loan requests and integrates green finance solutions seamlessly into its offerings.",
    },
    {
      title: "Outbound Logistics",
      description:
        "Delivery of financial products (e.g., green loans, carbon-backed savings accounts) and carbon credits to customers via partnerships with banks and financial institutions.",
      value:
        "Ensures the distribution of innovative green finance products through Ecobank and Visa, expanding the reach to underserved African markets and increasing customer access to sustainable financing options.",
    },
    {
      title: "Marketing & Sales",
      description:
        "Customer acquisition is driven through strategic partnerships, direct marketing, and referrals. Social impact marketing is emphasized to engage potential customers focused on financial inclusion and sustainability.",
      value:
        "Increases awareness and engagement with Melanin Kapital's products, enhancing brand recognition as a leader in green finance and financial inclusion for SMEs.",
    },
    {
      title: "Service",
      description:
        "Includes customer support, account management, and helpdesk services for users engaging with green finance products, as well as support for carbon credit verification.",
      value:
        "Helps in maintaining customer satisfaction, loyalty, and ensuring the efficient use of financial products and services over time.",
    },
  ]

  // Supporting activities data
  const supportingActivities: ActivityContent[] = [
    {
      title: "Firm Infrastructure",
      description:
        "The management team, leadership, and organizational processes that govern strategy, regulatory compliance, legal framework, and financial oversight.",
      value:
        "Establishes the foundational governance and operational frameworks that ensure smooth operation across various markets, adhering to financial regulations and building trust with partners and investors.",
    },
    {
      title: "Human Resource Management",
      description:
        "The recruitment, training, and development of a skilled team focused on green finance, technology development, and customer support.",
      value:
        "Ensures the company has the talent needed to execute its business model, providing expertise in fintech, sustainability, and market expansion.",
    },
    {
      title: "Technology Development",
      description:
        "This includes the development of the blockchain technology, cloud infrastructure, and other digital platforms supporting carbon credit tracking, financial product management, and customer engagement.",
      value:
        "Provides a robust technology infrastructure that supports the delivery of financial services, increases operational efficiency, and enhances scalability as the company expands into new regions.",
    },
    {
      title: "Procurement",
      description:
        "The process of acquiring the necessary resources and technology (e.g., cloud services, blockchain platforms, financial APIs) needed to run operations efficiently.",
      value:
        "Helps secure the necessary tools and services for seamless product delivery, ensuring cost-effective operations and the ability to scale.",
    },
  ]

  // Stakeholders data for the value network
  const stakeholders: Stakeholder[] = [
    {
      id: "emata",
      name: "Emata",
      role: "Provides affordable digital loans to farmers, credit scoring technology, and loan origination platforms to agricultural partners.",
      valueExchange:
        "Delivers mobile-based credit products with clear repayment terms and receives loan repayments and behavioral data that feeds credit algorithms.",
      icon: <Building className="h-6 w-6" />,
      color: "bg-primary",
      position: { x: 50, y: 50 },
    },
    {
      id: "farmers",
      name: "Farmers",
      role: "End users of Emata's financial products who receive loans and repay through harvest proceeds.",
      valueExchange:
        "Receive affordable credit and provide repayment through harvest proceeds and behavioral data that improves credit algorithms.",
      icon: <Users className="h-6 w-6" />,
      color: "bg-green-500",
      position: { x: 85, y: 50 },
    },
    {
      id: "agri-partners",
      name: "Agri Partners",
      role: "Cooperatives, processors and buyers (e.g., UGACOF, Ndugu, Omia) that facilitate loan distribution and repayment collection.",
      valueExchange:
        "Provide access to farmer data, transaction execution, and often partial or full loan guarantees. Receive loan origination platforms and increased farmer loyalty.",
      icon: <Building className="h-6 w-6" />,
      color: "bg-blue-500",
      position: { x: 25, y: 25 },
    },
    {
      id: "agents",
      name: "Agents",
      role: "Field staff within agri partner organizations who handle farmer onboarding and loan request initiation.",
      valueExchange:
        "Provide farmer onboarding, data capture, and loan request initiation. Receive training, certification, and incentives for high recovery rates.",
      icon: <Users className="h-6 w-6" />,
      color: "bg-amber-600",
      position: { x: 75, y: 25 },
    },
    {
      id: "capital-providers",
      name: "Capital Providers",
      role: "Organizations (UGACOF, 3rd-party banks, donors) that provide liquidity for lending.",
      valueExchange:
        "Provide liquidity for lending, either through Emata's balance sheet or via enterprise/off-balance lending models.",
      icon: <CreditCard className="h-6 w-6" />,
      color: "bg-purple-600",
      position: { x: 15, y: 50 },
    },
    {
      id: "technology-platform",
      name: "Technology Platform",
      role: "Emata's digital infrastructure including MIS, CropMIS, and credit scoring algorithms.",
      valueExchange: "Enables loan origination, credit scoring, and repayment processing across the entire ecosystem.",
      icon: <Server className="h-6 w-6" />,
      color: "bg-zinc-600",
      position: { x: 50, y: 15 },
    },
    {
      id: "regulatory-bodies",
      name: "Regulatory Bodies",
      role: "Government entities that oversee financial services and agricultural sectors.",
      valueExchange:
        "Provide legal framework and oversight for lending operations, ensuring consumer protection and market stability.",
      icon: <Scale className="h-6 w-6" />,
      color: "bg-red-600",
      position: { x: 25, y: 75 },
    },
    {
      id: "insurance-providers",
      name: "Insurance Providers",
      role: "Organizations offering crop insurance products that complement Emata's loans.",
      valueExchange: "Provide risk mitigation for farmers and Emata through crop insurance products.",
      icon: <Shield className="h-6 w-6" />,
      color: "bg-blue-700",
      position: { x: 75, y: 75 },
    },
  ]

  // Function to handle activity click
  const handleActivityClick = (activity: ActivityContent) => {
    setSelectedActivity(activity)
    setDialogOpen(true)
  }

  // Function to handle stakeholder click
  const handleStakeholderClick = (stakeholder: Stakeholder) => {
    setSelectedStakeholder(stakeholder)
    setStakeholderDialogOpen(true)
  }

  // Remove the connection lines and related functions from the value network visualization

  // Improved function to calculate connection points between stakeholders
  // Determine which connections to highlight based on hovered stakeholder

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Value Chain Analysis</h1>
        <p className="text-muted-foreground">Analyzing how Emata creates, delivers, and captures value</p>
      </div>

      <Tabs defaultValue="network" className="space-y-4">
        <TabsList>
          <TabsTrigger value="network">Value Network Analysis</TabsTrigger>
          <TabsTrigger value="decomposition">Value Chain Decomposition</TabsTrigger>
        </TabsList>

        <TabsContent value="network" className="space-y-6">
          {/* Value Network Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Network className="mr-2 h-5 w-5 text-primary" />
                Value Network Analysis
              </CardTitle>
              <CardDescription>
                Understanding the interactions between stakeholders in Emata's ecosystem
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-zinc-400">
                A Value Network Analysis examines the interactions between stakeholders and value exchanges in the
                business ecosystem. Hover over or click on any stakeholder to explore their role and relationship with
                Emata.
              </p>

              {/* Enhanced Interactive Network Visualization */}
              <div className="relative mx-auto mb-4 h-[600px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-800 p-4">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-primary/20 blur-3xl"></div>
                  <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl"></div>
                </div>

                <div className="relative h-full w-full">
                  {/* Empty SVG container (keeping for layout purposes) */}
                  <svg className="absolute h-full w-full"></svg>

                  {/* Stakeholder nodes - Improved positioning and styling */}
                  {stakeholders.map((stakeholder, i) => (
                    <button
                      key={i}
                      onClick={() => handleStakeholderClick(stakeholder)}
                      onMouseEnter={() => setHoveredStakeholder(stakeholder.id)}
                      onMouseLeave={() => setHoveredStakeholder(null)}
                      className={`absolute flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full ${stakeholder.color} p-2 text-center text-xs font-medium text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background ${
                        hoveredStakeholder === stakeholder.id
                          ? "scale-110 ring-2 ring-white"
                          : hoveredStakeholder &&
                              hoveredStakeholder !== stakeholder.id &&
                              hoveredStakeholder !== "melanin-kapital"
                            ? "opacity-50"
                            : ""
                      }`}
                      style={{
                        left: `${stakeholder.position.x}%`,
                        top: `${stakeholder.position.y}%`,
                        zIndex: stakeholder.id === "melanin-kapital" ? 10 : 5,
                        boxShadow: stakeholder.id === "melanin-kapital" ? "0 0 30px rgba(255,255,255,0.2)" : "",
                      }}
                      aria-label={`View details about ${stakeholder.name}`}
                    >
                      {stakeholder.icon}
                      <span className="mt-1 text-[10px] font-medium">{stakeholder.name.split(" ")[0]}</span>

                      {/* Pulse effect for Melanin Kapital */}
                      {stakeholder.id === "melanin-kapital" && (
                        <span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-25"></span>
                      )}
                    </button>
                  ))}

                  {/* Show stakeholder name on hover - Improved positioning */}
                  {hoveredStakeholder && (
                    <div
                      className="absolute z-20 rounded bg-black/80 px-2 py-1 text-xs text-white"
                      style={{
                        left: `${stakeholders.find((s) => s.id === hoveredStakeholder)?.position.x}%`,
                        top: `${(stakeholders.find((s) => s.id === hoveredStakeholder)?.position.y || 0) - 10}%`,
                        transform: "translate(-50%, -100%)",
                      }}
                    >
                      {stakeholders.find((s) => s.id === hoveredStakeholder)?.name}
                    </div>
                  )}
                </div>
                <div className="absolute bottom-2 left-0 right-0 text-center">
                  <p className="text-xs text-muted-foreground">Hover over any stakeholder to see details</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Strengths of the Value Network */}
          <Card>
            <CardHeader>
              <CardTitle>Strengths of the Value Network</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-3">
                  <h3 className="mb-1 text-sm font-medium">Deep Ecosystem Integration</h3>
                  <p className="text-xs text-zinc-400">
                    Emata embeds directly into value chains via cooperatives, processors, and buyers, ensuring natural
                    repayment mechanisms and access to diversified data streams across multiple crops.
                  </p>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-3">
                  <h3 className="mb-1 text-sm font-medium">Shared Incentives & Risk Mitigation</h3>
                  <p className="text-xs text-zinc-400">
                    Many partners provide partial or full guarantees on loans, reducing Emata's capital risk while
                    benefiting from increased farmer loyalty and productivity.
                  </p>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-3">
                  <h3 className="mb-1 text-sm font-medium">Data-Driven Decisioning</h3>
                  <p className="text-xs text-zinc-400">
                    Emata uses historical delivery data, farmer profiles, and seasonal trends to generate granular,
                    farmer-specific credit limits that improve over time.
                  </p>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-3">
                  <h3 className="mb-1 text-sm font-medium">Scalable Tech Architecture</h3>
                  <p className="text-xs text-zinc-400">
                    Full-stack digital loan platform (CropMIS, CoopMIS) freely provided to partners, enhancing lock-in
                    and enabling rapid replication across regions and value chains.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Value Exchanges */}
          <Card>
            <CardHeader>
              <CardTitle>Key Value Exchanges</CardTitle>
              <CardDescription>How value flows between stakeholders in the network</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {[
                  {
                    from: "Emata",
                    to: "Farmers",
                    exchange:
                      "Affordable, mobile-based credit products with clear repayment terms, delivered via feature phone or through agents.",
                  },
                  {
                    from: "Farmers",
                    to: "Emata",
                    exchange:
                      "Repayment through harvest proceeds and behavioral data (repayment patterns, delivery performance).",
                  },
                  {
                    from: "Emata",
                    to: "Agri Partners",
                    exchange:
                      "Loan origination platform (MIS, CropMIS), agent training, credit scoring, and repayment processing.",
                  },
                  {
                    from: "Agri Partners",
                    to: "Emata",
                    exchange: "Access to farmer data, transaction execution, and partial or full loan guarantees.",
                  },
                  {
                    from: "Agri Partners",
                    to: "Farmers",
                    exchange:
                      "Channel for loan access, inputs (in-kind loans), guaranteed markets, and price transparency.",
                  },
                  {
                    from: "Farmers",
                    to: "Agri Partners",
                    exchange: "Crop delivery tied to loan repayment via agreed deductions.",
                  },
                ].map((exchange, i) => (
                  <div key={i} className="flex items-start space-x-2 rounded-md border border-zinc-800 bg-zinc-900 p-2">
                    <div className="flex-shrink-0">
                      <Badge variant="outline" className="bg-zinc-800">
                        {i + 1}
                      </Badge>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center text-xs">
                        <span className="font-medium">{exchange.from}</span>
                        <ChevronRight className="mx-1 h-3 w-3" />
                        <span className="font-medium">{exchange.to}</span>
                      </div>
                      <p className="text-xs text-zinc-400">{exchange.exchange}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Vulnerabilities & Challenges */}
          <Card>
            <CardHeader>
              <CardTitle>Vulnerabilities & Challenges</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-3">
                  <h3 className="mb-1 text-sm font-medium">Over-Reliance on Agri Partners</h3>
                  <p className="text-xs text-zinc-400">
                    Repayment assurance depends heavily on partners fulfilling delivery purchases and payment
                    deductions. Partner operational or liquidity issues expose Emata to repayment lapses.
                  </p>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-3">
                  <h3 className="mb-1 text-sm font-medium">Operational Quality Risk</h3>
                  <p className="text-xs text-zinc-400">
                    Agents are often field staff of agri partners. Misaligned incentives, high turnover, or
                    underperformance can impair loan onboarding quality and recovery outcomes.
                  </p>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-3">
                  <h3 className="mb-1 text-sm font-medium">Data Integrity Issues</h3>
                  <p className="text-xs text-zinc-400">
                    Credit scoring accuracy depends on fresh delivery data. If cooperatives don't digitize regularly,
                    credit limits may be outdated or invalid, increasing lending risk.
                  </p>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-3">
                  <h3 className="mb-1 text-sm font-medium">Fragmented Guarantee Models</h3>
                  <p className="text-xs text-zinc-400">
                    Guarantee structures vary by partner (25–100%). Some pilots operate without formalized risk
                    transfer, exposing Emata to default losses depending on partner enforcement.
                  </p>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-3 col-span-2">
                  <h3 className="mb-1 text-sm font-medium">Limited Enforcement Capacity</h3>
                  <p className="text-xs text-zinc-400">
                    Legal recourse in rural contexts is slow and costly. Recovery after default often becomes
                    impractical, making prevention through partner relationships critical.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Risk Transfer & Value Leverage Points</CardTitle>
              <CardDescription>Key mechanisms that strengthen or expose Emata's value network</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="pb-2 text-left text-sm font-medium">Flow</th>
                      <th className="pb-2 text-left text-sm font-medium">Strength</th>
                      <th className="pb-2 text-left text-sm font-medium">Vulnerability</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    <tr>
                      <td className="py-3 pr-4 text-sm">Repayment via Harvest Proceeds</td>
                      <td className="py-3 pr-4 text-sm text-zinc-400">Automates repayment, builds partner loyalty</td>
                      <td className="py-3 text-sm text-zinc-400">
                        Delayed payments or side-selling by farmers undermine repayment
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-sm">Loan Guarantees</td>
                      <td className="py-3 pr-4 text-sm text-zinc-400">Shifts risk to agri partner</td>
                      <td className="py-3 text-sm text-zinc-400">
                        Inconsistent enforcement, especially in non-commercial MOUs
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-sm">Agent Incentives</td>
                      <td className="py-3 pr-4 text-sm text-zinc-400">
                        Enhances repayment rates (e.g., 0.25% bonus for 95% recovery)
                      </td>
                      <td className="py-3 text-sm text-zinc-400">
                        May be insufficient to ensure quality or prevent fraud
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-sm">MIS Adoption</td>
                      <td className="py-3 pr-4 text-sm text-zinc-400">Drives data transparency & credit decisioning</td>
                      <td className="py-3 text-sm text-zinc-400">
                        Requires infrastructure and training; vulnerable to inconsistent updates
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4 text-sm">Capital Flow Models</td>
                      <td className="py-3 pr-4 text-sm text-zinc-400">
                        De-risks expansion through enterprise financing
                      </td>
                      <td className="py-3 text-sm text-zinc-400">
                        Enterprise financing still under development (UGACOF pilot in 2024)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="decomposition" className="space-y-6">
          {/* Platform Model Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Network className="mr-2 h-5 w-5 text-primary" />
                Model Overview - How Value Is Created
              </CardTitle>
              <CardDescription>How Emata creates value through digital agricultural finance</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-zinc-400">
                Emata creates value by digitally enabling access to credit for smallholder farmers, who are
                traditionally underserved by banks due to high transaction costs, lack of credit history, and rural
                remoteness. Emata embeds its lending platform within agricultural ecosystems — specifically via
                cooperatives, agri-processors, and buyer organizations — to ensure repayment is automated and traceable
                through crop deliveries.
              </p>

              <div className="mt-6 space-y-4">
                <h3 className="text-sm font-medium">The core value creation is driven by:</h3>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-3">
                    <p className="text-xs text-zinc-400">
                      Credit scoring algorithms using delivery and yield data from partners.
                    </p>
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-3">
                    <p className="text-xs text-zinc-400">
                      Digital infrastructure (MIS, CropMIS) enabling cooperatives to manage data and interactions
                      efficiently.
                    </p>
                  </div>
                  <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-3">
                    <p className="text-xs text-zinc-400">
                      Data aggregation from decentralized rural farmers to power underwriting decisions.
                    </p>
                  </div>
                </div>
                <p className="text-sm text-zinc-400">
                  This transforms an opaque, informal rural market into a creditworthy and trackable segment.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GitFork className="mr-2 h-5 w-5 text-primary" />
                Value Delivery & Realization
              </CardTitle>
              <CardDescription>How Emata extracts and delivers value</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="space-y-3">
                  <h3 className="text-sm font-medium">Value to Farmers</h3>
                  <ul className="list-inside list-disc space-y-1 text-xs text-zinc-400">
                    <li>Instant, collateral-free loans via feature phone/WhatsApp</li>
                    <li>Input finance and working capital in sync with planting or harvest cycles</li>
                    <li>Embedded financial literacy and simplified onboarding via trusted local agents</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-medium">Value to Agri-Partners</h3>
                  <ul className="list-inside list-disc space-y-1 text-xs text-zinc-400">
                    <li>Increased farmer loyalty (reducing side-selling)</li>
                    <li>Higher yield and supply chain stability due to financed inputs</li>
                    <li>Access to MIS tools that digitize and simplify cooperative operations</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h3 className="text-sm font-medium">Value to Emata</h3>
                  <ul className="list-inside list-disc space-y-1 text-xs text-zinc-400">
                    <li>Interest income from loans (2.5–4.25% monthly flat)</li>
                    <li>Platform fees from partners (e.g. enterprise/UGACOF model)</li>
                    <li>Low operating costs due to B2B2C structure and digital distribution</li>
                    <li>Improved repayment rates compared to banks, ensuring low portfolio-at-risk</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Capital Supply */}
          <Card>
            <CardHeader>
              <CardTitle>Supply and Demand Flow</CardTitle>
              <CardDescription>How capital and value flow through Emata's ecosystem</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="rounded-lg border border-zinc-800 bg-blue-900/20 p-4">
                    <h3 className="mb-2 text-sm font-medium text-blue-400">Supply Side</h3>
                    <ul className="mt-2 space-y-3 text-sm text-zinc-400 list-disc list-inside">
                      <li>
                        <span className="font-medium">Capital Providers:</span> Donors, Emata's own balance sheet,
                        enterprise partners (e.g. UGACOF) fund the loan pool
                      </li>
                      <li>
                        <span className="font-medium">Agri Partners:</span> Provide transaction data, farmer access, and
                        post-harvest payment control
                      </li>
                      <li>
                        <span className="font-medium">Emata Platform:</span> Orchestrates eligibility, scoring,
                        disbursement, and collections
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-lg border border-zinc-800 bg-green-900/20 p-4">
                    <h3 className="mb-2 text-sm font-medium text-green-400">Demand Side</h3>
                    <ul className="mt-2 space-y-3 text-sm text-zinc-400 list-disc list-inside">
                      <li>
                        <span className="font-medium">Farmers:</span> Demand credit for inputs and pre-harvest expenses
                      </li>
                      <li>
                        <span className="font-medium">Agents:</span> Act as facilitators for loan application and
                        field-level support
                      </li>
                    </ul>
                    <div className="mt-4 pt-3 border-t border-zinc-800">
                      <p className="text-sm text-zinc-400">
                        Repayment flows back via produce deliveries → processed by partners → repayments deducted →
                        funds routed to Emata
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 relative mx-auto h-[300px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-800 p-4">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-blue-500/20 blur-3xl"></div>
                  <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-green-500/10 blur-3xl"></div>
                </div>

                <svg width="100%" height="100%" viewBox="0 0 800 250" className="mx-auto">
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#CCCCCC" />
                    </marker>
                  </defs>

                  {/* Capital Providers */}
                  <rect
                    x="50"
                    y="50"
                    width="150"
                    height="60"
                    rx="5"
                    fill="rgba(59, 130, 246, 0.2)"
                    stroke="#3B82F6"
                    strokeWidth="2"
                  />
                  <text x="125" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">
                    Capital Providers
                  </text>

                  {/* Emata */}
                  <rect
                    x="325"
                    y="100"
                    width="150"
                    height="60"
                    rx="5"
                    fill="rgba(0, 230, 118, 0.2)"
                    stroke="#00E676"
                    strokeWidth="2"
                  />
                  <text x="400" y="135" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">
                    Emata
                  </text>

                  {/* Agri Partners */}
                  <rect
                    x="325"
                    y="50"
                    width="150"
                    height="60"
                    rx="5"
                    fill="rgba(59, 130, 246, 0.2)"
                    stroke="#3B82F6"
                    strokeWidth="2"
                  />
                  <text x="400" y="85" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">
                    Agri Partners
                  </text>

                  {/* Farmers */}
                  <rect
                    x="600"
                    y="100"
                    width="150"
                    height="60"
                    rx="5"
                    fill="rgba(16, 185, 129, 0.2)"
                    stroke="#10B981"
                    strokeWidth="2"
                  />
                  <text x="675" y="135" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">
                    Farmers
                  </text>

                  {/* Flow Arrows */}
                  {/* Capital to Emata */}
                  <path d="M200 80 L325 130" stroke="#3B82F6" strokeWidth="2" fill="none" markerEnd="url(#arrowhead)" />
                  <text x="250" y="95" textAnchor="middle" fill="#CCCCCC" fontSize="12">
                    Capital
                  </text>

                  {/* Agri Partners to Emata */}
                  <path
                    d="M400 110 L400 100"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                  />
                  <text x="420" y="105" textAnchor="middle" fill="#CCCCCC" fontSize="12">
                    Data
                  </text>

                  {/* Emata to Farmers */}
                  <path
                    d="M475 130 L600 130"
                    stroke="#00E676"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                  />
                  <text x="540" y="120" textAnchor="middle" fill="#CCCCCC" fontSize="12">
                    Loans
                  </text>

                  {/* Farmers to Emata */}
                  <path
                    d="M600 160 L475 160"
                    stroke="#10B981"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                    strokeDasharray="5,5"
                  />
                  <text x="540" y="175" textAnchor="middle" fill="#CCCCCC" fontSize="12">
                    Repayments
                  </text>

                  {/* Emata to Capital */}
                  <path
                    d="M325 160 L200 110"
                    stroke="#00E676"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrowhead)"
                    strokeDasharray="5,5"
                  />
                  <text x="250" y="150" textAnchor="middle" fill="#CCCCCC" fontSize="12">
                    Returns
                  </text>
                </svg>
              </div>
            </CardContent>
          </Card>

          {/* Specialized Lending Models */}
          <Card>
            <CardHeader>
              <CardTitle>Lending Models</CardTitle>
              <CardDescription>Emata's structured lending approaches</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
                  <h3 className="mb-3 text-sm font-medium text-primary">A. Balance Sheet Lending</h3>
                  <div className="space-y-3">
                    <ul className="list-inside list-disc space-y-2 text-xs text-zinc-400">
                      <li>Capital deployed from Emata's own fund base</li>
                      <li>Primarily used for dairy and small cooperatives</li>
                      <li>Emata bears the default risk (except where cooperatives provide partial/full guarantees)</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
                  <h3 className="mb-3 text-sm font-medium text-primary">B. Enterprise Lending (Off-Balance)</h3>
                  <div className="space-y-3">
                    <ul className="list-inside list-disc space-y-2 text-xs text-zinc-400">
                      <li>Capital provided by commercial partners (e.g. UGACOF)</li>
                      <li>Emata operates the tech, onboarding, scoring, and collections</li>
                      <li>Enterprise bears default risk</li>
                      <li>Fee-based revenue model for Emata</li>
                    </ul>
                  </div>
                </div>

                <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
                  <h3 className="mb-3 text-sm font-medium text-primary">C. Hybrid Partner-Guaranteed</h3>
                  <div className="space-y-3">
                    <ul className="list-inside list-disc space-y-2 text-xs text-zinc-400">
                      <li>Agri partner (e.g. Livara, Bunyonyi) provides 25%–100% loan guarantee</li>
                      <li>Used where Emata partially bears risk but can transfer it based on partner performance</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                <h3 className="mb-3 text-sm font-medium">Model Selection Criteria</h3>
                <p className="text-sm text-zinc-400">
                  Each lending model aligns with partner size, farmer volume, and repayment track record. As
                  relationships mature and data quality improves, Emata can shift partners between models to optimize
                  risk and returns.
                </p>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  <div className="rounded-lg bg-zinc-800 p-3">
                    <h4 className="text-xs font-medium text-zinc-300">Partner Size</h4>
                    <p className="mt-1 text-xs text-zinc-400">
                      Larger partners qualify for enterprise models; smaller ones start with balance sheet
                    </p>
                  </div>
                  <div className="rounded-lg bg-zinc-800 p-3">
                    <h4 className="text-xs font-medium text-zinc-300">Data Quality</h4>
                    <p className="mt-1 text-xs text-zinc-400">
                      Better data history enables more favorable guarantee terms
                    </p>
                  </div>
                  <div className="rounded-lg bg-zinc-800 p-3">
                    <h4 className="text-xs font-medium text-zinc-300">Repayment History</h4>
                    <p className="mt-1 text-xs text-zinc-400">
                      Partners with strong recovery rates qualify for reduced guarantees
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Platform Advantages */}
          <Card>
            <CardHeader>
              <CardTitle>Value Model Advantages & Disadvantages</CardTitle>
              <CardDescription>Strengths and vulnerabilities of Emata's approach</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-4 text-sm font-medium text-green-500">✅ Advantages</h3>
                  <div className="space-y-3">
                    <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-3">
                      <h4 className="mb-1 text-xs font-medium">Low CAC & Efficient Scaling</h4>
                      <p className="text-xs text-zinc-400">
                        Leverages partners' existing networks and trust to acquire and manage thousands of farmers.
                      </p>
                    </div>

                    <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-3">
                      <h4 className="mb-1 text-xs font-medium">High Repayment Confidence</h4>
                      <p className="text-xs text-zinc-400">
                        Embedded repayment via crop delivery reduces risk and bypasses traditional enforcement
                        challenges.
                      </p>
                    </div>

                    <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-3">
                      <h4 className="mb-1 text-xs font-medium">Data Flywheel</h4>
                      <p className="text-xs text-zinc-400">
                        Continuous collection of yield, pricing, and repayment behavior improves algorithm accuracy.
                      </p>
                    </div>

                    <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-3">
                      <h4 className="mb-1 text-xs font-medium">Multi-sector Application</h4>
                      <p className="text-xs text-zinc-400">
                        Adaptable across crops (dairy, coffee, cocoa, potatoes) and geographies (Uganda, future East
                        Africa).
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-4 text-sm font-medium text-amber-500">⚠️ Disadvantages / Vulnerabilities</h3>
                  <div className="space-y-3">
                    <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-3">
                      <h4 className="mb-1 text-xs font-medium">Partner Dependency</h4>
                      <p className="text-xs text-zinc-400">
                        Operational risk if a cooperative fails to perform or withholds repayments.
                      </p>
                    </div>

                    <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-3">
                      <h4 className="mb-1 text-xs font-medium">Data Gaps & Sync Delays</h4>
                      <p className="text-xs text-zinc-400">
                        MIS dependency means poor data updates can lead to bad scoring decisions.
                      </p>
                    </div>

                    <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-3">
                      <h4 className="mb-1 text-xs font-medium">Agent Misalignment</h4>
                      <p className="text-xs text-zinc-400">
                        Field agents are not direct Emata staff, creating quality variance in onboarding and
                        collections.
                      </p>
                    </div>

                    <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-3">
                      <h4 className="mb-1 text-xs font-medium">Variable Guarantee Models</h4>
                      <p className="text-xs text-zinc-400">
                        Inconsistent risk mitigation depending on partner strength.
                      </p>
                    </div>
                    <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-3">
                      <h4 className="mb-1 text-xs font-medium">Product-Market Fit Challenges</h4>
                      <p className="text-xs text-zinc-400">
                        Finding product market fit in developing countries with sensible unit economics remains
                        challenging due to income constraints and infrastructure limitations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Activity Detail Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{selectedActivity?.title}</DialogTitle>
            <DialogDescription>Value chain activity details</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <h4 className="text-sm font-medium">Description</h4>
              <p className="text-sm text-muted-foreground">{selectedActivity?.description}</p>
            </div>
            <Separator />
            <div>
              <h4 className="text-sm font-medium">
                {selectedActivity?.title?.includes("Firm") ||
                selectedActivity?.title?.includes("Human") ||
                selectedActivity?.title?.includes("Technology") ||
                selectedActivity?.title?.includes("Procurement")
                  ? "Value Delivered"
                  : "Value Created"}
              </h4>
              <p className="text-sm text-muted-foreground">{selectedActivity?.value}</p>
            </div>
          </div>
          <div className="flex justify-end">
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Stakeholder Detail Dialog */}
      <Dialog open={stakeholderDialogOpen} onOpenChange={setStakeholderDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center">
              <div
                className={`mr-2 flex h-8 w-8 items-center justify-center rounded-full ${selectedStakeholder?.color}`}
              >
                {selectedStakeholder?.icon}
              </div>
              {selectedStakeholder?.name}
            </DialogTitle>
            <DialogDescription>Stakeholder details</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <h4 className="text-sm font-medium">Role</h4>
              <p className="text-sm text-muted-foreground">{selectedStakeholder?.role}</p>
            </div>
            <Separator />
            <div>
              <h4 className="text-sm font-medium">Value Exchange</h4>
              <p className="text-sm text-muted-foreground">{selectedStakeholder?.valueExchange}</p>
            </div>
          </div>
          <div className="flex justify-end">
            <Button variant="outline" onClick={() => setDialogOpen(false)}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
