import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { WebcamImage } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'gam-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhotoComponent),
      multi: true,
    },
  ],
})
export class PhotoComponent implements OnInit, ControlValueAccessor {
  isOver = false;
  value: File | null = null;
  onChange = (d: any) => {};
  onTouch = () => {};

  @ViewChild('photo') photo: ElementRef | null = null;

  @Input() photoByDefault: string = '';

  usingWebcam = false;
  checkedWebcam = false;

  triggerSnapShot: Subject<void> = new Subject<void>();
  constructor() {}

  ngOnInit(): void {}

  writeValue(value: File): void {
    if (value) {
      this.value = value;
    }
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  loadImage(d: File) {
    this.loadInDiv(d);
  }

  loadInDiv(file: File) {
    this.value = file;
    this.onChange(this.value);
    this.onTouch();
    const fr: FileReader = new FileReader();
    fr.onloadend = (response: any) => {
      const dataBase64 = response.target.result;
      this.loadPhoto(dataBase64);
    };

    fr.readAsDataURL(file);
  }

  loadPhoto(img: string | ArrayBuffer): void {
    (this.photo as ElementRef).nativeElement.innerHTML = '';
    (
      this.photo as ElementRef
    ).nativeElement.style.backgroundImage = `url(${img})`;
  }

  ngAfterViewInit() {
    if (this.photoByDefault) {
      const pathPhoto = 'assets/img/' + this.photoByDefault;
      this.loadPhoto(pathPhoto);
    }
  }
  capturePhotoFromWebcam(webcamImage: WebcamImage) {
    this.srcToFile(webcamImage.imageAsDataUrl).then((file: File) =>
      this.loadInDiv(file)
    );
    this.usingWebcam = false;
    this.checkedWebcam = false;
  }
  srcToFile(src: string) {
    return fetch(src)
      .then(function (res) {
        return res.arrayBuffer();
      })
      .then(function (buffer) {
        return new File([buffer], 'avatar', { type: 'image/jpg' });
      });
  }
  changeOriginPhoto() {
    this.usingWebcam = !this.usingWebcam;
    this.checkedWebcam = !this.checkedWebcam;
  }
  takePhoto() {
    this.triggerSnapShot.next();
  }
  triggerAsObservable(): Observable<void> {
    return this.triggerSnapShot.asObservable();
  }
}
