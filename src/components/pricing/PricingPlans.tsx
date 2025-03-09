"use client";

import { motion } from "framer-motion";
import { useState } from "react";



<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="rounded-lg p-6 shadow-md border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800"
>
  {/* 卡片內容 */}
</motion.div>
type Plan = {
  name: string;
  price: number;
  features: string[];
  isRecommended?: boolean;
};

const plans: Plan[] = [
  { name: "Bronze", price: 2.99, features: ["1 Website", "Unlimited Bandwidth", "30GB NVMe SSD", "1-click WordPress", "Free Domain", "Free SSL", "Free Daily Backups", "LiteSpeed Webserver", "cPanel", "45 Day Money Back"] },
  { name: "Silver", price: 4.99, features: ["100 Websites", "Unlimited Bandwidth", "50GB NVMe SSD", "1-click WordPress", "Free Domain", "Free SSL", "Free Daily Backups", "LiteSpeed Webserver", "cPanel", "45 Day Money Back"], isRecommended: true },
  { name: "Gold", price: 8.99, features: ["Unlimited Websites", "Unlimited Bandwidth", "100GB NVMe SSD", "1-click WordPress", "Free Domain", "Free SSL", "Free Daily Backups", "LiteSpeed Webserver", "cPanel", "45 Day Money Back"] },
];

export default function Pricing() {
  const [period, setPeriod] = useState<"monthly" | "yearly">("monthly");

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
          Cloud Hosting Plans
        </h1>
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setPeriod("monthly")}
            className={`px-4 py-2 rounded-l-lg ${period === "monthly" ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700"}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setPeriod("yearly")}
            className={`px-4 py-2 rounded-r-lg ${period === "yearly" ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700"}`}
          >
            12 Month
          </button>
        </div>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Not sure which plan to choose? Consult with our team and we will find the best option for you.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`rounded-lg p-6 shadow-md border ${plan.isRecommended ? "border-blue-500 bg-blue-50 dark:bg-blue-900" : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"}`}
            >
              {plan.isRecommended && (
                <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                  RECOMMENDED
                </span>
              )}
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">{plan.name}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {plan.name === "Bronze" && "Get everything you need to easily manage and grow your website."}
                {plan.name === "Silver" && "Level up to superior performance and expanded functionality."}
                {plan.name === "Gold" && "Discover the highest level of performance optimization and resources."}
              </p>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                ${plan.price}/mo <span className="text-sm text-red-500">Save 50%</span>
              </div>
              <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
                Start Now
              </button>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                    <svg className="w-5 h-5 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                More Features <span className="text-blue-500">→</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}