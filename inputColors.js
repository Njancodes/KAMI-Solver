document.addEventListener('DOMContentLoaded',(ev)=>{
    ev.preventDefault()
    let noColors = document.getElementById("noColors")
    let submitBtn = document.getElementById("submit-btn")
    let inputDiv = document.getElementById("colorInput");
    let colorDiv = document.getElementById("colorDiv")
    let colors = 0;

    submitBtn.addEventListener('click', ()=>{
        colors = noColors.value;
        noColors.value = 0;
        if(!colorDiv.hasChildNodes()){
            for(let i = 1; i <= colors; i++){
                let color = document.createElement('input');
                let label = document.createElement('label');
                let br = document.createElement('br');
                color.type = 'color'
                label.textContent = 'Colors #'+i+"  "
                color.id = 'color#'+i
                color.className = 'colors'
                label.appendChild(color)
                colorDiv.appendChild(label)
                colorDiv.appendChild(br)
            }  
        }else{
            while (colorDiv.firstChild) {
                colorDiv.removeChild(colorDiv.firstChild);
              }
        }
          
    })  
})


