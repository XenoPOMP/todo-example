const getThemedStyles = (themeCode : number, styles : any) => {
    const colorThemes = [
        {
            id : 0,
            styleCode : styles.light
        },
        {
            id : 2,
            styleCode : styles.dark
        }
    ];

    return colorThemes[themeCode].styleCode;
}

export default  getThemedStyles;