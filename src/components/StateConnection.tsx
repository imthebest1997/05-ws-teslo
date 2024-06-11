interface StateConnectionProps {
  online: boolean;
}

export const StateConnection = ({online}: StateConnectionProps) => {
  return (
    <p><b> Estado: </b>
        {
            online
            ? <span className="text-success"> Online</span>
            : <span className="text-danger"> Offline</span>
        }           
    </p>                      

  )
}
