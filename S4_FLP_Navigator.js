// ==UserScript==
// @name     FLP Quick Navigator for SAP S/4HANA Cloud Public Edition
// @version  0.1
// @grant    none
// @include /https://.*-adm.s4hana.cloud.sap/adm#.*/
// ==/UserScript==

var navButton1, navButton2, navButton3, navButton4, navButton5, navButton6;
var loadedSettings;

function loadSettingsFromStorage(){
    //try getting settings from local storage
    try{
        loadedSettings = localStorage.getItem("flp_navigator_settings");
        if(loadedSettings == null){
            localStorage.setItem("flp_navigator_settings","true||blank|| █true||blank|| █true||blank|| █true||blank|| █true||blank|| █true||blank|| █");
            loadedSettings = "true||blank|| █true||blank|| █true||blank|| █true||blank|| █true||blank|| █true||blank|| █";
        }
    }catch(err){
        //set blank settings if the local storage item does not exist
        localStorage.setItem("flp_navigator_settings","true||blank|| █true||blank|| █true||blank|| █true||blank|| █true||blank|| █true||blank|| █");
        loadedSettings = "true||blank|| █true||blank|| █true||blank|| █true||blank|| █true||blank|| █true||blank|| █";
    }

    loadedSettings = loadedSettings.split("█");
}

function loadNavButtons(){    
    
    navButton1 = document.createElement("button");
    navButton1.setAttribute("id","FLPNavButton1");
    if(loadedSettings[0].split("||")[0]=="true"){
        navButton1.setAttribute("style","position:absolute; top:150px; right:30px; z-index:99;");
    }else{
        navButton1.setAttribute("style","position:absolute; top:150px; right:30px; display:none; z-index:99;");
    }
    navButton1.innerHTML = loadedSettings[0].split("||")[1];
    document.body.appendChild(navButton1);
}

