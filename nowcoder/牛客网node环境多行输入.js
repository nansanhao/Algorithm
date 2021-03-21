var readline = require('readline');
const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
});
let lines=[]
rl.on('line', function(line){
    lines.push(line)
    if(lines.length===2){
        const buildings=lines[1].split(' ').map(item=>parseInt(item));
        console.log(buildings)
    }
});


//仅取整数部分
// Math.floor()
 
//小数进一
// Math.ceil()
 
//四舍五入
// Math.round()
