/*
Validate.js contains all of the validation functions including dynamic validation. These functions 
will instantly check for accuracy and propper format. These functions will be used in the following files:
censusform.html, recensusform.html



Developed by Jonathan Ahumada. 2013

*/


/**
*Function checksite() retrieves the Site Code value entered 
*by the user. The function checks to make sure that the value
*entered matches a three-letter abbreviation with the exception 
*of "VB". 
*/
function checksite() {
    var site = document.getElementById("sitenumber").value;

        //document.forms["censusform"]["sitenumber"].value;
    /*if (x == null||) {
        alert("First name must be filled out");
        return false;
        }*/
    
    if (site == "VB" || site == "vb") {
       
        document.getElementById("sitenumber").style.border = "";
        return true;
    }

    var pattern = "^[a-zA-Z]{3}$"
    if (!site.match(pattern)) {
        alert("The site number is a three-letter abbreviation. Please check your entry.");
        document.getElementById("sitenumber").style.border = "2px solid red";
    }
    else {
        document.getElementById("sitenumber").style.border = "";
    }


     
}

/**
*Function checkplot() retrieves the Plot Number value entered
*by the user. The function checks to make sure that the value entered 
*is constraint to numerics only. 
*
*/
function checkplot(){
    var plot = document.getElementById('plotnumber').value;
    var regex = /^\d+$/;
  
    
    if (!new RegExp(regex).test(plot)) {
        alert("The plot number is a unique number assigned to the 1ha plot at each TEAM Site. Please check your entry.");
        document.getElementById("plotnumber").style.border = "2px solid red";
    }
    else {
        document.getElementById("plotnumber").style.border = "";
    }
}

/**
*Function checkyearofmd() retrieves the Year of Metadata value entered
*by the user. The function checks to make sure that the value entered
*only contains numerics with no more than four digits long. Submbit 
*button is disabled or enabled depending on the status of the validation. 
*/
function checkyearofmd() {
    var yomd = document.getElementById('yearofmd').value;
    var regex = /^\d{4}$/;
    

    if (!new RegExp(regex).test(yomd)) {
        alert("Please make sure your entry is in this format, 2013 (YYYY).");
        document.getElementById("yearofmd").style.border = "2px solid red";
        document.getElementById("submitButton").disabled = true;
    }
    else {
        document.getElementById("yearofmd").style.border = "";
        document.getElementById("submitButton").disabled = false;
    }
}

/**
*Function checkmonthofmd() retrieves the Month of Metadata value entered
*by the user. The function checks to make sure that the value entered   
*only contains two digits. Submit button is disabled or enabled depending on
*the status of the validation. 
*/
function checkmonthofmd() {
    var momd = document.getElementById("monthofmd").value;

  
    var regex = /^\d+$/

    if (!new RegExp(regex).test(momd)) {

        alert("Please make sure that your entry only contains numerics.");
        document.getElementById("monthofmd").style.border = "2px solid red";
        document.getElementById("submitButton").disabled = true;
    }

    else if (momd < 1 || momd > 12) {
        alert("The Month number can only be between 1-12. Please verify your entry.");
        document.getElementById("monthofmd").style.border = "2px solid red";
        document.getElementById("submitButton").disabled = true;
    }

    else {
        document.getElementById("monthofmd").style.border = "";
        document.getElementById("submitButton").disabled = false;
    }

}

/**
*Function checkdayofmd() retrieves the Day of Metadata value entered
*by the user. The function checks to make sure that the value entered
*only contains two digits and lies between 1 - 31. Submit button is 
*disabled or enabled depending on the status of the validation. 
*/
function checkdayofmd() {
    var domd = document.getElementById("dayofmd").value;


    var regex = /^\d+$/

    if (!new RegExp(regex).test(domd)) {

        alert("Please make sure that your entry only contains numerics.");
        document.getElementById("dayofmd").style.border = "2px solid red";
        document.getElementById("submitButton").disabled = true;
    }

    else if (domd < 1 || domd > 31) {
        alert("The Day number can only be between 1-31. Please verify your entry.");
        document.getElementById("dayofmd").style.border = "2px solid red";
        document.getElementById("submitButton").disabled = true;
    }

    else {
        document.getElementById("dayofmd").style.border = "";
        document.getElementById("submitButton").disabled = false;
    }

}

