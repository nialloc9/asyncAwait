/**
 * a function that resolves after 2 seconds
 * @param message
 */
const waitFunction = message => new Promise(resolve => {
    setTimeout(() => {
        resolve(message);
    }, 2000);
});

export default waitFunction;