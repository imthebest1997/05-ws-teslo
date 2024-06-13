import { useContext, useState } from "react";
import { SocketContext } from "../context/SocketContext";

export default function TokenForm() {
    const [value, setValue] = useState("");
    const { socket, connectSocket } = useContext(SocketContext);

    const btnConnect = document.querySelector<HTMLButtonElement>("#btn-connect");
    const tokenInput = document.querySelector<HTMLInputElement>("#token-input");

    btnConnect?.addEventListener("click", () => {
        if( tokenInput!.value.trim().length <= 0 ) return window.alert("Token is required");
        connectSocket( tokenInput!.value );
    });

    const handleSubmitForm = (ev: React.FormEvent<HTMLFormElement>)=>{
        ev.preventDefault();
        if(value.trim().length <= 0) return window.alert("Token is required");
        connectSocket( value );            
    }


    return (
        <div className="col-md-12 d-flex justify-content-center mb-5">
            <form onSubmit = {handleSubmitForm} className="row g-2">
                <div className="col-auto">
                    <input 
                        type="text"  
                        value={value}
                        onChange={(ev) => setValue(ev.target.value)}
                        placeholder="JWT token"
                        id="token-input" 
                        className="form-control form-control-sm"
                    />
                </div>
                <div className="col-auto">
                    <button 
                        type="submit" 
                        className="btn btn-sm btn-primary"
                        id="btn-connect"
                    >Send token</button>
                </div>
            </form>
        </div>
    )


}
