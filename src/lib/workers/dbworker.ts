import { browser } from '$app/environment';

// declare module '@sqlite.org/sqlite-wasm' {
//     export function sqlite3Worker1Promiser(...args: any): any
// }

const log = (...args) => console.log(...args);
const error = (...args) => console.error(...args);
let promiser;
let initialized = false;

export const initDB = async () => {
    if (!browser || import.meta.env.SSR){
        log('not in browser mode, exiting init');
        return null;
    }
    const sqliteModule = await import('@sqlite.org/sqlite-wasm');
    

    log('Loading and initializing SQLite3 module...');

    if (initialized) {
        log("Already initialized, returning what I have");
        return promiser;
    }

    promiser = await new Promise((resolve) => {
        const _promiser = sqlite3Worker1Promiser({
          onready: () => {
            resolve(_promiser);
          },
        });
      });

    // promiser = await sqliteModule.sqlite3Worker1Promiser({
    //     onready: (f) => {
    //         console.log(f);
    //         // let response = f('config-get', {});
    //         // log('Running SQLite3 version', response.result.version.libVersion);
    //         initialized = true;
    //         log('Done initializing worker.');
            
    //     }
    // })
        // .then(_ => {
        //     console.log("awaited sqlite3worker1promiser");
        // });

        
    // const promiserPromise = await new Promise((resolve) => {
    //     const _promiser = sqlite3Worker1Promiser.v2({
    //         onready: () => {
    //             resolve(_promiser);
    //         },
    //     });
    // });
    

    initialized = true;
    

    // Your SQLite code here.
    return promiser;

    // try {

        

    //     log('Done initializing. Running demo...');

    //     let response;

    //     response = await promiser('config-get', {});
    //     log('Running SQLite3 version', response.result.version.libVersion);

    //     response = await promiser('open', {
    //         filename: 'file:mydb.sqlite3?vfs=opfs',
    //     });
    //     const { dbId } = response;
    //     log(
    //         'OPFS is available, created persisted database at',
    //         response.result.filename.replace(/^file:(.*?)\?vfs=opfs$/, '$1'),
    //     );
    //     initialized = true;
    //     // Your SQLite code here.
    //     return promiser;
    // } catch (err) {
    //     if (!(err instanceof Error)) {
    //         err = new Error(err.result.message);
    //     }
    //     error(err.name, err.message);
    // }
};

export const executeSql = async (command, options = {}) => {
    if(!browser){
        return;
    }

    if (!initialized) {
        console.log("DB not yet initialized, calling initDB");

        await initDB();
    }
    console.log("DB initialized, executing command", command);
    // const promiser = await promiserPromise;
    return promiser(command, options);
};