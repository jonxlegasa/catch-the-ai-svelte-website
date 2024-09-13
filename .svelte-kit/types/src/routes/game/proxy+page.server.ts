// @ts-nocheck
import { redirect, error } from "@sveltejs/kit";
import type { RequestEvent, Actions } from "./$types";


export async function load(event: RequestEvent) {
  const { cookies } = event;
  // Add any server-side logic here
}

export const actions = {
  joinGame: async ({ request }: import('./$types').RequestEvent) => {
    const data = await request.formData();
    const username: string = data.get("username") as string;
    return { success: true, username: username };
  }
};

;null as any as Actions;