import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'searchByIssueCount'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], filter: Object): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => item.Issue_count == filter);
    }
}
