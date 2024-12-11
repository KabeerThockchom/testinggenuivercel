'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

interface AccountViewProps {
  balance: number;
  currency: string;
  recentTransactions: Array<{
    date: string;
    description: string;
    amount: number;
  }>;
}

export function AccountView({ balance, currency, recentTransactions }: AccountViewProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl p-6 bg-gradient-to-br from-blue-600 to-blue-800 text-white max-w-[500px]">
      <div className="flex justify-between items-center">
        <div className="text-sm opacity-80">Available Balance</div>
        <div className="text-3xl font-semibold">
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency
          }).format(balance)}
        </div>
      </div>
      
      <div className="mt-4">
        <div className="text-sm mb-2 opacity-80">Recent Transactions</div>
        <div className="space-y-2">
          {recentTransactions.map((tx, index) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              key={tx.date + tx.description}
              className="flex justify-between items-center bg-white/10 p-3 rounded-lg"
            >
              <div>
                <div className="font-medium">{tx.description}</div>
                <div className="text-sm opacity-80">{tx.date}</div>
              </div>
              <div className={tx.amount > 0 ? 'text-green-300' : 'text-white'}>
                {tx.amount > 0 ? '+' : ''}{tx.amount} {currency}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}