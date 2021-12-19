(() => {
    console.warn("inicio");

    const prom1 = new Promise( (resolve, reject) => {
        setTimeout(() =>{
            console.warn("timeout finish");
        }, 5000)
    });

    prom1.then((msg) =>{
        console.warn();
    }).catch(() => {

    })

    console.warn("fin");

})();
