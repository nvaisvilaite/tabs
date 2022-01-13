function tabName(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(tabName).style.display = "flex";
    document.getElementById(tabName).style.alignItems = "center";
    document.getElementById(tabName).style.flexDirection = "column";
    document.getElementById(tabName).style.width = "421px";
    evt.currentTarget.className += " active";
  }