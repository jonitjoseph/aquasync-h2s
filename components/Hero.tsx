import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <>
      <main className="relative m-4 mx-16 flex-1 overflow-hidden">
        <section className="mx-auto max-w-7xl space-y-6 pb-8 pt-6 sm:grid md:pb-12 md:pt-8 lg:grid-cols-2 lg:py-32">
          <div className="fade-up container flex max-w-[64rem] flex-col justify-center gap-4 pb-24 text-center lg:items-start">
            <h1 className="text-3xl font-medium sm:text-5xl md:text-6xl lg:text-7xl">
              AquaSync
            </h1>
            <p className="my-4 max-w-[42rem] text-balance text-sm leading-normal text-stone-500 sm:text-lg sm:leading-8 md:text-wrap lg:text-left">
              Lorem ipsum dolor sit amet consectetur
              adipisicing elit.
            </p>
            <div className="space-x-4 pt-4">
              <Link
                href="/signin"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
