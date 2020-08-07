'use strict';

// Values I want to have on page
const name = "Rakibul Yeasin";
const githubUri = "https://github.com/dreygur";
const stackoverflowUri = "https://stackoverflow.com/users/7277428/dreygur";
const facebookUri = "https://facebook.com/dreygur";
const mailAddr = "ryeasin03@gmail.com";
const designation = "Python Developer";
const profileImage = "https://avatars2.githubusercontent.com/u/17668509?s=400&u=495209d146ccd3571f56a5dc6ed1b9c61d1f1c95&v=4";

const site = () => {
    // Selectors
    const title = document.querySelector('title');
    const github = document.querySelector('#github');
    const stackoverflow = document.querySelector('#stackoverflow');
    const facebook = document.querySelector('#facebook');
    const mail = document.querySelector('#mail')
    const nameId = document.querySelector('h2');
    const designationText = document.querySelector('h3');
    const profile = document.querySelector('#profile-img');

    // Set Attributes
    title.text = name;
    github.setAttribute('href', githubUri);
    stackoverflow.setAttribute('href', stackoverflowUri)
    facebook.setAttribute('href', facebookUri);
    mail.setAttribute('href', 'mailto:' + mailAddr);
    mail.text = mailAddr;
    console.log(nameId);
    nameId.innerText = name;
    designationText.innerText = designation;
    profile.setAttribute('src', profileImage);
};

document.addEventListener("DOMContentLoaded", site);