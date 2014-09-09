/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var EXPORTED_SYMBOLS = ['AutoSearchFolder'];

var Cc = Components.classes;
var Ci = Components.interfaces;
var Cu = Components.utils;
var Cr = Components.results;

Cu.import('resource://auto-search-folder-modules/SearchFolderManager.jsm');

var AutoSearchFolder = {
  BASE: 'extensions.auto-search-folder@clear-code.com.',

  get prefs() {
    delete this.prefs;
    let { prefs } = Components.utils.import('resource://auto-search-folder-modules/prefs.js', {});
    return this.prefs = prefs;
  },

  get definitions() {
    delete this.definitions;
    var base = this.BASE + 'folders.';
    this.definitions = [];
    var labelPattern = /\.label$/;
    this.prefs.getDescendant(base).forEach(function(aName) {
      aName = aName.replace(base, '');
      if (!labelPattern.test(aName))
        return
      var type = aName.replace(labelPattern, '');
      this.definitions.push(this.getDefinition(type));
    });
    return this.definitions;
  },

  getDefinition: function(aType) {
    var base = this.BASE + 'folders.' + aType + '.';
    return {
      label:         this.prefs.getLocalizedPref(base + 'label'),
      conditions:    this.prefs.getLocalizedPref(base + 'conditions'),
      subjectPrefix: this.prefs.getLocalizedPref(base + 'subjectPrefix'),
      subject:       this.prefs.getLocalizedPref(base + 'subject'),
      searchTargets: this.prefs.getLocalizedPref(base + 'searchTargets')
    };
  }
};

new SearchFolderManager(AutoSearchFolder.definitions);
