    var ajax = new XMLHttpRequest();
    ajax.open("GET","php/profile.php",true);
    ajax.send();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            var data = JSON.parse(this.responseText);
            console.log(data);

            var html = "   ";
            for(var a=0; a< data.length; a++){
                var name = data[a].name;
                var dob = data[a].dob;
                var age = data[a].age;

                html+="<br>";
                html+="NAME-   ";
                html+=name ;
                html+="<br>";
                html+="DOB-   ";
                html+= dob ;
                html+="<br>";
                html+="AGE-   ";
                html+=age ;
                html+="<br>";
            
            }
            document.getElementById("data").innerHTML += html;
        }
    };