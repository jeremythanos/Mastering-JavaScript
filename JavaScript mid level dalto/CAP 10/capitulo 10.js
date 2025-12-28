//try catch

try {
    dsdfdfsfd
} catch (error) {
    console.log(error);
}


const pruebaTry = () =>{
    try {
        return 1;
    } catch (error) {
        return 2;
    }
    finally{
        return 3;
    }
}

document.write(pruebaTry())