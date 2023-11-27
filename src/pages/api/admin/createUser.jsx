// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prisma from "@/lib/prismadb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const result = await prisma.user.create({
      data: { ...req.body },
    })
    console.log(result);
    res.status(200).json(result);
  } else if (req.method === "DELETE") {
    await prisma.user.delete({
      where: {
        id: req.params.id,
      }
    })
    res.status(200).json({ message: "User deleted" });
  }



}
