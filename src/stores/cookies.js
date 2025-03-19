import { defineStore } from 'pinia';

export const useCookieStore = defineStore('cookie', {
    state: () => ({
        accepted: false,
        rejected: false
    }),
    actions: {
        acceptCookies() {
            this.accepted = true;
            const d = new Date();
            d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
            const expires = "expires=" + d.toUTCString();
            document.cookie = "cookie-accepted=true;" + expires + ";path=/";
        },
        declineCookies() {
            this.accepted = false;
            this.rejected = true;
        },
        checkCookies() {
            const name = "cookie-accepted=";
            const decodedCookie = decodeURIComponent(document.cookie);
            const ca = decodedCookie.split(";");
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i].trim();
                if (c.indexOf(name) === 0) {
                    this.accepted = c.substring(name.length, c.length) === "true";
                    return;
                }
            }
            this.accepted = false;
        },
        revokeCookies() {
            this.accepted = false;
            this.rejected = false;
            document.cookie = "cookie-accepted=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/";
        },
    },
});