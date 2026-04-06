"use client"

import { useState } from "react"
import { PricingToggle, AnimatedPrice } from "../pioneerui/pricing-toggle"

export default function PricingToggleDemo() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <PricingToggle
        defaultAnnual={false}
        onChange={setIsAnnual}
        discount="Save 20%"
      />
      <div className="flex gap-8">
        <div className="text-center">
          <p className="mb-2 text-sm font-medium text-muted-foreground">Starter</p>
          <AnimatedPrice monthly={9} annual={7} isAnnual={isAnnual} />
        </div>
        <div className="text-center">
          <p className="mb-2 text-sm font-medium text-muted-foreground">Pro</p>
          <AnimatedPrice monthly={29} annual={23} isAnnual={isAnnual} />
        </div>
        <div className="text-center">
          <p className="mb-2 text-sm font-medium text-muted-foreground">Enterprise</p>
          <AnimatedPrice monthly={99} annual={79} isAnnual={isAnnual} />
        </div>
      </div>
    </div>
  )
}
