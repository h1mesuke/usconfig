// ==UserScript==
// @name          USConfig's Sample - Basic
// @description   USConfig's Sample
// @namespace     http://d.hatena.ne.jp/h1mesuke/
// @author        h1mesuke
// @version       1.1.1
// @require       https://github.com/h1mesuke/usconfig/raw/v1.11/usconfig.js
// @include       http://*
// @include       https://*
// ==/UserScript==
//
// Copyright (c) 2010 h1mesuke
//
// Licensed under the MIT license:
// http://www.opensource.org/licenses/mit-license.php

Config.debug = true;
var autoOpen = 0;

Config.define('usc_basic', function() { with (this.builder) {

  var options_1 = ["BSD", "Linux", "Mac", "Windows"];
  var options_2 = ["CentOS", "Debian", "Fedora", "Ubuntu"];

  dialog(
    "Title",
    { width: 500, height: 400 },

    section(
      "Section 1",
      "This is a description of section 1. [optional]",

      grid(
        // buttons
        button("Button 1", 'button_1',
          function() { alert("Button 1 was clicked!"); }),

        button("Button 2", 'button_2',
          function() { alert("Button 2 was clicked!"); }),

        button("Button 3", 'button_3',
          function() { alert("Button 3 was clicked!"); })
      ),
      grid(
        // checkboxes
        checkbox("Checkbox 1", 'checkbox_1', true ),
        checkbox("Checkbox 2", 'checkbox_2', false),
        checkbox("Checkbox 3", 'checkbox_3', true), '\n',
        checkbox("Checkbox 4", 'checkbox_4', false),
        checkbox("Checkbox 5", 'checkbox_5', true ),
        checkbox("Checkbox 6", 'checkbox_6', false)
      ),
      grid(
        // radio buttons
        radio("Radio 1", 'radio_1', options_1, "Linux"), '\n',
        radio("Radio 2", 'radio_2', options_1, "Mac")
      ),
      grid(
        // select controls
        select("Select 1", 'select_1', options_2, "Ubuntu"),
        select("Select 2", 'select_2', options_2, "Debian")
      )
    ),
    section(
      "Section 2",
      "This is a description of section 2. [optional]",

      grid(
        // text fields
        text("Text 1", 'text_1', "String"),
        text("Text 2", 'text_2', "String"), '\n',
        integer("Integer 1", 'integer_1', 100),
        integer("Integer 2", 'integer_2', 100), '\n',
        number( "Number 1", 'number_1', 3.14),
        number( "Number 2", 'number_2', 3.14)
      ),
      grid(
        // text area
        textarea("Textarea 1", 'textarea_1', "String", { label: 'top' }),
        textarea("Textarea 2", 'textarea_2', "String", { label: 'top' })
      ),
      grid(
        // static texts
        staticText("This is a static text 1"),
        staticText("This is a static text 2"),
        staticText("This is a static text 3")
      )
    )
  );
}}, {
  aftersave: function() {
    var msg = "Seved settings are:\n\n";
    for (var id in this.settings) {
      msg = msg + id + " = " + this.settings[id] + "\n";
    }
    alert(msg);
  },
});

Config.load();

GM_registerMenuCommand("USConfig Sample", Config.open);
if (autoOpen) window.addEventListener('load', function() { Config.open(); }, false);

// vim: filetype=javascript
