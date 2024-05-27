let fibonnacci : number
    let i = 0;
    let a = 0;
    let b = 1;
    
    while (i <=100) {
        console.log(a);
        let fibonnacci = a;
        a = b;
        b = fibonnacci + b;
        i++;
    }

    console.log(a);

