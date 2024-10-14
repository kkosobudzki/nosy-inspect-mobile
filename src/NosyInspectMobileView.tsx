import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { NosyInspectMobileViewProps } from './NosyInspectMobile.types';

const NativeView: React.ComponentType<NosyInspectMobileViewProps> =
  requireNativeViewManager('NosyInspectMobile');

export default function NosyInspectMobileView(props: NosyInspectMobileViewProps) {
  return <NativeView {...props} />;
}
