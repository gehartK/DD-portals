"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Server,
  Shield,
  Code,
  Database,
  Link,
  CheckCircle,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Cloud,
  BarChart,
  HardDrive,
  Building,
  ArrowRight,
  Cpu,
  Globe,
  Layers,
  Monitor,
  MessageSquare,
  Brain,
  FileText,
  Key,
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function TechnologiesPage() {
  const [expandedSections, setExpandedSections] = useState({
    infrastructure: true,
    backend: false,
    frontend: false,
    ai: false,
    database: false,
    integration: false,
  })

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">Technology Stack</h1>
        <p className="text-zinc-400">Overview of the technologies powering Emata's platform</p>
      </div>

      {/* Tech Stack Overview */}
      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader>
          <CardTitle className="text-white">Tech Stack Overview</CardTitle>
          <CardDescription>Key components and their relationships</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="relative h-[400px] w-full overflow-hidden bg-zinc-900 p-4">
            <svg width="100%" height="100%" viewBox="0 0 800 350" className="mx-auto">
              {/* Background Elements */}
              <rect x="0" y="0" width="800" height="350" fill="transparent" />

              {/* Infrastructure Layer */}
              <rect
                x="100"
                y="280"
                width="600"
                height="50"
                rx="5"
                fill="rgba(59, 130, 246, 0.2)"
                stroke="#3B82F6"
                strokeWidth="2"
              />
              <text x="400" y="310" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">
                AWS & Azure Infrastructure (EC2, S3, Kubernetes, Azure ML)
              </text>

              {/* Security Layer */}
              <rect
                x="120"
                y="220"
                width="560"
                height="40"
                rx="5"
                fill="rgba(139, 92, 246, 0.2)"
                stroke="#8B5CF6"
                strokeWidth="2"
              />
              <text x="400" y="245" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">
                Security (VPN, VPC, Keycloak)
              </text>

              {/* Backend Layer */}
              <rect
                x="140"
                y="160"
                width="520"
                height="40"
                rx="5"
                fill="rgba(16, 185, 129, 0.2)"
                stroke="#10B981"
                strokeWidth="2"
              />
              <text x="400" y="185" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">
                Backend (C#, ASP.NET Core, Microservices)
              </text>

              {/* Database Layer */}
              <rect
                x="160"
                y="100"
                width="200"
                height="40"
                rx="5"
                fill="rgba(245, 158, 11, 0.2)"
                stroke="#F59E0B"
                strokeWidth="2"
              />
              <text x="260" y="125" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">
                Database (PostgreSQL, SQLite)
              </text>

              {/* AI Layer */}
              <rect
                x="440"
                y="100"
                width="200"
                height="40"
                rx="5"
                fill="rgba(236, 72, 153, 0.2)"
                stroke="#EC4899"
                strokeWidth="2"
              />
              <text x="540" y="125" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">
                AI & Analytics (Azure ML, Python)
              </text>

              {/* Frontend Layer */}
              <rect
                x="300"
                y="40"
                width="200"
                height="40"
                rx="5"
                fill="rgba(0, 230, 118, 0.2)"
                stroke="#00E676"
                strokeWidth="2"
              />
              <text x="400" y="65" textAnchor="middle" fill="#FFFFFF" fontSize="14" fontWeight="bold">
                Frontend (Blazor, MAUI, WhatsApp)
              </text>

              {/* Connecting Lines */}
              <line x1="260" y1="140" x2="260" y2="160" stroke="#CCCCCC" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="540" y1="140" x2="540" y2="160" stroke="#CCCCCC" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="400" y1="80" x2="400" y2="160" stroke="#CCCCCC" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="400" y1="200" x2="400" y2="220" stroke="#CCCCCC" strokeWidth="2" strokeDasharray="5,5" />
              <line x1="400" y1="260" x2="400" y2="280" stroke="#CCCCCC" strokeWidth="2" strokeDasharray="5,5" />
            </svg>
          </div>
        </CardContent>
      </Card>

      {/* Infrastructure */}
      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader className="cursor-pointer" onClick={() => toggleSection("infrastructure")}>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Server className="mr-2 h-5 w-5 text-blue-500" />
              Infrastructure
            </div>
            {expandedSections.infrastructure ? (
              <ChevronUp className="h-5 w-5 text-zinc-400" />
            ) : (
              <ChevronDown className="h-5 w-5 text-zinc-400" />
            )}
          </CardTitle>
          <CardDescription>Cloud Hosting and Network Security</CardDescription>
        </CardHeader>
        <CardContent
          className={cn(
            "grid gap-4 overflow-hidden transition-all duration-300",
            expandedSections.infrastructure ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Card className="border-zinc-800 bg-zinc-800/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">
                    <div className="flex items-center">
                      <Cloud className="mr-2 h-4 w-4 text-blue-500" />
                      Cloud Hosting
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-zinc-400">
                    <strong>Primary Cloud:</strong> AWS (Amazon Web Services)
                  </p>
                  <p className="mt-2 text-xs text-zinc-400">
                    Services hosted using EC2 (compute), S3 (storage), Kubernetes (orchestration).
                  </p>
                  <p className="mt-2 text-xs text-zinc-400">
                    <strong>AI/ML Infrastructure:</strong> Azure
                  </p>
                  <p className="mt-2 text-xs text-zinc-400">
                    Azure ML Studio, Key Vault, Application Insights, Azure Container Registry, and storage accounts
                    used by the Data Science team.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-zinc-700 text-xs">
                      AWS
                    </Badge>
                    <Badge variant="outline" className="bg-zinc-700 text-xs">
                      EC2
                    </Badge>
                    <Badge variant="outline" className="bg-zinc-700 text-xs">
                      S3
                    </Badge>
                    <Badge variant="outline" className="bg-zinc-700 text-xs">
                      Kubernetes
                    </Badge>
                    <Badge variant="outline" className="bg-zinc-700 text-xs">
                      Azure
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-zinc-800 bg-zinc-800/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">
                    <div className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-blue-500" />
                      Network Security
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-zinc-400">
                    VPN-based access control for production applications and databases.
                  </p>
                  <p className="mt-2 text-xs text-zinc-400">
                    Databases and services behind VPCs; selective VPN required for admin-level access.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-zinc-700 text-xs">
                      VPN
                    </Badge>
                    <Badge variant="outline" className="bg-zinc-700 text-xs">
                      VPC
                    </Badge>
                    <Badge variant="outline" className="bg-zinc-700 text-xs">
                      Access Control
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Backend */}
      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader className="cursor-pointer" onClick={() => toggleSection("backend")}>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Cpu className="mr-2 h-5 w-5 text-green-500" />
              Backend
            </div>
            {expandedSections.backend ? (
              <ChevronUp className="h-5 w-5 text-zinc-400" />
            ) : (
              <ChevronDown className="h-5 w-5 text-zinc-400" />
            )}
          </CardTitle>
          <CardDescription>Programming Languages, Frameworks, and Microservices Architecture</CardDescription>
        </CardHeader>
        <CardContent
          className={cn(
            "grid gap-4 overflow-hidden transition-all duration-300",
            expandedSections.backend ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Card className="border-zinc-800 bg-zinc-800/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">
                    <div className="flex items-center">
                      <Code className="mr-2 h-4 w-4 text-green-500" />
                      Programming & Frameworks
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-zinc-400">
                    <strong>Programming Language:</strong> C#
                  </p>
                  <p className="mt-2 text-xs text-zinc-400">
                    <strong>Frameworks:</strong> ASP.NET Core (.NET 8), RESTful APIs
                  </p>
                  <p className="mt-2 text-xs text-zinc-400">
                    <strong>Workflow Orchestration:</strong> Conductor OSS
                  </p>
                  <p className="mt-2 text-xs text-zinc-400">
                    <strong>Background Processing:</strong> Hangfire
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-zinc-700 text-xs">
                      C#
                    </Badge>
                    <Badge variant="outline" className="bg-zinc-700 text-xs">
                      ASP.NET Core
                    </Badge>
                    <Badge variant="outline" className="bg-zinc-700 text-xs">
                      .NET 8
                    </Badge>
                    <Badge variant="outline" className="bg-zinc-700 text-xs">
                      RESTful APIs
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-zinc-800 bg-zinc-800/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">
                    <div className="flex items-center">
                      <Layers className="mr-2 h-4 w-4 text-green-500" />
                      Microservices Architecture
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-zinc-400">Services include:</p>
                  <ul className="mt-2 list-disc pl-4 text-xs text-zinc-400">
                    <li>BackOffice API</li>
                    <li>Sync Service</li>
                    <li>LoanBook API</li>
                    <li>Notification API</li>
                    <li>Ledger API</li>
                    <li>Payments API</li>
                    <li>Auth API</li>
                  </ul>
                  <p className="mt-2 text-xs text-zinc-400">
                    Each service is modular and designed for reuse across contexts (e.g., dairy, crop loans, trader
                    finance).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Frontend & Applications */}
      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader className="cursor-pointer" onClick={() => toggleSection("frontend")}>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Monitor className="mr-2 h-5 w-5 text-green-400" />
              Frontend & Applications
            </div>
            {expandedSections.frontend ? (
              <ChevronUp className="h-5 w-5 text-zinc-400" />
            ) : (
              <ChevronDown className="h-5 w-5 text-zinc-400" />
            )}
          </CardTitle>
          <CardDescription>User Interfaces and Applications</CardDescription>
        </CardHeader>
        <CardContent
          className={cn(
            "grid gap-4 overflow-hidden transition-all duration-300",
            expandedSections.frontend ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Card className="border-zinc-800 bg-zinc-800/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">
                    <div className="flex items-center">
                      <Globe className="mr-2 h-4 w-4 text-green-400" />
                      Core Interfaces
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-zinc-400">
                    <strong>Core Interface Framework:</strong> Blazor WebAssembly (SPA)
                  </p>
                  <p className="mt-2 text-xs text-zinc-400">
                    <strong>Desktop Interface:</strong> .NET MAUI (used for offline CoopMIS deployments)
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-zinc-700 text-xs">
                      Blazor WebAssembly
                    </Badge>
                    <Badge variant="outline" className="bg-zinc-700 text-xs">
                      .NET MAUI
                    </Badge>
                    <Badge variant="outline" className="bg-zinc-700 text-xs">
                      SPA
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-zinc-800 bg-zinc-800/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">
                    <div className="flex items-center">
                      <MessageSquare className="mr-2 h-4 w-4 text-green-400" />
                      Applications & Chatbot
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-zinc-400">
                    <strong>Internal Tools:</strong>
                  </p>
                  <ul className="mt-1 list-disc pl-4 text-xs text-zinc-400">
                    <li>BackOffice: Loan configuration, partner management, and credit limit loading</li>
                    <li>LoanBook: Ledger of loan disbursements and repayments</li>
                    <li>Notification & Payment APIs: Manages SMS, email, and mobile money interactions</li>
                  </ul>
                  <p className="mt-2 text-xs text-zinc-400">
                    <strong>Chatbot:</strong> WhatsApp chatbot built on Meta's Cloud API, used for:
                  </p>
                  <ul className="mt-1 list-disc pl-4 text-xs text-zinc-400">
                    <li>Loan requests</li>
                    <li>Farmer credit limit lookups</li>
                    <li>Repayment tracking</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI, Data & Analytics */}
      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader className="cursor-pointer" onClick={() => toggleSection("ai")}>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Brain className="mr-2 h-5 w-5 text-pink-500" />
              AI, Data & Analytics
            </div>
            {expandedSections.ai ? (
              <ChevronUp className="h-5 w-5 text-zinc-400" />
            ) : (
              <ChevronDown className="h-5 w-5 text-zinc-400" />
            )}
          </CardTitle>
          <CardDescription>Machine Learning Tools and Capabilities</CardDescription>
        </CardHeader>
        <CardContent
          className={cn(
            "grid gap-4 overflow-hidden transition-all duration-300",
            expandedSections.ai ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Card className="border-zinc-800 bg-zinc-800/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">
                    <div className="flex items-center">
                      <BarChart className="mr-2 h-4 w-4 text-pink-500" />
                      ML Tooling & Stack
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-zinc-400">
                    <strong>Languages:</strong> Python-based modeling
                  </p>
                  <p className="mt-2 text-xs text-zinc-400">
                    <strong>Azure ML Stack:</strong>
                  </p>
                  <ul className="mt-1 list-disc pl-4 text-xs text-zinc-400">
                    <li>Azure ML Workspaces, Application Insights, Log Analytics</li>
                    <li>Feature store, MLflow for tracking, model registry, scheduled pipelines</li>
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-zinc-700 text-xs">
                      Python
                    </Badge>
                    <Badge variant="outline" className="bg-zinc-700 text-xs">
                      Azure ML
                    </Badge>
                    <Badge variant="outline" className="bg-zinc-700 text-xs">
                      MLflow
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-zinc-800 bg-zinc-800/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">
                    <div className="flex items-center">
                      <FileText className="mr-2 h-4 w-4 text-pink-500" />
                      Capabilities & Solutions
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-zinc-400">
                    <strong>Core Capabilities:</strong>
                  </p>
                  <ul className="mt-1 list-disc pl-4 text-xs text-zinc-400">
                    <li>Time-series forecasting (milk and crop delivery predictions)</li>
                    <li>Recommender engines (marketing + credit improvement)</li>
                    <li>Risk analytics (SMAPE, ROI simulation)</li>
                    <li>Portfolio ROI simulators and credit limit estimators</li>
                  </ul>
                  <p className="mt-2 text-xs text-zinc-400">
                    <strong>Custom Solutions:</strong>
                  </p>
                  <ul className="mt-1 list-disc pl-4 text-xs text-zinc-400">
                    <li>Data Cleaning App (deduplication of farmer profiles)</li>
                    <li>Credit Score Update API</li>
                    <li>Data Audit System (pre-checks on MIS sync vs. AI models)</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Databases & Persistence */}
      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader className="cursor-pointer" onClick={() => toggleSection("database")}>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Database className="mr-2 h-5 w-5 text-yellow-500" />
              Databases & Persistence
            </div>
            {expandedSections.database ? (
              <ChevronUp className="h-5 w-5 text-zinc-400" />
            ) : (
              <ChevronDown className="h-5 w-5 text-zinc-400" />
            )}
          </CardTitle>
          <CardDescription>Storage Solutions and Data Synchronization</CardDescription>
        </CardHeader>
        <CardContent
          className={cn(
            "grid gap-4 overflow-hidden transition-all duration-300",
            expandedSections.database ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="overflow-hidden">
            <Card className="border-zinc-800 bg-zinc-800/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">
                  <div className="flex items-center">
                    <HardDrive className="mr-2 h-4 w-4 text-yellow-500" />
                    Database Solutions
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-xs text-zinc-400">
                      <strong>Primary:</strong> PostgreSQL (cloud)
                    </p>
                    <p className="mt-2 text-xs text-zinc-400">
                      <strong>Desktop MIS:</strong> SQLite (for local, offline use)
                    </p>
                    <p className="mt-2 text-xs text-zinc-400">
                      <strong>File Storage:</strong> AWS S3
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-zinc-700 text-xs">
                        PostgreSQL
                      </Badge>
                      <Badge variant="outline" className="bg-zinc-700 text-xs">
                        SQLite
                      </Badge>
                      <Badge variant="outline" className="bg-zinc-700 text-xs">
                        AWS S3
                      </Badge>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-zinc-400">
                      <strong>Data Sync:</strong> All farmer data from CoopMIS syncs through Sync Service to be
                      available across APIs and ML pipelines.
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <p className="text-xs text-green-500">Centralized data synchronization</p>
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-500" />
                      <p className="text-xs text-yellow-500">Data quality challenges require manual audits</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      {/* Integrations */}
      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader className="cursor-pointer" onClick={() => toggleSection("integration")}>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Link className="mr-2 h-5 w-5 text-green-400" />
              Integrations
            </div>
            {expandedSections.integration ? (
              <ChevronUp className="h-5 w-5 text-zinc-400" />
            ) : (
              <ChevronDown className="h-5 w-5 text-zinc-400" />
            )}
          </CardTitle>
          <CardDescription>External Services and Authentication</CardDescription>
        </CardHeader>
        <CardContent
          className={cn(
            "grid gap-4 overflow-hidden transition-all duration-300",
            expandedSections.integration ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border-zinc-800 bg-zinc-800/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">
                    <div className="flex items-center">
                      <Building className="mr-2 h-4 w-4 text-green-400" />
                      Mobile Money & Disbursement
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 text-xs text-zinc-400">
                    <li>MTN MoMo</li>
                    <li>Airtel Money</li>
                    <li>Yo! Payments</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-zinc-800 bg-zinc-800/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">
                    <div className="flex items-center">
                      <MessageSquare className="mr-2 h-4 w-4 text-green-400" />
                      Messaging
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-zinc-400">
                    <strong>SMS:</strong> Africa's Talking
                  </p>
                  <p className="mt-2 text-xs text-zinc-400">
                    <strong>Email:</strong> SendGrid
                  </p>
                </CardContent>
              </Card>

              <Card className="border-zinc-800 bg-zinc-800/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">
                    <div className="flex items-center">
                      <Key className="mr-2 h-4 w-4 text-green-400" />
                      Authentication
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-zinc-400">
                    <strong>Keycloak:</strong> SSO, RBAC, session control
                  </p>
                  <p className="mt-2 text-xs text-zinc-400">
                    All integrations operate through secured APIs; internal services communicate through REST endpoints
                    across private VPCs.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Strengths and Challenges */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Strengths */}
        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
              Key Strengths
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <ArrowRight className="h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="text-sm text-zinc-400">
                  <strong className="text-white">Full-stack platform maturity:</strong> Emata owns the entire flow from
                  data ingestion, decisioning (AI), to disbursement and repayment.
                </span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="text-sm text-zinc-400">
                  <strong className="text-white">Offline-first design:</strong> CoopMIS (via .NET MAUI and SQLite)
                  enables reach into connectivity-limited areas.
                </span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="text-sm text-zinc-400">
                  <strong className="text-white">Azure ML Maturity:</strong> Well-structured pipelines, model
                  versioning, and ROI simulation help drive consistent ML performance.
                </span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="text-sm text-zinc-400">
                  <strong className="text-white">API-centric Modular Architecture:</strong> Enables scaling, onboarding
                  of new partners and crops without extensive code rework.
                </span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="text-sm text-zinc-400">
                  <strong className="text-white">Security & Infrastructure:</strong> VPN, VPC segmentation, and
                  centralized Keycloak setup mitigate unauthorized access.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Challenges */}
        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader>
            <CardTitle className="flex items-center">
              <AlertTriangle className="mr-2 h-5 w-5 text-yellow-500" />
              Key Challenges
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <ArrowRight className="h-5 w-5 flex-shrink-0 text-yellow-500" />
                <span className="text-sm text-zinc-400">
                  <strong className="text-white">Data Quality & Syncing:</strong> MIS data can be outdated or misaligned
                  with AI model requirements. Requires frequent data audits and manual cleaning.
                </span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="h-5 w-5 flex-shrink-0 text-yellow-500" />
                <span className="text-sm text-zinc-400">
                  <strong className="text-white">Technical Debt from Ported Systems:</strong> Several components were
                  inherited or adapted from Laboremus-era stacks. Modernization (e.g., GraphQL, event streaming) may
                  become necessary.
                </span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="h-5 w-5 flex-shrink-0 text-yellow-500" />
                <span className="text-sm text-zinc-400">
                  <strong className="text-white">Limited Observability on Production ML:</strong> Lack of real-time
                  monitoring for model drift or scoring anomalies could impact lending precision.
                </span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="h-5 w-5 flex-shrink-0 text-yellow-500" />
                <span className="text-sm text-zinc-400">
                  <strong className="text-white">Human-Dependent Credit Limit Reviews:</strong> Though modeling is
                  robust, manual reviews are still required, delaying scale.
                </span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="h-5 w-5 flex-shrink-0 text-yellow-500" />
                <span className="text-sm text-zinc-400">
                  <strong className="text-white">Distributed Infrastructure Overhead:</strong> Azure + AWS split
                  increases cognitive and operational load for DevOps/ML Ops teams.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Conclusion */}
      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader>
          <CardTitle>Conclusion</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-zinc-400">
            Emata's technology stack demonstrates a mature, full-stack platform with strong capabilities in offline
            operations, AI/ML modeling, and modular architecture. The combination of AWS and Azure infrastructure
            provides robust compute and specialized ML capabilities, while the microservices approach enables
            flexibility across different agricultural contexts. Key challenges around data quality, technical debt, and
            distributed infrastructure will need to be addressed as the company scales across new geographies and crop
            types.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
