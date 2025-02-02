let btn = document.getElementById("submit")

btn.addEventListener("click", function(){
    inputs = document.querySelectorAll(".inputs");
    check = true;
    inputs.forEach(inputs => {
        if(inputs.value.trim() === ""){
            check = false;
        }
    });
    if(!check){
        alert("please fill all fields")
    }
    else{
        main = document.getElementById("main")
        main.classList.add("hide")
        
        main1 = document.getElementById("main1")
        main1.classList.remove("hide")
        
        userName = document.getElementById("name").value;
        getName = document.getElementById("getName").innerHTML = userName;
    
        address = document.getElementById("address").value;
        getAddress = document.getElementById("getAddress").innerHTML = address;
    
        userNumber = document.getElementById("number").value;
        getNumber = document.getElementById("getNumber").innerHTML = userNumber;
    
        objective = document.getElementById("objective").value;
        getObjective = document.getElementById("getObjective").innerHTML = objective;


        qualificationUL = document.getElementById("qualificationUL");
        qualificationLI = document.createElement('li');
        qualificationUL.appendChild(qualificationLI);
    
        qualification = document.getElementById("qualification").value;
        qualificationLI.innerHTML = qualification;
    


        experienceUL = document.getElementById("experienceUL");
        experienceLI = document.createElement('li');
        experienceUL.appendChild(experienceLI);

        experience = document.getElementById("experience").value;
        experienceLI.innerHTML = experience;
    


        courseUL = document.getElementById("courseUL");
        courseLI = document.createElement('li');
        courseUL.appendChild(courseLI);

        course = document.getElementById("course").value;
        courseLI.innerHTML = course;
    


        skillsUL = document.getElementById("skillsUL");
        skillsLI = document.createElement('li');
        skillsUL.appendChild(skillsLI);

        skills = document.getElementById("skills").value;
        skillsLI.innerHTML = skills;
    }
})



let qi = 0;
let addQualification = document.getElementById("addQualification");
addQualification.addEventListener("click", function(){
    qi++;
    addMore("qualification","getQualification","Q", qi)
})


let ei = 0;
let addExperience = document.getElementById("addExperience");
addExperience.addEventListener("click", function() {
    ei++;
    addMore("experience", "getExpereince", "E", ei)
})


let ci = 0;
let addCourse = document.getElementById("addCourse");
addCourse.addEventListener("click", function() {
    ci++;
    addMore("course", "getCourse", "C", ci)
})


let si = 0;
let addSkills = document.getElementById("addSkills");
addSkills.addEventListener("click", function() {
    si++;
    addMore("skills", "getSkills", "S", si)
})





function addMore(inputId,b,c,increament){
    qualification = document.getElementById(inputId).value;
    if(qualification.trim() === ""){
        alert("Please Fill Out This Field")
    }
    else{
        appendQ = document.getElementById("append"+c)

        paraBoxQ = document.createElement('div');
        paraBoxQ.id = "paraBox"+c+increament;
        paraBoxQ.classList.add("paraBox")

        paraQ = document.createElement("p")
        paraQ.id = "para"+c;

        dlt = document.createElement("button")
        dlt.id = "dlt"+c+increament;
        dlt.classList.add("dlt")
        dlt.innerHTML = "x";

        paraBoxQ.appendChild(paraQ);
        paraBoxQ.appendChild(dlt)

        paraQ.innerHTML = qualification;
        appendQ.appendChild(paraBoxQ)

        ul = document.getElementById(inputId+"UL");
        li = document.createElement("li");
        li.id = c+"li"+increament;
        li.innerHTML = qualification;
        ul.appendChild(li)
        
        qualification = document.getElementById(inputId).value = "";
    
        dlt.addEventListener("click", function(){
            document.getElementById(c+"li"+increament).remove()
            this.parentElement.remove();
        })
    }
}





let colorBtn = document.getElementById("setColor");

colorBtn.addEventListener("click", () => {
    colorInput = document.getElementById("colorName").value;

    document.getElementById("mainContainer").style.border = "15px solid "+colorInput;

    border = document.querySelectorAll(".border");
    border.forEach(border => {
        border.style.border = "2px solid "+colorInput;
    })

    border1 = document.querySelectorAll(".border1");
    border1.forEach(border1 => {
        border1.style.border = "1px solid "+colorInput;
    })
})