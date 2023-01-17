const btn = document.getElementById('button');

  function myFunction() {
    var x = document.getElementById("myDIV");
     let y = document.forms["form"]["from_name", "email_id", "message"].value;

    if
     (x.style.display === "none" && y == "")
     {
     x.style.display = "none";
    } else {

       x.style.display = "block";
    }
  }

document.getElementById('form')
    .addEventListener('submit', function (event) {
      this.style['display'] = 'none';
        event.preventDefault();



   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_jl21isn';

   emailjs.sendForm("service_kmn9rnl", "template_jl21isn", this)
       .then(() => {

        btn.value = 'Send Email';




    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});