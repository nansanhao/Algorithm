
let a=3;
let array=[
    [1,2,3],
    [4,5,6]
]
function Find(target, array)
{
    // write code here
    let x=0;
    let y=array.length-1;
    while(x!=(array[0].length)||y!=-1){
        if(array[y][x]==target){
            return true;
        }else if(array[y][x]>target){
            y--;
           
        }else if(array[y][x]<target){
             x++;
        }
    }
    return false;
}
console.log(Find(a,array))
