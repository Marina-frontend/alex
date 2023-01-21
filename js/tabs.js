document.getElementById("defaultOpen").click();
function openTab(evt, CompanyName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="content-career__body" and hide them
    tabcontent = document.getElementsByClassName("content-career__body");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    // Get all elements with class="navigation-career__title" and remove the class "_tab-activee"
    tablinks = document.getElementsByClassName("navigation-career__title");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("_tab-active", "");
    }
  
    // Show the current tab, and add an "_tab-active" class to the button that opened the tab
    document.getElementById(CompanyName).style.display = "block";
    evt.currentTarget.className += "_tab-active";
  }