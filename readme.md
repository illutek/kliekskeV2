# 't Kliekske

## CUSTOM GRID 
``` scss
.col-1-of-2 {
  width: calc((100% - #{$gutter-horizontal}) / 2);
}

.col-1-of-3 {
  width: calc((100% - 2 * #{$gutter-horizontal}) / 3);
}

.col-2-of-3 {
  width: calc(2 * ((100% - 2 * #{$gutter-horizontal}) / 3) + #{$gutter-horizontal});
}

.col-1-of-4 {
  width: calc((100% - 3 * #{$gutter-horizontal}) / 4);
}

.col-2-of-4 {
  width: calc(2 * ((100% - 3 * #{$gutter-horizontal}) / 4) + #{$gutter-horizontal}) ;
}

.col-3-of-4 {
  width: calc(3 * ((100% - 3 * #{$gutter-horizontal}) / 4) + (2 * #{$gutter-horizontal}));
}
```


## FLEX


## Programma on programma page
Een view programma-block (Content display custom display = super_teaser), Display a specified number of items | 1 item  
Footer in that view = View area (VoorbijProgramma) Display a specified number of items | 50 items, skip 1 = so here is the
first item skipt.  
The title Voorbije programma's also in the view footer area with a extra class heading-secondary--view-footer

De voorstelling datums in een tabel 100% breed in de tekst-editor = spijtig  
Waarom 2lijnen met datums op 1 locatie



TODO table override default inline styles ckeditor