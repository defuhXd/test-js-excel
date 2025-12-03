import {ExcelComponent} from "@core/ExcelComponent";
import {createTable} from "@/components/table/table.template";

export class Table extends ExcelComponent {
  static className = 'excel__table'

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input', 'click'],
    });
  }

  toHTML() {
    return createTable();
  }

  onInput(event) {
    console.log('Formula: onInput', event.target.textContent.trim())
  }

  onClick(event) {
    console.log('Formula: onClick', event)
  }
}
