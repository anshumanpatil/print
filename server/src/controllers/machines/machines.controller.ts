import { Controller, Post, Body, Get, Put, Delete, Param, Res, HttpStatus, NotFoundException } from '@nestjs/common';
import { MachinesService } from '../../services/machines/machines.service';
import { MachineDetailsService } from '../../services/machines/machine.details.service';
import { Machine } from '../../dbo/machines/machine.entity';
import { MachineDetailsDTO } from '../../dto/machine/machine.dto';
@Controller('machine')
export class MachinesController {

    constructor(private service: MachinesService, private detailsService: MachineDetailsService) { }

    @Get('details')
    async getMachineDetails(): Promise<any> {
        return this.detailsService.getMachineDetails('efc0baba-1e27-4d52-82ab-31129916bd04');
    }

    @Post('details')
    async addMachineDetails(@Res() res, @Body() createMachineDetailsDTO: MachineDetailsDTO): Promise<any> {
        const machineDetails = await this.detailsService.addMachineDetails(createMachineDetailsDTO);
        return res.status(HttpStatus.CREATED).json({
            message: "Machine Details has been created successfully",
            machineDetails
        });
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getMachine(params.id);
    }

    @Post()
    create(@Body() machine: Machine) {
        return this.service.createMachine(machine);
    }

    @Put()
    update(@Body() machine: Machine) {
        return this.service.updateMachine(machine);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.getMachine(params.id);
    }

}
