import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'display' })
export class DisplayPipe implements PipeTransform {
    transform(currentAmount: string): string {
        if (currentAmount === "£0.00") return "INSERT COINS";
        return currentAmount;
    }
}