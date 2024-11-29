import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart, PieChart, LineChart, Lock, Github, Upload, Database, Search, Shield, Cpu, MessageSquare, Check } from 'lucide-react'
import { Badge } from "@/components/ui/badge"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center space-x-2" href="#">
          <Image 
            src="/images/logo.png" 
            alt="QDash Logo" 
            width={32} 
            height={32} 
            className="object-contain"
          />
          <span className="text-2xl font-black tracking-tight font-outfit">QDash</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#privacy">
            Privacy
          </Link>
        </nav>
      </header>
      <main className="flex-1">
      <section className="w-full py-16 bg-gradient-to-b from-white via-blue-100 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Badge className="px-3 py-1 text-sm bg-blue-100 text-[rgb(38,98,217)] mb-4" variant="secondary">
                Introducing QDash 1.0
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none max-w-3xl">
                Privacy-First AI-Powered Dashboards
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mb-8">
                Convert your business data into insights with natural language queries. Your proprietary data never leaves your computer - everything stays secure and local.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 py-4 justify-center w-full max-w-md">
                <a href="https://app.qdash.site" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-[rgb(38,98,217)] hover:bg-[rgb(28,88,207)] w-full">
                    Get Started - It's Free
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
                <Button variant="outline" size="lg" className="w-full" asChild>
                  <Link href="https://github.com/uhhfeef/qdash" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Link>
                </Button>
              </div>
              <div className="w-full max-w-3xl mt-8 aspect-video rounded-xl overflow-hidden shadow-xl bg-white">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/MOip2zu1Tvs"
                  title="QDash Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>        <section id="privacy" className="w-full py-12 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Lock className="h-12 w-12 text-[rgb(38,98,217)]" />
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Your Data, Your Control</h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                QDash is built with your privacy as the top priority. Your data never leaves your computer.
              </p>
            </div>
            <div className="grid gap-6 mt-12 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <Cpu className="h-8 w-8 mb-2 text-[rgb(38,98,217)]" />
                  <CardTitle>Local Processing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>All computations happen in your browser. Your data stays on your device.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="h-8 w-8 mb-2 text-[rgb(38,98,217)]" />
                  <CardTitle>No Data Sharing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Your sensitive information is never sent to external servers or AI models.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Lock className="h-8 w-8 mb-2 text-[rgb(38,98,217)]" />
                  <CardTitle>Complete Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>You maintain full ownership and control of your data at all times.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Github className="h-8 w-8 mb-2 text-[rgb(38,98,217)]" />
                  <CardTitle>Open Source</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our code is open for inspection. Verify our privacy claims yourself.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <MessageSquare className="h-8 w-8 mb-2 text-[rgb(38,98,217)]" />
                  <CardTitle>Natural Language Queries</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Ask questions in plain English and get instant visualizations and insights.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart className="h-8 w-8 mb-2 text-[rgb(38,98,217)]" />
                  <CardTitle>AI-Powered Charts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Automatically generate the most suitable charts for your data and queries.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Upload className="h-8 w-8 mb-2 text-[rgb(38,98,217)]" />
                  <CardTitle>CSV and Excel Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Easily upload and analyze your Excel and CSV files with our intuitive interface.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 items-start">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgb(38,98,217)] text-white">1</div>
                <h3 className="mt-4 text-xl font-bold">Upload Your Data</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">Securely upload your CSV files directly in your browser.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgb(38,98,217)] text-white">2</div>
                <h3 className="mt-4 text-xl font-bold">Ask Questions</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">Use natural language to query your data and specify visualizations.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgb(38,98,217)] text-white">3</div>
                <h3 className="mt-4 text-xl font-bold">Get Insights</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">Instantly receive beautiful charts and dashboards based on your queries.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">Simple, Transparent Pricing</h2>
            <p className="text-gray-500 md:text-xl text-center mb-12 max-w-3xl mx-auto">
              Choose the plan that's right for you. Start for free and scale as you grow.
            </p>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl">Self-Hosted</CardTitle>
                  <CardDescription>Perfect for personal use or small teams</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-4">Free<span className="text-lg font-normal"></span></div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Host on your own platform or locally</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Free support for bug fixes</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Access to basic features</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Community support</span>
                    </li>
                  </ul>
                  <Link 
                    className="inline-flex h-10 w-full items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 mt-6"
                    href="https://github.com/uhhfeef/qdash"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </Link>
                </CardContent>
              </Card>
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow border-[rgb(38,98,217)]">
                <CardHeader>
                  <CardTitle className="text-2xl">Cloud Hosted</CardTitle>
                  <CardDescription>For users that need more power and support</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold mb-4">$0<span className="text-lg font-normal">/month to start</span></div>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>1000 free requests</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Usage-based pricing after free tier</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Priority support</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="mr-2 h-4 w-4 text-green-500" />
                      <span>Custom integrations available</span>
                    </li>
                  </ul>
                  <Link 
                    className="inline-flex h-10 w-full items-center justify-center rounded-md bg-[rgb(38,98,217)] px-8 text-sm font-medium text-white shadow transition-colors hover:bg-[rgb(28,88,207)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 mt-6"
                    href="https://app.qdash.site"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Started
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Ready to Analyze Your Data Securely?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Start creating beautiful dashboards with natural language queries, all while keeping your data private.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2" action="https://app.qdash.site/" method="get" target="_blank" rel="noopener noreferrer">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit" style={{backgroundColor: 'rgb(38, 98, 217)'}}>Get Started</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By signing up, you agree to our <Link className="underline underline-offset-2" href="#">Terms & Conditions</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400"> 2024 QDash. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
