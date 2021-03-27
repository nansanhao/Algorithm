// ip地址转整数
function ipToInt(ip) {
    let ipList = ip.split('.').map(ele => parseInt(ele));
    seg0 = ipList[0] << 24;
    seg1 = ipList[1] << 16;
    seg2 = ipList[2] << 8;
    seg3 = ipList[3];
    return seg0 | seg1 | seg2 | seg3;
}
console.log(ipToInt('10.0.3.193'))

// 整数转IP地址
function intToIp(num) {
    let ipList = [];
    ipList.push(num >> 24 & 255);
    ipList.push(num >> 16 & 255);
    ipList.push(num >> 8 & 255);
    ipList.push(num & 255);
    return ipList.join('.')
}

console.log(intToIp(167773121))