/**
*Function checkfnr() retrieves the First Name of Recorder value entered
*by the user. The funcion checks to make sure that the value entered
*only contains letters, apostrophes, and end spaces.Submit button is disabled  
*enabled depending on the status of the validation. 
*/
function checkfnr() {
    
    var fnr = document.getElementById('fnameofrecorder').value;

    if (fnr == null || fnr == "") {
        return;
    }

    var regex = /^([a-zA-Z' ])+$/

    if (!new RegExp(regex).test(fnr)) {

        alert("Your spelling contains numerics or special characters. Only letters and apostrophes are allowed. Please check your entry.");
        document.getElementById("fnameofrecorder").style.border = "2px solid red";
        document.getElementById("submitButton").disabled = true;
    }
    else {
        document.getElementById("fnameofrecorder").style.border = "";
        document.getElementById("submitButton").disabled = false;
    }
        
     
}

/**
*Function checklnr() retrieves the Last Name of Recorder value entered
*by the user. The funcion checks to make sure that the value entered
*only contains letters, apostrophes, and end spaces.Submit button is disabled  
*or enabled depending on the status of the validation. 
*/
function checklnr() {

    var lnr = document.getElementById('lnameofrecorder').value;

    if( lnr == null || lnr == ""){
        return;
    }

    var regex = /^([a-zA-Z' ])+$/

    if (!new RegExp(regex).test(lnr)) {

        alert("Your spelling contains numerics or special characters. Only letters and apostrophes are allowed. Please check your entry.");
        document.getElementById("lnameofrecorder").style.border = "2px solid red";
        document.getElementById("submitButton").disabled = true;
    }
    else {
        document.getElementById("lnameofrecorder").style.border = "";
        document.getElementById("submitButton").disabled = false;
    }
}


/**
*Function checkind() retrieves the Individual Number value entered
*by the user. The function checks to make sure that the value entered only 
*contains numerics. Save button is disabled or enabled depending on the status of the validation. 
*
*/
function checkind() {

    var ind = document.forms["censusform"]["indnumber"].value;

    if (ind == null || ind == "") {
        checksuid()
        return;
    }

    var regex = /^[0-9]\d*(\.\d+)?$/

    if (!new RegExp(regex).test(ind)) {

        alert("Please make sure that your entry only contains numerics.");
        document.getElementById("indnumber").style.border = "2px solid red";
        document.getElementById("saveform").disabled = true;
        
    } 
    else {
        document.getElementById("indnumber").style.border = "";
        document.getElementById("saveform").disabled = false;
        checksuid();
          }

    /*
    var md = new Windows.UI.Popups.MessageDialog("Hello World!");
    //  md.commands.append(new Windows.UI.Popups.UICommand("Yes"));
    //  md.commands.append(new Windows.UI.Popups.UICommand("No"));
    md.showAsync().then(function (command) { console.log("pressed: " + command.label); });
    */
}

/**
*Function checktreeorliana() calls checksuid().
*
*
*
*/
function checktreeorliana() {
    checksuid();

}


/**
*Function checksubplotnumber() retrieves the Subplot Number value entered
*by the user. The function checks to make sure that the value entered only 
*contains numerics and lies between 1-25. Save button is disabled or enabled 
*depending on the status of the validation. 
*/
function checksubplotnumber(){
    var spn = document.forms["censusform"]["subplotnumber"].value;

    if (spn == null || spn == "") {
        return;
    }

    var regex = /^\d+$/

    if (!new RegExp(regex).test(spn)) {

        alert("Please make sure that your entry only contains numerics.");
        document.getElementById("subplotnumber").style.border = "2px solid red";
        document.getElementById("saveform").disabled = true;
    }
    
    else if (spn < 1 || spn > 25) {
        alert("The Subplot number can only be between 1-25. Please verify your entry.");
        document.getElementById("subplotnumber").style.border = "2px solid red";
        document.getElementById("saveform").disabled = true;
    }

    else {
        document.getElementById("subplotnumber").style.border = "";
        document.getElementById("saveform").disabled = false;
    }
}


/**
*Function checksuid() checks to see if Site Code, Individual Number,
*and Plot Number are present in order to create a Sampling Unit ID. 
*The newly created Sampling Unit ID is populated in the Sampling Unit ID 
*field of the census form. 
*/
function checksuid() {
    var tl;
    var e = document.getElementById("treeorliana");
    var suidReq = new Array("sitenumber", "indnumber","plotnumber")
    var suidflag = 0;
    
    for (i = 0; i < suidReq.length; i++) {
        if (document.getElementById(suidReq[i]) != "") {
            suidflag++;
        }

    }
    var strSel = e.options[e.selectedIndex].value;
    if (strSel != "") { suidflag++;}
    if (strSel == "tree") {
        tl = "VT";
    }
    else { tl = "VL"; }

  
   
    if (suidflag == 4) {
        document.forms["censusform"]["samplingunitid"].value = tl + "-" + document.forms["censusform"]["sitenumber"].value + "-" + document.forms["censusform"]["plotnumber"].value + "-" + document.forms["censusform"]["indnumber"].value;

    }
     
}
  
/**
*Function checkxsposition() retrieves the X Stake Position value entered
*by the user. The function checks to make sure that the value entered
*only contains numerics and matches a specific value list. Submit 
*button is disabled or enabled depending on the status of the validation.
*/
function checkxsposition(){

    var xsp = document.forms["censusform"]["xsofstakeposition"].value;

    if (xsp == null || xsp == "") {
        plotOrstake();
        return;
    }
    var flag = 0;
    var x=0;
    var compare = 0;
    var regex = /^\d+$/

    if (!new RegExp(regex).test(xsp)) {

        alert("Please make sure that your entry only contains numerics.");
        document.getElementById("xsofstakeposition").style.border = "2px solid red";
        flag = 1;
        document.getElementById("saveform").disabled = true;
    }
    else {
        while (x <= 100) {


            if (xsp == x) {
                compare = 1;
                break;
            }
            else { x = x+10; }


        }
        if (compare == 0) {
            alert("The X stake position can only be 0,10,20,30,40,50,60,70,80,90 or 100. Please verify your entry.");
            document.getElementById("xsofstakeposition").style.border = "2px solid red";
            flag = 1;
            document.getElementById("saveform").disabled = true;
        }
    }

    if(flag == 0){
        document.getElementById("xsofstakeposition").style.border = "";
        document.getElementById("saveform").disabled = false;
        plotOrstake();
        
    }
   
    
} 


/**
*Function checkysposition() retrieves the Y Stake Position value entered
*by the user. The function checks to make sure that the value entered
*only contains numerics and matches a specific value list. Submit 
*button is disabled or enabled depending on the status of the validation.
*/
function checkysposition(){
    var ysp = document.forms["censusform"]["ysofstakeposition"].value;

    if (ysp == null || ysp == "") {
        plotOrstake();
        return;
    }
    var flag = 0;
    var x = 0;
    var compare = 0;
    var regex = /^\d+$/

    if (!new RegExp(regex).test(ysp)) {

        alert("Please make sure that your entry only contains numerics.");
        document.getElementById("ysofstakeposition").style.border = "2px solid red";
        flag = 1;
        document.getElementById("saveform").disabled = true;
    }
    else {
        while (x <= 100) {


            if (ysp == x) {
                compare = 1;
                break;
            }
            else { x = x + 10; }


        }
        if (compare == 0) {
            alert("The X stake position can only be 0,10,20,30,40,50,60,70,80,90 or 100. Please verify your entry.");
            document.getElementById("ysofstakeposition").style.border = "2px solid red";
            flag = 1;
            document.getElementById("saveform").disabled = true;
        }
    }

    if (flag == 0) {
        document.getElementById("ysofstakeposition").style.border = "";
        document.getElementById("saveform").disabled = false;
    }

    plotOrstake();
}

/**
*Function checkdistance() retrieves the Distance value entered
*by the user. The function checks to make sure that the value entered
*only contains numerics and lies between 0-29.99. Save button 
*is disabled or enabled depending on the status of the validation. 
*/
function checkdistance() {
    dist = document.forms["censusform"]["distance"].value;

    if (dist == null || dist == "") {
        plotOrstake();
        return;
    }

    var regex =  /^\d+(\.\d{1,2})?$/
    
    if (!new RegExp(regex).test(dist)) {

        alert("Please make sure that your distance only contains numerics accurate to two decimal places.");
        document.getElementById("distance").style.border = "2px solid red";
        document.getElementById("saveform").disabled = true;
    }
    
    else if (dist < 0 || dist > 29.99) {
        alert("The distance can only be between 0-29. Please verify your entry.");
        document.getElementById("distance").style.border = "2px solid red";
        document.getElementById("saveform").disabled = true;
    }

    else {
        document.getElementById("distance").style.border = "";
        document.getElementById("saveform").disabled = false;
    }

    plotOrstake();

}

/**
*Function checkdistance() retrieves the Bearing value entered
*by the user. The function checks to make sure that the value entered
*only contains numerics and lies between 0-360. Save button is  
*disabled or enabled depending on the status of the validation. 
*/
function checkbearing() {
    bear = document.forms["censusform"]["bearing"].value;

    if (bear == null || bear == "") {
        plotOrstake();
        return;
    }

    var regex = /^\d+$/

    if (!new RegExp(regex).test(bear)) {

        alert("Please make sure that your bearing only contains numerics.");
        document.getElementById("bearing").style.border = "2px solid red";
        document.getElementById("saveform").disabled = true;
    }

    else if (bear < 0 || bear > 259) {
        alert("The bearing can only be between 0-360. Please verify your entry.");
        document.getElementById("bearing").style.border = "2px solid red";
        document.getElementById("saveform").disabled = true;
    }

    else {
        document.getElementById("bearing").style.border = "";
        document.getElementById("saveform").disabled = false;
    }

    plotOrstake();
}

/**
*Function checkyearofcensus() calls loadDate() to update/populate Year of Census,
*Month of Census, and Day of Census in the form. 
*
*
*/
function checkyearofcensus() {
   
    loadDate();

}


/**
*Validation currently doesn't exist. 
*
*
*
*/
function checkfamily() {

    
}

/**
*Validation currently doesn't exist.  
*
*
*
*/
function checkgenus(){

}


/**
*Validation currently doesn't exist. 
*
*
*
*/
function checkspecies(){

}
  
/**
*Validation currently doesn't exist. 
*
*
*
*/
function checklocationcode() {

}

/**
*Function checkdiameterN() retrieves the Diamater value (from Add New Stem form) entered
*by the user. The function checks to make sure that the value entered only contains 
*numerics and is greater than 10. Submit button is disabled or enabled depending on the
*status of the validation. 
*/
function checkdiameterN() {

    diam = document.forms["censusform"]["diameter"].value;


    if (diam == null || diam == "") {
        return;
    }

    var dynamicdiam = diam * 3;

    var regex = /^\d+(\.\d{1})?$/

    if (!new RegExp(regex).test(diam)) {

        alert("Please make sure that your diameter only contains numerics and should be rounded to the nearest millimeter (i.e. one decimal place).");
        document.getElementById("diameter").style.border = "2px solid red";
        document.getElementById("saveform").disabled = true;
    }

    else if (diam < 10) {
        alert("The diameter must be greater than or equal to 10cm. Please verify your entry.");
        document.getElementById("diameter").style.border = "2px solid red";
        document.getElementById("saveform").disabled = true;
    }

    else {
        document.getElementById("diameter").style.border = "";
        document.getElementById("saveform").disabled = false;
    }

}

/**
*Function checkdiameter() retrieves the Diamater value (from ReCensus form) entered by the user.The function checks
*to make sure that the value entered only contains numerics and is greater than 10.The function also
*refers to the previous Diameter measurement and compares it to the new measurement in attempt to detect a major 
*increase or decrease. Save button is disabled or enabled depending on the status of the validation. 
*/
function checkdiameter(){

    diam = document.forms["censusform"]["diameter"].value;

    var editableIDnames = new Array("locationcode", "diameter", "pomheight", "conditioncodes", "deadcodes", "voucher", "notes");
    var tempForm = new Array("tlc", "td", "tph", "tcc", "tdc", "tv", "tn");

    

    if (diam == null || diam == "") {
        return;
    }

    var dynamicdiam = diam * 3;

    var regex = /^\d+(\.\d{1})?$/

    if (!new RegExp(regex).test(diam)) {

        alert("Please make sure that your diameter only contains numerics and should be rounded to the nearest millimeter (i.e. one decimal place).");
        document.getElementById("diameter").style.border = "2px solid red";
        document.getElementById("saveform").disabled = true;
    }

    else if (diam < 10) {
            alert("The diameter must be greater than or equal to 10cm. Please verify your entry.");
            document.getElementById("diameter").style.border = "2px solid red";
            document.getElementById("saveform").disabled = true;
    }
    
    else if (diam > (document.getElementById(tempForm[1]).value * 3)) {

            alert("Your entry reflects an increase of 3 times the amount of last years measurement. Please verify your entry.");
            document.getElementById("diameter").style.border = "2px solid red";
            document.getElementById("saveform").disabled = true;
     }
    
   
    else {
        document.getElementById("diameter").style.border = "";
        document.getElementById("saveform").disabled = false;
    }

}

/**
*Function checkpomheight() retrieves the POM Height value (from ReCensus) entered by the user. 
*The function checks to make sure that the value only contains numerics with the option 
*of decimals. The function also constrains the value to 1.3-11 and refers to the previous POM Height  
*measurement and compares it to the new measurement in attempt to detect a major increase or decrease.
*Save button is disabled or enabled depending on the status of the validation. 
*/
function checkpomheight(){

    pomh = document.forms["censusform"]["pomheight"].value;

    var editableIDnames = new Array("locationcode", "diameter", "pomheight", "conditioncodes", "deadcodes", "voucher", "notes");
    var tempForm = new Array("tlc", "td", "tph", "tcc", "tdc", "tv", "tn");
    
    if (pomh == null || pomh == "") {
        return;
    }

    var regex = /^\d+(\.\d+)?$/

    if (!new RegExp(regex).test(pomh)) {

        alert("Please make sure that your POM Height only contains numerics.");
        document.getElementById("pomheight").style.border = "2px solid red";
        document.getElementById("saveform").disabled = true;
    }

    else if (1.3>pomh || pomh > 11) {
        alert("If the tree is measured at dbh the value entered should = 1.3m otherwise record the height (not greater than 11m) of the point of the measurement (POM).");
        document.getElementById("pomheight").style.border = "2px solid red";
        document.getElementById("saveform").disabled = true;
    }
    else if (pomh > (document.getElementById(tempForm[2]).value * 2)) {

        alert("Your entry reflects an increase of 2 times the amount of last years measurement. Please verify your entry.");
        document.getElementById("pomheight").style.border = "2px solid red";
        document.getElementById("saveform").disabled = true;
    }

    else {
        document.getElementById("pomheight").style.border = "";
        document.getElementById("saveform").disabled = false;
    }
}

/**
*Function checkpomheightN() retrieves the POM Height value (from Add New Stem) entered by the user. 
*The function checks to make sure that the value only contains numerics
*with the option of decimals. The function also constrains the value to 1.3-11.
*Save button is disabled or enabled depending on the status of the validation. 
*/
function checkpomheightN() {

    pomh = document.forms["censusform"]["pomheight"].value;


    if (pomh == null || pomh == "") {
        return;
    }

    var regex = /^\d+(\.\d+)?$/

    if (!new RegExp(regex).test(pomh)) {

        alert("Please make sure that your POM Height only contains numerics.");
        document.getElementById("pomheight").style.border = "2px solid red";
        document.getElementById("saveform").disabled = true;
    }

    else if (1.3 > pomh || pomh > 11) {
        alert("If the tree is measured at dbh the value entered should = 1.3m otherwise record the height (not greater than 11m) of the point of the measurement (POM).");
        document.getElementById("pomheight").style.border = "2px solid red";
        document.getElementById("saveform").disabled = true;
    }
    
    else {
        document.getElementById("pomheight").style.border = "";
        document.getElementById("saveform").disabled = false;
    }
}


/**
*Function checkndiameter() retrieves the New Diamater value entered
*by the user. The function checks to make sure that the value entered only contains 
*numerics and is greater than 10. 
* 
*/
function checkndiameter(){
        
    ndiam = document.forms["censusform"]["newdiameter"].value;

    if (ndiam == null || ndiam == "") {
        return;
    }

    var regex = /^\d+(\.\d{1})?$/

    if (!new RegExp(regex).test(ndiam)) {

        alert("Please make sure that your diameter only contains numerics and should be rounded to the nearest millimeter (i.e. one decimal place).");
        document.getElementById("newdiameter").style.border = "2px solid red";
    }

    else if (ndiam < 10) {
        alert("The diameter must be greater than or equal to 10cm. Please verify your entry.");
        document.getElementById("newdiameter").style.border = "2px solid red";
    }

    else {
        document.getElementById("newdiameter").style.border = "";
    }
}

/**
*Function checknpomheight() retrieves the POM Height value entered by the user. 
*The function checks to make sure that the value only contains numerics
*with the option of decimals. The function also constrains the value to 1.3-11.
*
*/
function checknpomheight() {

    npomh = document.forms["censusform"]["newpomheight"].value;

    if (npomh == null || npomh == "") {
        return;
    }

    var regex = /^\d+(\.\d+)?$/

    if (!new RegExp(regex).test(npomh)) {

        alert("Please make sure that your POM Height only contains numerics.");
        document.getElementById("newpomheight").style.border = "2px solid red";
    }

    else if (1.3 > npomh || npomh > 11) {
        alert("If the tree is measured at dbh the value entered should = 1.3m otherwise record the height (not greater than 11m) of the point of the measurement (POM).");
        document.getElementById("newpomheight").style.border = "2px solid red";
    }

    else {
        document.getElementById("newpomheight").style.border = "";
    }
    
}


/**
*Function viewconditioncodes() triggers a pop-up displaying a list of condition
*code options. 
*
*
*/
function viewconditioncodes() {
    document.getElementById('conditionselection').style.visibility = "visible";
}

/**
*Function conditioncodeinsert() retrieves the selected Condition Codes entered
*by the user. The function joins all the selected Condition Codes using 
*commas as seperators. The created selection list is inserted in the 
*Condition Code field. 
*/
function conditioncodeinsert() {
    
    var x=1;
    var selected = new Array;
    var y = 0;
    
    while (x != 21) {
        var option = "opt" + x;
       
        if (document.getElementById(option).checked == true) {

            selected[y] = document.getElementById(option).value;
            y++;
        }
        x++;

    }

    insert = selected.join(",");

    document.forms["censusform"]["conditioncodes"].value = insert;

    if(selected == null){
        document.forms["censusform"]["conditioncodes"].value = null;
    }
    document.getElementById('conditionselection').style.visibility = "hidden";
}


/**
*Function removeconditioninsert() closes the Condition Code pop-up. 
*
*
*
*/
function removeconditioninsert() {
    document.getElementById('conditionselection').style.visibility = "hidden";
}

/**
*Function viewdeadcodes() triggers a pop-up displaying a list of Dead
*Code options. 
*
*
*/
function viewdeadcodes() {

    document.getElementById('deadselection').style.visibility = "visible";
}

/**
*Function deadcodeinsert() retrieves the selected Dead Codes entered
*by the user. The function joins all the selected Dead Codes using 
*commas as seperators. The created selection list is inserted in the 
*Dead Code field. 
*/
function deadcodeinsert() {

    var x = 1;
    var selected = new Array;
    var y = 0;

    while (x != 31) {
        var option = "Checkbox" + x;

        if (document.getElementById(option).checked == true) {

            selected[y] = document.getElementById(option).value;
            y++;
        }
        x++;

    }

    insert = selected.join("");

    document.forms["censusform"]["deadcodes"].value = insert;

    if (selected == null) {
        document.forms["censusform"]["deadcodes"].value = null;
    }
    document.getElementById('deadselection').style.visibility = "hidden";
}

/**
*Function removedeadinsert() closes the Dead Code pop-up. 
*
*
*
*/
function removedeadinsert() {
    document.getElementById('deadselection').style.visibility = "hidden";
}


/**
*Function checkvoucher() retrieves the Voucher value entered
*by the user. The function checks to make sure that every entry
*consists of four letters followed by three numbers. The function also
*checks for commas if multiple Vouchers exist. 
*/
function checkvoucher(){

    vouc = document.forms["censusform"]["voucher"].value;

    if (vouc == null || vouc == "") {
        return;
    }

    regex = /^[a-zA-Z]{4}[,\d{3}]+$/

    if (!new RegExp(regex).test(vouc)) {

        alert("Please format your entry correctly, for example, \"BTTP179\" or use commas to seperate multiple IDs.");
        document.getElementById("voucher").style.border = "2px solid red";
    }

    else {
        document.getElementById("voucher").style.border = "";
    }
}

/**
*Function checksamplingperiod() retrieves the Sampling Period value entered 
*by the user. The function checks to make sure that every entry consists of four numbers 
*followed by two decimal places. 
*
*/
function checksamplingperiod() {

    samp = document.forms["censusform"]["samplingperiod"].value;

    if (samp == null || samp == "") {
        return;
    }

    regex = /^\d{4}\.\d{1,2}$/

    if (!new RegExp(regex).test(samp)) {

        alert("Please format your entry correctly and only use numerics. For example, \"2013.01\".");
        document.getElementById("samplingperiod").style.border = "2px solid red";
        document.getElementById("saveform").disabled = true;
    }

    else {
        document.getElementById("samplingperiod").style.border = "";
        document.getElementById("saveform").disabled = false;
    }

}

/**
*Currently no validation exists. 
*
*
*
*/
function checknotes(){

}

/**
*Function checkfnm() retrieves the First Name of Person Measuring value entered
*by the user. The funcion checks to make sure that the value entered
*only contains letters, apostrophes, and end spaces.Save button is disabled  
*or enabled depending on the status of the validation. 
*/
function checkfnm() {

    var fnm = document.getElementById("fnameofpersonmeasuringdiameter").value;

    if (fnm == null || fnm == "") {
        return;
    }

    var regex = /^([a-zA-Z' ])+$/

    if (!new RegExp(regex).test(fnm)) {

        alert("Your spelling contains numerics or special characters. Only letters and apostrophes are allowed. Please check your entry.");
        document.getElementById("fnameofpersonmeasuringdiameter").style.border = "2px solid red";
        document.getElementById("submitButton").disabled = true;
    }
    else {
        document.getElementById("fnameofpersonmeasuringdiameter").style.border = "";
        document.getElementById("submitButton").disabled = false;
    }

}

/**
*Function checklnm() retrieves the Last Name of Person Measuring value entered
*by the user. The funcion checks to make sure that the value entered
*only contains letters, apostrophes, and end spaces.Save button is disabled  
*or enabled depending on the status of the validation. 
*/
function checklnm(){

    var lnm = document.getElementById("lnameofpersonmeasuringdiameter").value;

    if (lnm == null || lnm == "") {
        return;
    }

    var regex = /^([a-zA-Z' ])+$/

    if (!new RegExp(regex).test(lnm)) {

        alert("Your spelling contains numerics or special characters. Only letters and apostrophes are allowed. Please check your entry.");
        document.getElementById("lnameofpersonmeasuringdiameter").style.border = "2px solid red";
        document.getElementById("submitButton").disabled = true;
    }
    else {
        document.getElementById("lnameofpersonmeasuringdiameter").style.border = "";
        document.getElementById("submitButton").disabled = false;
    }
}

/**
*Function checkplotx() retrieves the Plot X Coord value entered by 
*the user. The function checks to make sure that the value entered only 
*contains numerics and lies between 0-144. Save button is disabled or
*enabled depending on the status of the validation. 
*/
function checkplotx(){
    plotx = document.forms["censusform"]["plotxcoord"].value;

    if (plotx == null || plotx == "") {
        plotOrstake();
        return;
    }

    var regex = /^\d+(\.\d)?$/

    if (!new RegExp(regex).test(plotx)) {

        alert("Please make sure that your X coordinate only contains numerics.");
        document.getElementById("plotxcoord").style.border = "2px solid red";
        document.getElementById("saveform").disabled = true;

    }
    else if (plotx < 0 || plotx > 144) {
        alert("The X coordinate must be within 0 - 144. Please verify your entry.");
        document.getElementById("plotxcoord").style.border = "2px solid red";
        document.getElementById("saveform").disabled = true;
    }

    else {
        document.getElementById("plotxcoord").style.border = "";
        document.getElementById("saveform").disabled = false;
    }

    plotOrstake();
}

/**
*Function checkploty() retrieves the Plot Y Coord value entered by 
*the user. The function checks to make sure that the value entered only 
*contains numerics and lies between 0-144. Save button is disabled or
*enabled depending on the status of the validation. 
*/
function checkploty() {

    ploty = document.forms["censusform"]["plotycoord"].value;

    if (ploty == null || ploty == "") {
        plotOrstake();
        return;
    }

    var regex = /^\d+(\.\d)?$/

    if (!new RegExp(regex).test(ploty)) {

        alert("Please make sure that your Y coordinate only contains numerics.");
        document.getElementById("plotycoord").style.border = "2px solid red";
        document.getElementById("saveform").disabled = true;

    }
    else if (ploty < 0 || ploty > 144) {
        alert("The Y coordinate must be within 0 - 144. Please verify your entry.");
        document.getElementById("plotycoord").style.border = "2px solid red";
        document.getElementById("saveform").disabled = true;
    }

    else {
        document.getElementById("plotycoord").style.border = "";
        document.getElementById("saveform").disabled = false;
    }

    plotOrstake();

}


/**
*Function dynamicV() stores Diameter and POM Height measurements from the imported records in a form. 
*The values are then accessed when new measurements are entered. The function
*grants the ability to compare and detect possible inaccuracies. 
*
*/
function dynamicV() {
    var date = new Date();
    year = date.getFullYear();


    var editableIDnames = new Array("locationcode", "diameter", "pomheight", "conditioncodes", "deadcodes", "voucher", "notes");
    var tempForm = new Array("tlc", "td", "tph", "tcc", "tdc", "tv", "tn");
  
    for (i = 0; i < editableIDnames.length; i++) {
        var fieldName = editableIDnames[i];
        var tempValue = tempForm[i];
        var element = document.getElementById(fieldName);
       var telement = document.getElementById(tempValue);
        
       telement.value = element.value;     
        // element.value = null;
     
    }
    
    document.getElementById(editableIDnames[1]).value = null;
    document.getElementById(editableIDnames[2]).value = null;
    

    var samplingperiod = document.getElementById("samplingperiod").value;
    if (samplingperiod != null || samplingperiod != " ") {
        var splitsamplingperiod = samplingperiod.split(".");
        splitsamplingperiod[0] = year;
        var updatedsamplingperiod = splitsamplingperiod.join(".");
        document.getElementById("samplingperiod").value = updatedsamplingperiod;
    }
    else {
        newSamplingPeriod = year + ".01";
        document.getElementById("samplingperiod").value = newSamplingPeriod;
    }
    
}

 

/**
*Function currentTime() writes the date and time to the document.  
*The function is called upon the completion of loadData().
*
*
*/
function currentTime() {
    var date = new Date();
    year = date.getFullYear();
    month = date.getMonth();
    month = month + 1;
    day = date.getDate();
    hours = date.getHours();
    minutes = date.getMinutes();

    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;

    document.write(month + "/" + day + "/" + year + " - " + strTime);
}

/**
*Function loadDate() inserts the current year, month, and day into the
*Year of Census, Month of Census, and Day of Census fields. 
*
*
*/
function loadDate() {
    var date = new Date();
    year = date.getFullYear();
    month = date.getMonth();
    month = month + 1;
    day = date.getDate();

    /*
    document.getElementById('yearofmd').value = year;
    document.getElementById('monthofmd').value = month;
    document.getElementById('dayofmd').value = day;
    */
    document.getElementById('yearofcensus').value = year;
    document.getElementById('monthofcensus').value = month;
    document.getElementById('dayofcensus').value = day;
}

/**
*Function plotOrstake() checks to see if the X Stake Position, Y Stake Position, Distance, Bearing,
*Plot X Coord, and Plot Y Coord are being used. The function only allows for either 
*X Stake Position, Y Stake Position, Distance, Bearing or Plot X Coord and Plot Y Coord. Whichever
*set of fields are inserted first will result in the disabling and emptying of the other set. 
*/
function plotOrstake() {
    var stake = new Array("xsofstakeposition", "ysofstakeposition", "distance", "bearing");
    var plot = new Array("plotxcoord", "plotycoord");

    var stakeflag = 0;
    var plotflag = 0;
    
    for (i = 0; i < stake.length; i++) {
        if (document.getElementById(stake[i]).value != "") {
            stakeflag++;
        }

    }
   
  
        if (document.getElementById(plot[0]).value != "") {
            plotflag ++;
        }
        if (document.getElementById(plot[1]).value != "") {
            plotflag ++;
        }
      
        if (stakeflag == 4) {
            alert("Plot X Coord and Plot Y Coord values will be cleared and disabled. If you wish to keep these fields remove your entry for X Stake, Y Stake, Distance, and Bearing.");
            document.getElementById(plot[0]).disabled = true;
            document.getElementById(plot[1]).disabled = true;
            document.getElementById(plot[0]).value = "";
            document.getElementById(plot[1]).value = "";
        }
        else {

            document.getElementById(plot[0]).disabled = false;
            document.getElementById(plot[1]).disabled = false;
        }

        if (plotflag == 2) {


                alert("X Stake, Y Stake, Distance, and Bearing will be cleared and disabled. If you wish to keep these fields remove your entry for Plot X Coord and Plot Y Coord.");
                    document.getElementById(stake[0]).value = "";
                    document.getElementById(stake[1]).value = "";
                    document.getElementById(stake[2]).value = "";
                    document.getElementById(stake[3]).value = "";
                    document.getElementById(stake[0]).disabled = true;
                    document.getElementById(stake[1]).disabled = true;
                    document.getElementById(stake[2]).disabled = true;
                    document.getElementById(stake[3]).disabled = true;           
      
        }

        else {
            document.getElementById(stake[0]).disabled = false;
            document.getElementById(stake[1]).disabled = false;
            document.getElementById(stake[2]).disabled = false;
            document.getElementById(stake[3]).disabled = false;

        
        }
    
    
}

function ndhoption(x) {
    if (x == 1) {
        document.getElementById('newdiameterdiv').style.visibility = "visible";
        document.getElementById('newpomheightdiv').style.visibility = "visible";
        document.getElementById('newdiameter').setAttribute('type', 'text');
        document.getElementById('newpomheight').setAttribute('type', 'text');
    }
    else if (x == 0) {
        document.getElementById('newdiameterdiv').style.visibility = "";
        document.getElementById('newpomheightdiv').style.visibility = "";
        document.getElementById('newdiameter').setAttribute('type', 'hidden');
        document.getElementById('newpomheight').setAttribute('type', 'hidden');
    }

}