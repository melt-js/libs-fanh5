export type { AppSettings, CopyrightSettings, NavbarSettings, PageSettings, SettingsOptions, TabbarSettings, ThemeSettings, } from './types.js';
import type { RequiredDeep } from 'type-fest';
import type { SettingsOptions } from './types.js';
export declare function setSettings(settings: SettingsOptions): RequiredDeep<SettingsOptions>;
