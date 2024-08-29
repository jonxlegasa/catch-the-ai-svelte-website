// @ts-nocheck
import { redirect, error } from "@sveltejs/kit";
import type { RequestEvent, Actions } from "./$types";

export async function load(event: RequestEvent) {
  const { cookies } = event;
  // Add any server-side logic here
}

export const actions = {
  sendMessage: async ({ request }: import('./$types').RequestEvent) => {
    const data = await request.formData();
    const message: string = data.get("messagebody") as string;
    console.log(message);

    // Instead of trying to send the WebSocket message here,
    // we'll return the message to the client
    return { success: true, message };
  }
};

;null as any as Actions;