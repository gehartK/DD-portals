"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Users, Leaf, DollarSign, BarChart3, Zap, Shield, Settings, Database } from "lucide-react"

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
    criticalSkills: 5.0,
    keyMetrics: 4.9,
    strategicGrowth: 5.5,
    integrity: 6.0,
    performanceEfficiency: 4.3,
    operationalExcellence: 4.8,
    solutionComponents: 3.9,
    reliability: 6.0,
    costOptimization: 5.2,
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

      {/* Company Summary Section - Minimalist Design */}
      <Card className="border-zinc-800 bg-zinc-900">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Leaf className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Melanin Kapital</h2>
              <p className="text-zinc-400">Carbon Neobank for African SMEs</p>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <h3 className="text-sm font-medium text-zinc-300 mb-1">Leadership</h3>
              <p className="text-sm text-zinc-400">Melanie Keita Mariam (CEO)</p>
              <p className="text-sm text-zinc-400">Ian Minjire Kibira (COO)</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-zinc-300 mb-1">Founded</h3>
              <p className="text-sm text-zinc-400">2020, Nairobi, Kenya</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-zinc-300 mb-1">Industry</h3>
              <p className="text-sm text-zinc-400">Fintech, CleanTech</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-zinc-300 mb-1">Revenue (YTD)</h3>
              <p className="text-sm text-zinc-400">$176,000 (2024)</p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-zinc-800">
            <h3 className="text-sm font-medium text-zinc-300 mb-2">Mission</h3>
            <p className="text-sm text-zinc-400">
              To enable African businesses to access financing and reduce their carbon footprint, while contributing to
              Africa's growing voluntary carbon markets.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-3">
        {/* Business Maturity Score - Minimalist Design */}
        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-zinc-300">Business Maturity Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-end gap-2">
              <div className="text-3xl font-bold text-white">{bms.toFixed(1)}</div>
              <div className="text-sm text-zinc-400 mb-1">/10</div>
            </div>
            <Progress value={bms * 10} className="mt-2 h-1.5 bg-zinc-800" />
            <div className="mt-4 flex items-center justify-between">
              <p className="text-xs text-zinc-400">Maturity Phase</p>
              <span className="text-xs px-2 py-1 rounded-full bg-zinc-800 text-zinc-300">{getMaturityPhase(bms)}</span>
            </div>
            <p className="mt-3 text-xs text-zinc-500">5/10 represents industry standard</p>
          </CardContent>
        </Card>

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

      {/* Architectural Theme Tiles */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3s-3">
        <Card className="border-zinc-800 bg-zinc-900 overflow-hidden transition-all duration-200 hover:border-primary/20 hover:shadow-md hover:shadow-primary/5">
          <div className="bg-gradient-to-r from-zinc-800/50 to-zinc-900 p-1">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Business Model
              </CardTitle>
            </CardHeader>
          </div>
          <CardContent className="pt-4">
            <div className="text-2xl font-bold text-white">
              {(
                (matrixData.performanceEfficiency + matrixData.operationalExcellence + matrixData.solutionComponents) /
                3
              ).toFixed(1)}
              /10
            </div>
            <Progress
              value={
                ((matrixData.performanceEfficiency + matrixData.operationalExcellence + matrixData.solutionComponents) /
                  3) *
                10
              }
              className="mt-2 h-2 bg-zinc-800"
            />
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Performance Efficiency</span>
                <span className="text-zinc-300 font-medium">{matrixData.performanceEfficiency}/10</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Operational Excellence</span>
                <span className="text-zinc-300 font-medium">{matrixData.operationalExcellence}/10</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Solution Components</span>
                <span className="text-zinc-300 font-medium">{matrixData.solutionComponents}/10</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Business Management
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {((matrixData.criticalSkills + matrixData.integrity + matrixData.reliability) / 3).toFixed(1)}/10
            </div>
            <Progress
              value={((matrixData.criticalSkills + matrixData.integrity + matrixData.reliability) / 3) * 10}
              className="mt-2 h-1.5"
            />
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Critical Skills</span>
                <span className="text-zinc-300">{matrixData.criticalSkills}/10</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Integrity</span>
                <span className="text-zinc-300">{matrixData.integrity}/10</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Reliability</span>
                <span className="text-zinc-300">{matrixData.reliability}/10</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-primary" />
              Predictable Cashflow
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {((matrixData.keyMetrics + matrixData.strategicGrowth + matrixData.costOptimization) / 3).toFixed(1)}
              /10
            </div>
            <Progress
              value={((matrixData.keyMetrics + matrixData.strategicGrowth + matrixData.costOptimization) / 3) * 10}
              className="mt-2 h-1.5"
            />
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Key Metrics</span>
                <span className="text-zinc-300">{matrixData.keyMetrics}/10</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Strategic Growth</span>
                <span className="text-zinc-300">{matrixData.strategicGrowth}/10</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Cost Optimization</span>
                <span className="text-zinc-300">{matrixData.costOptimization}/10</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              People
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {((matrixData.criticalSkills + matrixData.keyMetrics + matrixData.operationalExcellence) / 3).toFixed(1)}
              /10
            </div>
            <Progress
              value={((matrixData.criticalSkills + matrixData.keyMetrics + matrixData.operationalExcellence) / 3) * 10}
              className="mt-2 h-1.5"
            />
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Critical Skills</span>
                <span className="text-zinc-300">{matrixData.criticalSkills}/10</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Key Metrics</span>
                <span className="text-zinc-300">{matrixData.keyMetrics}/10</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Operational Excellence</span>
                <span className="text-zinc-300">{matrixData.operationalExcellence}/10</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              Processes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {((matrixData.strategicGrowth + matrixData.integrity + matrixData.performanceEfficiency) / 3).toFixed(1)}
              /10
            </div>
            <Progress
              value={((matrixData.strategicGrowth + matrixData.integrity + matrixData.performanceEfficiency) / 3) * 10}
              className="mt-2 h-1.5"
            />
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Strategic Growth</span>
                <span className="text-zinc-300">{matrixData.strategicGrowth}/10</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Integrity</span>
                <span className="text-zinc-300">{matrixData.integrity}/10</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Performance Efficiency</span>
                <span className="text-zinc-300">{matrixData.performanceEfficiency}/10</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-zinc-800 bg-zinc-900">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" />
              Technology
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-white">
              {((matrixData.solutionComponents + matrixData.reliability + matrixData.costOptimization) / 3).toFixed(1)}
              /10
            </div>
            <Progress
              value={((matrixData.solutionComponents + matrixData.reliability + matrixData.costOptimization) / 3) * 10}
              className="mt-2 h-1.5"
            />
            <div className="mt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Solution Components</span>
                <span className="text-zinc-300">{matrixData.solutionComponents}/10</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Reliability</span>
                <span className="text-zinc-300">{matrixData.reliability}/10</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-zinc-400">Cost Optimization</span>
                <span className="text-zinc-300">{matrixData.costOptimization}/10</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
