import { useState, useCallback } from 'react';

export function useFormattedNumber(initialValue: string = '') {
  const [value, setValue] = useState(initialValue);
  const [formattedValue, setFormattedValue] = useState('');

  const formatNumber = useCallback((val: string) => {
    // Remove any non-digit characters
    const numberOnly = val.replace(/\D/g, '');
    
    // Convert to number and format with commas
    const formatted = Number(numberOnly).toLocaleString('en-US');
    
    // Handle empty or invalid input
    return numberOnly === '' ? '' : formatted;
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const numberOnly = newValue.replace(/\D/g, '');
    
    setValue(numberOnly);
    setFormattedValue(formatNumber(numberOnly));
  }, [formatNumber]);

  return {
    value,
    formattedValue,
    handleChange,
  };
}