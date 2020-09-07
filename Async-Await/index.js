'use strict';

const fn = () => {

    // * CALLBACK HELL
    ajax( () => {
        ajax( () => {

        })
    });


}

// * PROMISES
const fn1 = () => {

    ajax()
        .then( () => { return ajax() })
        .then( () => { return ajax() })

}


// * ASYNC AWAIT
const fn2 = async() => {

    const resultado = await ajax();

}
