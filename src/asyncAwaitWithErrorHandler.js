import errorHandler from './common/errorHandler';

/**
 * throws an error
 */
const throwError = () => new Promise((resolve, reject) => reject("Error thrown in throwError"));

/**
 * a higher order function errorHandler can be used to remove the need for try catch statements
 * @returns {Promise.<void>}
 */
const asyncAwaitWithErrorHandler = async () => {

    // assigns value resolved to const
    const [error, data] = await errorHandler(throwError());

    if(error){
        console.log(error);
    }
};

export default asyncAwaitWithErrorHandler;