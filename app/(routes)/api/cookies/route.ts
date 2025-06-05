import { cookies } from "next/headers";

export async function POST(req: Response) {
  const { name, value }: { name: string; value: string } = await req.json();
  const cookieStore = await cookies();
  cookieStore.set(name, value);

  return Response.json({}, { status: 200 });
}
