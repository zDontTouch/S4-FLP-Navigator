// ==UserScript==
// @name     FLP Quick Navigator for SAP S/4HANA Cloud Public Edition
// @version  1.0
// @grant    none
// @include /https://.*-adm.s4hana.cloud.sap/adm.*/
// @include /https://.*-adm.s4hana.sapcloud.cn/adm.*/
// @include /https://.*-adm.s4hana.ondemand.com/adm.*/
// ==/UserScript==

var navButton1, navButton2, navButton3, navButton4, navButton5, navButton6;
var loadedSettings;
var tenantURL;
var fioriButtonStyle = "position:absolute; box-shadow: none; color:var(--sapButton_TextColor); background-color:var(--sapButton_Background); border-color:var(--sapButton_BorderColor); border-width:var(--sapButton_BorderWidth); font-family: var(--sapButton_FontFamily); border-radius:var(--sapButton_BorderCornerRadius); border-width:var(--sapButton_BorderWidth); font-size:var(--sapFontSize);"

async function loadSettingsFromStorage(){
    var storageData;
    var loadedData;
    //GM_setValue('FLP_Navigator_Settings',"true||blank|| █true||blank|| █true||blank|| █true||blank|| █true||blank|| █true||blank|| █")
    loadedData = await GM_getValue('FLP_Navigator_Settings', null).then((value)=>{
        storageData = value;
        if(storageData == null){
            GM_setValue("FLP_Navigator_Settings","true||blank|| █true||blank|| █true||blank|| █true||blank|| █true||blank|| █true||blank|| █")
            storageData = "true||blank|| █true||blank|| █true||blank|| █true||blank|| █true||blank|| █true||blank|| █"
        }
    });
    
    loadedSettings = storageData.split("█");
    loadNavButtons();
    //try getting settings from local storage
    /*try{
        loadedSettings = localStorage.getItem("flp_navigator_settings");
        if(loadedSettings == null){
            console.log("No FLP Settings Found");
            localStorage.setItem("flp_navigator_settings","true||blank|| █true||blank|| █true||blank|| █true||blank|| █true||blank|| █true||blank|| █");
            loadedSettings = "true||blank|| █true||blank|| █true||blank|| █true||blank|| █true||blank|| █true||blank|| █";
        }
    }catch(err){
        //set blank settings if the local storage item does not exist
        console.log("No FLP Settings Found - no local storage item");
        localStorage.setItem("flp_navigator_settings","true||blank|| █true||blank|| █true||blank|| █true||blank|| █true||blank|| █true||blank|| █");
        loadedSettings = "true||blank|| █true||blank|| █true||blank|| █true||blank|| █true||blank|| █true||blank|| █";
    }

    loadedSettings = loadedSettings.split("█");*/
}

