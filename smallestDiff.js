const list1 = [10,20,14,16,18]
const list2 = [30,23,54,33,96]

smallDiff = (arr1, arr2) => {
    let diffs = []
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(arr1[i]>arr2[j]){
                diffs.push([(arr1[i]-arr2[j]), arr1[i], arr2[j]])
            }else if(arr1[i]<arr2[j]){
                diffs.push([(arr2[j]-arr1[i]), arr1[i], arr2[j]])
            }
        }
    }
    diffs.sort((a, b) => a[0]-b[0])
    return `Smallest difference is ${diffs[0][0]}. From the first array: ${diffs[0][1]}, from the second array: ${diffs[0][2]}`
}

console.log(smallDiff(list1, list2))