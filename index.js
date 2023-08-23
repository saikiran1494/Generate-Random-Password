function Password(){
    var upp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var low = "abcdefghijklmnopqrstuvwxyz";
    var num = "1234567890";
    var spec = "!@#$%^&*()";
    var ans = "";
    ans += upp[Math.floor(Math.random() * upp.length)];
    ans += low[Math.floor(Math.random() * low.length)];
    ans += num[Math.floor(Math.random() * num.length)];
    ans += spec[Math.floor(Math.random() * spec.length)];
    var p = upp + low + num + spec;
    while (ans.length <= 12) {
        ans += p[Math.floor(Math.random() * p.length)];
    }
    document.getElementById("in").value = ans;
}
function copy(){
    var ct = document.getElementById("in");
    ct.select();
    ct.setSelectionRange(0,99999);
    navigator.clipboard.writeText(ct.value);
}