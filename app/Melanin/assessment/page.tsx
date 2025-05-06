import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

export default function AssessmentPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">Assessment Matrix</h1>
        <p className="text-zinc-400">Detailed evaluation criteria and scores from the due diligence process.</p>
      </div>

      <Alert variant="destructive" className="bg-yellow-900/20 text-yellow-500 border-yellow-900/50">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Assessment Matrix Not Uploaded</AlertTitle>
        <AlertDescription>
          Please upload the assessment matrix data to visualize the complete evaluation.
        </AlertDescription>
      </Alert>

      <Tabs defaultValue="business" className="w-full">
        <TabsList className="grid w-full grid-cols-5 bg-zinc-800">
          <TabsTrigger value="business">Business Model</TabsTrigger>
          <TabsTrigger value="market">Market</TabsTrigger>
          <TabsTrigger value="product">Product</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="financials">Financials</TabsTrigger>
        </TabsList>
        <TabsContent value="business" className="mt-4">
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle className="text-white">Business Model Assessment</CardTitle>
              <CardDescription className="text-zinc-400">
                Evaluation of the startup's business model viability and scalability
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center border border-dashed border-zinc-700 rounded-lg bg-zinc-800/50 text-zinc-500">
                Business model assessment data will appear here after uploading the matrix
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="market" className="mt-4">
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle className="text-white">Market Assessment</CardTitle>
              <CardDescription className="text-zinc-400">
                Evaluation of market size, growth potential, and competitive landscape
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center border border-dashed border-zinc-700 rounded-lg bg-zinc-800/50 text-zinc-500">
                Market assessment data will appear here after uploading the matrix
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="product" className="mt-4">
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle className="text-white">Product Assessment</CardTitle>
              <CardDescription className="text-zinc-400">
                Evaluation of product-market fit, technology, and intellectual property
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center border border-dashed border-zinc-700 rounded-lg bg-zinc-800/50 text-zinc-500">
                Product assessment data will appear here after uploading the matrix
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="team" className="mt-4">
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle className="text-white">Team Assessment</CardTitle>
              <CardDescription className="text-zinc-400">
                Evaluation of leadership, expertise, and team composition
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center border border-dashed border-zinc-700 rounded-lg bg-zinc-800/50 text-zinc-500">
                Team assessment data will appear here after uploading the matrix
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="financials" className="mt-4">
          <Card className="border-zinc-800 bg-zinc-900">
            <CardHeader>
              <CardTitle className="text-white">Financial Assessment</CardTitle>
              <CardDescription className="text-zinc-400">
                Evaluation of financial health, projections, and funding requirements
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] flex items-center justify-center border border-dashed border-zinc-700 rounded-lg bg-zinc-800/50 text-zinc-500">
                Financial assessment data will appear here after uploading the matrix
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
