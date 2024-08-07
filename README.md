# Angular Material File Upload ![npm](https://img.shields.io/npm/v/mat-file-upload) ![Build](https://img.shields.io/github/actions/workflow/status/bjsawyer/mat-file-upload/deploy.yml)


This tool is a simple & configurable file upload component for use with [Angular Material](https://material.angular.io/).

Live Demo: https://bjsawyer.github.io/mat-file-upload/

<img width="493" alt="Screenshot 2024-07-15 at 5 06 27 PM" src="https://github.com/user-attachments/assets/aa8deb75-8f93-47ef-abcd-42f9b2ede008">

## Prerequisites

In order to use `mat-file-upload` in your app, you must have the following dependencies installed:

- [Angular](https://angular.io/)
- [Angular Material](https://material.angular.io/)
- [Material Icons](https://material.angular.io/guide/getting-started#step-6-optional-add-material-icons)

## Usage

1. Install package from npm (`npm i mat-file-upload`).
2. Add `MatFileUploadModule` to your module's imports, like so:

```typescript
@NgModule({
  declarations: [AppComponent],
  imports: [
    ...
    MatFileUploadModule,
    ...
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

3. Add the element to your template, like so:

Basic:

<!-- prettier-ignore -->
```html
<mat-file-upload></mat-file-upload>
```

Advanced:

<!-- prettier-ignore -->
```html
<mat-file-upload
  [labelText]="'Select a file (or multiple) to upload:'"
  [selectButtonText]="'Choose File(s)'"
  [selectFilesButtonType]="button"
  [uploadButtonText]="'Submit'"
  [uploadButtonType]="submit"
  [allowMultipleFiles]="true"
  [showUploadButton]="true"
  [customSvgIcon]="'close_custom'"
  [acceptedTypes]="'.png, .jpg, .jpeg'"
  (uploadClicked)="onUploadClicked($event)"
  (selectedFilesChanged)="onSelectedFilesChanged($event)"
>
</mat-file-upload>
```

## Options

### `@Input()` Properties

| Directive                 | Type      | Description                                                                                                    | Default Value    |
| ------------------------- | --------- | -------------------------------------------------------------------------------------------------------------- | ---------------- |
| `[labelText]`             | `string`  | The text to be displayed for the file upload label                                                             | "Select file(s)" |
| `[selectButtonText]`      | `string`  | The text to be displayed for the button that allows the user to select file(s)                                 | "Select file(s)" |
| `[selectFilesButtonType]` | `string`  | The HTML "type" attribute of the "Select Files" button                                                         | "button"         |
| `[uploadButtonText]`      | `string`  | The text to be displayed for the button that allows the user to upload file(s)                                 | "Upload File(s)" |
| `[uploadButtonType]`      | `string`  | The HTML "type" attribute of the "Upload" button                                                               | "button"         |
| `[allowMultipleFiles]`    | `boolean` | True/false representing whether the user can select multiple files at a time                                   | false            |
| `[showUploadButton]`      | `boolean` | True/false representing whether the "Upload" button is shown in the DOM                                        | true             |
| `[customSvgIcon]`         | `string`  | The name of the custom svgIcon to be used as the "close" button; otherwise defaults to Material's "close" icon | null             |
| `[acceptedTypes]`         | `string`  | The list of file types that are allowed to be uploaded                                                         | "\*.\*"          |

### `@Output()` Properties

| Directive                | Type                     | Description                                                                                  |
| ------------------------ | ------------------------ | -------------------------------------------------------------------------------------------- |
| `(uploadClicked)`        | `EventEmitter<FileList>` | Event handler that emits the list of selected files whenever the "Upload" button is clicked  |
| `(selectedFilesChanged)` | `EventEmitter<FileList>` | Event handler that emits the list of selected files whenever the user changes file selection |
