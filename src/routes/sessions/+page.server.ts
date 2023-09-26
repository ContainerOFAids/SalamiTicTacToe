import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export let _sessions:Map<string,string[]> = new Map();

export const load = (async () => {
    return {sessions: _sessions};
}) satisfies PageServerLoad;

export const actions: Actions = {
    create: async ({request}) =>{
        let data = request.formData();
        let sessionName = (await data).get("sessionName")?.toString()
        console.log(sessionName);
        if(!sessionName) {
            return fail(400,{sessionName:"Please supply name"})
        }
        console.log(sessionName);
        _sessions.set(sessionName, []);
    }
};