(function () {
    var prefs = Services.prefs,
        enabled;
    if (prefs.prefHasUserValue('userChromeJS.floating_scrollbar.enabled')) {
        enabled = prefs.getBoolPref('userChromeJS.floating_scrollbar.enabled')
    } else {
        prefs.setBoolPref('userChromeJS.floating_scrollbar.enabled', true);
        enabled = true;
    }

    var css = '\
    @namespace url(http: //www.mozilla.org/keymaster/gatekeeper/there.is.only.xul);\
    :not(select):not(hbox) > scrollbar {\
        -moz-appearance: none!important;\
        position: relative;\
        box-sizing: border-box!important;\
        background-color: transparent;\
        background-image: none;\
        z-index: 2147483647;\
        padding: 2px;\
        display: flex!important;\
        justify-content: flex-end;\
        pointer-events: auto;\
        width: auto!important;\
		transition: background-color 0.1s cubic-bezier(.25,.1,0,1), padding 0.1s cubic-bezier(.25,.1,0,1);\
    }\
    :not(select):not(hbox) > scrollbar[orient = "vertical"] {\
        -moz-margin-start: -16px;\
        width: 16px!important;\
    }\
    :not(select):not(hbox) > scrollbar[orient = "vertical"] thumb {\
        min-height: 16px;\
        transform: scaleX(0.25);\
		transform-origin: right;\
        transition: transform 0.1s cubic-bezier(.25,.1,0,1);\
    }\
   :not(select):not(hbox) > scrollbar[orient = "horizontal"] {\
        margin-top: -16px;\
        height: 16px!important;\
    }\
    :not(select):not(hbox) > scrollbar[orient = "horizontal"] thumb {\
        min-width: 16px;\
        transform: scaleY(0.25);\
		transform-origin: bottom;\
        transition: transform 0.1s cubic-bezier(.25,.1,0,1);\
    }\
    :not(select):not(hbox) > scrollbar thumb {\
        -moz-appearance: none!important;\
        background-color: rgba(100, 100, 100, 0.8)!important;\
        pointer-events: auto;\
		transition: background-color 0.1s cubic-bezier(.25,.1,0,1);\
    }\
    :not(select):not(hbox) > scrollbar:hover {\
        background-color: rgba(100, 100, 100, 0.2);\
		padding: 0;\
		transition: background-color 0.1s cubic-bezier(.25,.1,0,1), padding 0.1s cubic-bezier(.25,.1,0,1);\
    }\
    :not(select):not(hbox) > scrollbar:hover thumb {\
        background-color: rgba(100, 100, 100, 1)!important;\
        transform: scale(1, 1);\
        transition: transform 0.1s cubic-bezier(.25,.1,0,1);\
    }\
    :not(select):not(hbox) > scrollbar thumb:hover {\
        background-color: rgba(110, 110, 110, 1)!important;\
		transition: background-color 0.1s cubic-bezier(.25,.1,0,1);\
    }\
    :not(select):not(hbox) > scrollbar thumb:active {\
        background-color: rgba(150, 150, 150, 1)!important;\
		transition: background-color 0.1s cubic-bezier(.25,.1,0,1);\
    }\
    :not(select):not(hbox) > scrollbar scrollbarbutton, :not(select):not(hbox) > scrollbar gripper {\
        -moz-appearance: none!important;\
        display: none;\
    }\
    @-moz-document url-prefix("https://mail.google.com/"), url-prefix("https://docs.google.com/"), url-prefix("https://calendar.google.com/") {\
      :not(select):not(hbox) > scrollbar {\
        z-index: 1!important;\
      }\
    }';

    var sss = Cc['@mozilla.org/content/style-sheet-service;1'].getService(Ci.nsIStyleSheetService);
    var uri = makeURI('data:text/css;charset=UTF=8,' + encodeURIComponent(css));

    var p = document.getElementById('devToolsSeparator');
    var m = document.createElement('menuitem');
    m.setAttribute('label', "Schwebende Scrollbar");
    m.setAttribute('type', 'checkbox');
    m.setAttribute('autocheck', 'false');
    m.setAttribute('checked', enabled);
    p.parentNode.insertBefore(m, p);
    m.addEventListener('command', command, false);

    if (enabled) {
        sss.loadAndRegisterSheet(uri, sss.AGENT_SHEET);
    }

    function command() {
        if (sss.sheetRegistered(uri, sss.AGENT_SHEET)) {
            prefs.setBoolPref('userChromeJS.floating_scrollbar.enabled', false);
            sss.unregisterSheet(uri, sss.AGENT_SHEET);
            m.setAttribute('checked', false);
        } else {
            prefs.setBoolPref('userChromeJS.floating_scrollbar.enabled', true);
            sss.loadAndRegisterSheet(uri, sss.AGENT_SHEET);
            m.setAttribute('checked', true);
        }

        let root = document.documentElement;
        let display = root.style.display;
        root.style.display = 'none';
        window.getComputedStyle(root).display; // Flush
        root.style.display = display;
    }

})();
