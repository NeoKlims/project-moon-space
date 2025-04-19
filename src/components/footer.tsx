import Link from "next/link";
import { Facebook, Instagram, Scissors, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer id="contact" className="bg-muted py-12 md:py-16">
      <div className="container grid gap-8 px-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Scissors className="h-6 w-6" />
            <span className="text-xl font-bold">Serenity</span>
          </div>
          <p className="text-muted-foreground">
            Where beauty meets wellness in perfect harmony. Experience the
            ultimate in self-care.
          </p>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="#about"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#food"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                Gift Cards
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Hours</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex justify-between">
              <span>Monday - Friday</span>
              <span>9:00 AM - 8:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Saturday</span>
              <span>9:00 AM - 6:00 PM</span>
            </li>
            <li className="flex justify-between">
              <span>Sunday</span>
              <span>10:00 AM - 5:00 PM</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-medium">Newsletter</h3>
          <p className="text-muted-foreground">
            Subscribe to receive updates, access to exclusive deals, and more.
          </p>
          <div className="flex gap-2">
            <Input type="email" placeholder="Enter your email" />
            <Button type="submit">Subscribe</Button>
          </div>
        </div>
      </div>

      <div className="container mt-12 border-t px-4 pt-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Serenity Beauty Salon. All rights
            reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <Link href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-foreground">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
