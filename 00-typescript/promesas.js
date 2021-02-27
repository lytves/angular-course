(function () {
    console.warn("inicio");
    var prom1 = new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.warn("timeout finish");
        }, 5000);
    });
    prom1.then(function (msg) {
        console.warn();
    })["catch"](function () {
    });
    console.warn("fin");
})();
