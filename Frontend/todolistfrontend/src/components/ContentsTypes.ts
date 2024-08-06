export interface dutyType {
    readonly id: string;
    name: string;
    deleteDuty?: ((id: string) => void);
    changeName?: ((type: dutyType) => void);
}