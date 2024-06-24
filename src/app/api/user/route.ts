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
    try {
      const trades = await prisma.trade.findMany({
        where: {
          traderID: id,
        },
      });
      // get all users rules
      const rules = await prisma.rule.findMany({
        where: {
          traderID: id,
        },
      });
      // get all exchages
      const exchanges = await prisma.exchange.findMany({
        where: {
          traderID: id,
        },
      });      
      return NextResponse.json({
        firstName,
        lastName,
        id,
        trades,
        rules,
        exchanges,
      });
    } catch (error) {
      console.log(error);
      return NextResponse.json('there is an error')
    }
    // return
  } catch (error) {
    console.log(error);
    return NextResponse.json('there is an error')
  }
}
