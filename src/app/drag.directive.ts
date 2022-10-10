import { Directive, HostBinding, HostListener,EventEmitter , Output} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileHandler } from './_model/modelHandler';


@Directive({
  selector: '[appDrag]'
})
export class DragDirective {

  constructor(private sanitizier:DomSanitizer) { }


@Output() files:EventEmitter<FileHandler> = new EventEmitter();

@HostBinding("style.background")private background ="#eee"

@HostListener("dragover",["$event"])
public onDragOver(event:DragEvent){
	
	event.preventDefault();
	event.stopPropagation();
	this.background ="#999"
	
}

@HostListener("dragleave",["$event"])
public onDragLeve(event:DragEvent){
	event.preventDefault();
	event.stopPropagation();
	this.background ="#eee"
}


@HostListener("drop",["$event"])
public onDrop(event:any){
	event.preventDefault();
	event.stopPropagation();
	//this.background ="#eee"
	
	let fileHandler: FileHandler  ;
	
	
	const file = event.dataTransfer.files[0];
	const url =this.sanitizier.bypassSecurityTrustUrl(window.URL.createObjectURL(file));


	fileHandler ={file,url}
	this.files.emit(fileHandler)

   
}




}

