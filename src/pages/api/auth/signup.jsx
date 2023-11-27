import prisma from "@/lib/prismadb";

export default async function handler(req, res) {
    try {
        const body = req.body;

        const userExists = await prisma.user.find({
            where: {
                name: body.name,
            }
        })

        if (userExists) return res.status(400).json({ message: 'User already exists' });

        const user = await prisma.user.create({
            data: {
                ...body,
            }
        })
        res.status(200).json({ message: 'User created' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}