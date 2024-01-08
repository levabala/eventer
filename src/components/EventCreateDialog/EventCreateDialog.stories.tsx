import { Meta, StoryObj } from '@storybook/react-native';
import { EventCreateDialog, EventCreateDialogProps } from './EventCreateDialog';
import { useBoolean } from 'usehooks-ts';
import { Button } from '../../uikit/Button';
import { Space } from '../../uikit/Space';

const meta: Meta = {
    title: 'EventCreateDialog',
    component: EventCreateDialog,
};

export default meta;

export const Default: StoryObj<EventCreateDialogProps> = {
    render: () => {
        const {
            value: isOpen,
            setTrue: open,
            setFalse: close,
        } = useBoolean(true);

        return (
            <>
                {isOpen ? (
                    <EventCreateDialog onSubmit={close} onAbort={close} />
                ) : null}
                <Space />
                <Button title="show" onPress={open} />
            </>
        );
    },
};
