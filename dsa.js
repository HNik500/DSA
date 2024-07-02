
// function bubbleSort(Arr){
//     let len = Arr.length;
//     for(let j = 0; j<len-1; j++){
//     for(let i =0; i<len-1-j;i++){
//         if(Arr[i]>Arr[i+1]){
//             let firstValue= Arr[i];
//             Arr[i]=Arr[i+1];
//             Arr[i+1]=firstValue;
//         }
//     }
// }
//     return Arr
// }
// console.log( bubbleSort([3,12,5,7,2,10]));

// to detece vowel
let sentence = (sen)=>{
    let acc = 0;
for(let i = 0; i<sen.length; i++){
let currValue = sen[i]
switch (currValue) {
    case 'a':
        acc+=1;
        break;
        case 'e':
            acc+=1;
            break;
            case 'i':
                acc+=1;
                break;
                case 'o':
                    acc+=1;
                    break;
                    case 'u':
                        acc+=1;
                        break;
    default:
        break;
}
}
return acc;
}
console.log( sentence("i like food") );


// length of sentence without counting space
function aa(zaza){
    // let emarray = [];
    let count=0;
    for(let i =0; i<zaza.length;i++){
        if(zaza[i] != " "){
        // emarray.push(zaza[i])
        count+=1;
        continue;
        }
    }
    return count;
}
console.log( aa("i like food") )

// length of sentence without counting space
function bb(iiit){
    let count =0
    for(let i =0;i<iiit.length;i++){
        count+=1;
    }
    return count
}
console.log( bb("i like food") )

// no of words excluding space
function ccc(fafc){
    let counterz = 0;
    for(let i =0; i<fafc.length;i++){
        if(fafc[i] = " "){
            counterz+=1;
            continue;
        }
    }
    return counterz;
}

// no of words excluding space
function ccc(fafc){
    let counterz = 0;
    for(let i =0; i<fafc.length;i++){
        if(fafc[i] === " "){
            counterz+=1;
continue;
        }
    }
    return counterz+1;
}
console.log ( ccc("i like to eat outside") )