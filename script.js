//============================================================================================//
//                                                                                            //
//                                     NAVBAR                                                 //
//                                                                                            //
//============================================================================================//
let burger=document.querySelector("#burger")
let ul_container=document.querySelector(".ul-container")
burger.addEventListener('click',()=>{
    ul_container.classList.toggle("show-from-left")
})
let buttons=document.querySelectorAll(".ul-container ul li")
console.log(buttons)
buttons.forEach(a=>{
    a.addEventListener("click",()=>{
        ul_container.classList.toggle("show-from-left")  
    })
})

//============================================================================================//
//                                                                                            //
//                                     ABOUT                                                  //
//                                                                                            //
//============================================================================================//

//Getting all the header elements and storing them into variables
let about_files=document.querySelector(".about");
let languages_files=document.querySelector(".languages");
let education_files=document.querySelector(".education");


//selecting the items that we need to hide    //in our case its the second child of each div
let about_child=about_files.childNodes[3];//the <p> tag is in the 4th index // we used console to see it
let languages_child=languages_files.childNodes[3];//selected the tag that we actually want to remove
let education_child=education_files.childNodes[3];

//hiding the items
about_files.removeChild(about_child);
languages_files.removeChild(languages_child);
education_files.removeChild(education_child);


//====================Adding the items back when clicking the span button===============

//defining the buttons
let about_button=document.querySelector('#about_header #about-button');
let languages_button=document.querySelector('#languages_header i');
let education_button=document.querySelector('#education_header i');


//defining the function for each button

about_button.addEventListener('click',()=>{
    about_files.appendChild(about_child);
});

languages_button.addEventListener('click',()=>{
    languages_files.appendChild(languages_child);
});


education_button.addEventListener('click',()=>{
    education_files.appendChild(education_child);
});











//============================================================================================//
//                                                                                            //
//                                     CERTIFICATION                                          //
//                                                                                            //
//============================================================================================//

let python_table=document.querySelector(".python");
let data_table=document.querySelector(".data_science");
let deep_table=document.querySelector(".deep_learning");
let web_table=document.querySelector(".web");

//working the python table

//removing all the items
let children_python=python_table.querySelectorAll('tbody');
python_table.removeChild(children_python[0]);

//creating eventListener for the sub-title
let python_title=document.querySelector('#python_header span');
python_title.addEventListener('click',()=>{
    python_table.appendChild(children_python[0]);//re-adding the elements when the sub-title is clicked
});





//doing the same thing for all the tables


//working for data_table
let children_data=data_table.querySelectorAll('tbody');
data_table.removeChild(children_data[0]);

//creating eventListener for the sub-title
let data_title=document.querySelector('#data_header span');
data_title.addEventListener('click',()=>{
    data_table.appendChild(children_data[0]);//re-adding the elements when the sub-title is clicked
    

});

//working with deep learning table

//working for data_table
let children_deep=deep_table.querySelectorAll('tbody');
deep_table.removeChild(children_deep[0]);

//creating eventListener for the sub-title
let deep_title=document.querySelector('#deep_header span');
deep_title.addEventListener('click',()=>{
   deep_table.appendChild(children_deep[0]);//re-adding the elements when the sub-title is clicked
});

//working for the web table

let children_web=web_table.querySelectorAll('tbody');
web_table.removeChild(children_web[0]);

//creating eventListener for the sub-title
let web_title=document.querySelector('#web_header span');
web_title.addEventListener('click',()=>{
    web_table.appendChild(children_web[0]);//re-adding the elements when the sub-title is clicked
});