const STORE_NAME = "products"
const SessionStorage = {
    get: (key) => {
        return window.sessionStorage.getItem(key);
    },
    set: (key, val) => {
        window.sessionStorage.setItem(key, JSON.stringify(val));
    },
    clear: (key) => {
        window.sessionStorage.removeItem(key)
    }
}

export { STORE_NAME }
export default SessionStorage;