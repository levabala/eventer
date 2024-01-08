import type React from 'react';
import { useState } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from './types';
import { View } from 'react-native';
import type { EventRecord } from '../entities/event/eventRecord';
import { EventList } from '../components/EventList';
import { useBoolean } from 'usehooks-ts';
import { EventCreateDialog } from '../components/EventCreateDialog';
import uuid from '@levabala/react-native-uuid';
import { Button } from '../uikit/Button';
import { Space } from '../uikit/Space';

export type MainPageProps = NativeStackScreenProps<RootStackParamList, 'Main'>;

export const MainPage: React.FC<MainPageProps> = () => {
    const [eventList, setEventList] = useState<EventRecord[]>([]);
    const { value: isOpen, setTrue: open, setFalse: close } = useBoolean(false);

    return (
        <View style={{ display: 'flex', flex: 1 }}>
            <EventList eventList={eventList} />
            <Space />
            <Button title="Add event" onPress={open} />
            {isOpen ? (
                <EventCreateDialog
                    onAbort={close}
                    onSubmit={eventNew => {
                        setEventList(arr => [
                            ...arr,
                            { id: uuid.v4(), ...eventNew },
                        ]);

                        close();
                    }}
                />
            ) : null}
        </View>
    );
};
