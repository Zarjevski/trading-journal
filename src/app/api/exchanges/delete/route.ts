import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const currentUser = await getCurrentUser();
    const { id: userID }: any = currentUser;
    const { exchangeId}: any = body;
    console.log(exchangeId, body);
    
    const remove = await prisma.exchange.delete({
      where: { id: exchangeId, ownerID: userID },
    });
    return NextResponse.json({ remove });
  } catch (error) {
    console.log(error);
  }
}
