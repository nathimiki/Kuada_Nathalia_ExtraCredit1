
const course = document.querySelector('#courseName'),
prof = document.querySelector('#profName'),
time = document.querySelector('#classTime').querySelectorAll('li'),
img = document.querySelector('.profImg');
titledesc = document.querySelector('#titleDesc');
desc = document.querySelector('#courseDesc');
content = document.querySelector('.courseContent').querySelectorAll('li');


getInfo(classData);

function getInfo(data) {
    course.innerHTML = data.coursename + " - " + data.coursecode;
    prof.innerHTML = "Professor - " + data.profname;
    time[0].innerHTML = data.classtime[0];
    time[1].innerHTML = data.classtime[1];
    img.src = data.profimg;
    titledesc.innerHTML = data.coursename + " - " + data.coursecode;
    desc.innerHTML = data.coursedesc;
    content[0].innerHTML = data.coursecontent[0];
    content[1].innerHTML = data.coursecontent[1];
    content[2].innerHTML = data.coursecontent[2];
    content[3].innerHTML = data.coursecontent[3];
}


