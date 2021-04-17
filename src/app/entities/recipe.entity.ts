import { Bulk } from "./bulk.entity";
import { FactoryType } from "./factory-type.entity";

export interface Recipe {
  name: string;
  producer: FactoryType;
  inputs: Bulk[];
  output: Bulk;
}