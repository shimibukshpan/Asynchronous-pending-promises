let myPromise = new Promise(function(resolve, reject){
    let arr = ['vaeg1', 'vaeg2', 'vaeg3', 'vaeg4', 'vaeg5'];
    setTimeout(()=>{
        resolve(arr);
        reject('error!')
    }, 5000)
});


async function display(){
    console.log("Loading....");
    let vaegarr = await myPromise;
    console.log('loded!!');

    vaegarr.forEach(element => {
        console.log(element)
    });

}
display()