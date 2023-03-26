const get_mpv_string = (videos_links_list)=>{
    let base_string = `mpv `;
    let links_string=``;
    for(let i of videos_links_list){
        links_string += `"${i}" `;
    }
    return base_string+links_string;
};
const kaboom = ()=>{
    const files_element_list = document.querySelectorAll("div.list-group-item > a:nth-child(3)");
    const files_link_list = [];
    files_element_list.forEach((x)=>files_link_list.push(x.href));
    const video_files_link_list = files_link_list.filter((x)=>x.endsWith("mp4") || x.endsWith("mkv") || x.endsWith("m4v") || x.endsWith("mpv") || x.endsWith("vlc"));
    const mpv_string = get_mpv_string(video_files_link_list);
    navigator.clipboard.writeText(mpv_string);
    console.log(mpv_string);
    alert("Links Copied!");
};
window.addEventListener("load", async (event) => {
    let parentContainer = document.querySelector("form.d-flex");
    while (parentContainer==null) {
        console.log("Waiting For Parent Element To Load!");
        await new Promise(r => setTimeout(r, 2000));
        parentContainer = document.querySelector("form.d-flex");
    }
    let elem = document.createElement("button");
    elem.classList.add("btn")
    elem.classList.add("btn-outline-warning")
    elem.style=`margin-left:5px;width:270px`
    elem.innerHTML="Copy Video Links";
    elem.addEventListener('click', kaboom);
    parentContainer.appendChild(elem);
});