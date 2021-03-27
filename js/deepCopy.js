let obj=[1,2,3]

function copy(object){
    if(typeof object=='object'){
        let object_c;
        if(Array.isArray(object)){
            object_c=[]
        }else{
            object_c={}
        }
        
        for (let key in object) {
            object_c[key]=copy(object[key]);
        }
        return object_c;
    }else{
        return object;
    }
}
let obj2=copy(obj)

obj[1]=0
console.log(obj)
console.log(obj2)