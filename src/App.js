import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Connect from './Pages/Connect';
import Connected from './Pages/Connected';

const socket = io('https://dev.digitro.com',{ 
  transports: ['websocket', 'polling', 'flashsocket'],
  path: "/callcontrol", 
  reconnectionAttempts: 3,
  timeout: 2000
});

function App() {

  const [isConnected, setIsConnected] = useState(socket.connected);
  const [user, setUser] = useState([])
  const [calles, setCalles] = useState([])

  useEffect(() => {

    //evento conexão sucesso
    socket.on('USER_CONNECTED', () => {
      setIsConnected(true)
      console.log('conectado')
    });
    //evento conexão erro
    socket.on('USER_CONNECTION_ERROR', (event) => {
      setIsConnected(false)
      alert('Erro para se conectar.Erro: '+ event.error)
    });


    //evento desconect sucesso
    socket.on('USER_DISCONNECTED', () => {
      setIsConnected(false)
      console.log('desconectado')
    });
    //evento desconect ERRO
    socket.on('USER_DISCONNECTION_ERROR', (event) => {
      setIsConnected(true)
      alert('Erro para se desconectar.Erro: '+ event.error)
    });

    //evento nova CALL
    socket.on('NEW_CALL', (event) => {
      setCalles(calles => [...calles,event] );

      console.log('nova call recebida')
      console.log(calles)
    });
    //evento CALL encerrada com sucesso
    socket.on('CALL_ENDED', () => {
      console.log('call encerrada')
    });
    //evento CALL encerrada com erro
    socket.on('END_CALL_ERROR', (event) => {
      alert('Erro para encerrar a chamada. Erro: '+ event.error)
    });
    return () => {
      socket.off('USER_CONNECTED');
      socket.off('USER_CONNECTION_ERROR');
      socket.off('USER_DISCONNECTED');
      socket.off('USER_DISCONNECTION_ERROR');
      socket.off('NEW_CALL');
      socket.off('CALL_ENDED');
      socket.off('END_CALL_ERROR');
    };
  }, []);

  
  //evento conectar
  const requestConnect = (request) => {
    setUser(request)
    console.log (request);
    socket.connect();
    socket.emit("USER_CONNECT",{
        username: request[0],
        maxCalls: request[1],
      });
    
  }

  //evento desconectar
  const logout = () => {
    console.log(user[0])
    socket.emit("USER_DISCONNECT",{
      username: user[0],
    })
    setIsConnected(false)

  }
  //evento finaliza call
  const finishCall = (callId) => {
    removeCall(callId)
    socket.emit("END_CALL",{
      callId: callId
    });
  }  
  //remove in array
  const removeCall = (id) => {
    setCalles((prevState) =>
      prevState.filter((prevItem) => prevItem.callId !== id)
    );
  };

  if(isConnected){
    return (
      <div className="App">
        <Connected logout={logout} user={user} calles={calles} finishCall={finishCall}/>
      </div>
    );
  }else{
    return(
      <div className="App">
        <Connect requestConnect={requestConnect}/>
      </div>
    )
  }
}

export default App;
