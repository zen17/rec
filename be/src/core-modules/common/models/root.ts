import { Entity, PrimaryGeneratedColumn } from "typeorm";

export abstract class Root {
    @PrimaryGeneratedColumn()
    id: number;
}
