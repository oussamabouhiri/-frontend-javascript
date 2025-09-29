// task_3/js/crud.d.ts

import { Student } from "./interface";

export function insertRow(student: Student): number;
export function deleteRow(rowId: number): void;
export function updateRow(rowId: number, student: Student): number;

