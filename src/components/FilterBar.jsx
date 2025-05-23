import React from 'react';
import { SearchIcon } from 'lucide-react';
export const FilterBar = ({
  onSearch,
  onFilterChange,
  filters
}) => {
  const handleSearchChange = e => {
    onSearch(e.target.value);
  };
  return <div className="flex gap-2">
      <div className="relative">
        <input type="text" placeholder="Search" className="pl-9 pr-4 py-2 border border-gray-300 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={handleSearchChange} />
        <div className="absolute left-3 top-2.5 text-gray-400">
          <SearchIcon size={18} />
        </div>
      </div>
      <FilterDropdown label="Filter By State" options={['New Jersey', 'Alaska', 'Other']} value={filters.state} onChange={value => onFilterChange('state', value)} />
      <FilterDropdown label="Filter By Order Type" options={['Entity Formation', 'Annual Report', 'Certificate Of Good Standing']} value={filters.orderType} onChange={value => onFilterChange('orderType', value)} />
      <FilterDropdown label="Filter By Status" options={['Draft', 'In Progress', 'Completed', 'Created']} value={filters.status} onChange={value => onFilterChange('status', value)} />
      <FilterDropdown label="Filter By Payment Status" options={['Paid', 'Unpaid', 'Pending']} value={filters.paymentStatus} onChange={value => onFilterChange('paymentStatus', value)} />
      <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
        Filter
      </button>
      <button className="px-4 py-2 border border-gray-300 rounded-md">
        Clear Filter
      </button>
    </div>;
};
const FilterDropdown = ({
  label,
  options,
  value,
  onChange
}) => {
  return <div>
      <select className="pl-2  px-6 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400" value={value} onChange={e => onChange(e.target.value)}>
        <option value="">{label}</option>
        {options.map((option, index) => <option key={index} value={option}>
            {option}
          </option>)}
      </select>
    </div>;
};