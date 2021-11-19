import Pusher from "pusher-js";

export const initPosition = () => {
    const pusher = new Pusher('368963ad98d57e49870b', {
        cluster: 'ap1'
      }); 
  
      const channel = pusher.subscribe('my-pusher');
      channel.bind('App\\Events\\NewMessage', function(response) {
        return (dispatch) => {
            dispatch({type: 'UPDATE_POSITION', payload: response.data});
        }
      });
}