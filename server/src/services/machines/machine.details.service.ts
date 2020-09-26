import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MachineDetailsDTO } from '../../dto/machine/machine.dto';
import { MachineDetails } from '../../interfaces/machine.details.interface';

@Injectable()
export class MachineDetailsService {
    constructor(@InjectModel('MachineDetails') private readonly machineDetailsModel: Model<MachineDetails>) { }
    async getMachineDetails(paper_id: string): Promise<MachineDetails> {
        const machineDetails = await this.machineDetailsModel.findOne({ paper_id }).exec();
        return machineDetails;
    }
    async addMachineDetails(createMachineDetailsDTO: MachineDetailsDTO): Promise<MachineDetailsDTO> {
        const machineDetails = await new this.machineDetailsModel(createMachineDetailsDTO);
        return machineDetails.save();
    }
}
