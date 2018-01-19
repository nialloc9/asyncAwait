import waitFunction from './common/waitFunction';

/**
 * an example of async await
 * @returns {Promise.<void>}
 */
const asyncAwait = async () => {

    // assigns value resolved to const
    try {
        const messageOne = await waitFunction("hello");
        const messageTwo = await waitFunction("world");

        // prints out hello world
        console.log(messageOne + " " + messageTwo);
    } catch (error) {
        console.log("error1", error);
    }

};

export default asyncAwait;