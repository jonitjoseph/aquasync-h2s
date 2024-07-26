"use client"

import { useSession } from "next-auth/react"

export default function Check() {
  const session = useSession()
  //   const { data: session, status } = useSession()
  //   if (status === "authenticated") {
  //     return (<>
  //     <p>Signed in as {session.user?.email}</p>
  //     <p>role {session.user?.role}</p>
  //     </>
  // )
  //   }

  return (
    <>
      <p>Signed in as {session?.data?.user?.email}</p>
      <main className="m-4 mx-16 flex-1">
        <section className="relative mx-auto my-8 flex min-h-[100vh] w-full flex-col-reverse px-4 md:px-[34px] lg:h-[min(880px,max(630px,76vh))] lg:min-h-0 lg:flex-row">
          <div className="mb-8 w-full self-end lg:mb-0">
            <h1 className="max-w-full !text-[clamp(52px,_7.45vw,_82px)] leading-[100%] tracking-[-0.002em] text-slate-900 md:text-[75px] lg:max-w-lg lg:text-[79px] xl:text-[90px]">
              <span className="inline-block text-wrap align-top">AquaSync</span>
            </h1>
            <p className="max-w-[42rem] leading-normal text-stone-500 sm:text-xl sm:leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="absolute right-0 z-20 block h-full w-full bg-gradient-to-t from-emerald-500 to-amber-400 opacity-50"></div>
          <div className="container flex max-w-[64rem] flex-col items-center gap-4"></div>
        </section>
      </main>
    </>
  )
}
