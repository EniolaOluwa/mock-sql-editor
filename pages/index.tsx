import { useState, useEffect, useMemo } from 'react';
import type { NextPage } from 'next';
import PageMeta from '../components/PageMeta';
import ResultTable from '../components/ResultTable';
import NewQueryModal from '../components/NewQueryModal';
import { Select, Button, useDisclosure } from '@chakra-ui/react';

const Home: NextPage = () => {
  const [currentQuery, setCurrentQuery] = useState<string | null>(null);
  const [queryData, setQueryData] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const tableHeaders = useMemo(() => queryData.length && Object.keys(queryData[0]), [queryData]);

  useEffect(() => {
    fetch(`../data/${currentQuery}.json`)
      .then((res) => res.json())
      .then((data) => setQueryData(data.result));
  }, [currentQuery]);

  return (
    <div>
      <PageMeta />

      <main data-testid='main--screen'>
        <Select onChange={(val) => setCurrentQuery(val.target.value)}>
          <option value='usersOlderThanFifty'>Older than 50</option>
          <option value='usersWithHomeAndCar'>With homes and cars</option>
          <option value='usersUsingAppleDevicies'>Using apple devices</option>
        </Select>

        <Button onClick={onOpen}>Add A New Query</Button>

        <NewQueryModal isOpen={isOpen} onClose={onClose} />

        <ResultTable tableHeaders={tableHeaders || []} queryData={queryData} />
      </main>
    </div>
  );
};

export default Home;
