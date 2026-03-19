// ==UserScript==
// @name     FLP Quick Navigator for SAP S/4HANA Cloud Public Edition
// @version  0.2
// @grant    none
// @include /https://.*-adm.s4hana.cloud.sap/adm#.*/
// @include /https://.*-adm.s4hana.sapcloud.cn/adm#.*/
// ==/UserScript==

var navButton1, navButton2, navButton3, navButton4, navButton5, navButton6;
var loadedSettings;
var tenantURL;

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
    
    navButtonsDiv = document.createElement("div");
    navButtonsDiv.setAttribute("id","navButtonsDiv");

    navButton1 = document.createElement("button");
    navButton1.setAttribute("id","FLPNavButton1");
    navButton1.setAttribute("style","background-color:rgb(255, 255, 255); border-color:rgb(188, 195, 202); border-radius:8px; color:rgb(0, 100, 217);")
    if(loadedSettings[0].split("||")[0]=="true"){
        navButton1.setAttribute("style","position:absolute; top:150px; right:30px; z-index:99;");
    }else{
        navButton1.setAttribute("style","position:absolute; top:150px; right:30px; display:none; z-index:99;");
    }
    navButton1.innerHTML = loadedSettings[0].split("||")[1];
    navButtonsDiv.appendChild(navButton1);

    navButton2 = document.createElement("button");
    navButton2.setAttribute("id","FLPNavButton2");
    if(loadedSettings[1].split("||")[0]=="true"){
        navButton2.setAttribute("style","position:absolute; top:180px; right:30px; z-index:99;");
    }else{
        navButton2.setAttribute("style","position:absolute; top:180px; right:30px; display:none; z-index:99;");
    }
    navButton2.innerHTML = loadedSettings[1].split("||")[1];
    navButtonsDiv.appendChild(navButton2);

    navButton3 = document.createElement("button");
    navButton3.setAttribute("id","FLPNavButton3");
    if(loadedSettings[2].split("||")[0]=="true"){
        navButton3.setAttribute("style","position:absolute; top:210px; right:30px; z-index:99;");
    }else{
        navButton3.setAttribute("style","position:absolute; top:210px; right:30px; display:none; z-index:99;");
    }
    navButton3.innerHTML = loadedSettings[2].split("||")[1];
    navButtonsDiv.appendChild(navButton3);

    navButton4 = document.createElement("button");
    navButton4.setAttribute("id","FLPNavButton4");
    if(loadedSettings[3].split("||")[0]=="true"){
        navButton4.setAttribute("style","position:absolute; top:240px; right:30px; z-index:99;");
    }else{
        navButton4.setAttribute("style","position:absolute; top:240px; right:30px; display:none; z-index:99;");
    }
    navButton4.innerHTML = loadedSettings[3].split("||")[1];
    navButtonsDiv.appendChild(navButton4);

    navButton5 = document.createElement("button");
    navButton5.setAttribute("id","FLPNavButton5");
    if(loadedSettings[4].split("||")[0]=="true"){
        navButton5.setAttribute("style","position:absolute; top:270px; right:30px; z-index:99;");
    }else{
        navButton5.setAttribute("style","position:absolute; top:270px; right:30px; display:none; z-index:99;");
    }
    navButton5.innerHTML = loadedSettings[4].split("||")[1];
    navButtonsDiv.appendChild(navButton5);

    navButton6 = document.createElement("button");
    navButton6.setAttribute("id","FLPNavButton6");
    if(loadedSettings[5].split("||")[0]=="true"){
        navButton6.setAttribute("style","position:absolute; top:300px; right:30px; z-index:99;");
    }else{
        navButton6.setAttribute("style","position:absolute; top:300px; right:30px; display:none; z-index:99;");
    }
    navButton6.innerHTML = loadedSettings[5].split("||")[1];
    navButtonsDiv.appendChild(navButton6);

    document.body.appendChild(navButtonsDiv);
}

