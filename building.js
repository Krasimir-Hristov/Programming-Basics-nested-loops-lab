function building(input) {
    let floors = Number(input[0]);
    let rooms = Number(input[1]);
 
    for (i = floors; i >= 1; i--) {
        let print = "";
        for (j = 0; j < rooms; j++) {
            if (i === floors) {
                print += `L${i}${j} `;   
            } else if (i % 2 === 0) {
                print += `O${i}${j} `;
            } else {
                print += `A${i}${j} `;
            }
        }
        console.log(print);
    }
 

    }


building(["6", "4"])