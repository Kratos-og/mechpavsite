export const minifyAddress = (address, length) => address?.slice(0, length) + '...' + address?.slice(address?.length - length - 1, address?.length);

export function hex2a(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}