import type { PluginOption } from 'vite';
export interface CopyrightOptions {
    edition?: string;
    website?: string;
    company?: string;
}
export declare function createCopyrightPlugins(options?: CopyrightOptions): PluginOption[];
