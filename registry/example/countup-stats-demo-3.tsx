"use client";

import { CountUp } from "@/registry/pioneerui/countup-stats";

export default function AdvancedCountUp() {
  const formatValue = (value: number) => `${value.toFixed(2)}%`;

  return (
    <CountUp
      start={0}
      end={75}
      duration={4}
      decimals={2}
      suffix="%"
      formattingFn={formatValue}
      variant="info"
      size="xl"
    />
  );
}