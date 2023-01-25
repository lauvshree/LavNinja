  let recos = [ "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Ullamcorper eget nulla facilisi etiam. Tempus urna et pharetra pharetra massa massa ultricies mi quis. ",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Ullamcorper eget nulla facilisi etiam. Tempus urna et pharetra pharetra massa massa ultricies mi quis. ",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Ullamcorper eget nulla facilisi etiam. Tempus urna et pharetra pharetra massa massa ultricies mi quis. "];


  let projects = {"css":"CSS Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Ullamcorper eget nulla facilisi etiam. Tempus urna et pharetra pharetra massa massa ultricies mi quis. ",
                  "html":"HTML Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Ullamcorper eget nulla facilisi etiam. Tempus urna et pharetra pharetra massa massa ultricies mi quis. ",
                  "js":"Javascript Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Ullamcorper eget nulla facilisi etiam. Tempus urna et pharetra pharetra massa massa ultricies mi quis. ",
                  "java":"Java Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Ullamcorper eget nulla facilisi etiam. Tempus urna et pharetra pharetra massa massa ultricies mi quis. ",
                  "react":"React Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Ullamcorper eget nulla facilisi etiam. Tempus urna et pharetra pharetra massa massa ultricies mi quis. ",
                  "node":"NodeJS Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Ullamcorper eget nulla facilisi etiam. Tempus urna et pharetra pharetra massa massa ultricies mi quis. "};

  function loadRecos() {

    let reco = document.getElementById("recommendation");
    if(reco.value != null && reco.value.trim() != "") {
      recos.push(reco.value);
      showPopup(true);
    }
    reco.value = "";
    let reco_element = document.getElementById("recos");
    let oldProjs = document.getElementById("reco_items");
    reco_element.removeChild(oldProjs);
    let newProj = document.createElement("div");
    newProj.setAttribute("id","reco_items");
    
    recos.forEach((reco)=>{
      let newdiv = document.createElement("div");
      newdiv.setAttribute("class","reco");
      newdiv.innerText = reco;
      newProj.appendChild(newdiv);
    });
    reco_element.appendChild(newProj);
    reco_element.scrollTop = reco_element.scrollHeight;
  }

  function loadProject(skillname) {
    let proj_details = document.getElementById("proj_details");
    switch(skillname) {
    case 'CSS':  proj_details.innerText = projects['css'];break;
    case 'HTML': proj_details.innerText = projects['html']; break;
    case 'JS': proj_details.innerText = projects['js']; break;
    case 'Java': proj_details.innerText = projects['java']; break;
    case 'NodeJS': proj_details.innerText = projects['node']; break;
    case 'React': proj_details.innerText = projects['react'];
    }
  }

  function showPopup(bool) {
      if(bool){
        document.getElementById('popup').style.visibility = 'visible'
      } else {
        document.getElementById('popup').style.visibility = 'hidden'
      }
  }

  function showProject(bool,name) {

    if(bool){
      let proj_details = document.getElementById("proj_details");
      proj_details.innerText = projects[name];
      document.getElementById('project_pop').style.visibility = 'visible'
    } else {
      document.getElementById('project_pop').style.visibility = 'hidden'
    }
}
