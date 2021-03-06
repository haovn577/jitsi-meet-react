import { ColorPalette, createStyleSheet } from '../../../base/styles';

/**
 * The toolbar related styles.
 * TODO Make styles more generic and reusable. Use ColorPalette for all colors.
 */
export const styles = createStyleSheet({
    /**
     * The toolbar button icon style.
     */
    icon: {
        alignSelf: 'center',
        color: ColorPalette.jitsiDarkGrey,
        fontSize: 24
    },

    /**
     * The toolbar button style.
     */
    toolbarButton: {
        alignSelf: 'center',
        backgroundColor: 'white',
        opacity: 0.8,
        borderRadius: 35,
        borderWidth: 0,
        flexDirection: 'row',
        height: 60,
        justifyContent: 'center',
        marginLeft: 20,
        marginRight: 20,
        width: 60
    },

    /**
     * The toolbar container style.
     */
    toolbarContainer: {
        bottom: 30,
        flex: 1,
        flexDirection: 'row',
        height: 60,
        justifyContent: 'center',
        left: 0,
        position: 'absolute',
        right: 0
    }
});
