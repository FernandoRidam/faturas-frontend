export interface Invoice {
  id: string;
  clientId: string;
  referenceMonth: Date;
  electricityKwh: number;
  electricityValue: number;
  energySCEEKwh: number;
  energySCEEValue: number;
  energyGDIKwh: number;
  energyGDIValue: number;
  contribution: number;
  total: number;
  maturity: string;
};
