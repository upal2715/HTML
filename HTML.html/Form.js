function  Validetion(){
     const username=document.getElementById("student-name").value;
     const userfother=document.getElementById("student-Fother").value
     const usermother=document.getElementById("student-motder").value
     const useremail=document.getElementById("student-Email").value
     const userdate=document.getElementById("student-Date-of-Birht").value
     const userphone=document.getElementById("student-Phone").value
     const userschool=document.getElementById("student-school").value;
     const userpicode=document.getElementById("student-pin-code").value;

     if(username==""){
          document.getElementById("student").innerHTML="Plz Enter Your name*";
     }
     if(userfother==""){
          document.getElementById("student1").innerHTML="Plz Enter Your Fother name*";
     }
     if(usermother==""){
          document.getElementById("student2").innerHTML="Plz Enter Your Mother name*";
     }
     if(useremail==""){
          document.getElementById("student3").innerHTML="Plz Enter Email* ";
     }
     if(userdate==""){
          document.getElementById("student4").innerHTML="Plz Enter Date of Birth*";
     }
     if(userphone==""){
          document.getElementById("student5").innerHTML="Plz Enter Mobile number*";
     }
    
     if(userschool==""){
          document.getElementById("student6").innerHTML="School Ditels *";
     }
     if(userpicode==""){
          document.getElementById("student7").innerHTML="Plz Pincode number*";
     }
}