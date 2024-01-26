import getCurrentUser from "@/app/actions/getCurrentUser";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // get user details
    const currentUser = await getCurrentUser();
    const { firstName, lastName, id }: any = currentUser;
    // get all trades
    const trades = await prisma.trade.findMany({
      where: {
        traderID: id,
      },
    });
    // get all users rules
    const rules = await prisma.rule.findMany({
      where: {
        ownerID: id,
      },
    });
    // return
    return NextResponse.json({ firstName, lastName, id, trades, rules });
  } catch (error) {
    console.log(error);
  }
}