function loadNavButtons(){    
    
    navButtonsDiv = document.createElement("div");
    navButtonsDiv.setAttribute("id","navButtonsDiv");
    navButtonsDiv.innerHTML = "<div style=\"position:absolute; top:130px; left:33px; font-size:0.8rem\">FLP Navigator:</div>"

    navButton1 = document.createElement("button");
    navButton1.setAttribute("id","FLPNavButton1");
    if(loadedSettings[0].split("||")[0]=="true"){
        navButton1.setAttribute("style",fioriButtonStyle+"position:absolute; top:150px; left:30px; z-index:99; padding:3px 5px; cursor:pointer;");
    }else{
        navButton1.setAttribute("style",fioriButtonStyle+"position:absolute; top:150px; left:30px; display:none; z-index:99; padding:3px 5px; cursor:pointer;");
    }
    navButton1.innerHTML = loadedSettings[0].split("||")[1];
    navButtonsDiv.appendChild(navButton1);

    navButton2 = document.createElement("button");
    navButton2.setAttribute("id","FLPNavButton2");
    if(loadedSettings[1].split("||")[0]=="true"){
        navButton2.setAttribute("style",fioriButtonStyle+"position:absolute; top:180px; left:30px; z-index:99; padding:3px 5px; cursor:pointer;");
    }else{
        navButton2.setAttribute("style",fioriButtonStyle+"position:absolute; top:180px; left:30px; display:none; z-index:99; padding:3px 5px; cursor:pointer;");
    }
    navButton2.innerHTML = loadedSettings[1].split("||")[1];
    navButtonsDiv.appendChild(navButton2);

    navButton3 = document.createElement("button");
    navButton3.setAttribute("id","FLPNavButton3");
    if(loadedSettings[2].split("||")[0]=="true"){
        navButton3.setAttribute("style",fioriButtonStyle+"position:absolute; top:210px; left:30px; z-index:99; padding:3px 5px; cursor:pointer;");
    }else{
        navButton3.setAttribute("style",fioriButtonStyle+"position:absolute; top:210px; left:30px; display:none; z-index:99; padding:3px 5px; cursor:pointer;");
    }
    navButton3.innerHTML = loadedSettings[2].split("||")[1];
    navButtonsDiv.appendChild(navButton3);

    navButton4 = document.createElement("button");
    navButton4.setAttribute("id","FLPNavButton4");
    if(loadedSettings[3].split("||")[0]=="true"){
        navButton4.setAttribute("style",fioriButtonStyle+"position:absolute; top:240px; left:30px; z-index:99; padding:3px 5px; cursor:pointer;");
    }else{
        navButton4.setAttribute("style",fioriButtonStyle+"position:absolute; top:240px; left:30px; display:none; z-index:99; padding:3px 5px; cursor:pointer;");
    }
    navButton4.innerHTML = loadedSettings[3].split("||")[1];
    navButtonsDiv.appendChild(navButton4);

    navButton5 = document.createElement("button");
    navButton5.setAttribute("id","FLPNavButton5");
    if(loadedSettings[4].split("||")[0]=="true"){
        navButton5.setAttribute("style",fioriButtonStyle+"position:absolute; top:270px; left:30px; z-index:99; padding:3px 5px; cursor:pointer;");
    }else{
        navButton5.setAttribute("style",fioriButtonStyle+"position:absolute; top:270px; left:30px; display:none; z-index:99; padding:3px 5px; cursor:pointer;");
    }
    navButton5.innerHTML = loadedSettings[4].split("||")[1];
    navButtonsDiv.appendChild(navButton5);

    navButton6 = document.createElement("button");
    navButton6.setAttribute("id","FLPNavButton6");
    if(loadedSettings[5].split("||")[0]=="true"){
        navButton6.setAttribute("style",fioriButtonStyle+"position:absolute; top:300px; left:30px; z-index:99; padding:3px 5px; cursor:pointer;");
    }else{
        navButton6.setAttribute("style",fioriButtonStyle+"position:absolute; top:300px; left:30px; display:none; z-index:99; padding:3px 5px; cursor:pointer;");
    }
    navButton6.innerHTML = loadedSettings[5].split("||")[1];
    navButtonsDiv.appendChild(navButton6);

    document.body.appendChild(navButtonsDiv);
}

