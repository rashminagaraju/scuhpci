/**
 * @module vegcensusstore - It encapsulates all the functions required to interact with the indexedDB
 * All interactions with the indexedDB are done using the IDBWrapper https://github.com/jensarps/IDBWrapper
 *
 * Author: Rashmi Nagaraju
 */

var formsStore;

/**
 * This function initializes the indexedDB datastore.The store contains all the census forms(records). Each form 
 * is identified by its samplingunitid which is defined as the primary key. Indexes have been defined for all 
 * columns(fields) on which querying needs to be done.
 *  
 * @callback onReady - is a callback which takes no arguments; it is called when the store is ready                  
 */
function initFormsStore(onReady) {
    formsStore = new IDBStore({
        dbVersion: 1,
        storeName: "formsStoreV2",
        keyPath: "samplingunitid",
        indexes: [
            { name: "sitenumber", keyPath: 'sitenumber', unique: false, multiEntry: false },
            { name: "plotnumber", keyPath: 'plotnumber', unique: false, multiEntry: false },
            { name: "subplotnumber", keyPath: 'subplotnumber', unique: false, multiEntry: false },
            { name: "indnumber", keyPath: 'indnumber', unique: false, multiEntry: false },
            { name: "isLocalForm", keyPath: 'isLocalForm', unique: false, multiEntry: false }
        ],
        onStoreReady: onReady
    });
}

/**
 * This function puts a new form(record) or updates an existing form in indexedDB store
 * @param form - a map object of field names and their values including samplingunitid which is the primary key
 *               The keys in the map can be retrieved using getMetadataFieldNames() and getFieldNames()
 * @callback successCallback - Callback which is invoked when a form is put successfully.
 *                             It takes a single parameter which is the primary key(sampling unit ID) of 
 *                             that form.
 * @callback errorCallback - Callback which is invoked when put fails.
 *                           It takes a single parameter which is the error message.
 * Example: 
 * var successCallback = function(id) { console.log("This id was put:" + id); }
 * var errorCallback = function(error) { console.log("Something went wrong!", error); }
 */
function putForm(form, successCallback, errorCallback) {
    formsStore.put(form, successCallback, errorCallback);
    var sitenumber = form["sitenumber"];
    window.localStorage.setItem("sitenumber", sitenumber);
    //console.log("Imported census form record inserted");

    //save family, genus, species
    updateMapInLocalStorage("family", form["family"], true);
    updateMapInLocalStorage("genus", form["genus"], true);
    updateMapInLocalStorage("species", form["species"], true);
}

/**
 * This function puts multiple forms(records) in indexedDB store
 * @param forms - an array of forms
 * @callback successCallback - Callback which is invoked when forms are put successfully.
 * @callback errorCallback - Callback which is invoked when the operation fails.
 *                           It takes a single parameter which is the error message.
 */
function putAllForms(forms, successCallback, errorCallback) {
    formsStore.batch(forms, successCallback, errorCallback);
}


/**
 * This function gets a form(record) for a given samplingunitid from indexedDB store
 * @param id - the primary key which is the samplingunitid of the form
 * @callback successCallback - Callback which is invoked when a form is retrieved successfully.
 *                             It takes a single parameter which is the map object corresponding to the form.
 *                             The keys in the map can be retrieved using getMetadataFieldNames() and getFieldNames()
 * @callback errorCallback - Callback which is invoked when get fails.
 *                           It takes a single parameter which is the error message.
 * Example: 
 * var successCallback = function(form) { console.log(JSON.stringify(form)); }
 * var errorCallback = function(error) { console.log("Something went wrong!", error); }
 */
function getForm(id, successCallback, errorCallback) {
    formsStore.get(id, successCallback, errorCallback);
}

/**
 * This function gets all the forms(records) in indexedDB store
 * @callback successCallback - Callback which is invoked when forms are retrieved successfully.
 *                             It takes an array of forms.
 * @callback errorCallback - Callback which is invoked when the operation fails.
 *                           It takes a single parameter which is the error message.
 */
function getAllForms(successCallback, errorCallback) {
    formsStore.getAll(successCallback, errorCallback);
}

