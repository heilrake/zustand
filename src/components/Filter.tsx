import { Button, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import { useFilterStore } from '../store';

const Filter: FC = () => {
  const { filter, setFilter } = useFilterStore();

  return (
    <Stack spacing={2} direction="row" mt="8">
      <Button isDisabled={filter === 'all'} onClick={() => setFilter('all')}>
        All
      </Button>
      <Button isDisabled={filter === 'uncompleted'} onClick={() => setFilter('uncompleted')}>
        Not completed
      </Button>
      <Button isDisabled={filter === 'completed'} onClick={() => setFilter('completed')}>
        Completed
      </Button>
    </Stack>
  );
};

export default Filter;
