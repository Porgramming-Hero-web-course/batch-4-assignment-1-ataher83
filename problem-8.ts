function validateKeys<T>(obj: T, keys: (keyof T)[]): boolean {
    return keys.every(key => key in obj);
}
