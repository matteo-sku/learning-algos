export async function getRandomArray(
    minVal: number, 
    maxVal: number, 
) : Promise<Array<number>> {
    try {
        const array = [];
        for (let i = minVal; i < maxVal; ++i) {
            array.push(i)
        }
        return array; 
    } catch (e) {
        console.log(e);
        throw e;
    }
}

export async function getRandomNumberToFind(
    minVal: number,
    maxVal: number
) : Promise<number> {
    try {
        return Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
    } catch (e) {
        console.log(e);
        throw e;
    }
}

export async function findNumberLinear(
    list: Array<number>,
    value: number
) : Promise<void> {
    try {
        const startTime = performance.now();
        for (let i = 0; i < list.length; ++i) {
            if (value === list[i]) {
                break;
            }
        }
        const endTime = performance.now();
        const timeTaken = endTime - startTime;
        console.log(`LINEAR: Found the number ${value} in ${timeTaken} ms`);
    } catch (e) {
        console.log(e);
        throw e;
    }
}

export async function findNumberBinary(
    list: Array<number>,
    value: number
) : Promise<void> {
    try {
        const startTime = performance.now();
        let low = 0;
        let high = list.length - 1;
        let found = false;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            const guess = list[mid];
            if (guess === value) {
                found = true;
                break;
            }
            if (guess > value) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        const endTime = performance.now();
        const time = endTime - startTime;

        if (found) {
            console.log(`BINARY: Found the number ${value} in ${time} ms`);
        } else {
            console.log(`BINARY: Number ${value} not found in ${time} ms`);
        }
    } catch (e) {
        console.log(e);
        throw e;
    }
}