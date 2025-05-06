"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import {
  BarChart3,
  Brain,
  Building2,
  Cog,
  Database,
  LogOut,
  Menu,
  PieChart,
  Shield,
  Target,
  X,
  Zap,
  LineChart,
  Home,
  DollarSign,
  Server,
  Printer,
  ImageIcon,
  Archive,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface NavSectionProps {
  title: string
  children: React.ReactNode
}

function NavSection({ title, children }: NavSectionProps) {
  return (
    <div className="space-y-1">
      <h3 className="mb-2 px-3 text-xs font-semibold uppercase text-zinc-500">{title}</h3>
      <div className="space-y-1">{children}</div>
    </div>
  )
}

interface NavItemProps {
  href: string
  label: string
  icon: React.ReactNode
  isActive: boolean
  className?: string
}

function NavItem({ href, label, icon, isActive, className }: NavItemProps) {
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all",
        isActive ? "bg-primary text-primary-foreground" : "text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100",
        className,
      )}
    >
      {icon}
      {label}
    </Link>
  )
}

export default function PortalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const router = useRouter()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [isExporting, setIsExporting] = useState(false)
  const [isBatchExporting, setIsBatchExporting] = useState(false)
  const [html2canvas, setHtml2canvas] = useState<any>(null)
  const [jszip, setJszip] = useState<any>(null)
  const [exportProgress, setExportProgress] = useState({ current: 0, total: 0, page: "" })

  // Load html2canvas and jszip dynamically on client side
  useEffect(() => {
    Promise.all([
      import("html2canvas").then((module) => setHtml2canvas(() => module.default)),
      import("jszip").then((module) => setJszip(() => module.default)),
    ])
  }, [])

  // Define all portal pages for batch export
  const companyPages = [
    { href: "/portal/company-overview", label: "Company Overview", icon: <Building2 className="h-4 w-4" /> },
    { href: "/portal/value-chain", label: "Value Chain", icon: <LineChart className="h-4 w-4" /> },
    { href: "/portal/finances", label: "Finances", icon: <DollarSign className="h-4 w-4" /> },
    { href: "/portal/technologies", label: "Technologies", icon: <Server className="h-4 w-4" /> },
  ]

  const criticalSolutionPages = [
    { href: "/portal", label: "Summary", icon: <Home className="h-4 w-4" /> },
    { href: "/portal/critical-skills", label: "Critical Skills", icon: <Brain className="h-4 w-4" /> },
    { href: "/portal/key-metrics", label: "Key Metrics", icon: <BarChart3 className="h-4 w-4" /> },
    { href: "/portal/strategic-growth", label: "Strategic Growth", icon: <LineChart className="h-4 w-4" /> },
    { href: "/portal/integrity", label: "Integrity", icon: <Shield className="h-4 w-4" /> },
    { href: "/portal/performance-efficiency", label: "Performance Efficiency", icon: <Zap className="h-4 w-4" /> },
    { href: "/portal/operational-excellence", label: "Operational Excellence", icon: <Cog className="h-4 w-4" /> },
    { href: "/portal/data-security", label: "Solution Components", icon: <Database className="h-4 w-4" /> },
    { href: "/portal/reliability", label: "Reliability", icon: <Target className="h-4 w-4" /> },
    { href: "/portal/cost-optimization", label: "Cost Optimization", icon: <PieChart className="h-4 w-4" /> },
  ]

  // Combine all pages for batch export
  const allPages = [...companyPages, ...criticalSolutionPages]

  // Function to handle batch export of all pages
  const handleBatchExport = async () => {
    if (!html2canvas || !jszip) {
      // Show loading modal while libraries are being loaded
      const loadingModal = document.createElement("div")
      loadingModal.className = "print-instructions-modal"
      loadingModal.innerHTML = `
        <div class="print-instructions-content">
          <h2>Loading Export Tools</h2>
          <p>Please wait while we load the necessary export tools...</p>
          <div class="loading-spinner"></div>
        </div>
      `
      document.body.appendChild(loadingModal)

      // Wait for libraries to load
      await new Promise((resolve) => {
        const checkInterval = setInterval(() => {
          if (html2canvas && jszip) {
            clearInterval(checkInterval)
            document.body.removeChild(loadingModal)
            resolve(true)
          }
        }, 100)
      })
    }

    // Show export options modal
    const exportModal = document.createElement("div")
    exportModal.className = "print-instructions-modal"
    exportModal.innerHTML = `
      <div class="print-instructions-content">
        <h2>Export All Pages to ZIP</h2>
        <p>This will capture all portal pages as high-resolution PNG images and package them in a ZIP file.</p>
        <div class="export-options">
          <div class="option">
            <label>
              <input type="checkbox" id="include-header" checked>
              Include page headers
            </label>
          </div>
          <div class="option">
            <label>Scale factor: 
              <select id="scale-factor">
                <option value="1">1x (Standard)</option>
                <option value="2" selected>2x (High Resolution)</option>
                <option value="3">3x (Ultra HD)</option>
              </select>
            </label>
          </div>
          <div class="option">
            <label>
              <input type="checkbox" id="expand-tabs" checked>
              Expand all tabs on pages
            </label>
          </div>
        </div>
        <p class="note">Note: This process may take several minutes depending on the number of pages and complexity.</p>
        <div class="button-container">
          <button id="start-batch-export" class="print-button">Start Export</button>
          <button id="cancel-batch-export" class="cancel-button">Cancel</button>
        </div>
      </div>
    `
    document.body.appendChild(exportModal)

    // Add event listeners to the buttons
    document.getElementById("start-batch-export")?.addEventListener("click", async () => {
      // Remove the modal
      document.body.removeChild(exportModal)

      // Get export options
      const includeHeader = (document.getElementById("include-header") as HTMLInputElement)?.checked
      const scaleFactor = Number.parseInt((document.getElementById("scale-factor") as HTMLSelectElement)?.value || "2")
      const expandTabs = (document.getElementById("expand-tabs") as HTMLInputElement)?.checked

      // Create progress modal
      const progressModal = document.createElement("div")
      progressModal.className = "print-instructions-modal"
      progressModal.innerHTML = `
        <div class="print-instructions-content">
          <h2>Exporting All Pages</h2>
          <div class="progress-container">
            <div class="progress-info">
              <span id="progress-page">Preparing...</span>
              <span id="progress-count">0/${allPages.length}</span>
            </div>
            <div class="progress-bar-container">
              <div id="progress-bar" class="progress-bar" style="width: 0%"></div>
            </div>
          </div>
          <p class="note">Please do not navigate away from this page during export.</p>
          <div class="button-container">
            <button id="cancel-progress" class="cancel-button">Cancel</button>
          </div>
        </div>
      `
      document.body.appendChild(progressModal)

      // Add event listener to cancel button
      document.getElementById("cancel-progress")?.addEventListener("click", () => {
        document.body.removeChild(progressModal)
        setIsBatchExporting(false)
        setExportProgress({ current: 0, total: 0, page: "" })
      })

      try {
        setIsBatchExporting(true)
        setExportProgress({ current: 0, total: allPages.length, page: "Initializing..." })

        // Create a new JSZip instance
        const zip = new jszip()
        const currentPath = pathname
        const originalContent = document.querySelector("main")?.innerHTML || ""

        // Create a folder in the zip for the images
        const imagesFolder = zip.folder("portal-images")

        // Save the current page content
        const pageContentBackup = document.querySelector("main")?.innerHTML

        // Function to update progress
        const updateProgress = (current: number, total: number, page: string) => {
          setExportProgress({ current, total, page })
          const progressElement = document.getElementById("progress-bar")
          const progressCountElement = document.getElementById("progress-count")
          const progressPageElement = document.getElementById("progress-page")

          if (progressElement) {
            progressElement.style.width = `${(current / total) * 100}%`
          }

          if (progressCountElement) {
            progressCountElement.textContent = `${current}/${total}`
          }

          if (progressPageElement) {
            progressPageElement.textContent = page
          }
        }

        // Function to capture a page
        const capturePage = async (page: { href: string; label: string }) => {
          // Navigate to the page
          router.push(page.href)

          // Wait for page to load and render
          await new Promise((resolve) => setTimeout(resolve, 2000))

          // Prepare content for export
          prepareContentForExport(expandTabs)

          // Wait for any animations or transitions to complete
          await new Promise((resolve) => setTimeout(resolve, 500))

          // Get the main content element
          const mainContent = document.querySelector("main")
          const header = includeHeader ? document.querySelector("header") : null

          if (!mainContent) {
            throw new Error("Could not find main content element")
          }

          // Create a container for the export
          const exportContainer = document.createElement("div")
          exportContainer.className = "export-container"
          exportContainer.style.position = "absolute"
          exportContainer.style.left = "-9999px"
          exportContainer.style.top = "0"
          document.body.appendChild(exportContainer)

          // Clone the content
          const contentClone = mainContent.cloneNode(true) as HTMLElement
          contentClone.style.width = `${mainContent.scrollWidth}px`
          contentClone.style.height = `${mainContent.scrollHeight}px`
          contentClone.style.backgroundColor = getComputedStyle(mainContent).backgroundColor
          contentClone.style.padding = getComputedStyle(mainContent).padding

          // Add header if needed
          if (header && includeHeader) {
            const headerClone = header.cloneNode(true) as HTMLElement
            headerClone.style.width = `${mainContent.scrollWidth}px`
            exportContainer.appendChild(headerClone)
          }

          exportContainer.appendChild(contentClone)

          // Capture the image with html2canvas
          const canvas = await html2canvas(exportContainer, {
            scale: scaleFactor,
            useCORS: true,
            allowTaint: true,
            backgroundColor: getComputedStyle(mainContent).backgroundColor,
            logging: false,
            windowWidth: mainContent.scrollWidth,
            windowHeight: mainContent.scrollHeight + (header && includeHeader ? header.scrollHeight : 0),
          })

          // Clean up
          document.body.removeChild(exportContainer)

          // Convert to PNG
          const imageData = canvas.toDataURL("image/png")

          // Extract base64 data
          const base64Data = imageData.split(",")[1]

          // Add to zip
          const pageName = page.label.replace(/[^a-z0-9]/gi, "-").toLowerCase()
          imagesFolder?.file(`${pageName}.png`, base64Data, { base64: true })

          // Reset content
          resetContentAfterExport()

          return pageName
        }

        // Process each page
        for (let i = 0; i < allPages.length; i++) {
          const page = allPages[i]
          updateProgress(i, allPages.length, `Exporting: ${page.label}`)

          try {
            await capturePage(page)
          } catch (error) {
            console.error(`Error capturing page ${page.label}:`, error)
          }

          // Small delay between pages to ensure clean state
          await new Promise((resolve) => setTimeout(resolve, 500))
        }

        // Return to the original page
        router.push(currentPath)

        // Wait for page to load
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Restore original content if needed
        if (pageContentBackup && document.querySelector("main")) {
          document.querySelector("main")!.innerHTML = pageContentBackup
        }

        // Generate the zip file
        updateProgress(allPages.length, allPages.length, "Creating ZIP file...")
        const zipBlob = await zip.generateAsync({ type: "blob" })

        // Create download link
        const downloadLink = document.createElement("a")
        downloadLink.href = URL.createObjectURL(zipBlob)
        downloadLink.download = `portal-export-${new Date().toISOString().split("T")[0]}.zip`
        downloadLink.click()

        // Remove progress modal
        document.body.removeChild(progressModal)

        // Show success modal
        const successModal = document.createElement("div")
        successModal.className = "print-instructions-modal"
        successModal.innerHTML = `
          <div class="print-instructions-content">
            <h2>Export Complete</h2>
            <p>All pages have been successfully exported and packaged into a ZIP file.</p>
            <div class="button-container">
              <button id="close-success" class="print-button">Close</button>
            </div>
          </div>
        `
        document.body.appendChild(successModal)

        document.getElementById("close-success")?.addEventListener("click", () => {
          document.body.removeChild(successModal)
        })
      } catch (error) {
        console.error("Batch export error:", error)

        // Remove progress modal if it exists
        const existingModal = document.querySelector(".print-instructions-modal")
        if (existingModal) {
          document.body.removeChild(existingModal)
        }

        // Show error modal
        const errorModal = document.createElement("div")
        errorModal.className = "print-instructions-modal"
        errorModal.innerHTML = `
          <div class="print-instructions-content">
            <h2>Export Failed</h2>
            <p>There was an error exporting the pages. Please try again.</p>
            <p class="error-details">${error instanceof Error ? error.message : "Unknown error"}</p>
            <div class="button-container">
              <button id="close-error" class="print-button">Close</button>
            </div>
          </div>
        `
        document.body.appendChild(errorModal)

        document.getElementById("close-error")?.addEventListener("click", () => {
          document.body.removeChild(errorModal)
        })
      } finally {
        setIsBatchExporting(false)
        setExportProgress({ current: 0, total: 0, page: "" })
      }
    })

    document.getElementById("cancel-batch-export")?.addEventListener("click", () => {
      // Remove the modal
      document.body.removeChild(exportModal)
    })
  }

  // Function to handle PNG export
  const handleExportToPNG = async () => {
    if (!html2canvas) {
      // Show loading modal while html2canvas is being loaded
      const loadingModal = document.createElement("div")
      loadingModal.className = "print-instructions-modal"
      loadingModal.innerHTML = `
        <div class="print-instructions-content">
          <h2>Loading Export Tool</h2>
          <p>Please wait while we load the image export tool...</p>
          <div class="loading-spinner"></div>
        </div>
      `
      document.body.appendChild(loadingModal)

      // Wait for html2canvas to load
      await new Promise((resolve) => {
        const checkInterval = setInterval(() => {
          if (html2canvas) {
            clearInterval(checkInterval)
            document.body.removeChild(loadingModal)
            resolve(true)
          }
        }, 100)
      })
    }

    // Show export modal
    const exportModal = document.createElement("div")
    exportModal.className = "print-instructions-modal"
    exportModal.innerHTML = `
      <div class="print-instructions-content">
        <h2>Export to PNG</h2>
        <p>This will capture the current page as a high-resolution PNG image.</p>
        <div class="export-options">
          <div class="option">
            <label>
              <input type="checkbox" id="include-header" checked>
              Include page header
            </label>
          </div>
          <div class="option">
            <label>Scale factor: 
              <select id="scale-factor">
                <option value="1">1x (Standard)</option>
                <option value="2" selected>2x (High Resolution)</option>
                <option value="3">3x (Ultra HD)</option>
              </select>
            </label>
          </div>
        </div>
        <div class="button-container">
          <button id="start-export" class="print-button">Export Image</button>
          <button id="cancel-export" class="cancel-button">Cancel</button>
        </div>
      </div>
    `
    document.body.appendChild(exportModal)

    // Add event listeners to the buttons
    document.getElementById("start-export")?.addEventListener("click", async () => {
      // Remove the modal
      document.body.removeChild(exportModal)

      // Get export options
      const includeHeader = (document.getElementById("include-header") as HTMLInputElement)?.checked
      const scaleFactor = Number.parseInt((document.getElementById("scale-factor") as HTMLSelectElement)?.value || "2")

      // Show progress modal
      const progressModal = document.createElement("div")
      progressModal.className = "print-instructions-modal"
      progressModal.innerHTML = `
        <div class="print-instructions-content">
          <h2>Exporting Image</h2>
          <p>Please wait while we generate your high-resolution image...</p>
          <div class="loading-spinner"></div>
        </div>
      `
      document.body.appendChild(progressModal)

      try {
        setIsExporting(true)

        // Get the main content element
        const mainContent = document.querySelector("main")
        const header = includeHeader ? document.querySelector("header") : null

        if (!mainContent) {
          throw new Error("Could not find main content element")
        }

        // Prepare content for export
        prepareContentForExport()

        // Create a container for the export
        const exportContainer = document.createElement("div")
        exportContainer.className = "export-container"
        exportContainer.style.position = "absolute"
        exportContainer.style.left = "-9999px"
        exportContainer.style.top = "0"
        document.body.appendChild(exportContainer)

        // Clone the content
        const contentClone = mainContent.cloneNode(true) as HTMLElement
        contentClone.style.width = `${mainContent.scrollWidth}px`
        contentClone.style.height = `${mainContent.scrollHeight}px`
        contentClone.style.backgroundColor = getComputedStyle(mainContent).backgroundColor
        contentClone.style.padding = getComputedStyle(mainContent).padding

        // Add header if needed
        if (header && includeHeader) {
          const headerClone = header.cloneNode(true) as HTMLElement
          headerClone.style.width = `${mainContent.scrollWidth}px`
          exportContainer.appendChild(headerClone)
        }

        exportContainer.appendChild(contentClone)

        // Capture the image with html2canvas
        const canvas = await html2canvas(exportContainer, {
          scale: scaleFactor,
          useCORS: true,
          allowTaint: true,
          backgroundColor: getComputedStyle(mainContent).backgroundColor,
          logging: false,
          windowWidth: mainContent.scrollWidth,
          windowHeight: mainContent.scrollHeight + (header && includeHeader ? header.scrollHeight : 0),
        })

        // Clean up
        document.body.removeChild(exportContainer)

        // Convert to PNG and download
        const pageTitle = document.querySelector("h1")?.textContent || pathname.split("/").pop() || "page"
        const fileName = `${pageTitle.replace(/[^a-z0-9]/gi, "-").toLowerCase()}-${new Date().toISOString().split("T")[0]}.png`

        // Create download link
        const link = document.createElement("a")
        link.download = fileName
        link.href = canvas.toDataURL("image/png")
        link.click()

        // Remove progress modal
        document.body.removeChild(progressModal)

        // Show success modal
        const successModal = document.createElement("div")
        successModal.className = "print-instructions-modal"
        successModal.innerHTML = `
          <div class="print-instructions-content">
            <h2>Export Complete</h2>
            <p>Your image has been exported successfully.</p>
            <div class="button-container">
              <button id="close-success" class="print-button">Close</button>
            </div>
          </div>
        `
        document.body.appendChild(successModal)

        document.getElementById("close-success")?.addEventListener("click", () => {
          document.body.removeChild(successModal)
          resetContentAfterExport()
        })
      } catch (error) {
        console.error("Export error:", error)

        // Remove progress modal
        document.body.removeChild(progressModal)

        // Show error modal
        const errorModal = document.createElement("div")
        errorModal.className = "print-instructions-modal"
        errorModal.innerHTML = `
          <div class="print-instructions-content">
            <h2>Export Failed</h2>
            <p>There was an error exporting the image. Please try again.</p>
            <div class="button-container">
              <button id="close-error" class="print-button">Close</button>
            </div>
          </div>
        `
        document.body.appendChild(errorModal)

        document.getElementById("close-error")?.addEventListener("click", () => {
          document.body.removeChild(errorModal)
          resetContentAfterExport()
        })
      } finally {
        setIsExporting(false)
      }
    })

    document.getElementById("cancel-export")?.addEventListener("click", () => {
      // Remove the modal
      document.body.removeChild(exportModal)
    })
  }

  // Update the handleExportToPDF function with this improved version:
  const handleExportToPDF = () => {
    // Add a temporary class to the body for print styling
    document.body.classList.add("printing-pdf")

    // Show print instructions modal
    const instructionsModal = document.createElement("div")
    instructionsModal.className = "print-instructions-modal"
    instructionsModal.innerHTML = `
    <div class="print-instructions-content">
      <h2>Export to PDF</h2>
      <p>Follow these steps for the best results:</p>
      <ol>
        <li>In the print dialog, select "Save as PDF" as the destination</li>
        <li>Set paper size to A4 or Letter</li>
        <li>Set orientation to "Portrait"</li>
        <li>Set margins to "None" or "Minimum"</li>
        <li>Enable "Background graphics" option (essential for dark theme)</li>
        <li>Scale to 100% or "Default"</li>
      </ol>
      <p class="note">Note: The PDF will maintain the portal's dark theme and styling.</p>
      <div class="button-container">
        <button id="continue-print" class="print-button">Continue to Export</button>
        <button id="cancel-print" class="cancel-button">Cancel</button>
      </div>
    </div>
  `
    document.body.appendChild(instructionsModal)

    // Add event listeners to the buttons
    document.getElementById("continue-print")?.addEventListener("click", () => {
      // Remove the modal
      document.body.removeChild(instructionsModal)

      // Prepare content for printing
      prepareContentForPrint()

      // Trigger print dialog
      window.print()

      // Reset after printing
      setTimeout(() => {
        document.body.classList.remove("printing-pdf")
        resetContentAfterPrint()
      }, 1000)
    })

    document.getElementById("cancel-print")?.addEventListener("click", () => {
      // Remove the modal and class
      document.body.removeChild(instructionsModal)
      document.body.classList.remove("printing-pdf")
    })
  }

  // Helper functions for content preparation
  const prepareContentForPrint = () => {
    // Add page break classes to main content sections
    const mainContent = document.querySelector("main")
    if (mainContent) {
      // Get the current page title
      const pageTitle = document.querySelector("h1")?.textContent || "Due Diligence Portal"

      // Create header with logo for each printed page
      const header = document.createElement("div")
      header.className = "print-header"
      header.innerHTML = `
        <div class="print-header-content">
          <div class="print-header-title">${pageTitle}</div>
          <div class="print-header-logo">
            <img src="/logo.png" alt="Logo" />
          </div>
        </div>
      `
      mainContent.prepend(header)

      // Add page breaks before major sections
      const cards = mainContent.querySelectorAll(".card")
      cards.forEach((card) => {
        card.classList.add("print-page-break")
      })

      // Ensure tabs content is visible for printing
      const tabsContents = mainContent.querySelectorAll('[role="tabpanel"]')
      tabsContents.forEach((panel) => {
        if (!panel.classList.contains("hidden")) {
          panel.setAttribute("data-was-visible", "true")
        }
        panel.classList.remove("hidden")
        panel.setAttribute("aria-hidden", "false")
      })

      // Expand all collapsible sections for printing
      const collapsibleSections = mainContent.querySelectorAll('[class*="max-h-0"]')
      collapsibleSections.forEach((section) => {
        section.setAttribute("data-original-class", section.getAttribute("class") || "")
        section.setAttribute("class", section.getAttribute("class")?.replace("max-h-0", "max-h-full") || "")
      })
    }
  }

  // Similar function for PNG export
  const prepareContentForExport = (expandAllTabs = false) => {
    // Similar to prepareContentForPrint but without adding headers
    const mainContent = document.querySelector("main")
    if (mainContent) {
      // Ensure tabs content is visible
      const tabsContents = mainContent.querySelectorAll('[role="tabpanel"]')

      if (expandAllTabs) {
        // Show all tab panels for batch export
        tabsContents.forEach((panel) => {
          if (!panel.classList.contains("hidden")) {
            panel.setAttribute("data-was-visible", "true")
          }
          panel.classList.remove("hidden")
          panel.setAttribute("aria-hidden", "false")
        })
      } else {
        // Only show visible tab panels for single export
        tabsContents.forEach((panel) => {
          if (!panel.classList.contains("hidden")) {
            panel.setAttribute("data-was-visible", "true")
          }
        })
      }

      // Expand all collapsible sections
      const collapsibleSections = mainContent.querySelectorAll('[class*="max-h-0"]')
      collapsibleSections.forEach((section) => {
        section.setAttribute("data-original-class", section.getAttribute("class") || "")
        section.setAttribute("class", section.getAttribute("class")?.replace("max-h-0", "max-h-full") || "")
      })
    }
  }

  const resetContentAfterPrint = () => {
    // Remove the temporary header
    const header = document.querySelector(".print-header")
    header?.parentNode?.removeChild(header)

    // Reset tab panels visibility
    const tabsContents = document.querySelectorAll('[role="tabpanel"]')
    tabsContents.forEach((panel) => {
      if (panel.getAttribute("data-was-visible") !== "true") {
        panel.classList.add("hidden")
        panel.setAttribute("aria-hidden", "true")
      }
      panel.removeAttribute("data-was-visible")
    })

    // Reset collapsible sections
    const collapsibleSections = document.querySelectorAll("[data-original-class]")
    collapsibleSections.forEach((section) => {
      section.setAttribute("class", section.getAttribute("data-original-class") || "")
      section.removeAttribute("data-original-class")
    })
  }

  // Reuse the same reset function for PNG export
  const resetContentAfterExport = resetContentAfterPrint

  return (
    <div className="flex min-h-screen bg-black">
      {/* Sidebar for desktop */}
      <aside className="hidden w-64 flex-col border-r border-zinc-800 bg-zinc-900 lg:flex">
        <div className="flex h-16 items-center border-b border-zinc-800 px-4">
          <Link href="/portal" className="flex items-center gap-2 font-semibold text-white">
            <span>DD Portal</span>
          </Link>
        </div>
        <nav className="flex-1 overflow-auto p-4">
          <div className="space-y-6">
            <div className="space-y-1">
              {companyPages.map((item) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  icon={item.icon}
                  isActive={pathname === item.href}
                />
              ))}
            </div>

            <NavSection title="Critical Solution Review">
              {criticalSolutionPages.map((item, index) => (
                <NavItem
                  key={item.href}
                  href={item.href}
                  label={item.label}
                  icon={item.icon}
                  isActive={pathname === item.href}
                  className={index > 0 ? "ml-3" : ""}
                />
              ))}
            </NavSection>
          </div>
        </nav>
        <div className="border-t border-zinc-800 p-4">
          <Button variant="outline" className="w-full justify-start gap-2 text-zinc-400" asChild>
            <Link href="/auth/login">
              <LogOut className="h-4 w-4" />
              Sign out
            </Link>
          </Button>
        </div>
      </aside>

      {/* Mobile sidebar */}
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetContent side="left" className="w-64 border-r border-zinc-800 bg-zinc-900 p-0">
          <div className="flex h-16 items-center border-b border-zinc-800 px-4">
            <Link href="/portal" className="flex items-center gap-2 font-semibold text-white">
              <span>DD Portal</span>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="ml-auto text-zinc-400"
              onClick={() => setIsSidebarOpen(false)}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <nav className="flex-1 overflow-auto p-4">
            <div className="space-y-6">
              <div className="space-y-1">
                {companyPages.map((item) => (
                  <NavItem
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    icon={item.icon}
                    isActive={pathname === item.href}
                  />
                ))}
              </div>

              <NavSection title="Critical Solution Review">
                {criticalSolutionPages.map((item, index) => (
                  <NavItem
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    icon={item.icon}
                    isActive={pathname === item.href}
                    className={index > 0 ? "ml-3" : ""}
                  />
                ))}
              </NavSection>
            </div>
          </nav>
          <div className="border-t border-zinc-800 p-4">
            <Button variant="outline" className="w-full justify-start gap-2 text-zinc-400" asChild>
              <Link href="/auth/login">
                <LogOut className="h-4 w-4" />
                Sign out
              </Link>
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      {/* Main content */}
      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center gap-4 border-b border-zinc-800 bg-zinc-900 px-4 lg:px-6">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-zinc-400"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <div className="flex-1 lg:hidden">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-white">DD Portal</span>
            </div>
          </div>
          <div className="ml-auto flex items-center gap-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-zinc-400 hover:text-white hover:bg-zinc-800"
                    onClick={handleBatchExport}
                    disabled={isBatchExporting || isExporting}
                  >
                    <Archive className="h-5 w-5" />
                    <span className="sr-only">Export All to ZIP</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Export All Pages to ZIP</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-zinc-400 hover:text-white hover:bg-zinc-800"
                    onClick={handleExportToPNG}
                    disabled={isExporting || isBatchExporting}
                  >
                    <ImageIcon className="h-5 w-5" />
                    <span className="sr-only">Export to PNG</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Export to PNG</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-zinc-400 hover:text-white hover:bg-zinc-800"
                    onClick={handleExportToPDF}
                    disabled={isExporting || isBatchExporting}
                  >
                    <Printer className="h-5 w-5" />
                    <span className="sr-only">Export to PDF</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Export to PDF</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <div className="relative h-12 w-12 md:h-16 md:w-16">
              <Image src="/logo.png" alt="Logo" fill className="object-contain" priority />
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-auto bg-zinc-950 p-4 lg:p-6">{children}</main>
      </div>
    </div>
  )
}
