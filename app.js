function bubbleSort(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                const temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp
            }
        }
    }

    return array;
}

console.log(bubbleSort([5, 4, 64, 871, 2, 1, 84, 966, 25, 54, 465,8956, 7]));