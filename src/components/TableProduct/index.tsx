import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button
} from '@chakra-ui/react'
import data from '../../data.json';

const useSortableData = (items:any, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

export default function TableProduct()  {
  let products = data.products;

  const { items, requestSort, sortConfig } = useSortableData(products);
  const getClassNamesFor = (name:any) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
  <TableContainer background="#a9e4cf" borderRadius={4}>
    <Table variant='striped'>
      <TableCaption>Produtos</TableCaption>
      <Thead>
        <Tr>
          <Th><Button
              type="button"
              colorScheme='teal' variant='ghost'
              onClick={() => requestSort('name')}
              className={getClassNamesFor('name')}
            >
              Nome
            </Button></Th>
          <Th><Button
              colorScheme='teal' variant='ghost'
              type="button"
              onClick={() => requestSort('price')}
              className={getClassNamesFor('price')}
            >
              Preço
            </Button></Th>
          <Th ><Button
              colorScheme='teal' variant='ghost'
              type="button"
              onClick={() => requestSort('stock')}
              className={getClassNamesFor('stock')}
            >
              Estoque
            </Button></Th>
        </Tr>
      </Thead>
      <Tbody>
      {items.map((item) => (
          <Tr key={item.id}>
            <Td>{item.name}</Td>
            <Td>R${item.price}</Td>
            <Td>{item.stock}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  </TableContainer>
  );
};

