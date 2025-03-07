export interface StoreStatistic {
    code_status: number;
    data: {
        debtorCount: number;
        image: string | null;
        lateDebtsCount: number;
        totalDebt: string;
    };
    message: string;
}