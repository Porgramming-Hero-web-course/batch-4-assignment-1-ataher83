function removeDuplicates(numbers: number[]): number[] {
    const uniqueNumbers: number[] = [];
    const seen = new Set<number>();

    for (const num of numbers) {
        if (!seen.has(num)) {
            uniqueNumbers.push(num);
            seen.add(num);
        }
    }

    return uniqueNumbers;
}
