import { Component, OnInit, Input } from '@angular/core';
import { AngularFireUploadTask, AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { tap, finalize, takeLast } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  @Input() zoneName: string;
  @Input() buttonName: string;
  @Input() previewName: string;

  // Main task
  task: AngularFireUploadTask;
  // Progress monitoring
  percentage: Observable<number>;
  snapshot: Observable<any>;
  // Download URL
  downloadURL: Observable<string>;
  url: string;
  // State for dropzone CSS toggling
  isHovering: boolean;
  // updating ProfilePicture
  mySaver = {
    next: x => void(
      this.url = x,
      this.authService.updateUser({'profilePhoto': this.url}),
      console.log('Saved as ' + this.url)),
    error: err => void(console.log('Something went wrong saving ' + err)),
    complete: () => void(console.log('last variable safed' + this.url)),
  };

  constructor(
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private authService: AuthService
    ) {}

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  startUpload(event: FileList) {
    // The File object
    const file = event.item(0);

    // Client-side validation example
    if (file.type.split('/')[0] !== 'image') {
      console.error('unsupported file type :( ');
      return;
    }

    // The storage path
    const path = `test/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(path);
    // Totally optional metadata
    const customMetadata = { app: 'My AngularFire-powered PWA!' };
    // The main task
    this.task = this.storage.upload(path, file, { customMetadata });

    // Progress monitoring
    this.percentage = this.task.percentageChanges();
    this.snapshot   = this.task.snapshotChanges().pipe(
      tap(snap => {
        console.log(snap);
        if (snap.bytesTransferred === snap.totalBytes) {
          // Update firestore on completion
          this.db.collection('photos').add( { path, size: snap.totalBytes });
        }
      })
    );

    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadURL = fileRef.getDownloadURL();
        this.downloadURL.subscribe(this.mySaver);
      })
    ).subscribe();
  }

  // Determines if the upload task is active
  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }
}
