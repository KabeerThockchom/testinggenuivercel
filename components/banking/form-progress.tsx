'use client';

import { motion } from 'framer-motion';

interface FormProgressProps {
  currentStep: number;
  totalSteps: number;
  completedFields: number;
  formType: 'account' | 'loan' | 'credit';
}

export function FormProgress({ 
  currentStep, 
  totalSteps, 
  completedFields,
  formType 
}: FormProgressProps) {
  const progress = (currentStep / totalSteps) * 100;
  
  return (
    <div className="flex flex-col gap-4 rounded-2xl p-6 bg-white shadow-lg max-w-[500px]">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-lg capitalize">
          {formType} Application
        </h3>
        <span className="text-sm text-gray-500">
          Step {currentStep} of {totalSteps}
        </span>
      </div>

      <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          className="absolute h-full bg-blue-600 rounded-full"
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="text-sm text-gray-600">
        {completedFields} fields completed
      </div>
    </div>
  );
} 