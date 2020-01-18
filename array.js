const greatest_sum = num => {
    let sum= num[0]+num[1];
    let position = [num[0],num[1] ];
    for(let i=0; i<num.length; i++){
        for(let j=i+1;j<num.length;j++){
            if(num[i]+num[j]>sum){
                sum =num[i]+num[j];
                position[0]= num[i];
                position [1]= num[j];           
            }
        }
    }
    return position;
}



module.exports = { greatest_sum};