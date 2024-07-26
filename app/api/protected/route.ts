import { getServerSession } from "next-auth"

export const GET = async (request: any) => {
  const session = await getServerSession()
  if (!session) {
    return new Response(JSON.stringify({ message: "Unauthorized!" }), {
      status: 401,
    })
  }
  return new Response(
    JSON.stringify({ message: "Authorized!", role: session.user }),
    {
      status: 200,
    }
  )
}
