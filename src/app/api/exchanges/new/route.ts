import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import getCurrentUser from "@/app/actions/getCurrentUser";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const body = await request.json();
  
  const { exchange, image } = body;
  const { id }: any = await getCurrentUser();
  const newExchange = await prisma.exchange.create({
    data: { ownerID: id, exchange, balance: 0, image },
  });
  return NextResponse.json(newExchange);
}
