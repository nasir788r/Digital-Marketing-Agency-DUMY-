import React, { useState } from 'react';
import { FiSliders, FiArrowRight, FiTrendingUp, FiZap } from 'react-icons/fi';

export const ROICalculator = ({ onBookAudit }) => {
  const [monthlySpend, setMonthlySpend] = useState(15000);
  const [currentRoas, setCurrentRoas] = useState(2.4);
  const [targetRoas, setTargetRoas] = useState(4.8);
  const [avgOrderValue, setAvgOrderValue] = useState(95);

  // Calculations
  const currentRevenue = monthlySpend * currentRoas;
  const projectedRevenue = monthlySpend * targetRoas;
  const incrementalRevenue = projectedRevenue - currentRevenue;
  const estimatedOrders = Math.round(projectedRevenue / avgOrderValue);
  const currentOrders = Math.round(currentRevenue / avgOrderValue);
  const orderIncrease = estimatedOrders - currentOrders;

  return (
    <div className="card rounded-xl p-5 sm:p-8 bg-white border border-[#0E4640]/15 shadow-sm">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6 pb-6 border-b border-[#0E4640]/10">
        <div>
          <div className="badge-teal mb-2">Interactive Tool</div>
          <h3 className="text-2xl sm:text-3xl font-normal text-[#102421] serif">
            Growth & ROAS Revenue Calculator
          </h3>
          <p className="text-xs sm:text-sm text-[#64706C] mt-1 max-w-xl">
            Model your projected top-line revenue expansion with VELORA’s algorithmic acquisition framework.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[#0E4640]/5 px-3 py-1.5 rounded-md border border-[#0E4640]/10 text-xs font-mono font-semibold text-[#0E4640]">
          <FiSliders className="w-4 h-4 text-[#0E4640]" />
          <span>Real-Time Math Engine</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sliders Input Panel */}
        <div className="lg:col-span-7 space-y-6">
          {/* Monthly Ad Budget */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-[#102421] uppercase tracking-wider text-[11px]">
                Monthly Ad Spend Budget
              </span>
              <span className="font-mono font-bold text-[#0E4640] bg-[#0E4640]/10 px-2 py-0.5 rounded text-xs sm:text-sm">
                ${monthlySpend.toLocaleString()} / mo
              </span>
            </div>
            <input
              type="range"
              min={2000}
              max={100000}
              step={1000}
              value={monthlySpend}
              onChange={(e) => setMonthlySpend(Number(e.target.value))}
              className="w-full accent-[#0E4640] h-2 bg-[#F7F4EC] rounded-lg cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-[#64706C] font-mono">
              <span>$2,000</span>
              <span>$50,000</span>
              <span>$100,000+</span>
            </div>
          </div>

          {/* Current vs Target ROAS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2 p-3.5 bg-[#F7F4EC]/60 rounded-lg border border-[#0E4640]/10">
              <div className="flex justify-between text-xs">
                <span className="font-semibold text-[#64706C] text-[11px]">Current Blended ROAS</span>
                <span className="font-mono font-bold text-[#102421]">{currentRoas}x</span>
              </div>
              <input
                type="range"
                min={1.0}
                max={4.0}
                step={0.1}
                value={currentRoas}
                onChange={(e) => setCurrentRoas(Number(e.target.value))}
                className="w-full accent-[#64706C] h-1.5 bg-white rounded cursor-pointer"
              />
              <span className="text-[10px] text-[#64706C] block">Baseline before optimization</span>
            </div>

            <div className="space-y-2 p-3.5 bg-[#0E4640]/5 rounded-lg border border-[#0E4640]/15">
              <div className="flex justify-between text-xs">
                <span className="font-bold text-[#0E4640] text-[11px]">Target VELORA ROAS</span>
                <span className="font-mono font-bold text-[#0E4640] text-sm">{targetRoas}x</span>
              </div>
              <input
                type="range"
                min={3.0}
                max={8.0}
                step={0.2}
                value={targetRoas}
                onChange={(e) => setTargetRoas(Number(e.target.value))}
                className="w-full accent-[#0E4640] h-1.5 bg-white rounded cursor-pointer"
              />
              <span className="text-[10px] text-[#0E4640]/80 font-semibold block">Portfolio average standard</span>
            </div>
          </div>

          {/* Average Order Value (AOV) */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold text-[#102421] uppercase tracking-wider text-[11px]">
                Average Order Value / Deal Value (AOV)
              </span>
              <span className="font-mono font-bold text-[#0E4640] text-xs sm:text-sm">
                ${avgOrderValue}
              </span>
            </div>
            <input
              type="range"
              min={25}
              max={500}
              step={5}
              value={avgOrderValue}
              onChange={(e) => setAvgOrderValue(Number(e.target.value))}
              className="w-full accent-[#0E4640] h-2 bg-[#F7F4EC] rounded-lg cursor-pointer"
            />
          </div>
        </div>

        {/* High Density Dark Projection Outcome Box */}
        <div className="lg:col-span-5 bg-[#0E4640] rounded-xl p-5 sm:p-6 text-white flex flex-col justify-between shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-4">
            <div className="flex justify-between items-start">
              <span className="badge text-[9px]">Projected Outcome</span>
              <span className="text-[10px] text-white/50 font-mono">30-Day Model</span>
            </div>

            <div>
              <span className="text-[11px] uppercase tracking-widest text-white/70 font-semibold">
                Projected Monthly Revenue
              </span>
              <div className="text-3xl sm:text-4xl font-bold text-[#E6B85C] serif mt-1">
                ${Math.round(projectedRevenue).toLocaleString()}
              </div>
              <div className="text-xs text-white/70 mt-1 flex items-center gap-1.5 flex-wrap">
                <span className="text-emerald-300 font-bold font-mono">
                  +${Math.round(incrementalRevenue).toLocaleString()}
                </span>
                <span>unlocked revenue / month</span>
              </div>
            </div>

            {/* High Density Mini Stats */}
            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10">
              <div className="bg-[#082F2B] p-2.5 rounded-lg border border-white/5">
                <div className="text-[9px] uppercase tracking-wider text-white/50">Target Orders</div>
                <div className="text-base sm:text-lg font-bold font-mono text-white mt-0.5">
                  {estimatedOrders.toLocaleString()}
                </div>
                <div className="text-[9px] text-[#E6B85C]">+{orderIncrease} new customers</div>
              </div>

              <div className="bg-[#082F2B] p-2.5 rounded-lg border border-white/5">
                <div className="text-[9px] uppercase tracking-wider text-white/50">ROAS Multiple</div>
                <div className="text-base sm:text-lg font-bold font-mono text-[#E6B85C] mt-0.5">
                  {(targetRoas / currentRoas).toFixed(1)}x Lift
                </div>
                <div className="text-[9px] text-emerald-300">Efficiency multiplier</div>
              </div>
            </div>
          </div>

          <div className="relative z-10 pt-6">
            <button
              onClick={onBookAudit}
              className="w-full btn-gold py-3 text-xs uppercase tracking-wider font-bold shadow-lg flex items-center justify-center gap-2"
              id="calc-claim-forecast"
            >
              <span>CLAIM YOUR CUSTOM AUDIT ROADMAP</span>
              <FiArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Background subtle glow */}
          <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#E6B85C]/15 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>
    </div>
  );
};
