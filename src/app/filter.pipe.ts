import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'searchByIssueCount'})
export class FilterPipe implements PipeTransform {
    transform(items: any[], args: Object): any {
        if (!items || !args) {
            return items;
        }
        return items.filter(item => item.Issue_count == args);
    }
}