document.addEventListener("mousedown",(e)=>{

  if(e.target.id == "FLPNavButton1"){
    ise.tab.add(document.getElementById("M0:46:::3:31-text").innerHTML+"/ui?saml2=disabled"+loadedSettings[0].split("||")[2], { show: true } );
  }else if(e.target.id == "NavigatorSettings"){

    //pre-set settings
    if(loadedSettings[0].split("||")[0]=="true"){
        var nav1Settings = "<tr><td>Button 1</td><td><input type=\"checkbox\" checked></td><td><input type=\"text\" value=\""+loadedSettings[0].split("||")[1]+"\"></td><td><input type=\"text\" value=\""+loadedSettings[0].split("||")[2]+"\"></td></tr>";
    }else{
        var nav1Settings = "<tr><td>Button 1</td><td><input type=\"checkbox\"></td><td><input type=\"text\" value=\""+loadedSettings[0].split("||")[1]+"\"></td><td><input type=\"text\" value=\""+loadedSettings[0].split("||")[2]+"\"></td></tr>";
    }

    if(loadedSettings[1].split("||")[0]=="true"){
        var nav2Settings = "<tr><td>Button 2</td><td><input type=\"checkbox\" checked></td><td><input type=\"text\" value=\""+loadedSettings[1].split("||")[1]+"\"></td><td><input type=\"text\" value=\""+loadedSettings[1].split("||")[2]+"\"></td></tr>";
    }else{
        var nav2Settings = "<tr><td>Button 2</td><td><input type=\"checkbox\"></td><td><input type=\"text\" value=\""+loadedSettings[1].split("||")[1]+"\"></td><td><input type=\"text\" value=\""+loadedSettings[1].split("||")[2]+"\"></td></tr>";
    }

    if(loadedSettings[2].split("||")[0]=="true"){
        var nav3Settings = "<tr><td>Button 3</td><td><input type=\"checkbox\" checked></td><td><input type=\"text\" value=\""+loadedSettings[2].split("||")[1]+"\"></td><td><input type=\"text\" value=\""+loadedSettings[2].split("||")[2]+"\"></td></tr>";
    }else{
        var nav3Settings = "<tr><td>Button 3</td><td><input type=\"checkbox\"></td><td><input type=\"text\" value=\""+loadedSettings[2].split("||")[1]+"\"></td><td><input type=\"text\" value=\""+loadedSettings[2].split("||")[2]+"\"></td></tr>";
    }

    if(loadedSettings[3].split("||")[0]=="true"){
        var nav4Settings = "<tr><td>Button 4</td><td><input type=\"checkbox\" checked></td><td><input type=\"text\" value=\""+loadedSettings[3].split("||")[1]+"\"></td><td><input type=\"text\" value=\""+loadedSettings[3].split("||")[2]+"\"></td></tr>";
    }else{
        var nav4Settings = "<tr><td>Button 4</td><td><input type=\"checkbox\"></td><td><input type=\"text\" value=\""+loadedSettings[3].split("||")[1]+"\"></td><td><input type=\"text\" value=\""+loadedSettings[3].split("||")[2]+"\"></td></tr>";
    }

    if(loadedSettings[4].split("||")[0]=="true"){
        var nav5Settings = "<tr><td>Button 5</td><td><input type=\"checkbox\" checked></td><td><input type=\"text\" value=\""+loadedSettings[4].split("||")[1]+"\"></td><td><input type=\"text\" value=\""+loadedSettings[4].split("||")[2]+"\"></td></tr>";
    }else{
        var nav5Settings = "<tr><td>Button 5</td><td><input type=\"checkbox\"></td><td><input type=\"text\" value=\""+loadedSettings[4].split("||")[1]+"\"></td><td><input type=\"text\" value=\""+loadedSettings[4].split("||")[2]+"\"></td></tr>";
    }

    if(loadedSettings[4].split("||")[0]=="true"){
        var nav5Settings = "<tr><td>Button 6</td><td><input type=\"checkbox\" checked></td><td><input type=\"text\" value=\""+loadedSettings[4].split("||")[1]+"\"></td><td><input type=\"text\" value=\""+loadedSettings[4].split("||")[2]+"\"></td></tr>";
    }else{
        var nav5Settings = "<tr><td>Button 6</td><td><input type=\"checkbox\"></td><td><input type=\"text\" value=\""+loadedSettings[4].split("||")[1]+"\"></td><td><input type=\"text\" value=\""+loadedSettings[4].split("||")[2]+"\"></td></tr>";
    }

    if(loadedSettings[5].split("||")[0]=="true"){
        var nav6Settings = "<tr><td>Button 2</td><td><input type=\"checkbox\" checked></td><td><input type=\"text\" value=\""+loadedSettings[5].split("||")[1]+"\"></td><td><input type=\"text\" value=\""+loadedSettings[5].split("||")[2]+"\"></td></tr>";
    }else{
        var nav6Settings = "<tr><td>Button 2</td><td><input type=\"checkbox\"></td><td><input type=\"text\" value=\""+loadedSettings[5].split("||")[1]+"\"></td><td><input type=\"text\" value=\""+loadedSettings[5].split("||")[2]+"\"></td></tr>";
    }
    

    var settingsDiv = document.createElement("div");
    settingsDiv.setAttribute("id","NavigatorSettingsDiv");
    settingsDiv.setAttribute("style","position:absolute; width:500px; height:300px; right:200px; background-color:white;");
    settingsDiv.innerHTML = "<h3 align=\"center\">Custom Navigation Button Setup<button id=\"NavigatorSettingHelpButton\">?</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button id=\"NavigatorSettingSave\">Save</button></h3><table><tr><th>#</th><th>Visibility</th><th>Label</th><th>Navigation Tag</th></tr>"+nav1Settings+nav2Settings+nav3Settings+nav4Settings+nav5Settings+nav6Settings+"</table>"
    document.getElementById("NavigatorSettings").appendChild(settingsDiv);
  }else if(e.target.id == "NavigatorSettingHelpButton"){
    //help popup
  }else{
    try{
        document.getElementById("NavigatorSettings").removeChild(document.getElementById("NavigatorSettingsDiv"));
    }catch(err){}
  }
});

var settingsButton = document.createElement("button");
settingsButton.setAttribute("id","NavigatorSettings");
settingsButton.setAttribute("style","position:absolute; top:60px; right:70px;");
settingsButton.innerHTML = "FLP Navigator Settings"
document.body.appendChild(settingsButton);

loadSettingsFromStorage();
loadNavButtons();