document.addEventListener("mousedown",(e)=>{
    //FLP nav buttons (include the # in case it was not added in the settings)
  if(e.target.id == "FLPNavButton1"){
    if(loadedSettings[0].split("||")[2][0] == "#")
        ise.tab.add(tenantURL+"/ui?saml2=disabled"+loadedSettings[0].split("||")[2], { show: true } );
    else
        ise.tab.add(tenantURL+"/ui?saml2=disabled#"+loadedSettings[0].split("||")[2], { show: true } );
  }else if(e.target.id == "FLPNavButton2"){
    if(loadedSettings[1].split("||")[2][0] == "#")
        ise.tab.add(tenantURL+"/ui?saml2=disabled"+loadedSettings[1].split("||")[2], { show: true } );
    else
        ise.tab.add(tenantURL+"/ui?saml2=disabled#"+loadedSettings[1].split("||")[2], { show: true } );
  }else if(e.target.id == "FLPNavButton3"){
    if(loadedSettings[2].split("||")[2][0]== "#")
        ise.tab.add(tenantURL+"/ui?saml2=disabled"+loadedSettings[2].split("||")[2], { show: true } );
    else
        ise.tab.add(tenantURL+"/ui?saml2=disabled#"+loadedSettings[2].split("||")[2], { show: true } );
  }else if(e.target.id == "FLPNavButton4"){
    if(loadedSettings[3].split("||")[2][0] == "#")
        ise.tab.add(tenantURL+"/ui?saml2=disabled"+loadedSettings[3].split("||")[2], { show: true } );
    else
        ise.tab.add(tenantURL+"/ui?saml2=disabled#"+loadedSettings[3].split("||")[2], { show: true } );
  }else if(e.target.id == "FLPNavButton5"){
    if(loadedSettings[4].split("||")[2][0] == "#")
        ise.tab.add(tenantURL+"/ui?saml2=disabled"+loadedSettings[4].split("||")[2], { show: true } );
    else
        ise.tab.add(tenantURL+"/ui?saml2=disabled#"+loadedSettings[4].split("||")[2], { show: true } );
  }else if(e.target.id == "FLPNavButton6"){
    if(loadedSettings[5].split("||")[2][0] == "#")
        ise.tab.add(tenantURL+"/ui?saml2=disabled"+loadedSettings[5].split("||")[2], { show: true } );
    else
        ise.tab.add(tenantURL+"/ui?saml2=disabled#"+loadedSettings[5].split("||")[2], { show: true } );
  }else if(e.target.id == "NavigatorSettings"){

    if(document.getElementById("NavigatorSettingsDiv") != null){
        try{
            document.getElementById("NavigatorSettings").removeChild(document.getElementById("NavigatorSettingsDiv"));
        }catch(err){}
    }else{
        //pre-set settings
        if(loadedSettings[0].split("||")[0]=="true"){
            var nav1Settings = "<tr><td>Button 1</td><td><input id=\"navBtnStt1Vsb\" type=\"checkbox\" checked></td><td><input id=\"navBtnStt1Name\" type=\"text\" value=\""+loadedSettings[0].split("||")[1]+"\"></td><td><input id=\"navBtnStt1Tag\" type=\"text\" value=\""+loadedSettings[0].split("||")[2]+"\"></td></tr>";
        }else{
            var nav1Settings = "<tr><td>Button 1</td><td><input id=\"navBtnStt1Vsb\" type=\"checkbox\"></td><td><input id=\"navBtnStt1Name\" type=\"text\" value=\""+loadedSettings[0].split("||")[1]+"\"></td><td><input id=\"navBtnStt1Tag\" type=\"text\" value=\""+loadedSettings[0].split("||")[2]+"\"></td></tr>";
        }

        if(loadedSettings[1].split("||")[0]=="true"){
            var nav2Settings = "<tr><td>Button 2</td><td><input id=\"navBtnStt2Vsb\" type=\"checkbox\" checked></td><td><input id=\"navBtnStt2Name\" type=\"text\" value=\""+loadedSettings[1].split("||")[1]+"\"></td><td><input id=\"navBtnStt2Tag\" type=\"text\" value=\""+loadedSettings[1].split("||")[2]+"\"></td></tr>";
        }else{
            var nav2Settings = "<tr><td>Button 2</td><td><input id=\"navBtnStt2Vsb\" type=\"checkbox\"></td><td><input id=\"navBtnStt2Name\ type=\"text\" value=\""+loadedSettings[1].split("||")[1]+"\"></td><td><inputid=\"navBtnStt2Tag\" type=\"text\" value=\""+loadedSettings[1].split("||")[2]+"\"></td></tr>";
        }

        if(loadedSettings[2].split("||")[0]=="true"){
            var nav3Settings = "<tr><td>Button 3</td><td><input id=\"navBtnStt3Vsb\" type=\"checkbox\" checked></td><td><input id=\"navBtnStt3Name\" type=\"text\" value=\""+loadedSettings[2].split("||")[1]+"\"></td><td><input id=\"navBtnStt3Tag\" type=\"text\" value=\""+loadedSettings[2].split("||")[2]+"\"></td></tr>";
        }else{
            var nav3Settings = "<tr><td>Button 3</td><td><input id=\"navBtnStt3Vsb\" type=\"checkbox\"></td><td><input id=\"navBtnStt3Name\" type=\"text\" value=\""+loadedSettings[2].split("||")[1]+"\"></td><td><input id=\"navBtnStt3Tag\" type=\"text\" value=\""+loadedSettings[2].split("||")[2]+"\"></td></tr>";
        }

        if(loadedSettings[3].split("||")[0]=="true"){
            var nav4Settings = "<tr><td>Button 4</td><td><input id=\"navBtnStt4Vsb\" type=\"checkbox\" checked></td><td><input id=\"navBtnStt4Name\" type=\"text\" value=\""+loadedSettings[3].split("||")[1]+"\"></td><td><input id=\"navBtnStt4Tag\" type=\"text\" value=\""+loadedSettings[3].split("||")[2]+"\"></td></tr>";
        }else{
            var nav4Settings = "<tr><td>Button 4</td><td><input id=\"navBtnStt4Vsb\" type=\"checkbox\"></td><td><input id=\"navBtnStt4Name\" type=\"text\" value=\""+loadedSettings[3].split("||")[1]+"\"></td><td><input id=\"navBtnStt4Tag\" type=\"text\" value=\""+loadedSettings[3].split("||")[2]+"\"></td></tr>";
        }

        if(loadedSettings[4].split("||")[0]=="true"){
            var nav5Settings = "<tr><td>Button 5</td><td><input id=\"navBtnStt5Vsb\" type=\"checkbox\" checked></td><td><input id=\"navBtnStt5Name\" type=\"text\" value=\""+loadedSettings[4].split("||")[1]+"\"></td><td><input id=\"navBtnStt5Tag\" type=\"text\" value=\""+loadedSettings[4].split("||")[2]+"\"></td></tr>";
        }else{
            var nav5Settings = "<tr><td>Button 5</td><td><input id=\"navBtnStt5Vsb\" type=\"checkbox\"></td><td><input id=\"navBtnStt5Name\" type=\"text\" value=\""+loadedSettings[4].split("||")[1]+"\"></td><td><input id=\"navBtnStt5Tag\" type=\"text\" value=\""+loadedSettings[4].split("||")[2]+"\"></td></tr>";
        }

        if(loadedSettings[5].split("||")[0]=="true"){
            var nav6Settings = "<tr><td>Button 6</td><td><input id=\"navBtnStt6Vsb\" type=\"checkbox\" checked></td><td><input id=\"navBtnStt6Name\" type=\"text\" value=\""+loadedSettings[5].split("||")[1]+"\"></td><td><input id=\"navBtnStt6Tag\" type=\"text\" value=\""+loadedSettings[5].split("||")[2]+"\"></td></tr>";
        }else{
            var nav6Settings = "<tr><td>Button 6</td><td><input id=\"navBtnStt6Vsb\" type=\"checkbox\"></td><td><input id=\"navBtnStt6Name\" type=\"text\" value=\""+loadedSettings[5].split("||")[1]+"\"></td><td><input id=\"navBtnStt6Tag\" type=\"text\" value=\""+loadedSettings[5].split("||")[2]+"\"></td></tr>";
        }
        
        var settingsDiv = document.createElement("div");
        settingsDiv.setAttribute("id","NavigatorSettingsDiv");
        settingsDiv.setAttribute("style","position:absolute; width:500px; height:300px; right:0px; top:20px; background-color:white; border-style:solid; border-color:rgb(188, 195, 202); border-radius:8px;");
        settingsDiv.innerHTML = "<h3 align=\"center\">Custom Navigation Button Setup<button id=\"NavigatorSettingHelpButton\">?</button></h3><table><tr><th>#</th><th>Visibility</th><th>Label</th><th>Navigation Tag</th></tr>"+nav1Settings+nav2Settings+nav3Settings+nav4Settings+nav5Settings+nav6Settings+"</table><button id=\"NavigatorSettingSave\">Save</button>"
        document.getElementById("NavigatorSettings").appendChild(settingsDiv);
    }
  }else if(e.target.id == "NavigatorSettingHelpButton"){
    //help popup
    if(document.getElementById("helpPopup") == null){
    var helpPopupDiv = document.createElement("div");
        helpPopupDiv.setAttribute("id","helpPopup");
        helpPopupDiv.setAttribute("style","position:absolute; width:400px; height:330px; right:0px; background-color:white; align:left; padding:7px;");
        helpPopupDiv.innerHTML = "<div align=\"center\"><h3>How to Use</h3></div><div align=\"left\">In S/4Hana Cloud, apps can be accessed by appending a \"navigation tag\" at the end of the tenant URL (for example, accessing \"<i>tenant url</i>/ui<b>#DataMigration-manage</b>\" redirects the S/4Hana Cloud UI directly to the Migration Cockpit app).<br>This tool allows you to configure buttons to quickly navigate to an app, skipping the need to open the Home Page first. When operating the system backend through this page, you can use the 👁 button to quickly toggle the visibility of all buttons.<br><br>How to use:<br>1. Get the navigation tag for the desired app (you can check this by manually opening the app)<br>2. In this configuration menu, set a label for a navigation button in the Name field<br>3. Paste the navigation tag in the Navigation Tag field (the '#' character itself is not needed)<br>4. Use the checkboxes under the \"Visibility\" column to control which buttons will actually appear<br>5. Click the Save button and reload the page (F5)</div>";
        try{
            document.getElementById("NavigatorSettingHelpButton").appendChild(helpPopupDiv);
        }catch(err){}
    }else{
        try{
            document.getElementById("NavigatorSettingHelpButton").removeChild(document.getElementById("helpPopup"));
        }catch(err){}
    }
  }else if(e.target.id == "HideAllButton"){
    try{
        if(document.getElementById("navButtonsDiv").style.display != "none" ){
            document.getElementById("navButtonsDiv").style.display = "none";
        }else{
            document.getElementById("navButtonsDiv").style.display = "block";
        }
    }catch(err){}
  }else if(e.target.id.indexOf("navBtnStt")>=0 || e.target.id == "NavigatorSettingsDiv"){
    //IDs from the settings fields, should not close the settings popup
  }else if(e.target.id == "NavigatorSettingSave"){
    //save button
    var saveString = document.getElementById("navBtnStt1Vsb").checked+"||"+document.getElementById("navBtnStt1Name").value+"||"+document.getElementById("navBtnStt1Tag").value;
    saveString = saveString + "█" + document.getElementById("navBtnStt2Vsb").checked+"||"+document.getElementById("navBtnStt2Name").value+"||"+document.getElementById("navBtnStt2Tag").value;
    saveString = saveString + "█" + document.getElementById("navBtnStt3Vsb").checked+"||"+document.getElementById("navBtnStt3Name").value+"||"+document.getElementById("navBtnStt3Tag").value;
    saveString = saveString + "█" + document.getElementById("navBtnStt4Vsb").checked+"||"+document.getElementById("navBtnStt4Name").value+"||"+document.getElementById("navBtnStt4Tag").value;
    saveString = saveString + "█" + document.getElementById("navBtnStt5Vsb").checked+"||"+document.getElementById("navBtnStt5Name").value+"||"+document.getElementById("navBtnStt5Tag").value;
    saveString = saveString + "█" + document.getElementById("navBtnStt6Vsb").checked+"||"+document.getElementById("navBtnStt6Name").value+"||"+document.getElementById("navBtnStt6Tag").value;
    localStorage.setItem("flp_navigator_settings",saveString);
  }else{
    try{
        document.getElementById("NavigatorSettings").removeChild(document.getElementById("NavigatorSettingsDiv"));
    }catch(err){}
  }
});

console.log("S4 FLP Navigator Injected");
tenantURL = window.location.href.replace("/adm#","");

var settingsButtonDiv = document.createElement("div");
var settingsButton = document.createElement("button");
settingsButton.setAttribute("id","NavigatorSettings");
settingsButton.setAttribute("style","position:absolute; top:10px; right:190px;");
settingsButton.innerHTML = "FLP Navigator Settings"
settingsButtonDiv.appendChild(settingsButton);

var hideAllButton = document.createElement("button");
hideAllButton.setAttribute("id","HideAllButton");
hideAllButton.setAttribute("style","position:absolute; top:10px; right:345px;");
hideAllButton.setAttribute("title","Hide all nav buttons");
hideAllButton.innerHTML = "👁";
settingsButtonDiv.appendChild(hideAllButton);

document.body.appendChild(settingsButtonDiv);

loadSettingsFromStorage();
loadNavButtons();