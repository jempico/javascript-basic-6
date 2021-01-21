//NIVELL 2 I 3


function promise() {
    return new Promise((resolve, reject) => {
        let condition = true;
        if (condition) {
            setTimeout(() => {
            resolve(`promise resolved`)
            }, 2000); 
        } else {
            reject('Error');
        }
    })  
}

async function triggerPromise() {
    try { 
        const response1 = await promise();
        console.log(response1)
    }   catch (err) {
        console.log(err)
    }
}

triggerPromise();