"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
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
  Lock,
  Router,
  Box,
  BarChart,
  Repeat,
  HardDrive,
  Archive,
  Building,
  ArrowRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

export default function TechnologiesPage() {
  const [expandedSections, setExpandedSections] = useState({
    infrastructure: true,
    security: false,
    applicationStack: false,
    blockchain: false,
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
        <p className="text-zinc-400">Overview of the technologies powering Melanin Kapital's platform</p>
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
                AWS Infrastructure (EC2, Fargate, S3, Aurora DB, CloudWatch, SNS)
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
                Security (IAM, TLS Encryption, Routing Security)
              </text>

              {/* Application Stack */}
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
                Application Stack (AWS Fargate, ECR, Auto-scaling)
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
                Database (Aurora, RDS)
              </text>

              {/* Blockchain Layer */}
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
                Blockchain (DFNS, Polygon)
              </text>

              {/* Integration Layer */}
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
                Ecobank Integration
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
          <CardDescription>AWS Managed Services (EC2, Fargate, S3, Aurora DB, CloudWatch, SNS)</CardDescription>
        </CardHeader>
        <CardContent
          className={cn(
            "grid gap-4 overflow-hidden transition-all duration-300",
            expandedSections.infrastructure ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border-zinc-800 bg-zinc-800/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">
                    <div className="flex items-center">
                      <Cloud className="mr-2 h-4 w-4 text-blue-500" />
                      AWS Fargate & EC2
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-zinc-400">
                    Transitioning from EC2 instances to AWS Fargate for serverless container management to reduce
                    overhead and improve scalability.
                  </p>
                  <div className="mt-4">
                    <div className="mb-1 flex items-center justify-between">
                      <div className="text-xs text-zinc-400">Transition Progress</div>
                      <div className="text-xs text-zinc-400">60%</div>
                    </div>
                    <Progress value={60} className="h-1.5" />
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    <p className="text-xs text-yellow-500">Single-AZ deployment limits fault tolerance</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-zinc-800 bg-zinc-800/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">
                    <div className="flex items-center">
                      <Database className="mr-2 h-4 w-4 text-blue-500" />
                      AWS S3 & Aurora DB
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-zinc-400">
                    S3 for object storage and Aurora DB as a cost-effective managed database replacing RDS, providing
                    improved performance and scalability.
                  </p>
                  <div className="mt-4">
                    <div className="mb-1 flex items-center justify-between">
                      <div className="text-xs text-zinc-400">Aurora Migration</div>
                      <div className="text-xs text-zinc-400">75%</div>
                    </div>
                    <Progress value={75} className="h-1.5" />
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <p className="text-xs text-green-500">Improved performance with Aurora</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-zinc-800 bg-zinc-800/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">
                    <div className="flex items-center">
                      <BarChart className="mr-2 h-4 w-4 text-blue-500" />
                      CloudWatch & SNS
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-zinc-400">
                    CloudWatch for monitoring and logging application performance, and SNS for sending alerts for
                    critical system events like auto-scaling notifications.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-zinc-700 text-xs">
                      Performance Monitoring
                    </Badge>
                    <Badge variant="outline" className="bg-zinc-700 text-xs">
                      Alerts
                    </Badge>
                    <Badge variant="outline" className="bg-zinc-700 text-xs">
                      Auto-scaling Notifications
                    </Badge>
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    <p className="text-xs text-yellow-500">AWS cost management is a risk</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Security */}
      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader className="cursor-pointer" onClick={() => toggleSection("security")}>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Shield className="mr-2 h-5 w-5 text-purple-500" />
              Security
            </div>
            {expandedSections.security ? (
              <ChevronUp className="h-5 w-5 text-zinc-400" />
            ) : (
              <ChevronDown className="h-5 w-5 text-zinc-400" />
            )}
          </CardTitle>
          <CardDescription>IAM, TLS Encryption, and Routing Security</CardDescription>
        </CardHeader>
        <CardContent
          className={cn(
            "grid gap-4 overflow-hidden transition-all duration-300",
            expandedSections.security ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border-zinc-800 bg-zinc-800/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">
                    <div className="flex items-center">
                      <Lock className="mr-2 h-4 w-4 text-purple-500" />
                      IAM (Identity and Access Management)
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-zinc-400">
                    IAM is used to manage access control across AWS services, providing role-based access to users and
                    services.
                  </p>
                  <div className="mt-4">
                    <div className="mb-1 flex items-center justify-between">
                      <div className="text-xs text-zinc-400">Security Maturity</div>
                      <div className="text-xs text-zinc-400">Basic</div>
                    </div>
                    <Progress value={40} className="h-1.5" />
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    <p className="text-xs text-yellow-500">Needs MFA and more granular RBAC</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-zinc-800 bg-zinc-800/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">
                    <div className="flex items-center">
                      <Shield className="mr-2 h-4 w-4 text-purple-500" />
                      TLS Encryption
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-zinc-400">
                    TLS encryption ensures secure communication between users and the platform, protecting data during
                    transmission.
                  </p>
                  <div className="mt-4">
                    <div className="mb-1 flex items-center justify-between">
                      <div className="text-xs text-zinc-400">Implementation</div>
                      <div className="text-xs text-zinc-400">Standard</div>
                    </div>
                    <Progress value={70} className="h-1.5" />
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    <p className="text-xs text-yellow-500">Broader security controls needed for tokenized data</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-zinc-800 bg-zinc-800/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">
                    <div className="flex items-center">
                      <Router className="mr-2 h-4 w-4 text-purple-500" />
                      Routing Security
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-zinc-400">
                    Routing security protects traffic flow into and out of containers and the application, ensuring only
                    authorized traffic is allowed.
                  </p>
                  <div className="mt-4">
                    <div className="mb-1 flex items-center justify-between">
                      <div className="text-xs text-zinc-400">Security Level</div>
                      <div className="text-xs text-zinc-400">Basic</div>
                    </div>
                    <Progress value={50} className="h-1.5" />
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    <p className="text-xs text-yellow-500">Need VPCs for private networking as platform grows</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Application Stack */}
      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader className="cursor-pointer" onClick={() => toggleSection("applicationStack")}>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Code className="mr-2 h-5 w-5 text-green-500" />
              Application Stack
            </div>
            {expandedSections.applicationStack ? (
              <ChevronUp className="h-5 w-5 text-zinc-400" />
            ) : (
              <ChevronDown className="h-5 w-5 text-zinc-400" />
            )}
          </CardTitle>
          <CardDescription>AWS Fargate, ECR, Auto-scaling & Load Balancers</CardDescription>
        </CardHeader>
        <CardContent
          className={cn(
            "grid gap-4 overflow-hidden transition-all duration-300",
            expandedSections.applicationStack ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border-zinc-800 bg-zinc-800/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">
                    <div className="flex items-center">
                      <Box className="mr-2 h-4 w-4 text-green-500" />
                      AWS Fargate
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-zinc-400">
                    Fargate helps in container management by automating the process of scaling containers, enabling more
                    cost-effective and scalable serverless applications.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    <p className="text-xs text-yellow-500">Transition from EC2 must be managed carefully</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-zinc-800 bg-zinc-800/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">
                    <div className="flex items-center">
                      <Database className="mr-2 h-4 w-4 text-green-500" />
                      AWS ECR (Elastic Container Registry)
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-zinc-400">
                    ECR is used for container image storage, helping to store and manage Docker images for easier
                    application deployment within containers.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    <p className="text-xs text-yellow-500">Manual image storage needs CI/CD automation</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-zinc-800 bg-zinc-800/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">
                    <div className="flex items-center">
                      <BarChart className="mr-2 h-4 w-4 text-green-500" />
                      Auto-scaling & Load Balancers
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-zinc-400">
                    Auto-scaling adjusts the number of Fargate tasks based on resource demand (CPU, RAM), ensuring the
                    application can scale dynamically to meet user traffic.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    <p className="text-xs text-yellow-500">
                      Limited to horizontal/vertical scaling with no cost management
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Blockchain and Tokenization */}
      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader className="cursor-pointer" onClick={() => toggleSection("blockchain")}>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Repeat className="mr-2 h-5 w-5 text-pink-500" />
              Blockchain and Tokenization
            </div>
            {expandedSections.blockchain ? (
              <ChevronUp className="h-5 w-5 text-zinc-400" />
            ) : (
              <ChevronDown className="h-5 w-5 text-zinc-400" />
            )}
          </CardTitle>
          <CardDescription>DFNS & Polygon for Carbon Credit Tokenization and Smart Contracts</CardDescription>
        </CardHeader>
        <CardContent
          className={cn(
            "grid gap-4 overflow-hidden transition-all duration-300",
            expandedSections.blockchain ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Card className="border-zinc-800 bg-zinc-800/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">
                    <div className="flex items-center">
                      <Repeat className="mr-2 h-4 w-4 text-pink-500" />
                      DFNS & Polygon
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-zinc-400">
                    DFNS is used for custodial wallet management, ensuring carbon credit tokens (MLN CARBON) are
                    securely stored and administered through API calls.
                  </p>
                  <p className="mt-2 text-xs text-zinc-400">
                    Polygon is the blockchain network used for minting and burning carbon credit tokens, with one token
                    equaling one carbon credit.
                  </p>
                  <div className="mt-4">
                    <div className="mb-1 flex items-center justify-between">
                      <div className="text-xs text-zinc-400">Transaction Volume</div>
                      <div className="text-xs text-zinc-400">Very Low (3 transactions)</div>
                    </div>
                    <Progress value={5} className="h-1.5" />
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    <p className="text-xs text-yellow-500">Manual token minting process is a bottleneck</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-zinc-800 bg-zinc-800/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">
                    <div className="flex items-center">
                      <Code className="mr-2 h-4 w-4 text-pink-500" />
                      Smart Contracts
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-zinc-400">
                    Smart contracts govern the minting and burning of tokens, ensuring transparency in the carbon credit
                    process and linking it to real-world carbon offset actions.
                  </p>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-500" />
                      <p className="text-xs text-yellow-500">Manual token minting and burning processes</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-500" />
                      <p className="text-xs text-yellow-500">Lack of decentralization in token control</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-500" />
                      <p className="text-xs text-yellow-500">No maximum supply set for the token</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Database */}
      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader className="cursor-pointer" onClick={() => toggleSection("database")}>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Database className="mr-2 h-5 w-5 text-yellow-500" />
              Database
            </div>
            {expandedSections.database ? (
              <ChevronUp className="h-5 w-5 text-zinc-400" />
            ) : (
              <ChevronDown className="h-5 w-5 text-zinc-400" />
            )}
          </CardTitle>
          <CardDescription>Aurora DB, RDS, Backups and Archiving</CardDescription>
        </CardHeader>
        <CardContent
          className={cn(
            "grid gap-4 overflow-hidden transition-all duration-300",
            expandedSections.database ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <Card className="border-zinc-800 bg-zinc-800/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">
                    <div className="flex items-center">
                      <HardDrive className="mr-2 h-4 w-4 text-yellow-500" />
                      Aurora DB & RDS
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-zinc-400">
                    RDS is used for lower-cost database management, while the company is transitioning to Aurora for
                    higher performance and scalability.
                  </p>
                  <p className="mt-2 text-xs text-zinc-400">
                    Transactional data is stored on a duplicate PostgreSQL database, which tracks and stores carbon
                    credit transactions.
                  </p>
                  <div className="mt-4">
                    <div className="mb-1 flex items-center justify-between">
                      <div className="text-xs text-zinc-400">Database Migration</div>
                      <div className="text-xs text-zinc-400">In Progress</div>
                    </div>
                    <Progress value={60} className="h-1.5" />
                  </div>
                  <div className="mt-4 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    <p className="text-xs text-yellow-500">
                      Data synchronization between duplicate databases is a risk
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-zinc-800 bg-zinc-800/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">
                    <div className="flex items-center">
                      <Archive className="mr-2 h-4 w-4 text-yellow-500" />
                      Backups and Archiving
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-zinc-400">
                    RDS backups are configured, with only live records being retained for a year. The rest is archived,
                    ensuring historical data is preserved while keeping operational data at manageable costs.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-yellow-500" />
                    <p className="text-xs text-yellow-500">Archiving may be manual, better data governance needed</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Integration with Ecobank */}
      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader className="cursor-pointer" onClick={() => toggleSection("integration")}>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center">
              <Link className="mr-2 h-5 w-5 text-green-400" />
              Integration with Ecobank
            </div>
            {expandedSections.integration ? (
              <ChevronUp className="h-5 w-5 text-zinc-400" />
            ) : (
              <ChevronDown className="h-5 w-5 text-zinc-400" />
            )}
          </CardTitle>
          <CardDescription>Banking partnership and integration status</CardDescription>
        </CardHeader>
        <CardContent
          className={cn(
            "grid gap-4 overflow-hidden transition-all duration-300",
            expandedSections.integration ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <div className="overflow-hidden">
            <Card className="border-zinc-800 bg-zinc-800/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">
                  <div className="flex items-center">
                    <Building className="mr-2 h-4 w-4 text-green-400" />
                    Ecobank Integration
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-zinc-400">
                  The MOU with Ecobank allows Melanin Kapital to access Ecobank's infrastructure and API for better
                  banking integration. However, this integration is not yet automated.
                </p>
                <div className="mt-4">
                  <div className="mb-1 flex items-center justify-between">
                    <div className="text-xs text-zinc-400">Integration Status</div>
                    <div className="text-xs text-zinc-400">Manual Process</div>
                  </div>
                  <Progress value={30} className="h-1.5" />
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-500" />
                  <p className="text-xs text-yellow-500">Manual integration creates operational bottlenecks</p>
                </div>
              </CardContent>
            </Card>
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
                  <strong className="text-white">AWS Managed Services:</strong> Fargate, Aurora DB, and S3 offer strong
                  scalability potential and cost savings in the long term.
                </span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="text-sm text-zinc-400">
                  <strong className="text-white">Blockchain Technology:</strong> Provides a transparent and secure
                  method for managing carbon credits through tokenization.
                </span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="h-5 w-5 flex-shrink-0 text-green-500" />
                <span className="text-sm text-zinc-400">
                  <strong className="text-white">Containerization:</strong> Containerization and auto-scaling provide
                  flexibility and scalability to meet future demand.
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
                  <strong className="text-white">Manual Processes:</strong> Manual token minting and burning processes
                  hinder scalability, and the lack of full decentralization may limit trust in the system.
                </span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="h-5 w-5 flex-shrink-0 text-yellow-500" />
                <span className="text-sm text-zinc-400">
                  <strong className="text-white">Limited Fault Tolerance:</strong> Single-AZ deployment and reliance on
                  manual deployments result in limited fault tolerance and operational inefficiency.
                </span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="h-5 w-5 flex-shrink-0 text-yellow-500" />
                <span className="text-sm text-zinc-400">
                  <strong className="text-white">Integration Limitations:</strong> Limited integrations with key
                  partners like Ecobank and manual processes further complicate scaling.
                </span>
              </li>
              <li className="flex gap-2">
                <ArrowRight className="h-5 w-5 flex-shrink-0 text-yellow-500" />
                <span className="text-sm text-zinc-400">
                  <strong className="text-white">Cost Management:</strong> Cost management risks, particularly related
                  to AWS services, need proactive measures to avoid unexpected expenses.
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
            Melanin Kapital's tech stack combines strong potential for scalability through containerization and managed
            services but is currently hindered by manual processes, limited automation, and lack of multi-region
            deployment. As the company grows, addressing these challenges, particularly around automation, security,
            cost optimization, and integration maturity, will be crucial to supporting the financial projections and
            ensuring sustainability in operations.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
