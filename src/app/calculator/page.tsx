'use client';

import { useState, useEffect } from 'react';
import { Calculator, TrendingUp, Percent, DollarSign, ArrowLeftRight, RefreshCw } from 'lucide-react';

// ── Types ─────────────────────────────────────────────────────────
type TabType = 'lotsize' | 'margin' | 'pipvalue' | 'profitloss' | 'exchange';

type CurrencyPair = {
  label: string;
  pipSize: number;     // pip size in quote currency
  contractSize: number;
};

// ── Currency Pairs Config ─────────────────────────────────────────
const CURRENCY_PAIRS: Record<string, CurrencyPair> = {
  'EUR/USD': { label: 'EUR/USD', pipSize: 0.0001, contractSize: 100000 },
  'GBP/USD': { label: 'GBP/USD', pipSize: 0.0001, contractSize: 100000 },
  'USD/JPY': { label: 'USD/JPY', pipSize: 0.01,   contractSize: 100000 },
  'AUD/USD': { label: 'AUD/USD', pipSize: 0.0001, contractSize: 100000 },
  'USD/CAD': { label: 'USD/CAD', pipSize: 0.0001, contractSize: 100000 },
  'USD/CHF': { label: 'USD/CHF', pipSize: 0.0001, contractSize: 100000 },
  'NZD/USD': { label: 'NZD/USD', pipSize: 0.0001, contractSize: 100000 },
  'EUR/GBP': { label: 'EUR/GBP', pipSize: 0.0001, contractSize: 100000 },
  'EUR/JPY': { label: 'EUR/JPY', pipSize: 0.01,   contractSize: 100000 },
  'GBP/JPY': { label: 'GBP/JPY', pipSize: 0.01,   contractSize: 100000 },
};

const LEVERAGE_OPTIONS = ['1:10', '1:20', '1:50', '1:100', '1:200', '1:500'];

const EXCHANGE_CURRENCIES = ['USD', 'EUR', 'GBP', 'INR', 'JPY', 'AUD', 'CAD', 'CHF', 'SGD', 'AED'];

// ── Reusable Input ────────────────────────────────────────────────
const InputField = ({
  label, value, onChange, type = 'number', min, step,
}: {
  label: string; value: string | number; onChange: (v: string) => void;
  type?: string; min?: string; step?: string;
}) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-semibold text-foreground/70 uppercase tracking-wider">{label}</label>
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      min={min}
      step={step}
      className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-foreground text-base focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all duration-300"
    />
  </div>
);

// ── Select Field ──────────────────────────────────────────────────
const SelectField = ({
  label, value, onChange, options,
}: {
  label: string; value: string; onChange: (v: string) => void; options: string[];
}) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm font-semibold text-foreground/70 uppercase tracking-wider">{label}</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-foreground text-base focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/30 transition-all duration-300 appearance-none cursor-pointer"
    >
      {options.map((opt) => (
        <option key={opt} value={opt} className="bg-background">{opt}</option>
      ))}
    </select>
  </div>
);

// ── Result Card ───────────────────────────────────────────────────
const ResultCard = ({ label, value, highlight = false }: { label: string; value: string; highlight?: boolean }) => (
  <div className={`rounded-xl p-4 border ${highlight ? 'border-primary/40 bg-primary/10' : 'border-white/10 bg-white/5'}`}>
    <p className="text-xs font-semibold text-foreground/50 uppercase tracking-wider mb-1">{label}</p>
    <p className={`text-2xl font-bold ${highlight ? 'text-primary' : 'text-foreground'}`}>{value}</p>
  </div>
);

// ── Calculate Button ──────────────────────────────────────────────
const CalcButton = ({ onClick, label }: { onClick: () => void; label: string }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-background font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] hover:scale-[1.02] active:scale-[0.98] text-sm uppercase tracking-wider mt-2"
  >
    <Calculator className="w-4 h-4" />
    {label}
  </button>
);

// ══════════════════════════════════════════════════════════════════
// CALCULATORS
// ══════════════════════════════════════════════════════════════════

