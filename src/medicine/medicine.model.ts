import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface CreateMedicineAttr {
    readonly name: string;
    readonly dayTime: string;
    readonly time: Date;
    readonly dose: number;
    readonly duration: number;
}
@Table({ tableName: 'medicine' })
export class Medicine extends Model<Medicine, CreateMedicineAttr> {
    @Column({
        type: DataType.INTEGER,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
    })
    id: string;

    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @Column({ type: DataType.STRING, allowNull: false })
    dayTime: string;

    @Column({ type: DataType.DATE, allowNull: false })
    time: Date;

    @Column({ type: DataType.INTEGER, allowNull: false })
    dose: number;

    @Column({ type: DataType.INTEGER, allowNull: false })
    duration: number;
}
