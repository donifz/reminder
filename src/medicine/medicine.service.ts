import { Injectable } from '@nestjs/common';
import { CreateMedicineDto } from './dto/create-medicine.dto';
import { UpdateMedicineDto } from './dto/update-medicine.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Medicine } from './medicine.model';

@Injectable()
export class MedicineService {
    constructor(
        @InjectModel(Medicine)
        private medicineRepository: typeof Medicine,
    ) {}
    async create(createMedicineDto: CreateMedicineDto) {
        const medicine = await this.medicineRepository.create(
            createMedicineDto,
        );
        return medicine;
    }

    async findAll() {
        const medicine = this.medicineRepository.findAll();
        return medicine;
    }

    findOne(id: number) {
        return `This action returns a #${id} medicine`;
    }

    update(id: number, updateMedicineDto: UpdateMedicineDto) {
        return `This action updates a #${id} medicine`;
    }

    remove(id: number) {
        return `This action removes a #${id} medicine`;
    }
}
