import waitFunction from './common/waitFunction';

/**
 * these are nested promises. They get very messy the more you have.
 */
const nestedPromises = () => {
    waitFunction("hello").then(result => {
        waitFunction("world").then(result2 => {
            console.log(result + " " + result2);
        })
    })
};

export default nestedPromises;