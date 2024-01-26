import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import getCurrentUser from "@/app/actions/getCurrentUser";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();
  const { text } = body;
  const { id }: any = await getCurrentUser();
  const rule = await prisma.rule.create({
    data: { ownerID: id, content: text },
  });

  return NextResponse.json(rule);
}
