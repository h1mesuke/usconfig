// ==UserScript==
// @name          USConfig's Sample - I18n
// @description   USConfig's Sample
// @namespace     http://d.hatena.ne.jp/h1mesuke/
// @author        h1mesuke
// @version       0.0.1
// @require       http://github.com/h1mesuke/usconfig/raw/v1.02/usconfig.js
// @include       http://*
// @include       https://*
// ==/UserScript==
//
// Copyright (c) 2010 h1mesuke
//
// Licensed under the MIT license:
// http://www.opensource.org/licenses/mit-license.php

Config.debug = false;
var autoOpen = 0;

Config.locale.addTranslation('en', {
  'title'        : "Title",
  'section'      : "Section ${i}",
  'section_desc' : "This is a description of section ${i}. [optional]",
  'button'       : "Button ${i}",
  'clicked'      : "Button ${i} was clicked!",
  'checkbox'     : "Checkbox ${i}",
  'radio'        : "Radio ${i}",
  'select'       : "Select ${i}",
  'text'         : "Text ${i}",
  'string'       : "String",
  'integer'      : "Integer ${i}",
  'number'       : "Number ${i}",
  'textarea'     : "Textarea ${i}",
  'static_text'  : "This is a static text ${i}.",
  'saved_msg'    : "Seved settings are:\n\n",
});

Config.locale.addTranslation('ja', {
  'title'        : "設定画面のタイトル",
  'section'      : "セクション ${i}",
  'section_desc' : "これはセクション ${i} の説明文です。（省略可）",
  'button'       : "ボタン ${i}",
  'clicked'      : "ボタン ${i} がクリックされました！",
  'checkbox'     : "チェックボックス ${i}",
  'radio'        : "ラジオボタン ${i}",
  'select'       : "選択リスト ${i}",
  'text'         : "テキスト ${i}",
  'string'       : "文字列",
  'integer'      : "整数 ${i}",
  'number'       : "数値 ${i}",
  'textarea'     : "テキストエリア ${i}",
  'static_text'  : "スタティックテキスト ${i}",
  'saved_msg'    : "保存された設定値は以下の通りです。\n\n",
});

Config.define('usc_i18n', function() { with (this.builder) {
  var systems = ["BSD", "Linux", "Mac", "Windows"];
  var dists = ["CentOS", "Debian", "Fedora", "Ubuntu"];

  dialog(
    _('title'),
    { width: 500, height: 400 },
    section(
      _('section', {i:1}),
      _('section_desc', {i:1}),
      grid(
        // buttons
        button(_('button', {i:1}), 'action_1',
          function() { alert(_('clicked', {i:1})); }),

        button(_('button', {i:2}), 'action_2',
          function() { alert(_('clicked', {i:2})); }),

        button(_('button', {i:3}), 'action_3',
          function() { alert(_('clicked', {i:3})); }),
        null
      ),
      grid(
        // checkboxes
        checkbox(_('checkbox', {i:1}), 'checkbox_1', true ),
        checkbox(_('checkbox', {i:2}), 'checkbox_2', false),
        checkbox(_('checkbox', {i:3}), 'checkbox_3', true), '\n',
        checkbox(_('checkbox', {i:4}), 'checkbox_4', false),
        checkbox(_('checkbox', {i:5}), 'checkbox_5', true ),
        checkbox(_('checkbox', {i:6}), 'checkbox_6', false),
        null
      ),
      grid(
        // radio buttons
        radio(_('radio', {i:1}), 'radio_1', systems, "Linux"), '\n',
        radio(_('radio', {i:2}), 'radio_2', systems, "Mac"),
        null
      ),
      grid(
        // select controls
        select(_('select', {i:1}), 'select_1', dists, "Ubuntu"),
        select(_('select', {i:2}), 'select_2', dists, "Debian"),
        null
      ),
      null
    ),
    section(
      _('section', {i:2}),
      _('section_desc', {i:2}),
      grid(
        // text fields
        text(_('text', {i:1}), 'text_1', _('string')),
        text(_('text', {i:2}), 'text_2', _('string')), '\n',
        integer(_('integer', {i:1}), 'integer_1', 100),
        integer(_('integer', {i:2}), 'integer_2', 100), '\n',
        number(_('number', {i:1}), 'number_1', 3.14),
        number(_('number', {i:2}), 'number_2', 3.14),
        null
      ),
      grid(
        // text area
        textarea(_('textarea', {i:1}), 'textarea_1', _('string'), { label: 'top' }),
        textarea(_('textarea', {i:2}), 'textarea_2', _('string'), { label: 'top' }),
        null
      ),
      grid(
        // static texts
        staticText(_('static_text', {i:1})),
        staticText(_('static_text', {i:2})),
        staticText(_('static_text', {i:3})),
        null
      ),
      null
    ),
    null
  );
}}, {
  aftersave: function() {
    var msg = Config.locale.localizedString('saved_msg');
    for (var id in this.settings) {
      msg = msg + id + " = " + this.settings[id] + "\n";
    }
    alert(msg);
  },
});

GM_registerMenuCommand("USConfig Sample - I18n", Config.open);
if (autoOpen) window.addEventListener('load', function() { Config.open(); }, false);

// vim: filetype=javascript
