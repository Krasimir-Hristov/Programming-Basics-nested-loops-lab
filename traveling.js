function traveling(input) {
    let index = 0;
    let comand = input[index++]


    while (comand !== "End") {
        let destination = comand;
        let buged = Number(input[index++]);
        let sum = 0;
        while (buged > sum) {
            let money = Number(input[index++]);
            sum += money;
        }
        console.log(`Going to ${destination}!`);
        comand = input[index++];
    }
    

}
traveling(["Greece", "1000", "200", "200", "300", "100", "150", "240", "Spain", "1200", "300", "500", "193", "423", "End"])
