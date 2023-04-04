const additionner = (...nums) =>{
    let sum = 0;
    for(let i =0; i<nums.length;i++){
        sum += nums[i]
    }

    console.log(sum)
}
const multiplier=(...nums)=>{
    let sum = 1;
    for(let i =0; i<nums.length;i++){
        sum *= nums[i]
    }

    console.log(sum)
}

additionner(2, 4, 8, 20, 80, 120)
multiplier(2, 4, 8, 20, 80, 120)