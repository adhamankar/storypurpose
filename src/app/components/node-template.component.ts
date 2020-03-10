import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-node-template',
    templateUrl: './node-template.component.html'
})
export class NoteTemplateComponent {
    @Input() node: any;
    @Input() icon: string;
    @Input() badge: string;
    
}
