import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';


/**
 * Configuration object for server-side rendering.
 */
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};


/**
 * Merges the application configuration with the server configuration.
 * 
 * @type {ApplicationConfig}
 */
export const config = mergeApplicationConfig(appConfig, serverConfig);