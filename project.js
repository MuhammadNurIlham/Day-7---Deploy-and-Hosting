let blogs = []

const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  
function addNewBlog(event) {
  
    event.preventDefault()

    let project = document.getElementById('input-project-name').value
    let startDate = document.getElementById('input-start-time').value
    let endDate = document.getElementById('input-end-time').value
    let description = document.getElementById('input-description').value
    let technologies = document.getElementById('input-list-checkbox').value
    let files = document.getElementById('input-myfile')
    
    files = URL.createObjectURL(files.files[0])

    let blogProject = {
        author: 'Muhammad Nur Ilham',
        projectName: project,
        startDate: startDate,
        endDate: endDate,
        description: description,
        technologies: technologies,
        files: files,
        postedAt: new Date()
    }

    blogs.push(blogProject)

    renderBlog()
}

function renderBlog() {
    let lengthData = blogs.length
    // console.log(lengthData)

    let projectCard = document.getElementById('article')

    projectCard.innerHTML = firstProjectCard()

    // looping / perulangan
    for (let i = 0; i < lengthData; i++) {
        projectCard.innerHTML += `
            <div class="project-card">
                <div class="menu-project-card">
                    <div class="image-card-project">
                        <img src=${blogs[i].files} alt="">
                    </div>
                    <div class="title-card-project">
                        <h3>
                            <a href="task-day6.html">
                                ${blogs[i].projectName}
                            </a>
                        </h3>
                        <p>durasi : ${getDistanceTime(blogs[i].postedAt)}</p>
                    </div>
                    <div class="content-card-project">
                        <p>
                            ${blogs[i].description}
                        </p>
                    </div>
                    <div class="logo-card-project">
                        <img src="assets/js.png" alt="Js-image">
                        <img src="assets/git.png" alt="git-image">
                        <img src="assets/deploy.png" alt="deploy-image">
                    </div>
                    <div class="btn-project">
                        <div class="btn-edit-project">
                            <button>Edit</button>
                        </div>
                        <div class="btn-delete-project">
                            <button>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
            `
    }
}

// function checker(that) {
//     if (that.checked) {
//         document.write("<img src=''>")
//     }
// }

function getFullTime(time) {

    const date = time.getDate()
    const monthIndex = time.getMonth()
    const year = time.getFullYear()
  
    const hours = time.getHours()
    const minutes = time.getMinutes()
  
    return `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`
}
  
function getDistanceTime(time) {
    const distance = new Date() - new Date(time)
  
    // convert to day
    const miliseconds = 1000
    const secondInMinute = 60
    const minutesInHour = 60
    const secondsInHour = secondInMinute * minutesInHour
    const hoursInDay = 23
  
    let dayDistance = distance / (miliseconds * secondsInHour * hoursInDay)
  
    if (dayDistance >= 1) {
      const time = Math.floor(dayDistance) + ' a day ago'
      console.log("time " + time);
      return time
    } else {
      // Convert to hour
      let hourDistance = Math.floor(distance / (miliseconds * secondsInHour))
      // hourDistance = 0.1
      if (hourDistance > 0) {
        return hourDistance + ' hour ago'
      } else {
        // convert to minute
        const minuteDistance = Math.floor(distance / (miliseconds * secondInMinute))
        return minuteDistance + ' minute ago'
      }
    }
  
  }
  
//   setInterval(function () {
//     renderBlog()
//   }, 2000)

function firstProjectCard() {
    return `
        <div class="project-card">
            <div class="menu-project-card">
                <div class="image-card-project">
                    <img src="assets/svg.png" alt="svg-image">
                </div>
                <div class="title-card-project">
                    <h3>
                        <a href="task-day6.html">SWK Mobile App</a>
                    </h3>
                    <p>durasi : 3 bulan</p>
                </div>
                <div class="content-card-project">
                    <p>App that used for all people Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptates fugit id debitis consequuntur accusantium.</p>
                </div>
                <div class="logo-card-project">
                    <img src="assets/js.png" alt="Js-image">
                    <img src="assets/git.png" alt="git-image">
                    <img src="assets/deploy.png" alt="deploy-image">
                </div>
                <div class="btn-project">
                    <div class="btn-edit-project">
                        <button>Edit</button>
                    </div>
                    <div class="btn-delete-project">
                         <button>Delete</button>
                    </div>
                 </div>
            </div>
        </div>
        `
}