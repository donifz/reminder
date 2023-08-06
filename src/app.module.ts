import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { MedicineModule } from './medicine/medicine.module';
import { User } from './user/user.model';
import { Medicine } from './medicine/medicine.model';

@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: '.env',
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTRGES_USER,
            password: process.env.POSTRGES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User, Medicine],
            autoLoadModels: true,
        }),
        UserModule,
        MedicineModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
