import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { config } from './app/app.config.server';


/**
 * Bootstraps the Angular application using the specified configuration.
 *
 * @returns {Promise<ApplicationRef>} A promise that resolves when the application has been bootstrapped.
 */
const bootstrap = () => bootstrapApplication(AppComponent, config);


export default bootstrap;