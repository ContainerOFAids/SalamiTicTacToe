import { fail, redirect } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';
import type { Actions, PageServerLoad } from './$types';

const prisma = new PrismaClient();

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
    login: async ({ request, cookies }) => {
        let data = await request.formData();
        let username = data.get("username")?.toString();
        let password = data.get("password")?.toString();
        if (username && password) {
            // Check if the user already exists in the database
            const existingUser = await prisma.user.findUnique({
                where: { name: username },
            });
            if (existingUser) {
                // Handle already logged in
                return fail(400, { username: "User already logged in" });
                if (password) {
                    
                } else {
                    throw fail(400, {password: "you need a password!!!"})
                }
            } else {
                // Create a new user in the database
                await prisma.user.create({
                    data: { name: username, password: password},
                });
                cookies.set("username", username);
                cookies.set("password", password);
                
                throw redirect(307, "/");
            }
        }
        console.log(username);
        console.log(password);
    },
    logout: async ({ request, cookies }) => {
        let username = cookies.get("username");
        if (!username) {
            return fail(400, { username: "No user found" });
        }
        cookies.delete("username");
        // Delete the user from the database
        await prisma.user.delete({
            where: { name: username },
        });
    },
};