/**
 * This function performs a range query on the primary key against the datastore
 * @param lowerValue - lower value of the range query
 * @param upperValue - upper value of the range query
 * @callback successCallback - Callback which is invoked when the query is run successfully.
 *                             It takes a single parameter which is an array containing matched objects
 * @callback errorCallback - Callback which is invoked when the query fails.
 *                           It takes a single parameter which is the error message.
 */
function queryFormsStore(lowerValue, upperValue, successCallback, errorCallback) {
    var kr = formsStore.makeKeyRange({ lower: lowerValue, upper: upperValue });
    formsStore.query(successCallback, {
        keyRange: kr,
        order: 'ASC',
        filterDuplicates: false,
        onError : errorCallback
    });
}

/**
* Update a map of in local storage
* This function is used in the context of saving family/genus/species.
* @param mapKey the key under which the map is saved in local storage
* @param key the new key to be put inside the map
* @param value the value associated with "key"
*/
function updateMapInLocalStorage(mapKey, key, value) {
    var map = getMapFromLocalStorage(mapKey);
    map[key] = value;
    window.localStorage.setItem(mapKey, JSON.stringify(map));
}

/**
* Get a map from local storage.
* This function is used in the context of getting the family/genus/species names.
* @param keyName the keyName under which the map is saved in local storage
*/
function getMapFromLocalStorage(keyName) {
    var map = {};
    var mapString = window.localStorage.getItem(keyName);
    if (mapString != null) {
        map = JSON.parse(mapString);
    }
    return map;
}

/**
* This function gets the family names
*
*@return family names as an array
*/
function getFamilyNames() {
    var familyMap = getMapFromLocalStorage("family");
    return Object.keys(familyMap);
}

/**
* This function gets the genus names
*
*@return genus names as an array
*/
function getGenusNames() {
    var genusMap = getMapFromLocalStorage("genus");
    return Object.keys(genusMap);
}

/**
* This function gets the genus names
*
*@return genus names as an array
*/
function getSpeciesNames() {
    var speciesMap = getMapFromLocalStorage("species");
    return Object.keys(speciesMap);
}

/**
 * @return - returns all the metadata field names in the form
 */
function getMetadataFieldNames() {
    var metadataFieldNames = new Array("sitenumber", "plotnumber", "yearofmd", "monthofmd", "dayofmd",
        "fnameofpersonmeasuringdiameter", "lnameofpersonmeasuringdiameter", "fnameofrecorder", "lnameofrecorder", "recordercomments");
    return metadataFieldNames;
}

/**
 * @return - returns all the census form field names in the form
 */
function getFieldNames() {
    var fieldNames = new Array("sitenumber", "plotnumber", "fnameofrecorder", "lnameofrecorder",
                     "subplotnumber", "indnumber", "treeorliana", "samplingunitid", "xsofstakeposition", "ysofstakeposition", "distance", "bearing",
                     "yearofcensus", "monthofcensus", "dayofcensus", "family", "genus", "species", "locationcode", "diameter", "pomheight", "newdiameter",
                     "newpomheight", "conditioncodes", "deadcodes", "voucher", "samplingperiod", "notes", "plotxcoord", "plotycoord");
    return fieldNames;
}

function getSiteName(siteCode) {
    var siteNames = {
        "BCI": "Barro Colorado Island",
        "BBS": "Bukit Barisan",
        "BIF" : "Bwindi",
        "CX" : "Caxiuana", 
        "CSN" : "Central Suriname",
        "COU" : "Cocha Cashu",
        "KRP": "Korup",
        "MAD" : "Madidi",
        "MAS" : "Manaus",
        "MUD" : "Mudumalai",
        "NAK" : "Nam Kading",
        "NNN": "Nouabale Ndoki",
        "PSH" : "Pasoh",
        "RNF": "Ranomafana",
        "RWA" : "Rwanda",
        "UDZ": "Udzungwa",
        "VB" : "Volcan Barva",
        "YAN": "Yanachaga",
        "YAS": "Yasuni"
    };
    if (siteCode in siteNames)
        return siteNames[siteCode];
    else
        return siteCode;
}

//Warning!!! To be used only for testing! Can result in data loss!
function clearFormsStore() {
    console.log('about to clear formsStore!');
    formsStore.clear();    
}
