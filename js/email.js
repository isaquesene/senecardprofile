function sendEmail(){
  var params = {
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value,

  };


const serviceID = "service_qrcit65";
const templateID = "template_gmj2cmk";

emailjs
  .send(serviceID, templateID, params)
  .then((res)=>{
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("Enviado comsucesso!");
  })

  .catch((err) => console.log(err));

}