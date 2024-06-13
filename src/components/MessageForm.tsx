import { useContext, useState } from "react";
import { SocketContext } from "../context/SocketContext";

export const MessageForm = () => {

    const [value, setValue] = useState("");
    const { socket } = useContext(SocketContext);


    const handleSubmitForm = (ev: React.FormEvent<HTMLFormElement>)=>{
        ev.preventDefault();
        if(!socket) return;
        if(value.trim().length > 0){
            socket.emit("message-from-client", {
                id: socket.id,
                message: value
            });
            setValue("");
        }
    }


    return (
        <div className="col-md-6">
            <form onSubmit = {handleSubmitForm}>
                <input 
                    type="text"  
                    value={value}
                    onChange={(ev) => setValue(ev.target.value)}
                    placeholder="Message"
                    id="message-input" 
                    className="form-control form-control-sm"
                />
            </form>
        </div>
    )
}
