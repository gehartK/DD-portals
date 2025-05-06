"use client"

import {
  ArrowUpRight,
  Award,
  BarChart3,
  Building2,
  Calendar,
  CreditCard,
  DollarSign,
  Globe,
  Landmark,
  Leaf,
  LineChart,
  MapPin,
  Recycle,
  ShieldAlert,
  Sprout,
  Target,
  Wallet,
} from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function CompanyOverviewPage() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Leaf className="h-12 w-12" />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-1">
              <h1 className="text-3xl font-bold tracking-tight text-white">Melanin Kapital</h1>
              <p className="text-zinc-400">Pioneering Carbon Neobank for African SMEs</p>
              <div className="mt-2 flex flex-wrap gap-3">
                <div className="flex items-center gap-1 rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                  <Building2 className="h-3 w-3" />
                  <span>Founded 2020</span>
                </div>
                <div className="flex items-center gap-1 rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                  <MapPin className="h-3 w-3" />
                  <span>Nairobi, Kenya</span>
                </div>
                <div className="flex items-center gap-1 rounded-full bg-zinc-800 px-3 py-1 text-xs text-zinc-300">
                  <Landmark className="h-3 w-3" />
                  <span>Fintech, CleanTech</span>
                </div>
                <Link
                  href="https://melaninkapital.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 rounded-full bg-primary/20 px-3 py-1 text-xs text-primary hover:bg-primary/30 transition-colors"
                >
                  <Globe className="h-3 w-3" />
                  <span>Website</span>
                  <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Co-Founders Section */}
      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Award className="h-5 w-5 text-primary" />
            Co-Founders
          </CardTitle>
          <CardDescription className="text-zinc-400">Leadership team behind Melanin Kapital</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex gap-4">
              <div className="h-16 w-16 rounded-full bg-zinc-800 flex items-center justify-center text-primary">
                <span className="text-xl font-bold">MK</span>
              </div>
              <div>
                <h3 className="font-medium text-zinc-200">Melanie Keita Mariam</h3>
                <p className="text-sm text-primary">CEO & Co-Founder</p>
                <p className="mt-2 text-sm text-zinc-400">
                  Visionary leader with expertise in green finance and African markets
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="h-16 w-16 rounded-full bg-zinc-800 flex items-center justify-center text-primary">
                <span className="text-xl font-bold">IK</span>
              </div>
              <div>
                <h3 className="font-medium text-zinc-200">Ian Minjire Kibira</h3>
                <p className="text-sm text-primary">COO & Co-Founder</p>
                <p className="mt-2 text-sm text-zinc-400">
                  Operations expert with background in fintech and sustainable business models
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Mission & Vision Section */}
      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Mission & Vision
          </CardTitle>
          <CardDescription className="text-zinc-400">Our purpose and long-term goals</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-lg bg-zinc-800 p-4">
            <h3 className="font-medium text-zinc-200">Vision</h3>
            <p className="mt-2 text-zinc-400">
              Pioneering a carbon neobank aimed at supporting African SMEs through green finance. The company integrates
              carbon credits into its financial products, offering innovative solutions to businesses within Africa's
              green economy.
            </p>
          </div>
          <div className="rounded-lg bg-zinc-800 p-4">
            <h3 className="font-medium text-zinc-200">Mission</h3>
            <p className="mt-2 text-zinc-400">
              To enable African businesses to access financing and reduce their carbon footprint, while contributing to
              Africa's growing voluntary carbon markets.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="flex flex-col items-center rounded-lg bg-zinc-800 p-4 text-center">
              <Sprout className="h-8 w-8 text-primary mb-2" />
              <h4 className="font-medium text-zinc-200">Sustainability</h4>
              <p className="mt-2 text-sm text-zinc-400">Promoting eco-friendly business practices across Africa</p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-zinc-800 p-4 text-center">
              <Wallet className="h-8 w-8 text-primary mb-2" />
              <h4 className="font-medium text-zinc-200">Financial Inclusion</h4>
              <p className="mt-2 text-sm text-zinc-400">Providing access to green finance for underserved SMEs</p>
            </div>
            <div className="flex flex-col items-center rounded-lg bg-zinc-800 p-4 text-center">
              <Globe className="h-8 w-8 text-primary mb-2" />
              <h4 className="font-medium text-zinc-200">Climate Action</h4>
              <p className="mt-2 text-sm text-zinc-400">Contributing to carbon reduction and climate resilience</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Key Products & Services */}
      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Landmark className="h-5 w-5 text-primary" />
            Key Products & Services
          </CardTitle>
          <CardDescription className="text-zinc-400">
            Innovative financial solutions for the green economy
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary/20 text-primary">
                <Landmark className="h-5 w-5" />
              </div>
              <h3 className="font-medium text-zinc-200">Carbon Neobank</h3>
              <p className="mt-2 text-sm text-zinc-400">
                A digital banking platform built on blockchain, enabling SMEs to access green loans, savings accounts,
                and carbon credits.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary/20 text-primary">
                <CreditCard className="h-5 w-5" />
              </div>
              <h3 className="font-medium text-zinc-200">Green Visa Cards</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Cards that reward businesses and customers for engaging in climate-positive activities, offering
                cashbacks for green purchases.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary/20 text-primary">
                <DollarSign className="h-5 w-5" />
              </div>
              <h3 className="font-medium text-zinc-200">Green Loans</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Financing for renewable energy solutions, waste management, and other eco-friendly projects.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-primary/20 text-primary">
                <Recycle className="h-5 w-5" />
              </div>
              <h3 className="font-medium text-zinc-200">Carbon Credits</h3>
              <p className="mt-2 text-sm text-zinc-400">
                A platform that helps businesses generate, verify, and trade carbon credits, supporting their
                sustainability goals.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Business Model & Market Opportunity */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Building2 className="h-5 w-5 text-primary" />
              Business Model
            </CardTitle>
            <CardDescription className="text-zinc-400">How Melanin Kapital creates and delivers value</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium text-zinc-200">B2B Focus</h3>
              <p className="text-sm text-zinc-400">
                Melanin Kapital targets African SMEs by providing them with access to green finance solutions, such as
                carbon-backed financing.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-zinc-200">Key Partnerships</h3>
              <p className="text-sm text-zinc-400">
                The company has established significant partnerships with Ecobank (which offers banking infrastructure)
                and Visa (which supports the green card program).
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-medium text-zinc-200">Scalability</h3>
              <p className="text-sm text-zinc-400">
                The business model is designed to scale across Africa, leveraging the Pan-African reach of Ecobank and
                the regulatory sandbox of the Capital Markets Authority of Kenya for green finance.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <LineChart className="h-5 w-5 text-primary" />
              Market Opportunity
            </CardTitle>
            <CardDescription className="text-zinc-400">The growing demand for carbon credits in Africa</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-zinc-400">
                The carbon credit market in Africa is rapidly expanding, driven by international climate commitments and
                demand for carbon-neutral solutions.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-400">Africa's Current Market Share</span>
                <span className="text-sm font-medium text-zinc-200">2%</span>
              </div>
              <Progress value={2} className="h-2" />
              <p className="text-xs text-zinc-500">
                Africa contributes just 2% of the global carbon credits but is positioned to capture a larger share as
                demand grows.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-400">Target Carbon Credits Value</span>
                <span className="text-sm font-medium text-zinc-200">$6B</span>
              </div>
              <div className="h-2 w-full rounded-full bg-zinc-800">
                <div className="h-2 rounded-full bg-primary" style={{ width: "60%" }}></div>
              </div>
              <p className="text-xs text-zinc-500">
                Melanin Kapital's goal is to transform $6 billion of carbon credits into liquid, tradable assets.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Developments */}
      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Calendar className="h-5 w-5 text-primary" />
            Recent Developments
          </CardTitle>
          <CardDescription className="text-zinc-400">Key milestones and future plans</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-zinc-800">
            <div className="relative mb-8 pl-6">
              <div className="absolute -left-[13px] top-0 h-6 w-6 rounded-full border-2 border-primary bg-zinc-900"></div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-zinc-200">Ecobank Partnership</span>
                  <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400">2023</span>
                </div>
                <p className="text-sm text-zinc-400">
                  Melanin Kapital has integrated its platform with Ecobank, enabling SMEs to access services like green
                  savings accounts, carbon-backed loans, and Visa-sponsored green cards.
                </p>
              </div>
            </div>
            <div className="relative mb-8 pl-6">
              <div className="absolute -left-[13px] top-0 h-6 w-6 rounded-full border-2 border-primary bg-zinc-900"></div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-zinc-200">Product Evolution</span>
                  <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400">2020-2024</span>
                </div>
                <p className="text-sm text-zinc-400">
                  Over the years, Melanin Kapital has evolved from a digital lending platform to a full-fledged neobank
                  that provides a suite of services to support green economy projects.
                </p>
              </div>
            </div>
            <div className="relative pl-6">
              <div className="absolute -left-[13px] top-0 h-6 w-6 rounded-full border-2 border-primary bg-zinc-900"></div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-zinc-200">Expansion Plans</span>
                  <span className="rounded-full bg-zinc-800 px-2 py-0.5 text-xs text-zinc-400">2025</span>
                </div>
                <p className="text-sm text-zinc-400">
                  In 2025, Melanin Kapital plans to launch its carbon banking solution in Kenya and expand to other
                  African countries like Tanzania, Rwanda, and South Africa.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Financial Summary & Investment Opportunity */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Financial Summary
            </CardTitle>
            <CardDescription className="text-zinc-400">Current performance and projections</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg bg-zinc-800 p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-zinc-400">Revenue (YTD 2024)</span>
                <span className="text-lg font-medium text-white">$176,000</span>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-medium text-zinc-200">Projected Revenue Growth</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-400">2024</span>
                  <span className="text-xs font-medium text-zinc-200">$176K</span>
                </div>
                <Progress value={3.5} className="h-1.5" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-400">2025</span>
                  <span className="text-xs font-medium text-zinc-200">$1.2M</span>
                </div>
                <Progress value={24} className="h-1.5" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-400">2026</span>
                  <span className="text-xs font-medium text-zinc-200">$3M</span>
                </div>
                <Progress value={60} className="h-1.5" />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-zinc-400">2027</span>
                  <span className="text-xs font-medium text-zinc-200">$5M+</span>
                </div>
                <Progress value={100} className="h-1.5" />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-zinc-200">Funding History</h3>
              <p className="text-sm text-zinc-400">
                Melanin Kapital has raised capital through convertible notes, with notable investors including Techstars
                and Adaverse. The company raised $500K in 2023.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              Investment Opportunity
            </CardTitle>
            <CardDescription className="text-zinc-400">Current funding round and valuation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg bg-zinc-800 p-4">
              <h3 className="font-medium text-zinc-200">Seed Round (2025)</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Melanin Kapital is seeking $3 million to expand its product offerings and scale across Africa. The round
                will consist of $2 million in debt and $1 million in equity.
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-zinc-800 p-4">
                  <div className="text-sm text-zinc-400">Pre-money Valuation</div>
                  <div className="mt-1 text-xl font-medium text-white">$30.26M</div>
                </div>
                <div className="rounded-lg bg-zinc-800 p-4">
                  <div className="text-sm text-zinc-400">Post-money Valuation</div>
                  <div className="mt-1 text-xl font-medium text-white">$33.26M</div>
                </div>
              </div>
              <div className="rounded-lg bg-zinc-800 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-zinc-400">Funding Target</span>
                  <span className="text-sm font-medium text-zinc-200">$3M</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <div className="h-2 flex-1 rounded-full bg-zinc-700">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "33%" }}></div>
                  </div>
                  <span className="text-xs text-zinc-400">33%</span>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs text-zinc-500">
                  <span>$1M Equity</span>
                  <span>$2M Debt</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Key Risks */}
      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <ShieldAlert className="h-5 w-5 text-primary" />
            Key Risks
          </CardTitle>
          <CardDescription className="text-zinc-400">Challenges and considerations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
              <h3 className="font-medium text-zinc-200">Regulatory Challenges</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Navigating regulatory frameworks for carbon credits and financial products in Africa.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
              <h3 className="font-medium text-zinc-200">Scalability</h3>
              <p className="mt-2 text-sm text-zinc-400">
                The challenge of scaling operations across diverse African markets with varying regulatory environments.
              </p>
            </div>
            <div className="rounded-lg border border-zinc-800 bg-zinc-800/50 p-4">
              <h3 className="font-medium text-zinc-200">Tech Integration</h3>
              <p className="mt-2 text-sm text-zinc-400">
                Ensuring seamless integration with Ecobank and other partners, as well as maintaining data security and
                transparency.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Conclusion */}
      <Card className="border-zinc-800 bg-zinc-900">
        <CardContent className="pt-6">
          <div className="rounded-lg bg-primary/10 p-6 text-center">
            <h3 className="text-lg font-medium text-white">Conclusion</h3>
            <p className="mt-2 text-zinc-400">
              Melanin Kapital is well-positioned to become a leading player in Africa's green finance sector, thanks to
              its innovative approach combining fintech and sustainability. The company's strategic partnerships,
              scalable business model, and unique value proposition make it an exciting opportunity for investors
              looking to support both financial inclusion and climate action.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