// ── 1. Lot Size Calculator ────────────────────────────────────────
const LotSizeCalculator = () => {
  const [balance, setBalance]   = useState('10000');
  const [risk, setRisk]         = useState('2');
  const [stopLoss, setStopLoss] = useState('50');
  const [pair, setPair]         = useState('EUR/USD');
  const [result, setResult]     = useState<null | { lotSize: string; riskAmount: string; units: string }>(null);

  const calculate = () => {
    const b  = parseFloat(balance);
    const r  = parseFloat(risk) / 100;
    const sl = parseFloat(stopLoss);
    const p  = CURRENCY_PAIRS[pair];

    const riskAmount = b * r;
    const pipValue   = p.pipSize * p.contractSize; // pip value per lot in quote currency
    const lotSize    = riskAmount / (sl * pipValue);

    setResult({
      riskAmount: `$${riskAmount.toFixed(2)}`,
      lotSize:    lotSize.toFixed(2),
      units:      Math.round(lotSize * p.contractSize).toLocaleString(),
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField label="Account Balance ($)" value={balance} onChange={setBalance} min="0" />
        <SelectField label="Currency Pair" value={pair} onChange={setPair} options={Object.keys(CURRENCY_PAIRS)} />
        <InputField label="Risk Percentage (%)" value={risk} onChange={setRisk} min="0" step="0.1" />
        <InputField label="Stop Loss (pips)" value={stopLoss} onChange={setStopLoss} min="0" />
      </div>
      <CalcButton onClick={calculate} label="Calculate Lot Size" />
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <ResultCard label="Optimal Lot Size" value={result.lotSize} highlight />
          <ResultCard label="Risk Amount" value={result.riskAmount} />
          <ResultCard label="Units" value={result.units} />
        </div>
      )}
    </div>
  );
};

// ── 2. Margin Calculator ──────────────────────────────────────────
const MarginCalculator = () => {
  const [pair, setPair]         = useState('EUR/USD');
  const [lotSize, setLotSize]   = useState('1');
  const [leverage, setLeverage] = useState('1:100');
  const [price, setPrice]       = useState('1.0850');
  const [result, setResult]     = useState<null | { margin: string; freeMargin: string; marginLevel: string }>(null);

  const calculate = () => {
    const p          = CURRENCY_PAIRS[pair];
    const lev        = parseInt(leverage.split(':')[1]);
    const lots       = parseFloat(lotSize);
    const currPrice  = parseFloat(price);
    const notional   = lots * p.contractSize * currPrice;
    const margin     = notional / lev;

    setResult({
      margin:      `$${margin.toFixed(2)}`,
      freeMargin:  `$${(margin * 0.8).toFixed(2)}`,
      marginLevel: `${((margin * 1.2 / margin) * 100).toFixed(0)}%`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SelectField label="Currency Pair" value={pair} onChange={setPair} options={Object.keys(CURRENCY_PAIRS)} />
        <SelectField label="Leverage (1:X)" value={leverage} onChange={setLeverage} options={LEVERAGE_OPTIONS} />
        <InputField label="Lot Size" value={lotSize} onChange={setLotSize} min="0" step="0.01" />
        <InputField label="Current Price" value={price} onChange={setPrice} min="0" step="0.0001" />
      </div>
      <CalcButton onClick={calculate} label="Calculate Margin" />
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <ResultCard label="Required Margin" value={result.margin} highlight />
          <ResultCard label="Free Margin (Est.)" value={result.freeMargin} />
          <ResultCard label="Margin Level" value={result.marginLevel} />
        </div>
      )}
    </div>
  );
};

// ── 3. Pip Value Calculator ───────────────────────────────────────
const PipValueCalculator = () => {
  const [pair, setPair]       = useState('EUR/USD');
  const [lotSize, setLotSize] = useState('1');
  const [price, setPrice]     = useState('1.0850');
  const [accCurrency, setAccCurrency] = useState('USD');
  const [result, setResult]   = useState<null | { pipValue: string; pipValueMini: string; pipValueMicro: string }>(null);

  const calculate = () => {
    const p       = CURRENCY_PAIRS[pair];
    const lots    = parseFloat(lotSize);
    const currPrice = parseFloat(price);

    // Pip value = pip size × contract size × lot size / price (for JPY pairs)
    let pipVal = p.pipSize * p.contractSize * lots;
    if (pair.includes('JPY')) pipVal = pipVal / currPrice;

    setResult({
      pipValue:      `$${pipVal.toFixed(2)}`,
      pipValueMini:  `$${(pipVal / 10).toFixed(3)}`,
      pipValueMicro: `$${(pipVal / 100).toFixed(4)}`,
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SelectField label="Currency Pair" value={pair} onChange={setPair} options={Object.keys(CURRENCY_PAIRS)} />
        <SelectField label="Account Currency" value={accCurrency} onChange={setAccCurrency} options={['USD', 'EUR', 'GBP', 'INR']} />
        <InputField label="Lot Size" value={lotSize} onChange={setLotSize} min="0" step="0.01" />
        <InputField label="Current Price" value={price} onChange={setPrice} min="0" step="0.0001" />
      </div>
      <CalcButton onClick={calculate} label="Calculate Pip Value" />
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <ResultCard label="Pip Value (Standard)" value={result.pipValue} highlight />
          <ResultCard label="Pip Value (Mini Lot)" value={result.pipValueMini} />
          <ResultCard label="Pip Value (Micro Lot)" value={result.pipValueMicro} />
        </div>
      )}
    </div>
  );
};

