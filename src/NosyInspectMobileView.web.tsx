import * as React from 'react';

import { NosyInspectMobileViewProps } from './NosyInspectMobile.types';

export default function NosyInspectMobileView(props: NosyInspectMobileViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
