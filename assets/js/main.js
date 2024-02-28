

function updateProfileInfo(profileData){
    const photo = document.getElementById("profile.photo")
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById("profile.name")
        name.innerText = profileData.name /*innerText é para adicionar um texto ou substituir um texto dentro dessa ID*/

    const user = document.getElementById("profile.user")
        user.innerText = profileData.user 
        
    const map = document.getElementById("profile.map")
        map.innerText = profileData.map 

    const phone = document.getElementById("profile.phone")
        phone.innerText = profileData.phone
        phone.href = `tel: ${profileData.phone}`

    const email = document.getElementById("profile.email")
        email.innerText = profileData.email
        email.href = `mailto:${profileData.email}`

    const university = document.getElementById("profile.university")
        university.innerText = profileData.university

}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById("profile.skills.hardSkills")
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById("profile.skills.softSkills")
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateLanguages(profileData) {
    const lang = document.getElementById("profile.lang")
    lang.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updatePorfolio(profileData) {
    const portfolio = document.getElementById("profile.portfolio")
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
        <li>
            <h3 ${project.github ? 'class="github"' : ''}>${project.name}</h3>
            <a href="${project.url}" target="_blank">${project.url}</a>
        </li>
    `
    }).join('')
}
    


function updateEducationAwards(profileData) {
    const awards = document.getElementById("profile.education.awards")
    awards.innerHTML = profileData.education.awards.map(award => `<li><img src="${award.logo}" alt="${award.name}" title="${award.name}"></li>`).join('')
}

function updateEducationSchools(profileData) {
    const schools = document.getElementById("profile.education.schools")
    schools.innerHTML = profileData.education.schools.map(school => {
        return `
        <h3>${school.name}</h3>
                    <li>${school.info}</li>
        `
    }).join('')
}

function updateExperience(profileData) {
    const experience = document.getElementById("profile.experience")
    experience.innerHTML = profileData.experience.map(experience => {
        return`
        <h3 class="title">${experience.name}</h3>
                    <span class="data">${experience.period}</span>
                    <p>
                       ${experience.description}
                    </p>     
        `
    }).join('')
}

(async () => {

    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateHardSkills(profileData)
    updateSoftSkills(profileData)
    updateLanguages(profileData)
    updatePorfolio(profileData)
    updateEducationAwards(profileData)
    updateEducationSchools(profileData)
    updateExperience(profileData)

})()
