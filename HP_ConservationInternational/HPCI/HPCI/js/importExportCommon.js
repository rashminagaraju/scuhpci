/**
 * @module importExportCommon - encapsulates all the functions used by both import and export
 *
 * Author: Rashmi Nagaraju
 */

/**
 * @return - returns a map for Tree Point Field Names where the key is the internal name used for 
 *           a census form field and the value is the corresponding xml tag name in the xml file 
 *           used for import/export.
 */
function getTreePointFieldNames() {
    var fieldNames = {
        "samplingunitid": "name", "subplotnumber": "subplotNumber", "plotxcoord": "plotXCoordinate",
        "plotycoord": "plotYCoordinate"
    };
    return fieldNames;
}

/**
 * @return - returns a map for Top Level Field Names where the key is the internal name used for 
 *           a census form field and the value is the corresponding xml tag name in the xml file 
 *           used for import/export.
 */
function getTopLevelFieldNames() {
    var fieldNames = {
        "fnameofrecorder": "recordFirstName", "lnameofrecorder": "recordLastName", "notes": "comments",
        "family": "family", "genus": "genus", "species": "species", "locationcode": "locationCode",
        "diameter": "diameter", "pomheight": "pom", "conditioncodes": "conditionCodes", "voucher": "voucher",
        "fnameofpersonmeasuringdiameter": "collectedByFirstName", "lnameofpersonmeasuringdiameter": "collectedByLastName",
        "samplingperiod" : "event"
    };
    return fieldNames;
}