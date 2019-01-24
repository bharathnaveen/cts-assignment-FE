import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text: any;
  issueCount = '';
  headers = [];
  users = [];

  extractData(csvText: any) {
    let rows = csvText.split("\n");
    for (let i = 0; i < rows.length; i++) {
      if (i === 0) {
        let headerNames = rows[i].split(",");
        for (let headerName of headerNames) {
          this.headers.push({ headerName: JSON.parse(headerName), headerProperty: headerName.replace(/ /g, "_") });
        }
      } else {
        let row = rows[i].split(",");
        let user = {};
        for (let j = 0; j < this.headers.length; j++) {
          for (let k = 0; k < row.length; k++) {
            if (j == k) {
              user[JSON.parse(this.headers[j].headerProperty)] = JSON.parse(row[k]);
            }
          }
        }
        this.users.push(user);
      }
    }
  }

  handleFileSelect(evt: any) {
    let files = evt.target.files; // FileList object
    let file = files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      let text = reader.result;
      this.extractData(text);
    };
  }
}
