import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'app-button-panel',
    templateUrl: './button-panel.component.html'
})
export class ButtonPanelComponent {
    @Output() close = new EventEmitter<any>();
    @Output() save = new EventEmitter<any>();
    @Output() reset = new EventEmitter<any>();

    @Input() canSave = true;
    @Input() showSave = true;

    onSave() {
        this.save.emit(true);
    }
    onClose() {
        this.close.emit(false);
    }
    onReset() {
        this.reset.emit(true);
    }
}
