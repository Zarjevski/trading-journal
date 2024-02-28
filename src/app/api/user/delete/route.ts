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
    console.log(body);

    const remove = await prisma.rule.delete({
      where: { id: RuleId, ownerID: userID },
    });
    return NextResponse.json({ remove });
  } catch (error) {
    console.log(error);
  }
}
