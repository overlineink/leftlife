import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';
export declare enum Colors {
    primary = "primary",
    accent = "accent",
    warn = "warn"
}
export declare enum Criteria {
    at_least_eight_chars = 0,
    at_least_one_lower_case_char = 1,
    at_least_one_upper_case_char = 2,
    at_least_one_digit_char = 3,
    at_least_one_special_char = 4
}
export declare class MatPasswordStrengthComponent implements OnInit, OnChanges {
    password: string;
    validators: Criteria[];
    externalError: boolean;
    enableLengthRule: boolean;
    enableLowerCaseLetterRule: boolean;
    enableUpperCaseLetterRule: boolean;
    enableDigitRule: boolean;
    enableSpecialCharRule: boolean;
    min: number;
    max: number;
    onStrengthChanged: EventEmitter<number>;
    criteriaMap: Map<Criteria, RegExp>;
    containAtLeastMinChars: boolean;
    containAtLeastOneLowerCaseLetter: boolean;
    containAtLeastOneUpperCaseLetter: boolean;
    containAtLeastOneDigit: boolean;
    containAtLeastOneSpecialChar: boolean;
    passwordFormControl: AbstractControl;
    private _strength;
    private _color;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    readonly strength: number;
    readonly color: string;
    private _containAtLeastMinChars;
    private _containAtLeastOneLowerCaseLetter;
    private _containAtLeastOneUpperCaseLetter;
    private _containAtLeastOneDigit;
    private _containAtLeastOneSpecialChar;
    setRulesAndValidators(): void;
    calculatePasswordStrength(): void;
    reset(): void;
}
