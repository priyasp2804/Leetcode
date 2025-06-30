var addTwoPromises = async function(promise1, promise2) {
    try{
        const a = await promise1;
        const b = await promise2;
        return(a+b);
    }
    catch(error){
        console.log(error);
    }

};
