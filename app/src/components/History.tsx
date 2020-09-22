import React from 'react';
import { Button, Grid, Icon, Table } from 'semantic-ui-react';

interface Props { 
    // message: string 
}; 
export const History: React.FC<Props> = ({ 
    // message
}) => (
  <Table celled striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Entered</Table.HeaderCell>
        <Table.HeaderCell>Function</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell collapsing>9/22</Table.Cell>
        <Table.Cell>4+4=8</Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell collapsing>9/22</Table.Cell>
        <Table.Cell>4+4=8</Table.Cell>
      </Table.Row>
      <Table.Row>
      <Table.Cell collapsing>9/22</Table.Cell>
        <Table.Cell>4+4=8</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
);