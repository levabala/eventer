import { TouchableHighlight, View } from 'react-native';
import { EventCategory } from '../../entities/event/eventCategory';
import { Typography } from '../../uikit/Typography';
import { useTheme } from '@react-navigation/native';

export type CategoryButtonProps = {
    category: EventCategory | null;
    onPress?: () => void;
};

export const CategoryButton: React.FC<CategoryButtonProps> = ({
    category,
    onPress,
}) => {
    const theme = useTheme();

    return (
        <TouchableHighlight onPress={onPress}>
            <View
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: theme.colors.primary,
                    width: 40,
                    height: 40,
                    opacity: category ? undefined : theme.opacities.faded,
                }}>
                <Typography>
                    {category ? category[0].toUpperCase() : '?'}
                </Typography>
            </View>
        </TouchableHighlight>
    );
};
