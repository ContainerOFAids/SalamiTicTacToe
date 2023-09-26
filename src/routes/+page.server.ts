import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({cookies}) => {
    let username = cookies.get("username");
    return {username};
};