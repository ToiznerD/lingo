import { auth } from "@clerk/nextjs/server"

const adminIds = [
    "user_2gK2eGxJNzJ7F1pOtE7aGP5F6Cv",
]

export const isAdmin = () => {
    const { userId } = auth();

    if (!userId) {
        return false;
    }

    return adminIds.indexOf(userId) !== -1
}