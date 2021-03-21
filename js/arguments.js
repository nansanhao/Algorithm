function fun(a,b){
    // console.log(arguments.toString())
    delete arguments.length
    console.log(arguments)
}

fun(1,2)