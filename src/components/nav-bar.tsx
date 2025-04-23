"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Cart } from "@/components/cart";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "w-full border-b transition-all duration-300",
        isScrolled
          ? "bg-background/95 shadow-sm backdrop-blur-sm"
          : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:h-24">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.webp"
            alt="logo"
            width={200}
            height={200}
            className="hidden md:block"
          />
          <Image
            src="/logo.webp"
            alt="logo"
            width={100}
            height={100}
            className="block md:hidden"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="/shop"
            className="text-md font-medium transition-colors hover:text-primary"
          >
            Shop
          </Link>
          <Link
            href="/menu"
            className="text-md font-medium transition-colors hover:text-primary"
          >
            Menu
          </Link>
          <Link
            href="#contact"
            className="text-md font-medium transition-colors hover:text-primary"
          >
            Contact
          </Link>
          <Button asChild variant="outline">
            <Link href="/book-appointment">Book Appointment</Link>
          </Button>
          <Cart />
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-3/4 sm:max-w-sm">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col items-start justify-start gap-6 px-4 pt-10">
              <Link
                href="/shop"
                className="text-lg font-medium transition-colors hover:text-primary"
              >
                Shop
              </Link>
              <Link
                href="/menu"
                className="text-lg font-medium transition-colors hover:text-primary"
              >
                Menu
              </Link>
              <Link
                href="#contact"
                className="text-lg font-medium transition-colors hover:text-primary"
              >
                Contact
              </Link>
              <Cart />
              <Button asChild>
                <Link href="/book-appointment">Book Appointment</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
