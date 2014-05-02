/**
 * @module utils - contains utility functions used by other modules
 *
 * Author: Rashmi Nagaraju
 */

/**
 * This function retrieves the value of a specific URL parameter
 */
function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null
}

/**
 * This function returns the lower bound required for the indexedDB query
 * based on site number, plot number and the prefix(VT or VL)
 */
function getLower(prefix, sitenumber, plotnumber) {
    var lower = (plotnumber == '' ? prefix + sitenumber :
        prefix + sitenumber + "-" + plotnumber);
    return lower;
}

/**
 * This function returns the upper bound required for the indexedDB query
 * based on site number, plot number and the prefix(VT or VL)
 */
function getUpper(prefix, sitenumber, plotnumber) {
    var upper = (plotnumber == '' ? prefix + sitenumber + "-z" :
       prefix + sitenumber + "-" + plotnumber + "-z");
    return upper;
}

/**
 * This function filters search results based on sub plot number
 */
function filterBySubplotNumber(forms, subplotnumber) {
    var filteredForms = [];
    if (subplotnumber == '') {
        filteredForms = forms;
    }
    else {
        for (i = 0; i < forms.length; i++) {
            var form = forms[i];
            if (form["subplotnumber"] == subplotnumber) {
                filteredForms.push(form);
            }
        }
    }
    return filteredForms;
}

/**
 * This function queries index database using the search term and then
 * displays search results
 */
function loadTableData(sitenumber, plotnumber, subplotnumber) {
    var errorCallback = function (error) {
        alert("Forms cannot be displayed:" + error);
        console.log("Forms cannot be displayed", error);
    }

    if (sitenumber == '' && plotnumber == '' && subplotnumber == '') {
        getAllForms(drawTable, errorCallback);
    }
    else {
        var vtQuerySuccessCallback = function (vtForms) {
            var filteredForms = filterBySubplotNumber(vtForms, subplotnumber);
            var vlQuerySuccessCallback = function (vlForms) {
                var vlFilteredForms = filterBySubplotNumber(vlForms, subplotnumber);
                for (i = 0; i < vlFilteredForms.length; i++) {
                    filteredForms.push(vlFilteredForms[i]);
                }
                drawTable(filteredForms);
            }

            var lower = getLower('VL-', sitenumber, plotnumber);
            var upper = getUpper('VL-', sitenumber, plotnumber);
            queryFormsStore(lower, upper, vlQuerySuccessCallback, errorCallback);
        }

        var lower = getLower('VT-', sitenumber, plotnumber);
        var upper = getUpper('VT-', sitenumber, plotnumber);
        queryFormsStore(lower, upper, vtQuerySuccessCallback, errorCallback);
    }
}