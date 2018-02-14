import { PipeTransform, Pipe } from '@angular/core';

@Pipe({ name: 'durationPipe' })
export class DurationPipe implements PipeTransform {
    transform(value, args: any): any {
        const milliseconds = Math.floor((value % 1000) / 100),
            seconds = Math.floor((value / 1000) % 60),
            minutes = Math.floor((value / (1000 * 60)) % 60),
            hours = Math.floor((value / (1000 * 60 * 60)) % 24);
        return `${(hours < 10) ? '0' + hours : hours}: ${(minutes < 10) ? '0' + minutes : minutes}: ${(seconds < 10) ? '0' + seconds : seconds}`;
    }
}
