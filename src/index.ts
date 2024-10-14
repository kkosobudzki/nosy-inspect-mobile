import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to NosyInspectMobile.web.ts
// and on native platforms to NosyInspectMobile.ts
import NosyInspectMobileModule from './NosyInspectMobileModule';
import NosyInspectMobileView from './NosyInspectMobileView';
import { ChangeEventPayload, NosyInspectMobileViewProps } from './NosyInspectMobile.types';

// Get the native constant value.
export const PI = NosyInspectMobileModule.PI;

export function hello(): string {
  return NosyInspectMobileModule.hello();
}

export async function setValueAsync(value: string) {
  return await NosyInspectMobileModule.setValueAsync(value);
}

const emitter = new EventEmitter(NosyInspectMobileModule ?? NativeModulesProxy.NosyInspectMobile);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { NosyInspectMobileView, NosyInspectMobileViewProps, ChangeEventPayload };
