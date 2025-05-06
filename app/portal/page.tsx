"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Users, DollarSign, BarChart3, Zap, Shield, Settings, Database } from "lucide-react"

// Update the RadarChart component to move the legend to the right side
// Replace the RadarChart function with:

function RadarChart({ data }) {
  const dimensions = Object.keys(data)
  const values = Object.values(data)
  const maxValue = 10 // Maximum score is 10
  const centerX = 200
  const centerY = 200
  const radius = 150
  const angleStep = (Math.PI * 2) / dimensions.length

  // Create benchmark data (score of 5 for all dimensions)
  const benchmarkData = dimensions.reduce((acc, dim) => {
    acc[dim] = 5
    return acc
  }, {})
  const benchmarkValues = Object.values(benchmarkData)

  // Calculate points for each dimension for actual data
  const points = dimensions.map((_, i) => {
    const angle = i * angleStep - Math.PI / 2 // Start from the top
    const value = values[i] as number
    const distance = (value / maxValue) * radius
    const x = centerX + distance * Math.cos(angle)
    const y = centerY + distance * Math.sin(angle)
    return { x, y }
  })

  // Calculate points for benchmark data
  const benchmarkPoints = dimensions.map((_, i) => {
    const angle = i * angleStep - Math.PI / 2
    const value = benchmarkValues[i] as number
    const distance = (value / maxValue) * radius
    const x = centerX + distance * Math.cos(angle)
    const y = centerY + distance * Math.sin(angle)
    return { x, y }
  })

  // Create the polygon points string for actual data
  const polygonPoints = points.map((p) => `${p.x},${p.y}`).join(" ")

  // Create the polygon points string for benchmark data
  const benchmarkPolygonPoints = benchmarkPoints.map((p) => `${p.x},${p.y}`).join(" ")

  // Create the grid circles
  const gridCircles = [2, 4, 6, 8, 10].map((value, i) => {
    const r = (value / maxValue) * radius
    return (
      <circle key={i} cx={centerX} cy={centerY} r={r} fill="none" stroke="#333" strokeWidth="1" strokeDasharray="4,4" />
    )
  })

  // Create the axis lines
  const axisLines = dimensions.map((_, i) => {
    const angle = i * angleStep - Math.PI / 2
    const x2 = centerX + radius * Math.cos(angle)
    const y2 = centerY + radius * Math.sin(angle)
    return <line key={i} x1={centerX} y1={centerY} x2={x2} y2={y2} stroke="#333" strokeWidth="1" />
  })

  // Create the labels
  const labels = dimensions.map((dim, i) => {
    const angle = i * angleStep - Math.PI / 2
    const labelDistance = radius + 20
    const x = centerX + labelDistance * Math.cos(angle)
    const y = centerY + labelDistance * Math.sin(angle)

    // Format the dimension name for display
    const formatDimension = (dim) => {
      // Replace dataSecurity with solutionComponents in the display
      if (dim === "dataSecurity") return "Solution Components"
      if (dim === "solutionComponents") return "Solution Components"

      return dim
        .replace(/([A-Z])/g, " $1") // Add space before capital letters
        .replace(/^./, (str) => str.toUpperCase()) // Capitalize first letter
        .trim()
    }

    return (
      <text
        key={i}
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#9CA3AF"
        fontSize="10"
        fontWeight="500"
        transform={`rotate(${angle * (180 / Math.PI) + (angle > Math.PI / 2 && angle < (3 * Math.PI) / 2 ? 180 : 0)}, ${x}, ${y})`}
      >
        {formatDimension(dim)}
      </text>
    )
  })

  // Create the value indicators for actual data
  const valueIndicators = points.map((point, i) => <circle key={i} cx={point.x} cy={point.y} r="4" fill="#00E676" />)

  return (
    <svg width="400" height="400" viewBox="0 0 400 400">
      {/* Grid circles */}
      {gridCircles}

      {/* Axis lines */}
      {axisLines}

      {/* Benchmark polygon */}
      <polygon
        points={benchmarkPolygonPoints}
        fill="rgba(234, 88, 12, 0.1)"
        stroke="#EA580C"
        strokeWidth="1.5"
        strokeDasharray="4,4"
      />

      {/* Data polygon */}
      <polygon points={polygonPoints} fill="rgba(0, 230, 118, 0.2)" stroke="#00E676" strokeWidth="2" />

      {/* Value indicators */}
      {valueIndicators}

      {/* Dimension labels */}
      {labels}

      {/* Score values */}
      {points.map((point, i) => (
        <text
          key={`value-${i}`}
          x={point.x}
          y={point.y - 10}
          textAnchor="middle"
          fill="#FFFFFF"
          fontSize="10"
          fontWeight="bold"
        >
          {values[i]}
        </text>
      ))}

      {/* Chart Title */}
      <text x="200" y="30" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="bold">
        WAB-SM Assessment Radar Chart
      </text>

      {/* Legend - Moved to the right side */}
      <g transform="translate(330, 180)">
        {/* Company Score legend item */}
        <rect x="0" y="0" width="10" height="10" fill="rgba(0, 230, 118, 0.2)" stroke="#00E676" strokeWidth="2" />
        <text x="15" y="9" fill="#FFFFFF" fontSize="10">
          Company Score
        </text>

        {/* Standard legend item */}
        <rect
          x="0"
          y="20"
          width="10"
          height="10"
          fill="rgba(234, 88, 12, 0.1)"
          stroke="#EA580C"
          strokeWidth="1.5"
          strokeDasharray="4,4"
        />
        <text x="15" y="29" fill="#FFFFFF" fontSize="10">
          Standard (5/10)
        </text>
      </g>
    </svg>
  )
}

