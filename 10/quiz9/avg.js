export default function avg(){
    let total = 0;
    let args = arguments;
    
    if(typeof(arguments[0])==='object') args = arguments[0];

    let num_count = args.length;

    for(let i = 0; i < args.length; i++){
        //인자 타입이 number가 아닐 경우
        if(typeof(args[i])!=='number'){
            num_count -= 1;
            continue;
        }
        total += args[i];
    }

    return total/num_count;
} 