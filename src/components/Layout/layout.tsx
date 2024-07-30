import React from 'react';
import {FC, ReactNode} from 'react';
import {View} from 'react-native';
import {styles} from './Layout.styled.ts';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};
