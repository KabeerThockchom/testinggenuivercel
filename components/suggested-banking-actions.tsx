'use client';

import { motion } from 'framer-motion';
import { Button } from './ui/button';

const bankingActions = [
  {
    title: 'Check Balance',
    label: 'View account & transactions',
    action: 'Can you show me my account balance and recent transactions?'
  },
  {
    title: 'Apply for Loan',
    label: 'Start loan application',
    action: 'I would like to apply for a loan. Can you help me with the application?'
  },
  {
    title: 'New Account',
    label: 'Open a new account',
    action: 'I want to open a new bank account. What are my options?'
  }
];

export function SuggestedBankingActions({ append }: { append: (message: { role: string; content: string }) => void }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {bankingActions.map((action, index) => (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          key={action.title}
        >
          <Button
            variant="outline"
            className="w-full h-auto flex flex-col items-start p-4 gap-1"
            onClick={() => {
              append({
                role: 'user',
                content: action.action
              });
            }}
          >
            <span className="font-medium">{action.title}</span>
            <span className="text-sm text-gray-500">{action.label}</span>
          </Button>
        </motion.div>
      ))}
    </div>
  );
} 