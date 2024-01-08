/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * calls void functions first to last
 *
 * can be used for callbacks forwarding in components
 * ({ onClick }) => <div onClick={combineFunctions((e) => { console.log(e.target); }, onClick)}/>
 **/
export function combineFunctions<C extends (...args: any[]) => void>(
    ...functions: Array<C | undefined | null>
): C {
    const res = (...args: any[]): void => {
        for (const fun of functions) {
            if (!fun) {
                continue;
            }

            fun(...args);
        }
    };

    return res as C;
}
