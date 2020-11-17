import { Pipe, PipeTransform } from '@angular/core';
/*
 * Replaces empty/null text with a custom placeholder (defaults to '--').
 * Usage:
 *   string | textPlaceholder
 *   string | textPlaceholder:string
 * Example:
 *   {{ null | textPlaceholder:'empty' }}
 *   formats to: empty
*/
@Pipe({name: 'textPlaceholder'})
export class TextPlaceholderPipe implements PipeTransform {
  transform(value: any, placeholder: string = '--'): string {
    return (value !== null && value !== undefined) ? value : placeholder;
  }
}
