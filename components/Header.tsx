import Image from "next/image"
import Link from "next/link"
import AuthCheck from "./AuthCheck"

export default function NavBar() {
  return (
    <>
      <header className="container sticky top-0 bg-opacity-80 backdrop-blur-md">
        <div className="flex h-20 items-center justify-between py-6">
          <div className="flex gap-6 md:gap-10">
            <Link href={"/"} className="flex select-none items-center gap-2">
              <Image
                src={"/logo.svg"}
                alt="AquaSync Icon"
                height={24}
                width={24}
                priority
                className="pointer-events-none"
              />
              <Image
                src={"/brand-name.svg"}
                alt="AquaSync"
                height={96}
                width={96}
                priority
                className="pointer-events-none"
              />
            </Link>
          </div>
          <nav className="hidden gap-2 sm:flex md:gap-4 lg:gap-8 xl:gap-16">
            <AuthCheck />
          </nav>
        </div>
      </header>
    </>
  )
}
