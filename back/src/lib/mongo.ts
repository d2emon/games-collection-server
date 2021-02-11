import mongoose from 'mongoose';
import config from '../config';
import debug from '../debug';

const mongoConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
const onSuccess = () => debug(`Connected to DB at ${config.MONGO_URI}`);
const onFail = (error: string) => debug(error);

export const connect = mongoose.connect(config.MONGO_URI, mongoConfig)
    .then(
        onSuccess,
        onFail,
    );

export default mongoose.connection;
