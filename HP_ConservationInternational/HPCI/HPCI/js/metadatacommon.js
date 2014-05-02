/**
 * @module metadataCommon - encapsulates all the functions required for metadata save/load to/from session
 *
 * Author: Rashmi Nagaraju
 */


/**
 * This function loads metadata from session storage and populates DOM fields
 *  
 * @param {String} sessionKey - This key is used to retrieve the metadata fields and their values from session 
 *                              storage
 */
function loadMetadata(sessionKey) {
    var formStr = window.sessionStorage.getItem(sessionKey);
    if (formStr != null) {
        var form = JSON.parse(formStr);
        var metadataFields = getMetadataFieldNames();
        for (i = 0; i < metadataFields.length; i++) {
            var metadataField = metadataFields[i];
            var element = document.getElementById(metadataField);
            element.value = form[metadataField];
        }
    }
}

/**
 * This function saves metadata from DOM fields to session storage
 * @param {String} sessionKey - All the metdata fields and their values are stored in a map. This map is
 *                              saved in session storage using sessionKey
 */
function saveMetadata(sessionKey) {
    var formStr = window.sessionStorage.getItem(sessionKey);
    var form = (formStr != null ? JSON.parse(formStr) : {});
    var metadataFields = getMetadataFieldNames();
    for (i = 0; i < metadataFields.length; i++) {
        var metadataField = metadataFields[i];
        var element = document.getElementById(metadataField);
        form[metadataField] = element.value;
    }
    window.sessionStorage.setItem(sessionKey, JSON.stringify(form));
}

/**
* This function first retrieves a map containing metadata fields and their values from session using
* site number and plot number. It then copies them to the corresponding DOM fields using loadMetadata()
*/
function loadMetadataFromSession() {
    var site = window.sessionStorage.getItem("sitenumber");
    var plotno = window.sessionStorage.getItem("plotnumber");
    if (site != null && plotno != null) {
        var siteElement = document.getElementById("sitenumber");
        var plotnoElement = document.getElementById("plotnumber");
        siteElement.value = site;
        plotnoElement.value = plotno;
        var key = "metadata_" + site + "_" + plotno;
        loadMetadata(key);
    }
}

/**
 * This function forms a key using site number and plot number. It then copies Metadata DOM fields and  
 * their values to a map and stores this map using the above key in session (saveMetaData() is invoked to do this)
 */
function saveMetadataToSession() {
    var site = document.getElementById("sitenumber");
    var plotno = document.getElementById("plotnumber");
    if (site.value != null && plotno.value != null) {
        var key = "metadata_" + site.value + "_" + plotno.value;
        saveMetadata(key);
    }
    else {
        alert("Site and plot number are mandatory fields");
    }

    return true;
}

