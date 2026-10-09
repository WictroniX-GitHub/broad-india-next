/**
 * Vapour absorption chiller running-cost and payback estimate.
 *
 * Engineering basis (BROAD data, see /vapour-absorption-chiller/steam-hot-water-absorption-chiller):
 * - heat per TR = 3.517 kW / COP; steam use ≈ 8 kg/h per TR (single-stage) and ≈ 5 kg/h per TR (two-stage)
 * - the absorption chiller's own pumps and controls draw about 1–3% of an equivalent electric chiller; 3% is used
 * - default electric chiller draw 0.7 kW/TR matches Kejriwal Geotech (1,200 TR avoided ≈ 850 kW)
 * Grid emission factor ≈ 0.72 kg CO2/kWh (CEA CO2 Baseline Database, India).
 */

export type ChillerType = "single" | "two";

export const STEAM_KG_PER_TR_HOUR: Record<ChillerType, number> = { single: 8, two: 5 };
export const ABSORPTION_AUX_SHARE = 0.03;
export const GRID_KG_CO2_PER_KWH = 0.72;

export interface PaybackInput {
  tr: number;
  hoursPerYear: number;
  tariff: number; // ₹ per kWh
  electricKwPerTr: number;
  chillerType: ChillerType;
  steamCostPerTonne: number; // ₹ per tonne; 0 for free waste heat
  quote?: number; // ₹, the visitor's quoted project cost
}

export interface PaybackResult {
  electricCost: number;
  absorptionPowerCost: number;
  steamCost: number;
  annualSavings: number;
  paybackYears?: number;
  co2TonnesAvoided: number;
}

export function estimatePayback(i: PaybackInput): PaybackResult {
  const electricKwh = i.tr * i.electricKwPerTr * i.hoursPerYear;
  const absorptionKwh = electricKwh * ABSORPTION_AUX_SHARE;
  const electricCost = electricKwh * i.tariff;
  const absorptionPowerCost = absorptionKwh * i.tariff;
  const steamTonnes = (i.tr * STEAM_KG_PER_TR_HOUR[i.chillerType] * i.hoursPerYear) / 1000;
  const steamCost = steamTonnes * i.steamCostPerTonne;
  const annualSavings = electricCost - absorptionPowerCost - steamCost;
  return {
    electricCost,
    absorptionPowerCost,
    steamCost,
    annualSavings,
    // No payback when nothing is saved or no quote was entered
    paybackYears: i.quote && i.quote > 0 && annualSavings > 0 ? i.quote / annualSavings : undefined,
    co2TonnesAvoided: ((electricKwh - absorptionKwh) * GRID_KG_CO2_PER_KWH) / 1000,
  };
}
