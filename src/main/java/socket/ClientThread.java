package socket;

import java.net.Socket;

public class ClientThread extends Thread{

    private Socket socket=null;

    public ClientThread(Socket socket){
        this.socket = socket;
    }



    public void run () {

    }
}
