// ==UserScript==
// @name          USConfig's Sample - Themes
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

// build function factory
function buildFunc(theme) {
  return function() { with (this.builder) {

    var options_1 = ["BSD", "Linux", "Mac", "Windows"];
    var options_2 = ["CentOS", "Debian", "Fedora", "Ubuntu"];

    dialog(
      "Title",
      { width: 500, height: 400, theme: theme },

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
  }};
}

// built-in themes
Config.define('usc_default', buildFunc('default'));
Config.define('usc_blue',    buildFunc('blue'));
Config.define('usc_brown',   buildFunc('brown'));
Config.define('usc_cyan',    buildFunc('cyan'));
Config.define('usc_green',   buildFunc('green'));
Config.define('usc_magenta', buildFunc('magenta'));
Config.define('usc_navy',    buildFunc('navy'));
Config.define('usc_red',     buildFunc('red'));

GM_registerMenuCommand("USConfig Sample - Default",
  function() { Config.open('usc_default'); });

GM_registerMenuCommand("USConfig Sample - Blue",
  function() { Config.open('usc_blue'); });

GM_registerMenuCommand("USConfig Sample - Brown",
  function() { Config.open('usc_brown'); });

GM_registerMenuCommand("USConfig Sample - Cyan",
  function() { Config.open('usc_cyan'); });

GM_registerMenuCommand("USConfig Sample - Green",
  function() { Config.open('usc_green'); });

GM_registerMenuCommand("USConfig Sample - Magenta",
  function() { Config.open('usc_magenta'); });

GM_registerMenuCommand("USConfig Sample - Navy",
  function() { Config.open('usc_navy'); });

GM_registerMenuCommand("USConfig Sample - Red",
  function() { Config.open('usc_red'); });

// user-defined themes
Config.define('usc_user_1', buildFunc({
  main_color : '#ff6600',
  sub_color  : '#66cc00',
  bg_color   : '#ff9900',
}));

Config.define('usc_user_2', buildFunc({
  main_color : '#ffff66', section_title_fg_color: '#474747',
  sub_color  : '#66cc66',
  bg_color   : '#ccff99',
}));
// You can specify colors and border widths of a theme in more detail.
// See the definition of Builder's _style() method.

GM_registerMenuCommand("USConfig Sample - User Defined 1",
  function() { Config.open('usc_user_1'); });

GM_registerMenuCommand("USConfig Sample - User Defined 2",
  function() { Config.open('usc_user_2'); });

// vim: filetype=javascript
