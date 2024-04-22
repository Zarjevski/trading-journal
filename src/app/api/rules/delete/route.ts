import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const currentUser = await getCurrentUser();
    const { id: userID }: any = currentUser;
    const { id: RuleId }: any = body;
    if (userID && RuleId) {
      const remove = await prisma.rule.delete({
        where: { id: RuleId, traderID: userID },
      });
      return NextResponse.json({ remove });
    } else {
      return NextResponse.json({
        msg: "the request dont have all necessary data!",
      });
    }
  } catch (error) {
    console.log(error);
  }
}
