import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Machine } from '../../dbo/machines/machine.entity';
import { MachineDetailsService } from '../../services/machines/machine.details.service';

@Injectable()
export class MachinesService {
    constructor(
        @InjectRepository(Machine) private machineRepository: Repository<Machine>,
        private detailsService: MachineDetailsService
    ) { }

    async getMachine(_id: string): Promise<any> {
        if (_id == 'all') {
            const __searchedMachines = await this.machineRepository.find({
                select: ["name", "isActive", "id"]
            });

            return Promise.all(__searchedMachines.map(machine => this.getSingleMachine(machine.id)));
        }
        return this.getSingleMachine(_id)
    }

    async createMachine(machine: Machine) {
        this.machineRepository.save(machine)
    }

    async updateMachine(machine: Machine) {
        let __searchQuery = { "id": machine.id };
        const __searchedMachines = await this.machineRepository.findOne({
            select: ["name", "isActive", "id"],
            where: [__searchQuery]
        });
        Object.keys(machine).map((v) => __searchedMachines[v] = machine[v]);
        return this.machineRepository.save(__searchedMachines)
    }

    async deleteMachine(machine: Machine) {
        this.machineRepository.delete(machine);
    }

    // Internal Functions
    async getSingleMachine(_id: string): Promise<any> {
        let __searchQuery = { "id": _id };
        const __searchedMachine = await this.machineRepository.findOne({
            select: ["name", "isActive", "id"],
            where: [__searchQuery]
        });
        const __searchedMachineDetails = await this.detailsService.getMachineDetails(__searchedMachine.id)

        return { ...__searchedMachine, "profile": __searchedMachineDetails }
    }
}
