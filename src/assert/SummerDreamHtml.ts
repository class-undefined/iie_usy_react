export const SummerDreamHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="apple-touch-icon" sizes="180x180" href="https://kai666666.com/images/apple-touch-icon-next.png?v=5.1.4">
    <link rel="icon" type="image/png" sizes="32x32" href="https://kai666666.com/images/favicon-32x32-next.png?v=5.1.4">
    <link rel="icon" type="image/png" sizes="16x16" href="https://kai666666.com/images/favicon-16x16-next.png?v=5.1.4">
    <title>纯CSS划船效果</title>
    <style>
        body {
            background: #fff;
            height: 100vh;
            overflow: hidden;
            display: -webkit-box;
            display: flex;
            font-family: 'Anton', sans-serif;
            -webkit-box-pack: center;
            justify-content: center;
            -webkit-box-align: center;
            align-items: center;
            -webkit-perspective: 500px;
            perspective: 500px;
        }

        div {
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
        }

        .sea {
            position: absolute;
            left: -155px;
            top: -100px;
        }
        .sea .surface {
            position: absolute;
            height: 200px;
            width: 300px;
            background: #2BE3FA;
            overflow: hidden;
            -webkit-animation: surface 13000ms ease-in-out infinite alternate, rotateZ 20000ms linear infinite;
            animation: surface 13000ms ease-in-out infinite alternate, rotateZ 20000ms linear infinite;
        }
        .sea .surface .inner {
            width: 400px;
            height: 300px;
            animation: rotateZ 20000ms linear infinite reverse;
        }

        .fish {
            position: absolute;
            top: 100px;
            left: 200px;
        }
        .fish .body {
            position: absolute;
            width: 20px;
            height: 5px;
            background: #1971B3;
            border-radius: 100%;
        }
        .fish .body::before {
            content: '';
            position: absolute;
            top: -3px;
            left: 12px;
            width: 2px;
            height: 5px;
            background: #1971B3;
            border-radius: 100% 100% 0 0;
            -webkit-transform: rotateZ(-30deg);
            transform: rotateZ(-30deg);
        }
        .fish .body::after {
            content: '';
            position: absolute;
            top: 3px;
            left: 12px;
            width: 2px;
            height: 5px;
            background: #1971B3;
            border-radius: 100% 100% 0 0;
            -webkit-transform: rotateZ(30deg);
            transform: rotateZ(30deg);
        }

        .ship {
            position: absolute;
            top: -15px;
            left: -50px;
            -webkit-filter: drop-shadow(-30px 40px 0 rgba(0, 0, 0, 0.1));
            filter: drop-shadow(-30px 40px 0 rgba(0, 0, 0, 0.1));
        }
        .ship .rotate {
            -webkit-transform: rotateZ(10deg);
            transform: rotateZ(10deg);
            -webkit-animation: ship 30000ms linear infinite alternate;
            animation: ship 30000ms linear infinite alternate;
        }
        .ship .human {
            position: absolute;
            top: 0;
            left: 40px;
        }
        .ship .human .hat {
            position: absolute;
            width: 30px;
            height: 30px;
            background: #F0F09E;
            border-radius: 100%;
            -webkit-animation: hat 1000ms ease-in-out infinite alternate;
            animation: hat 1000ms ease-in-out infinite alternate;
        }
        .ship .human .hat::before {
            content: '';
            position: absolute;
            top: 7px;
            left: 7px;
            width: 16px;
            height: 16px;
            border: 1px solid #D9845D;
            border-radius: 100%;
            box-sizing: border-box;
            -webkit-transform: translateZ(5px);
            transform: translateZ(5px);
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
        }
        .ship .human .leg {
            position: absolute;
            width: 20px;
            height: 8px;
            background: #0849A3;
            border-radius: 40%;
        }
        .ship .human .leg::before {
            content: '';
            position: absolute;
            left: -4px;
            width: 5px;
            height: 7px;
            background: #fff;
            border-radius: 40%;
        }
        .ship .human .leg.-left {
            top: 16px;
            left: -10px;
            -webkit-transform: rotateZ(-5deg);
            transform: rotateZ(-5deg);
        }
        .ship .human .leg.-left::before {
            top: 1px;
        }
        .ship .human .leg.-right {
            top: 6px;
            left: -10px;
            -webkit-transform: rotateZ(5deg);
            transform: rotateZ(5deg);
        }
        .ship .human .leg.-right::before {
            top: -1px;
        }
        .ship .body {
            position: relative;
        }
        .ship .body .base {
            width: 100px;
            height: 30px;
            background: #D9845D;
            border-radius: 45% 45% 45% 45%;
        }
        .ship .body .base::before {
            content: '';
            position: absolute;
            top: 2px;
            left: 2px;
            width: 96px;
            height: 26px;
            background: #DEAD5E;
            border-radius: 100%;
            border-radius: 45% 45% 45% 45%;
        }
        .ship .body .board {
            position: absolute;
            top: 5px;
            width: 10px;
            height: 20px;
            background: #D9845D;
            border-radius: 2px;
        }
        .ship .body .board.-front {
            right: 20px;
        }
        .ship .body .board.-back {
            left: 20px;
        }
        .ship .body .waves {
            position: absolute;
        }
        .ship .body .waves .wave {
            position: absolute;
            -webkit-animation: wave 2000ms linear infinite;
            animation: wave 2000ms linear infinite;
        }
        .ship .body .waves .wave .graphic {
            background: #fff;
            -webkit-animation: surface 2000ms ease-in-out infinite alternate, rotateZ 6000ms linear infinite;
            animation: surface 2000ms ease-in-out infinite alternate, rotateZ 6000ms linear infinite;
        }
        .ship .body .waves .bodywaves .wave:nth-child(1) {
            top: 14px;
            left: 33px;
            -webkit-animation-delay: -1983ms;
            animation-delay: -1983ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(1) .graphic {
            width: 11px;
            height: 15px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(2) {
            top: 11px;
            left: 24px;
            -webkit-animation-delay: -2120ms;
            animation-delay: -2120ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(2) .graphic {
            width: 17px;
            height: 16px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(3) {
            top: 14px;
            left: 52px;
            -webkit-animation-delay: -2637ms;
            animation-delay: -2637ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(3) .graphic {
            width: 16px;
            height: 14px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(4) {
            top: 5px;
            left: 49px;
            -webkit-animation-delay: -596ms;
            animation-delay: -596ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(4) .graphic {
            width: 17px;
            height: 16px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(5) {
            top: 14px;
            left: 46px;
            -webkit-animation-delay: -2328ms;
            animation-delay: -2328ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(5) .graphic {
            width: 13px;
            height: 13px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(6) {
            top: 16px;
            left: 41px;
            -webkit-animation-delay: -1982ms;
            animation-delay: -1982ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(6) .graphic {
            width: 9px;
            height: 10px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(7) {
            top: 12px;
            left: 39px;
            -webkit-animation-delay: -1464ms;
            animation-delay: -1464ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(7) .graphic {
            width: 12px;
            height: 13px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(8) {
            top: 10px;
            left: 47px;
            -webkit-animation-delay: -746ms;
            animation-delay: -746ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(8) .graphic {
            width: 11px;
            height: 12px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(9) {
            top: 9px;
            left: 21px;
            -webkit-animation-delay: -1504ms;
            animation-delay: -1504ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(9) .graphic {
            width: 11px;
            height: 17px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(10) {
            top: 0px;
            left: 24px;
            -webkit-animation-delay: -2082ms;
            animation-delay: -2082ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(10) .graphic {
            width: 9px;
            height: 11px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(11) {
            top: 9px;
            left: 36px;
            -webkit-animation-delay: -1216ms;
            animation-delay: -1216ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(11) .graphic {
            width: 18px;
            height: 12px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(12) {
            top: 2px;
            left: 59px;
            -webkit-animation-delay: -1841ms;
            animation-delay: -1841ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(12) .graphic {
            width: 10px;
            height: 17px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(13) {
            top: 7px;
            left: 41px;
            -webkit-animation-delay: -2854ms;
            animation-delay: -2854ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(13) .graphic {
            width: 17px;
            height: 15px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(14) {
            top: 7px;
            left: 29px;
            -webkit-animation-delay: -2363ms;
            animation-delay: -2363ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(14) .graphic {
            width: 9px;
            height: 16px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(15) {
            top: 5px;
            left: 20px;
            -webkit-animation-delay: -1623ms;
            animation-delay: -1623ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(15) .graphic {
            width: 14px;
            height: 14px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(16) {
            top: 3px;
            left: 16px;
            -webkit-animation-delay: -2254ms;
            animation-delay: -2254ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(16) .graphic {
            width: 13px;
            height: 15px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(17) {
            top: 3px;
            left: 14px;
            -webkit-animation-delay: -516ms;
            animation-delay: -516ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(17) .graphic {
            width: 18px;
            height: 10px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(18) {
            top: 1px;
            left: 17px;
            -webkit-animation-delay: -3185ms;
            animation-delay: -3185ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(18) .graphic {
            width: 11px;
            height: 12px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(19) {
            top: 4px;
            left: 59px;
            -webkit-animation-delay: -2756ms;
            animation-delay: -2756ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(19) .graphic {
            width: 18px;
            height: 15px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(20) {
            top: 5px;
            left: 25px;
            -webkit-animation-delay: -1707ms;
            animation-delay: -1707ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(20) .graphic {
            width: 10px;
            height: 15px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(21) {
            top: 6px;
            left: 57px;
            -webkit-animation-delay: -2580ms;
            animation-delay: -2580ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(21) .graphic {
            width: 15px;
            height: 15px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(22) {
            top: 7px;
            left: 59px;
            -webkit-animation-delay: -1976ms;
            animation-delay: -1976ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(22) .graphic {
            width: 12px;
            height: 12px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(23) {
            top: 15px;
            left: 11px;
            -webkit-animation-delay: -1836ms;
            animation-delay: -1836ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(23) .graphic {
            width: 9px;
            height: 9px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(24) {
            top: -1px;
            left: 27px;
            -webkit-animation-delay: -3795ms;
            animation-delay: -3795ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(24) .graphic {
            width: 9px;
            height: 16px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(25) {
            top: 17px;
            left: 23px;
            -webkit-animation-delay: -446ms;
            animation-delay: -446ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(25) .graphic {
            width: 15px;
            height: 12px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(26) {
            top: 3px;
            left: 11px;
            -webkit-animation-delay: -2820ms;
            animation-delay: -2820ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(26) .graphic {
            width: 11px;
            height: 15px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(27) {
            top: 4px;
            left: 13px;
            -webkit-animation-delay: -219ms;
            animation-delay: -219ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(27) .graphic {
            width: 14px;
            height: 17px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(28) {
            top: 16px;
            left: 13px;
            -webkit-animation-delay: -1144ms;
            animation-delay: -1144ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(28) .graphic {
            width: 12px;
            height: 11px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(29) {
            top: 12px;
            left: 48px;
            -webkit-animation-delay: -131ms;
            animation-delay: -131ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(29) .graphic {
            width: 12px;
            height: 14px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(30) {
            top: 4px;
            left: 11px;
            -webkit-animation-delay: -546ms;
            animation-delay: -546ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(30) .graphic {
            width: 9px;
            height: 16px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(31) {
            top: 8px;
            left: 18px;
            -webkit-animation-delay: -371ms;
            animation-delay: -371ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(31) .graphic {
            width: 13px;
            height: 13px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(32) {
            top: 8px;
            left: 54px;
            -webkit-animation-delay: -3606ms;
            animation-delay: -3606ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(32) .graphic {
            width: 11px;
            height: 16px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(33) {
            top: 9px;
            left: 11px;
            -webkit-animation-delay: -3624ms;
            animation-delay: -3624ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(33) .graphic {
            width: 11px;
            height: 13px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(34) {
            top: -2px;
            left: 30px;
            -webkit-animation-delay: -2619ms;
            animation-delay: -2619ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(34) .graphic {
            width: 15px;
            height: 15px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(35) {
            top: 15px;
            left: 19px;
            -webkit-animation-delay: -2835ms;
            animation-delay: -2835ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(35) .graphic {
            width: 16px;
            height: 18px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(36) {
            top: 12px;
            left: 34px;
            -webkit-animation-delay: -1302ms;
            animation-delay: -1302ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(36) .graphic {
            width: 10px;
            height: 10px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(37) {
            top: 7px;
            left: 38px;
            -webkit-animation-delay: -2915ms;
            animation-delay: -2915ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(37) .graphic {
            width: 10px;
            height: 13px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(38) {
            top: 13px;
            left: 59px;
            -webkit-animation-delay: -79ms;
            animation-delay: -79ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(38) .graphic {
            width: 13px;
            height: 15px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(39) {
            top: -1px;
            left: 20px;
            -webkit-animation-delay: -3255ms;
            animation-delay: -3255ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(39) .graphic {
            width: 10px;
            height: 11px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(40) {
            top: 17px;
            left: 14px;
            -webkit-animation-delay: -2249ms;
            animation-delay: -2249ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(40) .graphic {
            width: 13px;
            height: 9px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(41) {
            top: 12px;
            left: 24px;
            -webkit-animation-delay: -3059ms;
            animation-delay: -3059ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(41) .graphic {
            width: 14px;
            height: 12px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(42) {
            top: 9px;
            left: 32px;
            -webkit-animation-delay: -2530ms;
            animation-delay: -2530ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(42) .graphic {
            width: 15px;
            height: 15px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(43) {
            top: 4px;
            left: 57px;
            -webkit-animation-delay: -578ms;
            animation-delay: -578ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(43) .graphic {
            width: 10px;
            height: 16px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(44) {
            top: 4px;
            left: 29px;
            -webkit-animation-delay: -187ms;
            animation-delay: -187ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(44) .graphic {
            width: 17px;
            height: 17px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(45) {
            top: 11px;
            left: 58px;
            -webkit-animation-delay: -2258ms;
            animation-delay: -2258ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(45) .graphic {
            width: 10px;
            height: 10px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(46) {
            top: 7px;
            left: 13px;
            -webkit-animation-delay: -3294ms;
            animation-delay: -3294ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(46) .graphic {
            width: 10px;
            height: 18px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(47) {
            top: 17px;
            left: 27px;
            -webkit-animation-delay: -1734ms;
            animation-delay: -1734ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(47) .graphic {
            width: 16px;
            height: 12px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(48) {
            top: 16px;
            left: 27px;
            -webkit-animation-delay: -1814ms;
            animation-delay: -1814ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(48) .graphic {
            width: 17px;
            height: 17px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(49) {
            top: 12px;
            left: 57px;
            -webkit-animation-delay: -2327ms;
            animation-delay: -2327ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(49) .graphic {
            width: 9px;
            height: 9px;
        }
        .ship .body .waves .bodywaves .wave:nth-child(50) {
            top: 5px;
            left: 26px;
            -webkit-animation-delay: -3525ms;
            animation-delay: -3525ms;
        }
        .ship .body .waves .bodywaves .wave:nth-child(50) .graphic {
            width: 13px;
            height: 18px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(1) {
            top: -18px;
            left: 47px;
            -webkit-animation-delay: -1780ms;
            animation-delay: -1780ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(1) .graphic {
            width: 7px;
            height: 6px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(2) {
            top: -22px;
            left: 46px;
            -webkit-animation-delay: -1159ms;
            animation-delay: -1159ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(2) .graphic {
            width: 6px;
            height: 7px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(3) {
            top: -20px;
            left: 42px;
            -webkit-animation-delay: -1245ms;
            animation-delay: -1245ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(3) .graphic {
            width: 8px;
            height: 8px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(4) {
            top: -29px;
            left: 44px;
            -webkit-animation-delay: -1005ms;
            animation-delay: -1005ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(4) .graphic {
            width: 9px;
            height: 7px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(5) {
            top: -13px;
            left: 48px;
            -webkit-animation-delay: -1514ms;
            animation-delay: -1514ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(5) .graphic {
            width: 7px;
            height: 9px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(6) {
            top: -23px;
            left: 42px;
            -webkit-animation-delay: -1384ms;
            animation-delay: -1384ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(6) .graphic {
            width: 6px;
            height: 10px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(7) {
            top: -14px;
            left: 44px;
            -webkit-animation-delay: -1107ms;
            animation-delay: -1107ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(7) .graphic {
            width: 9px;
            height: 10px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(8) {
            top: -24px;
            left: 48px;
            -webkit-animation-delay: -1132ms;
            animation-delay: -1132ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(8) .graphic {
            width: 8px;
            height: 6px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(9) {
            top: -19px;
            left: 48px;
            -webkit-animation-delay: -1618ms;
            animation-delay: -1618ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(9) .graphic {
            width: 8px;
            height: 10px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(10) {
            top: -13px;
            left: 42px;
            -webkit-animation-delay: -1569ms;
            animation-delay: -1569ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(10) .graphic {
            width: 10px;
            height: 6px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(11) {
            top: -29px;
            left: 42px;
            -webkit-animation-delay: -1569ms;
            animation-delay: -1569ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(11) .graphic {
            width: 6px;
            height: 7px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(12) {
            top: -26px;
            left: 41px;
            -webkit-animation-delay: -1547ms;
            animation-delay: -1547ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(12) .graphic {
            width: 10px;
            height: 9px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(13) {
            top: -18px;
            left: 50px;
            -webkit-animation-delay: -1633ms;
            animation-delay: -1633ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(13) .graphic {
            width: 8px;
            height: 8px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(14) {
            top: -11px;
            left: 41px;
            -webkit-animation-delay: -1549ms;
            animation-delay: -1549ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(14) .graphic {
            width: 9px;
            height: 6px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(15) {
            top: -10px;
            left: 43px;
            -webkit-animation-delay: -1416ms;
            animation-delay: -1416ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(15) .graphic {
            width: 7px;
            height: 8px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(16) {
            top: -29px;
            left: 41px;
            -webkit-animation-delay: -1729ms;
            animation-delay: -1729ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(16) .graphic {
            width: 6px;
            height: 8px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(17) {
            top: -20px;
            left: 42px;
            -webkit-animation-delay: -1361ms;
            animation-delay: -1361ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(17) .graphic {
            width: 9px;
            height: 9px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(18) {
            top: -12px;
            left: 49px;
            -webkit-animation-delay: -1497ms;
            animation-delay: -1497ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(18) .graphic {
            width: 8px;
            height: 9px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(19) {
            top: -17px;
            left: 43px;
            -webkit-animation-delay: -1484ms;
            animation-delay: -1484ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(19) .graphic {
            width: 6px;
            height: 6px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(20) {
            top: -22px;
            left: 46px;
            -webkit-animation-delay: -1385ms;
            animation-delay: -1385ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(20) .graphic {
            width: 8px;
            height: 8px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(21) {
            top: -12px;
            left: 48px;
            -webkit-animation-delay: -1188ms;
            animation-delay: -1188ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(21) .graphic {
            width: 7px;
            height: 8px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(22) {
            top: -25px;
            left: 44px;
            -webkit-animation-delay: -1185ms;
            animation-delay: -1185ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(22) .graphic {
            width: 8px;
            height: 9px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(23) {
            top: -20px;
            left: 50px;
            -webkit-animation-delay: -1780ms;
            animation-delay: -1780ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(23) .graphic {
            width: 9px;
            height: 9px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(24) {
            top: -13px;
            left: 42px;
            -webkit-animation-delay: -1747ms;
            animation-delay: -1747ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(24) .graphic {
            width: 9px;
            height: 9px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(25) {
            top: -24px;
            left: 42px;
            -webkit-animation-delay: -1002ms;
            animation-delay: -1002ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(25) .graphic {
            width: 10px;
            height: 10px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(26) {
            top: -11px;
            left: 50px;
            -webkit-animation-delay: -1545ms;
            animation-delay: -1545ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(26) .graphic {
            width: 8px;
            height: 7px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(27) {
            top: -29px;
            left: 42px;
            -webkit-animation-delay: -1444ms;
            animation-delay: -1444ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(27) .graphic {
            width: 9px;
            height: 10px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(28) {
            top: -16px;
            left: 45px;
            -webkit-animation-delay: -1667ms;
            animation-delay: -1667ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(28) .graphic {
            width: 10px;
            height: 8px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(29) {
            top: -19px;
            left: 43px;
            -webkit-animation-delay: -1192ms;
            animation-delay: -1192ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(29) .graphic {
            width: 7px;
            height: 6px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(30) {
            top: -16px;
            left: 50px;
            -webkit-animation-delay: -1519ms;
            animation-delay: -1519ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(30) .graphic {
            width: 10px;
            height: 6px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(31) {
            top: -24px;
            left: 47px;
            -webkit-animation-delay: -1639ms;
            animation-delay: -1639ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(31) .graphic {
            width: 8px;
            height: 9px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(32) {
            top: -18px;
            left: 49px;
            -webkit-animation-delay: -1345ms;
            animation-delay: -1345ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(32) .graphic {
            width: 9px;
            height: 8px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(33) {
            top: -18px;
            left: 48px;
            -webkit-animation-delay: -1626ms;
            animation-delay: -1626ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(33) .graphic {
            width: 9px;
            height: 10px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(34) {
            top: -23px;
            left: 41px;
            -webkit-animation-delay: -1441ms;
            animation-delay: -1441ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(34) .graphic {
            width: 9px;
            height: 7px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(35) {
            top: -15px;
            left: 45px;
            -webkit-animation-delay: -1045ms;
            animation-delay: -1045ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(35) .graphic {
            width: 9px;
            height: 7px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(36) {
            top: -23px;
            left: 42px;
            -webkit-animation-delay: -1295ms;
            animation-delay: -1295ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(36) .graphic {
            width: 9px;
            height: 8px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(37) {
            top: -23px;
            left: 49px;
            -webkit-animation-delay: -1510ms;
            animation-delay: -1510ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(37) .graphic {
            width: 8px;
            height: 9px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(38) {
            top: -23px;
            left: 47px;
            -webkit-animation-delay: -1649ms;
            animation-delay: -1649ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(38) .graphic {
            width: 7px;
            height: 8px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(39) {
            top: -12px;
            left: 44px;
            -webkit-animation-delay: -1585ms;
            animation-delay: -1585ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(39) .graphic {
            width: 10px;
            height: 9px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(40) {
            top: -12px;
            left: 44px;
            -webkit-animation-delay: -1553ms;
            animation-delay: -1553ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(40) .graphic {
            width: 9px;
            height: 10px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(41) {
            top: -12px;
            left: 45px;
            -webkit-animation-delay: -1623ms;
            animation-delay: -1623ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(41) .graphic {
            width: 7px;
            height: 8px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(42) {
            top: -27px;
            left: 43px;
            -webkit-animation-delay: -1294ms;
            animation-delay: -1294ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(42) .graphic {
            width: 10px;
            height: 6px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(43) {
            top: -20px;
            left: 48px;
            -webkit-animation-delay: -1669ms;
            animation-delay: -1669ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(43) .graphic {
            width: 8px;
            height: 8px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(44) {
            top: -27px;
            left: 44px;
            -webkit-animation-delay: -1757ms;
            animation-delay: -1757ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(44) .graphic {
            width: 7px;
            height: 9px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(45) {
            top: -16px;
            left: 43px;
            -webkit-animation-delay: -1330ms;
            animation-delay: -1330ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(45) .graphic {
            width: 7px;
            height: 9px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(46) {
            top: -12px;
            left: 44px;
            -webkit-animation-delay: -1394ms;
            animation-delay: -1394ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(46) .graphic {
            width: 7px;
            height: 7px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(47) {
            top: -22px;
            left: 41px;
            -webkit-animation-delay: -1505ms;
            animation-delay: -1505ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(47) .graphic {
            width: 9px;
            height: 9px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(48) {
            top: -16px;
            left: 49px;
            -webkit-animation-delay: -1688ms;
            animation-delay: -1688ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(48) .graphic {
            width: 6px;
            height: 10px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(49) {
            top: -11px;
            left: 41px;
            -webkit-animation-delay: -1713ms;
            animation-delay: -1713ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(49) .graphic {
            width: 10px;
            height: 10px;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(50) {
            top: -25px;
            left: 47px;
            -webkit-animation-delay: -1660ms;
            animation-delay: -1660ms;
        }
        .ship .body .waves .oarwaves.-left .wave:nth-child(50) .graphic {
            width: 8px;
            height: 8px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(1) {
            top: 40px;
            left: 48px;
            -webkit-animation-delay: -1797ms;
            animation-delay: -1797ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(1) .graphic {
            width: 7px;
            height: 6px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(2) {
            top: 44px;
            left: 50px;
            -webkit-animation-delay: -1494ms;
            animation-delay: -1494ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(2) .graphic {
            width: 7px;
            height: 9px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(3) {
            top: 43px;
            left: 44px;
            -webkit-animation-delay: -1665ms;
            animation-delay: -1665ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(3) .graphic {
            width: 9px;
            height: 9px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(4) {
            top: 54px;
            left: 47px;
            -webkit-animation-delay: -1731ms;
            animation-delay: -1731ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(4) .graphic {
            width: 8px;
            height: 8px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(5) {
            top: 41px;
            left: 49px;
            -webkit-animation-delay: -1111ms;
            animation-delay: -1111ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(5) .graphic {
            width: 6px;
            height: 7px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(6) {
            top: 46px;
            left: 50px;
            -webkit-animation-delay: -1473ms;
            animation-delay: -1473ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(6) .graphic {
            width: 10px;
            height: 8px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(7) {
            top: 50px;
            left: 50px;
            -webkit-animation-delay: -1039ms;
            animation-delay: -1039ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(7) .graphic {
            width: 9px;
            height: 9px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(8) {
            top: 53px;
            left: 43px;
            -webkit-animation-delay: -1279ms;
            animation-delay: -1279ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(8) .graphic {
            width: 9px;
            height: 10px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(9) {
            top: 39px;
            left: 49px;
            -webkit-animation-delay: -1443ms;
            animation-delay: -1443ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(9) .graphic {
            width: 9px;
            height: 9px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(10) {
            top: 48px;
            left: 44px;
            -webkit-animation-delay: -1166ms;
            animation-delay: -1166ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(10) .graphic {
            width: 8px;
            height: 7px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(11) {
            top: 43px;
            left: 44px;
            -webkit-animation-delay: -1625ms;
            animation-delay: -1625ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(11) .graphic {
            width: 6px;
            height: 9px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(12) {
            top: 42px;
            left: 46px;
            -webkit-animation-delay: -1205ms;
            animation-delay: -1205ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(12) .graphic {
            width: 8px;
            height: 9px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(13) {
            top: 48px;
            left: 42px;
            -webkit-animation-delay: -1769ms;
            animation-delay: -1769ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(13) .graphic {
            width: 8px;
            height: 7px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(14) {
            top: 42px;
            left: 42px;
            -webkit-animation-delay: -1354ms;
            animation-delay: -1354ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(14) .graphic {
            width: 7px;
            height: 8px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(15) {
            top: 37px;
            left: 42px;
            -webkit-animation-delay: -1554ms;
            animation-delay: -1554ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(15) .graphic {
            width: 8px;
            height: 7px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(16) {
            top: 40px;
            left: 42px;
            -webkit-animation-delay: -1449ms;
            animation-delay: -1449ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(16) .graphic {
            width: 9px;
            height: 7px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(17) {
            top: 38px;
            left: 48px;
            -webkit-animation-delay: -1575ms;
            animation-delay: -1575ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(17) .graphic {
            width: 10px;
            height: 8px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(18) {
            top: 52px;
            left: 42px;
            -webkit-animation-delay: -1240ms;
            animation-delay: -1240ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(18) .graphic {
            width: 9px;
            height: 7px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(19) {
            top: 36px;
            left: 44px;
            -webkit-animation-delay: -1592ms;
            animation-delay: -1592ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(19) .graphic {
            width: 9px;
            height: 9px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(20) {
            top: 53px;
            left: 41px;
            -webkit-animation-delay: -1715ms;
            animation-delay: -1715ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(20) .graphic {
            width: 10px;
            height: 8px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(21) {
            top: 44px;
            left: 42px;
            -webkit-animation-delay: -1691ms;
            animation-delay: -1691ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(21) .graphic {
            width: 6px;
            height: 7px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(22) {
            top: 53px;
            left: 44px;
            -webkit-animation-delay: -1764ms;
            animation-delay: -1764ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(22) .graphic {
            width: 7px;
            height: 6px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(23) {
            top: 44px;
            left: 41px;
            -webkit-animation-delay: -1655ms;
            animation-delay: -1655ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(23) .graphic {
            width: 7px;
            height: 7px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(24) {
            top: 44px;
            left: 46px;
            -webkit-animation-delay: -1174ms;
            animation-delay: -1174ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(24) .graphic {
            width: 8px;
            height: 9px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(25) {
            top: 48px;
            left: 45px;
            -webkit-animation-delay: -1340ms;
            animation-delay: -1340ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(25) .graphic {
            width: 7px;
            height: 8px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(26) {
            top: 42px;
            left: 47px;
            -webkit-animation-delay: -1625ms;
            animation-delay: -1625ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(26) .graphic {
            width: 10px;
            height: 8px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(27) {
            top: 46px;
            left: 41px;
            -webkit-animation-delay: -1251ms;
            animation-delay: -1251ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(27) .graphic {
            width: 9px;
            height: 7px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(28) {
            top: 47px;
            left: 46px;
            -webkit-animation-delay: -1568ms;
            animation-delay: -1568ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(28) .graphic {
            width: 8px;
            height: 10px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(29) {
            top: 48px;
            left: 45px;
            -webkit-animation-delay: -1703ms;
            animation-delay: -1703ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(29) .graphic {
            width: 10px;
            height: 10px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(30) {
            top: 47px;
            left: 44px;
            -webkit-animation-delay: -1467ms;
            animation-delay: -1467ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(30) .graphic {
            width: 8px;
            height: 8px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(31) {
            top: 44px;
            left: 48px;
            -webkit-animation-delay: -1612ms;
            animation-delay: -1612ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(31) .graphic {
            width: 7px;
            height: 6px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(32) {
            top: 47px;
            left: 43px;
            -webkit-animation-delay: -1226ms;
            animation-delay: -1226ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(32) .graphic {
            width: 10px;
            height: 8px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(33) {
            top: 43px;
            left: 46px;
            -webkit-animation-delay: -1540ms;
            animation-delay: -1540ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(33) .graphic {
            width: 10px;
            height: 9px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(34) {
            top: 53px;
            left: 49px;
            -webkit-animation-delay: -1118ms;
            animation-delay: -1118ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(34) .graphic {
            width: 6px;
            height: 8px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(35) {
            top: 40px;
            left: 49px;
            -webkit-animation-delay: -1265ms;
            animation-delay: -1265ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(35) .graphic {
            width: 6px;
            height: 9px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(36) {
            top: 36px;
            left: 42px;
            -webkit-animation-delay: -1305ms;
            animation-delay: -1305ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(36) .graphic {
            width: 10px;
            height: 10px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(37) {
            top: 50px;
            left: 41px;
            -webkit-animation-delay: -1401ms;
            animation-delay: -1401ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(37) .graphic {
            width: 7px;
            height: 8px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(38) {
            top: 36px;
            left: 42px;
            -webkit-animation-delay: -1746ms;
            animation-delay: -1746ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(38) .graphic {
            width: 9px;
            height: 10px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(39) {
            top: 41px;
            left: 49px;
            -webkit-animation-delay: -1278ms;
            animation-delay: -1278ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(39) .graphic {
            width: 7px;
            height: 6px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(40) {
            top: 54px;
            left: 44px;
            -webkit-animation-delay: -1081ms;
            animation-delay: -1081ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(40) .graphic {
            width: 10px;
            height: 9px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(41) {
            top: 44px;
            left: 48px;
            -webkit-animation-delay: -1627ms;
            animation-delay: -1627ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(41) .graphic {
            width: 10px;
            height: 9px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(42) {
            top: 53px;
            left: 45px;
            -webkit-animation-delay: -1763ms;
            animation-delay: -1763ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(42) .graphic {
            width: 6px;
            height: 9px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(43) {
            top: 52px;
            left: 45px;
            -webkit-animation-delay: -1116ms;
            animation-delay: -1116ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(43) .graphic {
            width: 9px;
            height: 9px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(44) {
            top: 41px;
            left: 49px;
            -webkit-animation-delay: -1662ms;
            animation-delay: -1662ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(44) .graphic {
            width: 8px;
            height: 9px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(45) {
            top: 51px;
            left: 43px;
            -webkit-animation-delay: -1508ms;
            animation-delay: -1508ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(45) .graphic {
            width: 9px;
            height: 7px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(46) {
            top: 49px;
            left: 47px;
            -webkit-animation-delay: -1077ms;
            animation-delay: -1077ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(46) .graphic {
            width: 9px;
            height: 10px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(47) {
            top: 39px;
            left: 42px;
            -webkit-animation-delay: -1130ms;
            animation-delay: -1130ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(47) .graphic {
            width: 7px;
            height: 8px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(48) {
            top: 47px;
            left: 47px;
            -webkit-animation-delay: -1620ms;
            animation-delay: -1620ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(48) .graphic {
            width: 9px;
            height: 8px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(49) {
            top: 41px;
            left: 41px;
            -webkit-animation-delay: -1209ms;
            animation-delay: -1209ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(49) .graphic {
            width: 8px;
            height: 10px;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(50) {
            top: 47px;
            left: 49px;
            -webkit-animation-delay: -1278ms;
            animation-delay: -1278ms;
        }
        .ship .body .waves .oarwaves.-right .wave:nth-child(50) .graphic {
            width: 10px;
            height: 10px;
        }
        .ship .oars {
            position: absolute;
            top: -30px;
            left: 50px;
            -webkit-transform: translateZ(10px);
            transform: translateZ(10px);
        }
        .ship .oars .graphic {
            position: relative;
            width: 3px;
            height: 40px;
            background: #D9845D;
            -webkit-animation: oarGraphic 1000ms ease-in-out infinite alternate;
            animation: oarGraphic 1000ms ease-in-out infinite alternate;
        }
        .ship .oars .graphic::before {
            content: '';
            position: absolute;
            top: 0;
            left: -3px;
            width: 9px;
            height: 15px;
            background: #D9845D;
            border-radius: 5px 5px 100% 100%;
        }
        .ship .oars .oar {
            position: absolute;
            top: 0;
            left: 50%;
        }
        .ship .oars .oar.-right {
            -webkit-transform-origin: 50% 45px;
            transform-origin: 50% 45px;
            -webkit-transform: scaleY(-1);
            transform: scaleY(-1);
        }
        .ship .oars .row {
            position: absolute;
            -webkit-animation: row 1000ms ease-in-out infinite alternate;
            animation: row 1000ms ease-in-out infinite alternate;
            -webkit-transform-origin: 50% 35px;
            transform-origin: 50% 35px;
        }
        .ship .oars .depth {
            -webkit-animation: depth 1000ms ease-in-out infinite alternate;
            animation: depth 1000ms ease-in-out infinite alternate;
            -webkit-transform-origin: 50% 35px;
            transform-origin: 50% 35px;
            -webkit-animation-delay: -500ms;
            animation-delay: -500ms;
        }

        @-webkit-keyframes surface {
            0% {
                border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            }
            25% {
                border-radius: 65% 35% 51% 49% / 49% 52% 48% 51%;
            }
            50% {
                border-radius: 42% 58% 28% 72% / 65% 34% 66% 35%;
            }
            75% {
                border-radius: 34% 66% 63% 37% / 77% 38% 62% 23%;
            }
            100% {
                border-radius: 24% 76% 72% 28% / 53% 68% 32% 47%;
            }
        }

        @keyframes surface {
            0% {
                border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
            }
            25% {
                border-radius: 65% 35% 51% 49% / 49% 52% 48% 51%;
            }
            50% {
                border-radius: 42% 58% 28% 72% / 65% 34% 66% 35%;
            }
            75% {
                border-radius: 34% 66% 63% 37% / 77% 38% 62% 23%;
            }
            100% {
                border-radius: 24% 76% 72% 28% / 53% 68% 32% 47%;
            }
        }
        @-webkit-keyframes rotateZ {
            0% {
                -webkit-transform: rotateZ(0deg);
                transform: rotateZ(0deg);
            }
            100% {
                -webkit-transform: rotateZ(360deg);
                transform: rotateZ(360deg);
            }
        }
        @keyframes rotateZ {
            0% {
                -webkit-transform: rotateZ(0deg);
                transform: rotateZ(0deg);
            }
            100% {
                -webkit-transform: rotateZ(360deg);
                transform: rotateZ(360deg);
            }
        }
        @-webkit-keyframes ship {
            0% {
                -webkit-transform: rotateZ(20deg);
                transform: rotateZ(20deg);
            }
            100% {
                -webkit-transform: rotateZ(-20deg);
                transform: rotateZ(-20deg);
            }
        }
        @keyframes ship {
            0% {
                -webkit-transform: rotateZ(20deg);
                transform: rotateZ(20deg);
            }
            100% {
                -webkit-transform: rotateZ(-20deg);
                transform: rotateZ(-20deg);
            }
        }
        @-webkit-keyframes move {
            0% {
                -webkit-transform: translateX(0);
                transform: translateX(0);
            }
            100% {
                -webkit-transform: translateX(5px);
                transform: translateX(5px);
            }
        }
        @keyframes move {
            0% {
                -webkit-transform: translateX(0);
                transform: translateX(0);
            }
            100% {
                -webkit-transform: translateX(5px);
                transform: translateX(5px);
            }
        }
        @-webkit-keyframes wave {
            0% {
                -webkit-transform: translateX(0) scale(0);
                transform: translateX(0) scale(0);
            }
            10% {
                -webkit-transform: translateX(-10px) scale(1);
                transform: translateX(-10px) scale(1);
            }
            100% {
                -webkit-transform: translateX(-130px) scale(0);
                transform: translateX(-130px) scale(0);
            }
        }
        @keyframes wave {
            0% {
                -webkit-transform: translateX(0) scale(0);
                transform: translateX(0) scale(0);
            }
            10% {
                -webkit-transform: translateX(-10px) scale(1);
                transform: translateX(-10px) scale(1);
            }
            100% {
                -webkit-transform: translateX(-130px) scale(0);
                transform: translateX(-130px) scale(0);
            }
        }
        @-webkit-keyframes depth {
            0% {
                -webkit-transform: rotateX(-20deg);
                transform: rotateX(-20deg);
            }
            100% {
                -webkit-transform: rotateX(50deg);
                transform: rotateX(50deg);
            }
        }
        @keyframes depth {
            0% {
                -webkit-transform: rotateX(-20deg);
                transform: rotateX(-20deg);
            }
            100% {
                -webkit-transform: rotateX(50deg);
                transform: rotateX(50deg);
            }
        }
        @-webkit-keyframes row {
            0% {
                -webkit-transform: rotateZ(20deg);
                transform: rotateZ(20deg);
            }
            100% {
                -webkit-transform: rotateZ(-50deg);
                transform: rotateZ(-50deg);
            }
        }
        @keyframes row {
            0% {
                -webkit-transform: rotateZ(20deg);
                transform: rotateZ(20deg);
            }
            100% {
                -webkit-transform: rotateZ(-50deg);
                transform: rotateZ(-50deg);
            }
        }
        @-webkit-keyframes oarGraphic {
            0% {
                -webkit-transform: rotateY(-60deg);
                transform: rotateY(-60deg);
            }
            100% {
                -webkit-transform: rotateY(-110deg);
                transform: rotateY(-110deg);
            }
        }
        @keyframes oarGraphic {
            0% {
                -webkit-transform: rotateY(-60deg);
                transform: rotateY(-60deg);
            }
            100% {
                -webkit-transform: rotateY(-110deg);
                transform: rotateY(-110deg);
            }
        }
        @-webkit-keyframes hat {
            0% {
                -webkit-transform: translateZ(30px) translateX(-5px) rotateY(-20deg);
                transform: translateZ(30px) translateX(-5px) rotateY(-20deg);
            }
            100% {
                -webkit-transform: translateZ(30px) translateX(0) rotateY(20deg);
                transform: translateZ(30px) translateX(0) rotateY(20deg);
            }
        }
        @keyframes hat {
            0% {
                -webkit-transform: translateZ(30px) translateX(-5px) rotateY(-20deg);
                transform: translateZ(30px) translateX(-5px) rotateY(-20deg);
            }
            100% {
                -webkit-transform: translateZ(30px) translateX(0) rotateY(20deg);
                transform: translateZ(30px) translateX(0) rotateY(20deg);
            }
        }
    </style>
</head>
<body>

<div class="summerdream">
    <div class="sea">
        <div class="surface"></div>
    </div>
    <div class="ship">
        <div class="rotate">
            <div class="move">
                <div class="body">
                    <div class="waves">
                        <div class="bodywaves">
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                        </div>
                        <div class="oarwaves -left">
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                        </div>
                        <div class="oarwaves -right">
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                            <div class="wave">
                                <div class="graphic"></div>
                            </div>
                        </div>
                    </div>
                    <div class="base"></div>
                    <div class="board -front"></div>
                    <div class="board -back"></div>
                </div>
                <div class="oars">
                    <div class="oar -left">
                        <div class="row -left">
                            <div class="depth -left">
                                <div class="graphic -left"></div>
                            </div>
                        </div>
                    </div>
                    <div class="oar -right">
                        <div class="row -right">
                            <div class="depth -right">
                                <div class="graphic -right"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="human">
                    <div class="legs">
                        <div class="leg -left"></div>
                        <div class="leg -right"></div>
                    </div>
                    <div class="hat"></div>
                </div>
            </div>
        </div>
    </div>
</div>
<script type="text/javascript">

</script>
</body>
</html>
`
