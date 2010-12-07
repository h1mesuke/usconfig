// ==UserScript==
// @name          USConfig's Sample - Complex Layouts
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

Config.define('usc_complex_layouts', function() { with (this.builder) {

  var options = ["CentOS", "Debian", "Fedora", "Ubuntu"];

  dialog(
    "Complex Layouts",
    { width: 500, height: 400 },

    section(
      "Nested Grids",
      "Grids can be nested.",

      grid(
        grid(
          checkbox("Checkbox 1", 'checkbox_1', true ),
          checkbox("Checkbox 2", 'checkbox_2', false), '\n',
          checkbox("Checkbox 3", 'checkbox_3', false),
          checkbox("Checkbox 4", 'checkbox_4', true)
        ),
        grid(
          button("Button 1", 'button_1',
            function() { alert("Button 1 was clicked!"); })
        ),
        '\n',
        grid(
          select("Select 1", 'select_1', options, "Ubuntu")
        ),
        grid(
          checkbox("Checkbox 5", 'checkbox_5', true ),
          checkbox("Checkbox 6", 'checkbox_6', false), '\n',
          checkbox("Checkbox 7", 'checkbox_7', false),
          checkbox("Checkbox 8", 'checkbox_8', true)
        ),
        '\n',
        grid(
          text("Text 1", 'text_1', "String"), '\n',
          integer("Integer 1", 'integer_1', 100), '\n',
          number( "Number 1", 'number_1', 3.14)
        ),
        textarea("Textarea 1", 'textarea_1', "String", { label: 'top', cols: 20 })
      )
    ),
    section(
      "Manual Layouts",
      "You can control table cell's content manually.",

      grid(
        { layout: 'manual' },
        checkbox("Checkbox 9", 'checkbox_9', true ),
        checkbox("Checkbox 10", 'checkbox_10', false), '|',
        checkbox("Checkbox 11", 'checkbox_11', false),
        checkbox("Checkbox 12", 'checkbox_12', true), '\n',
        textarea(null, 'textarea_2', "String", { cols: 20 }), '|',
        textarea(null, 'textarea_3', "String", { cols: 20 })
      )
    )
  );
}}, {
  aftersave: function() {
    var msg = "Seved settings are:\n\n";
    for (var id in this.settings) {
      msg = msg + id + " = " + this.settings[id] + '\n';
    }
    alert(msg);
  },
});

GM_registerMenuCommand("USConfig Sample - Complex Layouts", Config.open);
if (autoOpen) window.addEventListener('load', function() { Config.open(); }, false);

// vim: filetype=javascript
