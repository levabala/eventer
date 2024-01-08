import { useFormik } from 'formik';
import { Keyboard, Pressable, TextInput, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { useBoolean } from 'usehooks-ts';
import type { EventRecord } from '../../entities/event/eventRecord';
import { Button } from '../../uikit/Button';
import { Modal } from '../../uikit/Modal';
import { Typography } from '../../uikit/Typography';
import { formatDateShort } from '../../utils/formatDateShort';
import { CategoryButton } from '../CategoryButton';

const Row: React.FC<React.PropsWithChildren> = ({ children }) => (
    <View
        style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}
    >
        {children}
    </View>
);

type EventRecordPayload = Omit<EventRecord, 'id' | 'owner'>;

export type EventCreateDialogProps = {
    eventRecordDefault?: Partial<EventRecordPayload>;
    onSubmit: (eventRecord: EventRecordPayload) => void;
    onAbort: () => void;
};

export const EventCreateDialog: React.FC<EventCreateDialogProps> = ({
    eventRecordDefault,
    onSubmit,
    onAbort,
}) => {
    const { handleSubmit, handleChange, values, setFieldValue } =
        useFormik<EventRecordPayload>({
            initialValues: {
                date: new Date(),
                name: null,
                category: null,
                ...eventRecordDefault,
            },
            onSubmit,
        });

    const {
        value: isOpenDatePicker,
        setTrue: openDatePicker,
        setFalse: closeDatePicker,
    } = useBoolean(false);

    return (
        <Modal onPress={Keyboard.dismiss} onRequestClose={onAbort}>
            <Modal.Header>
                <Modal.Title>
                    <Typography>Event data</Typography>
                </Modal.Title>
            </Modal.Header>
            <Modal.Content>
                <Row>
                    <Typography>Time: </Typography>
                    <Pressable onPress={openDatePicker}>
                        <Typography>{formatDateShort(values.date)}</Typography>
                    </Pressable>
                    <DatePicker
                        modal
                        open={isOpenDatePicker}
                        date={values.date}
                        onConfirm={date => {
                            closeDatePicker();
                            void setFieldValue('date', date);
                        }}
                        onCancel={closeDatePicker}
                    />
                </Row>
                <Row>
                    <Typography>Name: </Typography>
                    <TextInput
                        style={{ fontSize: 20 }}
                        value={values.name || ''}
                        onChangeText={handleChange('name')}
                        placeholder="enter the name"
                        textAlign="right"
                    />
                </Row>
                <Row>
                    <Typography>Category: </Typography>
                    <CategoryButton category={null} />
                </Row>
            </Modal.Content>
            <Modal.Actions>
                <Button title="Confirm" onPress={handleSubmit} />
            </Modal.Actions>
        </Modal>
    );
};
