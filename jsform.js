function next(){
    // that is a js page yanha batao koi dikkat hai isme 
    Id=document.getElementById("Id").value;
    Fname=document.getElementById("Fname").value;
    Mname=document.getElementById("Mname").value;
    Lname=document.getElementById("Lname").value;

    dob=document.getElementById("dob").value;
    experience=document.getElementById("experience").value;
    l_compay=document.getElementById("Lcompany").value;
    l_salary=document.getElementById("Lsalary").value;
    dpmnt=document.getElementById("Department").value;
   // desg=document.getElementById("")value;
   //in the next phase design the second page

   //set data
    localStorage.setItem("Id",Id);
    
    localStorage.setItem("Fname",Fname);
    localStorage.setItem("Mname",Mname);
    localStorage.setItem("Lname",Lname);
    //Qualification
    localStorage.setItem("dob",dob);
    //experience
    localStorage.setItem("experience",experience);
    localStorage.setItem("",);
    localStorage.setItem("",);
    localStorage.setItem("",);

}