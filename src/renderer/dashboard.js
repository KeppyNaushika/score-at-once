
(
  async ()=>{
    const dictProjects = await window.score.loadProjects()
    const htmlProjects = document.getElementById('projects')
    
    console.log(dictProjects)
    console.log(String(dictProjects.length))
    
    for (let i=0; i<dictProjects.length; i++) {
      const new_element = document.createElement('tr')
      new_element.setAttribute('id', `project-${i}`)
      new_element.insertAdjacentHTML("beforeend",
        `
          <td class="align-middle text-center text-sm">
            <a href="#">
              <div class="d-flex flex-column justify-content-center">
                <i class="material-icons opacity-10", id="project-${i}-checked">radio_button_unchecked</i>
              </div>
            </a>
          </td>
          <td class="align-middle text-center text-sm">
            <span class="text-xs font-weight-bold", id="project-${i}-date"></span>
          </td>
          <td>
            <div class="d-flex px-2 py-1">
              <div class="d-flex flex-column justify-content-center">
                <h6 class="mb-0 text-sm", id="project-${i}-name"></h6>
              </div>
            </div>
          </td>
          <td>
            <div class="avatar-group mt-2">
              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Ryan Tompson">
                <img src="../assets/img/team-1.jpg" alt="team1">
              </a>
              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Romina Hadid">
                <img src="../assets/img/team-2.jpg" alt="team2">
              </a>
              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Alexander Smith">
                <img src="../assets/img/team-3.jpg" alt="team3">
              </a>
              <a href="javascript:;" class="avatar avatar-xs rounded-circle" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Jessica Doe">
                <img src="../assets/img/team-4.jpg" alt="team4">
              </a>
            </div>
          </td>
          <td class="align-middle text-center text-sm">
            <span class="text-xs font-weight-bold" id="project-${i}-markerIds"></span>
          </td>
          <td class="align-middle text-center text-sm">
            <span class="text-xs font-weight-bold" id="project-${i}-cntAnswerMember"></span>
          </td>
          <td class="align-middle">
            <div class="progress-wrapper w-75 mx-auto">
              <div class="progress-info">
                <div class="progress-percentage">
                  <span class="text-xs font-weight-bold">80%</span>
                </div>
              </div>
              <div class="progress">
                <div class="progress-bar bg-gradient-info" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 100%;"></div>
              </div>
            </div>
          </td>
        `
      )
      htmlProjects.appendChild(new_element)
    }
    for (let i=0; i<dictProjects.length; i++) {
      const htmlProjectChecked = document.getElementById(`project-${i}-checked`)
      htmlProjectChecked.innerHTML = "radio_button_unchecked"
      htmlProjectChecked.addEventListener('click', () => {
        for (let j=0; j<dictProjects.length; j++) {
          const htmlProjectChecked_ = document.getElementById(`project-${j}-checked`)
          htmlProjectChecked_.innerHTML = "radio_button_unchecked"
        }
        htmlProjectChecked.innerHTML = "radio_button_checked"
      })
      const htmlProjectName = document.getElementById(`project-${i}-name`)
      htmlProjectName.innerHTML = dictProjects[i].name
      const htmlProjectDate = document.getElementById(`project-${i}-date`)
      const date = new Date(dictProjects[i].date)
      htmlProjectDate.innerHTML = date.toLocaleDateString()  
    }
  }
)()
