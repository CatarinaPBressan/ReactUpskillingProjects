import { calculateInvestmentResults } from "../util/investment";
import ResultRow from "./ResultRow";

export default function ResultTable({ investmentParams }) {
  const investmentResults = calculateInvestmentResults(investmentParams);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {investmentResults.map((result) => (
          <ResultRow key={result.year} result={result} />
        ))}
      </tbody>
    </table>
  );
}
