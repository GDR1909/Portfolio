import { animate, style, transition, trigger } from "@angular/animations";


export const fadeIn = trigger('fadeIn', [
    transition(':enter', [style({ opacity: '0' }), animate('300ms ease-in-out', style({ opacity: '1' }))]),
    transition(':leave', [style({ opacity: '1' }), animate('300ms ease-in-out', style({ opacity: '0' }))]),
]);