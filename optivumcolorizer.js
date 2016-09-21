// ==UserScript==
// @name         OptivumColorizer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Nic szczególnego
// @author       TheQuake
// @require      http://code.jquery.com/jquery-latest.js
// @include      http://89.231.4.135/files/plan_zs1/index.html
// @include      http://89.231.4.135/files/plan_zs1/plany/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
        $(".l", $(this).context).each(function(index, content) {
            $("span", content).each(function(i, c) {
                if ($(c).text().search("1/2") != -1) {
                    $("br", content).remove(); //usuwa niepotrzebne zakończenia linii
                    c.remove(); //usuwa lekcje dla grupy w której się nie znajdujemy
                }
                var lessonCheck = function(c, lesson) { //funkcja sprawdzająca czy w komórce znajduje się dana lekcja
                    if ($(c).text().search(lesson) != -1) {
                        return true;
                    } else {
                        return false;
                    }
                };
                switch (true) {
                    case lessonCheck(c, "angielski"):
                        $(c).css('color', 'red');
                        break;
                    case lessonCheck(c, "matematyka"):
                        $(c).css('color', 'blue');
                        break;
                    case lessonCheck(c, "polski"):
                        $(c).css('color', 'DarkMagenta');
                        break;
                    case lessonCheck(c, "godz.wych"):
                        $(c).css('color', 'DarkGreen');
                        break;
                    case lessonCheck(c, "religia"):
                        $(c).css('color', 'SkyBlue');
                        break;
                    case lessonCheck(c, "HIS"):
                        $(c).css('color', 'Aquamarine');
                        break;
                    case lessonCheck(c, "wf"):
                        $(c).css('color', 'BurlyWood');
                        break;
                    case lessonCheck(c, "adm. baz"):
                        $(c).css('color', 'DarkOrange');
                        break;
                    case lessonCheck(c, "progr. aplik"):
                        $(c).css('color', 'DarkSlateBlue');
                        break;
                    case lessonCheck(c, "witryny"):
                        $(c).css('color', 'OliveDrab');
                        break;
                }
            });
        });
})();