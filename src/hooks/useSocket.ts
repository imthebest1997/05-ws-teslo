import { useEffect, useMemo, useState } from "react";

import { io } from "socket.io-client"

export const useSocket = (serverPath: string) => {

    console.log({serverPath});
    const socket = useMemo( () => 
        io(serverPath ,{
            transports: ["websocket"]
        }), [serverPath]
    );

    const [online, setOnline] = useState(false);

    //Establecer estado de conexion
    useEffect(()=>{
        setOnline(socket.connected);
    }, [socket]);

    //Escuchamos cuando nos conectamos
    useEffect(()=>{
        socket.on("connect", () => {
            setOnline(true);
        });
        // return socket.disconnect();
    }, [socket]);

    //Escuchamos cuando nos desconectamos
    useEffect(()=>{
        socket.on("disconnect", () => {
            setOnline(false);
        });
    }, [socket]);
    
    
    return {
        socket,
        online
    };
}
