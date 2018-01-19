import waitFunction from './common/waitFunction';

/**
 * an example of using promise.all with async await
 * @returns {Promise.<void>}
 */
const promiseAll = async () => {
    const [a, b] = await Promise.all([
        waitFunction("promise"),
        waitFunction("all")
    ]).catch(error => {
        console.log("promiseAll error", error);
    });

    console.log("promiseAll a: ", a);
    console.log("promiseAll b: ", b);
};

export default promiseAll;