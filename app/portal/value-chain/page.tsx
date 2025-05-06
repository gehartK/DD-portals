"use client"
import { useState } from "react"
import type React from "react"

import {
  ChevronRight,
  GitFork,
  Network,
  Users,
  Building,
  CreditCard,
  Leaf,
  LineChart,
  Scale,
  Server,
  Award,
} from "lucide-react"

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
      id: "melanin-kapital",
      name: "Melanin Kapital",
      role: "Provides green finance products (e.g., carbon-backed loans), focuses on financial inclusion, and integrates blockchain and cloud-based solutions.",
      valueExchange:
        "Creates financial products and services that target underserved markets, especially SMEs and women-owned businesses.",
      icon: <Building className="h-6 w-6" />,
      color: "bg-primary",
      position: { x: 50, y: 50 },
    },
    {
      id: "ecobank",
      name: "Ecobank",
      role: "Facilitates lending and disbursement of loans to end customers. Provides the infrastructure for transactional operations in multiple countries.",
      valueExchange:
        "Melanin Kapital benefits from Ecobank's pan-African presence, financial services infrastructure, and ability to process loans efficiently across the continent.",
      icon: <Building className="h-6 w-6" />,
      color: "bg-blue-500",
      position: { x: 25, y: 25 },
    },
    {
      id: "visa",
      name: "Visa",
      role: "Enables payment processing and provides digital financial infrastructure for the company's products.",
      valueExchange:
        "Visa helps Melanin Kapital reach customers in the payment ecosystem, providing access to card payments and digital transactions.",
      icon: <CreditCard className="h-6 w-6" />,
      color: "bg-blue-700",
      position: { x: 75, y: 25 },
    },
    {
      id: "customers",
      name: "Customers",
      role: "The end-users of Melanin Kapital's financial products and green finance services.",
      valueExchange:
        "Customers gain access to financial products that promote sustainability, economic growth, and financial inclusion.",
      icon: <Users className="h-6 w-6" />,
      color: "bg-green-500",
      position: { x: 85, y: 50 },
    },
    {
      id: "carbon-credit-providers",
      name: "Carbon Credit Providers",
      role: "Supply carbon credits to be integrated into Melanin Kapital's offerings, supporting the company's green finance solutions.",
      valueExchange:
        "Melanin Kapital creates green-backed financial products that help mitigate climate change while providing a market for carbon credits.",
      icon: <Leaf className="h-6 w-6" />,
      color: "bg-green-700",
      position: { x: 75, y: 75 },
    },
    {
      id: "investors",
      name: "Investors",
      role: "Provide capital to fund the company's operations and expansion.",
      valueExchange:
        "Investors gain financial returns and contribute to impact investing, supporting sustainable finance and green economy growth.",
      icon: <LineChart className="h-6 w-6" />,
      color: "bg-purple-600",
      position: { x: 15, y: 50 },
    },
    {
      id: "regulatory-bodies",
      name: "Regulatory Bodies",
      role: "Ensure Melanin Kapital adheres to financial regulations, legal requirements, and compliance standards in each country it operates.",
      valueExchange:
        "Regulatory bodies ensure trust in the financial market, promoting fair practices and legal operations across regions.",
      icon: <Scale className="h-6 w-6" />,
      color: "bg-red-600",
      position: { x: 25, y: 75 },
    },
    {
      id: "technology-partners",
      name: "Technology Partners",
      role: "Provide infrastructure (e.g., AWS, blockchain systems) for Melanin Kapital's platform to run efficiently and securely.",
      valueExchange:
        "Technology partners provide scalable infrastructure, ensuring reliable and secure operations, especially as Melanin Kapital scales.",
      icon: <Server className="h-6 w-6" />,
      color: "bg-zinc-600",
      position: { x: 50, y: 15 },
    },
    {
      id: "fellowships",
      name: "Fellowships and Programs",
      role: "Provide resources, training, and financial support to Melanin Kapital during its early stages.",
      valueExchange:
        "These programs offer financial backing, mentorship, and exposure to help Melanin Kapital develop its business model, improve its operations, and gain credibility in the market.",
      icon: <Award className="h-6 w-6" />,
      color: "bg-amber-600",
      position: { x: 50, y: 85 },
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
        <p className="text-muted-foreground">Analyzing how Melanin Kapital creates, delivers, and captures value</p>
      </div>

      <Tabs defaultValue="network" className="space-y-4">
        <TabsList>
          <TabsTrigger value="network">Value Network Analysis</TabsTrigger>
          <TabsTrigger value="nonlinear">Non-Linear Value Chain</TabsTrigger>
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
                Understanding the interactions between stakeholders in Melanin Kapital's ecosystem
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-zinc-400">
                A Value Network Analysis examines the interactions between stakeholders and value exchanges in the
                business ecosystem. Hover over or click on any stakeholder to explore their role and relationship with
                Melanin Kapital.
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
                  <h3 className="mb-1 text-sm font-medium">Strong Strategic Partnerships</h3>
                  <p className="text-xs text-zinc-400">
                    Access to extensive financial infrastructure through Ecobank and Visa, enabling rapid scaling and
                    integration of green finance products.
                  </p>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-3">
                  <h3 className="mb-1 text-sm font-medium">Impact-Focused Network</h3>
                  <p className="text-xs text-zinc-400">
                    Network built around shared values of financial inclusion and sustainability, positioning Melanin
                    Kapital as a socially responsible institution.
                  </p>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-3">
                  <h3 className="mb-1 text-sm font-medium">Technology & Scalability</h3>
                  <p className="text-xs text-zinc-400">
                    Blockchain and cloud infrastructure enable transparent, secure, and scalable financial products
                    across markets.
                  </p>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-3">
                  <h3 className="mb-1 text-sm font-medium">Access to Capital & Support</h3>
                  <p className="text-xs text-zinc-400">
                    Investors and fellowship programs provide funding, mentorship, and business development resources.
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
                    from: "Melanin Kapital",
                    to: "Ecobank",
                    exchange:
                      "Access to banking infrastructure for loan distribution and transaction processing across regions.",
                  },
                  {
                    from: "Melanin Kapital",
                    to: "Visa",
                    exchange: "Digital payment solutions enhancing accessibility and usability of financial products.",
                  },
                  {
                    from: "Melanin Kapital",
                    to: "Carbon Credit Providers",
                    exchange:
                      "Integration of carbon credits into financial products, creating market for sustainable practices.",
                  },
                  {
                    from: "Melanin Kapital",
                    to: "Customers",
                    exchange:
                      "Affordable loans, financial inclusion, and green finance products for SMEs and women-owned businesses.",
                  },
                  {
                    from: "Melanin Kapital",
                    to: "Investors",
                    exchange: "Financial returns and social impact through green finance initiatives.",
                  },
                  {
                    from: "Melanin Kapital",
                    to: "Regulatory Bodies",
                    exchange: "Legal compliance building trust in financial products across regions.",
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
                  <h3 className="mb-1 text-sm font-medium">External Partner Dependency</h3>
                  <p className="text-xs text-zinc-400">
                    Reliance on Ecobank and Visa creates vendor dependency risk that could disrupt service delivery.
                  </p>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-3">
                  <h3 className="mb-1 text-sm font-medium">Regulatory Complexity</h3>
                  <p className="text-xs text-zinc-400">
                    Expansion into new regions brings increased regulatory challenges and compliance requirements.
                  </p>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-3">
                  <h3 className="mb-1 text-sm font-medium">Funding Sustainability</h3>
                  <p className="text-xs text-zinc-400">
                    Dependence on fellowships and grants may not be sustainable as the company matures.
                  </p>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-3">
                  <h3 className="mb-1 text-sm font-medium">Technology Risks</h3>
                  <p className="text-xs text-zinc-400">
                    Blockchain and cloud technologies require ongoing maintenance and face potential scaling issues.
                  </p>
                </div>
                <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-3 col-span-2">
                  <h3 className="mb-1 text-sm font-medium">Customer Acquisition Limitations</h3>
                  <p className="text-xs text-zinc-400">
                    Reliance on strategic partnerships for customer acquisition limits independent growth potential.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="nonlinear" className="space-y-6">
          {/* Platform Model Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Network className="mr-2 h-5 w-5 text-primary" />
                Platform Model Overview
              </CardTitle>
              <CardDescription>A non-linear approach to value creation through a platform ecosystem</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-zinc-400">
                Unlike traditional linear value chains, Melanin Kapital operates as a platform that connects capital
                suppliers (corporates and institutions) with capital seekers (SMEs). This platform model creates value
                through facilitating transactions, reducing friction, and enabling financial inclusion that wouldn't be
                possible in traditional models.
              </p>

              {/* Platform Visualization */}
              <div className="relative mx-auto mb-6 h-[400px] w-full overflow-hidden rounded-lg bg-gradient-to-br from-zinc-900 to-zinc-800 p-4">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute left-0 top-0 h-40 w-40 rounded-full bg-primary/20 blur-3xl"></div>
                  <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-blue-500/10 blur-3xl"></div>
                </div>

                <svg width="100%" height="100%" viewBox="0 0 800 350" className="mx-auto">
                  {/* Background Elements */}
                  <rect x="0" y="0" width="800" height="350" fill="transparent" />

                  {/* Platform Core - Melanin Kapital */}
                  <circle cx="400" cy="175" r="70" fill="rgba(0, 230, 118, 0.2)" stroke="#00E676" strokeWidth="2" />
                  <text x="400" y="165" textAnchor="middle" fill="#FFFFFF" fontSize="16" fontWeight="bold">
                    Melanin Kapital
                  </text>
                  <text x="400" y="185" textAnchor="middle" fill="#CCCCCC" fontSize="12">
                    Platform Core
                  </text>

                  {/* Supply Side - Capital Providers */}
                  <circle cx="200" cy="100" r="50" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" strokeWidth="2" />
                  <text x="200" y="95" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">
                    Capital Providers
                  </text>
                  <text x="200" y="115" textAnchor="middle" fill="#CCCCCC" fontSize="10">
                    Corporates & Institutions
                  </text>

                  {/* Demand Side - SMEs */}
                  <circle cx="600" cy="100" r="50" fill="rgba(139, 92, 246, 0.2)" stroke="#8B5CF6" strokeWidth="2" />
                  <text x="600" y="95" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">
                    SMEs
                  </text>
                  <text x="600" y="115" textAnchor="middle" fill="#CCCCCC" fontSize="10">
                    Capital Seekers
                  </text>

                  {/* Banking Partners */}
                  <circle cx="200" cy="250" r="50" fill="rgba(16, 185, 129, 0.2)" stroke="#10B981" strokeWidth="2" />
                  <text x="200" y="245" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">
                    Banking Partners
                  </text>
                  <text x="200" y="265" textAnchor="middle" fill="#CCCCCC" fontSize="10">
                    Ecobank & Others
                  </text>

                  {/* Carbon Market */}
                  <circle cx="600" cy="250" r="50" fill="rgba(245, 158, 11, 0.2)" stroke="#F59E0B" strokeWidth="2" />
                  <text x="600" y="245" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">
                    Carbon Market
                  </text>
                  <text x="600" y="265" textAnchor="middle" fill="#CCCCCC" fontSize="10">
                    Credit Trading
                  </text>

                  {/* Flow Arrows */}
                  {/* Capital Providers to Platform */}
                  <path
                    d="M240 130 L350 160"
                    stroke="#3B82F6"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrowhead-nonlinear)"
                  />
                  <text x="290" y="135" textAnchor="middle" fill="#CCCCCC" fontSize="10">
                    Capital Supply
                  </text>

                  {/* Platform to SMEs */}
                  <path
                    d="M450 160 L560 130"
                    stroke="#00E676"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrowhead-nonlinear)"
                  />
                  <text x="510" y="135" textAnchor="middle" fill="#CCCCCC" fontSize="10">
                    Lending
                  </text>

                  {/* SMEs to Platform */}
                  <path
                    d="M560 130 L450 160"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrowhead-nonlinear)"
                    strokeDasharray="5,5"
                    opacity="0.7"
                  />
                  <text x="510" y="115" textAnchor="middle" fill="#CCCCCC" fontSize="10">
                    Repayments
                  </text>

                  {/* Platform to Capital Providers */}
                  <path
                    d="M350 160 L240 130"
                    stroke="#00E676"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrowhead-nonlinear)"
                    strokeDasharray="5,5"
                    opacity="0.7"
                  />
                  <text x="290" y="115" textAnchor="middle" fill="#CCCCCC" fontSize="10">
                    Returns
                  </text>

                  {/* Banking Partners to Platform */}
                  <path
                    d="M250 230 L350 190"
                    stroke="#10B981"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrowhead-nonlinear)"
                  />
                  <text x="290" y="220" textAnchor="middle" fill="#CCCCCC" fontSize="10">
                    Financial Infrastructure
                  </text>

                  {/* Platform to Carbon Market */}
                  <path
                    d="M450 190 L550 230"
                    stroke="#00E676"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrowhead-nonlinear)"
                  />
                  <text x="510" y="220" textAnchor="middle" fill="#CCCCCC" fontSize="10">
                    Carbon Credits
                  </text>

                  {/* Carbon Market to SMEs */}
                  <path
                    d="M580 220 L580 150"
                    stroke="#F59E0B"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrowhead-nonlinear)"
                  />
                  <text x="600" y="185" textAnchor="middle" fill="#CCCCCC" fontSize="10">
                    Certification
                  </text>

                  {/* SMEs to Carbon Market */}
                  <path
                    d="M620 150 L620 220"
                    stroke="#8B5CF6"
                    strokeWidth="2"
                    fill="none"
                    markerEnd="url(#arrowhead-nonlinear)"
                  />
                  <text x="640" y="185" textAnchor="middle" fill="#CCCCCC" fontSize="10">
                    Green Projects
                  </text>

                  {/* Arrowhead Marker */}
                  <defs>
                    <marker
                      id="arrowhead-nonlinear"
                      markerWidth="10"
                      markerHeight="7"
                      refX="9"
                      refY="3.5"
                      orient="auto"
                    >
                      <polygon points="0 0, 10 3.5, 0 7" fill="#CCCCCC" />
                    </marker>
                  </defs>
                </svg>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <GitFork className="mr-2 h-5 w-5 text-primary" />
                Value Delivery and Realization
              </CardTitle>
              <CardDescription>How value is delivered to customers and realized by the company</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-1">
                  <h3 className="text-sm font-medium">Value Delivery</h3>
                  <ul className="list-inside list-disc space-y-1 text-xs text-zinc-400">
                    <li>Integration of green finance with blockchain and cloud technology</li>
                    <li>Focus on financial inclusion and environmental sustainability</li>
                    <li>Carbon-backed loans and green savings accounts for SMEs</li>
                    <li>Strategic partnerships with Ecobank and Visa for market reach</li>
                  </ul>
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-medium">Value Realization</h3>
                  <ul className="list-inside list-disc space-y-1 text-xs text-zinc-400">
                    <li>Revenue through loan interest and carbon credit sales</li>
                    <li>Customer acquisition via impact-driven business model</li>
                    <li>Market expansion across Africa and potentially Europe</li>
                    <li>Operational efficiency through blockchain and cloud solutions</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Capital Supply */}
          <Card>
            <CardHeader>
              <CardTitle>Capital Supply & Demand Flow</CardTitle>
              <CardDescription>How capital flows through the platform ecosystem</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                    <h3 className="mb-2 text-sm font-medium text-primary">Supply: Capital Providers</h3>
                    <p className="text-sm text-zinc-400">
                      Corporates and financial institutions provide capital to Melanin Kapital's platform, which is then
                      pooled and allocated to SMEs. These providers include:
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-zinc-400 list-disc list-inside">
                      <li>Impact investors seeking both financial and environmental returns</li>
                      <li>Financial institutions looking to expand their green finance portfolios</li>
                      <li>Corporations with ESG mandates and carbon neutrality goals</li>
                      <li>Development finance institutions supporting financial inclusion</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                    <h3 className="mb-2 text-sm font-medium text-primary">Platform: Melanin Kapital</h3>
                    <p className="text-sm text-zinc-400">
                      As the platform core, Melanin Kapital performs several critical functions:
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-zinc-400 list-disc list-inside">
                      <li>Risk assessment and due diligence on SME borrowers</li>
                      <li>Capital allocation and loan structuring</li>
                      <li>Carbon credit verification and tokenization</li>
                      <li>Loan servicing and repayment collection</li>
                      <li>Returns distribution to capital providers</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                    <h3 className="mb-2 text-sm font-medium text-primary">Demand: SME Borrowers</h3>
                    <p className="text-sm text-zinc-400">
                      Small and medium enterprises seek capital for operations, inventory, and growth. The typical SME
                      profile includes:
                    </p>
                    <ul className="mt-2 space-y-1 text-sm text-zinc-400 list-disc list-inside">
                      <li>Average of 5 employees</li>
                      <li>Capital needs around $50,000</li>
                      <li>Focus on sustainable business practices</li>
                      <li>Often women-owned businesses</li>
                      <li>Operating in underserved markets across Africa</li>
                    </ul>
                  </div>

                  <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                    <h3 className="mb-2 text-sm font-medium text-primary">Return Flow: Value Capture</h3>
                    <p className="text-sm text-zinc-400">Capital returns to providers through multiple channels:</p>
                    <ul className="mt-2 space-y-1 text-sm text-zinc-400 list-disc list-inside">
                      <li>Loan repayments with interest (0.5% to 5% monthly)</li>
                      <li>Carbon credit trading revenues</li>
                      <li>Transaction fees from the platform</li>
                      <li>Environmental impact returns (carbon offsets)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Specialized Lending Models */}
          <Card>
            <CardHeader>
              <CardTitle>Specialized Lending Models</CardTitle>
              <CardDescription>Back-to-back lending and invoice discounting solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
                  <h3 className="mb-3 text-sm font-medium text-primary">Back-to-Back Lending</h3>
                  <p className="mb-3 text-sm text-zinc-400">
                    This model provides bridge capital for SMEs with existing contracts but insufficient working capital
                    to fulfill them.
                  </p>

                  <div className="space-y-3">
                    <div className="rounded-lg bg-zinc-800 p-3">
                      <h4 className="text-xs font-medium text-zinc-300">How It Works</h4>
                      <p className="mt-1 text-xs text-zinc-400">
                        An SME with a confirmed contract from a reputable buyer uses that contract as collateral to
                        secure a loan. The loan amount is typically 50-70% of the contract value, allowing the SME to
                        purchase inventory or cover operational costs to fulfill the contract.
                      </p>
                    </div>

                    <div className="rounded-lg bg-zinc-800 p-3">
                      <h4 className="text-xs font-medium text-zinc-300">Key Benefits</h4>
                      <ul className="mt-1 space-y-1 text-xs text-zinc-400 list-disc list-inside">
                        <li>Reduces risk through secured contracts</li>
                        <li>Enables SMEs to take on larger contracts</li>
                        <li>Short-term financing (typically 30-90 days)</li>
                        <li>Builds credit history for future financing</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
                  <h3 className="mb-3 text-sm font-medium text-primary">Invoice Discounting</h3>
                  <p className="mb-3 text-sm text-zinc-400">
                    This solution allows SMEs to access immediate capital by selling their accounts receivable
                    (invoices) at a discount.
                  </p>

                  <div className="space-y-3">
                    <div className="rounded-lg bg-zinc-800 p-3">
                      <h4 className="text-xs font-medium text-zinc-300">How It Works</h4>
                      <p className="mt-1 text-xs text-zinc-400">
                        After delivering goods or services, an SME can sell its invoice to Melanin Kapital at a discount
                        (typically 5-15% less than face value). The SME receives immediate payment, while Melanin
                        Kapital collects the full amount from the customer when the invoice is due.
                      </p>
                    </div>

                    <div className="rounded-lg bg-zinc-800 p-3">
                      <h4 className="text-xs font-medium text-zinc-300">Key Benefits</h4>
                      <ul className="mt-1 space-y-1 text-xs text-zinc-400 list-disc list-inside">
                        <li>Immediate access to working capital</li>
                        <li>No need to wait 30-90 days for payment</li>
                        <li>Improves cash flow predictability</li>
                        <li>No additional debt on balance sheet</li>
                        <li>Scales with business growth</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                <h3 className="mb-3 text-sm font-medium">Inventory Financing</h3>
                <p className="text-sm text-zinc-400">
                  For SMEs requiring short-term capital for inventory purchases, Melanin Kapital offers inventory
                  financing solutions. This is particularly valuable for businesses with seasonal inventory needs or
                  those looking to take advantage of bulk purchase discounts.
                </p>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  <div className="rounded-lg bg-zinc-800 p-3">
                    <h4 className="text-xs font-medium text-zinc-300">Loan Amount</h4>
                    <p className="mt-1 text-xs text-zinc-400">
                      Typically up to $50,000, based on inventory value and business health
                    </p>
                  </div>
                  <div className="rounded-lg bg-zinc-800 p-3">
                    <h4 className="text-xs font-medium text-zinc-300">Term Length</h4>
                    <p className="mt-1 text-xs text-zinc-400">
                      Short-term, usually 3-6 months to match inventory turnover cycle
                    </p>
                  </div>
                  <div className="rounded-lg bg-zinc-800 p-3">
                    <h4 className="text-xs font-medium text-zinc-300">Collateral</h4>
                    <p className="mt-1 text-xs text-zinc-400">
                      The inventory itself, plus carbon credits when applicable
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Platform Advantages */}
          <Card>
            <CardHeader>
              <CardTitle>Platform Model Advantages</CardTitle>
              <CardDescription>Benefits of the non-linear value chain approach</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                  <h3 className="mb-2 text-sm font-medium text-primary">Network Effects</h3>
                  <p className="text-sm text-zinc-400">
                    As more capital providers and SMEs join the platform, the value increases for all participants. More
                    capital providers mean more competitive rates for SMEs, while more SMEs mean better investment
                    opportunities for capital providers.
                  </p>
                </div>

                <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                  <h3 className="mb-2 text-sm font-medium text-primary">Reduced Transaction Costs</h3>
                  <p className="text-sm text-zinc-400">
                    By centralizing due diligence, loan servicing, and carbon credit verification, the platform
                    significantly reduces the transaction costs that would exist in traditional bilateral lending
                    relationships.
                  </p>
                </div>

                <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                  <h3 className="mb-2 text-sm font-medium text-primary">Scalability</h3>
                  <p className="text-sm text-zinc-400">
                    The platform model allows Melanin Kapital to scale across multiple markets without proportional
                    increases in operational costs. Technology infrastructure enables efficient expansion to new
                    regions.
                  </p>
                </div>

                <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                  <h3 className="mb-2 text-sm font-medium text-primary">Data Advantages</h3>
                  <p className="text-sm text-zinc-400">
                    Each transaction generates valuable data that improves risk assessment, pricing models, and customer
                    targeting. This creates a virtuous cycle of better lending decisions and reduced defaults.
                  </p>
                </div>

                <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                  <h3 className="mb-2 text-sm font-medium text-primary">Ecosystem Integration</h3>
                  <p className="text-sm text-zinc-400">
                    The platform can easily integrate with other financial services, carbon markets, and banking
                    partners, creating a comprehensive ecosystem for sustainable finance.
                  </p>
                </div>

                <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
                  <h3 className="mb-2 text-sm font-medium text-primary">Impact Amplification</h3>
                  <p className="text-sm text-zinc-400">
                    By connecting capital to underserved SMEs and linking financing to carbon credits, the platform
                    amplifies both financial inclusion and environmental impact beyond what traditional linear models
                    could achieve.
                  </p>
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
            <Button variant="outline" onClick={() => setStakeholderDialogOpen(false)}>
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
