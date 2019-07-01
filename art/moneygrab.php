<style>
    .moneygrab-background {
        position: relative;
        width: 200px;
        height: 150px;
        
        left: 50%;
        margin-left: -100px;
        
        background-color: #2b80ff;
        
        overflow: hidden;
    }
    .moneygrab-coin {
        position: absolute;
        left: 50%;
        top: 20%;
        
        margin-left: -32px;
        
        width: 64px;
        height: 64px;
        
        border-radius: 50%;
        
        background-color: #fcc30a;
        box-shadow: 0px 2px 4px #111;
        
        animation: moneygrab-coin-move-appear 20s;
        animation-delay: 10s;
    }
    .moneygrab-dollarsign::after {
        position: absolute;
        top: -6px;
        left: 8px;
        width: 3px;
        height: 145%;
        background-color: #a07120;
        content: ' ';
    }
    .moneygrab-dollarsign {
        position: absolute;
        top: 15px;
        left: 50%;
        margin-left: -12px;
        width: 20px;
        height: 30px;
        
        border-left: 3px solid #a07120;
        border-top: 3px solid #a07120;
        border-bottom: 3px solid #a07120;
        border-radius: 70% 40% 40% 70%;
        
        color: #a07120;
        
        animation: moneygrab-dollarsign-remove 20s;
        animation-delay: 10s;
    }
    @keyframes moneygrab-dollarsign-remove {
        0% {
            opacity: 1;
        }
        45% {
            opacity: 1;
        }
        46% {
            opacity: 0;
        }
        54% {
            opacity: 0;
        }
        55% {
            opacity: 1;
        }
    }
    .moneygrab-thief-hand {
        position: absolute;
        background-color: #222;
        width: 20px;
        height: 200px;
        
        border-radius: 20px 20px 0 0;
        left: 50%;
        margin-left: -10px;
        
        top: 110%;
        
        animation-name: moneygrab-hand-grab;
        animation-duration: 20s;
        animation-delay: 10s;
    }
    .moneygrab-thief-glove {
        position: absolute;
        background-color: #ccc;
        width: 22px;
        height: 30px;
        top: -1px;
        left: -1px;
        border-radius: 20px 20px 0 0;
    }
    .moneygrab-thief-glove::after {
        position: absolute;
        background-color: #aaa;
        width: 30px;
        height: 10px;
        top: 28px;
        left: -4px;
        content: '';
    }
    
    @keyframes moneygrab-hand-grab {
        0% {
            top: 110%;
        }
        14% {
            top: 39%;
        }
        15% {
            top: 40%;
        }
        45% {
            top: 140%;
        }
        100% {
            top: 110%;
        }
    }
    @keyframes moneygrab-coin-move-appear {
        0% {
            top: 20%;
            width: 64px;
            height: 64px;
            margin-top: 0px;
            margin-left:-32px;
        }
        15% {
            top: 20%;
            width: 64px;
            height: 64px;
            margin-top: 0px;
            margin-left:-32px;
        }
        45% {
            top: 120%;
            width: 64px;
            height: 64px;
            margin-top: 0px;
            margin-left:-32px;
        }
        46% {
            top: 120%;
            width: 0px;
            height: 0px;
            margin-top: 0px;
            margin-left:0px;
        }
        50% {
            top: 20%;
            margin-left:0px;
            margin-top: 32px;
            width: 0px;
            height: 0px;
        }
        55% {
            width: 64px;
            height: 64px;
            margin-top: 0px;
            margin-left: -32px;
        }
    }
    
    .moneygrab-thief {
        position: absolute;
        left: 20px;
        top: 110%;
        
        animation: moneygrab-thief-reveal 20s;
    }
    @keyframes moneygrab-thief-reveal {
        0% {
            top: 100%;
        }
        14% {
            top: 65%;
        }
        15% {
            top: 67%;
        }
        86% {
            top: 67%;
        }
        100% {
            top: 110%;
        }
    }
    .moneygrab-thief-face {
        position: absolute;
        background-color: #f4c77a;
        
        width: 50px;
        height: 100px;
        
        border-radius: 40% 40% 0 0;
    }
    .moneygrab-thief-hat {
        position: absolute;
        background-color: #222;
        
        width: 52px;
        height: 30px;
        
        left: -1px;
        
        border-radius: 40% 40% 0 0;
    }
    .moneygrab-thief-mask {
        position: absolute;
        background-color: #222;
        
        width: 50px;
        height: 10px;
        
        top: 35px;
    }
    .moneygrab-thief-eye {
        position: absolute;
        background-color: #eee;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        
        left: 8px;
        top: 2px;
        
        animation: moneygrab-eye-move1 12s;
    }
    .moneygrab-thief-eye:nth-of-type(2) {
        left: 30px;
        animation: moneygrab-eye-move2 12s;
    }
    @keyframes moneygrab-eye-move1 {
        0% {
            left: 8px;
        }
        15% {
            left: 8px;
        }
        30% {
            left: 18px;
        }
        50% {
            left: 4px;
        }
        70% {
            left: 18px;
        }
        86% {
            left: 8px;
        }
        100% {
            left: 8px;
        }
    }
    @keyframes moneygrab-eye-move2 {
        0% {
            left: 30px;
        }
        15% {
            left: 30px;
        }
        30% {
            left: 40px;
        }
        50% {
            left: 26px;
        }
        70% {
            left: 40px;
        }
        86% {
            left: 30px;
        }
        100% {
            left: 30px;
        }
    }
</style>
<div class='moneygrab-background'>
    <div class='moneygrab-coin'>
        <div class='moneygrab-dollarsign'></div>
    </div>
    <div class='moneygrab-thief-hand'>
        <div class='moneygrab-thief-glove'></div>
    </div>
    <div class='moneygrab-thief'>
        <div class='moneygrab-thief-face'>
            <div class='moneygrab-thief-mask'>
                <div class='moneygrab-thief-eye'></div>
                <div class='moneygrab-thief-eye'></div>
            </div>
        </div>
        <div class='moneygrab-thief-hat'></div>
    </div>
</div>