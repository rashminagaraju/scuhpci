// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/page.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            //Registering event handlers
            var saveButton = document.getElementById("formSaveButton");
            saveButton.addEventListener("click", this.savePage, false);

            //Populate saved data when the page is loaded
            this.populatePage();
        },
        
        populatePage: function(eventInfo) {
            var savedSite = window.sessionStorage.getItem("sitenumber");
            //var request = window.indexedDB.open("formsData");

            if (savedSite != null) {
                var site = document.getElementById("sitenumber");
                site.value = savedSite;
            }
        },

        savePage: function (eventInfo) {
            var site = document.getElementById("sitenumber");
            if (site.value.length > 0) {
                window.sessionStorage.setItem("sitenumber", site.value);
                //window.location.href = "/page1.html";
            }
            else {
                alert("Enter valid Site");
            }

            //WinJS.Navigation.navigate("page1.html", false);
            //window.location = "page1.html";
            
            //window.location.reload(true);
     
        },

        alert: function(msgString) {
            var msg = new Windows.UI.Popups.MessageDialog(msgString, "Alert"); msg.showAsync();
        },

        unload: function () {
            // TODO: Respond to navigations away from this page
            // When a user moves away from this page without clicking submit 
            // - autosave OR prompt user to save data
        },

        updateLayout: function (element, viewState, lastViewState) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in viewState.
        }
    });
})();

