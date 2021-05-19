export default function(min, max){
    if(arguments.length===1){
        max = min;
        min = 0
    }

    if(isNaN(min) && isNaN(max))
        return Math.floor(Math.random() * (max - min)) + min;
    else
        return -1
}