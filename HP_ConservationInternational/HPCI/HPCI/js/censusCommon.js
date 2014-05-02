/**
 * @module censusCommon - encapsulates all the functions used by both census form and recensus form
 *
 * Author: Rashmi Nagaraju
 */


/**
 * This function loads all the form field values from session to DOM fields
 * The flow is as follows:
 * If there is a suid URL parameter, we first load form field data from indexedDB to session. 
 * We then load from session to DOM fields.
 * If suid URL parameter is absent, we check if clickedSamplingUnitID is present in session. 
 * If clickedSamplingUnitID is present, we again load data from indexedDB to session as before.
 * Otherwise, we load data from session to DOM fields directly.
 */
function loadData() {
    var loadMetadataFromIndexedDB = false;
    var clickedSamplingUnitID = getURLParameter('suid');
    if (clickedSamplingUnitID != null) {
        //if clickedSamplingUnitID != null, it means user is redirected to this page from 
        // table view of forms
        loadMetadataFromIndexedDB = true;
        window.sessionStorage.setItem("clickedSamplingUnitID", clickedSamplingUnitID);
    }
    else {
        //try to retrieve from session
        clickedSamplingUnitID = window.sessionStorage.getItem("clickedSamplingUnitID");
    }
    console.log("Clicked SUID: ", clickedSamplingUnitID);

    if (clickedSamplingUnitID != null) {
        var fieldNames = getFieldNames();
        var metadataFieldNames = getMetadataFieldNames();

        var successCallback = function (form) {
            for (i = 0; i < fieldNames.length; i++) {
                var fieldName = fieldNames[i];
                var value = form[fieldName];
                if (value != null) {
                    var element = document.getElementById(fieldName);
                    if (element != null) {

                        element.value = value;
                    }
                }
            }
            document.getElementById("isEditedOnTablet").value = form["isEditedOnTablet"];
               
            window.sessionStorage.setItem("sitenumber", form["sitenumber"]);
            window.sessionStorage.setItem("plotnumber", form["plotnumber"]);
            var key = "metadata_" + form["sitenumber"] + "_" + form["plotnumber"];

            //if session doesn't have metadata or if the form has been locally edited
            //load metadata from DB
            if ((window.sessionStorage.getItem(key) == null || form["isEditedOnTablet"])
                && loadMetadataFromIndexedDB) {
                for (i = 0; i < metadataFieldNames.length; i++) {
                    var fieldName = metadataFieldNames[i];
                    var value = form[fieldName];
                    if (value != null) {
                        var element = document.getElementById(fieldName);
                        if (element != null) {
                            element.value = value;
                        }
                    }
                }
            }
            else {
                loadMetadata(key); //load metadata from session
            }
            saveMetadata(key); //save metadata to session
        }

        var errorCallback = function (error) {
            alert("Error:Cannot open the form for editing: " + error);
        }

        // callback for indexedDb initialization
        var onStoreReady = function () {
            // retrieve the form in indexedDB store
            getForm(clickedSamplingUnitID, successCallback, errorCallback);

        }

        //initialize the indexedDB
        initFormsStore(onStoreReady);

    }
    else {
        //will come here only for brand new forms
        //populate hidden metadata fields in censusform
        var site = window.sessionStorage.getItem("sitenumber");
        var plotno = window.sessionStorage.getItem("plotnumber");
        if (site != null && plotno != null) {
            var key = "metadata_" + site + "_" + plotno;
            loadMetadata(key);
        }
    }
    
    ///loadDate();
}

/**
 * This function saves data from DOM fields to indexedDB
 */
function saveData() {
    var site = window.sessionStorage.getItem("sitenumber");
    var plotno = window.sessionStorage.getItem("plotnumber");
    if (site != null && plotno != null) {
        var form = {}; //form to be stored in indexedDB
        var metadataFieldNames = getMetadataFieldNames();
        //always read from DOM to save to indexedDB as user could have edited the fields
        for (i = 0; i < metadataFieldNames.length; i++) {
            var metadataFieldName = metadataFieldNames[i];
            var element = document.getElementById(metadataFieldName);
            if (element != null) {
                form[metadataFieldName] = element.value;
            }
        }

        var fieldNames = getFieldNames();
        for (i = 0; i < fieldNames.length; i++) {
            var fieldName = fieldNames[i];
            var element = document.getElementById(fieldName);
            if (element != null) {
                form[fieldName] = element.value;
            }
        }
        form["isLocalForm"] = document.getElementById("isLocalForm").value;
        form["isEditedOnTablet"] = "1";

        //indexedDB callback when the form is saved successfully
        var successCallback = function (id) {
            alert("Form with Sampling Unit ID " + id + " saved successfully");
            //window.location.href = "index.html";
            var siteNumber = form["sitenumber"];
            var plotNumber = form["plotnumber"];
            var subplotNumber = form["subplotnumber"];
            window.location.href = "subplot_visualmap.html?siteNumber=" + siteNumber + "&plotNumber=" + plotNumber + "&subplotNumber=" + subplotNumber;
            return true;
        }

        //indexedDB callback when there is an error saving the form
        var errorCallback = function (error) {
            alert("Error saving the form: " + error);
        }

        // callback for indexedDb initialization
        var onStoreReady = function () {
            //save form in indexeddb
            putForm(form, successCallback, errorCallback);
        }

        //initialize the indexedDB
        initFormsStore(onStoreReady);
    }

    return true;
}
