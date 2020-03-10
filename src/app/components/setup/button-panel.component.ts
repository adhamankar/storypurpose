import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-button-panel',
    templateUrl: './button-panel.component.html'
})
export class ButtonPanelComponent {
    @Output() close = new EventEmitter<any>();
    @Output() save = new EventEmitter<any>();
    @Output() reset = new EventEmitter<any>();

    onSave() {
        this.save.emit(true);
    }
    onClose() {
        this.close.emit(true);
    }
    onReset() {
        this.reset.emit(true);
    }
}
