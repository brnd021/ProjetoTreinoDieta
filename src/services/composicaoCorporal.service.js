export function pollock3M(age,chest,abs,thighs){
    return 1.10938 - (0.0008267 * (chest + abs + thighs)) + (0.0000016 * Math.pow((chest + abs + thighs),2)) - (0.0002574 * age);
}

export function pollock3F(age,triceps,supra,thighs){
    return 1.0994921 - (0.0009929 * (triceps + supra + thighs)) + (0.0000023 * Math.pow((triceps + supra + thighs),2)) - (0.0001392 * age);
}

export function pollock4(triceps,biceps,sub,supra){
    return 1.1599 - (0.0717 * Math.log10(triceps + biceps + sub + supra));
}

export function pollock7M(age,chest,abs,thighs,triceps,sub,supra,axilar){
    return 1.112 - (0.00043499 * (chest + abs + thighs + triceps + sub + supra + axilar)) + (0.00000055 * Math.pow((chest + abs + thighs + triceps + sub + supra + axilar),2)) - (0.00028826 * age);
}

export function pollock7F(age,chest,abs,thighs,triceps,sub,supra,axilar){
    return 1.097 - (0.00046971 * (chest + abs + thighs + triceps + sub + supra + axilar)) + (0.00000056 * Math.pow((chest + abs + thighs + triceps + sub + supra + axilar),2)) - (0.00012828 * age);
}

export function DurninWomersleyM(age,biceps,triceps,supra,sub){
    if(age >= 17 && age <= 19){
        return 1.1620 - (0.0630 * Math.log10(biceps + triceps + supra + sub));
    }
    else if(age >= 20 && age <= 29){
        return 1.1631 - (0.0632 * Math.log10(biceps + triceps + supra + sub));
    }
    else if(age >= 30 && age <= 39){
        return 1.1422 - (0.0544 * Math.log10(biceps + triceps + supra + sub));
    }
    else if(age >= 40 && age <= 49){
        return 1.1620 - (0.0700 * Math.log10(biceps + triceps + supra + sub));
    }
    else{
        return 1.1715 - (0.0779 * Math.log10(biceps + triceps + supra + sub));
    }
}

export function DurninWomersleyF(age,biceps,triceps,supra,sub){
      if(age >= 17 && age <= 19){
        return 1.1549 - (0.0678 * Math.log10(biceps + triceps + supra + sub));
    }
    else if(age >= 20 && age <= 29){
        return 1.1599 - (0.0717 * Math.log10(biceps + triceps + supra + sub));
    }
    else if(age >= 30 && age <= 39){
        return 1.1423 - (0.0632 * Math.log10(biceps + triceps + supra + sub));
    }
    else if(age >= 40 && age <= 49){
        return 1.1333 - (0.0612 * Math.log10(biceps + triceps + supra + sub));
    }
    else{
        return 1.1339 - (0.0645 * Math.log10(biceps + triceps + supra + sub));
    }
}

export function Faulkner(abs,triceps,sub,supra){
    return 0.153 * (abs + triceps + sub + supra) + 5.783;
}

export function SloanM(chest,thighs){
    return 1.1043 - (0.001327 * chest) - (0.00131 * thighs) ;
}

export function SloanF(triceps,crista){
    return 1.0764 - (0.0008 * triceps) - (0.00088 * crista) ;
}

export function GuedesM(chest,abs,thighs){
    return 1.17136 - (0.06706 * Math.log10(chest + abs + thighs));
}

export function GuedesF(triceps,supra,thighs){
    return 1.16650 - (0.07063 * Math.log10(triceps + supra + thighs));
}