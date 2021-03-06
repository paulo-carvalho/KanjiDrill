/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    var app = {
    initialize: function() { ... }    
    bindEvents: function() { ... }    

    onDeviceReady: function() {
        <!doctype html>
<html class="no-js" lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Kanji Drill</title>
    <link rel="stylesheet" href="css/foundation.css" />
    <link rel="stylesheet" href="css/main.css" />
    <link rel="stylesheet" href="css/responsive.css" />
    <link rel="stylesheet" href="fonts/foundation-icons/foundation-icons.css" />

    <script src="js/vendor/modernizr.js"></script>

    <!-- Fav Icon -->
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="icon" href="favicon.ico" type="image/x-icon">

    <link rel="apple-touch-icon" href="img/icon_sakura.png">
    <link rel="apple-touch-icon" sizes="114x114" href="img/icon_sakura.png">
    <link rel="apple-touch-icon" sizes="72x72" href="img/icon_sakura.png">
    <link rel="apple-touch-icon" sizes="144x144" href="img/icon_sakura.png">
    <!-- End of Fav Icon -->
</head>

<body class="lobby">
    <!-- Playback sound. TODO: add mute/unmute option -->
    <audio id="music-lobby" autoplay="autoplay" loop="true" volume="0.5">
        <source src="sound/lobby.wav" type="audio/wav">
    </audio>

    <div class="row">
        <div class="large-11 medium-11 small-10 columns">
            <!-- Title wrapped in span tags to avoid word-break on cellphones -->
            <h1>
                <span class="japanese-words">単語</span>
                <span class="japanese-words">ドリル</span>　
                <span class="japanese-words">ようこそ</span>
            </h1>
        </div>
        <div class="large-1 medium-1 small-2 columns">
            <h1><i class="fi-volume text-right music-volume"></i></h1>
        </div>
    </div>

    <div class="row">
        <div class="large-12 columns">
            <div class="panel gueisha">
                <h3>We hope that Kanji Drill helps you out! </h3>

                <p>Kanji Drill was made for the Japanese program at Lehman College, The City University of New York. This was developed by Japanese students for Japanese students who are interested in improving their knowledge in kanji reading.</p>

                <p>Please send any feedback to: <a href="mailto:asako.tochika@lehman.cuny.edu"><strong>asako.tochika@lehman.cuny.edu</strong></a></p>

                <p><a href="http://japanese-lehman.info/">Japanese Program Website</a></p>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="large-12 columns">
            <hr />
        </div>
    </div>

    <div class="row">
        <div class="large-12 medium-12 columns">
            <h3>Choose a chapter to get started:</h3>

            <div class="row">
                <div class="large-6 medium-6 medium-uncollapse small-6 columns">
                    <h5><strong>げんき I</strong></h5>
                    <form class="chapter-form large-6 medium-6 small-12 columns" action="content/content.html?chapter=01" method="post">
                        <button type="submit" class="large secondary">
                            第01課
                        </button>
                    </form>
                    <form class="chapter-form large-6 medium-6 small-12 columns" action="content/content.html?chapter=02" method="post">
                     <button type="submit" class="large secondary">
                            第02課
                     </button>
                    </form>
                    <form class="chapter-form large-6 medium-6 small-12 columns" action="content/content.html?chapter=03" method="post">
                     <button type="submit" class="large secondary">
                            第03課
                     </button>
                    </form>
                    <form class="chapter-form large-6 medium-6 small-12 columns" action="content/content.html?chapter=04" method="post">
                        <button type="submit" class="large secondary">
                            第04課
                        </button>
                    </form>
                    <form class="chapter-form large-6 medium-6 small-12 columns" action="content/content.html?chapter=05" method="post">
                        <button type="submit" class="large secondary">
                            第05課
                        </button>
                    </form>
                    <form class="chapter-form large-6 medium-6 small-12 columns" action="content/content.html?chapter=06" method="post">
                        <button type="submit" class="large secondary">
                            第06課
                        </button>
                    </form>
                    <form class="chapter-form large-6 medium-6 small-12 columns" action="content/content.html?chapter=07" method="post">
                        <button type="submit" class="large secondary">
                            第07課
                        </button>
                    </form>
                    <form class="chapter-form large-6 medium-6 small-12 columns" action="content/content.html?chapter=08" method="post">
                        <button type="submit" class="large secondary">
                            第08課
                        </button>
                    </form>
                    <form class="chapter-form large-6 medium-6 small-12 columns" action="content/content.html?chapter=09" method="post">
                        <button type="submit" class="large secondary">
                            第09課
                        </button>
                    </form>
                    <form class="chapter-form large-6 medium-6 small-12 columns" action="content/content.html?chapter=10" method="post">
                        <button type="submit" class="large secondary">
                            第10課
                        </button>
                    </form>
                    <form class="chapter-form large-6 medium-6 small-12 columns" action="content/content.html?chapter=11" method="post">
                        <button type="submit" class="large secondary">
                            第11課
                        </button>
                    </form>
                    <form class="chapter-form large-6 medium-6 small-12 columns" action="content/content.html?chapter=12" method="post">
                        <button type="submit" class="large secondary">
                            第12課
                        </button>
                    </form>
                </div>
                <div class="large-6 medium-6 small-6 columns">
                    <h5><strong>げんき II</strong></h5>
                    <form class="chapter-form large-6 medium-6 small-12 columns" action="content/content.html?chapter=13" method="post">
                        <button type="submit" class="large success">
                            第13課
                        </button>
                    </form>
                    <form class="chapter-form large-6 medium-6 small-12 columns" action="content/content.html?chapter=14" method="post">
                        <button type="submit" class="large success">
                            第14課
                        </button>
                    </form>
                    <form class="chapter-form large-6 medium-6 small-12 columns" action="content/content.html?chapter=15" method="post">
                        <button type="submit" class="large success">
                            第15課
                        </button>
                    </form>
                    <form class="chapter-form large-6 medium-6 small-12 columns" action="content/content.html?chapter=16" method="post">
                        <button type="submit" class="large success">
                            第16課
                        </button>
                    </form>
                    <form class="chapter-form large-6 medium-6 small-12 columns" action="content/content.html?chapter=17" method="post">
                        <button type="submit" class="large success">
                            第17課
                        </button>
                    </form>
                    <form class="chapter-form large-6 medium-6 small-12 columns" action="content/content.html?chapter=18" method="post">
                        <button type="submit" class="large success">
                            第18課
                        </button>
                    </form>
                    <form class="chapter-form large-6 medium-6 small-12 columns" action="content/content.html?chapter=19" method="post">
                        <button type="submit" class="large success">
                            第19課
                        </button>
                    </form>
                    <form class="chapter-form large-6 medium-6 small-12 columns" action="content/content.html?chapter=20" method="post">
                        <button type="submit" class="large success">
                            第20課
                        </button>
                    </form>
                    <form class="chapter-form large-6 medium-6 small-12 columns" action="content/content.html?chapter=21" method="post">
                        <button type="submit" class="large success">
                            第21課
                        </button>
                    </form>
                    <form class="chapter-form large-6 medium-6 small-12 columns" action="content/content.html?chapter=22" method="post">
                        <button type="submit" class="large success">
                            第22課
                        </button>
                    </form>
                    <form class="chapter-form large-6 medium-6 small-12 columns" action="content/content.html?chapter=23" method="post">
                        <button type="submit" class="large success">
                            第23課
                        </button>
                    </form>
                </div>
            </div>

        </div>
    </div>

    <div class="row">
        <div class="large-12 columns">
            <hr />
        </div>
    </div>

    <div class="row">
        <div class="large-12 columns">
            <div class="panel">
                <p>If you are a developer, you can also check our <a href="https://github.com/paulo-carvalho/KanjiDrill" target="_blank">Github project</a></p>
            </div>
        </div>
    </div>

    <script src="js/vendor/jquery.js"></script>
    <script src="js/foundation.min.js"></script>
    <script src="js/content.js"></script>

    <script src="js/URI.js"></script>
    <!--  For mobile devices  -->
    <script src="cordova.js"></script>
    <script src="js/media.js"></script>
    <script>
        $(document).foundation();

        $(".music-volume").click(function() {
            if($(this).hasClass("fi-volume")) {
                $(this).removeClass("fi-volume").addClass("fi-volume-strike");
                document.getElementById("music-lobby").pause();
            } else {
                $(this).removeClass("fi-volume-strike").addClass("fi-volume");
                document.getElementById("music-lobby").play();
            }
        });

        // Wait for device API libraries to load
        document.addEventListener("deviceready", onDeviceReady, false);

        // device APIs are available
        function onDeviceReady() {
            navigator.splashscreen.show();
            playAudio();
        }

        var my_media = null;

        function playAudio() {
            // Create media to play using audio source
            my_media = new Media('../sound/lobby.wav', onSuccess);
        }

        function onSuccess() {
            // Play audio
            my_media.play();
        }

    </script>
</body>
</html>
    }
};

app.initialize();
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();