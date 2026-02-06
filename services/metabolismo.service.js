export function metabolM(peso,altura,idade){
    return (10*peso)+(6.25*altura*100) - (5 * idade) + 5;
}

export function metabolF(peso,altura,idade){
    return (10*peso)+(6.25*altura*100) - (5 * idade) -161;
}

export function gastoCal(dias,metabol){
    switch (dias){
        case '0': return metabol * 1.2;
        case '3': return metabol * 1.375;
        case '5': return metabol * 1.55;
        case '7': return metabol * 1.725;
        case '8': return metabol * 1.9;
    }
}