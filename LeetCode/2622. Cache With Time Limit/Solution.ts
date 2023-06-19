class TimeLimitedCache {
    cache: Map<number, number>;
    timeout: Map<number, number>;

    constructor() {
        this.cache = new Map();
        this.timeout = new Map();
    }

    set(key: number, value: number, duration: number): boolean {
        let exist = false, timeoutId;
        if(this.cache.has(key)){
            exist = true;
            timeoutId = this.timeout.get(key);
            clearTimeout(timeoutId);
            this.timeout.delete(key)
        }
        this.cache.set(key, value)
        
        timeoutId = setTimeout(()=>{
            this.cache.delete(key);
        }, duration);
        this.timeout.set(key, timeoutId);
        return exist;
    }

    get(key: number): number {
        return this.cache.has(key) ? this.cache.get(key) : -1;
    }

	count(): number {
        return this.cache.size;
    }
}

/**
 * Your TimeLimitedCache object will be instantiated and called as such:
 * var obj = new TimeLimitedCache()
 * obj.set(1, 42, 1000); // false
 * obj.get(1) // 42
 * obj.count() // 1
 */