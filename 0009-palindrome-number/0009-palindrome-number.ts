function isPalindrome(x: number): boolean {
    let s: string = x.toString();
    let right: number, left: number;

    if (s.length % 2 === 0) {
        left = s.length / 2 - 1;
        right = s.length / 2;
        console.log("s.length % 2 === 0")
    } else {
        left = Math.floor(s.length / 2);
        right = Math.floor(s.length / 2);
        console.log("s.length % 2 !== 0")
    }

    console.log(left, right)

    while (left >= 0 && right <= s.length) {
        if (s[left] !== s[right]) return false;
        left--;
        right++;
    }

    return true;
};