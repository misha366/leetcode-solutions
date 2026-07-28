function isValid(s: string): boolean {
    if (s.length === 1) return false;

    const PAIRS = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    const open = Object.values(PAIRS);
    const close = Object.keys(PAIRS);

    const storeOpen = [];

    for (let i = 0; i < s.length; i++) {
        if (open.includes(s[i])) {
            storeOpen.push(s[i]);
        } else if (close.includes(s[i])) {
            if (storeOpen.at(-1) !== PAIRS[s[i]]) return false;
            storeOpen.pop()
        }
    }
    
    return storeOpen.length === 0;
};