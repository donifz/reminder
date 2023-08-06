import { Column, DataType, Model } from 'sequelize-typescript';

export class Time extends Model<Time> {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
    })
    id: number;
}