export default function PortalPage() {
  // Update the matrixData state variable with the new scores
  const [matrixData, setMatrixData] = useState({
    criticalSkills: 6.9,
    keyMetrics: 7.2,
    strategicGrowth: 7.5,
    integrity: 7.4,
    performanceEfficiency: 6.4,
    operationalExcellence: 6.6,
    solutionComponents: 6.8,
    reliability: 6.7,
    costOptimization: 7.1,
  })

  const calculateBMS = () => {
    const values = Object.values(matrixData) as number[]
    return values.reduce((sum, value) => sum + value, 0) / values.length
  }

  const bms = calculateBMS()

  const getMaturityPhase = (score: number) => {
    if (score >= 1 && score <= 3) return "Validation"
    if (score >= 4 && score <= 5) return "Standardization"
    if (score >= 6 && score <= 7) return "Optimization"
    if (score >= 8 && score <= 10) return "Automation / Expansive Growth"
    return "Unknown"
  }

  const getRiskLevel = (score: number) => {
    if (score >= 1 && score <= 3) return "High Risk"
    if (score >= 4 && score <= 5) return "Standard"
    if (score >= 6 && score <= 7) return "Low Risk"
    if (score >= 8 && score <= 10) return "Exceptional"
    return "Unknown"
  }

  const getHighestDimension = () => {
    let highest = { name: "", score: 0 }

    // Format dimension name for display
    const formatDimension = (name) => {
      return name
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase())
        .trim()
    }

    Object.entries(matrixData).forEach(([key, value]) => {
      if (value > highest.score) {
        highest = {
          name: formatDimension(key),
          score: value as number,
        }
      }
    })

    return highest
  }

  const getLowestDimension = () => {
    let lowest = { name: "", score: 10 }

    // Format dimension name for display
    const formatDimension = (name) => {
      return name
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase())
        .trim()
    }

    Object.entries(matrixData).forEach(([key, value]) => {
      if (value < lowest.score) {
        lowest = {
          name: formatDimension(key),
          score: value as number,
        }
      }
    })

    return lowest
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">Critical Solution Review Summary</h1>
        <p className="text-zinc-400">Well Architected Business Solution Matrix (WAB-SM) Assessment</p>
      </div>

      {/* Business Maturity Score - Enhanced to emphasize as final score */}
      <Card className="border-zinc-800 bg-gradient-to-r from-zinc-900 to-zinc-800 overflow-hidden">
        <div className="border-l-4 border-primary">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-medium text-white flex items-center gap-2">
                <span className="bg-primary/20 p-1.5 rounded-full">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </span>
                Final Business Maturity Score
              </CardTitle>
              <span className="bg-zinc-800 px-3 py-1 rounded-full text-xs font-medium text-primary">
                Composite Score
              </span>
            </div>
            <CardDescription className="text-zinc-400">
              Overall assessment based on all nine critical dimensions
            </CardDescription>
          </CardHeader>
          <CardContent className="pb-4">
            <div className="flex items-end gap-2">
              <div className="text-4xl font-bold text-primary">{bms.toFixed(1)}</div>
              <div className="text-sm text-zinc-400 mb-1">/10</div>
            </div>
            <Progress value={bms * 10} className="mt-2 h-2 bg-zinc-800" indicatorColor="bg-primary" />
            <div className="mt-4 flex items-center justify-between">
              <p className="text-xs text-zinc-400">Maturity Phase</p>
              <span className="text-xs px-2 py-1 rounded-full bg-primary/20 text-primary font-medium">
                {getMaturityPhase(bms)}
              </span>
            </div>
            <p className="mt-3 text-xs text-zinc-500">5/10 represents industry standard</p>
          </CardContent>
        </div>
      </Card>

      {/* Change the grid layout for the highest and lowest scoring dimension cards */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Highest Scoring Dimension - Minimalist Design */}
        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-zinc-300">Highest Scoring Dimension</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2">
              <div className="text-3xl font-bold text-white">{getHighestDimension().score.toFixed(1)}</div>
              <div className="text-sm text-zinc-400 mb-1">/10</div>
            </div>
            <div className="mt-2 text-sm text-primary">{getHighestDimension().name}</div>
            <Progress value={getHighestDimension().score * 10} className="mt-2 h-1.5 bg-zinc-800" />
            <p className="mt-3 text-xs text-zinc-500">Strength area</p>
          </CardContent>
        </Card>

        {/* Lowest Scoring Dimension - Minimalist Design */}
        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-zinc-300">Lowest Scoring Dimension</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2">
              <div className="text-3xl font-bold text-white">{getLowestDimension().score.toFixed(1)}</div>
              <div className="text-sm text-zinc-400 mb-1">/10</div>
            </div>
            <div className="mt-2 text-sm text-red-400">{getLowestDimension().name}</div>
            <Progress value={getLowestDimension().score * 10} className="mt-2 h-1.5 bg-zinc-800" />
            <p className="mt-3 text-xs text-zinc-500">Focus area for improvement</p>
          </CardContent>
        </Card>
      </div>

      <Card className="border-zinc-800 bg-zinc-900 overflow-hidden">
        <div className="bg-gradient-to-r from-zinc-800/50 to-zinc-900 p-1">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Critical Dimensions Assessment
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Radar chart showing scores across all nine critical dimensions
            </CardDescription>
          </CardHeader>
        </div>
        <CardContent className="pt-4">
          <div className="h-[400px] flex items-center justify-center">
            <RadarChart data={matrixData} />
          </div>
        </CardContent>
      </Card>

      {/* Investable Business Case Section */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Investable Business Case</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          <Card className="border-zinc-800 bg-zinc-900 overflow-hidden transition-all duration-200 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5">
            <div className="bg-gradient-to-r from-zinc-800/50 to-zinc-900 p-1">
              <CardHeader className="pb-2">
                <CardTitle className="text-white flex items-center gap-2 text-sm">
                  <Zap className="h-4 w-4 text-primary" />
                  Business Model
                </CardTitle>
              </CardHeader>
            </div>
            <CardContent className="pt-2">
              <div className="text-xl font-bold text-white">
                {(
                  (matrixData.performanceEfficiency +
                    matrixData.operationalExcellence +
                    matrixData.solutionComponents) /
                  3
                ).toFixed(1)}
                /10
              </div>
              <Progress
                value={
                  ((matrixData.performanceEfficiency +
                    matrixData.operationalExcellence +
                    matrixData.solutionComponents) /
                    3) *
                  10
                }
                className="mt-2 h-1.5 bg-zinc-800"
              />
              <div className="mt-3 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Performance Efficiency</span>
                  <span className="text-zinc-300 font-medium">{matrixData.performanceEfficiency}/10</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Operational Excellence</span>
                  <span className="text-zinc-300 font-medium">{matrixData.operationalExcellence}/10</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Solution Components</span>
                  <span className="text-zinc-300 font-medium">{matrixData.solutionComponents}/10</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader className="pb-2">
              <CardTitle className="text-white flex items-center gap-2 text-sm">
                <Shield className="h-4 w-4 text-primary" />
                Leadership
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="text-xl font-bold text-white">
                {((matrixData.criticalSkills + matrixData.integrity + matrixData.reliability) / 3).toFixed(1)}/10
              </div>
              <Progress
                value={((matrixData.criticalSkills + matrixData.integrity + matrixData.reliability) / 3) * 10}
                className="mt-2 h-1.5 bg-zinc-800"
              />
              <div className="mt-3 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Critical Skills</span>
                  <span className="text-zinc-300">{matrixData.criticalSkills}/10</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Integrity</span>
                  <span className="text-zinc-300">{matrixData.integrity}/10</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Reliability</span>
                  <span className="text-zinc-300">{matrixData.reliability}/10</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader className="pb-2">
              <CardTitle className="text-white flex items-center gap-2 text-sm">
                <DollarSign className="h-4 w-4 text-primary" />
                Predictable Cashflow
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="text-xl font-bold text-white">
                {((matrixData.keyMetrics + matrixData.strategicGrowth + matrixData.costOptimization) / 3).toFixed(1)}
                /10
              </div>
              <Progress
                value={((matrixData.keyMetrics + matrixData.strategicGrowth + matrixData.costOptimization) / 3) * 10}
                className="mt-2 h-1.5 bg-zinc-800"
              />
              <div className="mt-3 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Key Metrics</span>
                  <span className="text-zinc-300">{matrixData.keyMetrics}/10</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Strategic Growth</span>
                  <span className="text-zinc-300">{matrixData.strategicGrowth}/10</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Cost Optimization</span>
                  <span className="text-zinc-300">{matrixData.costOptimization}/10</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Target Operating Model Section */}
      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Target Operating Model</h2>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader className="pb-2">
              <CardTitle className="text-white flex items-center gap-2 text-sm">
                <Users className="h-4 w-4 text-primary" />
                People
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="text-xl font-bold text-white">
                {((matrixData.criticalSkills + matrixData.keyMetrics + matrixData.operationalExcellence) / 3).toFixed(
                  1,
                )}
                /10
              </div>
              <Progress
                value={
                  ((matrixData.criticalSkills + matrixData.keyMetrics + matrixData.operationalExcellence) / 3) * 10
                }
                className="mt-2 h-1.5 bg-zinc-800"
              />
              <div className="mt-3 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Critical Skills</span>
                  <span className="text-zinc-300">{matrixData.criticalSkills}/10</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Key Metrics</span>
                  <span className="text-zinc-300">{matrixData.keyMetrics}/10</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Operational Excellence</span>
                  <span className="text-zinc-300">{matrixData.operationalExcellence}/10</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader className="pb-2">
              <CardTitle className="text-white flex items-center gap-2 text-sm">
                <Settings className="h-4 w-4 text-primary" />
                Processes
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="text-xl font-bold text-white">
                {((matrixData.strategicGrowth + matrixData.integrity + matrixData.performanceEfficiency) / 3).toFixed(
                  1,
                )}
                /10
              </div>
              <Progress
                value={
                  ((matrixData.strategicGrowth + matrixData.integrity + matrixData.performanceEfficiency) / 3) * 10
                }
                className="mt-2 h-1.5 bg-zinc-800"
              />
              <div className="mt-3 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Strategic Growth</span>
                  <span className="text-zinc-300">{matrixData.strategicGrowth}/10</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Integrity</span>
                  <span className="text-zinc-300">{matrixData.integrity}/10</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Performance Efficiency</span>
                  <span className="text-zinc-300">{matrixData.performanceEfficiency}/10</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader className="pb-2">
              <CardTitle className="text-white flex items-center gap-2 text-sm">
                <Database className="h-4 w-4 text-primary" />
                Technology
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-2">
              <div className="text-xl font-bold text-white">
                {((matrixData.solutionComponents + matrixData.reliability + matrixData.costOptimization) / 3).toFixed(
                  1,
                )}
                /10
              </div>
              <Progress
                value={
                  ((matrixData.solutionComponents + matrixData.reliability + matrixData.costOptimization) / 3) * 10
                }
                className="mt-2 h-1.5 bg-zinc-800"
              />
              <div className="mt-3 space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Solution Components</span>
                  <span className="text-zinc-300">{matrixData.solutionComponents}/10</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Reliability</span>
                  <span className="text-zinc-300">{matrixData.reliability}/10</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Cost Optimization</span>
                  <span className="text-zinc-300">{matrixData.costOptimization}/10</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Score Consistency and Conservative Adjustments moved to the bottom */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Score Consistency Section */}
        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Score Consistency
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Justification for the assessment scores based on company context
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-zinc-400 mb-2">
                Based on the holistic review of Emata's materials, transcripts, financials, and tech documentation, the
                WAB-SM scores are broadly fair and consistent when viewed through the lens of:
              </p>
              <ul className="list-disc pl-5 text-sm text-zinc-400 space-y-1">
                <li>A pre-profit, early-scale micro-lending business</li>
                <li>Operating in low-infrastructure environments (East Africa)</li>
                <li>Now expanding cross-border with a relatively lean team</li>
                <li>Delivering financial services to high-risk, underserved customer segments</li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium text-primary mb-2 flex items-center">
                <span className="mr-2">🎯</span> Key Observations Justifying Score Consistency
              </h3>
              <p className="text-sm text-zinc-400 mb-2">
                Scores cluster in the 6.4–7.5 range → reflects above-average capability for stage and context, but not
                excellence (8–10) which would demand demonstrated resilience at scale, automation maturity, and global
                controls.
              </p>

              <div className="space-y-3 mt-3">
                <div>
                  <p className="text-sm font-medium text-zinc-300">
                    Critical Skills (6.9), Strategic Growth (7.5), Key Metrics (7.2):
                  </p>
                  <ul className="list-disc pl-5 text-sm text-zinc-400 space-y-1">
                    <li>
                      These are strongly supported by the documentation. The team is credible, traction is real, and
                      growth potential is evident.
                    </li>
                    <li>
                      Above average but not outstanding — appropriate for a Series A-level venture still refining
                      infrastructure and model consistency.
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-medium text-zinc-300">
                    Lower scores in areas like Performance Efficiency (6.4) and Operational Excellence (6.6):
                  </p>
                  <ul className="list-disc pl-5 text-sm text-zinc-400 space-y-1">
                    <li>
                      Rightly reflect friction such as manual data processes, lack of SOPs, and inconsistent automation
                      — meaningful weaknesses for a tech-led lender.
                    </li>
                    <li>
                      These are typical for early-stage startups, especially in emerging markets — but will become
                      critical gaps at scale if unaddressed.
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-medium text-zinc-300">Integrity (7.4) and Cost Optimization (7.1):</p>
                  <ul className="list-disc pl-5 text-sm text-zinc-400 space-y-1">
                    <li>
                      Scores are slightly higher due to verifiable audited compliance, governance structures, and
                      disciplined resource use.
                    </li>
                    <li>These are strategic strengths that help offset executional inefficiencies.</li>
                  </ul>
                </div>

                <div>
                  <p className="text-sm font-medium text-zinc-300">No exaggerated 8+ scores:</p>
                  <ul className="list-disc pl-5 text-sm text-zinc-400 space-y-1">
                    <li>
                      Emata is not yet demonstrating category-defining excellence in any WAB-SM pillar (e.g., autonomous
                      ML pipelines, negative CAC, zero-downtime infra), which would be required to justify higher
                      ratings.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conservative Adjustments Section */}
        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              Conservative Adjustments
            </CardTitle>
            <CardDescription className="text-zinc-400">
              Potential score refinements based on a more conservative assessment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div>
              <h3 className="text-sm font-medium text-amber-500 mb-2 flex items-center">
                <span className="mr-2">⚠️</span> Where Adjustments Could Be Justified:
              </h3>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="text-left py-2 text-zinc-400 font-medium">Dimension</th>
                      <th className="text-center py-2 text-zinc-400 font-medium">Original Score</th>
                      <th className="text-center py-2 text-zinc-400 font-medium">Possible Adjusted</th>
                      <th className="text-left py-2 text-zinc-400 font-medium">Rationale</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    <tr>
                      <td className="py-3 text-zinc-300">Solution Components</td>
                      <td className="py-3 text-center text-zinc-300">6.8</td>
                      <td className="py-3 text-center text-amber-500">6.5</td>
                      <td className="py-3 text-zinc-400">
                        Tech stack is modern but lacks MLOps rigor, SOP coverage, and user segmentation depth.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 text-zinc-300">Performance Efficiency</td>
                      <td className="py-3 text-center text-zinc-300">6.4</td>
                      <td className="py-3 text-center text-amber-500">6.2</td>
                      <td className="py-3 text-zinc-400">
                        Manual processes, data entry fragility, and productivity leakage are greater than peers with
                        similar capital raised.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 text-zinc-300">Operational Excellence</td>
                      <td className="py-3 text-center text-zinc-300">6.6</td>
                      <td className="py-3 text-center text-amber-500">6.3</td>
                      <td className="py-3 text-zinc-400">
                        Credit workflows strong, but system automation and SOP maturity are below cross-border expansion
                        readiness.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="text-sm text-zinc-400 mt-4">
                These adjustments are minor (0.2–0.3), and would mostly reflect a slightly more conservative view given
                the company's shift into multi-country scale.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
