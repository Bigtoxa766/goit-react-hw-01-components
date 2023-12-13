import PropTypes from 'prop-types';
import { TableHeadItem, TableHist, TableItem } from "./TransactionHistory.styled";


export const TransactionHistory = ({ items }) => {

  return (
    <TableHist className="transaction-history">
      <thead>
        <tr>
          <TableHeadItem>Type</TableHeadItem>
          <TableHeadItem>Amount</TableHeadItem>
          <TableHeadItem>Currency</TableHeadItem>
        </tr>
      </thead>

      <tbody>
        {items.map(({ type, amount, currency, id }) => {
          return (
            <tr key={id}>
              <TableItem>{type}</TableItem>
              <TableItem>{amount}</TableItem>
              <TableItem>{currency}</TableItem>
            </tr>
          )
        })}
      </tbody>
    </TableHist>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape).isRequired,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
}