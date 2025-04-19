import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { getHeroImageUrl } from "./actions";

export async function Hero() {
  const heroImage = await getHeroImageUrl();
  return (
    <section className="relative flex h-[600px] items-center justify-center">
      <Image
        src={heroImage.url}
        alt={heroImage.alt}
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-20" />
      <div className="relative z-10 px-4 text-center text-white">
        <h1 className="mb-4 text-5xl font-bold">MOOD SPACE</h1>
        <p className="mb-6 text-xl">Where beauty meets wellness</p>
        <Button asChild size="lg">
          <Link href="/book-appointment">Book Appointment</Link>
        </Button>
      </div>
    </section>
  );
}
