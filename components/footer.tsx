import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card w-full mx-auto">
      <div className="container py-12 max-w-7xl mx-auto">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-auto items-center justify-center rounded-lg bg-accent">
                <img src="inno-hub-logo.jpg" alt="" className="" />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Empowering creativity and innovation through world-class education.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-accent">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-accent">
                  About
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-muted-foreground hover:text-accent">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-accent">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Contact</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="font-bold">Phone:</li>
                <li>+232 76838435</li>
                <li className="font-bold">Email:</li>
                <li>Email: bashir.mohammad@limkokwing.edu.sl</li>
                <li className="font-bold">Address:</li>
                <li>Address: No 51 Regent Road, Hill Station, Freetown</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Follow Us</h3>
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/profile.php?id=100092254403221" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
                <Facebook  className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://www.youtube.com/@LimkokwingInnovationHub" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="https://www.instagram.com/limkokwing_innovation_hub" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://wa.me/23276267815" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.79.372-.297.347-1.14 1.116-1.14 2.723 0 1.606 1.168 3.158 1.333 3.372.165.214 2.31 3.656 5.592 4.739.78.27 1.39.43 1.865.519.78.141 1.492.121 2.054-.079.397-.149 1.272-.52 1.45-1.021.179-.5.179-.93.13-1.02-.05-.09-.198-.149-.396-.248m-5.22-8.219c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75m3.75 0c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75m-7.5 0c.414 0 .75.336.75.75s-.336.75-.75.75-.75-.336-.75-.75.336-.75.75-.75"/>
                </svg>
                <span className="sr-only">WhatsApp</span>
              </Link>
              <Link href="https://www.linkedin.com/in/limkokwing-innovation-hub-439a73275/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Limkokwing University. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
