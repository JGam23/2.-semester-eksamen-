let sections = [
    { id: "app-dev", toggleId: "ad", dropped: false, heightCollapsed: "200px", heightExpanded: "350px" },
    { id: "business-understanding", toggleId: "bu", dropped: false, heightCollapsed: "200px", heightExpanded: "350px" },
    { id: "user-experience", toggleId: "ue", dropped: false, heightCollapsed: "200px", heightExpanded: "350px" }
];

function toggleSection(index) {
    let section = sections[index];
    if (section.dropped) {
        section.dropped = false;
        document.getElementById(section.id).style.height = section.heightCollapsed;
        document.getElementById(section.toggleId).style.display = "none";
    } else {
        section.dropped = true;
        document.getElementById(section.id).style.height = section.heightExpanded;
        document.getElementById(section.toggleId).style.display = "block";
    }
}