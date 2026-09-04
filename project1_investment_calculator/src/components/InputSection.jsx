import InvestmentInput from "./InvestmentInput";

export default function InputSection({ defaultValues, onInputChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <InvestmentInput
          label="Initial Investment"
          inputId="initialInvestment"
          defaultValue={defaultValues.initialInvestment}
          onChange={onInputChange}
        />
        <InvestmentInput
          label="Annual Investment"
          inputId="annualInvestment"
          defaultValue={defaultValues.annualInvestment}
          onChange={onInputChange}
        />
      </div>
      <div className="input-group">
        <InvestmentInput
          label="Expected Return"
          inputId="expectedReturn"
          defaultValue={defaultValues.expectedReturn}
          decimal
          onChange={onInputChange}
        />
        <InvestmentInput
          label="Duration"
          inputId="duration"
          defaultValue={defaultValues.duration}
          onChange={onInputChange}
        />
      </div>
    </section>
  );
}
