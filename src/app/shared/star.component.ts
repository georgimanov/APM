import { Component, OnChanges, Input } from '@angular/core';

@Component({
    templateUrl: './star.component.html',
    selector: 'pm-star',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    starWidth: number;
    @Input() rating: number;
    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    }
}