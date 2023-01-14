import React, { Component } from 'react';

class PaymentMethod extends Component { // componente métofo de pagamento
  render() {
    return (
      <fieldset>
        <legend>Método de Pagmento</legend>
        <p>
          Boleto
          <input name="payment" type="radio" data-testid="ticket-payment" />
        </p>
        <p>
          Cartão de Cŕedito
          <input name="payment" type="radio" data-testid="visa-payment" />
          <input name="payment" type="radio" data-testid="master-payment" />
          <input name="payment" type="radio" data-testid="elo-payment" />
        </p>

      </fieldset>
    );
  }
}

export default PaymentMethod;
