import type { ModalProps as ModalOriginalProps, ViewProps } from 'react-native';
import {
    Modal as ModalOriginal,
    TouchableOpacity,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { Typography } from '../Typography';

export type ModalProps = Omit<ModalOriginalProps, 'style'> &
    React.PropsWithChildren & {
        onPress?: () => void;
    };

const ModalFrame = ({
    onPress,
    onRequestClose,
    children,
    ...props
}: ModalProps) => {
    const theme = useTheme();

    return (
        <>
            <ModalOriginal transparent animationType="fade" {...props}>
                <TouchableOpacity
                    style={{
                        height: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.35)',
                    }}
                    activeOpacity={1}
                    onPressOut={onRequestClose}
                >
                    <TouchableWithoutFeedback
                        onPress={onPress}
                        accessible={false}
                    >
                        <View
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                gap: theme.spacing(2),
                                padding: theme.spacing(2),
                                margin: theme.spacing(2),
                                backgroundColor: theme.colors.background,
                            }}
                        >
                            {children}
                        </View>
                    </TouchableWithoutFeedback>
                </TouchableOpacity>
            </ModalOriginal>
        </>
    );
};

export type ModalHeaderProps = React.PropsWithChildren;

const ModalHeader: React.FC<ModalHeaderProps> = ({ children }) => {
    return <View>{children}</View>;
};

export type ModalTitleProps = React.PropsWithChildren;

const ModalTitle: React.FC<ModalTitleProps> = ({ children }) => {
    return <Typography variant="subheader">{children}</Typography>;
};

export type ModalContentProps = ViewProps & React.PropsWithChildren;

const ModalContent: React.FC<ModalContentProps> = ({ children, ...props }) => {
    return <View {...props}>{children}</View>;
};

export type ModalActionsProps = React.PropsWithChildren;

const ModalActions: React.FC<ModalActionsProps> = ({ children }) => {
    return <View>{children}</View>;
};

ModalFrame.Header = ModalHeader;
ModalFrame.Title = ModalTitle;
ModalFrame.Content = ModalContent;
ModalFrame.Actions = ModalActions;

export const Modal = ModalFrame;
