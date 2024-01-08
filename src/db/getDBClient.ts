import 'react-native-url-polyfill/auto';

import { SUPABASE_API_KEY, SUPABASE_DB_URL } from '@env';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import type { Database } from './supabase.gen';

let dbClient: ReturnType<typeof createClient<Database>> | null = null;

export function getDBClient() {
    console.log({ SUPABASE_DB_URL });
    if (!dbClient) {
        dbClient = createClient<Database>(SUPABASE_DB_URL, SUPABASE_API_KEY, {
            auth: {
                storage: AsyncStorage,
                autoRefreshToken: true,
                persistSession: true,
                detectSessionInUrl: false,
            },
        });
    }

    return dbClient;
}
