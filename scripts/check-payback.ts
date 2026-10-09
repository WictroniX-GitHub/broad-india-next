// Self-check for lib/payback.ts. Run: node scripts/check-payback.ts
import assert from "node:assert/strict";
import { estimatePayback } from "../lib/payback.ts";

// Kejriwal Geotech: 1,200 TR on free waste steam, ~850 kW avoided, ~₹5.5 crore saved a year
const k = estimatePayback({ tr: 1200, hoursPerYear: 8000, tariff: 8, electricKwPerTr: 0.7, chillerType: "single", steamCostPerTonne: 0, quote: 3e7 });
assert.ok(Math.abs(k.annualSavings - 1200 * 0.7 * 8000 * 8 * 0.97) < 1);
assert.ok(k.annualSavings > 5e7 && k.annualSavings < 5.5e7);
assert.ok(k.paybackYears! > 0.5 && k.paybackYears! < 0.6);

// Purchased steam costs money: savings drop and two-stage beats single-stage
const single = estimatePayback({ tr: 500, hoursPerYear: 6000, tariff: 9, electricKwPerTr: 0.7, chillerType: "single", steamCostPerTonne: 1500 });
const two = estimatePayback({ tr: 500, hoursPerYear: 6000, tariff: 9, electricKwPerTr: 0.7, chillerType: "two", steamCostPerTonne: 1500 });
assert.ok(two.annualSavings > single.annualSavings);
assert.equal(single.paybackYears, undefined); // no quote entered

// Expensive steam: no savings, so no payback even with a quote
const loss = estimatePayback({ tr: 100, hoursPerYear: 4000, tariff: 5, electricKwPerTr: 0.6, chillerType: "single", steamCostPerTonne: 5000, quote: 1e6 });
assert.ok(loss.annualSavings < 0);
assert.equal(loss.paybackYears, undefined);

console.log("payback checks passed");
