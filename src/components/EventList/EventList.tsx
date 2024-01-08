import { useTheme } from '@react-navigation/native';
import type React from 'react';
import { useMemo } from 'react';

import { FlatList, View } from 'react-native';
import { sortBy } from 'remeda';
import type { EventRecord } from '../../entities/event/eventRecord';
import { Typography } from '../../uikit/Typography';
import { formatDateShort } from '../../utils/formatDateShort';
import { CategoryButton } from '../CategoryButton';

export type EventListProps = {
    eventList: EventRecord[];
};

export const EventList: React.FC<EventListProps> = ({ eventList }) => {
    const theme = useTheme();

    const dataSorted = useMemo(
        () => sortBy(eventList.slice(), e => e.date),
        [eventList],
    );

    return (
        <FlatList
            data={dataSorted}
            keyExtractor={event => event.id}
            renderItem={event => (
                <View
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: 'row',
                        backgroundColor: theme.colors.card,
                        paddingVertical: theme.spacing(1),
                        paddingHorizontal: theme.spacing(2),
                        gap: theme.spacing(2),
                    }}
                >
                    <CategoryButton category={event.item.category} />
                    <View style={{ overflow: 'hidden', flexShrink: 1 }}>
                        <Typography>{event.item.name}</Typography>
                    </View>
                    <Typography>{formatDateShort(event.item.date)}</Typography>
                </View>
            )}
        />
    );
};
