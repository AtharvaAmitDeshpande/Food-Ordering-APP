import { TabActions } from "@react-navigation/native";

const tintColorlight = '#0a7ea4';
const tintColorDark = '#fff';

export const Color ={
    white:'#fff',
    primary:'#000',
    gray:'#808080',
    light: {
        text: '#1181c',
        background: '#fff',
        tint: tintColorlight,
        icon: '#687076',
        tabIconDefault: '#687076',
        tabIconSelected: tintColorlight,
    },
    dark: {
        text: '#ECEDEE',
        background: '#151718',
        tint: tintColorDark,
        icon: '#9BA1A6',
        tabIconDefault: '#9BA!A6',
        tabIconSelected: tintColorDark,
    },
};