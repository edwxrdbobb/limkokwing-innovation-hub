import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="border-b border-border py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-balance text-4xl font-bold md:text-5xl lg:text-6xl">Get in Touch</h1>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Have questions about our programs or admissions? We're here to help. Reach out to us and we'll get back to
              you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" className="bg-card" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" className="bg-card" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" className="bg-card" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" className="bg-card" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Program Inquiry" className="bg-card" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help you..."
                    rows={6}
                    className="resize-none bg-card"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>
                <div className="space-y-6">
                  <Card className="border-border bg-card">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10">
                        <Mail className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">Email</h3>
                        <p className="text-sm text-muted-foreground">info@limkokwing.edu</p>
                        <p className="text-sm text-muted-foreground">admissions@limkokwing.edu</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border bg-card">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10">
                        <Phone className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">Phone</h3>
                        <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                        <p className="text-sm text-muted-foreground">+1 (555) 987-6543</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border bg-card">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10">
                        <MapPin className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">Address</h3>
                        <p className="text-sm text-muted-foreground">123 University Avenue</p>
                        <p className="text-sm text-muted-foreground">Innovation District</p>
                        <p className="text-sm text-muted-foreground">City, State 12345</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-border bg-card">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10">
                        <Clock className="h-6 w-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold">Office Hours</h3>
                        <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
                        <p className="text-sm text-muted-foreground">Saturday: 10:00 AM - 2:00 PM</p>
                        <p className="text-sm text-muted-foreground">Sunday: Closed</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="border-t border-border bg-card py-20">
        <div className="container">
          <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Visit Our Campus</h2>
          <div className="overflow-hidden rounded-lg border border-border">
            <div className="aspect-video w-full bg-muted">
              <div className="flex h-full items-center justify-center text-muted-foreground">
                <MapPin className="mr-2 h-6 w-6" />
                <span>Map placeholder - 123 University Avenue, Innovation District</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold">What are the admission requirements?</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Admission requirements vary by program. Generally, you'll need a high school diploma or equivalent,
                    transcripts, and may need to submit a portfolio for creative programs. Contact our admissions team
                    for specific requirements.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold">When does the academic year start?</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    We have multiple intake periods throughout the year, typically in January, May, and September.
                    Application deadlines are usually 2-3 months before each intake.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold">Are scholarships available?</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Yes, we offer various scholarships based on academic merit, financial need, and special talents.
                    Visit our financial aid office or contact us for more information about available scholarships.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border bg-card">
                <CardContent className="p-6">
                  <h3 className="mb-2 font-semibold">Can international students apply?</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    We welcome students from all over the world. International students will need to provide additional
                    documentation such as proof of English proficiency and visa requirements.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
