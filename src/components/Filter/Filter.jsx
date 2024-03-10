import Select from 'react-select';
import Notiflix from 'notiflix';
import { useState } from 'react';
import Button from 'components/Button/Button';
import {
  Container,
  Form,
  InputContainer,
  InputLeft,
  InputRight,
  Label,
  SelectContainer,
  SpanLeft,
  SpanRight,
  customSelectStyles,
  customSelectStylesForPriceSelect,
} from './Filter.styled';

export default function Filter({ makes, prices, onFilterChange }) {
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedPriceStep, setSelectedPriceStep] = useState(null);
  const [selectedPriceLabel, setSelectedPriceLabel] = useState('');
  const [minValue, setMinValue] = useState('');
  const [maxValue, setMaxValue] = useState('');

  const makeOptions = makes.map(make => ({ value: make, label: make }));

  const priceRangeOptions = [];
  for (let i = 30; i <= 500; i += 10) {
    priceRangeOptions.push({ value: i, label: `${i}` });
  }

  const handlePriceStepChange = selectedOption => {
    if (selectedOption) {
      setSelectedPriceStep(selectedOption.value);
      setSelectedPriceLabel(selectedOption.label);
    } else {
      setSelectedPriceStep(null);
      setSelectedPriceLabel('');
    }
  };

  const filteredPrices = prices.filter(price => price <= selectedPriceStep);

  const formatMileage = value => {
    const cleanedValue = value.toString().replace(/,/g, '');
    const formattedValue = cleanedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return formattedValue;
  };

  const handleMinInputChange = e => {
    setMinValue(e.target.value);
  };

  const handleMaxInputChange = e => {
    setMaxValue(e.target.value);
  };

  const handleFilterClick = () => {
    // Перевірка, чи хоча б один параметр пошуку був вибраний або введений
    if (!selectedMake && !selectedPriceStep && !minValue && !maxValue) {
      Notiflix.Notify.info('Please select at least one filter option');
      return;
    }

    // Перевірка на коректність введення мінімального та максимального пробігу
    if (minValue && isNaN(parseInt(minValue.replace(/,/g, ''), 10))) {
      Notiflix.Notify.info('Invalid minimum mileage value');
      return;
    }

    if (maxValue && isNaN(parseInt(maxValue.replace(/,/g, ''), 10))) {
      Notiflix.Notify.info('Invalid maximum mileage value');
      return;
    }

    // Перевірка, чи максимальний пробіг не менше мінімального
    if (
      minValue &&
      maxValue &&
      parseInt(minValue.replace(/,/g, ''), 10) >
        parseInt(maxValue.replace(/,/g, ''), 10)
    ) {
      Notiflix.Notify.Failure(
        'The maximum mileage must exceed the minimum mileage.'
      );
      return;
    }

    // Виконання пошуку, якщо усі перевірки пройдено успішно
    const newFilters = {
      make: selectedMake,
      filteredPrices: filteredPrices.map(price => ({
        value: price,
        label: `${price}`,
      })),
      minMileage: minValue ? parseInt(minValue.replace(/,/g, ''), 10) : null,
      maxMileage: maxValue ? parseInt(maxValue.replace(/,/g, ''), 10) : null,
    };

    onFilterChange(newFilters);
  };

  return (
    <Container>
      <SelectContainer>
        {/* <Label htmlFor="nameSelect">Car brand</Label> */}
        <Label>Car brand</Label>
        <Select
          id="nameSelect"
          placeholder="Enter the text"
          value={selectedMake}
          isClearable={true}
          onChange={selectedOption => setSelectedMake(selectedOption)}
          options={makeOptions}
          styles={customSelectStyles}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </SelectContainer>

      <SelectContainer>
        {/* <Label htmlFor="priceSelect">Price / 1 hour</Label> */}
        <Label>Price / 1 hour</Label>
        <Select
          id="priceSelect"
          placeholder="To $"
          value={
            selectedPriceStep
              ? { value: selectedPriceStep, label: selectedPriceLabel }
              : null
          }
          isClearable={true}
          onChange={handlePriceStepChange}
          options={priceRangeOptions}
          styles={customSelectStylesForPriceSelect}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      </SelectContainer>

      <Form>
        <Label>Car mileage / km</Label>
        <InputContainer>
          <InputLeft
            type="text"
            value={formatMileage(minValue)}
            onChange={handleMinInputChange}
          />
          <SpanLeft>From</SpanLeft>
          <InputRight
            type="text"
            value={formatMileage(maxValue)}
            onChange={handleMaxInputChange}
          />
          <SpanRight>To</SpanRight>
        </InputContainer>
      </Form>
      <Button
        text="Search"
        onClick={handleFilterClick}
        width="135px"
        height="48px"
        disabled={
          !(selectedMake || selectedPriceStep || minValue || maxValue) ||
          (minValue !== '' &&
            isNaN(parseInt(minValue.replace(/,/g, ''), 10))) ||
          (maxValue !== '' &&
            isNaN(parseInt(maxValue.replace(/,/g, ''), 10))) ||
          (minValue &&
            maxValue &&
            parseInt(minValue.replace(/,/g, ''), 10) >
              parseInt(maxValue.replace(/,/g, ''), 10))
        }
      />
    </Container>
  );
}
