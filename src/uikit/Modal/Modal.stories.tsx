import type { Meta, StoryObj } from '@storybook/react-native';
import { View } from 'react-native';
import { times } from 'remeda';
import { useBoolean } from 'usehooks-ts';
import { Button } from '../Button';
import { Typography } from '../Typography';
import type { ModalProps } from './Modal';
import { Modal } from './Modal';

const meta: Meta = {
    title: 'Modal',
    component: Modal,
};

export default meta;

export const Primary: StoryObj<ModalProps> = {
    render: () => {
        const {
            value: isOpen,
            setTrue: open,
            setFalse: close,
        } = useBoolean(true);

        return (
            <View
                style={{
                    display: 'flex',
                    flex: 1,
                    flexDirection: 'column-reverse',
                }}
            >
                <Modal visible={isOpen} onRequestClose={close}>
                    <Modal.Header>
                        <Modal.Title>Modal header</Modal.Title>
                    </Modal.Header>
                    <Modal.Content>
                        <Typography>{`Modal content\nmultiline\nor with ${times(
                            10,
                            () => 'very',
                        ).join(' ')} long text`}</Typography>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button title="some action" />
                    </Modal.Actions>
                </Modal>
                <Button title="show popup" onPress={open} />
            </View>
        );
    },
};
