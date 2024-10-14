import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to NosyInspect.web.ts
// and on native platforms to NosyInspect.ts
import NosyInspectModule from './NosyInspectModule';
import { ChangeEventPayload, NosyInspectViewProps } from './NosyInspect.types';

// Get the native constant value.
export const PI = NosyInspectModule.PI;

export function hello(): string {
  return NosyInspectModule.hello();
}

export async function setValueAsync(value: string) {
  return await NosyInspectModule.setValueAsync(value);
}

const emitter = new EventEmitter(NosyInspectModule ?? NativeModulesProxy.NosyInspect);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { NosyInspectViewProps, ChangeEventPayload };
