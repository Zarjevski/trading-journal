import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import getCurrentUser from "@/app/actions/getCurrentUser";

const prisma = new PrismaClient();

//  remember to push the updates to database schema

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id }: any = await getCurrentUser();
    const { exchangeId } = body;
    const {
      symbol,
      position,
      margin,
      date,
      status,
      size,
      reason,
      result,
      exchangeName,
    } = body.formData;
    const isoDate = new Date(`${date} 00:00 UTC`).toISOString();
    const sizeToInt = parseInt(size);
    const trade = await prisma.trade.create({
      data: {
        traderID: id,
        exchangeName,
        position,
        exchangeId,
        margin,
        date: isoDate,
        status,
        size: sizeToInt,
        symbol,
        result,
        reason,
      },
    });

    return NextResponse.json(trade);
  } catch (error) {
    console.log(error);
  }
}
