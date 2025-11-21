export const PASSWORD_HASH = "2919495d2238587d53ba4c0f9d71d558e2aa7e276469a3e854d2ca700522aceb";

export async function hashPassword(password) {
    const msgBuffer = new TextEncoder().encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

export async function verifyPassword(password) {
    const hash = await hashPassword(password);
    return hash === PASSWORD_HASH;
}
