import {ExcelComponent} from "@core/ExcelComponent";

export class Header extends ExcelComponent {
  static className = 'excel__header'

  toHTML() {
    return `
      <div class="excel__header-title">Create Excel</div>
       <input type="text"
       class="excel__header-input"
       value="Новая таблица" placeholder="">
      <div class="excel__header-btns">
        <button class="excel__header-btn del">
        <span class="material-icons">delete</span></button>
        <button class="excel__header-btn exit">
        <span class="material-icons">exit_to_app</span></button>
      </div>
    `
  }
}
