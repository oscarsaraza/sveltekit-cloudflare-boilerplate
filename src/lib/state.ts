import { writable } from 'svelte/store';

export const user = writable(null);

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const login = async ({ email }: { email: string }): Promise<void> => {
	user.set({ logging: true });
	await delay(1000);
	user.set({ email });
};

export const logout = async (): Promise<void> => {
	user.update(() => ({ logging: true }));
	await delay(1000);
	user.set(null);
};
