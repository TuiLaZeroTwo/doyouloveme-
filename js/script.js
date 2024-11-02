function check()
    {
    var name = document.getElementById("name").value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        if
        (name == "lanthi" ||
        name == "lthi")
        {
            window.open("success.html");
        }

        else
        {
            alert("Em là người mà anh yêuuu!");
        }
    }
