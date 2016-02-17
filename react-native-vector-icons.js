class ReactNativeVectorIcon {
  Button: any;
}

declare module 'react-native-vector-icons' {
  declare function createIconSet(glyphMap: Object, fontFamily: string, fontFile?: string): ReactNativeVectorIcon;
  declare function createIconSetFromFontello(config: Object, fontFamily?: string, fontFile?: string): ReactNativeVectorIcon;
  declare function createIconSetFromIcoMoon(config: Object, fontFamily?: string, fontFile?: string): ReactNativeVectorIcon;
}

declare module 'react-native-vector-icons/Entypo' {
  declare var exports: ReactNativeVectorIcon;
}

declare module 'react-native-vector-icons/EvilIcons' {
  declare var exports: ReactNativeVectorIcon;
}

declare module 'react-native-vector-icons/FontAwesome' {
  declare var exports: ReactNativeVectorIcon;
}

declare module 'react-native-vector-icons/Foundation' {
  declare var exports: ReactNativeVectorIcon;
}

declare module 'react-native-vector-icons/Ionicons' {
  declare var exports: ReactNativeVectorIcon;
}

declare module 'react-native-vector-icons/MaterialIcons' {
  declare var exports: ReactNativeVectorIcon;
}

declare module 'react-native-vector-icons/Octicons' {
  declare var exports: ReactNativeVectorIcon;
}

declare module 'react-native-vector-icons/Zocial' {
  declare var exports: ReactNativeVectorIcon;
}