// ── 4. Profit/Loss Calculator ─────────────────────────────────────
const ProfitLossCalculator = () => {
  const [pair, setPair]         = useState('EUR/USD');
  const [lotSize, setLotSize]   = useState('1');
  const [entryPrice, setEntry]  = useState('1.0850');
  const [exitPrice, setExit]    = useState('1.0900');
  const [position, setPosition] = useState<'buy' | 'sell'>('buy');
  const [result, setResult]     = useState<null | { pips: string; profitUSD: string; isProfit: boolean }>(null);

  const calculate = () => {
    const p     = CURRENCY_PAIRS[pair];
    const lots  = parseFloat(lotSize);
    const entry = parseFloat(entryPrice);
    const exit  = parseFloat(exitPrice);

    const priceDiff  = position === 'buy' ? exit - entry : entry - exit;
    const pips       = priceDiff / p.pipSize;
    const pipVal     = p.pipSize * p.contractSize * lots;
    const profit     = pips * pipVal;

    setResult({
      pips:      `${pips.toFixed(1)} pips`,
      profitUSD: `$${Math.abs(profit).toFixed(2)}`,
      isProfit:  profit >= 0,
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SelectField label="Currency Pair" value={pair} onChange={setPair} options={Object.keys(CURRENCY_PAIRS)} />
        <InputField label="Entry Price" value={entryPrice} onChange={setEntry} min="0" step="0.0001" />
        <InputField label="Lot Size" value={lotSize} onChange={setLotSize} min="0" step="0.01" />
        <InputField label="Exit Price" value={exitPrice} onChange={setExit} min="0" step="0.0001" />
      </div>

      {/* Position Type Toggle */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-foreground/70 uppercase tracking-wider">Position Type</label>
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={() => setPosition('buy')}
            className={`flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all duration-300 border
              ${position === 'buy'
                ? 'bg-green-500/20 border-green-500/50 text-green-400'
                : 'bg-white/5 border-white/10 text-foreground/50 hover:border-green-500/30'}`}
          >
            <TrendingUp className="w-4 h-4" /> Buy (Long)
          </button>
          <button
            onClick={() => setPosition('sell')}
            className={`flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all duration-300 border
              ${position === 'sell'
                ? 'bg-red-500/20 border-red-500/50 text-red-400'
                : 'bg-white/5 border-white/10 text-foreground/50 hover:border-red-500/30'}`}
          >
            <TrendingUp className="w-4 h-4 rotate-180" /> Sell (Short)
          </button>
        </div>
      </div>

      <CalcButton onClick={calculate} label="Calculate Profit / Loss" />
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <ResultCard
            label={result.isProfit ? '🟢 Profit' : '🔴 Loss'}
            value={`${result.isProfit ? '+' : '-'}${result.profitUSD}`}
            highlight
          />
          <ResultCard label="Pips Moved" value={result.pips} />
        </div>
      )}
    </div>
  );
};

// ── 5. Exchange Rate Calculator ───────────────────────────────────
const ExchangeRateCalculator = () => {
  const [fromCurrency, setFrom]   = useState('USD');
  const [toCurrency, setTo]       = useState('INR');
  const [amount, setAmount]       = useState('1000');
  const [rate, setRate]           = useState('');
  const [result, setResult]       = useState<null | { converted: string; rate: string; inverse: string }>(null);
  const [loading, setLoading]     = useState(false);
  const [lastUpdated, setLastUpdated] = useState('');

  // Fetch live exchange rate
  const fetchRate = async () => {
    setLoading(true);
    try {
      const res  = await fetch(`https://open.er-api.com/v6/latest/${fromCurrency}`);
      const data = await res.json();
      const liveRate = data.rates[toCurrency];
      setRate(liveRate.toFixed(6));
      setLastUpdated(new Date().toLocaleTimeString());
      return liveRate;
    } catch {
      // Fallback mock rates if API fails
      const fallback: Record<string, number> = {
        'INR': 83.5, 'EUR': 0.92, 'GBP': 0.79,
        'JPY': 149.5, 'AUD': 1.53, 'CAD': 1.36,
        'CHF': 0.89, 'SGD': 1.34, 'AED': 3.67, 'USD': 1,
      };
      const fallbackRate = fallback[toCurrency] || 1;
      setRate(fallbackRate.toFixed(6));
      return fallbackRate;
    } finally {
      setLoading(false);
    }
  };

  const calculate = async () => {
    const liveRate  = rate ? parseFloat(rate) : await fetchRate();
    const amt       = parseFloat(amount);
    const converted = amt * liveRate;

    setResult({
      converted: `${toCurrency} ${converted.toLocaleString('en-IN', { maximumFractionDigits: 2 })}`,
      rate:      `1 ${fromCurrency} = ${liveRate.toFixed(4)} ${toCurrency}`,
      inverse:   `1 ${toCurrency} = ${(1 / liveRate).toFixed(4)} ${fromCurrency}`,
    });
  };

  const swapCurrencies = () => {
    setFrom(toCurrency);
    setTo(fromCurrency);
    setRate('');
    setResult(null);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InputField label="Amount" value={amount} onChange={setAmount} min="0" />
        <div /> {/* spacer */}
        <SelectField label="From Currency" value={fromCurrency} onChange={(v) => { setFrom(v); setRate(''); setResult(null); }} options={EXCHANGE_CURRENCIES} />
        <SelectField label="To Currency" value={toCurrency} onChange={(v) => { setTo(v); setRate(''); setResult(null); }} options={EXCHANGE_CURRENCIES} />
      </div>

      {/* Swap Button */}
      <button
        onClick={swapCurrencies}
        className="flex items-center gap-2 mx-auto text-primary hover:text-accent transition-colors duration-300 font-semibold text-sm"
      >
        <ArrowLeftRight className="w-4 h-4" /> Swap Currencies
      </button>

      {/* Manual rate override */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-semibold text-foreground/70 uppercase tracking-wider">
          Exchange Rate (auto-fetched or manual)
        </label>
        <div className="flex gap-2">
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            placeholder="Click fetch or enter manually"
            className="flex-1 bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary/60 transition-all duration-300"
          />
          <button
            onClick={fetchRate}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-primary hover:border-primary/40 transition-all duration-300 font-semibold text-sm"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            {loading ? 'Fetching...' : 'Live Rate'}
          </button>
        </div>
        {lastUpdated && (
          <p className="text-xs text-foreground/40">Last updated: {lastUpdated}</p>
        )}
      </div>

      <CalcButton onClick={calculate} label="Convert Currency" />
      {result && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <ResultCard label="Converted Amount" value={result.converted} highlight />
          <ResultCard label="Exchange Rate" value={result.rate} />
          <ResultCard label="Inverse Rate" value={result.inverse} />
        </div>
      )}
    </div>
  );
};

// ══════════════════════════════════════════════════════════════════
// MAIN PAGE
// ══════════════════════════════════════════════════════════════════

const TABS = [
  { id: 'lotsize',    label: 'Lot Size',     icon: Calculator,   desc: 'Calculate optimal lot size based on risk management' },
  { id: 'margin',     label: 'Margin',       icon: Percent,      desc: 'Calculate required margin for your position' },
  { id: 'pipvalue',   label: 'Pip Value',    icon: TrendingUp,   desc: 'Calculate monetary value of each pip movement' },
  { id: 'profitloss', label: 'Profit/Loss',  icon: DollarSign,   desc: 'Calculate potential profit or loss for your trades' },
  { id: 'exchange',   label: 'Exchange Rate',icon: ArrowLeftRight,desc: 'Convert between currencies with live rates' },
] as const;

export default function CalculatorPage() {
  const [activeTab, setActiveTab] = useState<TabType>('lotsize');

  const activeTabData = TABS.find(t => t.id === activeTab)!;
  const Icon = activeTabData.icon;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-10 max-w-4xl">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="bg-gradient-to-br from-primary to-accent p-2.5 rounded-xl">
              <Calculator className="w-6 h-6 text-background" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Trading Calculators
            </h1>
          </div>
          <p className="text-foreground/60 ml-14">Essential calculators to help you manage risk and plan your trades</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8">
          {TABS.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 border
                  ${isActive
                    ? 'bg-gradient-to-r from-primary to-accent text-background border-transparent shadow-[0_0_20px_rgba(0,212,255,0.3)]'
                    : 'bg-white/5 border-white/10 text-foreground/60 hover:text-primary hover:border-primary/30'}`}
              >
                <TabIcon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Calculator Card */}
        <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/10">
          {/* Card Header */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
            <Icon className="w-5 h-5 text-primary" />
            <div>
              <h2 className="text-xl font-bold text-foreground">{activeTabData.label} Calculator</h2>
              <p className="text-sm text-foreground/50">{activeTabData.desc}</p>
            </div>
          </div>

          {/* Active Calculator */}
          {activeTab === 'lotsize'    && <LotSizeCalculator />}
          {activeTab === 'margin'     && <MarginCalculator />}
          {activeTab === 'pipvalue'   && <PipValueCalculator />}
          {activeTab === 'profitloss' && <ProfitLossCalculator />}
          {activeTab === 'exchange'   && <ExchangeRateCalculator />}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-foreground/30 mt-6">
          Results are for educational purposes only. Always verify with your broker before trading.
        </p>
      </div>
    </div>
  );
}
