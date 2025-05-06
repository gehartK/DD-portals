"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { AlertTriangle, Lock, Shield, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export default function DisclaimerPage() {
  const router = useRouter()
  const [accepted, setAccepted] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  const handleContinue = () => {
    if (accepted) {
      router.push("/portal/company-overview")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-black p-4">
      <Card className="w-full max-w-3xl border-zinc-800 bg-zinc-900/90 backdrop-blur-sm shadow-xl">
        <CardHeader className="space-y-2 pb-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-500/20 text-yellow-500">
              <AlertTriangle className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-white">Confidentiality Disclaimer</CardTitle>
              <CardDescription className="text-zinc-400">
                Please review and accept before accessing the investor portal
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-lg bg-zinc-800/70 p-4 flex flex-col items-center text-center">
              <Lock className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium text-zinc-200 mb-1">Confidential</h3>
              <p className="text-xs text-zinc-400">Highly confidential information for authorized recipients only</p>
            </div>
            <div className="rounded-lg bg-zinc-800/70 p-4 flex flex-col items-center text-center">
              <Shield className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium text-zinc-200 mb-1">Protected</h3>
              <p className="text-xs text-zinc-400">Information is protected by confidentiality agreements</p>
            </div>
            <div className="rounded-lg bg-zinc-800/70 p-4 flex flex-col items-center text-center">
              <FileText className="h-8 w-8 text-primary mb-2" />
              <h3 className="font-medium text-zinc-200 mb-1">Assessment</h3>
              <p className="text-xs text-zinc-400">For assessment purposes with reasonable understanding</p>
            </div>
          </div>

          <div className="rounded-md bg-zinc-800/50 p-6 text-sm text-zinc-300 border border-zinc-700/50 shadow-inner">
            <div className="space-y-4">
              <p>
                <strong>Confidentiality Notice:</strong> The contents of this portal are highly confidential and
                intended only for recipients who receive it directly from Reisiger. Unauthorized access, disclosure,
                copying, distribution, or use of any information herein is strictly prohibited.
              </p>
              <p>
                <strong>Limited Use:</strong> The information in this portal should only be used with reasonable
                understanding of the information provided for the assessment. Any other use is unauthorized and
                prohibited.
              </p>
              <p>
                <strong>Disclaimer of Liability:</strong> Reisiger and/or its partners do not accept any responsibility
                for actions that may result in loss or damages from contents in this portal document. All information is
                provided on an as-is basis without warranties of any kind.
              </p>
              <p>
                <strong>Opinions and Analysis:</strong> Opinions expressed are the views of Reisiger and based on data
                provided either verbally or electronically. These views may change without notice based on additional
                information or analysis.
              </p>
              <p>
                <strong>No Investment Advice:</strong> The content of this portal does not constitute investment advice
                or a recommendation to invest in the startup under review. Any investment decision should be made based
                on your own research and consultation with financial advisors.
              </p>
              <p>
                <strong>Forward-Looking Statements:</strong> This portal may contain forward-looking statements that
                involve risks and uncertainties. Actual results may differ materially from those projected or
                anticipated.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-3 bg-zinc-800/30 p-4 rounded-lg border border-zinc-800/50">
            <Checkbox
              id="terms"
              checked={accepted}
              onCheckedChange={(checked) => setAccepted(checked as boolean)}
              className="mt-1 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
            />
            <Label htmlFor="terms" className="text-sm text-zinc-300 leading-relaxed">
              I acknowledge that the information provided in this portal is highly confidential and intended only for
              recipients who receive it directly from Reisiger. I agree to use this information only for assessment
              purposes with reasonable understanding and accept that Reisiger and/or its partners do not accept
              responsibility for any resulting losses or damages.
            </Label>
          </div>
        </CardContent>
        <Separator className="bg-zinc-800" />
        <CardFooter className="pt-6">
          <Button
            onClick={handleContinue}
            disabled={!accepted}
            className="w-full relative overflow-hidden group"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <span className={`transition-all duration-300 ${isHovering && accepted ? "opacity-0" : "opacity-100"}`}>
              Continue to Portal
            </span>
            <span
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${isHovering && accepted ? "opacity-100" : "opacity-0"}`}
            >
              Access Company Overview
            </span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
