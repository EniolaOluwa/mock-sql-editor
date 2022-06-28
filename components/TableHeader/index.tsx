import React from 'react';
import { Thead, Tr, Th } from '@chakra-ui/react';

interface Props {
  tableHeaders: string[];
}

const TableHeader: React.FC<Props> = ({ tableHeaders }) => {
  return (
    <Thead>
      <Tr>
        {tableHeaders.map((item, index) => (
          <Th key={`${index}-${item}`}>{item}</Th>
        ))}
      </Tr>
    </Thead>
  );
};

export default TableHeader;
