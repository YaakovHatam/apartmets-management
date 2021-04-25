

function TicketForm(props) {
   const submitTicket = e => {
      e.preventDefault();

      fetch(`http://localhost:4567/ticket/${props.tenantId}`, {
         method: 'POST',
         headers: {
            'Content-type': 'application/json'
         },
         body: JSON.stringify(Object.fromEntries(new FormData(e.target)))
      }).then(res => res.text()).then(res => alert('your ticket id is ' + res));
   }

   return <form onSubmit={submitTicket}>
      <label>problem: <input name="problem" required={true} /></label>
      <button>Send ticket</button>
   </form>
}

export default TicketForm;