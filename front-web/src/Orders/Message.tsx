import { MessageProps } from "./types";

const Message = ({ message }: MessageProps) => {
    return (
        <div className="order-summary-container">
            <div className="order-summary-content">
                <span className="amount-selected-container">
                    <span className="amount-selected">
                        {message}
                    </span>
                </span>
            </div>
        </div>
    );
}

export default Message;
