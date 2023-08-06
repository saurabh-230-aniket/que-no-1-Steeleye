import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

const List = ({ rows, setOrder }) => {
  const onTableCellClick = (row) => {
    console.log(row);
    setOrder.setSelectedOrderDetails({
      buySellIndicator: row.executionDetails.buySellIndicator,
      orderStatus: row.executionDetails.orderStatus,
      orderType: row.executionDetails.orderType,
    });
    setOrder.setSelectedOrderTimeStamps(row.timestamps);
  };

  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>S. No</ListHeaderCell>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>{`Order volume / ${rows[0]?.currency}`}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <ListRow key={index} onClick={() => onTableCellClick(row)}>
            {/* data set contains hash and key which can be used as key but it seems in the 
          provided dataset the hash and key are not unique so can not be used as key. 
          Instead index is used as key */}
            <ListRowCell>{index + 1}</ListRowCell>
            <ListRowCell>{row["&id"]}</ListRowCell>
            <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
            <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
            <ListRowCell>
              {new Date(row.timestamps.orderSubmitted).toDateString()}
            </ListRowCell>
            <ListRowCell>
              {row.bestExecutionData.orderVolume[row.currency]}
            </ListRowCell>
          </ListRow>
        ))}
        {rows.length === 0 && (
          <tr>
            <td colSpan={6} style={{ padding: "1rem", textAlign: "center" }}>
              No data found
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default List;
