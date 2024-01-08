import type { Meta, StoryObj } from '@storybook/react-native';
import { useBoolean } from 'usehooks-ts';
import { Button } from '../../uikit/Button';
import { Space } from '../../uikit/Space';
import { EventCreateDialog } from './EventCreateDialog';
import type { EventCreateDialogProps } from './EventCreateDialog';

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
