const {readFileSync, promises: fsPromises} = require('fs');


function syncReadFile(fileName) {
    const contents = readFileSync(fileName, 'utf-8');
    const arr = contents.split(/\n/);
    let sum = 0;
    let finalObj = {}
    let elfcount = 0;
    let strongestElf = 0;
    let secondElf = 0;
    let thirdElf = 0;
    let holderElf = 0;
    // strongestElf to hold key: elf# in order to check for it in finalobj
    for (let i = 0; i < arr.length; i++){
        if (arr[i][0] == undefined) {
            // console.log('array i 0: ' + arr[i][0])
            var currentElf = `elf${++elfcount}`
            if (strongestElf === 0) strongestElf = currentElf;
            else if (secondElf === 0) secondElf = currentElf;
            else if (thirdElf === 0) thirdElf = currentElf
            finalObj[currentElf] = sum;
            sum = 0;
            if (finalObj[thirdElf] < finalObj[currentElf]) {
                if (finalObj[secondElf] < finalObj[currentElf]){
                    if (finalObj[strongestElf] < finalObj[currentElf]){
                        let holderElf = strongestElf;
                        strongestElf = currentElf;
                        console.log('strongestElf: ' + strongestElf);
                        console.log('secondElf: ' + secondElf);
                        console.log('thirdElf: ' + thirdElf);
                    }
                    else {
                        thirdElf = secondElf;
                        secondElf = holderElf;
                    }
                }
                else {}
                thirdElf = currentElf;
                // console.log('currentElf: ' + currentElf);
            }
        }
        else {
            sum += Number(arr[i]);
        }
    }
    // console.log(finalObj);
    // console.log('strongetself: '+ strongestElf)
    // console.log(finalObj[strongestElf])
}
// Iterate through array, sum up values until next element at index is ''
// make object with elf# : summed total 

syncReadFile('./day1example.txt');
// syncReadFile('./day1input.text');