import { CheckIcon, Combobox, Group, Pill, PillsInput, useCombobox, Checkbox } from '@mantine/core';
import { useState } from 'react';
import { IconSearch, IconSelector } from '@tabler/icons-react';
import { useEffect } from 'react';

const groceries = ['🍎 Apples', '🍌 Bananas', '🥦 Broccoli', '🥕 Carrots', '🍫 Chocolate'];

const MultiSelectCreatable = (props: any) => {
  useEffect(() => {
    setData(props.options);
  }, []);
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const [search, setSearch] = useState('');
  const [data, setData] = useState(groceries);
  const [value, setValue] = useState<string[]>([]);

  const exactOptionMatch = data.some((item) => item === search);

  const handleValueSelect = (val: string) => {
    setSearch('');

    if (val === '$create') {
      setData((current) => [...current, search]);
      setValue((current) => [...current, search]);
    } else {
      setValue((current) =>
        current.includes(val) ? current.filter((v) => v !== val) : [...current, val]
      );
    }
  };

  const handleValueRemove = (val: string) =>
    setValue((current) => current.filter((v) => v !== val));

  const values = value.map((item) => (
    <Pill key={item} withRemoveButton onRemove={() => handleValueRemove(item)}>
      {item}
    </Pill>
  ));

  const morePill = value.length > 1 ? <Pill>{value.length - 1} more</Pill> : null;

  const options = data
    .filter((item) => item.toLowerCase().includes(search.trim().toLowerCase()))
    .map((item) => (
      <Combobox.Option
        value={item}
        key={item}
        active={value.includes(item)}
      >
        <Group gap="sm">
          <Checkbox
            checked={value.includes(item)}
            onChange={() => {}}
            tabIndex={-1}
            style={{ pointerEvents: 'none' }}
          />
          <span>{item}</span>
        </Group>
      </Combobox.Option>
    ));

  return (
    <Combobox store={combobox} onOptionSubmit={handleValueSelect} withinPortal={false}>
      <Combobox.DropdownTarget>
        <PillsInput
          variant='unstyled'
          rightSection={<IconSelector />}
          onClick={() => combobox.toggleDropdown()} // Changed to toggleDropdown
          leftSection={
            <div className="text-bright-sun-400 p-1 bg-mine-shaft-900 rounded-full">
              <props.icon/>
            </div>
          }
        >
          {/* CORRECTED Pill.Group structure */}
          <Pill.Group>
            {value.length > 0 && (
              <>
                {/* Display only the first selected pill */}
                <Pill key={value[0]} withRemoveButton onRemove={() => handleValueRemove(value[0])}>
                  {value[0]}
                </Pill>
                {/* Display "+X" pill if more than one item is selected */}
                {value.length > 1 && (
                  <Pill>+{value.length - 1}</Pill>
                )}
              </>
            )}

            {/* This is the crucial part that allows typing directly in the PillsInput */}
            
            {props.title}
                
          </Pill.Group>
        </PillsInput>
      </Combobox.DropdownTarget>

      <Combobox.Dropdown>
        <Combobox.Search
          value={search}
          onChange={(event) => setSearch(event.currentTarget.value)}
          placeholder="Search groceries"
        />
        <Combobox.Options>
          {options}

          {!exactOptionMatch && search.trim().length > 0 && (
            <Combobox.Option value="$create">+ Create {search}</Combobox.Option>
          )}

          {options.length === 0 && !exactOptionMatch && search.trim().length > 0 && (
            <Combobox.Empty>No items match your search. Create one?</Combobox.Empty>
          )}
          {options.length === 0 && !search.trim().length && (
            <Combobox.Empty>No options available.</Combobox.Empty>
          )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  );
}
export default MultiSelectCreatable;