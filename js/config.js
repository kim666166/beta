/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.05
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "images/logo.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "UDT|SEAL해군특수전전단";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"backgrounds/images/1.jpg",
	"backgrounds/images/2.jpg",
	"backgrounds/images/3.jpg",
	"backgrounds/images/4.jpg",
	"backgrounds/images/5.jpg",
	"backgrounds/images/6.jpg",
	"backgrounds/images/7.jpg"
];

/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{youtube: "XqgmayuleBs", name: "케이윌(K.Will) & 매드 클라운(Mad Clown) - 그게 뭐라고"},
	{youtube: "MDu3xf884FQ", name: "우주를 줄게 - 볼빨간사춘기"},
	{youtube: "Q9sHLfhPMfw", name: "X Song - 볼빨간사춘기"},
	{youtube: "MtWQhmF3-NM", name: "임창정 - 내가 저지른 사랑"},
	{youtube: "Uhtp99HOuDE", name: "한동근 - 이 소설의 끝을 다시 써보려 해 "},
	{youtube: "XZqoLX8Gq78", name: "구르미 그린 달빛(구르미 그린 달빛 OST) - 거미"},
	{youtube: "VvU2WqhG25o", name: "마음을 삼킨다 (구르미 그린 달빛 OST) - 산들"},
	{youtube: "GPijmcjTfHM", name: "My All (끝에서 두 번째 사랑 OST) - 벤"},
	{youtube: "aZbH_ZEe4x0", name: "나만 안되는 연애 - 볼빨간사춘기"},
	{youtube: "ndR6hTZO47s", name: "녹는다 (구르미 그린 달빛 OST) - 케이윌"},
	{youtube: "8bmL9VCgkqQ", name: "다정하게, 안녕히 (구르미 그린 달빛 OST) - 성시경"},
	{youtube: "0Jd52OuVHdg", name: "잠은 다 잤나봐요 (구르미 그린 달빛 OST) - 소유, 유승우"},
	{youtube: "TEQ5Eb0CeMQ", name: "깍지 (구르미 그린 달빛 OST) - 이적"}
];

/*Random music order?*/
var l_musicRandom = true;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 80;

/*Enable custom messages?*/
var l_messagesEnabled = true;

/*Enter your custom messages below*/
var l_messages = [
"Designed by Jae Won Kim",
"쾌적한 환경에서 플레이 하세요!",
"아직 어드민은 뽑지 않습니다.",
"오픈베타중입니다.",
"오류가 많습니다. 차차 수정중이오니 송구하지만 불편해도 플레이 해주세요.",
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;