import { getDBClient } from '../db/getDBClient';

const db = getDBClient();

export const apiClient = {
    event: {
        getAll() {
            return db.from('event').select('*');
        },
    },
};
