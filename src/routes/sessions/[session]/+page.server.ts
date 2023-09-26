import type { PageServerLoad } from './$types';

import { _sessions } from '../+page.server';
import { error } from '@sveltejs/kit';
import type { Actions } from '../$types';
import { USERNAME } from '$env/static/private';

let session : string;

export const load = (async ({params}) => {
    session = params.session;

    if(!_sessions.has(session)) {
        throw error(404, "session not found")
    }

    let messages = _sessions.get(session)
    if(messages == undefined){
        messages = []
    }

    return { session, messages };
}) satisfies PageServerLoad;

export const actions: Actions = {
    message: async ({request, cookies}) => {
        let data = await request.formData();
        let msg = data.get("message")?.toString()
        console.log(msg);
        if(!msg) {
            msg = "empty"
        }
        if (cookies.get("username")) {
            msg = cookies.get("username") + ": " + msg; 
        }
        _sessions.get(session)?.push(msg);
        
        
    }
};