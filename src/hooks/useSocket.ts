import { useEffect, useState, useCallback } from "react";
import { io, Socket } from "socket.io-client";

export const useSocket = (serverPath: string) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [online, setOnline] = useState(false);

  const connectSocket = useCallback((data:string) => {
    const newSocket = io(serverPath, {
      transports: ["websocket"],
      auth: {
        token: data
      }
    });
    setSocket(newSocket);
  }, [serverPath]);

  useEffect(() => {
    if (!socket) return;

    setOnline(socket.connected);

    socket.on("connect", () => {
      console.log("Socket online");
      setOnline(true);
    });

    socket.on("disconnect", () => {
      console.log(socket);
      setOnline(false);
    });

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return {
    socket,
    online,
    connectSocket
  };
};
