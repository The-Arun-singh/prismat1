import prisma from "@/lib/prismadb";
import { setUser } from "@/utils/service";

export default async function handler(req, res) {
    try {
        const body = req.body;
        const userName = body.userName;
        let user = await prisma.user.findUnique({
            where: {
                userName: userName,
            }
        })

        if (!user) return res.status(404).send("Invalid username or password");

        if (user.password !== validPassword) {
            return res.status(404).send("Invalid password");
        } else {
            const token = setUser(user);
            res.header({ 'Authorization': 'Bearer ' + token });
            res.status(200).send({ "message": 'login successful' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}
