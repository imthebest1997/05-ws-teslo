import { Socket } from "socket.io-client";

export function handleClientsUpdated(socket: Socket) {
    socket.on("clients-updated", (idClients: string[]) => {
        let clientesUl = document.getElementById("clientes-ul");
        clientesUl!.innerHTML = "";
        idClients.forEach((idClient:string) => {
            let clienteLi = document.createElement("li");
            clienteLi.innerText = idClient;
            clientesUl!.append(clienteLi);
        });
    });
}

export function handleMessageFromServer(socket: Socket){
    socket.on("message-from-server", (payload: { fullName: string, message: string }) => {
        const newMessage = `
            <li>
                <strong> ${ payload.fullName } </strong>
                <span> ${ payload.message } </span>
            </li>
        `;

        const li = document.createElement("li");
        li.innerHTML = newMessage;

        const messagesUl = document.getElementById("messages-ul");
        messagesUl!.append(li);
    });
}