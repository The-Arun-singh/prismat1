import jwt from 'jsonwebtoken';

export function setUser(user) {
    return jwt.sign({ user: user }, secretKey, { expiresIn: "1hr" },);
}

export function getUser(token) {
    try {
        return jwt.verify(token, secretKey);
    } catch (e) {
        return null;
    }
}