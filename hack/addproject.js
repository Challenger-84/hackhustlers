// let count = 0;
// let projectDetails = [];

// submitbtn.addEventListener('click', () => {
//     console.log('hello');
//     const details = [
//         projectname.value,
//         projectType.value,
//         projectdescription.value,
//         RequirementsList.innerText,
//         fieldslist.innerText
//     ];
//     projectDetails.push(details);
//     count++;
// });

// console.log(projectDetails);

// Retrieve projectDetails from local storage if it exists
let projectDetails = JSON.parse(localStorage.getItem('projectDetails')) || [];
let count = projectDetails.length;

submitbtn.addEventListener('click', () => {
    const details = [
        projectname.value,
        projectType.value,
        projectdescription.value,
        RequirementsList.innerText,
        fieldslist.innerText
    ];
    projectDetails.push(details);
    count++;

    // Store projectDetails in local storage
    localStorage.setItem('projectDetails', JSON.stringify(projectDetails));

    // You can also clear the form fields after submission if needed
    projectname.value = '';
    projectType.value = '';
    projectdescription.value = '';
    RequirementsList.value = '';
    fieldslist.value = '';
});

// You can load projectDetails from local storage when the page loads
console.log(projectDetails);
