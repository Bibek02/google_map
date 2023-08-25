export class RandomUtil {
    static randomNumberInRange(min: number, max: number): number {
        return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min)
    }
    static generateNumberOfDigits(n: number): number {
        if (n == 1) {
            return Math.floor(1 + Math.random() * 9);
        } else {
            const exponent = n - 1;
            const pow = Math.pow(10, exponent);
            return Math.floor(pow + Math.random() * 9 * pow)
        }
    }
}