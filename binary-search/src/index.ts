import { 
    findNumberBinary, 
    findNumberLinear, 
    getRandomArray, 
    getRandomNumberToFind 
} from "./helpers";

async function start() {
    try {
        // Generate a random array of numbers and random length
        // Returns a sorted array of numbers to execute a binary search

        const array = await getRandomArray(1, 10_000);

        // Get the random number we need to find
        const numberToFind = await getRandomNumberToFind(1, 10_000);

        console.log(numberToFind)
        /*
            Linear search with go through all the numbers in the array and check to see
            if it is the correct number. O(n)
        */
        await findNumberLinear(array, numberToFind);

        /*
            Binary will start at the middle of the array and check to see if the number is higher
            or lower than the value to find. If it's higher or lower it knows which numbers to
            eliminate using log2n. O(log n)
        */
        await findNumberBinary(array, numberToFind)
    } catch (e) {
        console.log(e);
    }
}

start()