import { IStation } from "./station";

export interface ITrip {
    id: number,
    startTime: Date,
    endTime: Date,
    fromStation: IStation,
    toStation: IStation,
}