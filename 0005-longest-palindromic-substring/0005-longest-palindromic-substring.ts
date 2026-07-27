function longestPalindrome(s: string): string {
    let res = "";

    const retrievePalindrome = (left: number, right: number): string => {
        while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.slice(left + 1, right);
    }

    for (let i = 0; i < s.length; i++) {
        const oddPalindrome = retrievePalindrome(i, i);
        const evenPalindrome = retrievePalindrome(i, i + 1);

        if (res.length < oddPalindrome.length) res = oddPalindrome;
        if (res.length < evenPalindrome.length) res = evenPalindrome;
    }

    return res;
};