document.addEventListener("mousedown",(e)=>{
  //remove "/adm" from the URL to avoid re-opening the SAP GUI page
  var tenantUiUrl = tenantURL.split("/adm")[0];
  
    //FLP nav buttons (include the # in case it was not added in the settings
  if(e.target.id.toString().startsWith("FLPNavButton") && e.ctrlKey == true){
    try{
        if(document.getElementById("navButtonsDiv").style.display != "none" ){
            document.getElementById("navButtonsDiv").style.display = "none";
        }else{
            document.getElementById("navButtonsDiv").style.display = "block";
        }
    }catch(err){}
  }else if(e.target.id == "FLPNavButton1"){
        if(loadedSettings[0].split("||")[2][0] == "#")
            ise.tab.add(tenantUiUrl+"/ui?saml2=disabled"+loadedSettings[0].split("||")[2].trim(), { show: true } );
        else
            ise.tab.add(tenantUiUrl+"/ui?saml2=disabled#"+loadedSettings[0].split("||")[2].trim(), { show: true } );
  }else if(e.target.id == "FLPNavButton2"){
    if(loadedSettings[1].split("||")[2][0] == "#")
        ise.tab.add(tenantUiUrl+"/ui?saml2=disabled"+loadedSettings[1].split("||")[2].trim(), { show: true } );
    else
        ise.tab.add(tenantUiUrl+"/ui?saml2=disabled#"+loadedSettings[1].split("||")[2].trim(), { show: true } );
  }else if(e.target.id == "FLPNavButton3"){
    if(loadedSettings[2].split("||")[2][0]== "#")
        ise.tab.add(tenantUiUrl+"/ui?saml2=disabled"+loadedSettings[2].split("||")[2].trim(), { show: true } );
    else
        ise.tab.add(tenantUiUrl+"/ui?saml2=disabled#"+loadedSettings[2].split("||")[2].trim(), { show: true } );
  }else if(e.target.id == "FLPNavButton4"){
    if(loadedSettings[3].split("||")[2][0] == "#")
        ise.tab.add(tenantUiUrl+"/ui?saml2=disabled"+loadedSettings[3].split("||")[2].trim(), { show: true } );
    else
        ise.tab.add(tenantUiUrl+"/ui?saml2=disabled#"+loadedSettings[3].split("||")[2].trim(), { show: true } );
  }else if(e.target.id == "FLPNavButton5"){
    if(loadedSettings[4].split("||")[2][0] == "#")
        ise.tab.add(tenantUiUrl+"/ui?saml2=disabled"+loadedSettings[4].split("||")[2].trim(), { show: true } );
    else
        ise.tab.add(tenantUiUrl+"/ui?saml2=disabled#"+loadedSettings[4].split("||")[2].trim(), { show: true } );
  }else if(e.target.id == "FLPNavButton6"){
    if(loadedSettings[5].split("||")[2][0] == "#")
        ise.tab.add(tenantUiUrl+"/ui?saml2=disabled"+loadedSettings[5].split("||")[2].trim(), { show: true } );
    else
        ise.tab.add(tenantUiUrl+"/ui?saml2=disabled#"+loadedSettings[5].split("||")[2].trim(), { show: true } );
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
        settingsDiv.setAttribute("style","position:absolute; width:500px; height:300px; right:0px; top:25px; padding:0px 10px; background-color:white; border-style:solid; border-color:rgb(188, 195, 202); border-radius:8px;");
        settingsDiv.innerHTML = "<h3 align=\"center\">Custom Navigation Button Setup<button id=\"NavigatorSettingHelpButton\" style=\""+fioriButtonStyle+" margin-left:10px;\">?</button></h3><table><tr><th>#</th><th>Visibility</th><th>Label</th><th>Navigation Tag</th></tr>"+nav1Settings+nav2Settings+nav3Settings+nav4Settings+nav5Settings+nav6Settings+"</table><button id=\"NavigatorSettingSave\" style=\""+fioriButtonStyle+" padding:5px 15px;\">Save</button><span style=\"position:absolute; bottom:5px; right: 5px;\">v1.0</span>"
        document.getElementById("NavigatorSettings").appendChild(settingsDiv);
    }
  }else if(e.target.id == "NavigatorSettingHelpButton"){
    //help popup
    if(document.getElementById("helpPopup") == null){
    var helpPopupDiv = document.createElement("div");
        helpPopupDiv.setAttribute("id","helpPopup");
        helpPopupDiv.setAttribute("style","position:absolute; width:420px; height:480px; right:0px; background-color:white; align:left; padding:7px; border-style:solid; border-color:rgb(188, 195, 202); border-radius:8px; z-index:99;");
        helpPopupDiv.innerHTML = "<span style=\"color:black;\"><div align=\"center\"><h3>How to Use the FLP Navigator</h3></div><div align=\"left\">In S/4Hana Cloud, apps can be accessed by appending a \"navigation tag\" at the end of the tenant URL (for example, accessing \"<i>tenant url</i>   / ui<b><span style=\"text-decoration: underline;\">#DataMigration-manage</span></b>\" redirects the S/4Hana Cloud UI directly to the Migration Cockpit app).<br>This tool allows you to configure buttons to quickly navigate to an app, skipping the need to open the Home Page first. <br>When operating the system backend through this page, you can use the 👁 button to quickly toggle the visibility of all buttons (so it does not block the visibility of any screen element).<br><br>You can also hide the buttons by holding the <span style=\"text-decoration: underline;\">Ctrl</span> key and clicking the area where the buttons are.<br><br><h3>How to setup:</h3>1. Get the navigation tag for the desired app (you can check this by manually opening the app once and copying the tag from the browser URL)<br>2. In this configuration menu, set a label/nickname for a navigation button in the Name field<br>3. Paste the navigation tag in the Navigation Tag field (the '#' character itself is not needed)<br>4. Use the checkboxes under the \"Visibility\" column to control which buttons you want to actually display<br>5. Click the Save button and reload the page (F5)</div></span>";
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
    var saveString = document.getElementById("navBtnStt1Vsb").checked+"||"+document.getElementById("navBtnStt1Name").value+"||"+document.getElementById("navBtnStt1Tag").value.toString().trim();
    saveString = saveString + "█" + document.getElementById("navBtnStt2Vsb").checked+"||"+document.getElementById("navBtnStt2Name").value+"||"+document.getElementById("navBtnStt2Tag").value.toString().trim();
    saveString = saveString + "█" + document.getElementById("navBtnStt3Vsb").checked+"||"+document.getElementById("navBtnStt3Name").value+"||"+document.getElementById("navBtnStt3Tag").value.toString().trim();
    saveString = saveString + "█" + document.getElementById("navBtnStt4Vsb").checked+"||"+document.getElementById("navBtnStt4Name").value+"||"+document.getElementById("navBtnStt4Tag").value.toString().trim();
    saveString = saveString + "█" + document.getElementById("navBtnStt5Vsb").checked+"||"+document.getElementById("navBtnStt5Name").value+"||"+document.getElementById("navBtnStt5Tag").value.toString().trim();
    saveString = saveString + "█" + document.getElementById("navBtnStt6Vsb").checked+"||"+document.getElementById("navBtnStt6Name").value+"||"+document.getElementById("navBtnStt6Tag").value.toString().trim();
    GM_setValue("FLP_Navigator_Settings",saveString);

    var saveSuccessMessage = document.createElement("p");
    saveSuccessMessage.setAttribute("style","color:green; margin-top:40px;")
    saveSuccessMessage.setAttribute("id","FLP_SuccessMessage");
    saveSuccessMessage.innerHTML = "Settings saved, please reload the page (F5)"
    document.getElementById("NavigatorSettingsDiv").appendChild(saveSuccessMessage);
    setTimeout(() => {
        document.getElementById("NavigatorSettingsDiv").removeChild(saveSuccessMessage);
    }, 2000);
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
settingsButton.setAttribute("style", "top:10px; right:190px; padding:5px;"+fioriButtonStyle);
settingsButton.innerHTML = "FLP Navigator Settings"
settingsButtonDiv.appendChild(settingsButton);

var hideAllButton = document.createElement("button");
hideAllButton.setAttribute("id","HideAllButton");
hideAllButton.setAttribute("style","position:absolute; top:13px; right:345px;"+fioriButtonStyle);
hideAllButton.setAttribute("title","Hide all nav buttons");
hideAllButton.innerHTML = "👁";
settingsButtonDiv.appendChild(hideAllButton);

document.body.appendChild(settingsButtonDiv);

loadSettingsFromStorage();
