import nestedPromises from './nestedPromises';
import asyncAwait from './asyncAwait';
import asyncAwaitWithErrorHandler from './asyncAwaitWithErrorHandler';
import promiseAll from './promiseAll';

// this is better than callback hell but can get confusing as more promises are nested
nestedPromises();

// async await cleans it up and makes it much more readable
asyncAwait();

// promise all can be use to run multiple promises at the same time. However, the try/catch will be the same.
promiseAll();

// a helper higher order function can be used to catch errors instead of a try catch as above
asyncAwaitWithErrorHandler();