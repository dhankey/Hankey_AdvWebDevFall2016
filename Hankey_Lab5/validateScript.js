function validate()
{
    var controlls = document.querySelector(".validateControl");
    var cancel = false;
    for(var i = 0; i < controlls.length; i++)
    {
        if(controlls[i] == "")
            cancel = true;
    }
    return cancel;
}
