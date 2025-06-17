// 2).The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.
function doubleTrouble(arr) {
    // Create a new array to store the result
    let result = [];
    
    // Iterate over the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            // If the current element is the same as the previous one, skip doubling
            result.push(arr[i]); 
        } else {
            // Otherwise, double the current element
            result.push(arr[i] * 2);
        }
    }

    return result;
}

// Example usage
let input = [2, 2, 3, 3, 3, 4, 5, 5, 6];
let output = doubleTrouble(input);
console.log(output); // Output: [4, 2, 6, 3, 3, 8, 10, 5, 12]
