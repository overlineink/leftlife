import { MatDialogRef } from '@angular/material';
import { LegalityDialogParams } from '../../interfaces/legality.dialog.intreface';
export declare class LegalityDialogComponent {
    dialogRef: MatDialogRef<LegalityDialogComponent>;
    data: LegalityDialogParams;
    checkTOS: boolean;
    checkPrivacyPolicy: boolean;
    private _disableConfirmActionButton;
    constructor(dialogRef: MatDialogRef<LegalityDialogComponent>, data: LegalityDialogParams);
    readonly disableConfirmActionButton: boolean;
    closeDialog(): void;
}
