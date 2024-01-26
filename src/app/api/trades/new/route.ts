import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import getCurrentUser from "@/app/actions/getCurrentUser";

const prisma = new PrismaClient();

//  remember to push the updates to database schema

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { accountId, symbol, type, margin, date, status, size, reason } =
      body;
    const { id }: any = await getCurrentUser();
    const rule = await prisma.trade.create({
      data: {
        traderID: id,
        accountId,
        symbol,
        type,
        margin,
        date,
        status,
        size,
      },
    });

    return NextResponse.json(rule);
  } catch (error) {
    console.log(error);
  }
}
