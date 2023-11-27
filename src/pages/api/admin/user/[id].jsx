import prisma from "@/lib/prismadb"

export default async function handle(req, res) {
    const userId = req.query.id

    if (req.method === 'DELETE') {
        handleDELETE(userId, res)
    } else {
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`
        )
    }
}

// DELETE /api/user/:id
async function handleDELETE(userId, res) {
    const user = await prisma.user.delete({
        where: { id: userId },
    })
    res.json(user)
}