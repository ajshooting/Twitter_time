const observer = new MutationObserver(function () {
    main_action()
})

observer.observe(document, { childList: true, subtree: true })


// window.onload = function () {
//     main_action()
//     console.log("onload")
//     setTimeout(main_action, 5000)
// }

function main_action() {
    var url = window.location.href
    if (url) {
        if (url.includes("status")) {
            try {
                let index = url.indexOf("?");
                if (index !== -1) {
                    url = url.substring(0, index);
                }
                const match = url.match(/\d+$/);
                var date = getTime(match[0])
                var element = document.querySelector('time');
                element.textContent = String(date.date).replace(" GMT+0900 (日本標準時)", ".") + String(date.milliseconds);
            } catch (e) {
                console.log(e)
            }
        }
    }
}


function getTime(num) {
    var timestamp = (BigInt(num) >> 22n) + 1288834974657n;
    var date = new Date(Number(timestamp));

    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var milliseconds = date.getMilliseconds();

    return {
        minutes: minutes,
        seconds: seconds,
        milliseconds: milliseconds,
        date: date
    };
}