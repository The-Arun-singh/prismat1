import prisma from "@/lib/prismadb"

export default async function handle(req, res) {
    const userId = req.query.id

    if (req.method === 'PATCH') {
        handlePatch(userId, req, res);
    } else if (req.method === 'DELETE') {
        handleDELETE(userId, res);
    } else {
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`
        )
    }
}

// PATCH /api/admin/user/:id
async function handlePatch(userId, req, res) {
    const user = await prisma.user.update({
        where: {
            id: userId,
        },
        data: {
            name: req.body.newName,
            password: req.body.newPassword,
        }
    })
    res.status(200).json({ message: "User updated successfully", user: user })
}

// DELETE /api/admin/user/:id
async function handleDELETE(userId, res) {
    const user = await prisma.user.delete({
        where: { id: userId },
    })
    res.json(user)
}