// ==UserScript==
// @name         OptivumColorizer
// @namespace    http://tampermonkey.net/
// @version      0.12
// @description  Makes better view of lesson plan and colorize it.
// @author       TheQuake
// @require      http://code.jquery.com/jquery-latest.js
// @require      http://cdnjs.cloudflare.com/ajax/libs/seedrandom/2.4.3/seedrandom.min.js
// @include      http://89.231.4.135/files/plan_zs1/index.html
// @include      http://89.231.4.135/files/plan_zs1/plany/*
// @updateURL	 https://raw.githubusercontent.com/MeQuake/OptivumColorizer/master/optivumcolorizer.js
// @downloadURL  https://raw.githubusercontent.com/MeQuake/OptivumColorizer/master/optivumcolorizer.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
        var seedCount = 0;
        var subjectColors = [{}];
        var calculateColor = function() {
            var color = '#';
            Math.seedrandom(seedCount);
            for(var i = 0; i < 3; i++) {
                color += parseInt((Math.random()*255)).toString(16);
            }
            return color;
        };
        $(".l", $(this).context).each(function(index, content) {
            $("span", content).each(function(i, c) {
                if ($(c).text().search("1/2") != -1) {
                    $("br", content).remove(); //usuwa niepotrzebne zakończenia linii
                    c.remove(); //usuwa lekcje dla grupy w której się nie znajdujemy
                }
                var subjectName = $(c).text();
                var color = "";
                var found = false;
                $(subjectColors).each(function(i, subject) {
                    if(subject.name == subjectName) {
                        color = subject.color;
                        found = true;
                    }
                });
                if(!found) {
                    color = calculateColor();
                    subjectColors.push({ name: subjectName, color: color });
                    seedCount++;
                }
                $(c).css('color', color);
            });
        });
})();