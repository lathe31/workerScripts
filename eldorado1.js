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
    const video_files_link_list = files_link_list.filter((x)=>x.endsWith("mp4"));
    const mpv_string = get_mpv_string(video_files_link_list);
    navigator.clipboard.writeText(mpv_string);
    console.log(mpv_string);
    alert("Links Copied!");
};
window.addEventListener("load", (event) => {
    let parentContainer = document.querySelector("form.d-flex");
    let elem = document.createElement("button");
    elem.innerHTML="Get Links";
    elem.addEventListener('click', kaboom);
    parentContainer.appendChild(elem);
});