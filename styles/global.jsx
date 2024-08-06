import { StyleSheet } from 'react-native';

export const colors = {
    primaryText: "#BCC2E1",
    secondaryText: "#646794",
    headerText: "#6363FF",
    mainBG: "#0D0D0D",
    tabBG: "#0D0D46",
    infoWrapperBG: "#2A2A2D"
};

export const mainStyles = StyleSheet.create({
    container: {        
      backgroundColor: colors.mainBG,
      height: "100%"
    },
    wrapper: {
      width: "90%",
      marginHorizontal: "auto"
    },
});

export const headingStyles = StyleSheet.create({
    container: {
        marginBottom: 30
    },
    row: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
    },
    title: {
      color: colors.primaryText,
      fontWeight: "700",
      letterSpacing: 1.5,    
    },
    list: {
      color: colors.primaryText,
      fontSize: 16,
      opacity: 0.7,
      marginTop: 5
    }
});

export const buttonStyles = StyleSheet.create({
    container: {
      display: "flex",
      alignItems: "center",
    },
    wrapper: {
      padding: 10,
      borderRadius: 6,
      borderColor: colors.primaryText,
      borderWidth: 1,
      minWidth: 200,
    },
    text: {
      color: colors.primaryText,
      fontSize: 16,
      textTransform: "uppercase",
      letterSpacing: 1,
      textAlign: "center"
    }
});

export const listStyles = StyleSheet.create({
    container: {
        display: "flex",
        gap: 35,
        marginBottom: 35
    },
});

export const slimListItemStyles = StyleSheet.create({
    container: {
      display: "flex",
      gap: 35,
      marginBottom: 30
    },
    infoWrapper: {
      backgroundColor: colors.infoWrapperBG,
      borderRadius: 6,
      paddingHorizontal: 10,
      paddingVertical: 8,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between"
    },
    info: {
      color: colors.primaryText,
      fontSize: 16,
      letterSpacing: 1.2,
      fontWeight: "500"
    },
    title: {
      color: colors.primaryText,
      fontSize: 16,
      fontWeight: "700",
      letterSpacing: 1,
      marginBottom: 8
    }
});