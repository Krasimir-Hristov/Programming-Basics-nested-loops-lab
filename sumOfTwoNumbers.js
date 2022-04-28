function sumOfTwoNumbers(input) {

    let startNum = Number(input[0]);
    let endNum = Number(input[1]);
    let magicNum = Number(input[2]);
    let combinations = 0;



    for (let i = startNum; i <= endNum; i++) {
        for (let j = startNum; j <= endNum; j++) {
            combinations++
            if (i + j === magicNum) {
                console.log(`Combination N:${combinations} (${i} + ${j} = ${magicNum})`);
                return;
            }

        }

    }

    console.log(`${combinations} combinations - neither equals ${magicNum}`);


}
sumOfTwoNumbers(["1", "10", "5"])