import React from 'react';
import { Tr, Td, Table, Tbody, TableContainer } from '@chakra-ui/react';
import TableHeader from '../TableHeader';

interface Props {
  tableHeaders: string[];
  queryData: Record<string, string | number | boolean>[];
}
const extractValuesToTable = (obj: Record<string, string | number | boolean>) => (
  <Tr>
    {Object.values(obj).map((item, index) => (
      <Td key={`${index}-${item}`}>{item}</Td>
    ))}
  </Tr>
);

const ResultTable: React.FC<Props> = ({ tableHeaders, queryData }) => {
  return (
    <TableContainer>
      {queryData.length > 0 ? (
        <Table variant='striped'>
          {tableHeaders && <TableHeader tableHeaders={tableHeaders} />}
          <Tbody>{queryData.map((obj) => extractValuesToTable(obj))}</Tbody>
        </Table>
      ) : (
        'Null'
      )}
    </TableContainer>
  );
};

export default ResultTable;
