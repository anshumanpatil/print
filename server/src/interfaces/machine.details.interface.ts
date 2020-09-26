import { Document } from 'mongoose';

export interface MachineDetails extends Document {
    readonly height: number;
    readonly width: number;
    readonly type: string;
    readonly paper_id: string;
}