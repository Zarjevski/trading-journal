import { PrismaClient } from "@prisma/client";
import getSession from "./getSession";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

const getCurrentUser = async () => {
  try {
    const session = await getSession();
    if (!session?.user?.email) {
      return NextResponse.json({ msg: "no session" });
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    if (!currentUser) {
      return null;
    }

    return currentUser;
  } catch (error: any) {
    return null;
  }
};

export default getCurrentUser;
