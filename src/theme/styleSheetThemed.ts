import { useTheme } from '@react-navigation/native';
import type { ThemeExtended } from './themes';

type StylesCreator<T> = (theme: ThemeExtended) => T;

const themeToCreatorToStyles: Map<
    ThemeExtended,
    Map<StylesCreator<unknown>, unknown>
> = new Map();

function getOrCreateStylesMapper<T>(
    theme: ThemeExtended,
): Map<StylesCreator<T>, T> {
    const mapperCached = themeToCreatorToStyles.get(theme);

    if (mapperCached) {
        return mapperCached as Map<StylesCreator<T>, T>;
    }

    const mapper = new Map<StylesCreator<T>, T>();
    themeToCreatorToStyles.set(theme, mapper);

    return mapper;
}

function getOrCreateStyles<T>(
    theme: ThemeExtended,
    creator: StylesCreator<T>,
): T {
    const mapperStyles = getOrCreateStylesMapper<T>(theme);

    const stylesCached = mapperStyles.get(creator);

    if (stylesCached) {
        return stylesCached;
    }

    const stylesNew = creator(theme);
    mapperStyles.set(creator, stylesNew);

    return stylesNew;
}

export function useStyleSheetThemed<T extends object>(
    styleSheetCreator: (theme: ThemeExtended) => T,
): T {
    const theme = useTheme();

    return getOrCreateStyles(theme, styleSheetCreator);
}
