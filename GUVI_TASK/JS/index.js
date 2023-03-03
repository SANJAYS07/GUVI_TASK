         const loginText = document.querySelector(".title-text .login");
         const loginForm = document.querySelector("form.login");
         const loginBtn = document.querySelector("label.login");
         const signupBtn = document.querySelector("label.signup");
         const signupLink = document.querySelector("form .signup-link a");
         signupBtn.onclick = (()=>{
           loginForm.style.marginLeft = "-50%";
           loginText.style.marginLeft = "-50%";
         });
         loginBtn.onclick = (()=>{
           loginForm.style.marginLeft = "0%";
           loginText.style.marginLeft = "0%";
         });
         signupLink.onclick = (()=>{
           signupBtn.click();
           return false;
         });

         $("#SIGNUPFORM").submit( (e) => {
            e.preventDefault();
            var form = $("#SIGNUPFORM").serialize();
            
            $.ajax({
               url : "php/index.php",
               method: 'post',
               data: form,
               success: function(res) {
                  alert(res);
                  $("#SIGNUPFORM")[0].reset();
                  
               }
            })
         })


         $("#LoginForm").submit( (e) => {
            e.preventDefault();
            
            var form_login = $("#LoginForm").serialize();
            $.ajax({
               url : "php/index.php",
               method: 'post',
               data: form_login,
               success: function(res) {
                  var data = $.parseJSON(res);
                  alert(data.message);
                  if (data.status == 'success') {
                     window.location = 'profile.html';
                  }
               }
            })
         })