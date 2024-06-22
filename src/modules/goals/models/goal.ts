import { Investment } from "./investment";

export interface Goal {
  id: string;
  name: string;
  createdAt: string;
  deposited: number;
  hidden: boolean;
  profit: number;
  regime: string;
  investments: Investment[];
}
