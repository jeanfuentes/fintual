export interface Goal {
  id: string;
  type: string;
  attributes: {
    name: string;
    nameWithoutSuffix: string;
    nav: number;
    createdAt: string;
    timeframe: number;
    deposited: number;
    hidden: boolean;
    profit: number;
    investments: { weight: number; assetId: number }[];
    publicLink: string | null;
    paramId: number;
    goalType: string;
    translatedGoalType: string;
    regime: string;
    completed: boolean;
    hasAnyWwithdrawals: boolean;
    eligibleForDeposits: boolean;
    eligibleForInternalMlt: boolean;
    monthlyDeposit: number;
    simulatedDeposit: number;
    fundsSource: string;
    fundsSourceDescription: string | null;
    notNetDeposited: number;
    withdrawn: number;
    groupGoalId: number | null;
  };
}
