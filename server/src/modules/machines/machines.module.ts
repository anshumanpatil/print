import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';

import { MachineDetailsService } from '../../services/machines/machine.details.service';
import { MachinesService } from '../../services/machines/machines.service';
import { MachinesController } from '../../controllers/machines/machines.controller';
import { Machine } from '../../dbo/machines/machine.entity';

import { MachineDetails, MachineDetailsSchema } from '../../schemas/machine/machine.schema';
@Module({
    imports: [
        TypeOrmModule.forFeature([Machine]),
        MongooseModule.forFeature([{ name: MachineDetails.name, schema: MachineDetailsSchema }])
    ],
    providers: [MachinesService, MachineDetailsService],
    controllers: [MachinesController],
})
export class MachinesModule { }
