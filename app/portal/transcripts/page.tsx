import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, FileUp, Search } from "lucide-react"

export default function TranscriptsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-white">Interview Transcripts</h1>
        <p className="text-zinc-400">Analysis of founder and team interviews from the due diligence process.</p>
      </div>

      <Alert variant="destructive" className="bg-yellow-900/20 text-yellow-500 border-yellow-900/50">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>No Transcripts Uploaded</AlertTitle>
        <AlertDescription>Please upload interview transcripts to analyze and display insights.</AlertDescription>
      </Alert>

      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-zinc-500" />
          <Input
            type="search"
            placeholder="Search transcripts..."
            className="w-full bg-zinc-800 border-zinc-700 pl-8 text-zinc-100"
          />
        </div>
        <Button className="gap-2">
          <FileUp className="h-4 w-4" />
          Upload Transcript
        </Button>
      </div>

      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader>
          <CardTitle className="text-white">Upload Interview Transcripts</CardTitle>
          <CardDescription className="text-zinc-400">
            Upload transcripts from founder and team interviews for analysis
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-center justify-center gap-4 p-10 border border-dashed border-zinc-700 rounded-lg bg-zinc-800/50 text-center">
            <FileUp className="h-10 w-10 text-zinc-500" />
            <div>
              <p className="text-zinc-300 font-medium">Drag and drop transcript files</p>
              <p className="text-zinc-500 text-sm mt-1">Support for .txt, .doc, .docx, and .pdf files</p>
            </div>
            <Button size="sm">Browse Files</Button>
          </div>
        </CardContent>
      </Card>

      <Card className="border-zinc-800 bg-zinc-900">
        <CardHeader>
          <CardTitle className="text-white">Key Insights from Transcripts</CardTitle>
          <CardDescription className="text-zinc-400">
            Automatically extracted insights from interview transcripts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 text-center py-10">
            <p className="text-zinc-400">Upload transcripts to generate insights and analysis</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
