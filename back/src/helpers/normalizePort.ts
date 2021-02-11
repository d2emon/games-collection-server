/**
 * Normalize a port into a number, string, or false.
 */
export default (value: any): number | boolean => {
    const port = parseInt(value, 10);

    /*
    if (isNaN(port)) {
        // named pipe
        return value;
    }
     */

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}
