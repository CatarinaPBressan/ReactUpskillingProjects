import { formatter } from "../util/investment";

export default function ResultRow({ result }) {
  return (
    <tr>
      <td>{result.year}</td>
      <td>{formatter.format(result.valueEndOfYear)}</td>
      <td>{formatter.format(result.interest)}</td>
      <td>{formatter.format(result.totalInterest)}</td>
      <td>{formatter.format(result.investedCapital)}</td>
    </tr>
  );
}
