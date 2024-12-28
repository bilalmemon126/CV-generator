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
        qualificationLI.id = "getQualification1";
        qualificationUL.appendChild(qualificationLI);
    
        qualification = document.getElementById("qualification").value;
        getQualification = document.getElementById("getQualification1").innerHTML = qualification;
        
        experienceUL = document.getElementById("experienceUL");
        experienceLI = document.createElement('li');
        experienceLI.id = "getExperience1";
        experienceUL.appendChild(experienceLI);
    
        experience = document.getElementById("experience").value;
        getExperience = document.getElementById("getExperience1").innerHTML = experience;
        
        courseUL = document.getElementById("courseUL");
        courseLI = document.createElement('li');
        courseLI.id = "getCourse1";
        courseUL.appendChild(courseLI);
    
        course = document.getElementById("course").value;
        getCourse = document.getElementById("getCourse1").innerHTML = course;
    
        skillsUL = document.getElementById("skillsUL");
        skillsLI = document.createElement('li');
        skillsLI.id = "getSkills1";
        skillsUL.appendChild(skillsLI);
    
        skills = document.getElementById("skills").value;
        getSkills = document.getElementById("getSkills1").innerHTML = skills;
    }
})

let i = 1;
let addQualification = document.getElementById("addQualification");

addQualification.addEventListener("click", () => {
    qualification = document.getElementById("qualification").value;
    if(qualification.trim() === ""){
        alert("Please Fill Field")
    }
    else{
        i++;
        qualificationUL = document.getElementById("qualificationUL");
        qualificationLI = document.createElement('li');
        qualificationLI.id = "getQualification"+i;
        qualificationUL.appendChild(qualificationLI);
    
        getQualification = document.getElementById("getQualification"+i).innerHTML = qualification;
        qualification = document.getElementById("qualification").value = "";
    }
})

let addExperience = document.getElementById("addExperience");

addExperience.addEventListener("click", () => {
    experience = document.getElementById("experience").value;
    if(experience.trim() === ""){
        alert("Please Fill Field")
    }
    else{
        i++;
        experienceUL = document.getElementById("experienceUL");
        experienceLI = document.createElement('li');
        experienceLI.id = "getExperience"+i;
        experienceUL.appendChild(experienceLI);
    
        getExperience = document.getElementById("getExperience"+i).innerHTML = experience;
        experience = document.getElementById("experience").value = "";
    }
})

let addCourse = document.getElementById("addCourse");

addCourse.addEventListener("click", () => {
    course = document.getElementById("course").value;
    if(course.trim() === ""){
        alert("Please Fill Field")
    }
    else{
        i++;
        courseUL = document.getElementById("courseUL");
        courseLI = document.createElement('li');
        courseLI.id = "getCourse"+i;
        courseUL.appendChild(courseLI);
    
        getCourse = document.getElementById("getCourse"+i).innerHTML = course;
        course = document.getElementById("course").value = "";
    }
})

let addSkills = document.getElementById("addSkills");

addSkills.addEventListener("click", () => {
    skills = document.getElementById("skills").value;
    if(skills.trim() === ""){
        alert("Please Fill Field")
    }
    else{
        i++;
        skillsUL = document.getElementById("skillsUL");
        skillsLI = document.createElement('li');
        skillsLI.id = "getSkills"+i;
        skillsUL.appendChild(skillsLI);
    
        getSkills = document.getElementById("getSkills"+i).innerHTML = skills;
        skills = document.getElementById("skills").value = "";
    }
})


let colorBtn = document.getElementById("setColor");

colorBtn.addEventListener("click", () => {
    colorInput = document.getElementById("colorName").value;
    if(colorInput.trim() === ""){
        alert("Please Enter Color Name")
    }
    else{
        document.getElementById("mainContainer").style.border = "15px solid "+colorInput;

        border = document.querySelectorAll(".border");
        border.forEach(border => {
            border.style.border = "2px solid "+colorInput;
        })

        border1 = document.querySelectorAll(".border1");
        border1.forEach(border1 => {
            border1.style.border = "1px solid "+colorInput;
        })
        
        colorInput = document.getElementById("colorName").value = "";
    }
})