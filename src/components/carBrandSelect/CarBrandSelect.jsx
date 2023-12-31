import React, { forwardRef, useState } from 'react';
import { useCarBrands } from '../../hooks/useCarBrands';
import { CarBrandSelectWrapper } from './CarBrandSelect.styled';
import Select from 'react-select';
import { customBrandSelect } from '../../helpers/customBrandSelect';

export const CarBrandSelect = forwardRef(({ id, label, ...rest }, ref) => {
  const carBrands = useCarBrands();

  const options = carBrands.map(({ value, label }) => ({ value, label }));

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const customStyles = {
    ...customBrandSelect,
    dropdownIndicator: (provided, state) => ({
      ...provided,
      transform: isMenuOpen ? 'rotate(180deg)' : 'none',
      transition: 'transform 0.3s ease',
    }),
  };

  return (
    <CarBrandSelectWrapper>
      <label htmlFor={id}>{label}</label>
      <Select
        id="brandSelect12"
        ref={ref}
        options={options}
        placeholder="Enter the text"
        isSearchable
        isClearable
        onMenuOpen={handleMenuOpen}
        onMenuClose={handleMenuClose}
        styles={customStyles}
        {...rest}
      />
    </CarBrandSelectWrapper>
  );
});
