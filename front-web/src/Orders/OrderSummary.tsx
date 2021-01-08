import { formatPrice } from "./helpers";
import { OrderSummaryProps } from "./types";

const OrderSummary = ({
    amount,
    totalPrice,
    onSubmit
}: OrderSummaryProps) => {

    return (
        <div className="order-summary-container">
            <div className="order-summary-content">
                <div>
                    <span className="amount-selected-container">
                        <b className="amount-selected">
                            {amount}
                        </b>
                    PEDIDOS SELECIONADOS
                </span>
                    <span className="order-summary-total">
                        <b className="amount-selected">
                            {formatPrice(totalPrice)}
                        </b>
                    VALOR TOTAL
                </span>
                </div>
                <button onClick={onSubmit} className="order-summary-make-order">
                    FAZER PEDIDO
                </button>
            </div>
        </div>
    );
}

export default OrderSummary;
