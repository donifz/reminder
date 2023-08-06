import { Module } from '@nestjs/common';
import { MedicineService } from './medicine.service';
import { MedicineController } from './medicine.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Medicine } from './medicine.model';

@Module({
    controllers: [MedicineController],
    providers: [MedicineService],
    imports: [SequelizeModule.forFeature([Medicine])],
})
export class MedicineModule {}
