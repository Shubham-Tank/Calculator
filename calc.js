function getText(ele)
{
    var x=document.getElementById(ele);
    return x.innerHTML;
}
function setText(btn)
{
    var x = document.getElementById(btn);
    var y = document.getElementById("first");
    var z = document.getElementById("second");
    var o = document.getElementById("op");
    if(y.value!="" && z.value!="" && o.value!="")
    {
        clean();
        y.value=x.innerHTML;
    }
    else
    {
        if(o.value=="")
        {
            y.value = y.value+x.innerHTML;
        }
        else
        {      
            z.value = z.value + x.innerHTML;
        }
    }
}
function setOp(op)
{
    var x = document.getElementById(op);
    document.getElementById("op").value=x.innerHTML;
}
function clean()
{
    var a = document.getElementById("first");
    var b = document.getElementById("second");
    var c = document.getElementById("op");
    var d = document.getElementById("ans");
    a.value = "";
    b.value = "";
    c.value = "";
    d.value = "";
}
function ans()
{
    var f = document.getElementById("first").value;
    var s = document.getElementById("second").value;
    var o = document.getElementById("op").value;
    f=Number(f);
    s=Number(s);
    var ans;
    switch(o)
    {
        case "+":
            ans = f+s;
            break;
        case "-":
            ans = f-s;
            break;
        case "x":
            ans = f*s;
            break;
        case "/":
            ans = f/s;
            break;
        case "%":
            ans = f%s;
            break;
    }
    document.getElementById("ans").value=ans;
}