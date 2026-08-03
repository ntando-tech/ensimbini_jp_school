const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
  
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        
        document.querySelectorAll(".card-link").forEach(header => {
    header.style.backgroundColor = "#08171e";});
        document.querySelectorAll(".card-link").forEach(header => {
    header.style.color = "#ffffff";});
            document.querySelectorAll(".card-body").forEach(header => {
    header.style.backgroundColor = "#08171e";});
        document.querySelectorAll(".card-body").forEach(header => {
    header.style.color = "#ffffff";});
        document.querySelectorAll("card-link").forEach(card => {
    card.style.border = "1px solid rgba(0, 0, 0, .1)";});

     document.querySelectorAll(".card-header").forEach(card => {
        card.style.boxShadow = "0 4px 15px 0 rgba(255, 255, 255, 0.15)";});
    document.querySelectorAll(".card-body").forEach(card => {
        card.style.boxShadow = "0 4px 15px 0 rgba(255, 255, 255, 0.15)";});
//     const cardBodies = document.getElementsByClassName("card-body");

// for (let cardBody of cardBodies) {
//     cardBody.style.boxShadow = "0 4px 15px 0 rgba(255, 255, 255, 0.15)";
// }

}
    else {        document.documentElement.setAttribute('data-theme', 'light');
          localStorage.setItem('theme', 'light');
           document.querySelectorAll(".card-link").forEach(header => {
    header.style.backgroundColor = "#ffffff";});
        document.querySelectorAll(".card-link").forEach(header => {
    header.style.color = "black";});
            document.querySelectorAll(".card-body").forEach(header => {
    header.style.backgroundColor = "#ffffff";});
        document.querySelectorAll(".card-body").forEach(header => {
    header.style.color = "black";});
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);